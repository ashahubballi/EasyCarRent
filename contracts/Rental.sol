pragma solidity >=0.4.17 <0.7.0;

import {CarLib} from "./CarLib.sol";

contract Rental {
    
    bool private stopped = false;
    address private manager;

    constructor() public  
    {
        manager = msg.sender;
    }

    modifier isAdmin() {
        assert(msg.sender == manager);
        _;
    }
    
    function getStopped() public view returns(bool) { return stopped; }

    
    function toggleContractActive() isAdmin public {
        stopped = !stopped;
    }

    CarLib.Car[] public rentals;

    function getCarCount() public view returns(uint) {
        return rentals.length;
    }

    function rent(uint carId) public returns (bool) {
       
       assert(!stopped); 
        
        
      uint totalCars = getCarCount();
      
      require(carId >= 0 && carId < totalCars);
    
    CarLib.Car storage carToBeRented = rentals[carId];
    
    require(carToBeRented.isAvailable == true);
      
      carToBeRented.rentee = msg.sender;
      
      carToBeRented.isAvailable = false; 
      
      return true;
    }

    function returnCar(uint carId) public  returns (bool) {
        assert(!stopped); 
        
        CarLib.Car storage specificCar = rentals[carId];
        require(specificCar.owner == msg.sender);
        specificCar.isAvailable = true;
        return true;
    }

}