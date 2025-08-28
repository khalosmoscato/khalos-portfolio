# Khalos Portfolio

This project is a React + TypeScript + Vite setup with Tailwind CSS and a modern developer workflow, including Husky Git hooks, linting, formatting, and testing.

## Features / Setup Included

- **React + TypeScript + Vite**
- **Tailwind CSS** with a custom design system
  - Extended colors, spacing, typography, border-radius, and shadows
  - Utilities for consistent section spacing and skip-links
- **TypeScript Path Aliases**
  - `@components`, `@pages`, `@hooks`, `@layouts`, `@styles`, `@types`
- **Git Hooks via Husky**
  - `pre-commit`: runs `lint-staged` (ESLint + Prettier auto-fix)
  - `commit-msg`: enforces **conventional commits** via commitlint
  - `pre-push` (optional): runs typecheck and tests
- **Linting & Formatting**
  - ESLint configured for React + TypeScript
  - Prettier for consistent formatting
  - `prettier-plugin-tailwindcss` for automatic Tailwind class ordering
- **Testing**
  - Vitest + @testing-library/react for component testing

## Getting Started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Run tests
npm run test

# Type-check without emitting
npm run typecheck

# Lint code
npm run lint

# Format code
npm run format
```

## Project Structure

```txt
src/
  components/   # React components
  pages/        # Page components
  styles/       # Tailwind base, components, utilities
  hooks/        # Custom React hooks
  layouts/      # Layout components
  types/        # TypeScript type definitions

public/
  index.html    # Entry HTML file
```

## Commit Guidelines

Conventional commits are enforced via Husky + commitlint.  
Use one of the standard types:

- `feat` → new feature  
- `fix` → bug fix  
- `chore` → tooling, build, or maintenance  
- `docs` → documentation changes  
- `style` → formatting or UI tweaks (no logic changes)  
- `refactor` → code changes that are not new features or bug fixes  
- `test` → adding/updating tests  
- `perf` → performance improvements  
- `ci` → CI/CD pipeline updates  

**Example commit:**

```text
feat(header): add responsive navigation

- Added mobile-friendly nav bar
- Updated header styling
```

## Tailwind & Design System

Tailwind CSS is configured with:

- Custom colors: `primary`, `accent`, `background`, `text`
- Custom fonts: `Inter` for body, `Poppins` for headings
- Spacing and border-radius tokens for consistency
- Typography plugin enabled

**Include fonts in `public/index.html`:**

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Poppins:wght@600;700&display=swap" rel="stylesheet">
<meta name="theme-color" content="#2563EB">
```

**Include base styles in `src/styles/index.css`:**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* consistent section spacing */
.section { @apply py-section px-4; }

/* skip-link: visually hidden but available when focused */
.skip-link {
  @apply sr-only focus:not-sr-only fixed left-2 top-2 z-50 bg-white dark:bg-gray-800 text-black dark:text-white px-3 py-2 rounded-md shadow;
}
```

## Testing

- Vitest + Testing Library configured  
- Example test in `src/App.test.tsx`  
- Run tests with:

```bash
npm run test
```

or watch mode:

```bash
npm run test:watch
```

## Additional Notes

- Path aliases make imports cleaner:

```ts
import Button from '@components/Button';
```

- Pre-commit hook ensures code is formatted and linted automatically.  
- Commit-msg hook validates conventional commits before pushing.
