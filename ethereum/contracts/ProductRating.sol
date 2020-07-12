pragma solidity ^0.4.17;//solidity version

contract Rating  {

   //Product attributes
    struct Product {
        uint id;
        string title;
        uint reviewsCount;
        address[] pvoters; //product voters
        mapping(address => bool) hasReviewed;
    }
//add Product  event
    event ProductAdded(
        uint id,
        string title
    );
//review event
    event ProductReviewed(
        uint indexed id
    );

    address public owner= msg.sender; //address of host
    address[] public voters; //Total voters array
    mapping(uint => Product) products;
    uint public productCount = 0;
    //only owner can add product (in our case account[0])
    modifier restricted{
      require(msg.sender==owner);
      _;
    }
    //Add product function
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
//Add review function
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
//To get product details
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
//To get total voters
    function totalVoters() public view returns(uint){
      return voters.length;
    }
}
