import { beforeEach, describe, expect, it, vi } from "vitest";

const { createInquiry, createSolicitudInAirtable } = vi.hoisted(() => ({
  createInquiry: vi.fn().mockResolvedValue(undefined),
  createSolicitudInAirtable: vi.fn().mockResolvedValue({
    id: "recSolicitudTest",
    createdTime: new Date("2026-09-19T20:00:00.000Z"),
  }),
}));

vi.mock("./db", () => ({
  createInquiry,
  listInquiries: vi.fn(),
}));

vi.mock("./airtable", () => ({
  createSolicitudInAirtable,
}));

import { appRouter } from "./routers";

const caller = () => appRouter.createCaller({ req: {} as never, res: {} as never, user: undefined });

describe("inquiries.create", () => {
  beforeEach(() => {
    createInquiry.mockClear();
    createSolicitudInAirtable.mockClear();
  });

  it("writes to Airtable first and then persists the replica in SQL", async () => {
    const result = await caller().inquiries.create({
      kind: "trip",
      name: "Andrea Salazar",
      email: "andrea@example.com",
      phone: "+51 999 111 222",
      destination: "Cusco & Valle Sagrado",
    });

    expect(result).toEqual({ success: true });
    expect(createSolicitudInAirtable).toHaveBeenCalledOnce();
    expect(createInquiry).toHaveBeenCalledWith({
      airtableRecordId: "recSolicitudTest",
      airtableLastModifiedAt: new Date("2026-09-19T20:00:00.000Z"),
      syncStatus: "synced",
      kind: "trip",
      name: "Andrea Salazar",
      email: "andrea@example.com",
      phone: "+51 999 111 222",
      company: null,
      destination: "Cusco & Valle Sagrado",
      message: null,
    });
  });

  it("rejects malformed email addresses before contacting Airtable", async () => {
    await expect(caller().inquiries.create({
      kind: "ebook",
      name: "María",
      email: "not-an-email",
    })).rejects.toMatchObject({ code: "BAD_REQUEST" });

    expect(createSolicitudInAirtable).not.toHaveBeenCalled();
    expect(createInquiry).not.toHaveBeenCalled();
  });
});
