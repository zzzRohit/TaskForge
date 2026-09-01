# TaskForge

A minimal Next.js + TypeScript + Tailwind project for task management, using the App Router and PostgreSQL via Prisma.

## Stack

- Next.js 16
- TypeScript
- Tailwind CSS
- PostgreSQL
- Prisma ORM

## Local setup

1. Install dependencies:

```bash
npm install
```

2. Create a local PostgreSQL database and user, then add your connection string to `.env`:

```env
DATABASE_URL="postgresql://mini_trello:mini_trello_pw@localhost:5432/mini_trello?schema=public"
```

3. Generate the Prisma client and apply the schema:

```bash
npx prisma generate
npx prisma migrate dev --name init
```

## Run the app

```bash
npm run dev
```

Open http://localhost:3000.

## Project checks

```bash
npm run lint
npm run build
```

## Health endpoint

```bash
curl http://localhost:3000/api/health
```

Expected response:

```json
{ "status": "ok" }
```
