# PocModuleFederation

A proof-of-concept Angular application using Webpack Module Federation to dynamically load micro-frontends from either the same mono-repo or an external repository.  
The remote micro-frontend is available at: https://github.com/DartagnanJunior/poc-module-federation-provider

## Live Demo

Access the live demo at:  
https://gray-sky-078464210.6.azurestaticapps.net/

## Tech Stack

- Angular 19  
- Webpack Module Federation  
- @angular-architects/module-federation  

## Environment Variables

Remote URLs are configured via `.env.*` files and loaded by `webpack.config.js`.  
Example `env/.env.development`:

```env
CURRENCY_REMOTE_URL=http://localhost:4201/remoteEntry.js
```

## Getting Started

1. Clone the repo and install dependencies:  
   ```bash
   git clone <repo-url>
   cd module-federation-poc
   npm install
   ```

2. Run in development mode (starts all apps):  
   ```bash
   npm run dev
   ```

3. Open the host app in your browser:  
   http://localhost:4200

## Running Apps Separately

- **Host (Plataform)**  
  ```bash
  npm run start:plataform
  ```

- **Remote (Currency Analysis)**  
  ```bash
  npm run start:currency-analysis
  ```

## Building for Production

```bash
npm run build
```

Production artifacts will be generated in the `dist/` directory.

## Project Structure

```
/projects
  /plataform          # Host application
  /currency-analysis  # Remote micro-frontend
```