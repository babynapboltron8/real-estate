import {$, execa} from "execa"

console.log("Linting backend project...");
process.chdir("./backend")
await $`npm run lint`;

console.log("Linting frontend project...");
process.chdir("../frontend");
await $`npm run lint`;
await $`npm run build`;