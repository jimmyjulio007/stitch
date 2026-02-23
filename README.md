# Lumière — Premium Design Subscription

Lumière is a state-of-the-art landing page for a premium design subscription service. Built with a focus on high-end aesthetics, cinematic motion design, and developer-centric architecture.

![Lumière Preview](public/images/bento-editorial.png)

## 🚀 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router, React 19)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (New CSS-first engine)
- **Motion**: [GSAP](https://gsap.com/) & [@gsap/react](https://gsap.com/resources/React/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Architecture**: [Feature-Sliced Design (FSD)](https://feature-sliced.design/)
- **Theming**: [next-themes](https://github.com/pacocoursey/next-themes)

## ✨ Features

- **Cinematic Entrance**: Custom GSAP timelines for staggered, skewed heading reveals.
- **Scroll-Linked Parallax**: An interactive bento grid that floats and rotates as you scroll.
- **Tailored Light/Dark Mode**: Class-based theme switching with a custom Tailwind v4 selector and smooth CSS color transitions.
- **Performance Optimized**: 0-FOUC theme management, optimized Next.js images, and deferred GSAP ScrollTriggers.
- **Clean Architecture**: Strictly following FSD layers (`views`, `widgets`, `features`, `entities`, `shared`) for maximum maintainability.

## 🛠 Project Structure

The project follows the **Feature-Sliced Design (FSD)** methodology:

- `src/app`: Next.js routing, providers, and global styles.
- `src/views`: Composition of sections for specific pages (e.g., `HomePage`).
- `src/widgets`: Independent structural blocks like the `Header`.
- `src/shared`: Reusable hooks (`useFadeIn`, `useParallax`), providers, and UI tokens.

## 🏁 Getting Started

### Prerequisites

- Node.js 18+
- pnpm / npm / yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/lumiere.git

# Install dependencies
pnpm install

# Run the development server
pnpm dev
```

### Build

```bash
pnpm build
```

---

*Lumière — Crafted for brands that demand more.*
