/* eslint-disable */

import * as child_process from 'node:child_process';

module.exports = async function () {
  // Put clean up logic here (e.g. stopping services, docker-compose, etc.).
  // Hint: `globalThis` is shared between setup and teardown.
  console.log(globalThis.__TEARDOWN_MESSAGE__);

  // docker-compose
  console.log('\ndocker-compose down...\n');
  child_process.exec('docker-compose down -v');
  console.log('\ndocker-compose down completed...\n');
};
