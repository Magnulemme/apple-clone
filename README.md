# Apple MacBook Landing Page Clone

Una replica interattiva della landing page di Apple MacBook Pro, costruita con React, Three.js e GSAP per animazioni fluide e coinvolgenti.

## Panoramica

Questo progetto ricrea l'esperienza visiva e interattiva del sito ufficiale Apple MacBook Pro, implementando:

- **Modelli 3D interattivi** dei MacBook Pro 14" e 16"
- **Animazioni scroll-based** con GSAP ScrollTrigger
- **Smooth scrolling** con Lenis
- **Interfaccia responsive** ottimizzata per desktop e mobile
- **Design fedele** allo stile Apple

## Funzionalità Principali

### 🖥️ Visualizzatore 3D Interattivo
- Modelli 3D realistici dei MacBook Pro 14" e 16"
- Cambio dimensione e colore in tempo reale
- Controlli touch/mouse per ruotare il modello
- Materiali PBR per rendering fotorealistico

### ✨ Sezioni Animate

#### Hero Section
Introduzione con animazioni GSAP e video background

#### Product Viewer
Visualizzatore 3D con selezione colore e dimensione:
- **Colori**: Space Black, Silver, Space Gray
- **Dimensioni**: 14" e 16"

#### Showcase
Presentazione delle caratteristiche con scroll reveal animations

#### Performance
Carousel animato di chip e processori con effetto stack

#### Features
Modello 3D pinnato con rotazione sincronizzata allo scroll e testi animati che descrivono le funzionalità

#### Highlights
Griglia masonry delle caratteristiche principali

### 🎨 Design System
- Tipografia Apple San Francisco
- Palette colori ufficiale Apple
- Animazioni fluide e naturali
- Interfaccia minimalista

## Tech Stack

### Core
- **React 19** - Libreria UI
- **TypeScript** - Type safety
- **Vite** - Build tool e dev server

### 3D Graphics
- **Three.js** - Rendering 3D
- **@react-three/fiber** - React renderer per Three.js
- **@react-three/drei** - Helpers e componenti Three.js

### Animations
- **GSAP** - Animazioni timeline-based
- **ScrollTrigger** - Animazioni scroll-driven
- **Lenis** - Smooth scroll

### Utilities
- **Zustand** - State management
- **clsx** - Gestione classi CSS condizionali
- **TailwindCSS** - Utility-first CSS

## Installazione

```bash
# Clona il repository
git clone https://github.com/Magnulemme/apple-clone.git

# Entra nella directory
cd apple-clone

# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm run dev
```

Il progetto sarà disponibile su `http://localhost:5173`

## Script Disponibili

```bash
# Sviluppo
npm run dev

# Build di produzione
npm run build

# Preview build
npm run preview

# Linting
npm run lint
```

## Struttura del Progetto

```
apple-clone/
├── public/
│   ├── models/          # Modelli 3D (.glb)
│   ├── videos/          # Video per le features
│   └── fonts/           # Font custom
├── src/
│   ├── components/
│   │   ├── models/      # Componenti Three.js
│   │   ├── Hero.tsx
│   │   ├── Products.tsx
│   │   ├── Showcase.tsx
│   │   ├── Performance.jsx
│   │   ├── Features.jsx
│   │   ├── Highlights.jsx
│   │   └── Footer.jsx
│   ├── store/
│   │   └── productStore.ts  # Zustand store
│   ├── constants/
│   │   └── index.js     # Configurazione e dati
│   ├── App.tsx
│   └── main.tsx
└── package.json
```

## Caratteristiche Tecniche

### Performance Optimization
- Lazy loading dei modelli 3D
- Video preloading con gestione memoria
- Debouncing degli eventi scroll
- Memoizzazione dei componenti pesanti

### Responsive Design
- Breakpoints mobile/tablet/desktop
- Scala dinamica dei modelli 3D
- Layout adattivo per ogni sezione
- Touch controls ottimizzati per mobile

### Accessibility
- Navigazione da tastiera
- ARIA labels
- Contrast ratio conforme WCAG

## Browser Support

- Chrome/Edge (ultimo)
- Firefox (ultimo)
- Safari 14+

**Nota**: Richiede supporto WebGL 2.0

## Ottimizzazioni Future

- [ ] Implementare lazy loading delle sezioni
- [ ] Aggiungere supporto PWA
- [ ] Ottimizzare texture 3D con compressione
- [ ] Implementare sistema di theming (dark/light)
- [ ] Aggiungere test end-to-end

## Credits

- Design originale: [Apple Inc.](https://www.apple.com)
- Modelli 3D: Custom models
- Ispirazione: Apple MacBook Pro landing page

## Licenza

Questo progetto è stato creato esclusivamente per scopi educativi e di portfolio. Tutti i diritti di design e brand appartengono ad Apple Inc.

---

**Sviluppato con** ❤️ **usando React, Three.js e GSAP**
