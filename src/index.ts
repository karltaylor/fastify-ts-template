import fastify from "fastify";

const server = fastify();

server.get("/", (request, reply) => reply.send({ ok: true }));

const port = process.env.PORT ? parseInt(process.env.PORT) : 8080;

server.listen({ port }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
