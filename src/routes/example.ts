import { FastifyInstance } from "fastify";

export const exampleRoutes = async (fastify: FastifyInstance) => {
  fastify.get("/", (request, reply) => reply.send([]));
};
