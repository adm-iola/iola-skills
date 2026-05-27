"use strict";

const assert = require("node:assert/strict");
const { execFile } = require("node:child_process");
const { mkdtemp, rm } = require("node:fs/promises");
const os = require("node:os");
const path = require("node:path");
const test = require("node:test");

const bin = path.resolve(__dirname, "..", "bin", "iola-skills.js");

function run(args, env = {}) {
  return new Promise((resolve) => {
    execFile(process.execPath, [bin, ...args], {
      env: { ...process.env, ...env },
      timeout: 10_000,
    }, (error, stdout, stderr) => {
      resolve({ code: error?.code || 0, stdout, stderr });
    });
  });
}

test("list prints bundled skills", async () => {
  const result = await run(["list"]);

  assert.equal(result.code, 0);
  assert.match(result.stdout, /yoshkar-ola-open-data/);
  assert.match(result.stdout, /yoshkar-ola-mcp-client/);
  assert.match(result.stdout, /yoshkar-ola-schools/);
  assert.match(result.stdout, /yoshkar-ola-kindergartens/);
});

test("list --json returns package metadata", async () => {
  const result = await run(["list", "--json"]);

  assert.equal(result.code, 0);
  const payload = JSON.parse(result.stdout);
  assert.equal(payload.package, "@iola_adm/iola-skills");
  assert.ok(payload.skills.length >= 11);
});

test("install codex copies selected skill", async () => {
  const home = await mkdtemp(path.join(os.tmpdir(), "iola-skills-home-"));
  try {
    const result = await run(["install", "codex", "yoshkar-ola-open-data"], {
      HOME: home,
      USERPROFILE: home,
    });

    assert.equal(result.code, 0);
    const payload = JSON.parse(result.stdout);
    assert.equal(payload.installed[0].name, "yoshkar-ola-open-data");
  } finally {
    await rm(home, { recursive: true, force: true });
  }
});
