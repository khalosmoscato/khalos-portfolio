# Khalos CF Moscato – Portfolio

Hi! I’m **Khalos CF Moscato**, a creative, detail-oriented software engineer based in **London**. I build **full-stack web and mobile apps** using **React, TypeScript, Node.js, Tailwind CSS**, and more. I’m passionate about **DevOps, AI/ML, fintech, biotech**, and delivering **responsive, accessible, and high-quality web experiences**.  

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

## Skills & Tech Stack

- **Languages:** TypeScript, JavaScript, Python, C#  
- **Frameworks / Libraries:** React, Node.js, Vite, Express, .NET, React Native  
- **Database / APIs:** PostgreSQL, MongoDB, Supabase, REST APIs  
- **DevOps / Deployment:** Docker, AWS, Vercel, GitHub Actions CI/CD  
- **Testing & Quality:** Vitest, React Testing Library, ESLint, Prettier, Husky Git hooks  
- **UI / Design:** Tailwind CSS (custom design system), Figma, responsive and accessible UI  

---

## Featured Projects

> I will add project cards or links here with screenshots if possible. Example format:

### Project 1 – [Project Name](#)
- Short description of what it does and technologies used.  
- Live demo: [link] | GitHub: [link]

### Project 2 – [Project Name](#)
- Short description  
- Live demo: [link] | GitHub: [link]

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