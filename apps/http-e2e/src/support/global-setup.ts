/* eslint-disable */
import * as child_process from 'node:child_process';
import * as process from 'node:process';

var __TEARDOWN_MESSAGE__: string;

module.exports = async function () {
  // Start services that that the app needs to run (e.g. database, docker-compose, etc.).
  console.log('\nSetting up...\n');

  child_process.execSync('docker-compose up -d', { stdio: 'inherit' });
  console.log('\nCompleted docker-compose up...\n');

  process.env.POSTGRE_DATABASE_URL =
    'postgresql://postgres:cheolcheol@localhost:5432/boilerplate?schema=public';
  process.env.USE_DOC = 'false';

  // Hint: Use `globalThis` to pass variables to global teardown.
  globalThis.__TEARDOWN_MESSAGE__ = '\nTearing down...\n';
};
