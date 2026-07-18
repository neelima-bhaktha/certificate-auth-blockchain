# Blockchain Certificate Authentication

## Overview

Blockchain Certificate Authentication is a decentralized application that helps verify the authenticity of academic certificates. Instead of relying on manual verification, the system stores a secure cryptographic hash of each certificate on the Ethereum blockchain. During verification, the uploaded certificate is hashed again and compared with the hash stored on the blockchain. If both hashes match, the certificate is confirmed to be authentic.

This approach improves security, prevents certificate forgery, and provides a fast and transparent verification process.

## Features

* Issue digital certificates securely
* Store certificate hashes on the blockchain
* Verify certificate authenticity instantly
* Detect tampered or modified certificates
* Connect using MetaMask wallet
* Immutable certificate records
* Simple and responsive user interface

## Tech Stack

### Frontend

* React
* HTML
* CSS
* JavaScript

### Backend

* Node.js
* Express.js

### Blockchain

* Ethereum
* Solidity
* Ganache
* MetaMask
* Ethers.js

### Security

* SHA 256 Hashing

## Project Structure

```text
blockchain certificate authentication/
│
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── routes/
│   ├── controllers/
│   ├── utils/
│   └── package.json
│
├── contracts/
│   └── CertificateAuth.sol
│
├── scripts/
│
├── migrations/
│
├── README.md
│
└── package.json
```

## Workflow

1. The issuer uploads a certificate.
2. The system generates a SHA 256 hash of the certificate.
3. The hash is stored on the Ethereum blockchain.
4. The certificate is shared with the student.
5. A verifier uploads the certificate for verification.
6. The system generates a new hash.
7. The new hash is compared with the blockchain record.
8. The result is displayed as Authentic or Invalid.

## Installation

Clone the repository.

```bash
git clone <repository_url>
```

Move into the project directory.

```bash
cd blockchain-certificate-authentication
```

Install dependencies.

```bash
npm install
```

Install client dependencies.

```bash
cd client
npm install
```

Install server dependencies.

```bash
cd ../server
npm install
```

## Running the Project

Start Ganache.

Deploy the smart contract.

```bash
npx hardhat run scripts/deploy.js --network localhost
```

Start the backend server.

```bash
npm start
```

Start the frontend.

```bash
npm start
```

Open the application in your browser.

```
http://localhost:3000
```

## Future Improvements

* QR code based certificate verification
* IPFS integration for certificate storage
* Role based access control
* Email notifications
* Support for multiple institutions
* Public verification portal

## Contributors

* Neelima Bhaktha
* Deanna Jenevieve Maben

## Deployement Link
* https://certificate-auth-blockchain.vercel.app/

## License

This project is developed for academic purposes.
