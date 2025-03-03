import type { TRPCRouterRecord } from "@trpc/server";

import { publicProcedure } from "../trpc";

export const eventRouter = {
  me: publicProcedure.query(({ ctx }) => {
    return ctx.user;
  }),
  getAllEvents: publicProcedure.query(async ({ ctx }) => {
    try {
      return await ctx.db.query.events.findMany();
    } catch (error) {
      console.log(error);
    }
  }),
} satisfies TRPCRouterRecord;
