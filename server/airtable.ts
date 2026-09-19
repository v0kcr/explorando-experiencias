import { ENV } from "./_core/env";

const BASE_ID = "appSSFyrEN20VlHYG";
const SOLICITUD_TABLE_ID = "tblmKaMOdYdaTpYWx";

const kindLabels = {
  trip: "viaje",
  corporate: "corporativo",
  club: "club",
  ebook: "ebook",
  contact: "contacto",
} as const;

export type AirtableSolicitudInput = {
  kind: keyof typeof kindLabels;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  destination?: string;
  message?: string;
};

export async function createSolicitudInAirtable(input: AirtableSolicitudInput) {
  if (!ENV.airtablePat) {
    throw new Error("Airtable no está configurado: falta AIRTABLE_PAT");
  }

  const response = await fetch(`https://api.airtable.com/v0/${BASE_ID}/${SOLICITUD_TABLE_ID}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${ENV.airtablePat}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      fields: {
        Tipo_Solicitud: kindLabels[input.kind],
        Nombre: input.name,
        Email: input.email,
        ...(input.phone ? { Celular: input.phone } : {}),
        ...(input.company ? { Empresa: input.company } : {}),
        ...(input.destination ? { Destino: input.destination } : {}),
        ...(input.message ? { Mensaje: input.message } : {}),
        Estado: "Nueva",
        Origen: "Web",
      },
    }),
  });

  if (!response.ok) {
    const details = await response.text();
    throw new Error(`Airtable rechazó la solicitud (${response.status}): ${details.slice(0, 300)}`);
  }

  const record = await response.json() as { id: string; createdTime?: string };
  return { id: record.id, createdTime: record.createdTime ? new Date(record.createdTime) : new Date() };
}
