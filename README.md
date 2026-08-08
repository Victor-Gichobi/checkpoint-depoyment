# Azure MERN Checkpoint

This is an Azure-ready MERN starter project.

## Project structure

```text
azure-mern-checkpoint/
├── client/
│   ├── public/
│   ├── src/
│   └── package.json
├── server/
│   ├── routes/
│   ├── public/
│   ├── server.js
│   ├── package.json
│   └── .env.example
└── README.md
```

## 1. Configure MongoDB Atlas

Create a MongoDB Atlas cluster and copy your connection string.

Create:

```text
server/.env
```

Add:

```env
MONGO_URI="your-mongodb-atlas-connection-string"
NODE_ENV=development
```

Never commit `.env` to GitHub.

## 2. Install backend dependencies

```powershell
cd server
npm install
```

## 3. Install frontend dependencies

Open another terminal:

```powershell
cd client
npm install
```

## 4. Build React

From the `client` folder:

```powershell
npm run build
```

Copy the contents of `client/build` into:

```text
server/public
```

PowerShell:

```powershell
New-Item -ItemType Directory -Path ..\server\public -Force
Copy-Item -Path .\build\* -Destination ..\server\public -Recurse -Force
```

## 5. Test locally

```powershell
cd ..\server
npm start
```

Open:

```text
http://localhost:3000
```

## 6. Deploy to Azure

Create an Azure Web App using:

- Publish: Code
- Runtime: Node.js
- Operating System: Linux

Connect the Web App to your GitHub repository through Deployment Center.

In:

```text
Azure Portal
→ App Service
→ Environment variables
```

add:

```text
MONGO_URI = your MongoDB Atlas connection string
NODE_ENV = production
```

Azure automatically supplies the `PORT` environment variable.

## 7. MongoDB Atlas network access

For a learning deployment, you may temporarily allow:

```text
0.0.0.0/0
```

in MongoDB Atlas Network Access so Azure can connect. For production, use a more restrictive network configuration.

## 8. Azure URL

After deployment, open the URL shown under:

```text
Azure Portal → Your Web App → Overview
```

It will look like:

```text
https://your-app-name.azurewebsites.net
```

## Important

Do not upload passwords, MongoDB credentials, or `.env` files to GitHub.
