import { z } from "zod";
import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { adminProcedure, publicProcedure, router } from "./_core/trpc";
import { createSolicitudInAirtable } from "./airtable";
import { createInquiry, listInquiries } from "./db";

const inquiryInput = z.object({
  kind: z.enum(["trip", "corporate", "club", "ebook", "contact"]),
  name: z.string().trim().min(2).max(160),
  email: z.string().trim().email().max(320),
  phone: z.string().trim().max(40).optional(),
  company: z.string().trim().max(180).optional(),
  destination: z.string().trim().max(180).optional(),
  message: z.string().trim().max(5000).optional(),
});

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query((opts) => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true } as const;
    }),
  }),
  inquiries: router({
    create: publicProcedure.input(inquiryInput).mutation(async ({ input }) => {
      const airtableRecord = await createSolicitudInAirtable(input);
      await createInquiry({
        airtableRecordId: airtableRecord.id,
        airtableLastModifiedAt: airtableRecord.createdTime,
        syncStatus: "synced",
        kind: input.kind,
        name: input.name,
        email: input.email,
        phone: input.phone || null,
        company: input.company || null,
        destination: input.destination || null,
        message: input.message || null,
      });
      return { success: true } as const;
    }),
    list: adminProcedure.query(() => listInquiries()),
  }),
});

export type AppRouter = typeof appRouter;
