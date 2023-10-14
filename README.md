### 1. Instalar Dependências:
`$ npm install`
### 2. Iniciar a Blockchain de Desenvolvimento Local
`$ npx hardhat node`

### 3. Conectar as Contas da Blockchain de Desenvolvimento ao Metamask
- Copie a chave privada dos endereços e importe no Metamask
- Conecte o seu Metamask à blockchain do Hardhat, 127.0.0.1:8545.

### 4. Migrar os Smart Contracts
`npx hardhat run src/backend/scripts/deploy.js --network ganache`

### 5. Executar os Testes
`$ npx hardhat test`

### 6. Iniciar o Frontend
`$ npm run start`