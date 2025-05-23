const fs = require('fs');
const dotenv = require('dotenv');
const [envPath, targetFile] = process.argv.slice(2);

const envConfig = dotenv.parse(fs.readFileSync(envPath));

const isProd = envPath.includes('production');

const content = `export const environment = {
  production: ${isProd},
  remoteEntry: '${envConfig.REMOTE_ENTRY}'
};
`;

fs.writeFileSync(targetFile, content);
console.log(`✔️  ${targetFile} criado a partir de ${envPath}`);
