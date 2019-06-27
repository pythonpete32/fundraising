const deployKit = require('./deploy_kit.js')

// Make sure that you have deployed ENS and APM and that you set the first one in `ENS` env variable

async function deploy() {
  const network = process.argv[process.argv.findIndex(arg => arg === '--network' || arg === '--environment') + 1]

  const deployConfig = {
    artifacts,
    network,
    kitName: 'kit-aragon-fundraising',
    kitContractName: 'FundraisingKit',
    returnKit: true,
  }

  const { address } = await deployKit(null, deployConfig)
  console.log(address)
}

module.exports = callback => {
  deploy()
    .then(() => callback())
    .catch(err => callback(err))
}