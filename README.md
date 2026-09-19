# Explorando Experiencias

Demo multipágina para viajes, eventos y comunidad en Perú. Incluye formularios persistentes con tRPC/Drizzle y creación de solicitudes en Airtable.

## Desarrollo local

```bash
pnpm install
pnpm dev
```

## Validación

```bash
pnpm check
pnpm test
pnpm build
```

## Vercel

El frontend se publica desde `dist/public` y el API tRPC se ejecuta como función serverless desde `api/index.ts`. Configura estas variables en el proyecto de Vercel:

- `AIRTABLE_PAT`: Personal Access Token con acceso de lectura/escritura a la base.
- `DATABASE_URL`: conexión MySQL/TiDB para la réplica SQL.
- `JWT_SECRET`: secreto de sesión.
- `VITE_APP_ID`, `OAUTH_SERVER_URL`, `VITE_OAUTH_PORTAL_URL`, `OWNER_OPEN_ID`: solo si se activa autenticación Manus.

No subas `.env` ni tokens al repositorio. El API permanece en el despliegue; las llamadas del frontend siguen usando `/api/trpc`.
