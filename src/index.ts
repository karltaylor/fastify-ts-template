import "dotenv/config";
import fastify from "fastify";

import { exampleRoutes } from "./routes/example";

import { env } from "./env";

const server = fastify();

server.get("/", (request, reply) =>
  reply.send({ service: "fastify-ts-template" })
);

server.register(exampleRoutes, { prefix: "/api/example" });

server.listen({ port: env.PORT, host: "127.0.0.1" }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
