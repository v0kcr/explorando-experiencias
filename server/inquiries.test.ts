import { beforeEach, describe, expect, it, vi } from "vitest";

const { createInquiry } = vi.hoisted(() => ({
  createInquiry: vi.fn().mockResolvedValue(undefined),
}));

vi.mock("./db", () => ({
  createInquiry,
  listInquiries: vi.fn(),
}));

import { appRouter } from "./routers";

const caller = () => appRouter.createCaller({ req: {} as never, res: {} as never, user: undefined });

describe("inquiries.create", () => {
  beforeEach(() => {
    createInquiry.mockClear();
  });

  it("validates and persists a trip request", async () => {
    const result = await caller().inquiries.create({
      kind: "trip",
      name: "Andrea Salazar",
      email: "andrea@example.com",
      phone: "+51 999 111 222",
      destination: "Cusco & Valle Sagrado",
    });

    expect(result).toEqual({ success: true });
    expect(createInquiry).toHaveBeenCalledWith({
      kind: "trip",
      name: "Andrea Salazar",
      email: "andrea@example.com",
      phone: "+51 999 111 222",
      company: null,
      destination: "Cusco & Valle Sagrado",
      message: null,
    });
  });

  it("rejects malformed email addresses before persistence", async () => {
    await expect(caller().inquiries.create({
      kind: "ebook",
      name: "María",
      email: "not-an-email",
    })).rejects.toMatchObject({ code: "BAD_REQUEST" });

    expect(createInquiry).not.toHaveBeenCalled();
  });
});
