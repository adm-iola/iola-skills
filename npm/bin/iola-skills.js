#!/usr/bin/env node
"use strict";

const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");

const PACKAGE_NAME = "@iola_adm/iola-skills";
const REQUIRED_NODE = "22.5.0";
const DEFAULT_MCP_BASE_URL = "https://apiiola.yasg.ru";
const packageRoot = path.resolve(__dirname, "..", "..");
const skillsDir = path.join(packageRoot, "skills");

function parseVersion(version) {
  return String(version).replace(/^v/, "").split(".").map((part) => Number.parseInt(part, 10) || 0);
}

function compareVersions(left, right) {
  const a = parseVersion(left);
  const b = parseVersion(right);
  for (let index = 0; index < Math.max(a.length, b.length); index += 1) {
    const diff = (a[index] || 0) - (b[index] || 0);
    if (diff !== 0) return diff;
  }
  return 0;
}

function assertNode() {
  if (compareVersions(process.version, REQUIRED_NODE) >= 0) return;
  console.error(`Required Node.js >=${REQUIRED_NODE}. Installed: ${process.version}.`);
  process.exit(1);
}

function packageVersion() {
  return JSON.parse(fs.readFileSync(path.join(packageRoot, "package.json"), "utf8")).version;
}

function skillNames() {
  return fs.readdirSync(skillsDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && fs.existsSync(path.join(skillsDir, entry.name, "SKILL.md")))
    .map((entry) => entry.name)
    .sort();
}

function readSkillVersion(skillPath) {
  const file = path.join(skillPath, "SKILL.md");
  if (!fs.existsSync(file)) return null;
  const text = fs.readFileSync(file, "utf8");
  return text.match(/^version:\s*["']?([^"'\r\n]+)["']?/m)?.[1] || null;
}

function codexSkillsDir() {
  const home = os.homedir();
  if (!home) throw new Error("Cannot determine user home directory.");
  return path.join(home, ".codex", "skills");
}

function printHelp() {
  console.log(`IOLA Skills

Usage:
  iola-skills list
      List bundled skills

  iola-skills install codex [skill-name|all]
      Install skills to ~/.codex/skills

  iola-skills update codex [skill-name|all]
      Alias for install codex

  iola-skills doctor
      Check Node.js, bundled skills, Codex install path and public MCP diagnostics
`);
}

function listSkills(json = false) {
  const items = skillNames().map((name) => {
    const source = path.join(skillsDir, name);
    return { name, version: readSkillVersion(source), path: source };
  });
  if (json) console.log(JSON.stringify({ package: PACKAGE_NAME, version: packageVersion(), skills: items }, null, 2));
  else for (const item of items) console.log(`${item.name}\t${item.version}`);
}

function installCodex(target = "all") {
  const names = target === "all" ? skillNames() : [target];
  const available = new Set(skillNames());
  const destinationRoot = codexSkillsDir();
  fs.mkdirSync(destinationRoot, { recursive: true });

  const installed = [];
  for (const name of names) {
    if (!available.has(name)) throw new Error(`Unknown skill: ${name}. Available: ${[...available].join(", ")}`);
    const source = path.join(skillsDir, name);
    const destination = path.join(destinationRoot, name);
    fs.rmSync(destination, { recursive: true, force: true });
    fs.cpSync(source, destination, { recursive: true });
    installed.push({ name, version: readSkillVersion(source), path: destination });
  }

  console.log(JSON.stringify({ installed }, null, 2));
}

async function fetchJson(url) {
  const response = await fetch(url, { headers: { accept: "application/json" }, signal: AbortSignal.timeout(15_000) });
  const text = await response.text();
  if (!response.ok) throw new Error(`${response.status} ${response.statusText}: ${text.slice(0, 300)}`);
  return JSON.parse(text);
}

async function doctor() {
  const mcpBaseUrl = process.env.IOLA_MCP_BASE_URL || DEFAULT_MCP_BASE_URL;
  let diagnostics = null;
  let diagnosticsError = "";
  try {
    diagnostics = await fetchJson(`${mcpBaseUrl}/mcp-diagnostics`);
  } catch (error) {
    diagnosticsError = error instanceof Error ? error.message : String(error);
  }

  const installed = {};
  for (const name of skillNames()) {
    installed[name] = readSkillVersion(path.join(codexSkillsDir(), name));
  }

  const payload = {
    package: PACKAGE_NAME,
    package_version: packageVersion(),
    node: process.version,
    required_node: `>=${REQUIRED_NODE}`,
    bundled_skills: skillNames().map((name) => ({ name, version: readSkillVersion(path.join(skillsDir, name)) })),
    codex_skills_dir: codexSkillsDir(),
    codex_installed_versions: installed,
    mcp_base_url: mcpBaseUrl,
    mcp_status: diagnostics?.status || null,
    mcp_server_version: diagnostics?.version?.server_version || null,
    mcp_skill_version: diagnostics?.version?.skill_version || null,
    mcp_error: diagnosticsError,
    ok: Boolean(diagnostics && diagnostics.status === "ok"),
  };
  console.log(JSON.stringify(payload, null, 2));
  if (!payload.ok) process.exit(1);
}

async function main() {
  assertNode();
  const [command, target, skill = "all", ...rest] = process.argv.slice(2);
  if (!command || command === "--help" || command === "-h" || command === "help") {
    printHelp();
    return;
  }
  if (command === "list") {
    listSkills(rest.includes("--json") || target === "--json");
    return;
  }
  if (command === "install" || command === "update") {
    if (target !== "codex") throw new Error("Only Codex installation is supported: install codex [skill-name|all]");
    installCodex(skill || "all");
    return;
  }
  if (command === "doctor") {
    await doctor();
    return;
  }
  throw new Error(`Unknown command: ${command}`);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
