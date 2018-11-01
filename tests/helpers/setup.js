const util = require('util')
const os = require('os')
const path = require('path')
const fs = require('fs-extra')
const puppeteer = require('puppeteer')
const ganache = require('ganache-cli')
const solc = require('solc')
const truffle = require('truffle-contract')

const DIR = path.join(os.tmpdir(), 'jest_puppeteer_global_setup')

// const exec = util.promisify(require('child_process').exec);

// Start Ganache
const ganachePromise = new Promise((resolve, reject) => {
  var server = ganache.server();
  server.listen(8545, (err, blockchain) => {
    if (err) {
      console.error(err)
    }
    return resolve(blockchain)
  });
})

// Compile Contracts

// Deploy Contracts

// Run the react app

module.exports = async () => {

  const blockchain = await ganachePromise

  const contracts = await compileContractsPromise

  const deployed = await deployContracts

  const runApp = await reactApp

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox'],
  })

  global.BROWSER = browser

  await fs.outputFile(path.join(DIR, 'wsEndpoint'), browser.wsEndpoint())
}
