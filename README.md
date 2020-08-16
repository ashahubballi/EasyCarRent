# EasyCarRent

A decentralized car sharing application.

## Prerequisites:

1. Truffle
2. Ganache-CLI
3. Node.js

## Run Dapp:

1. Clone this repository.

2. Enter into repository.
```
cd EasyCarRent
``` 

To run user interface, Run 
```
npm install
npm run dev
```

## Compile and install contracts:

You will need to be running ganache-cli in one terminal instance and Truffle in a second one. This can be accomplished by opening 2 separate terminal windows or using a program like screen if you use a Linux based OS. After installing Truffle and ganache-cli:

*Terminal Window 1:*

1. Start ganache-cli with settings to your liking (it is a good idea to unlock accounts when starting ganache-cli so you can more easily interact with the contracts).
```
ganache-cli
```

*Terminal Window 2:*

2. Compile smart contracts
```
truffle compile
```

3. Migrate contracts
```
truffle migrate
```
