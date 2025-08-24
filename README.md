Dhanyantra — Fixed package (frontend + Move)

This package contains a minimal Vite + React frontend that talks to Petra wallet using window.aptos,
and a Move module (DhanYantra) whose address is set to 0x12a238326b79c705237fdd9671ed0c0ffe2804f91ce796fb0370716ad5820259.

Steps after extracting:
1. Frontend
   cd frontend-react
   npm install
   npm run dev
   - If npm errors with peer-deps, run: npm install --legacy-peer-deps
2. Move module
   cd move
   # edit Move.toml if you want to change address
   aptos move compile
   aptos move publish --profile default

Notes:
- This frontend avoids external wallet-adapter libraries to reduce dependency conflicts. It uses the wallet extension API (window.aptos).
- Make sure Petra extension is installed and set to Testnet.
