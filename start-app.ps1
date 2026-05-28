# Start Ganache in a new window
Write-Host "Starting Ganache..." -ForegroundColor Cyan
Start-Process powershell -ArgumentList "ganache --port 7545"

# Wait for Ganache to initialize
Start-Sleep -s 5

# Deploy Smart Contracts
Write-Host "Deploying Smart Contracts..." -ForegroundColor Cyan
cd smart_contract
$migrateOutput = truffle migrate --reset --network development | Out-String
Write-Host $migrateOutput

# Extract Contract Address
if ($migrateOutput -match 'contract address:\s+(0x[a-fA-F0-9]{40})') {
    $contractAddress = $matches[1]
    Write-Host "Deployed Contract Address: $contractAddress" -ForegroundColor Green
    
    # Update Backend .env
    cd ../backend
    $envPath = ".env"
    (Get-Content $envPath) -replace 'CONTRACT_ADDRESS=.*', "CONTRACT_ADDRESS=$contractAddress" | Set-Content $envPath
    Write-Host "Updated backend/.env with new address." -ForegroundColor Green

    # Sync ABI
    copy ..\smart_contract\build\contracts\CertificateRegistry.json config\CertificateRegistry.json
    
    # Start Backend in a new window
    Write-Host "Starting Backend Server..." -ForegroundColor Cyan
    Start-Process powershell -ArgumentList "node server.js"
    
    # Open Frontend
    Write-Host "Opening Frontend..." -ForegroundColor Cyan
    Start-Process "../frontend/index.html"
} else {
    Write-Host "Failed to extract contract address. Check if Ganache is running." -ForegroundColor Red
}
