export const nfts =
{
  "contractName": "MyNFTs",
  "abi": [
    {
      "constant": true,
      "inputs": [
        {
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "owner",
          "type": "address"
        },
        {
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "tokenOfOwnerByIndex",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "from",
          "type": "address"
        },
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "tokenByIndex",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "isOwner",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "from",
          "type": "address"
        },
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "owner",
          "type": "address"
        },
        {
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "photo",
          "type": "string"
        },
        {
          "indexed": false,
          "name": "title",
          "type": "string"
        },
        {
          "indexed": false,
          "name": "description",
          "type": "string"
        },
        {
          "indexed": false,
          "name": "category",
          "type": "string"
        },
        {
          "indexed": false,
          "name": "timestamp",
          "type": "uint256"
        }
      ],
      "name": "PhotoUploaded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "to",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "approved",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "photo",
          "type": "string"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "description",
          "type": "string"
        },
        {
          "name": "category",
          "type": "string"
        }
      ],
      "name": "uploadPhoto",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "from",
          "type": "address"
        },
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getTotalPhotoCount",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getPhoto",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        },
        {
          "name": "",
          "type": "address[]"
        },
        {
          "name": "",
          "type": "string"
        },
        {
          "name": "",
          "type": "string"
        },
        {
          "name": "",
          "type": "string"
        },
        {
          "name": "",
          "type": "string"
        },
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.5.6+commit.b259423e\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":true,\"inputs\":[{\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"getApproved\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"to\",\"type\":\"address\"},{\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"from\",\"type\":\"address\"},{\"name\":\"to\",\"type\":\"address\"},{\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"owner\",\"type\":\"address\"},{\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"tokenOfOwnerByIndex\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"from\",\"type\":\"address\"},{\"name\":\"to\",\"type\":\"address\"},{\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"tokenByIndex\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ownerOf\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getTotalPhotoCount\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"isOwner\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"to\",\"type\":\"address\"},{\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"getPhoto\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"},{\"name\":\"\",\"type\":\"address[]\"},{\"name\":\"\",\"type\":\"string\"},{\"name\":\"\",\"type\":\"string\"},{\"name\":\"\",\"type\":\"string\"},{\"name\":\"\",\"type\":\"string\"},{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"from\",\"type\":\"address\"},{\"name\":\"to\",\"type\":\"address\"},{\"name\":\"tokenId\",\"type\":\"uint256\"},{\"name\":\"_data\",\"type\":\"bytes\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"owner\",\"type\":\"address\"},{\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"photo\",\"type\":\"string\"},{\"name\":\"title\",\"type\":\"string\"},{\"name\":\"description\",\"type\":\"string\"},{\"name\":\"category\",\"type\":\"string\"}],\"name\":\"uploadPhoto\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"tokenId\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"photo\",\"type\":\"string\"},{\"indexed\":false,\"name\":\"title\",\"type\":\"string\"},{\"indexed\":false,\"name\":\"description\",\"type\":\"string\"},{\"indexed\":false,\"name\":\"category\",\"type\":\"string\"},{\"indexed\":false,\"name\":\"timestamp\",\"type\":\"uint256\"}],\"name\":\"PhotoUploaded\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"to\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"approved\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"}],\"devdoc\":{\"methods\":{\"approve(address,uint256)\":{\"details\":\"Approves another address to transfer the given token ID The zero address indicates there is no approved address. There can only be one approved address per token at a given time. Can only be called by the token owner or an approved operator.\",\"params\":{\"to\":\"address to be approved for the given token ID\",\"tokenId\":\"uint256 ID of the token to be approved\"}},\"balanceOf(address)\":{\"details\":\"Gets the balance of the specified address.\",\"params\":{\"owner\":\"address to query the balance of\"},\"return\":\"uint256 representing the amount owned by the passed address\"},\"getApproved(uint256)\":{\"details\":\"Gets the approved address for a token ID, or zero if no address set Reverts if the token ID does not exist.\",\"params\":{\"tokenId\":\"uint256 ID of the token to query the approval of\"},\"return\":\"address currently approved for the given token ID\"},\"isApprovedForAll(address,address)\":{\"details\":\"Tells whether an operator is approved by a given owner.\",\"params\":{\"operator\":\"operator address which you want to query the approval of\",\"owner\":\"owner address which you want to query the approval of\"},\"return\":\"bool whether the given operator is approved by the given owner\"},\"isOwner()\":{\"details\":\"Returns true if the caller is the current owner.\"},\"owner()\":{\"details\":\"Returns the address of the current owner.\"},\"ownerOf(uint256)\":{\"details\":\"Gets the owner of the specified token ID.\",\"params\":{\"tokenId\":\"uint256 ID of the token to query the owner of\"},\"return\":\"address currently marked as the owner of the given token ID\"},\"renounceOwnership()\":{\"details\":\"Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner.     * > Note: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.\"},\"safeTransferFrom(address,address,uint256)\":{\"details\":\"Safely transfers the ownership of a given token ID to another address If the target address is a contract, it must implement `onKIP17Received`, which is called upon a safe transfer, and return the magic value `bytes4(keccak256(\\\"onKIP17Received(address,address,uint256,bytes)\\\"))`; otherwise, the transfer is reverted. Requires the msg.sender to be the owner, approved, or operator\",\"params\":{\"from\":\"current owner of the token\",\"to\":\"address to receive the ownership of the given token ID\",\"tokenId\":\"uint256 ID of the token to be transferred\"}},\"safeTransferFrom(address,address,uint256,bytes)\":{\"details\":\"Safely transfers the ownership of a given token ID to another address If the target address is a contract, it must implement `onKIP17Received`, which is called upon a safe transfer, and return the magic value `bytes4(keccak256(\\\"onKIP17Received(address,address,uint256,bytes)\\\"))`; otherwise, the transfer is reverted. Requires the msg.sender to be the owner, approved, or operator\",\"params\":{\"_data\":\"bytes data to send along with a safe transfer check\",\"from\":\"current owner of the token\",\"to\":\"address to receive the ownership of the given token ID\",\"tokenId\":\"uint256 ID of the token to be transferred\"}},\"setApprovalForAll(address,bool)\":{\"details\":\"Sets or unsets the approval of a given operator An operator is allowed to transfer all tokens of the sender on their behalf.\",\"params\":{\"approved\":\"representing the status of the approval to be set\",\"to\":\"operator address to set the approval\"}},\"supportsInterface(bytes4)\":{\"details\":\"See `IKIP13.supportsInterface`.     * Time complexity O(1), guaranteed to always use less than 30 000 gas.\"},\"tokenByIndex(uint256)\":{\"details\":\"Gets the token ID at a given index of all the tokens in this contract Reverts if the index is greater or equal to the total number of tokens.\",\"params\":{\"index\":\"uint256 representing the index to be accessed of the tokens list\"},\"return\":\"uint256 token ID at the given index of the tokens list\"},\"tokenOfOwnerByIndex(address,uint256)\":{\"details\":\"Gets the token ID at a given index of the tokens list of the requested owner.\",\"params\":{\"index\":\"uint256 representing the index to be accessed of the requested tokens list\",\"owner\":\"address owning the tokens list to be accessed\"},\"return\":\"uint256 token ID at the given index of the tokens list owned by the requested address\"},\"totalSupply()\":{\"details\":\"Gets the total amount of tokens stored by the contract.\",\"return\":\"uint256 representing the total amount of tokens\"},\"transferOwnership(address)\":{\"details\":\"Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.\"}}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"project:/contracts/MyNFTs.sol\":\"MyNFTs\"},\"evmVersion\":\"constantinople\",\"libraries\":{},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"@klaytn/contracts/drafts/Counters.sol\":{\"keccak256\":\"0x5eb69360d3441ab2ee799bd7c007cccbffb0896f12b2dfe1456193e2aa180a11\",\"urls\":[\"bzzr://ecd0352164978c418c8f5b0080c972b65e4b07f6afc593fb7cdd856185a458ea\"]},\"@klaytn/contracts/introspection/IKIP13.sol\":{\"keccak256\":\"0xf7415711dbec40bc633af7d8cb5c3c0bc3d1ed97fd8c13f795a03eb3073ea219\",\"urls\":[\"bzzr://2c161a0e94debcd164c7a87e2c12c087ffefe24bc7a4a9f304f5d8ba39ed15a1\"]},\"@klaytn/contracts/introspection/KIP13.sol\":{\"keccak256\":\"0x84681701e79f53ba1e9660b6a130bba31880d66cee996ab7d5567d239155c6da\",\"urls\":[\"bzzr://743958df51380e11b5e58092297c1e122582ade8d358010c733f27e175e7ca10\"]},\"@klaytn/contracts/math/SafeMath.sol\":{\"keccak256\":\"0x640b6dee7a4b830bdfd52b5031a07fc2b12209f5b2e29e5d364a7d37f69d8076\",\"urls\":[\"bzzr://292843005e754e752644f767477ec5ad7a1ffc91ddb18c38b8079c62f3993cad\"]},\"@klaytn/contracts/ownership/Ownable.sol\":{\"keccak256\":\"0xc9b4f8e4eeaab9ef9d0f83e2ab2ba2b0808115cf5e5d1e4d1a6bb94b0753b495\",\"urls\":[\"bzzr://f5b1c257ce6b6586c16aa6c515d0bf9f7f53bf870fff3abf4224b072ec11a447\"]},\"@klaytn/contracts/token/KIP17/IERC721Receiver.sol\":{\"keccak256\":\"0xadbfb7028fb0f851dc848a48b9e54e7c89ffd2c2edc12fa4ba9bb383dfaa83d9\",\"urls\":[\"bzzr://2466b6491600969dd9ffdeb0b705e7cecc38418aa215cec64b2481273bba9076\"]},\"@klaytn/contracts/token/KIP17/IKIP17.sol\":{\"keccak256\":\"0x0b30e5fe64932d8b9343c7897ebb7a0ac15a15577ce5ec1f18c3ba4396120de0\",\"urls\":[\"bzzr://7027ab2da185a775cc0697e60a6d17db910959fa365c5337dce50d2bf380c4fc\"]},\"@klaytn/contracts/token/KIP17/IKIP17Enumerable.sol\":{\"keccak256\":\"0x5a6a02f871bfcf213445ac1c3625af470cbd25599f915f2bbc0b7df0ed998031\",\"urls\":[\"bzzr://f613649522f60a170ab6e4cc32b2087cb29d6bfba77680797cfa5467ffc8c356\"]},\"@klaytn/contracts/token/KIP17/IKIP17Metadata.sol\":{\"keccak256\":\"0xad2c2abcd4cb881620f297edcdf9cd491effc1ace2f12f468bf3546f940d1bf4\",\"urls\":[\"bzzr://f2de7f30fb22e7238dd752bbd1ac67648cc3f6236348a63d0224fbb659090d48\"]},\"@klaytn/contracts/token/KIP17/IKIP17Receiver.sol\":{\"keccak256\":\"0xf3dee67a4a395e20ad0459e1f255b9c563272d2fb6752e7421c1302cfcf00ff0\",\"urls\":[\"bzzr://28f7d1d507cc9f1377346b3c8a868b712a68b79dfe8888231b30671848b0a80b\"]},\"@klaytn/contracts/token/KIP17/KIP17.sol\":{\"keccak256\":\"0x3ffc95c0da23762b273dad189c551bc0591811ca96026b0da064464aa1f1ec4f\",\"urls\":[\"bzzr://6187953810079ca3e10048653d8de3c23991bd4e4df84ffd741f3b2c6f6766c7\"]},\"@klaytn/contracts/token/KIP17/KIP17Enumerable.sol\":{\"keccak256\":\"0x2f8ff9fe4b7b5d213a4df09a3de2807792dd199d6ce8ea938f6eec33b1802cff\",\"urls\":[\"bzzr://679abd239360bc5fbc35902db73b2b5b5fe47fd6d73ad9a830228b27c153d321\"]},\"@klaytn/contracts/token/KIP17/KIP17Full.sol\":{\"keccak256\":\"0xcfeb8dafffa1051bfc054427c4be5cdb2289c09fa4c898262798c753b0b1d9fb\",\"urls\":[\"bzzr://2ef17c30567b9faa8543c27232f4d535e21acae5c8496faf42bc4021c59cd8ec\"]},\"@klaytn/contracts/token/KIP17/KIP17Metadata.sol\":{\"keccak256\":\"0x67db095981e55d1f88a38e7f794f85df18b9d2a4a8c6906c1d7b793af04a99b8\",\"urls\":[\"bzzr://38399a4e42bf9737f880a81bc6a7d19b2e570426101df7f9747759e33f79e396\"]},\"@klaytn/contracts/utils/Address.sol\":{\"keccak256\":\"0xf3358e5819ca73357abd6c90bdfffd0474af54364897f6b3e3234c4b71fbe9a1\",\"urls\":[\"bzzr://f7f6da60a184233fd666ac44e6fb2bd51ca6ebdc4867a310d368049aa4e62786\"]},\"project:/contracts/MyNFTs.sol\":{\"keccak256\":\"0xe6e82057650e8f383f3ec011e874c6f668b933dfbb0bb5cae453c3997c4922a7\",\"urls\":[\"bzzr://cdadcbafab6f48aa09ae0b93a802a4898428aaf4101ec809c9b8449f0217ffe7\"]}},\"version\":1}",
  "bytecode": "0x60806040526200001c6301ffc9a760e01b6200011060201b60201c565b620000346380ac58cd60e01b6200011060201b60201c565b6200004c63780e9d6360e01b6200011060201b60201c565b33600960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a362000219565b63ffffffff60e01b817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161415620001ad576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f4b495031333a20696e76616c696420696e74657266616365206964000000000081525060200191505060405180910390fd5b6001600080837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b61358180620002296000396000f3fe608060405234801561001057600080fd5b506004361061012c5760003560e01c806370dc232a116100ad578063b6be128a11610071578063b6be128a1461059a578063b88d4fde146107db578063e985e9c5146108e0578063ebe7a7e51461095c578063f2fde38b14610bdc5761012c565b806370dc232a146104b6578063715018a6146104d45780638da5cb5b146104de5780638f32d59b14610528578063a22cb4651461054a5761012c565b80632f745c59116100f45780632f745c59146102de57806342842e0e146103405780634f6ccce7146103ae5780636352211e146103f057806370a082311461045e5761012c565b806301ffc9a714610131578063081812fc14610196578063095ea7b31461020457806318160ddd1461025257806323b872dd14610270575b600080fd5b61017c6004803603602081101561014757600080fd5b8101908080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610c20565b604051808215151515815260200191505060405180910390f35b6101c2600480360360208110156101ac57600080fd5b8101908080359060200190929190505050610c87565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6102506004803603604081101561021a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610d22565b005b61025a610f18565b6040518082815260200191505060405180910390f35b6102dc6004803603606081101561028657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610f25565b005b61032a600480360360408110156102f457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610faf565b6040518082815260200191505060405180910390f35b6103ac6004803603606081101561035657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061106e565b005b6103da600480360360208110156103c457600080fd5b810190808035906020019092919050505061108e565b6040518082815260200191505060405180910390f35b61041c6004803603602081101561040657600080fd5b810190808035906020019092919050505061110e565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6104a06004803603602081101561047457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506111d6565b6040518082815260200191505060405180910390f35b6104be6112ab565b6040518082815260200191505060405180910390f35b6104dc6112ba565b005b6104e66113f5565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61053061141f565b604051808215151515815260200191505060405180910390f35b6105986004803603604081101561056057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803515159060200190929190505050611477565b005b6105c6600480360360208110156105b057600080fd5b810190808035906020019092919050505061161a565b60405180888152602001806020018060200180602001806020018060200187815260200186810386528c818151815260200191508051906020019060200280838360005b8381101561062557808201518184015260208101905061060a565b5050505090500186810385528b818151815260200191508051906020019080838360005b83811015610664578082015181840152602081019050610649565b50505050905090810190601f1680156106915780820380516001836020036101000a031916815260200191505b5086810384528a818151815260200191508051906020019080838360005b838110156106ca5780820151818401526020810190506106af565b50505050905090810190601f1680156106f75780820380516001836020036101000a031916815260200191505b50868103835289818151815260200191508051906020019080838360005b83811015610730578082015181840152602081019050610715565b50505050905090810190601f16801561075d5780820380516001836020036101000a031916815260200191505b50868103825288818151815260200191508051906020019080838360005b8381101561079657808201518184015260208101905061077b565b50505050905090810190601f1680156107c35780820380516001836020036101000a031916815260200191505b509c5050505050505050505050505060405180910390f35b6108de600480360360808110156107f157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019064010000000081111561085857600080fd5b82018360208201111561086a57600080fd5b8035906020019184600183028401116401000000008311171561088c57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611a5f565b005b610942600480360360408110156108f657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611ad1565b604051808215151515815260200191505060405180910390f35b610bda6004803603608081101561097257600080fd5b810190808035906020019064010000000081111561098f57600080fd5b8201836020820111156109a157600080fd5b803590602001918460018302840111640100000000831117156109c357600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190640100000000811115610a2657600080fd5b820183602082011115610a3857600080fd5b80359060200191846001830284011164010000000083111715610a5a57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190640100000000811115610abd57600080fd5b820183602082011115610acf57600080fd5b80359060200191846001830284011164010000000083111715610af157600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190640100000000811115610b5457600080fd5b820183602082011115610b6657600080fd5b80359060200191846001830284011164010000000083111715610b8857600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611b65565b005b610c1e60048036036020811015610bf257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611ee8565b005b6000806000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff169050919050565b6000610c9282611f6e565b610ce7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602b8152602001806134c9602b913960400191505060405180910390fd5b6002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000610d2d8261110e565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610dd1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4b495031373a20617070726f76616c20746f2063757272656e74206f776e657281525060200191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161480610e115750610e108133611ad1565b5b610e66576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260378152602001806134f46037913960400191505060405180910390fd5b826002600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550818373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a4505050565b6000600780549050905090565b610f30838383611fe0565b600a60008281526020019081526020016000206001018290806001815401808255809150509060018203906000526020600020016000909192909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b6000610fba836111d6565b8210611011576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a81526020018061339b602a913960400191505060405180910390fd5b600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020828154811061105b57fe5b9060005260206000200154905092915050565b61108983838360405180602001604052806000815250611a5f565b505050565b6000611098610f18565b82106110ef576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602b81526020018061349e602b913960400191505060405180910390fd5b600782815481106110fc57fe5b90600052602060002001549050919050565b6000806001600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156111cd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260288152602001806133c56028913960400191505060405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561125d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602981526020018061344d6029913960400191505060405180910390fd5b6112a4600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002061204f565b9050919050565b60006112b5610f18565b905090565b6112c261141f565b611334576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a36000600960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b6000600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614905090565b3373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611519576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260188152602001807f4b495031373a20617070726f766520746f2063616c6c6572000000000000000081525060200191505060405180910390fd5b80600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051808215151515815260200191505060405180910390a35050565b60006060806060806060600080600a60008a81526020019081526020016000206000015414156116b2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260138152602001807f50686f746f20646f65736e27742065786973740000000000000000000000000081525060200191505060405180910390fd5b600a600089815260200190815260200160002060000154600a60008a8152602001908152602001600020600101600a60008b8152602001908152602001600020600201600a60008c8152602001908152602001600020600301600a60008d8152602001908152602001600020600401600a60008e8152602001908152602001600020600501600a60008f815260200190815260200160002060060154858054806020026020016040519081016040528092919081815260200182805480156117cf57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311611785575b50505050509550848054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561186b5780601f106118405761010080835404028352916020019161186b565b820191906000526020600020905b81548152906001019060200180831161184e57829003601f168201915b50505050509450838054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156119075780601f106118dc57610100808354040283529160200191611907565b820191906000526020600020905b8154815290600101906020018083116118ea57829003601f168201915b50505050509350828054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156119a35780601f10611978576101008083540402835291602001916119a3565b820191906000526020600020905b81548152906001019060200180831161198657829003601f168201915b50505050509250818054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611a3f5780601f10611a1457610100808354040283529160200191611a3f565b820191906000526020600020905b815481529060010190602001808311611a2257829003601f168201915b505050505091509650965096509650965096509650919395979092949650565b611a6a848484610f25565b611a768484848461205d565b611acb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603081526020018061341d6030913960400191505060405180910390fd5b50505050565b6000600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60006001611b71610f18565b019050611b7e33826125bf565b6060611b88613176565b6040518060e0016040528084815260200183815260200188815260200187815260200186815260200185815260200142815250905080600a6000858152602001908152602001600020600082015181600001556020820151816001019080519060200190611bf79291906131b3565b506040820151816002019080519060200190611c1492919061323d565b506060820151816003019080519060200190611c3192919061323d565b506080820151816004019080519060200190611c4e92919061323d565b5060a0820151816005019080519060200190611c6b92919061323d565b5060c08201518160060155905050600a60008481526020019081526020016000206001013390806001815401808255809150509060018203906000526020600020016000909192909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050827f94ba24fe4630905d08d611b777a75f867c6b104fbbe44f6e624a9dc3c08a26c28888888842604051808060200180602001806020018060200186815260200185810385528a818151815260200191508051906020019080838360005b83811015611d6c578082015181840152602081019050611d51565b50505050905090810190601f168015611d995780820380516001836020036101000a031916815260200191505b50858103845289818151815260200191508051906020019080838360005b83811015611dd2578082015181840152602081019050611db7565b50505050905090810190601f168015611dff5780820380516001836020036101000a031916815260200191505b50858103835288818151815260200191508051906020019080838360005b83811015611e38578082015181840152602081019050611e1d565b50505050905090810190601f168015611e655780820380516001836020036101000a031916815260200191505b50858103825287818151815260200191508051906020019080838360005b83811015611e9e578082015181840152602081019050611e83565b50505050905090810190601f168015611ecb5780820380516001836020036101000a031916815260200191505b50995050505050505050505060405180910390a250505050505050565b611ef061141f565b611f62576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b611f6b816125e0565b50565b6000806001600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415915050919050565b611fea3382612726565b61203f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260308152602001806133ed6030913960400191505060405180910390fd5b61204a83838361281a565b505050565b600081600001549050919050565b60008060606120818673ffffffffffffffffffffffffffffffffffffffff1661283e565b612090576001925050506125b7565b8573ffffffffffffffffffffffffffffffffffffffff1663150b7a0260e01b33898888604051602401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015612160578082015181840152602081019050612145565b50505050905090810190601f16801561218d5780820380516001836020036101000a031916815260200191505b5095505050505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040518082805190602001908083835b602083106122255780518252602082019150602081019050602083039250612202565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114612287576040519150601f19603f3d011682016040523d82523d6000602084013e61228c565b606091505b5080925081935050506000815114158015612310575063150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168180602001905160208110156122de57600080fd5b81019080805190602001909291905050507bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b15612320576001925050506125b7565b8573ffffffffffffffffffffffffffffffffffffffff16636745782b60e01b33898888604051602401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156123f05780820151818401526020810190506123d5565b50505050905090810190601f16801561241d5780820380516001836020036101000a031916815260200191505b5095505050505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040518082805190602001908083835b602083106124b55780518252602082019150602081019050602083039250612492565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114612517576040519150601f19603f3d011682016040523d82523d6000602084013e61251c565b606091505b50809250819350505060008151141580156125a05750636745782b60e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191681806020019051602081101561256e57600080fd5b81019080805190602001909291905050507bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b156125b0576001925050506125b7565b6000925050505b949350505050565b6125c98282612851565b6125d38282612a69565b6125dc81612b30565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415612666576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806133526026913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380600960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600061273182611f6e565b612786576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602b81526020018061352b602b913960400191505060405180910390fd5b60006127918361110e565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148061280057508373ffffffffffffffffffffffffffffffffffffffff166127e884610c87565b73ffffffffffffffffffffffffffffffffffffffff16145b8061281157506128108185611ad1565b5b91505092915050565b612825838383612b7c565b61282f8382612dd7565b6128398282612a69565b505050565b600080823b905060008111915050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156128f4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f4b495031373a206d696e7420746f20746865207a65726f20616464726573730081525060200191505060405180910390fd5b6128fd81611f6e565b15612970576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f4b495031373a20746f6b656e20616c7265616479206d696e746564000000000081525060200191505060405180910390fd5b816001600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550612a09600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020612f75565b808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490506006600083815260200190815260200160002081905550600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190806001815401808255809150509060018203906000526020600020016000909192909190915055505050565b6007805490506008600083815260200190815260200160002081905550600781908060018154018082558091505090600182039060005260206000200160009091929091909150555050565b8273ffffffffffffffffffffffffffffffffffffffff16612b9c8261110e565b73ffffffffffffffffffffffffffffffffffffffff1614612c08576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260288152602001806134766028913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415612c8e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001806133786023913960400191505060405180910390fd5b612c9781612f8b565b612cde600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020613049565b612d25600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020612f75565b816001600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b6000612e2f6001600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208054905061306c90919063ffffffff16565b9050600060066000848152602001908152602001600020549050818114612f1c576000600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208381548110612e9c57fe5b9060005260206000200154905080600560008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208381548110612ef457fe5b9060005260206000200181905550816006600083815260200190815260200160002081905550505b600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480919060019003612f6e91906132bd565b5050505050565b6001816000016000828254019250508190555050565b600073ffffffffffffffffffffffffffffffffffffffff166002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146130465760006002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b50565b6130616001826000015461306c90919063ffffffff16565b816000018190555050565b60006130ae83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f7700008152506130b6565b905092915050565b6000838311158290613163576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561312857808201518184015260208101905061310d565b50505050905090810190601f1680156131555780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385039050809150509392505050565b6040518060e00160405280600081526020016060815260200160608152602001606081526020016060815260200160608152602001600081525090565b82805482825590600052602060002090810192821561322c579160200282015b8281111561322b5782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550916020019190600101906131d3565b5b50905061323991906132e9565b5090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061327e57805160ff19168380011785556132ac565b828001600101855582156132ac579182015b828111156132ab578251825591602001919060010190613290565b5b5090506132b9919061332c565b5090565b8154818355818111156132e4578183600052602060002091820191016132e3919061332c565b5b505050565b61332991905b8082111561332557600081816101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055506001016132ef565b5090565b90565b61334e91905b8082111561334a576000816000905550600101613332565b5090565b9056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f20616464726573734b495031373a207472616e7366657220746f20746865207a65726f20616464726573734b49503137456e756d657261626c653a206f776e657220696e646578206f7574206f6620626f756e64734b495031373a206f776e657220717565727920666f72206e6f6e6578697374656e7420746f6b656e4b495031373a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f7665644b495031373a207472616e7366657220746f206e6f6e204b49503137526563656976657220696d706c656d656e7465724b495031373a2062616c616e636520717565727920666f7220746865207a65726f20616464726573734b495031373a207472616e73666572206f6620746f6b656e2074686174206973206e6f74206f776e4b49503137456e756d657261626c653a20676c6f62616c20696e646578206f7574206f6620626f756e64734b495031373a20617070726f76656420717565727920666f72206e6f6e6578697374656e7420746f6b656e4b495031373a20617070726f76652063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f76656420666f7220616c6c4b495031373a206f70657261746f7220717565727920666f72206e6f6e6578697374656e7420746f6b656ea165627a7a723058206e2ade5e82cc7c937363b0b0ef6454ff95d5b653a33886c877a804cf988259ba0029",
  "deployedBytecode": "0x608060405234801561001057600080fd5b506004361061012c5760003560e01c806370dc232a116100ad578063b6be128a11610071578063b6be128a1461059a578063b88d4fde146107db578063e985e9c5146108e0578063ebe7a7e51461095c578063f2fde38b14610bdc5761012c565b806370dc232a146104b6578063715018a6146104d45780638da5cb5b146104de5780638f32d59b14610528578063a22cb4651461054a5761012c565b80632f745c59116100f45780632f745c59146102de57806342842e0e146103405780634f6ccce7146103ae5780636352211e146103f057806370a082311461045e5761012c565b806301ffc9a714610131578063081812fc14610196578063095ea7b31461020457806318160ddd1461025257806323b872dd14610270575b600080fd5b61017c6004803603602081101561014757600080fd5b8101908080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610c20565b604051808215151515815260200191505060405180910390f35b6101c2600480360360208110156101ac57600080fd5b8101908080359060200190929190505050610c87565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6102506004803603604081101561021a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610d22565b005b61025a610f18565b6040518082815260200191505060405180910390f35b6102dc6004803603606081101561028657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610f25565b005b61032a600480360360408110156102f457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610faf565b6040518082815260200191505060405180910390f35b6103ac6004803603606081101561035657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061106e565b005b6103da600480360360208110156103c457600080fd5b810190808035906020019092919050505061108e565b6040518082815260200191505060405180910390f35b61041c6004803603602081101561040657600080fd5b810190808035906020019092919050505061110e565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6104a06004803603602081101561047457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506111d6565b6040518082815260200191505060405180910390f35b6104be6112ab565b6040518082815260200191505060405180910390f35b6104dc6112ba565b005b6104e66113f5565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61053061141f565b604051808215151515815260200191505060405180910390f35b6105986004803603604081101561056057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803515159060200190929190505050611477565b005b6105c6600480360360208110156105b057600080fd5b810190808035906020019092919050505061161a565b60405180888152602001806020018060200180602001806020018060200187815260200186810386528c818151815260200191508051906020019060200280838360005b8381101561062557808201518184015260208101905061060a565b5050505090500186810385528b818151815260200191508051906020019080838360005b83811015610664578082015181840152602081019050610649565b50505050905090810190601f1680156106915780820380516001836020036101000a031916815260200191505b5086810384528a818151815260200191508051906020019080838360005b838110156106ca5780820151818401526020810190506106af565b50505050905090810190601f1680156106f75780820380516001836020036101000a031916815260200191505b50868103835289818151815260200191508051906020019080838360005b83811015610730578082015181840152602081019050610715565b50505050905090810190601f16801561075d5780820380516001836020036101000a031916815260200191505b50868103825288818151815260200191508051906020019080838360005b8381101561079657808201518184015260208101905061077b565b50505050905090810190601f1680156107c35780820380516001836020036101000a031916815260200191505b509c5050505050505050505050505060405180910390f35b6108de600480360360808110156107f157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019064010000000081111561085857600080fd5b82018360208201111561086a57600080fd5b8035906020019184600183028401116401000000008311171561088c57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611a5f565b005b610942600480360360408110156108f657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611ad1565b604051808215151515815260200191505060405180910390f35b610bda6004803603608081101561097257600080fd5b810190808035906020019064010000000081111561098f57600080fd5b8201836020820111156109a157600080fd5b803590602001918460018302840111640100000000831117156109c357600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190640100000000811115610a2657600080fd5b820183602082011115610a3857600080fd5b80359060200191846001830284011164010000000083111715610a5a57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190640100000000811115610abd57600080fd5b820183602082011115610acf57600080fd5b80359060200191846001830284011164010000000083111715610af157600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190640100000000811115610b5457600080fd5b820183602082011115610b6657600080fd5b80359060200191846001830284011164010000000083111715610b8857600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611b65565b005b610c1e60048036036020811015610bf257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611ee8565b005b6000806000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff169050919050565b6000610c9282611f6e565b610ce7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602b8152602001806134c9602b913960400191505060405180910390fd5b6002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000610d2d8261110e565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610dd1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4b495031373a20617070726f76616c20746f2063757272656e74206f776e657281525060200191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161480610e115750610e108133611ad1565b5b610e66576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260378152602001806134f46037913960400191505060405180910390fd5b826002600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550818373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a4505050565b6000600780549050905090565b610f30838383611fe0565b600a60008281526020019081526020016000206001018290806001815401808255809150509060018203906000526020600020016000909192909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b6000610fba836111d6565b8210611011576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a81526020018061339b602a913960400191505060405180910390fd5b600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020828154811061105b57fe5b9060005260206000200154905092915050565b61108983838360405180602001604052806000815250611a5f565b505050565b6000611098610f18565b82106110ef576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602b81526020018061349e602b913960400191505060405180910390fd5b600782815481106110fc57fe5b90600052602060002001549050919050565b6000806001600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156111cd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260288152602001806133c56028913960400191505060405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561125d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602981526020018061344d6029913960400191505060405180910390fd5b6112a4600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002061204f565b9050919050565b60006112b5610f18565b905090565b6112c261141f565b611334576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a36000600960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b6000600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614905090565b3373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611519576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260188152602001807f4b495031373a20617070726f766520746f2063616c6c6572000000000000000081525060200191505060405180910390fd5b80600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051808215151515815260200191505060405180910390a35050565b60006060806060806060600080600a60008a81526020019081526020016000206000015414156116b2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260138152602001807f50686f746f20646f65736e27742065786973740000000000000000000000000081525060200191505060405180910390fd5b600a600089815260200190815260200160002060000154600a60008a8152602001908152602001600020600101600a60008b8152602001908152602001600020600201600a60008c8152602001908152602001600020600301600a60008d8152602001908152602001600020600401600a60008e8152602001908152602001600020600501600a60008f815260200190815260200160002060060154858054806020026020016040519081016040528092919081815260200182805480156117cf57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311611785575b50505050509550848054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561186b5780601f106118405761010080835404028352916020019161186b565b820191906000526020600020905b81548152906001019060200180831161184e57829003601f168201915b50505050509450838054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156119075780601f106118dc57610100808354040283529160200191611907565b820191906000526020600020905b8154815290600101906020018083116118ea57829003601f168201915b50505050509350828054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156119a35780601f10611978576101008083540402835291602001916119a3565b820191906000526020600020905b81548152906001019060200180831161198657829003601f168201915b50505050509250818054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611a3f5780601f10611a1457610100808354040283529160200191611a3f565b820191906000526020600020905b815481529060010190602001808311611a2257829003601f168201915b505050505091509650965096509650965096509650919395979092949650565b611a6a848484610f25565b611a768484848461205d565b611acb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603081526020018061341d6030913960400191505060405180910390fd5b50505050565b6000600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60006001611b71610f18565b019050611b7e33826125bf565b6060611b88613176565b6040518060e0016040528084815260200183815260200188815260200187815260200186815260200185815260200142815250905080600a6000858152602001908152602001600020600082015181600001556020820151816001019080519060200190611bf79291906131b3565b506040820151816002019080519060200190611c1492919061323d565b506060820151816003019080519060200190611c3192919061323d565b506080820151816004019080519060200190611c4e92919061323d565b5060a0820151816005019080519060200190611c6b92919061323d565b5060c08201518160060155905050600a60008481526020019081526020016000206001013390806001815401808255809150509060018203906000526020600020016000909192909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050827f94ba24fe4630905d08d611b777a75f867c6b104fbbe44f6e624a9dc3c08a26c28888888842604051808060200180602001806020018060200186815260200185810385528a818151815260200191508051906020019080838360005b83811015611d6c578082015181840152602081019050611d51565b50505050905090810190601f168015611d995780820380516001836020036101000a031916815260200191505b50858103845289818151815260200191508051906020019080838360005b83811015611dd2578082015181840152602081019050611db7565b50505050905090810190601f168015611dff5780820380516001836020036101000a031916815260200191505b50858103835288818151815260200191508051906020019080838360005b83811015611e38578082015181840152602081019050611e1d565b50505050905090810190601f168015611e655780820380516001836020036101000a031916815260200191505b50858103825287818151815260200191508051906020019080838360005b83811015611e9e578082015181840152602081019050611e83565b50505050905090810190601f168015611ecb5780820380516001836020036101000a031916815260200191505b50995050505050505050505060405180910390a250505050505050565b611ef061141f565b611f62576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b611f6b816125e0565b50565b6000806001600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415915050919050565b611fea3382612726565b61203f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260308152602001806133ed6030913960400191505060405180910390fd5b61204a83838361281a565b505050565b600081600001549050919050565b60008060606120818673ffffffffffffffffffffffffffffffffffffffff1661283e565b612090576001925050506125b7565b8573ffffffffffffffffffffffffffffffffffffffff1663150b7a0260e01b33898888604051602401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015612160578082015181840152602081019050612145565b50505050905090810190601f16801561218d5780820380516001836020036101000a031916815260200191505b5095505050505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040518082805190602001908083835b602083106122255780518252602082019150602081019050602083039250612202565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114612287576040519150601f19603f3d011682016040523d82523d6000602084013e61228c565b606091505b5080925081935050506000815114158015612310575063150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168180602001905160208110156122de57600080fd5b81019080805190602001909291905050507bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b15612320576001925050506125b7565b8573ffffffffffffffffffffffffffffffffffffffff16636745782b60e01b33898888604051602401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156123f05780820151818401526020810190506123d5565b50505050905090810190601f16801561241d5780820380516001836020036101000a031916815260200191505b5095505050505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040518082805190602001908083835b602083106124b55780518252602082019150602081019050602083039250612492565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114612517576040519150601f19603f3d011682016040523d82523d6000602084013e61251c565b606091505b50809250819350505060008151141580156125a05750636745782b60e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191681806020019051602081101561256e57600080fd5b81019080805190602001909291905050507bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b156125b0576001925050506125b7565b6000925050505b949350505050565b6125c98282612851565b6125d38282612a69565b6125dc81612b30565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415612666576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806133526026913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380600960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600061273182611f6e565b612786576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602b81526020018061352b602b913960400191505060405180910390fd5b60006127918361110e565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148061280057508373ffffffffffffffffffffffffffffffffffffffff166127e884610c87565b73ffffffffffffffffffffffffffffffffffffffff16145b8061281157506128108185611ad1565b5b91505092915050565b612825838383612b7c565b61282f8382612dd7565b6128398282612a69565b505050565b600080823b905060008111915050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156128f4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f4b495031373a206d696e7420746f20746865207a65726f20616464726573730081525060200191505060405180910390fd5b6128fd81611f6e565b15612970576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f4b495031373a20746f6b656e20616c7265616479206d696e746564000000000081525060200191505060405180910390fd5b816001600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550612a09600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020612f75565b808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490506006600083815260200190815260200160002081905550600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190806001815401808255809150509060018203906000526020600020016000909192909190915055505050565b6007805490506008600083815260200190815260200160002081905550600781908060018154018082558091505090600182039060005260206000200160009091929091909150555050565b8273ffffffffffffffffffffffffffffffffffffffff16612b9c8261110e565b73ffffffffffffffffffffffffffffffffffffffff1614612c08576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260288152602001806134766028913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415612c8e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001806133786023913960400191505060405180910390fd5b612c9781612f8b565b612cde600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020613049565b612d25600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020612f75565b816001600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b6000612e2f6001600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208054905061306c90919063ffffffff16565b9050600060066000848152602001908152602001600020549050818114612f1c576000600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208381548110612e9c57fe5b9060005260206000200154905080600560008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208381548110612ef457fe5b9060005260206000200181905550816006600083815260200190815260200160002081905550505b600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480919060019003612f6e91906132bd565b5050505050565b6001816000016000828254019250508190555050565b600073ffffffffffffffffffffffffffffffffffffffff166002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146130465760006002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b50565b6130616001826000015461306c90919063ffffffff16565b816000018190555050565b60006130ae83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f7700008152506130b6565b905092915050565b6000838311158290613163576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561312857808201518184015260208101905061310d565b50505050905090810190601f1680156131555780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385039050809150509392505050565b6040518060e00160405280600081526020016060815260200160608152602001606081526020016060815260200160608152602001600081525090565b82805482825590600052602060002090810192821561322c579160200282015b8281111561322b5782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550916020019190600101906131d3565b5b50905061323991906132e9565b5090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061327e57805160ff19168380011785556132ac565b828001600101855582156132ac579182015b828111156132ab578251825591602001919060010190613290565b5b5090506132b9919061332c565b5090565b8154818355818111156132e4578183600052602060002091820191016132e3919061332c565b5b505050565b61332991905b8082111561332557600081816101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055506001016132ef565b5090565b90565b61334e91905b8082111561334a576000816000905550600101613332565b5090565b9056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f20616464726573734b495031373a207472616e7366657220746f20746865207a65726f20616464726573734b49503137456e756d657261626c653a206f776e657220696e646578206f7574206f6620626f756e64734b495031373a206f776e657220717565727920666f72206e6f6e6578697374656e7420746f6b656e4b495031373a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f7665644b495031373a207472616e7366657220746f206e6f6e204b49503137526563656976657220696d706c656d656e7465724b495031373a2062616c616e636520717565727920666f7220746865207a65726f20616464726573734b495031373a207472616e73666572206f6620746f6b656e2074686174206973206e6f74206f776e4b49503137456e756d657261626c653a20676c6f62616c20696e646578206f7574206f6620626f756e64734b495031373a20617070726f76656420717565727920666f72206e6f6e6578697374656e7420746f6b656e4b495031373a20617070726f76652063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f76656420666f7220616c6c4b495031373a206f70657261746f7220717565727920666f72206e6f6e6578697374656e7420746f6b656ea165627a7a723058206e2ade5e82cc7c937363b0b0ef6454ff95d5b653a33886c877a804cf988259ba0029",
  "sourceMap": "345:2294:15:-;;;712:39:2;380:10;731:19;;712:18;;;:39;;:::i;:::-;2485::10;2361:10;2504:19;;2485:18;;;:39;;:::i;:::-;1320:50:11;1137:10;1339:30;;1320:18;;;:50;;:::i;:::-;674:10:4;665:6;;:19;;;;;;;;;;;;;;;;;;732:6;;;;;;;;;;;699:40;;728:1;699:40;;;;;;;;;;;;345:2294:15;;1431:189:2;1521:10;1506:25;;:11;:25;;;;;1498:65;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1609:4;1573:20;:33;1594:11;1573:33;;;;;;;;;;;;;;;;;;:40;;;;;;;;;;;;;;;;;;1431:189;:::o;345:2294:15:-;;;;;;;",
  "deployedSourceMap": "345:2294:15:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;345:2294:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;907:133:2;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;907:133:2;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;4497:199:10;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;4497:199:10;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;3803:409;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;3803:409:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;2132:94:11;;;:::i;:::-;;;;;;;;;;;;;;;;;;;1765:177:15;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1765:177:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;1751:228:11;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1751:228:11;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;7050:132:10;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;7050:132:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;2564:195:11;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;2564:195:11;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;3160:222:10;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;3160:222:10;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;2735:206;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;2735:206:10;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;1949:94:15;;;:::i;:::-;;;;;;;;;;;;;;;;;;;1615:137:4;;;:::i;:::-;;822:85;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;1181:90;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;4989:242:10;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;4989:242:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;2049:588:15;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;2049:588:15;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;2049:588:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;2049:588:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;2049:588:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;2049:588:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;2049:588:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7885:262:10;;;;;;13:3:-1;8;5:12;2:2;;;30:1;27;20:12;2:2;7885:262:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;7885:262:10;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;7885:262:10;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;7885:262:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;7885:262:10;;;;;;;;;;;;;;;:::i;:::-;;5553:145;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;5553:145:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;880:724:15;;;;;;13:3:-1;8;5:12;2:2;;;30:1;27;20:12;2:2;880:724:15;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;880:724:15;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;880:724:15;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;880:724:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;880:724:15;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;880:724:15;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;880:724:15;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;880:724:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;880:724:15;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;880:724:15;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;880:724:15;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;880:724:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;880:724:15;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;880:724:15;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;880:724:15;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;880:724:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;880:724:15;;;;;;;;;;;;;;;:::i;:::-;;1901:115:4;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1901:115:4;;;;;;;;;;;;;;;;;;;:::i;:::-;;907:133:2;977:4;1000:20;:33;1021:11;1000:33;;;;;;;;;;;;;;;;;;;;;;;;;;;993:40;;907:133;;;:::o;4497:199:10:-;4556:7;4583:16;4591:7;4583;:16::i;:::-;4575:72;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4665:15;:24;4681:7;4665:24;;;;;;;;;;;;;;;;;;;;;4658:31;;4497:199;;;:::o;3803:409::-;3866:13;3882:16;3890:7;3882;:16::i;:::-;3866:32;;3922:5;3916:11;;:2;:11;;;;3908:56;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3997:5;3983:19;;:10;:19;;;:58;;;;4006:35;4023:5;4030:10;4006:16;:35::i;:::-;3983:58;3975:147;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4160:2;4133:15;:24;4149:7;4133:24;;;;;;;;;;;;:29;;;;;;;;;;;;;;;;;;4197:7;4193:2;4177:28;;4186:5;4177:28;;;;;;;;;;;;3803:409;;;:::o;2132:94:11:-;2176:7;2202:10;:17;;;;2195:24;;2132:94;:::o;1765:177:15:-;1847:37;1866:4;1872:2;1876:7;1847:18;:37::i;:::-;1894:10;:19;1905:7;1894:19;;;;;;;;;;;:32;;1932:2;1894:41;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;1894:41:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1765:177;;;:::o;1751:228:11:-;1831:7;1866:16;1876:5;1866:9;:16::i;:::-;1858:5;:24;1850:79;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1946:12;:19;1959:5;1946:19;;;;;;;;;;;;;;;1966:5;1946:26;;;;;;;;;;;;;;;;1939:33;;1751:228;;;;:::o;7050:132:10:-;7136:39;7153:4;7159:2;7163:7;7136:39;;;;;;;;;;;;:16;:39::i;:::-;7050:132;;;:::o;2564:195:11:-;2622:7;2657:13;:11;:13::i;:::-;2649:5;:21;2641:77;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2735:10;2746:5;2735:17;;;;;;;;;;;;;;;;2728:24;;2564:195;;;:::o;3160:222:10:-;3215:7;3234:13;3250:11;:20;3262:7;3250:20;;;;;;;;;;;;;;;;;;;;;3234:36;;3305:1;3288:19;;:5;:19;;;;3280:72;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3370:5;3363:12;;;3160:222;;;:::o;2735:206::-;2790:7;2834:1;2817:19;;:5;:19;;;;2809:73;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2900:34;:17;:24;2918:5;2900:24;;;;;;;;;;;;;;;:32;:34::i;:::-;2893:41;;2735:206;;;:::o;1949:94:15:-;2001:4;2023:13;:11;:13::i;:::-;2016:20;;1949:94;:::o;1615:137:4:-;1034:9;:7;:9::i;:::-;1026:54;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1713:1;1676:40;;1697:6;;;;;;;;;;;1676:40;;;;;;;;;;;;1743:1;1726:6;;:19;;;;;;;;;;;;;;;;;;1615:137::o;822:85::-;860:15;894:6;;;;;;;;;;;887:13;;822:85;:::o;1181:90::-;1221:4;1258:6;;;;;;;;;;;1244:20;;:10;:20;;;1237:27;;1181:90;:::o;4989:242:10:-;5074:10;5068:16;;:2;:16;;;;5060:53;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5161:8;5124:18;:30;5143:10;5124:30;;;;;;;;;;;;;;;:34;5155:2;5124:34;;;;;;;;;;;;;;;;:45;;;;;;;;;;;;;;;;;;5211:2;5184:40;;5199:10;5184:40;;;5215:8;5184:40;;;;;;;;;;;;;;;;;;;;;;4989:242;;:::o;2049:588:15:-;2105:7;2114:16;2132:13;2147;2162;2177;2192:7;2247:1;2218:10;:19;2229:7;2218:19;;;;;;;;;;;:27;;;:30;;2210:62;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2311:10;:19;2322:7;2311:19;;;;;;;;;;;:27;;;2356:10;:19;2367:7;2356:19;;;;;;;;;;;:32;;2406:10;:19;2417:7;2406:19;;;;;;;;;;;:25;;2449:10;:19;2460:7;2449:19;;;;;;;;;;;:25;;2492:10;:19;2503:7;2492:19;;;;;;;;;;;:31;;2541:10;:19;2552:7;2541:19;;;;;;;;;;;:28;;2587:10;:19;2598:7;2587:19;;;;;;;;;;;:29;;;2286:344;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2049:588;;;;;;;;;:::o;7885:262:10:-;7991:31;8004:4;8010:2;8014:7;7991:12;:31::i;:::-;8040:47;8062:4;8068:2;8072:7;8081:5;8040:21;:47::i;:::-;8032:108;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7885:262;;;;:::o;5553:145::-;5633:4;5656:18;:25;5675:5;5656:25;;;;;;;;;;;;;;;:35;5682:8;5656:35;;;;;;;;;;;;;;;;;;;;;;;;;5649:42;;5553:145;;;;:::o;880:724:15:-;1012:15;1042:1;1028:13;:11;:13::i;:::-;:15;1012:31;;1054:26;1060:10;1072:7;1054:5;:26::i;:::-;1090:29;1130;;:::i;:::-;1162:248;;;;;;;;1196:7;1162:248;;;;1232:12;1162:248;;;;1266:5;1162:248;;;;1293:5;1162:248;;;;1326:11;1162:248;;;;1362:8;1162:248;;;;1396:3;1162:248;;;1130:280;;1441:12;1421:10;:19;1432:7;1421:19;;;;;;;;;;;:32;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;1463:10;:19;1474:7;1463:19;;;;;;;;;;;:32;;1501:10;1463:49;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;1463:49:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1542:7;1528:64;1551:5;1558;1565:11;1578:8;1588:3;1528:64;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;1528:64:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;1528:64:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;1528:64:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;1528:64:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;880:724;;;;;;;:::o;1901:115:4:-;1034:9;:7;:9::i;:::-;1026:54;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1981:28;2000:8;1981:18;:28::i;:::-;1901:115;:::o;8342:152:10:-;8399:4;8415:13;8431:11;:20;8443:7;8431:20;;;;;;;;;;;;;;;;;;;;;8415:36;;8485:1;8468:19;;:5;:19;;;;8461:26;;;8342:152;;;:::o;6135:284::-;6277:39;6296:10;6308:7;6277:18;:39::i;:::-;6269:100;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6380:32;6394:4;6400:2;6404:7;6380:13;:32::i;:::-;6135:284;;;:::o;1063:112:0:-;1128:7;1154;:14;;;1147:21;;1063:112;;;:::o;12014:868:10:-;12134:4;12154:12;12177:23;12216:15;:2;:13;;;:15::i;:::-;12211:58;;12254:4;12247:11;;;;;;12211:58;12351:2;:7;;981:10;12395:16;;12413:10;12425:4;12431:7;12440:5;12372:74;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;12372:74:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;12372:74:10;;;;;;;38:4:-1;29:7;25:18;67:10;61:17;96:58;199:8;192:4;186;182:15;179:29;167:10;160:49;0:215;;;12372:74:10;12351:105;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;36:153;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;12351:105:10;;;;;;;;;;;;;;;;;;;;;;;;14:1:-1;21;16:31;;;;75:4;69:11;64:16;;144:4;140:9;133:4;115:16;111:27;107:43;104:1;100:51;94:4;87:65;169:16;166:1;159:27;225:16;222:1;215:4;212:1;208:12;193:49;7:242;;16:31;36:4;31:9;;7:242;;12327:129:10;;;;;;;;12491:1;12470:10;:17;:22;;:78;;;;;981:10;12532:16;;12496:52;;;12507:10;12496:32;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;12496:32:10;;;;;;;;;;;;;;;;:52;;;;12470:78;12466:120;;;12571:4;12564:11;;;;;;12466:120;12620:2;:7;;749:10;12664:15;;12681:10;12693:4;12699:7;12708:5;12641:73;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;12641:73:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;12641:73:10;;;;;;;38:4:-1;29:7;25:18;67:10;61:17;96:58;199:8;192:4;186;182:15;179:29;167:10;160:49;0:215;;;12641:73:10;12620:104;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;36:153;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;12620:104:10;;;;;;;;;;;;;;;;;;;;;;;;14:1:-1;21;16:31;;;;75:4;69:11;64:16;;144:4;140:9;133:4;115:16;111:27;107:43;104:1;100:51;94:4;87:65;169:16;166:1;159:27;225:16;222:1;215:4;212:1;208:12;193:49;7:242;;16:31;36:4;31:9;;7:242;;12596:128:10;;;;;;;;12759:1;12738:10;:17;:22;;:77;;;;;749:10;12800:15;;12764:51;;;12775:10;12764:32;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;12764:32:10;;;;;;;;;;;;;;;;:51;;;;12738:77;12734:119;;;12838:4;12831:11;;;;;;12734:119;12870:5;12863:12;;;;12014:868;;;;;;;:::o;3630:196:11:-;3693:24;3705:2;3709:7;3693:11;:24::i;:::-;3728:40;3756:2;3760:7;3728:27;:40::i;:::-;3779;3811:7;3779:31;:40::i;:::-;3630:196;;:::o;2117:233:4:-;2218:1;2198:22;;:8;:22;;;;2190:73;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2307:8;2278:38;;2299:6;;;;;;;;;;;2278:38;;;;;;;;;;;;2335:8;2326:6;;:17;;;;;;;;;;;;;;;;;;2117:233;:::o;8855:328:10:-;8940:4;8964:16;8972:7;8964;:16::i;:::-;8956:72;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;9038:13;9054:16;9062:7;9054;:16::i;:::-;9038:32;;9099:5;9088:16;;:7;:16;;;:51;;;;9132:7;9108:31;;:20;9120:7;9108:11;:20::i;:::-;:31;;;9088:51;:87;;;;9143:32;9160:5;9167:7;9143:16;:32::i;:::-;9088:87;9080:96;;;8855:328;;;;:::o;3134:239:11:-;3219:38;3239:4;3245:2;3249:7;3219:19;:38::i;:::-;3268:47;3301:4;3307:7;3268:32;:47::i;:::-;3326:40;3354:2;3358:7;3326:27;:40::i;:::-;3134:239;;;:::o;542:413:14:-;602:4;805:12;914:7;902:20;894:28;;947:1;940:4;:8;933:15;;;542:413;;;:::o;9428:325:10:-;9513:1;9499:16;;:2;:16;;;;9491:60;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;9570:16;9578:7;9570;:16::i;:::-;9569:17;9561:57;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;9652:2;9629:11;:20;9641:7;9629:20;;;;;;;;;;;;:25;;;;;;;;;;;;;;;;;;9664:33;:17;:21;9682:2;9664:21;;;;;;;;;;;;;;;:31;:33::i;:::-;9738:7;9734:2;9713:33;;9730:1;9713:33;;;;;;;;;;;;9428:325;;:::o;5088:183:11:-;5201:12;:16;5214:2;5201:16;;;;;;;;;;;;;;;:23;;;;5172:17;:26;5190:7;5172:26;;;;;;;;;;;:52;;;;5234:12;:16;5247:2;5234:16;;;;;;;;;;;;;;;5256:7;5234:30;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;5234:30:11;;;;;;;;;;;;;;;;;;;;;;5088:183;;:::o;5466:161::-;5569:10;:17;;;;5542:15;:24;5558:7;5542:24;;;;;;;;;;;:44;;;;5596:10;5612:7;5596:24;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;5596:24:11;;;;;;;;;;;;;;;;;;;;;;5466:161;:::o;10997:445:10:-;11110:4;11090:24;;:16;11098:7;11090;:16::i;:::-;:24;;;11082:77;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;11191:1;11177:16;;:2;:16;;;;11169:64;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;11244:23;11259:7;11244:14;:23::i;:::-;11278:35;:17;:23;11296:4;11278:23;;;;;;;;;;;;;;;:33;:35::i;:::-;11323:33;:17;:21;11341:2;11323:21;;;;;;;;;;;;;;;:31;:33::i;:::-;11390:2;11367:11;:20;11379:7;11367:20;;;;;;;;;;;;:25;;;;;;;;;;;;;;;;;;11427:7;11423:2;11408:27;;11417:4;11408:27;;;;;;;;;;;;10997:445;;;:::o;6242:1128:11:-;6504:22;6529:32;6559:1;6529:12;:18;6542:4;6529:18;;;;;;;;;;;;;;;:25;;;;:29;;:32;;;;:::i;:::-;6504:57;;6571:18;6592:17;:26;6610:7;6592:26;;;;;;;;;;;;6571:47;;6736:14;6722:10;:28;6718:323;;6766:19;6788:12;:18;6801:4;6788:18;;;;;;;;;;;;;;;6807:14;6788:34;;;;;;;;;;;;;;;;6766:56;;6870:11;6837:12;:18;6850:4;6837:18;;;;;;;;;;;;;;;6856:10;6837:30;;;;;;;;;;;;;;;:44;;;;6986:10;6953:17;:30;6971:11;6953:30;;;;;;;;;;;:43;;;;6718:323;;7127:12;:18;7140:4;7127:18;;;;;;;;;;;;;;;:27;;;;;;;;;;;;:::i;:::-;;6242:1128;;;;:::o;1181:89:0:-;1262:1;1244:7;:14;;;:19;;;;;;;;;;;1181:89;:::o;13044:171:10:-;13143:1;13107:38;;:15;:24;13123:7;13107:24;;;;;;;;;;;;;;;;;;;;;:38;;;13103:106;;13196:1;13161:15;:24;13177:7;13161:24;;;;;;;;;;;;:37;;;;;;;;;;;;;;;;;;13103:106;13044:171;:::o;1276:108:0:-;1356:21;1375:1;1356:7;:14;;;:18;;:21;;;;:::i;:::-;1339:7;:14;;:38;;;;1276:108;:::o;1274:134:3:-;1332:7;1358:43;1362:1;1365;1358:43;;;;;;;;;;;;;;;;;:3;:43::i;:::-;1351:50;;1274:134;;;;:::o;1732:187::-;1818:7;1850:1;1845;:6;;1853:12;1837:29;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;1837:29:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1876:9;1892:1;1888;:5;1876:17;;1911:1;1904:8;;;1732:187;;;;;:::o;345:2294:15:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
  "source": "pragma solidity 0.5.6;\n\nimport \"@klaytn/contracts/token/KIP17/KIP17Full.sol\";\nimport \"@klaytn/contracts/token/KIP17/KIP17.sol\";\nimport \"@klaytn/contracts/token/KIP17/KIP17Enumerable.sol\";\nimport \"@klaytn/contracts/token/KIP17/KIP17Metadata.sol\";\nimport \"@klaytn/contracts/drafts/Counters.sol\";\nimport \"@klaytn/contracts/ownership/Ownable.sol\";\n\ncontract MyNFTs is KIP17, KIP17Enumerable, Ownable{\n    event PhotoUploaded (uint indexed tokenId, string photo, string title, string description, string category, uint256 timestamp);\n    mapping(uint256 => PhotoData) private _photoList;\n\n    struct PhotoData{ //사진데이터 저장\n        uint256 tokenId; //토큰아이디\n        address[] ownerHistory; //소유자기록\n        string photo; //사진주소\n        string title; \n        string description;\n        string category;\n        uint256 timestamp;\n    }\n\n   \n\n    function uploadPhoto(string memory photo, string memory title, string memory description, string memory category) public {\n\n        uint256 tokenId=totalSupply()+1;\n\n        _mint(msg.sender, tokenId);\n        address[] memory ownerHistory;\n\n        PhotoData memory newPhotoData = PhotoData({\n            tokenId : tokenId,\n            ownerHistory : ownerHistory,\n            photo : photo,\n            title : title,\n            description : description,\n            category : category,\n            timestamp : now\n        });\n\n        _photoList[tokenId]=newPhotoData;\n        _photoList[tokenId].ownerHistory.push(msg.sender);\n\n        emit PhotoUploaded(tokenId, photo, title, description, category, now);\n    \n    }\n\n    //소유권이 이전될 때마다 새로운 소유자의 주소가 ownerHistory 배열에 추가되도록 하기 위해 transferFrom 함수 재정의\n    function transferFrom(address from, address to, uint256 tokenId) public {\n        super.transferFrom(from, to, tokenId);\n        _photoList[tokenId].ownerHistory.push(to);\n    }\n\n\n    function getTotalPhotoCount () public view returns (uint){\n        return totalSupply();\n    }\n\n    function getPhoto(uint tokenId) public view\n    returns(uint256, address[] memory, string memory, string memory, string memory, string memory, uint256){\n        require(_photoList[tokenId].tokenId!=0, \"Photo doesn't exist\");\n            return (\n                _photoList[tokenId].tokenId,\n                _photoList[tokenId].ownerHistory,\n                _photoList[tokenId].photo,\n                _photoList[tokenId].title,\n                _photoList[tokenId].description,\n                _photoList[tokenId].category,\n                _photoList[tokenId].timestamp\n            );\n    }\n}\n\n\n\n",
  "sourcePath": "/Users/jiwoo/Desktop/klay4/contracts/MyNFTs.sol",
  "ast": {
    "absolutePath": "project:/contracts/MyNFTs.sol",
    "exportedSymbols": {
      "MyNFTs": [
        1940
      ]
    },
    "id": 1941,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1731,
        "literals": [
          "solidity",
          "0.5",
          ".6"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:22:15"
      },
      {
        "absolutePath": "@klaytn/contracts/token/KIP17/KIP17Full.sol",
        "file": "@klaytn/contracts/token/KIP17/KIP17Full.sol",
        "id": 1732,
        "nodeType": "ImportDirective",
        "scope": 1941,
        "sourceUnit": 1582,
        "src": "24:53:15",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "@klaytn/contracts/token/KIP17/KIP17.sol",
        "file": "@klaytn/contracts/token/KIP17/KIP17.sol",
        "id": 1733,
        "nodeType": "ImportDirective",
        "scope": 1941,
        "sourceUnit": 1221,
        "src": "78:49:15",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "@klaytn/contracts/token/KIP17/KIP17Enumerable.sol",
        "file": "@klaytn/contracts/token/KIP17/KIP17Enumerable.sol",
        "id": 1734,
        "nodeType": "ImportDirective",
        "scope": 1941,
        "sourceUnit": 1558,
        "src": "128:59:15",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "@klaytn/contracts/token/KIP17/KIP17Metadata.sol",
        "file": "@klaytn/contracts/token/KIP17/KIP17Metadata.sol",
        "id": 1735,
        "nodeType": "ImportDirective",
        "scope": 1941,
        "sourceUnit": 1711,
        "src": "188:57:15",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "@klaytn/contracts/drafts/Counters.sol",
        "file": "@klaytn/contracts/drafts/Counters.sol",
        "id": 1736,
        "nodeType": "ImportDirective",
        "scope": 1941,
        "sourceUnit": 49,
        "src": "246:47:15",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "@klaytn/contracts/ownership/Ownable.sol",
        "file": "@klaytn/contracts/ownership/Ownable.sol",
        "id": 1737,
        "nodeType": "ImportDirective",
        "scope": 1941,
        "sourceUnit": 409,
        "src": "294:49:15",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 1738,
              "name": "KIP17",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1220,
              "src": "364:5:15",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_KIP17_$1220",
                "typeString": "contract KIP17"
              }
            },
            "id": 1739,
            "nodeType": "InheritanceSpecifier",
            "src": "364:5:15"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 1740,
              "name": "KIP17Enumerable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1557,
              "src": "371:15:15",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_KIP17Enumerable_$1557",
                "typeString": "contract KIP17Enumerable"
              }
            },
            "id": 1741,
            "nodeType": "InheritanceSpecifier",
            "src": "371:15:15"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 1742,
              "name": "Ownable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 408,
              "src": "388:7:15",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Ownable_$408",
                "typeString": "contract Ownable"
              }
            },
            "id": 1743,
            "nodeType": "InheritanceSpecifier",
            "src": "388:7:15"
          }
        ],
        "contractDependencies": [
          58,
          110,
          408,
          527,
          554,
          1220,
          1557
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 1940,
        "linearizedBaseContracts": [
          1940,
          408,
          1557,
          554,
          1220,
          527,
          110,
          58
        ],
        "name": "MyNFTs",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "anonymous": false,
            "documentation": null,
            "id": 1757,
            "name": "PhotoUploaded",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 1756,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1745,
                  "indexed": true,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 1757,
                  "src": "422:20:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1744,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "422:4:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1747,
                  "indexed": false,
                  "name": "photo",
                  "nodeType": "VariableDeclaration",
                  "scope": 1757,
                  "src": "444:12:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 1746,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "444:6:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1749,
                  "indexed": false,
                  "name": "title",
                  "nodeType": "VariableDeclaration",
                  "scope": 1757,
                  "src": "458:12:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 1748,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "458:6:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1751,
                  "indexed": false,
                  "name": "description",
                  "nodeType": "VariableDeclaration",
                  "scope": 1757,
                  "src": "472:18:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 1750,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "472:6:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1753,
                  "indexed": false,
                  "name": "category",
                  "nodeType": "VariableDeclaration",
                  "scope": 1757,
                  "src": "492:15:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 1752,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "492:6:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1755,
                  "indexed": false,
                  "name": "timestamp",
                  "nodeType": "VariableDeclaration",
                  "scope": 1757,
                  "src": "509:17:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1754,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "509:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "421:106:15"
            },
            "src": "401:127:15"
          },
          {
            "constant": false,
            "id": 1761,
            "name": "_photoList",
            "nodeType": "VariableDeclaration",
            "scope": 1940,
            "src": "533:48:15",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_PhotoData_$1777_storage_$",
              "typeString": "mapping(uint256 => struct MyNFTs.PhotoData)"
            },
            "typeName": {
              "id": 1760,
              "keyType": {
                "id": 1758,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "541:7:15",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "533:29:15",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_PhotoData_$1777_storage_$",
                "typeString": "mapping(uint256 => struct MyNFTs.PhotoData)"
              },
              "valueType": {
                "contractScope": null,
                "id": 1759,
                "name": "PhotoData",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 1777,
                "src": "552:9:15",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_PhotoData_$1777_storage_ptr",
                  "typeString": "struct MyNFTs.PhotoData"
                }
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "canonicalName": "MyNFTs.PhotoData",
            "id": 1777,
            "members": [
              {
                "constant": false,
                "id": 1763,
                "name": "tokenId",
                "nodeType": "VariableDeclaration",
                "scope": 1777,
                "src": "639:15:15",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 1762,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "639:7:15",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 1766,
                "name": "ownerHistory",
                "nodeType": "VariableDeclaration",
                "scope": 1777,
                "src": "682:22:15",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                  "typeString": "address[]"
                },
                "typeName": {
                  "baseType": {
                    "id": 1764,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "682:7:15",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 1765,
                  "length": null,
                  "nodeType": "ArrayTypeName",
                  "src": "682:9:15",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                    "typeString": "address[]"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 1768,
                "name": "photo",
                "nodeType": "VariableDeclaration",
                "scope": 1777,
                "src": "732:12:15",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 1767,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "732:6:15",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 1770,
                "name": "title",
                "nodeType": "VariableDeclaration",
                "scope": 1777,
                "src": "769:12:15",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 1769,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "769:6:15",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 1772,
                "name": "description",
                "nodeType": "VariableDeclaration",
                "scope": 1777,
                "src": "792:18:15",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 1771,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "792:6:15",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 1774,
                "name": "category",
                "nodeType": "VariableDeclaration",
                "scope": 1777,
                "src": "820:15:15",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 1773,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "820:6:15",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 1776,
                "name": "timestamp",
                "nodeType": "VariableDeclaration",
                "scope": 1777,
                "src": "845:17:15",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 1775,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "845:7:15",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "PhotoData",
            "nodeType": "StructDefinition",
            "scope": 1940,
            "src": "588:281:15",
            "visibility": "public"
          },
          {
            "body": {
              "id": 1842,
              "nodeType": "Block",
              "src": "1001:603:15",
              "statements": [
                {
                  "assignments": [
                    1789
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1789,
                      "name": "tokenId",
                      "nodeType": "VariableDeclaration",
                      "scope": 1842,
                      "src": "1012:15:15",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1788,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1012:7:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1794,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 1793,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 1790,
                        "name": "totalSupply",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          1292
                        ],
                        "referencedDeclaration": 1292,
                        "src": "1028:11:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                          "typeString": "function () view returns (uint256)"
                        }
                      },
                      "id": 1791,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1028:13:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "+",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "31",
                      "id": 1792,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1042:1:15",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "1028:15:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1012:31:15"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 1796,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1955,
                          "src": "1060:3:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 1797,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1060:10:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1798,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1789,
                        "src": "1072:7:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 1795,
                      "name": "_mint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1364
                      ],
                      "referencedDeclaration": 1364,
                      "src": "1054:5:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 1799,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1054:26:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1800,
                  "nodeType": "ExpressionStatement",
                  "src": "1054:26:15"
                },
                {
                  "assignments": [
                    1804
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1804,
                      "name": "ownerHistory",
                      "nodeType": "VariableDeclaration",
                      "scope": 1842,
                      "src": "1090:29:15",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                        "typeString": "address[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 1802,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "1090:7:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 1803,
                        "length": null,
                        "nodeType": "ArrayTypeName",
                        "src": "1090:9:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                          "typeString": "address[]"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1805,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1090:29:15"
                },
                {
                  "assignments": [
                    1807
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1807,
                      "name": "newPhotoData",
                      "nodeType": "VariableDeclaration",
                      "scope": 1842,
                      "src": "1130:29:15",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_PhotoData_$1777_memory_ptr",
                        "typeString": "struct MyNFTs.PhotoData"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 1806,
                        "name": "PhotoData",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 1777,
                        "src": "1130:9:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PhotoData_$1777_storage_ptr",
                          "typeString": "struct MyNFTs.PhotoData"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1817,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1809,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1789,
                        "src": "1196:7:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1810,
                        "name": "ownerHistory",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1804,
                        "src": "1232:12:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                          "typeString": "address[] memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1811,
                        "name": "photo",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1779,
                        "src": "1266:5:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1812,
                        "name": "title",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1781,
                        "src": "1293:5:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1813,
                        "name": "description",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1783,
                        "src": "1326:11:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1814,
                        "name": "category",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1785,
                        "src": "1362:8:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1815,
                        "name": "now",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1957,
                        "src": "1396:3:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": null,
                      "id": 1808,
                      "name": "PhotoData",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1777,
                      "src": "1162:9:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_struct$_PhotoData_$1777_storage_ptr_$",
                        "typeString": "type(struct MyNFTs.PhotoData storage pointer)"
                      }
                    },
                    "id": 1816,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "structConstructorCall",
                    "lValueRequested": false,
                    "names": [
                      "tokenId",
                      "ownerHistory",
                      "photo",
                      "title",
                      "description",
                      "category",
                      "timestamp"
                    ],
                    "nodeType": "FunctionCall",
                    "src": "1162:248:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PhotoData_$1777_memory",
                      "typeString": "struct MyNFTs.PhotoData memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1130:280:15"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1822,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 1818,
                        "name": "_photoList",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1761,
                        "src": "1421:10:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_PhotoData_$1777_storage_$",
                          "typeString": "mapping(uint256 => struct MyNFTs.PhotoData storage ref)"
                        }
                      },
                      "id": 1820,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 1819,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1789,
                        "src": "1432:7:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1421:19:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_PhotoData_$1777_storage",
                        "typeString": "struct MyNFTs.PhotoData storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 1821,
                      "name": "newPhotoData",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1807,
                      "src": "1441:12:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_PhotoData_$1777_memory_ptr",
                        "typeString": "struct MyNFTs.PhotoData memory"
                      }
                    },
                    "src": "1421:32:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PhotoData_$1777_storage",
                      "typeString": "struct MyNFTs.PhotoData storage ref"
                    }
                  },
                  "id": 1823,
                  "nodeType": "ExpressionStatement",
                  "src": "1421:32:15"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 1829,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1955,
                          "src": "1501:3:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 1830,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1501:10:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 1824,
                            "name": "_photoList",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1761,
                            "src": "1463:10:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_PhotoData_$1777_storage_$",
                              "typeString": "mapping(uint256 => struct MyNFTs.PhotoData storage ref)"
                            }
                          },
                          "id": 1826,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 1825,
                            "name": "tokenId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1789,
                            "src": "1474:7:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "1463:19:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_PhotoData_$1777_storage",
                            "typeString": "struct MyNFTs.PhotoData storage ref"
                          }
                        },
                        "id": 1827,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "ownerHistory",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 1766,
                        "src": "1463:32:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage",
                          "typeString": "address[] storage ref"
                        }
                      },
                      "id": 1828,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1463:37:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_address_$returns$_t_uint256_$",
                        "typeString": "function (address) returns (uint256)"
                      }
                    },
                    "id": 1831,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1463:49:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 1832,
                  "nodeType": "ExpressionStatement",
                  "src": "1463:49:15"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1834,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1789,
                        "src": "1542:7:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1835,
                        "name": "photo",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1779,
                        "src": "1551:5:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1836,
                        "name": "title",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1781,
                        "src": "1558:5:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1837,
                        "name": "description",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1783,
                        "src": "1565:11:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1838,
                        "name": "category",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1785,
                        "src": "1578:8:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1839,
                        "name": "now",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1957,
                        "src": "1588:3:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 1833,
                      "name": "PhotoUploaded",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1757,
                      "src": "1528:13:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,string memory,string memory,string memory,string memory,uint256)"
                      }
                    },
                    "id": 1840,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1528:64:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1841,
                  "nodeType": "EmitStatement",
                  "src": "1523:69:15"
                }
              ]
            },
            "documentation": null,
            "id": 1843,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "uploadPhoto",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1786,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1779,
                  "name": "photo",
                  "nodeType": "VariableDeclaration",
                  "scope": 1843,
                  "src": "901:19:15",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 1778,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "901:6:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1781,
                  "name": "title",
                  "nodeType": "VariableDeclaration",
                  "scope": 1843,
                  "src": "922:19:15",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 1780,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "922:6:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1783,
                  "name": "description",
                  "nodeType": "VariableDeclaration",
                  "scope": 1843,
                  "src": "943:25:15",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 1782,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "943:6:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1785,
                  "name": "category",
                  "nodeType": "VariableDeclaration",
                  "scope": 1843,
                  "src": "970:22:15",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 1784,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "970:6:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "900:93:15"
            },
            "returnParameters": {
              "id": 1787,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1001:0:15"
            },
            "scope": 1940,
            "src": "880:724:15",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1868,
              "nodeType": "Block",
              "src": "1837:105:15",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1855,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1845,
                        "src": "1866:4:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1856,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1847,
                        "src": "1872:2:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1857,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1849,
                        "src": "1876:7:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 1852,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2000,
                        "src": "1847:5:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_super$_MyNFTs_$1940",
                          "typeString": "contract super MyNFTs"
                        }
                      },
                      "id": 1854,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transferFrom",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 837,
                      "src": "1847:18:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 1858,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1847:37:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1859,
                  "nodeType": "ExpressionStatement",
                  "src": "1847:37:15"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1865,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1847,
                        "src": "1932:2:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 1860,
                            "name": "_photoList",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1761,
                            "src": "1894:10:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_PhotoData_$1777_storage_$",
                              "typeString": "mapping(uint256 => struct MyNFTs.PhotoData storage ref)"
                            }
                          },
                          "id": 1862,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 1861,
                            "name": "tokenId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1849,
                            "src": "1905:7:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "1894:19:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_PhotoData_$1777_storage",
                            "typeString": "struct MyNFTs.PhotoData storage ref"
                          }
                        },
                        "id": 1863,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "ownerHistory",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 1766,
                        "src": "1894:32:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage",
                          "typeString": "address[] storage ref"
                        }
                      },
                      "id": 1864,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1894:37:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_address_$returns$_t_uint256_$",
                        "typeString": "function (address) returns (uint256)"
                      }
                    },
                    "id": 1866,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1894:41:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 1867,
                  "nodeType": "ExpressionStatement",
                  "src": "1894:41:15"
                }
              ]
            },
            "documentation": null,
            "id": 1869,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1850,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1845,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 1869,
                  "src": "1787:12:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1844,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1787:7:15",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1847,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 1869,
                  "src": "1801:10:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1846,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1801:7:15",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1849,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 1869,
                  "src": "1813:15:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1848,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1813:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1786:43:15"
            },
            "returnParameters": {
              "id": 1851,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1837:0:15"
            },
            "scope": 1940,
            "src": "1765:177:15",
            "stateMutability": "nonpayable",
            "superFunction": 837,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1877,
              "nodeType": "Block",
              "src": "2006:37:15",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 1874,
                      "name": "totalSupply",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1292
                      ],
                      "referencedDeclaration": 1292,
                      "src": "2023:11:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                        "typeString": "function () view returns (uint256)"
                      }
                    },
                    "id": 1875,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2023:13:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 1873,
                  "id": 1876,
                  "nodeType": "Return",
                  "src": "2016:20:15"
                }
              ]
            },
            "documentation": null,
            "id": 1878,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getTotalPhotoCount",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1870,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1977:2:15"
            },
            "returnParameters": {
              "id": 1873,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1872,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1878,
                  "src": "2001:4:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1871,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2001:4:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2000:6:15"
            },
            "scope": 1940,
            "src": "1949:94:15",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1938,
              "nodeType": "Block",
              "src": "2200:437:15",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 1904,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 1899,
                              "name": "_photoList",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1761,
                              "src": "2218:10:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_PhotoData_$1777_storage_$",
                                "typeString": "mapping(uint256 => struct MyNFTs.PhotoData storage ref)"
                              }
                            },
                            "id": 1901,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 1900,
                              "name": "tokenId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1880,
                              "src": "2229:7:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "2218:19:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_PhotoData_$1777_storage",
                              "typeString": "struct MyNFTs.PhotoData storage ref"
                            }
                          },
                          "id": 1902,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "tokenId",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 1763,
                          "src": "2218:27:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 1903,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2247:1:15",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "2218:30:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "50686f746f20646f65736e2774206578697374",
                        "id": 1905,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2250:21:15",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_36600060bd872ce8cc8e2ca9823f0b536fd8b39187218abca3c18fbc5e527caf",
                          "typeString": "literal_string \"Photo doesn't exist\""
                        },
                        "value": "Photo doesn't exist"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_36600060bd872ce8cc8e2ca9823f0b536fd8b39187218abca3c18fbc5e527caf",
                          "typeString": "literal_string \"Photo doesn't exist\""
                        }
                      ],
                      "id": 1898,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1958,
                        1959
                      ],
                      "referencedDeclaration": 1959,
                      "src": "2210:7:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 1906,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2210:62:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1907,
                  "nodeType": "ExpressionStatement",
                  "src": "2210:62:15"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "components": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 1908,
                            "name": "_photoList",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1761,
                            "src": "2311:10:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_PhotoData_$1777_storage_$",
                              "typeString": "mapping(uint256 => struct MyNFTs.PhotoData storage ref)"
                            }
                          },
                          "id": 1910,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 1909,
                            "name": "tokenId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1880,
                            "src": "2322:7:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "2311:19:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_PhotoData_$1777_storage",
                            "typeString": "struct MyNFTs.PhotoData storage ref"
                          }
                        },
                        "id": 1911,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "tokenId",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 1763,
                        "src": "2311:27:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 1912,
                            "name": "_photoList",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1761,
                            "src": "2356:10:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_PhotoData_$1777_storage_$",
                              "typeString": "mapping(uint256 => struct MyNFTs.PhotoData storage ref)"
                            }
                          },
                          "id": 1914,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 1913,
                            "name": "tokenId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1880,
                            "src": "2367:7:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "2356:19:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_PhotoData_$1777_storage",
                            "typeString": "struct MyNFTs.PhotoData storage ref"
                          }
                        },
                        "id": 1915,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "ownerHistory",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 1766,
                        "src": "2356:32:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage",
                          "typeString": "address[] storage ref"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 1916,
                            "name": "_photoList",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1761,
                            "src": "2406:10:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_PhotoData_$1777_storage_$",
                              "typeString": "mapping(uint256 => struct MyNFTs.PhotoData storage ref)"
                            }
                          },
                          "id": 1918,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 1917,
                            "name": "tokenId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1880,
                            "src": "2417:7:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "2406:19:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_PhotoData_$1777_storage",
                            "typeString": "struct MyNFTs.PhotoData storage ref"
                          }
                        },
                        "id": 1919,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "photo",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 1768,
                        "src": "2406:25:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage",
                          "typeString": "string storage ref"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 1920,
                            "name": "_photoList",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1761,
                            "src": "2449:10:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_PhotoData_$1777_storage_$",
                              "typeString": "mapping(uint256 => struct MyNFTs.PhotoData storage ref)"
                            }
                          },
                          "id": 1922,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 1921,
                            "name": "tokenId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1880,
                            "src": "2460:7:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "2449:19:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_PhotoData_$1777_storage",
                            "typeString": "struct MyNFTs.PhotoData storage ref"
                          }
                        },
                        "id": 1923,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "title",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 1770,
                        "src": "2449:25:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage",
                          "typeString": "string storage ref"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 1924,
                            "name": "_photoList",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1761,
                            "src": "2492:10:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_PhotoData_$1777_storage_$",
                              "typeString": "mapping(uint256 => struct MyNFTs.PhotoData storage ref)"
                            }
                          },
                          "id": 1926,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 1925,
                            "name": "tokenId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1880,
                            "src": "2503:7:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "2492:19:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_PhotoData_$1777_storage",
                            "typeString": "struct MyNFTs.PhotoData storage ref"
                          }
                        },
                        "id": 1927,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "description",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 1772,
                        "src": "2492:31:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage",
                          "typeString": "string storage ref"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 1928,
                            "name": "_photoList",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1761,
                            "src": "2541:10:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_PhotoData_$1777_storage_$",
                              "typeString": "mapping(uint256 => struct MyNFTs.PhotoData storage ref)"
                            }
                          },
                          "id": 1930,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 1929,
                            "name": "tokenId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1880,
                            "src": "2552:7:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "2541:19:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_PhotoData_$1777_storage",
                            "typeString": "struct MyNFTs.PhotoData storage ref"
                          }
                        },
                        "id": 1931,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "category",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 1774,
                        "src": "2541:28:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage",
                          "typeString": "string storage ref"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 1932,
                            "name": "_photoList",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1761,
                            "src": "2587:10:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_PhotoData_$1777_storage_$",
                              "typeString": "mapping(uint256 => struct MyNFTs.PhotoData storage ref)"
                            }
                          },
                          "id": 1934,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 1933,
                            "name": "tokenId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1880,
                            "src": "2598:7:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "2587:19:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_PhotoData_$1777_storage",
                            "typeString": "struct MyNFTs.PhotoData storage ref"
                          }
                        },
                        "id": 1935,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "timestamp",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 1776,
                        "src": "2587:29:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "id": 1936,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "2293:337:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_array$_t_address_$dyn_storage_$_t_string_storage_$_t_string_storage_$_t_string_storage_$_t_string_storage_$_t_uint256_$",
                      "typeString": "tuple(uint256,address[] storage ref,string storage ref,string storage ref,string storage ref,string storage ref,uint256)"
                    }
                  },
                  "functionReturnParameters": 1897,
                  "id": 1937,
                  "nodeType": "Return",
                  "src": "2286:344:15"
                }
              ]
            },
            "documentation": null,
            "id": 1939,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getPhoto",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1881,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1880,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 1939,
                  "src": "2067:12:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1879,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2067:4:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2066:14:15"
            },
            "returnParameters": {
              "id": 1897,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1883,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1939,
                  "src": "2105:7:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1882,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2105:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1886,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1939,
                  "src": "2114:16:15",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 1884,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2114:7:15",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 1885,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "2114:9:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1888,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1939,
                  "src": "2132:13:15",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 1887,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2132:6:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1890,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1939,
                  "src": "2147:13:15",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 1889,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2147:6:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1892,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1939,
                  "src": "2162:13:15",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 1891,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2162:6:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1894,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1939,
                  "src": "2177:13:15",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 1893,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2177:6:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1896,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1939,
                  "src": "2192:7:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1895,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2192:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2104:96:15"
            },
            "scope": 1940,
            "src": "2049:588:15",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 1941,
        "src": "345:2294:15"
      }
    ],
    "src": "0:2643:15"
  },
  "legacyAST": {
    "attributes": {
      "absolutePath": "project:/contracts/MyNFTs.sol",
      "exportedSymbols": {
        "MyNFTs": [
          1940
        ]
      }
    },
    "children": [
      {
        "attributes": {
          "literals": [
            "solidity",
            "0.5",
            ".6"
          ]
        },
        "id": 1731,
        "name": "PragmaDirective",
        "src": "0:22:15"
      },
      {
        "attributes": {
          "SourceUnit": 1582,
          "absolutePath": "@klaytn/contracts/token/KIP17/KIP17Full.sol",
          "file": "@klaytn/contracts/token/KIP17/KIP17Full.sol",
          "scope": 1941,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 1732,
        "name": "ImportDirective",
        "src": "24:53:15"
      },
      {
        "attributes": {
          "SourceUnit": 1221,
          "absolutePath": "@klaytn/contracts/token/KIP17/KIP17.sol",
          "file": "@klaytn/contracts/token/KIP17/KIP17.sol",
          "scope": 1941,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 1733,
        "name": "ImportDirective",
        "src": "78:49:15"
      },
      {
        "attributes": {
          "SourceUnit": 1558,
          "absolutePath": "@klaytn/contracts/token/KIP17/KIP17Enumerable.sol",
          "file": "@klaytn/contracts/token/KIP17/KIP17Enumerable.sol",
          "scope": 1941,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 1734,
        "name": "ImportDirective",
        "src": "128:59:15"
      },
      {
        "attributes": {
          "SourceUnit": 1711,
          "absolutePath": "@klaytn/contracts/token/KIP17/KIP17Metadata.sol",
          "file": "@klaytn/contracts/token/KIP17/KIP17Metadata.sol",
          "scope": 1941,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 1735,
        "name": "ImportDirective",
        "src": "188:57:15"
      },
      {
        "attributes": {
          "SourceUnit": 49,
          "absolutePath": "@klaytn/contracts/drafts/Counters.sol",
          "file": "@klaytn/contracts/drafts/Counters.sol",
          "scope": 1941,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 1736,
        "name": "ImportDirective",
        "src": "246:47:15"
      },
      {
        "attributes": {
          "SourceUnit": 409,
          "absolutePath": "@klaytn/contracts/ownership/Ownable.sol",
          "file": "@klaytn/contracts/ownership/Ownable.sol",
          "scope": 1941,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 1737,
        "name": "ImportDirective",
        "src": "294:49:15"
      },
      {
        "attributes": {
          "contractDependencies": [
            58,
            110,
            408,
            527,
            554,
            1220,
            1557
          ],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            1940,
            408,
            1557,
            554,
            1220,
            527,
            110,
            58
          ],
          "name": "MyNFTs",
          "scope": 1941
        },
        "children": [
          {
            "attributes": {
              "arguments": null
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "KIP17",
                  "referencedDeclaration": 1220,
                  "type": "contract KIP17"
                },
                "id": 1738,
                "name": "UserDefinedTypeName",
                "src": "364:5:15"
              }
            ],
            "id": 1739,
            "name": "InheritanceSpecifier",
            "src": "364:5:15"
          },
          {
            "attributes": {
              "arguments": null
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "KIP17Enumerable",
                  "referencedDeclaration": 1557,
                  "type": "contract KIP17Enumerable"
                },
                "id": 1740,
                "name": "UserDefinedTypeName",
                "src": "371:15:15"
              }
            ],
            "id": 1741,
            "name": "InheritanceSpecifier",
            "src": "371:15:15"
          },
          {
            "attributes": {
              "arguments": null
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "Ownable",
                  "referencedDeclaration": 408,
                  "type": "contract Ownable"
                },
                "id": 1742,
                "name": "UserDefinedTypeName",
                "src": "388:7:15"
              }
            ],
            "id": 1743,
            "name": "InheritanceSpecifier",
            "src": "388:7:15"
          },
          {
            "attributes": {
              "anonymous": false,
              "documentation": null,
              "name": "PhotoUploaded"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "tokenId",
                      "scope": 1757,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 1744,
                        "name": "ElementaryTypeName",
                        "src": "422:4:15"
                      }
                    ],
                    "id": 1745,
                    "name": "VariableDeclaration",
                    "src": "422:20:15"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "photo",
                      "scope": 1757,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "string",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string"
                        },
                        "id": 1746,
                        "name": "ElementaryTypeName",
                        "src": "444:6:15"
                      }
                    ],
                    "id": 1747,
                    "name": "VariableDeclaration",
                    "src": "444:12:15"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "title",
                      "scope": 1757,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "string",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string"
                        },
                        "id": 1748,
                        "name": "ElementaryTypeName",
                        "src": "458:6:15"
                      }
                    ],
                    "id": 1749,
                    "name": "VariableDeclaration",
                    "src": "458:12:15"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "description",
                      "scope": 1757,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "string",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string"
                        },
                        "id": 1750,
                        "name": "ElementaryTypeName",
                        "src": "472:6:15"
                      }
                    ],
                    "id": 1751,
                    "name": "VariableDeclaration",
                    "src": "472:18:15"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "category",
                      "scope": 1757,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "string",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string"
                        },
                        "id": 1752,
                        "name": "ElementaryTypeName",
                        "src": "492:6:15"
                      }
                    ],
                    "id": 1753,
                    "name": "VariableDeclaration",
                    "src": "492:15:15"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "timestamp",
                      "scope": 1757,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 1754,
                        "name": "ElementaryTypeName",
                        "src": "509:7:15"
                      }
                    ],
                    "id": 1755,
                    "name": "VariableDeclaration",
                    "src": "509:17:15"
                  }
                ],
                "id": 1756,
                "name": "ParameterList",
                "src": "421:106:15"
              }
            ],
            "id": 1757,
            "name": "EventDefinition",
            "src": "401:127:15"
          },
          {
            "attributes": {
              "constant": false,
              "name": "_photoList",
              "scope": 1940,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(uint256 => struct MyNFTs.PhotoData)",
              "value": null,
              "visibility": "private"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(uint256 => struct MyNFTs.PhotoData)"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "uint256",
                      "type": "uint256"
                    },
                    "id": 1758,
                    "name": "ElementaryTypeName",
                    "src": "541:7:15"
                  },
                  {
                    "attributes": {
                      "contractScope": null,
                      "name": "PhotoData",
                      "referencedDeclaration": 1777,
                      "type": "struct MyNFTs.PhotoData"
                    },
                    "id": 1759,
                    "name": "UserDefinedTypeName",
                    "src": "552:9:15"
                  }
                ],
                "id": 1760,
                "name": "Mapping",
                "src": "533:29:15"
              }
            ],
            "id": 1761,
            "name": "VariableDeclaration",
            "src": "533:48:15"
          },
          {
            "attributes": {
              "canonicalName": "MyNFTs.PhotoData",
              "name": "PhotoData",
              "scope": 1940,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "constant": false,
                  "name": "tokenId",
                  "scope": 1777,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "uint256",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "uint256",
                      "type": "uint256"
                    },
                    "id": 1762,
                    "name": "ElementaryTypeName",
                    "src": "639:7:15"
                  }
                ],
                "id": 1763,
                "name": "VariableDeclaration",
                "src": "639:15:15"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "ownerHistory",
                  "scope": 1777,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "address[]",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "length": null,
                      "type": "address[]"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "stateMutability": "nonpayable",
                          "type": "address"
                        },
                        "id": 1764,
                        "name": "ElementaryTypeName",
                        "src": "682:7:15"
                      }
                    ],
                    "id": 1765,
                    "name": "ArrayTypeName",
                    "src": "682:9:15"
                  }
                ],
                "id": 1766,
                "name": "VariableDeclaration",
                "src": "682:22:15"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "photo",
                  "scope": 1777,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "string",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "string",
                      "type": "string"
                    },
                    "id": 1767,
                    "name": "ElementaryTypeName",
                    "src": "732:6:15"
                  }
                ],
                "id": 1768,
                "name": "VariableDeclaration",
                "src": "732:12:15"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "title",
                  "scope": 1777,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "string",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "string",
                      "type": "string"
                    },
                    "id": 1769,
                    "name": "ElementaryTypeName",
                    "src": "769:6:15"
                  }
                ],
                "id": 1770,
                "name": "VariableDeclaration",
                "src": "769:12:15"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "description",
                  "scope": 1777,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "string",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "string",
                      "type": "string"
                    },
                    "id": 1771,
                    "name": "ElementaryTypeName",
                    "src": "792:6:15"
                  }
                ],
                "id": 1772,
                "name": "VariableDeclaration",
                "src": "792:18:15"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "category",
                  "scope": 1777,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "string",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "string",
                      "type": "string"
                    },
                    "id": 1773,
                    "name": "ElementaryTypeName",
                    "src": "820:6:15"
                  }
                ],
                "id": 1774,
                "name": "VariableDeclaration",
                "src": "820:15:15"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "timestamp",
                  "scope": 1777,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "uint256",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "uint256",
                      "type": "uint256"
                    },
                    "id": 1775,
                    "name": "ElementaryTypeName",
                    "src": "845:7:15"
                  }
                ],
                "id": 1776,
                "name": "VariableDeclaration",
                "src": "845:17:15"
              }
            ],
            "id": 1777,
            "name": "StructDefinition",
            "src": "588:281:15"
          },
          {
            "attributes": {
              "documentation": null,
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "uploadPhoto",
              "scope": 1940,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "photo",
                      "scope": 1843,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "string",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string"
                        },
                        "id": 1778,
                        "name": "ElementaryTypeName",
                        "src": "901:6:15"
                      }
                    ],
                    "id": 1779,
                    "name": "VariableDeclaration",
                    "src": "901:19:15"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "title",
                      "scope": 1843,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "string",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string"
                        },
                        "id": 1780,
                        "name": "ElementaryTypeName",
                        "src": "922:6:15"
                      }
                    ],
                    "id": 1781,
                    "name": "VariableDeclaration",
                    "src": "922:19:15"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "description",
                      "scope": 1843,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "string",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string"
                        },
                        "id": 1782,
                        "name": "ElementaryTypeName",
                        "src": "943:6:15"
                      }
                    ],
                    "id": 1783,
                    "name": "VariableDeclaration",
                    "src": "943:25:15"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "category",
                      "scope": 1843,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "string",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string"
                        },
                        "id": 1784,
                        "name": "ElementaryTypeName",
                        "src": "970:6:15"
                      }
                    ],
                    "id": 1785,
                    "name": "VariableDeclaration",
                    "src": "970:22:15"
                  }
                ],
                "id": 1786,
                "name": "ParameterList",
                "src": "900:93:15"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 1787,
                "name": "ParameterList",
                "src": "1001:0:15"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        1789
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "tokenId",
                          "scope": 1842,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint256",
                              "type": "uint256"
                            },
                            "id": 1788,
                            "name": "ElementaryTypeName",
                            "src": "1012:7:15"
                          }
                        ],
                        "id": 1789,
                        "name": "VariableDeclaration",
                        "src": "1012:15:15"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "+",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "arguments": [
                                null
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "uint256",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    null
                                  ],
                                  "overloadedDeclarations": [
                                    1292
                                  ],
                                  "referencedDeclaration": 1292,
                                  "type": "function () view returns (uint256)",
                                  "value": "totalSupply"
                                },
                                "id": 1790,
                                "name": "Identifier",
                                "src": "1028:11:15"
                              }
                            ],
                            "id": 1791,
                            "name": "FunctionCall",
                            "src": "1028:13:15"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "31",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 1",
                              "value": "1"
                            },
                            "id": 1792,
                            "name": "Literal",
                            "src": "1042:1:15"
                          }
                        ],
                        "id": 1793,
                        "name": "BinaryOperation",
                        "src": "1028:15:15"
                      }
                    ],
                    "id": 1794,
                    "name": "VariableDeclarationStatement",
                    "src": "1012:31:15"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address_payable",
                                  "typeString": "address payable"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                1364
                              ],
                              "referencedDeclaration": 1364,
                              "type": "function (address,uint256)",
                              "value": "_mint"
                            },
                            "id": 1795,
                            "name": "Identifier",
                            "src": "1054:5:15"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "sender",
                              "referencedDeclaration": null,
                              "type": "address payable"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1955,
                                  "type": "msg",
                                  "value": "msg"
                                },
                                "id": 1796,
                                "name": "Identifier",
                                "src": "1060:3:15"
                              }
                            ],
                            "id": 1797,
                            "name": "MemberAccess",
                            "src": "1060:10:15"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1789,
                              "type": "uint256",
                              "value": "tokenId"
                            },
                            "id": 1798,
                            "name": "Identifier",
                            "src": "1072:7:15"
                          }
                        ],
                        "id": 1799,
                        "name": "FunctionCall",
                        "src": "1054:26:15"
                      }
                    ],
                    "id": 1800,
                    "name": "ExpressionStatement",
                    "src": "1054:26:15"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        1804
                      ],
                      "initialValue": null
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "ownerHistory",
                          "scope": 1842,
                          "stateVariable": false,
                          "storageLocation": "memory",
                          "type": "address[]",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "length": null,
                              "type": "address[]"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "name": "address",
                                  "type": "address"
                                },
                                "id": 1802,
                                "name": "ElementaryTypeName",
                                "src": "1090:7:15"
                              }
                            ],
                            "id": 1803,
                            "name": "ArrayTypeName",
                            "src": "1090:9:15"
                          }
                        ],
                        "id": 1804,
                        "name": "VariableDeclaration",
                        "src": "1090:29:15"
                      }
                    ],
                    "id": 1805,
                    "name": "VariableDeclarationStatement",
                    "src": "1090:29:15"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        1807
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "newPhotoData",
                          "scope": 1842,
                          "stateVariable": false,
                          "storageLocation": "memory",
                          "type": "struct MyNFTs.PhotoData",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "contractScope": null,
                              "name": "PhotoData",
                              "referencedDeclaration": 1777,
                              "type": "struct MyNFTs.PhotoData"
                            },
                            "id": 1806,
                            "name": "UserDefinedTypeName",
                            "src": "1130:9:15"
                          }
                        ],
                        "id": 1807,
                        "name": "VariableDeclaration",
                        "src": "1130:29:15"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": true,
                          "lValueRequested": false,
                          "names": [
                            "tokenId",
                            "ownerHistory",
                            "photo",
                            "title",
                            "description",
                            "category",
                            "timestamp"
                          ],
                          "type": "struct MyNFTs.PhotoData memory",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1777,
                              "type": "type(struct MyNFTs.PhotoData storage pointer)",
                              "value": "PhotoData"
                            },
                            "id": 1808,
                            "name": "Identifier",
                            "src": "1162:9:15"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1789,
                              "type": "uint256",
                              "value": "tokenId"
                            },
                            "id": 1809,
                            "name": "Identifier",
                            "src": "1196:7:15"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1804,
                              "type": "address[] memory",
                              "value": "ownerHistory"
                            },
                            "id": 1810,
                            "name": "Identifier",
                            "src": "1232:12:15"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1779,
                              "type": "string memory",
                              "value": "photo"
                            },
                            "id": 1811,
                            "name": "Identifier",
                            "src": "1266:5:15"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1781,
                              "type": "string memory",
                              "value": "title"
                            },
                            "id": 1812,
                            "name": "Identifier",
                            "src": "1293:5:15"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1783,
                              "type": "string memory",
                              "value": "description"
                            },
                            "id": 1813,
                            "name": "Identifier",
                            "src": "1326:11:15"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1785,
                              "type": "string memory",
                              "value": "category"
                            },
                            "id": 1814,
                            "name": "Identifier",
                            "src": "1362:8:15"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1957,
                              "type": "uint256",
                              "value": "now"
                            },
                            "id": 1815,
                            "name": "Identifier",
                            "src": "1396:3:15"
                          }
                        ],
                        "id": 1816,
                        "name": "FunctionCall",
                        "src": "1162:248:15"
                      }
                    ],
                    "id": 1817,
                    "name": "VariableDeclarationStatement",
                    "src": "1130:280:15"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "struct MyNFTs.PhotoData storage ref"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "struct MyNFTs.PhotoData storage ref"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1761,
                                  "type": "mapping(uint256 => struct MyNFTs.PhotoData storage ref)",
                                  "value": "_photoList"
                                },
                                "id": 1818,
                                "name": "Identifier",
                                "src": "1421:10:15"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1789,
                                  "type": "uint256",
                                  "value": "tokenId"
                                },
                                "id": 1819,
                                "name": "Identifier",
                                "src": "1432:7:15"
                              }
                            ],
                            "id": 1820,
                            "name": "IndexAccess",
                            "src": "1421:19:15"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1807,
                              "type": "struct MyNFTs.PhotoData memory",
                              "value": "newPhotoData"
                            },
                            "id": 1821,
                            "name": "Identifier",
                            "src": "1441:12:15"
                          }
                        ],
                        "id": 1822,
                        "name": "Assignment",
                        "src": "1421:32:15"
                      }
                    ],
                    "id": 1823,
                    "name": "ExpressionStatement",
                    "src": "1421:32:15"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "uint256",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address_payable",
                                  "typeString": "address payable"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "push",
                              "referencedDeclaration": null,
                              "type": "function (address) returns (uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "ownerHistory",
                                  "referencedDeclaration": 1766,
                                  "type": "address[] storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "type": "struct MyNFTs.PhotoData storage ref"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 1761,
                                          "type": "mapping(uint256 => struct MyNFTs.PhotoData storage ref)",
                                          "value": "_photoList"
                                        },
                                        "id": 1824,
                                        "name": "Identifier",
                                        "src": "1463:10:15"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 1789,
                                          "type": "uint256",
                                          "value": "tokenId"
                                        },
                                        "id": 1825,
                                        "name": "Identifier",
                                        "src": "1474:7:15"
                                      }
                                    ],
                                    "id": 1826,
                                    "name": "IndexAccess",
                                    "src": "1463:19:15"
                                  }
                                ],
                                "id": 1827,
                                "name": "MemberAccess",
                                "src": "1463:32:15"
                              }
                            ],
                            "id": 1828,
                            "name": "MemberAccess",
                            "src": "1463:37:15"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "sender",
                              "referencedDeclaration": null,
                              "type": "address payable"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1955,
                                  "type": "msg",
                                  "value": "msg"
                                },
                                "id": 1829,
                                "name": "Identifier",
                                "src": "1501:3:15"
                              }
                            ],
                            "id": 1830,
                            "name": "MemberAccess",
                            "src": "1501:10:15"
                          }
                        ],
                        "id": 1831,
                        "name": "FunctionCall",
                        "src": "1463:49:15"
                      }
                    ],
                    "id": 1832,
                    "name": "ExpressionStatement",
                    "src": "1463:49:15"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                },
                                {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                },
                                {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                },
                                {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1757,
                              "type": "function (uint256,string memory,string memory,string memory,string memory,uint256)",
                              "value": "PhotoUploaded"
                            },
                            "id": 1833,
                            "name": "Identifier",
                            "src": "1528:13:15"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1789,
                              "type": "uint256",
                              "value": "tokenId"
                            },
                            "id": 1834,
                            "name": "Identifier",
                            "src": "1542:7:15"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1779,
                              "type": "string memory",
                              "value": "photo"
                            },
                            "id": 1835,
                            "name": "Identifier",
                            "src": "1551:5:15"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1781,
                              "type": "string memory",
                              "value": "title"
                            },
                            "id": 1836,
                            "name": "Identifier",
                            "src": "1558:5:15"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1783,
                              "type": "string memory",
                              "value": "description"
                            },
                            "id": 1837,
                            "name": "Identifier",
                            "src": "1565:11:15"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1785,
                              "type": "string memory",
                              "value": "category"
                            },
                            "id": 1838,
                            "name": "Identifier",
                            "src": "1578:8:15"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1957,
                              "type": "uint256",
                              "value": "now"
                            },
                            "id": 1839,
                            "name": "Identifier",
                            "src": "1588:3:15"
                          }
                        ],
                        "id": 1840,
                        "name": "FunctionCall",
                        "src": "1528:64:15"
                      }
                    ],
                    "id": 1841,
                    "name": "EmitStatement",
                    "src": "1523:69:15"
                  }
                ],
                "id": 1842,
                "name": "Block",
                "src": "1001:603:15"
              }
            ],
            "id": 1843,
            "name": "FunctionDefinition",
            "src": "880:724:15"
          },
          {
            "attributes": {
              "documentation": null,
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "transferFrom",
              "scope": 1940,
              "stateMutability": "nonpayable",
              "superFunction": 837,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "from",
                      "scope": 1869,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "stateMutability": "nonpayable",
                          "type": "address"
                        },
                        "id": 1844,
                        "name": "ElementaryTypeName",
                        "src": "1787:7:15"
                      }
                    ],
                    "id": 1845,
                    "name": "VariableDeclaration",
                    "src": "1787:12:15"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "to",
                      "scope": 1869,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "stateMutability": "nonpayable",
                          "type": "address"
                        },
                        "id": 1846,
                        "name": "ElementaryTypeName",
                        "src": "1801:7:15"
                      }
                    ],
                    "id": 1847,
                    "name": "VariableDeclaration",
                    "src": "1801:10:15"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "tokenId",
                      "scope": 1869,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 1848,
                        "name": "ElementaryTypeName",
                        "src": "1813:7:15"
                      }
                    ],
                    "id": 1849,
                    "name": "VariableDeclaration",
                    "src": "1813:15:15"
                  }
                ],
                "id": 1850,
                "name": "ParameterList",
                "src": "1786:43:15"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 1851,
                "name": "ParameterList",
                "src": "1837:0:15"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "transferFrom",
                              "referencedDeclaration": 837,
                              "type": "function (address,address,uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2000,
                                  "type": "contract super MyNFTs",
                                  "value": "super"
                                },
                                "id": 1852,
                                "name": "Identifier",
                                "src": "1847:5:15"
                              }
                            ],
                            "id": 1854,
                            "name": "MemberAccess",
                            "src": "1847:18:15"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1845,
                              "type": "address",
                              "value": "from"
                            },
                            "id": 1855,
                            "name": "Identifier",
                            "src": "1866:4:15"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1847,
                              "type": "address",
                              "value": "to"
                            },
                            "id": 1856,
                            "name": "Identifier",
                            "src": "1872:2:15"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1849,
                              "type": "uint256",
                              "value": "tokenId"
                            },
                            "id": 1857,
                            "name": "Identifier",
                            "src": "1876:7:15"
                          }
                        ],
                        "id": 1858,
                        "name": "FunctionCall",
                        "src": "1847:37:15"
                      }
                    ],
                    "id": 1859,
                    "name": "ExpressionStatement",
                    "src": "1847:37:15"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "uint256",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "push",
                              "referencedDeclaration": null,
                              "type": "function (address) returns (uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "ownerHistory",
                                  "referencedDeclaration": 1766,
                                  "type": "address[] storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "type": "struct MyNFTs.PhotoData storage ref"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 1761,
                                          "type": "mapping(uint256 => struct MyNFTs.PhotoData storage ref)",
                                          "value": "_photoList"
                                        },
                                        "id": 1860,
                                        "name": "Identifier",
                                        "src": "1894:10:15"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 1849,
                                          "type": "uint256",
                                          "value": "tokenId"
                                        },
                                        "id": 1861,
                                        "name": "Identifier",
                                        "src": "1905:7:15"
                                      }
                                    ],
                                    "id": 1862,
                                    "name": "IndexAccess",
                                    "src": "1894:19:15"
                                  }
                                ],
                                "id": 1863,
                                "name": "MemberAccess",
                                "src": "1894:32:15"
                              }
                            ],
                            "id": 1864,
                            "name": "MemberAccess",
                            "src": "1894:37:15"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1847,
                              "type": "address",
                              "value": "to"
                            },
                            "id": 1865,
                            "name": "Identifier",
                            "src": "1932:2:15"
                          }
                        ],
                        "id": 1866,
                        "name": "FunctionCall",
                        "src": "1894:41:15"
                      }
                    ],
                    "id": 1867,
                    "name": "ExpressionStatement",
                    "src": "1894:41:15"
                  }
                ],
                "id": 1868,
                "name": "Block",
                "src": "1837:105:15"
              }
            ],
            "id": 1869,
            "name": "FunctionDefinition",
            "src": "1765:177:15"
          },
          {
            "attributes": {
              "documentation": null,
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "getTotalPhotoCount",
              "scope": 1940,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 1870,
                "name": "ParameterList",
                "src": "1977:2:15"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 1878,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 1871,
                        "name": "ElementaryTypeName",
                        "src": "2001:4:15"
                      }
                    ],
                    "id": 1872,
                    "name": "VariableDeclaration",
                    "src": "2001:4:15"
                  }
                ],
                "id": 1873,
                "name": "ParameterList",
                "src": "2000:6:15"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 1873
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "arguments": [
                            null
                          ],
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "uint256",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                null
                              ],
                              "overloadedDeclarations": [
                                1292
                              ],
                              "referencedDeclaration": 1292,
                              "type": "function () view returns (uint256)",
                              "value": "totalSupply"
                            },
                            "id": 1874,
                            "name": "Identifier",
                            "src": "2023:11:15"
                          }
                        ],
                        "id": 1875,
                        "name": "FunctionCall",
                        "src": "2023:13:15"
                      }
                    ],
                    "id": 1876,
                    "name": "Return",
                    "src": "2016:20:15"
                  }
                ],
                "id": 1877,
                "name": "Block",
                "src": "2006:37:15"
              }
            ],
            "id": 1878,
            "name": "FunctionDefinition",
            "src": "1949:94:15"
          },
          {
            "attributes": {
              "documentation": null,
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "getPhoto",
              "scope": 1940,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "tokenId",
                      "scope": 1939,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 1879,
                        "name": "ElementaryTypeName",
                        "src": "2067:4:15"
                      }
                    ],
                    "id": 1880,
                    "name": "VariableDeclaration",
                    "src": "2067:12:15"
                  }
                ],
                "id": 1881,
                "name": "ParameterList",
                "src": "2066:14:15"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 1939,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 1882,
                        "name": "ElementaryTypeName",
                        "src": "2105:7:15"
                      }
                    ],
                    "id": 1883,
                    "name": "VariableDeclaration",
                    "src": "2105:7:15"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 1939,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "address[]",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "length": null,
                          "type": "address[]"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "address",
                              "stateMutability": "nonpayable",
                              "type": "address"
                            },
                            "id": 1884,
                            "name": "ElementaryTypeName",
                            "src": "2114:7:15"
                          }
                        ],
                        "id": 1885,
                        "name": "ArrayTypeName",
                        "src": "2114:9:15"
                      }
                    ],
                    "id": 1886,
                    "name": "VariableDeclaration",
                    "src": "2114:16:15"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 1939,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "string",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string"
                        },
                        "id": 1887,
                        "name": "ElementaryTypeName",
                        "src": "2132:6:15"
                      }
                    ],
                    "id": 1888,
                    "name": "VariableDeclaration",
                    "src": "2132:13:15"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 1939,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "string",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string"
                        },
                        "id": 1889,
                        "name": "ElementaryTypeName",
                        "src": "2147:6:15"
                      }
                    ],
                    "id": 1890,
                    "name": "VariableDeclaration",
                    "src": "2147:13:15"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 1939,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "string",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string"
                        },
                        "id": 1891,
                        "name": "ElementaryTypeName",
                        "src": "2162:6:15"
                      }
                    ],
                    "id": 1892,
                    "name": "VariableDeclaration",
                    "src": "2162:13:15"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 1939,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "string",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string"
                        },
                        "id": 1893,
                        "name": "ElementaryTypeName",
                        "src": "2177:6:15"
                      }
                    ],
                    "id": 1894,
                    "name": "VariableDeclaration",
                    "src": "2177:13:15"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 1939,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 1895,
                        "name": "ElementaryTypeName",
                        "src": "2192:7:15"
                      }
                    ],
                    "id": 1896,
                    "name": "VariableDeclaration",
                    "src": "2192:7:15"
                  }
                ],
                "id": 1897,
                "name": "ParameterList",
                "src": "2104:96:15"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                },
                                {
                                  "typeIdentifier": "t_stringliteral_36600060bd872ce8cc8e2ca9823f0b536fd8b39187218abca3c18fbc5e527caf",
                                  "typeString": "literal_string \"Photo doesn't exist\""
                                }
                              ],
                              "overloadedDeclarations": [
                                1958,
                                1959
                              ],
                              "referencedDeclaration": 1959,
                              "type": "function (bool,string memory) pure",
                              "value": "require"
                            },
                            "id": 1898,
                            "name": "Identifier",
                            "src": "2210:7:15"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "!=",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "tokenId",
                                  "referencedDeclaration": 1763,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "type": "struct MyNFTs.PhotoData storage ref"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 1761,
                                          "type": "mapping(uint256 => struct MyNFTs.PhotoData storage ref)",
                                          "value": "_photoList"
                                        },
                                        "id": 1899,
                                        "name": "Identifier",
                                        "src": "2218:10:15"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 1880,
                                          "type": "uint256",
                                          "value": "tokenId"
                                        },
                                        "id": 1900,
                                        "name": "Identifier",
                                        "src": "2229:7:15"
                                      }
                                    ],
                                    "id": 1901,
                                    "name": "IndexAccess",
                                    "src": "2218:19:15"
                                  }
                                ],
                                "id": 1902,
                                "name": "MemberAccess",
                                "src": "2218:27:15"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "30",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 0",
                                  "value": "0"
                                },
                                "id": 1903,
                                "name": "Literal",
                                "src": "2247:1:15"
                              }
                            ],
                            "id": 1904,
                            "name": "BinaryOperation",
                            "src": "2218:30:15"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "50686f746f20646f65736e2774206578697374",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "string",
                              "type": "literal_string \"Photo doesn't exist\"",
                              "value": "Photo doesn't exist"
                            },
                            "id": 1905,
                            "name": "Literal",
                            "src": "2250:21:15"
                          }
                        ],
                        "id": 1906,
                        "name": "FunctionCall",
                        "src": "2210:62:15"
                      }
                    ],
                    "id": 1907,
                    "name": "ExpressionStatement",
                    "src": "2210:62:15"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 1897
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "tuple(uint256,address[] storage ref,string storage ref,string storage ref,string storage ref,string storage ref,uint256)"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "tokenId",
                              "referencedDeclaration": 1763,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "struct MyNFTs.PhotoData storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1761,
                                      "type": "mapping(uint256 => struct MyNFTs.PhotoData storage ref)",
                                      "value": "_photoList"
                                    },
                                    "id": 1908,
                                    "name": "Identifier",
                                    "src": "2311:10:15"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1880,
                                      "type": "uint256",
                                      "value": "tokenId"
                                    },
                                    "id": 1909,
                                    "name": "Identifier",
                                    "src": "2322:7:15"
                                  }
                                ],
                                "id": 1910,
                                "name": "IndexAccess",
                                "src": "2311:19:15"
                              }
                            ],
                            "id": 1911,
                            "name": "MemberAccess",
                            "src": "2311:27:15"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "ownerHistory",
                              "referencedDeclaration": 1766,
                              "type": "address[] storage ref"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "struct MyNFTs.PhotoData storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1761,
                                      "type": "mapping(uint256 => struct MyNFTs.PhotoData storage ref)",
                                      "value": "_photoList"
                                    },
                                    "id": 1912,
                                    "name": "Identifier",
                                    "src": "2356:10:15"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1880,
                                      "type": "uint256",
                                      "value": "tokenId"
                                    },
                                    "id": 1913,
                                    "name": "Identifier",
                                    "src": "2367:7:15"
                                  }
                                ],
                                "id": 1914,
                                "name": "IndexAccess",
                                "src": "2356:19:15"
                              }
                            ],
                            "id": 1915,
                            "name": "MemberAccess",
                            "src": "2356:32:15"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "photo",
                              "referencedDeclaration": 1768,
                              "type": "string storage ref"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "struct MyNFTs.PhotoData storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1761,
                                      "type": "mapping(uint256 => struct MyNFTs.PhotoData storage ref)",
                                      "value": "_photoList"
                                    },
                                    "id": 1916,
                                    "name": "Identifier",
                                    "src": "2406:10:15"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1880,
                                      "type": "uint256",
                                      "value": "tokenId"
                                    },
                                    "id": 1917,
                                    "name": "Identifier",
                                    "src": "2417:7:15"
                                  }
                                ],
                                "id": 1918,
                                "name": "IndexAccess",
                                "src": "2406:19:15"
                              }
                            ],
                            "id": 1919,
                            "name": "MemberAccess",
                            "src": "2406:25:15"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "title",
                              "referencedDeclaration": 1770,
                              "type": "string storage ref"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "struct MyNFTs.PhotoData storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1761,
                                      "type": "mapping(uint256 => struct MyNFTs.PhotoData storage ref)",
                                      "value": "_photoList"
                                    },
                                    "id": 1920,
                                    "name": "Identifier",
                                    "src": "2449:10:15"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1880,
                                      "type": "uint256",
                                      "value": "tokenId"
                                    },
                                    "id": 1921,
                                    "name": "Identifier",
                                    "src": "2460:7:15"
                                  }
                                ],
                                "id": 1922,
                                "name": "IndexAccess",
                                "src": "2449:19:15"
                              }
                            ],
                            "id": 1923,
                            "name": "MemberAccess",
                            "src": "2449:25:15"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "description",
                              "referencedDeclaration": 1772,
                              "type": "string storage ref"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "struct MyNFTs.PhotoData storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1761,
                                      "type": "mapping(uint256 => struct MyNFTs.PhotoData storage ref)",
                                      "value": "_photoList"
                                    },
                                    "id": 1924,
                                    "name": "Identifier",
                                    "src": "2492:10:15"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1880,
                                      "type": "uint256",
                                      "value": "tokenId"
                                    },
                                    "id": 1925,
                                    "name": "Identifier",
                                    "src": "2503:7:15"
                                  }
                                ],
                                "id": 1926,
                                "name": "IndexAccess",
                                "src": "2492:19:15"
                              }
                            ],
                            "id": 1927,
                            "name": "MemberAccess",
                            "src": "2492:31:15"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "category",
                              "referencedDeclaration": 1774,
                              "type": "string storage ref"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "struct MyNFTs.PhotoData storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1761,
                                      "type": "mapping(uint256 => struct MyNFTs.PhotoData storage ref)",
                                      "value": "_photoList"
                                    },
                                    "id": 1928,
                                    "name": "Identifier",
                                    "src": "2541:10:15"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1880,
                                      "type": "uint256",
                                      "value": "tokenId"
                                    },
                                    "id": 1929,
                                    "name": "Identifier",
                                    "src": "2552:7:15"
                                  }
                                ],
                                "id": 1930,
                                "name": "IndexAccess",
                                "src": "2541:19:15"
                              }
                            ],
                            "id": 1931,
                            "name": "MemberAccess",
                            "src": "2541:28:15"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "timestamp",
                              "referencedDeclaration": 1776,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "struct MyNFTs.PhotoData storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1761,
                                      "type": "mapping(uint256 => struct MyNFTs.PhotoData storage ref)",
                                      "value": "_photoList"
                                    },
                                    "id": 1932,
                                    "name": "Identifier",
                                    "src": "2587:10:15"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1880,
                                      "type": "uint256",
                                      "value": "tokenId"
                                    },
                                    "id": 1933,
                                    "name": "Identifier",
                                    "src": "2598:7:15"
                                  }
                                ],
                                "id": 1934,
                                "name": "IndexAccess",
                                "src": "2587:19:15"
                              }
                            ],
                            "id": 1935,
                            "name": "MemberAccess",
                            "src": "2587:29:15"
                          }
                        ],
                        "id": 1936,
                        "name": "TupleExpression",
                        "src": "2293:337:15"
                      }
                    ],
                    "id": 1937,
                    "name": "Return",
                    "src": "2286:344:15"
                  }
                ],
                "id": 1938,
                "name": "Block",
                "src": "2200:437:15"
              }
            ],
            "id": 1939,
            "name": "FunctionDefinition",
            "src": "2049:588:15"
          }
        ],
        "id": 1940,
        "name": "ContractDefinition",
        "src": "345:2294:15"
      }
    ],
    "id": 1941,
    "name": "SourceUnit",
    "src": "0:2643:15"
  },
  "compiler": {
    "name": "solc",
    "version": "0.5.6+commit.b259423e.Emscripten.clang"
  },
  "networks": {
    "1001": {
      "events": {
        "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "previousOwner",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "newOwner",
              "type": "address"
            }
          ],
          "name": "OwnershipTransferred",
          "type": "event"
        },
        "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "from",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "to",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "Transfer",
          "type": "event"
        },
        "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "approved",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "Approval",
          "type": "event"
        },
        "0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "operator",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "approved",
              "type": "bool"
            }
          ],
          "name": "ApprovalForAll",
          "type": "event"
        },
        "0x78dabf14ec48de81014dee83dcc48ed6fd075ed0c68fe513c4a98617544dcfd6": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "indexed": false,
              "name": "photo",
              "type": "string"
            },
            {
              "indexed": false,
              "name": "title",
              "type": "string"
            },
            {
              "indexed": false,
              "name": "description",
              "type": "string"
            },
            {
              "indexed": false,
              "name": "timestamp",
              "type": "uint256"
            }
          ],
          "name": "PhotoUploaded",
          "type": "event"
        },
        "0x6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f6": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "account",
              "type": "address"
            }
          ],
          "name": "MinterAdded",
          "type": "event"
        },
        "0xe94479a9f7e1952cc78f2d6baab678adc1b772d936c6583def489e524cb66692": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "account",
              "type": "address"
            }
          ],
          "name": "MinterRemoved",
          "type": "event"
        },
        "0x94ba24fe4630905d08d611b777a75f867c6b104fbbe44f6e624a9dc3c08a26c2": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "indexed": false,
              "name": "photo",
              "type": "string"
            },
            {
              "indexed": false,
              "name": "title",
              "type": "string"
            },
            {
              "indexed": false,
              "name": "description",
              "type": "string"
            },
            {
              "indexed": false,
              "name": "category",
              "type": "string"
            },
            {
              "indexed": false,
              "name": "timestamp",
              "type": "uint256"
            }
          ],
          "name": "PhotoUploaded",
          "type": "event"
        }
      },
      "links": {},
      "address": "0x383bc12536080550Cc173e3ff82998c6F7B4D1C7",
      "transactionHash": "0x35e5e044534090fb36a24655a87036c69f7813cb833971880dbc84fe46ca7234"
    },
    "1651557406021": {
      "events": {},
      "links": {},
      "address": "0xbCB57545BD18F39f07C87ea152f1E715d9B46c88",
      "transactionHash": "0xb2714bb79c43b64be99498e132637e1f0f36150d79b0816bbe6ae207ec8f24f3"
    }
  },
  "schemaVersion": "3.4.3",
  "updatedAt": "2022-06-11T06:24:06.707Z",
  "devdoc": {
    "methods": {
      "approve(address,uint256)": {
        "details": "Approves another address to transfer the given token ID The zero address indicates there is no approved address. There can only be one approved address per token at a given time. Can only be called by the token owner or an approved operator.",
        "params": {
          "to": "address to be approved for the given token ID",
          "tokenId": "uint256 ID of the token to be approved"
        }
      },
      "balanceOf(address)": {
        "details": "Gets the balance of the specified address.",
        "params": {
          "owner": "address to query the balance of"
        },
        "return": "uint256 representing the amount owned by the passed address"
      },
      "getApproved(uint256)": {
        "details": "Gets the approved address for a token ID, or zero if no address set Reverts if the token ID does not exist.",
        "params": {
          "tokenId": "uint256 ID of the token to query the approval of"
        },
        "return": "address currently approved for the given token ID"
      },
      "isApprovedForAll(address,address)": {
        "details": "Tells whether an operator is approved by a given owner.",
        "params": {
          "operator": "operator address which you want to query the approval of",
          "owner": "owner address which you want to query the approval of"
        },
        "return": "bool whether the given operator is approved by the given owner"
      },
      "isOwner()": {
        "details": "Returns true if the caller is the current owner."
      },
      "owner()": {
        "details": "Returns the address of the current owner."
      },
      "ownerOf(uint256)": {
        "details": "Gets the owner of the specified token ID.",
        "params": {
          "tokenId": "uint256 ID of the token to query the owner of"
        },
        "return": "address currently marked as the owner of the given token ID"
      },
      "renounceOwnership()": {
        "details": "Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner.     * > Note: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner."
      },
      "safeTransferFrom(address,address,uint256)": {
        "details": "Safely transfers the ownership of a given token ID to another address If the target address is a contract, it must implement `onKIP17Received`, which is called upon a safe transfer, and return the magic value `bytes4(keccak256(\"onKIP17Received(address,address,uint256,bytes)\"))`; otherwise, the transfer is reverted. Requires the msg.sender to be the owner, approved, or operator",
        "params": {
          "from": "current owner of the token",
          "to": "address to receive the ownership of the given token ID",
          "tokenId": "uint256 ID of the token to be transferred"
        }
      },
      "safeTransferFrom(address,address,uint256,bytes)": {
        "details": "Safely transfers the ownership of a given token ID to another address If the target address is a contract, it must implement `onKIP17Received`, which is called upon a safe transfer, and return the magic value `bytes4(keccak256(\"onKIP17Received(address,address,uint256,bytes)\"))`; otherwise, the transfer is reverted. Requires the msg.sender to be the owner, approved, or operator",
        "params": {
          "_data": "bytes data to send along with a safe transfer check",
          "from": "current owner of the token",
          "to": "address to receive the ownership of the given token ID",
          "tokenId": "uint256 ID of the token to be transferred"
        }
      },
      "setApprovalForAll(address,bool)": {
        "details": "Sets or unsets the approval of a given operator An operator is allowed to transfer all tokens of the sender on their behalf.",
        "params": {
          "approved": "representing the status of the approval to be set",
          "to": "operator address to set the approval"
        }
      },
      "supportsInterface(bytes4)": {
        "details": "See `IKIP13.supportsInterface`.     * Time complexity O(1), guaranteed to always use less than 30 000 gas."
      },
      "tokenByIndex(uint256)": {
        "details": "Gets the token ID at a given index of all the tokens in this contract Reverts if the index is greater or equal to the total number of tokens.",
        "params": {
          "index": "uint256 representing the index to be accessed of the tokens list"
        },
        "return": "uint256 token ID at the given index of the tokens list"
      },
      "tokenOfOwnerByIndex(address,uint256)": {
        "details": "Gets the token ID at a given index of the tokens list of the requested owner.",
        "params": {
          "index": "uint256 representing the index to be accessed of the requested tokens list",
          "owner": "address owning the tokens list to be accessed"
        },
        "return": "uint256 token ID at the given index of the tokens list owned by the requested address"
      },
      "totalSupply()": {
        "details": "Gets the total amount of tokens stored by the contract.",
        "return": "uint256 representing the total amount of tokens"
      },
      "transferOwnership(address)": {
        "details": "Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner."
      }
    }
  },
  "userdoc": {
    "methods": {}
  }
}