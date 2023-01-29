import { FastifyInstance } from "fastify";
import WebPush, { generateVAPIDKeys } from "web-push";
import { z } from "zod";

const publicKey =
  "BFno5-CE7Eqo2V32zKOtsIvEO7aqU_fdg6XUn2pYjSft18G5J95BNM19EhcvRNqXQlloPmUdEFGsN5JBX94Ispw";
const privateKey = "sGm7UNgWyopGgOyywtVqUWmLClmky7BmKGDn5y_BtqY";

WebPush.setVapidDetails("http://localhost:3333", publicKey, privateKey);

export async function notificationRoutes(app: FastifyInstance) {
  app.get("/push/public_key", () => {
    return {
      publicKey,
    };
  });

  app.post("/push/register", async (request, reply) => {
    console.log(request.body);

    return reply.status(201).send();
  });

  app.post("/push/send", async (request, reply) => {
    const sendPushBody = z.object({
      subscription: z.object({
        endpoint: z.string(),
        keys: z.object({
          p256dh: z.string(),
          auth: z.string(),
        }),
      }),
    });

    const { subscription } = sendPushBody.parse(request.body);

    setTimeout(() => {
      WebPush.sendNotification(subscription, "Hello do Backend");
    }, 5000);

    return reply.status(201).send();
  });
}
