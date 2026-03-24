# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio/freelancer website (thexap.tech) built with Next.js 12 (Pages Router), TypeScript, MUI v5, and Contentful CMS.

## Commands

- **Dev server:** `npm run dev`
- **Build:** `npm run build`
- **Lint:** `npm run lint`
- **Test:** `npm run test` (Jest)
- **GraphQL codegen:** `npm run codegen` — regenerates `src/gql/` types from Contentful schema

## Pre-commit Hooks

Husky runs lint-staged on commit, which applies `next lint --fix` and `prettier --write` to staged `.js/.jsx/.ts/.tsx` files.

## Architecture

### Data Layer

- **Contentful CMS** is the content backend, accessed via its GraphQL API
- Two data-fetching approaches coexist:
  - **urql client** (`src/contentful/urqlClient.ts`) — used with `graphql-codegen` typed documents in page-level `getStaticProps` (blog pages, project pages)
  - **Raw fetch** (`src/lib/blogApi.ts`) — direct `fetchGraphQL` helper with inline query strings
- GraphQL codegen scans `src/**/*.tsx`, `pages/**/*.tsx`, and `src/contentful/graphql/*.graphql` for queries, outputs typed artifacts to `src/gql/`
- Preview mode is controlled by `CONTENTFUL_PREVIEW` env var

### Required Environment Variables

- `CONTENTFUL_SPACE_ID`
- `CONTENTFUL_ACCESS_TOKEN`
- `CONTENTFUL_PREVIEW_ACCESS_TOKEN`
- `CONTENTFUL_PREVIEW` (optional, enables preview mode)

### Theming

- Custom MUI theme in `src/theme/brandingTheme.ts` with light/dark mode support (orange primary `#f59415`)
- Theme state managed via React context (`src/context/ThemeContext.tsx`) using `useReducer`; toggle with `useChangeTheme()` hook
- Emotion cache setup in `src/theme/createEmotionCache.ts`

### Page Structure

- Pages use `HeaderFooterLayout` wrapper component for consistent header/footer
- Homepage sections follow a StoryBrand-style marketing funnel: Hero → Stakes → Values → Guide → Plan → HireLaunch
- Blog and Projects are dynamic routes (`[slug].tsx`) using `getStaticProps`/`getStaticPaths` with Contentful data
- Schedule meeting page uses `react-calendly`

### ESLint Config

Extends `next/core-web-vitals`, `prettier`, and `@typescript-eslint/recommended`. Uses `@typescript-eslint/no-unused-vars` (the base `no-unused-vars` is off).
