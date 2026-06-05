#!/usr/bin/env node
const fs = require('fs');
const fsp = require('fs').promises;
const path = require('path');

async function copyRecursive(src, dest) {
  const entries = await fsp.readdir(src, { withFileTypes: true });
  await fsp.mkdir(dest, { recursive: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      await copyRecursive(srcPath, destPath);
    } else {
      await fsp.copyFile(srcPath, destPath);
    }
  }
}

async function main() {
  try {
    const projectRoot = path.resolve(__dirname, '..');
    const clientDir = path.join(projectRoot, 'dist', 'client');
    const targetDir = path.join(projectRoot, 'dist');

    const exists = fs.existsSync(clientDir);
    if (!exists) {
      console.log('No dist/client directory found — nothing to copy.');
      process.exit(0);
    }

    console.log('Copying dist/client -> dist/ ...');
    await copyRecursive(clientDir, targetDir);
    console.log('Copy complete.');
  } catch (err) {
    console.error('Error copying client build to dist:', err);
    process.exit(1);
  }
}

main();
