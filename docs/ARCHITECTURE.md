# Feature-Sliced Design (FSD) in Next.js

This project has been updated to follow the **Feature-Sliced Design (FSD)** architecture. FSD is an architectural methodology for frontend development that promotes modularity, high cohesion, and scalability.

## Directory Structure

The `src/` directory is organized into several primary FSD layers:

1. **`app/` (App Layer)**:
   - Contains global styles, global configurations, and Next.js routing patterns (e.g. `layout.tsx`, `page.tsx`).
   - `page.tsx` now acts solely as an entry point, deferring the rendering to the `views` layer.

2. **`views/` (Page Composition Layer)**:
   - Corresponds to the `pages/` layer in standard FSD (Next.js uses `app` for pages, so we use `views` to distinguish the logic).
   - Composes widgets and features to create a full page layout.
   - Example: `src/views/home/ui/HomePage.tsx` composes the Home page interface.

3. **`widgets/` (Widget Layer)**:
   - Meaningful structural blocks built by composing entities and features.
   - Example: `src/widgets/header/ui/Header.tsx` (a header component that can be used across multiple pages).

4. **`features/` (Feature Layer)** *(Created but currently empty)*:
   - Business functionality and user interactions. Features bring business value to the user.
   - Examples: `theme-toggle`, `auth-by-email`, `add-to-cart`.

5. **`entities/` (Entities Layer)** *(Created but currently empty)*:
   - Business entities. Represents the core business objects.
   - Includes state, API methods, and core UI representations related to specific domain objects.
   - Examples: `user`, `product`, `order`.

6. **`shared/` (Shared Layer)**:
   - Highly reusable code disconnected from the specifics of the project.
   - Divided further into segments:
     - `ui`: Reusable UI kit components (`Button`, `Input`).
     - `lib`: Shared utilities, hooks, helpers.
     - `api`: Base API configuration (e.g., fetch wrappers).
     - `config`: Environment variables and setup constants.

## Important Principles

- **One-Way Dependency Rule**: Upper layers can ONLY import from lower layers. 
  - `app` -> `views` -> `widgets` -> `features` -> `entities` -> `shared`.
  - Violating this (e.g., `shared` importing from `features`) breaks the architecture.
- **Public API**: Every slice (folder inside a layer) MUST have an `index.ts` file. You should only import from a slice's `index.ts`, hiding internal file structure.

## Summary of Changes
- Generated `src/shared/ui/button`
- Generated `src/widgets/header`
- Generated `src/views/home`
- Updated `src/app/layout.tsx` to include the `Header` widget.
- Refactored `src/app/page.tsx` to mount `<HomePage />` following FSD.
