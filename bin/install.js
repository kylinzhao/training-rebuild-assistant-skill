#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const os = require('os');

const repoRoot = path.resolve(__dirname, '..');
const skillName = 'training-rebuild-assistant';
const targetRoot = path.join(os.homedir(), '.hermes', 'skills', 'wellness', skillName);
const targetSkill = path.join(targetRoot, 'SKILL.md');
const targetRefDir = path.join(targetRoot, 'references');
const targetSpec = path.join(targetRefDir, 'product-spec-v1.md');

function usage() {
  console.log(`Training Rebuild Assistant Skill installer

Usage:
  training-rebuild-assistant-skill install   Install into ~/.hermes/skills/wellness/${skillName}
  training-rebuild-assistant-skill check     Show target paths and current status
  training-rebuild-assistant-skill help      Show this help

Remote usage without npm publish:
  npx github:kylinzhao/training-rebuild-assistant-skill install
`);
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function copy(src, dest) {
  ensureDir(path.dirname(dest));
  fs.copyFileSync(src, dest);
}

function exists(p) {
  try {
    fs.accessSync(p);
    return true;
  } catch {
    return false;
  }
}

function check() {
  console.log(JSON.stringify({
    targetRoot,
    skillExists: exists(targetSkill),
    specExists: exists(targetSpec),
  }, null, 2));
}

function install() {
  const srcSkill = path.join(repoRoot, 'skill', 'SKILL.md');
  const srcSpec = path.join(repoRoot, 'docs', 'product-spec-v1.md');

  if (!exists(srcSkill) || !exists(srcSpec)) {
    console.error('Installer source files are missing.');
    process.exit(1);
  }

  ensureDir(targetRefDir);
  copy(srcSkill, targetSkill);
  copy(srcSpec, targetSpec);

  console.log(`Installed ${skillName} to:`);
  console.log(`- ${targetSkill}`);
  console.log(`- ${targetSpec}`);
  console.log('\nNext step: in Hermes, load or use the skill by name: training-rebuild-assistant');
}

const command = process.argv[2] || 'help';

if (command === 'install') {
  install();
} else if (command === 'check') {
  check();
} else {
  usage();
}
