# Website Boilerplate Template

A modern React website template used as the starting point for AI-generated websites.

## Tech Stack

- **React 19** - UI framework
- **Vite 7** - Build tool and dev server
- **TypeScript 5.8** - Type safety
- **Tailwind CSS 4** - Utility-first styling
- **shadcn/ui patterns** - Component architecture
- **Lucide React** - Icon library

## Structure

```
website_boilerplate/
├── index.html           # Entry HTML
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript config
├── vite.config.ts       # Vite config
├── eslint.config.js     # ESLint config
├── public/
│   └── vite.svg         # Default favicon
└── src/
    ├── main.tsx         # React entry point
    ├── vite-env.d.ts    # Vite type definitions
    └── (components added by AI)
```

## Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## Dependencies

### Runtime

| Package | Purpose |
|---------|---------|
| `react` | UI framework |
| `react-dom` | React DOM renderer |
| `tailwindcss` | Utility CSS framework |
| `@tailwindcss/vite` | Tailwind Vite plugin |
| `@radix-ui/react-slot` | Slot component for composition |
| `class-variance-authority` | Variant-based component styling |
| `clsx` | Conditional class names |
| `tailwind-merge` | Merge Tailwind classes |
| `lucide-react` | Icon components |

### Development

| Package | Purpose |
|---------|---------|
| `typescript` | Type checking |
| `vite` | Build tool |
| `@vitejs/plugin-react` | React support for Vite |
| `eslint` | Code linting |
| `tw-animate-css` | Animation utilities |

## Customization Points

When the AI generates a website, it typically modifies:

### 1. src/index.css

Add Tailwind directives and custom CSS variables for the design system:

```css
@import "tailwindcss";

:root {
  --primary: 222 47% 31%;
  --primary-foreground: 210 40% 98%;
  /* ... more CSS variables */
}
```

### 2. src/App.tsx

The main application component that assembles all sections:

```tsx
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Contact } from "./components/Contact";

function App() {
  return (
    <main>
      <Hero />
      <About />
      <Contact />
    </main>
  );
}
```

### 3. src/components/

Create components for each section of the website:

```
src/components/
├── ui/
│   ├── button.tsx
│   ├── input.tsx
│   └── card.tsx
├── Hero.tsx
├── About.tsx
├── Services.tsx
├── Gallery.tsx
├── Contact.tsx
└── Footer.tsx
```

### 4. src/lib/utils.ts

Utility functions for styling:

```typescript
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### 5. public/images/

Downloaded photos from the input brief.

## Component Patterns

The AI follows shadcn/ui-inspired patterns:

### Button Component

```tsx
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        outline: "border border-input bg-background hover:bg-accent",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}
```

### Section Layout

```tsx
export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-center mb-8">
          About Us
        </h2>
        <div className="max-w-3xl mx-auto text-center text-muted-foreground">
          <p>Content goes here...</p>
        </div>
      </div>
    </section>
  );
}
```

## Building for Production

```bash
# Build
npm run build

# Output in dist/
dist/
├── index.html
└── assets/
    ├── index-[hash].js
    └── index-[hash].css
```

The `dist/` folder is ready for deployment to any static hosting:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Any web server

## Notes

- The template starts minimal - the AI adds components as needed
- Tailwind CSS 4 uses the new `@import "tailwindcss"` syntax
- All paths use `@/` alias pointing to `src/`
- Images are optimized during build by Vite
