# [Henrique Soubhia] | Portfolio

A minimalist, high-performance portfolio crafted with **Next.js**, **TypeScript**, and **Motion**. This project focuses on visual rhythm, fluid transitions, and a personalized experience that adapts to the user's environment.

## ✨ Highlights

- **Aesthetic Precision:** High-end dark mode design with glassmorphism and subtle micro-animations.
- **Dynamic Adaptability:** Full multi-language support (PT/EN) with smooth cross-fade transitions.
- **Architectural Clarity:** Modular components built on top of a carefully defined design system.

## 🧠 Technical Curiosities

### zero-FOUC Dynamic Theme

One of the core features of this portfolio is the **Dynamic Background System**. The page background color isn't static; it evolves based on the user's local time (e.g., warmer tones for the afternoon, deep indigo for late night).

To achieve a "premium" feel, we solve the **Flash of Unstyled Content (FOUC)** problem using a synchronous, blocking script injected directly into the `<head>` of `app/layout.tsx`.

### Harmonious Animations

Transitions aren't just decorative; they are integrated into the state machine. The multi-language switch uses a coordinated "fade-out, swap, fade-in" sequence that updates the layout without jarring jumps, ensuring the visual rhythm remains intact.

---

> [!TIP]
> This project is designed for visual excellence. Every transition and interaction is tuned for a smooth, high-performance experience.

Developed with ❤️ by [Henrique Soubhia](https://github.com/HenriqueSoubhia).
