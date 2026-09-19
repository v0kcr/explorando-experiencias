import { describe, expect, it } from "vitest";

const baseId = "appSSFyrEN20VlHYG";
const tableId = "tblmKaMOdYdaTpYWx";

describe("Airtable credentials", () => {
  it("can read the SOLICITUD table with the configured server token", async () => {
    const token = process.env.AIRTABLE_PAT;
    expect(token, "AIRTABLE_PAT must be configured").toBeTruthy();

    const response = await fetch(`https://api.airtable.com/v0/${baseId}/${tableId}?maxRecords=1`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    expect(response.status).toBe(200);
    const payload = await response.json() as { records?: unknown[] };
    expect(Array.isArray(payload.records)).toBe(true);
  }, 30_000);
});
