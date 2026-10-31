import { createFileRoute } from "@tanstack/react-router";
import { handleStkCallback } from "../../daraja/stk-callback";

export const Route = createFileRoute("/api/public/mpesa/callback")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const payload = await request.json().catch(() => ({}));
        await handleStkCallback(payload);
        return Response.json({ ResultCode: 0, ResultDesc: "Accepted" });
      },
    },
  },
});
