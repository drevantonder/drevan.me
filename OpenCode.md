# OpenCode Context for drevan.me

This project is a monorepo managed with pnpm and Turborepo, containing a Nuxt frontend and a Sanity backend.

## Commands

- **Build:** `pnpm build` (runs `turbo run build`)
- **Dev:** `pnpm dev` (runs `turbo run dev`)
- **Lint:** `pnpm lint` (runs `turbo run lint`)
- **Format:** `pnpm format` (runs `prettier --write "**/*.{ts,tsx,md}"`)
- **Test (drevan.me app):** `pnpm --filter @drevan/drevan.me test` (runs `vitest`)
  - To run a single test file: `pnpm --filter @drevan/drevan.me test <filepath>`
- **Sanity types:** `pnpm --filter @drevan/sanity types`

## Code Style & Conventions

- **Formatting:** Uses Prettier. Config in `apps/sanity/package.json` (e.g., single quotes, no semicolons, printWidth 100).
- **Language:** TypeScript is used extensively. Enable `noUncheckedIndexedAccess` where possible.
- **Vue/Nuxt (drevan.me app):**
    - Use `<script setup lang="ts">`.
    - Components in PascalCase (e.g., `MyComponent.vue`).
    - Composables and utility functions in camelCase.
    - TailwindCSS for styling; follow existing utility class patterns.
- **Sanity (sanity app):**
    - Schema definitions in `schemaTypes`.
    - Follow existing patterns for schema structure.
- **Error Handling:** Use `getErrorMessage` from `apps/drevan.me/server/utils/getErrorMessage.ts` for consistent error messages.
- **Imports:** Standard ES module imports. Group imports if applicable.
- **Naming:**
    - Files: kebab-case or PascalCase for Vue components.
    - Variables/Functions: camelCase.
    - Classes/Types: PascalCase.
