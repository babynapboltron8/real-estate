import {$ } from "execa"

console.log("Installing backend dependencies...");
process.chdir("./backend");
await $`npm install`;

console.log("Installing frontend dependencies...");
process.chdir("../frontend");
await $`npm install`;