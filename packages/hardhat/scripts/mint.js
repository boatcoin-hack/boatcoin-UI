/* eslint no-use-before-define: "warn" */
const fs = require("fs");
const chalk = require("chalk");
const { config, ethers } = require("hardhat");
const { utils } = require("ethers");
const R = require("ramda");
const ipfsAPI = require('ipfs-http-client');
const ipfs = ipfsAPI({host: 'ipfs.infura.io', port: '5001', protocol: 'https' })

const delayMS = 1000 //sometimes xDAI needs a 6000ms break lol 😅

const main = async () => {

  // ADDRESS TO MINT TO:
  const toAddress = "0xE41Bd2bb1EA7E75205fc87fe37A9374277918111"

  console.log("\n\n 🎫 Minting to "+toAddress+"...\n");

  const yourCollectible = await ethers.getContractAt('BoatNFT', fs.readFileSync("./artifacts/BoatNFT.address").toString())


  const jetSki = {
    "description": "Kawasaki JET SKI® ULTRA® 310LX",
    "external_url": "https://austingriffith.com/portfolio/paintings/",// <-- this can link to a page for the specific file too
    "image": "https://ipfs.io/ipfs/bafybeiebhxxgekchruydfrujbg6gw3eqj3cpny2d4zaz3y33hdczizb4ba/jetSki.mp4",
    "name": "JET SKI® ULTRA® 310LX",
    "attributes": [
       {
         "trait_type": "Type",
         "value": "Jet Ski"
       },
       {
         "trait_type": "Brand",
         "value": "Kawasaki"
       },
       {
         "trait_type": "Capacity(Person)",
         "value": 2
       }
    ]
  }
  console.log("Uploading Jet Ski...")
  const uploaded = await ipfs.add(JSON.stringify(jetSki))

  console.log("Minting buffalo with IPFS hash ("+uploaded.path+")")
  await yourCollectible.mintItem(toAddress,uploaded.path,{gasLimit:400000})


  await sleep(delayMS)


  const harima = {
    "description": "Custom built by the Ishikawajima-Harima shipyard in Japan",
    "external_url": "https://austingriffith.com/portfolio/paintings/",// <-- this can link to a page for the specific file too
    "image": "https://ipfs.io/ipfs/bafybeidqt7fhotp2choawb6hfrgjw77uiozj7hgq6jrtmwensz2xm2prke/yacht1.mp4",
    "name": "Yatch Ishikawajima-Harima",
    "attributes": [
       {
         "trait_type": "Type",
         "value": "Yatch"
       },
       {
         "trait_type": "Brand",
         "value": "Ishikawajima-Harima"
       },
       {
         "trait_type": "Capacity(Person)",
         "value": 21
       }
    ]
  }
  console.log("Uploading Ishikawajima-Harima...")
  const uploadedzebra = await ipfs.add(JSON.stringify(harima))

  console.log("Minting zebra with IPFS hash ("+uploadedzebra.path+")")
  await yourCollectible.mintItem(toAddress,uploadedzebra.path,{gasLimit:400000})



  await sleep(delayMS)


  const rhino = {
    "description": "BEST OF 2017, 2018, 2019 & 2020 Award Winner! Enjoy Chicago, Illinois by boat! Charter the 31' Motor Yacht for up to 6 people. ",
    "external_url": "https://austingriffith.com/portfolio/paintings/",// <-- this can link to a page for the specific file too
    "image": "https://ipfs.io/ipfs/bafybeihzbkkow7rlp2qklptfn6lqptpsonb6xh4pa63nd42z5e2lliznxa/yacht2.mp4",
    "name": "Yacht",
    "attributes": [
       {
         "trait_type": "Type",
         "value": "Yatch"
       },
       {
         "trait_type": "Brand",
         "value": "Goofy"
       },
       {
         "trait_type": "Capacity(Person)",
         "value": 6
       }
    ]
  }
  console.log("Uploading rhino...")
  const uploadedrhino = await ipfs.add(JSON.stringify(rhino))

  console.log("Minting rhino with IPFS hash ("+uploadedrhino.path+")")
  await yourCollectible.mintItem(toAddress,uploadedrhino.path,{gasLimit:400000})

/*

  await sleep(delayMS)


  const fish = {
    "description": "Is that an underbyte?",
    "external_url": "https://austingriffith.com/portfolio/paintings/",// <-- this can link to a page for the specific file too
    "image": "https://austingriffith.com/images/paintings/fish.jpg",
    "name": "Fish",
    "attributes": [
       {
         "trait_type": "BackgroundColor",
         "value": "blue"
       },
       {
         "trait_type": "Eyes",
         "value": "googly"
       },
       {
         "trait_type": "Stamina",
         "value": 15
       }
    ]
  }
  console.log("Uploading fish...")
  const uploadedfish = await ipfs.add(JSON.stringify(fish))

  console.log("Minting fish with IPFS hash ("+uploadedfish.path+")")
  await yourCollectible.mintItem(toAddress,uploadedfish.path,{gasLimit:400000})



  await sleep(delayMS)


  const flamingo = {
    "description": "So delicate.",
    "external_url": "https://austingriffith.com/portfolio/paintings/",// <-- this can link to a page for the specific file too
    "image": "https://austingriffith.com/images/paintings/flamingo.jpg",
    "name": "Flamingo",
    "attributes": [
       {
         "trait_type": "BackgroundColor",
         "value": "black"
       },
       {
         "trait_type": "Eyes",
         "value": "googly"
       },
       {
         "trait_type": "Stamina",
         "value": 6
       }
    ]
  }
  console.log("Uploading flamingo...")
  const uploadedflamingo = await ipfs.add(JSON.stringify(flamingo))

  console.log("Minting flamingo with IPFS hash ("+uploadedflamingo.path+")")
  await yourCollectible.mintItem(toAddress,uploadedflamingo.path,{gasLimit:400000})





  const godzilla = {
    "description": "Raaaar!",
    "external_url": "https://austingriffith.com/portfolio/paintings/",// <-- this can link to a page for the specific file too
    "image": "https://austingriffith.com/images/paintings/godzilla.jpg",
    "name": "Godzilla",
    "attributes": [
       {
         "trait_type": "BackgroundColor",
         "value": "orange"
       },
       {
         "trait_type": "Eyes",
         "value": "googly"
       },
       {
         "trait_type": "Stamina",
         "value": 99
       }
    ]
  }
  console.log("Uploading godzilla...")
  const uploadedgodzilla = await ipfs.add(JSON.stringify(godzilla))

  console.log("Minting godzilla with IPFS hash ("+uploadedgodzilla.path+")")
  await yourCollectible.mintItem(toAddress,uploadedgodzilla.path,{gasLimit:400000})

*/


  await sleep(delayMS)

  console.log("Transferring Ownership of YourCollectible to "+toAddress+"...")

  await yourCollectible.transferOwnership(toAddress)

  await sleep(delayMS)

  /*


  console.log("Minting zebra...")
  await yourCollectible.mintItem("0xD75b0609ed51307E13bae0F9394b5f63A7f8b6A1","zebra.jpg")

  */


  //const secondContract = await deploy("SecondContract")

  // const exampleToken = await deploy("ExampleToken")
  // const examplePriceOracle = await deploy("ExamplePriceOracle")
  // const smartContractWallet = await deploy("SmartContractWallet",[exampleToken.address,examplePriceOracle.address])



  /*
  //If you want to send value to an address from the deployer
  const deployerWallet = ethers.provider.getSigner()
  await deployerWallet.sendTransaction({
    to: "0x34aA3F359A9D614239015126635CE7732c18fDF3",
    value: ethers.utils.parseEther("0.001")
  })
  */


  /*
  //If you want to send some ETH to a contract on deploy (make your constructor payable!)
  const yourContract = await deploy("YourContract", [], {
  value: ethers.utils.parseEther("0.05")
  });
  */


  /*
  //If you want to link a library into your contract:
  // reference: https://github.com/austintgriffith/scaffold-eth/blob/using-libraries-example/packages/hardhat/scripts/deploy.js#L19
  const yourContract = await deploy("YourContract", [], {}, {
   LibraryName: **LibraryAddress**
  });
  */

};

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
