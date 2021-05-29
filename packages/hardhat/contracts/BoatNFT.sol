pragma solidity >=0.6.0 <0.7.0;
pragma experimental ABIEncoderV2;
//SPDX-License-Identifier: MIT

//import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
//learn more: https://docs.openzeppelin.com/contracts/3.x/erc721

// GET LISTED ON OPENSEA: https://testnets.opensea.io/get-listed/step-two

contract BoatNFT is ERC721, Ownable {

  event BoatReviwed(address indexed owner, uint256 indexed tokenId);

  using Counters for Counters.Counter;
  Counters.Counter private _tokenIds;

  mapping(uint256 => string[]) private _boatReview;

  constructor() public ERC721("Boat NFT", "Boat") {
    _setBaseURI("https://ipfs.io/ipfs/");
  }

  function mintItem(address to, string memory tokenURI)
      public
      onlyOwner
      returns (uint256)
  {
      _tokenIds.increment();

      uint256 id = _tokenIds.current();
      _mint(to, id);
      _setTokenURI(id, tokenURI);

      return id;
  }

  function review(uint256 tokenId, string calldata hash) external {

    _boatReview[tokenId].push(hash);
    emit BoatReviwed(_msgSender(), tokenId);
  }

  function getReviews(uint256 tokenId) external view returns(string[] memory enrichHashes) {
    require(_exists(tokenId), 'Boat does not exist');

    string[] memory _hashArray = _boatReview[tokenId];
        string memory base = baseURI();

        // If there is no base URI, return the token URI.
        if (bytes(base).length == 0) {
            return _hashArray;
        }

    for (uint i = 0; i < _hashArray.length; i++) {

            _hashArray[i] = string(abi.encodePacked(base, _hashArray[i]));
        }

        return _hashArray;
  }

}
