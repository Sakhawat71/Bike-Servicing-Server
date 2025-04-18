import app from "./app";
import { Server } from "http";
const port = 5000;

async function main() {
    const server: Server = app.listen(port, () => {
        console.log(`Bike Servicing Server listening on port ${port}`)
    })
};

main();