// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CertificateRegistry {

    mapping(string => string) private certificates;

    event CertificateIssued(string certificateId, string certificateHash);

    function issueCertificate(string memory _certificateId, string memory _certificateHash) public {
        require(bytes(certificates[_certificateId]).length == 0, "Certificate already exists");

        certificates[_certificateId] = _certificateHash;

        emit CertificateIssued(_certificateId, _certificateHash);
    }

    function verifyCertificate(string memory _certificateId) public view returns (string memory) {
        return certificates[_certificateId];
    }
}