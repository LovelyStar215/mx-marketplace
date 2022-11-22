// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

import "hardhat/console.sol";

contract NFTMarketplace is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenId;
    Counters.Counter private _itemSold;

    uint listingPrice = 0.005 ether;
    address payable owner;

    mapping(uint => MarketItem) private idToMarketItem;

    struct MarketItem {
        uint tokenId;
        address payable seller;
        address payable owner;
        uint price;
        bool sold;
    }

    event MarketItemCreated(
        uint indexed tokenId,
        address seller,
        address owner,
        uint price,
        bool sold
    );

    constructor() ERC721("frUIT Tokens", "UIT") {
        owner = payable(msg.sender);
    }

    //Update Listing Price
    function updateListingPrice(uint _listingPrice) public payable {
        require(
            owner == msg.sender,
            "Require market's owner to change listing price !"
        );
        listingPrice = _listingPrice;
    }

    //Check Listing Price
    function getListingPrice() public view returns (uint) {
        return listingPrice;
    }

    //Mint Token and create market item
    function createToken(string memory tokenURL, uint inputPrice)
        public
        payable
        returns (uint)
    {
        _tokenId.increment();
        uint newTokenId = _tokenId.current();

        _mint(msg.sender, newTokenId);
        _setTokenURI(newTokenId, tokenURL);
        createMarketItem(newTokenId, inputPrice);
    }

    function createMarketItem(uint tokenId, uint price) private {
        require(price > 0, "Price must be higher than 0");
        require(
            msg.value == listingPrice,
            "Must have enough token to pay listing price"
        );

        idToMarketItem[tokenId] = MarketItem();
    }
}
