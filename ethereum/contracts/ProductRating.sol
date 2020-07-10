pragma solidity ^0.4.17;

contract Rating  {


    struct Product {
        uint id;
        string title;
        uint reviewsCount;
        address[] pvoters;
        mapping(address => bool) hasReviewed;
    }

    event ProductAdded(
        uint id,
        string title
    );

    event ProductReviewed(
        uint indexed id
    );

    address public owner= msg.sender;
    address[] public voters;
    mapping(uint => Product) products;
    uint public productCount = 0;

    modifier restricted{
      require(msg.sender==owner);
      _;
    }
    function addProduct(string _title) public restricted {
        require(keccak256(bytes(_title)) != keccak256(""));

        Product memory product = Product({
            id: productCount,
            title: _title,
            reviewsCount: 0,
            pvoters : new address[](0)
        });
        
        products[productCount] = product;
        productCount++;
        ProductAdded(product.id, product.title);
    }

    function addReview(uint _productId) public {
        Product storage product = products[_productId];
        for(uint i=0;i<voters.length;i++){
          require(!(msg.sender==voters[i]));
        }
        require(keccak256(bytes(product.title)) != keccak256(""));
        require(!product.hasReviewed[msg.sender]);

        voters.push(msg.sender);
        product.pvoters.push(msg.sender);
        product.hasReviewed[msg.sender] = true;
        product.reviewsCount++;

        ProductReviewed(product.id);
    }

    function getProduct(uint productId) public view returns (uint id, string title, uint reviewsCount,bool hasReviewed,address[] pvoters) {
        Product storage product = products[productId];

        return (
            product.id,
            product.title,
            product.reviewsCount,
            product.hasReviewed[msg.sender],
            product.pvoters
        );
    }

    function totalVoters() public view returns(uint){
      return voters.length;
    }
}
