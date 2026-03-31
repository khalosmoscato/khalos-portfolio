# Khalos Moscato – Portfolio

Hi! I’m **Khalos Moscato**, a software engineer based in **London**. I specialise in building robust, mission-critical systems using the **.NET ecosystem**, while maintaining high-level proficiency in **TypeScript** and **React**.

Coming from a background in luxury management at **Louis Vuitton**, I bring a habit of precision, reliability, and extreme attention to detail to every codebase I touch.

🌐 **Live Portfolio:** [https://khalos-portfolio.vercel.app](https://khalos-portfolio.vercel.app)
📧 **Contact:** khalos.moscato@gmail.com

---

## About This Portfolio

This portfolio showcases my **personal projects, UI/UX designs, and technical skills**. It’s fully built with a **modern development workflow**, including linting, formatting, testing, and CI/CD, so it reflects both the final product and the engineering practices behind it.

### Key Sections

- **About Me** – background, skills, and interests  
- **Projects** – detailed demos of my work  
- **Contact** – direct messaging to reach me  

---

## 🛠 Tech Stack

- **Backend:** C#, .NET 8, ASP.NET Core, Node.js, Python, REST APIs
- **Frontend:** React, TypeScript, JavaScript, Tailwind CSS, Vite, HTML/CSS
- **Database & Cloud:** PostgreSQL, Entity Framework, MongoDB, Supabase, Docker, AWS
- **Testing & Quality:** TDD, xUnit, Moq, Cypress, Vitest, Husky Git hooks
- **Design:** Figma, Responsive UI, Accessibility (A11y)

---

## 🚀 Featured Projects

### PokéLike (API & Dashboard)
A decoupled collection manager demonstrating backend architecture and containerisation.
- **Tech:** .NET 8, C#, PostgreSQL, Docker, React.
- **Key Features:** RESTful API, Repository Pattern, Docker-compose environment.
- [Backend Source](https://github.com/khalosmoscato/pokelike-backend) | [Frontend Source](https://github.com/khalosmoscato/pokelike-frontend)

### Zubi (Mobile-First E-Commerce)
An accessible PWA focused on high-quality UX and rigorous testing.
- **Tech:** React, TypeScript, Tailwind CSS, Cypress, TDD.
- **Key Features:** Mobile-first design, accessibility compliance, full integration test suite.
- [Backend Source](https://github.com/khalosmoscato/zubi-backend) | [Frontend Source](https://github.com/khalosmoscato/zubi-frontend)

---

## Modern Developer Workflow

- **Git Hooks via Husky**
  - `pre-commit`: runs `lint-staged` (ESLint + Prettier auto-fix)  
  - `commit-msg`: enforces **conventional commits** via commitlint  
  - `pre-push` (optional): runs typecheck and tests  

- **Linting & Formatting**
  - ESLint + Prettier + `prettier-plugin-tailwindcss`  
  - Automatic formatting and class ordering  

- **Testing**
  - Vitest + React Testing Library for component and hook tests  
  - Example: `src/components/__tests__/*.test.tsx`  

- **CI/CD**
  - GitHub Actions workflow runs on `push` and `pull_request` to `main`  
  - Steps: checkout, setup Node.js, install dependencies, lint, typecheck, run tests, build  

---

## Tailwind & Design System

- Custom colors: `primary`, `accent`, `background`, `text`  
- Fonts: `Inter` (body) and `Poppins` (headings)  
- Utilities for consistent spacing, border-radius, typography  
- Skip-link for accessibility  

**Example CSS:**

```css
.section { @apply py-section px-4; }

.skip-link {
  @apply sr-only focus:not-sr-only fixed left-2 top-2 z-50 bg-white dark:bg-gray-800 text-black dark:text-white px-3 py-2 rounded-md shadow;
}
```

---

## Project Structure

```txt
src/
  components/   # React components
  pages/        # Page components
  layouts/      # Layout components
  hooks/        # Custom React hooks
  styles/       # Tailwind base, components, utilities
  types/        # TypeScript type definitions

public/
  index.html    # Entry HTML file
```

---

## Running Locally

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Run tests
npm run test
npm run test:watch

# Type-check
npm run typecheck

# Lint & format
npm run lint
npm run format

# Production build
npm run build
npm run preview
```

---

## Commit Guidelines

Conventional commits are enforced. Example types:

- `feat` → new feature  
- `fix` → bug fix  
- `chore` → tooling/build/maintenance  
- `docs` → documentation changes  
- `style` → formatting/UI tweaks  
- `refactor` → code changes not new features  
- `test` → adding/updating tests  
- `ci` → CI/CD pipeline updates  

**Example commit:**

```text
feat(header): add responsive navigation

- Added mobile-friendly nav bar
- Updated header styling
```

---