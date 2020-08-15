let web3js;

let tokenContractAbi =[{"constant":false,"inputs":[{"name":"_trainId","type":"uint256"},{"name":"_timeOfJourney","type":"uint256"},{"name":"_price","type":"uint256"}],"name":"makeBooking","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[],"name":"reedemLateCompensation","outputs":[{"name":"compensation","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"getBooking","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getServiceProviderBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"transferToServiceProvider","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_trainId","type":"uint256"}],"name":"registerTrain","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_trainId","type":"uint256"}],"name":"checkLate","outputs":[{"name":"","type":"bool"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_trainId","type":"uint256"},{"name":"_lateminutes","type":"uint256"},{"name":"_price","type":"uint256"}],"name":"updateLate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_newPrice","type":"uint256"}],"name":"setLateMinuteCompensationPrice","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"trainId","type":"uint256"},{"indexed":false,"name":"lateminutes","type":"uint256"},{"indexed":false,"name":"price","type":"uint256"}],"name":"runninglate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"journeyprice","type":"uint256"},{"indexed":false,"name":"arrive","type":"uint256"}],"name":"serviceprovider","type":"event"},{"anonymous":false,"inputs":[],"name":"reedemCompensation","type":"event"}];
let tokenContract;
let tokenContractInstance;

let tokenContractAddress = "0x6b972413f90e23146dd88f26aef9985641dc3847";

window.updateLate = function() {

    let ownercarmodel = $("#ownercarmodel").val();
    let ownercarplateno = $("#ownercarplateno").val();
    let ownercarlocation = $("#ownercarlocation").val();
    let ownerpriceperday = $("#ownerpriceperday").val();
    
console.log(trainid1);
console.log(traindelay);

    try {

        tokenContractInstance.updateLate(trainid1, traindelay, price,{to:tokenContractAddress, from:web3.eth.accounts[0]},
          function (error, result) {
   
                    if(!error) {

				console.log(result);       
                    }
                    else {
                        console.error(error);
                    }
            })
  } catch (err) {
      console.log(err);
    }

  }


window.addEventListener('load', function() {

    if (typeof web3 !== 'undefined') {
        
        console.log('Web3 Detected! ' + web3.currentProvider.constructor.name)
     
        window.web3 = new Web3(web3.currentProvider);

            if(!web3.eth.accounts[0]){

                console.log("No metamsk account available");
                alert("Please connect with Ethereum Client !");

            } else {      
                                     
            
            tokenContract = web3.eth.contract(tokenContractAbi);
            tokenContractInstance = tokenContract.at(tokenContractAddress);


            tokenContractInstance.updateLate(web3.eth.accounts[0],function(error, result){
                console.log(result);
                                     
            });

        }

    }
   
});