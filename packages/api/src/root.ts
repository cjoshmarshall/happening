import { eventRouter } from "./router/event";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  event: eventRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
