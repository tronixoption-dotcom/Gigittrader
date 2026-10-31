import { createFileRoute } from "@tanstack/react-router";
import { handleB2cTimeout } from "./b2c-timeout";

export const Route = createFileRoute("/api/daraja/b2c-queue")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const payload = await request.json().catch(() => ({}));
        await handleB2cTimeout(payload);
        return Response.json({ ResultCode: 0, ResultDesc: "Accepted" });
      },
    },
  },
});
