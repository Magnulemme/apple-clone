<div align="center">

# 🍎 Apple MacBook Landing Page Clone

### _Una replica interattiva della landing page Apple MacBook Pro_

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Three.js](https://img.shields.io/badge/Three.js-Latest-000000?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![GSAP](https://img.shields.io/badge/GSAP-3.13-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://greensock.com/gsap/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

[Demo Live](#) • [Report Bug](https://github.com/Magnulemme/apple-clone/issues) • [Request Feature](https://github.com/Magnulemme/apple-clone/issues)

</div>

---

## 📋 Indice

- [✨ Panoramica](#-panoramica)
- [🎯 Funzionalità](#-funzionalità)
- [🏗️ Architettura del Sito](#️-architettura-del-sito)
- [🛠️ Tech Stack](#️-tech-stack)
- [🚀 Quick Start](#-quick-start)
- [📁 Struttura del Progetto](#-struttura-del-progetto)
- [⚙️ Caratteristiche Tecniche](#️-caratteristiche-tecniche)
- [🌐 Browser Support](#-browser-support)
- [📝 Licenza](#-licenza)

---

## ✨ Panoramica

Questo progetto ricrea l'esperienza visiva e interattiva del sito ufficiale **Apple MacBook Pro**, combinando:

<table>
<tr>
<td width="33%" align="center">
<img src="https://img.icons8.com/color/96/000000/3d.png" width="64"/>
<br/>
<b>Rendering 3D</b>
<br/>
Modelli realistici con Three.js
</td>
<td width="33%" align="center">
<img src="https://img.icons8.com/color/96/000000/animation.png" width="64"/>
<br/>
<b>Animazioni Fluide</b>
<br/>
GSAP + ScrollTrigger
</td>
<td width="33%" align="center">
<img src="https://img.icons8.com/color/96/000000/responsive.png" width="64"/>
<br/>
<b>Design Responsive</b>
<br/>
Mobile-first approach
</td>
</tr>
</table>

---

## 🎯 Funzionalità

### 🖥️ **Visualizzatore 3D Interattivo**

> Modelli MacBook Pro 14" e 16" completamente navigabili

- ✅ **Rotazione 360°** con controlli mouse/touch
- ✅ **Cambio dimensione** animato (14" ↔ 16")
- ✅ **Cambio colore** in tempo reale
  - Space Black
  - Silver
  - Space Gray
- ✅ **Materiali PBR** per rendering fotorealistico
- ✅ **Lighting dinamica** con setup studio professionale

### 🎨 **Design System Apple-Inspired**

```
📐 Typography
  └─ Apple San Francisco Font Family

🎨 Color Palette
  ├─ Primary: #0071e3 (Apple Blue)
  ├─ Dark: #1d1d1f (Background)
  └─ Light: #f5f5f7 (Text)

✨ Animation Easing
  └─ Custom easing: cubic-bezier(0.4, 0, 0.2, 1)
```

---

## 🏗️ Architettura del Sito

Il sito è composto da **7 sezioni principali**, ognuna con animazioni e interazioni uniche:

<details open>
<summary><b>1️⃣ Navbar</b> - Navigazione Fixed</summary>

```
📍 Posizione: Fixed top
🎨 Stile: Glassmorphism con backdrop blur
📱 Responsive: Hamburger menu su mobile
```
</details>

<details open>
<summary><b>2️⃣ Hero Section</b> - Prima Impressione</summary>

```
🎬 Elementi:
  ├─ Titolo animato con fade-in
  ├─ Video background hero
  ├─ CTA button con hover effect
  └─ Scroll indicator

📊 Animazioni:
  └─ GSAP timeline per entrata sequenziale
```
</details>

<details open>
<summary><b>3️⃣ Products Section</b> - Selezione Modello</summary>

```
🎯 Funzionalità:
  ├─ Canvas Three.js full-width
  ├─ Modello 3D interattivo MacBook
  ├─ Color picker (3 colori)
  ├─ Size selector (14" / 16")
  └─ Smooth transitions tra modelli

🔄 State Management:
  └─ Zustand store per colore/dimensione globale

⚡ Performance:
  └─ Model switching con fade animations
```
</details>

<details open>
<summary><b>4️⃣ Showcase Section</b> - Video Features</summary>

```
🎥 Composizione:
  ├─ Video fullscreen con mask SVG
  ├─ Testo overlay animato
  └─ Parallax effect su scroll

📝 Content:
  ├─ Titolo principale
  ├─ 2 colonne di features
  └─ Fade-in su scroll trigger
```
</details>

<details open>
<summary><b>5️⃣ Performance Section</b> - Chip Gallery</summary>

```
🎴 Layout:
  └─ 7 cards disposte a ventaglio
      ├─ P1: Bottom 50%, Left 23%
      ├─ P2: Bottom 40%, Right 17%
      ├─ P3: Bottom 25%, Right 15%
      ├─ P4: Bottom 15%, Right 10%
      ├─ P5: Center (principale)
      ├─ P6: Bottom 25%, Left 25%
      └─ P7: Bottom 5%, Left 15%

🎭 Animazione:
  └─ ScrollTrigger con stacking effect
      ├─ Cards si sovrappongono
      ├─ Testo descrittivo fade-in finale
      └─ Scrub: 1 (smooth)
```
</details>

<details open>
<summary><b>6️⃣ Features Section</b> - 3D Interactive</summary>

```
🔒 Layout:
  └─ Pinned scroll section
      ├─ Canvas 3D centrale (fisso)
      └─ Testi laterali animati

🎬 Sequenza Animazione:
  ├─ Pin duration: altezza sezione
  ├─ Video texture cambiano su scroll
  ├─ Modello 3D ruota (0° → 360°)
  └─ 5 testi appaiono/scompaiono
      ├─ Desktop: posizioni alternate (left/right)
      └─ Mobile: tutti centrati top 20%

📹 Video Features:
  ├─ Video 1: Feature principale
  ├─ Video 2: Performance
  ├─ Video 3: Display
  ├─ Video 4: Audio
  └─ Video 5: Batteria

✨ Testi con Emoji:
  ├─ 🚀 Feature 1
  ├─ ⚡ Feature 2
  ├─ 💎 Feature 3
  ├─ 🎯 Feature 4
  └─ 🔥 Feature 5
```
</details>

<details open>
<summary><b>7️⃣ Highlights Section</b> - Masonry Grid</summary>

```
📐 Grid Layout:
  └─ 2 colonne (mobile: 1 col)
      ├─ Left Column:
      │   ├─ Card 1: Hero image con gradient
      │   └─ Card 2: Feature con icon
      └─ Right Column:
          ├─ Card 3: Feature con icon
          └─ Card 4: Gradient border card

🎨 Styling:
  └─ Apple gradient border effect
      └─ linear-gradient(91deg, #0096ff → #bb64ff → #f2416b → #eb7500)
```
</details>

<details open>
<summary><b>8️⃣ Footer</b> - Informazioni Finali</summary>

```
📋 Contenuto:
  ├─ Links utili
  ├─ Social media
  └─ Copyright © 2025
```
</details>

---

## 🛠️ Tech Stack

<table>
<tr>
<td width="50%">

### **Frontend Core**

| Tecnologia | Versione | Scopo |
|------------|----------|-------|
| ⚛️ **React** | 19.2.0 | UI Library |
| 📘 **TypeScript** | 5.6.2 | Type Safety |
| ⚡ **Vite** | 6.0.1 | Build Tool |
| 🎨 **TailwindCSS** | Latest | Styling |

</td>
<td width="50%">

### **3D & Animation**

| Tecnologia | Versione | Scopo |
|------------|----------|-------|
| 🎲 **Three.js** | Latest | 3D Engine |
| 🧵 **R3F** | 9.4.2 | React Renderer |
| 🎁 **Drei** | 9.122.9 | 3D Helpers |
| 🎬 **GSAP** | 3.13.0 | Animations |

</td>
</tr>
</table>

### **Utilities & State**

```bash
📦 Dependencies
  ├─ lenis@1.3.15              # Smooth scroll
  ├─ zustand@5.0.2             # State management
  ├─ clsx@2.1.1                # CSS classes
  ├─ react-responsive@10.0.1   # Responsive hooks
  └─ maath@0.10.8              # Math utilities
```

---

## 🚀 Quick Start

### **Prerequisiti**

```bash
Node.js >= 18.0.0
npm >= 9.0.0
```

### **Installazione**

```bash
# 1. Clona il repository
git clone https://github.com/Magnulemme/apple-clone.git

# 2. Entra nella directory
cd apple-clone

# 3. Installa le dipendenze
npm install

# 4. Avvia il server di sviluppo
npm run dev
```

> 🌐 Il sito sarà disponibile su **http://localhost:5173**

### **Build di Produzione**

```bash
# Crea la build ottimizzata
npm run build

# Preview della build
npm run preview
```

---

## 📁 Struttura del Progetto

```
apple-clone/
│
├─📂 public/
│  ├─📂 models/              # Modelli 3D (.glb)
│  │  ├─ macbook14.glb
│  │  ├─ macbook16.glb
│  │  └─ macbookFeatures.glb
│  │
│  ├─📂 videos/              # Video features
│  │  ├─ feature1.mp4
│  │  ├─ feature2.mp4
│  │  └─ ...
│  │
│  └─📂 fonts/               # Apple fonts
│     ├─ regular.otf
│     ├─ medium.otf
│     ├─ semibold.otf
│     └─ bold.otf
│
├─📂 src/
│  │
│  ├─📂 components/
│  │  ├─📂 models/           # Three.js Components
│  │  │  ├─ Macbook14.jsx   # Modello 14"
│  │  │  ├─ Macbook16.jsx   # Modello 16"
│  │  │  └─ MacbookFeatures.jsx
│  │  │
│  │  ├─ Navbar.tsx          # [Sezione 1]
│  │  ├─ Hero.tsx            # [Sezione 2]
│  │  ├─ Products.tsx        # [Sezione 3]
│  │  ├─ Showcase.tsx        # [Sezione 4]
│  │  ├─ Performance.jsx     # [Sezione 5]
│  │  ├─ Features.jsx        # [Sezione 6]
│  │  ├─ Highlights.jsx      # [Sezione 7]
│  │  ├─ Footer.jsx          # [Sezione 8]
│  │  ├─ ModelSwitcher.jsx   # Logic switch modelli
│  │  └─ StudioLights.tsx    # Lighting setup
│  │
│  ├─📂 store/
│  │  └─ productStore.ts     # Zustand: color + size state
│  │
│  ├─📂 constants/
│  │  └─ index.js            # Config, colors, features data
│  │
│  ├─ App.tsx                # Main app + Lenis setup
│  ├─ main.tsx               # Entry point
│  └─ index.css              # Global styles + fonts
│
├─ package.json
├─ tsconfig.json
├─ vite.config.ts
└─ tailwind.config.js
```

---

## ⚙️ Caratteristiche Tecniche

### **🚄 Performance Optimization**

<table>
<tr>
<td width="50%">

**Rendering 3D**
- ✅ Frustum culling automatico
- ✅ Lazy loading dei modelli
- ✅ Geometry instancing
- ✅ Texture compression

</td>
<td width="50%">

**Assets & Media**
- ✅ Video preloading strategico
- ✅ Debounced scroll events
- ✅ Component memoization
- ✅ Code splitting

</td>
</tr>
</table>

### **📱 Responsive Design**

```css
/* Breakpoints */
Mobile:  < 768px   → Stack layout, centered text
Tablet:  768-1024px → 2-column grid
Desktop: > 1024px   → Full layout, side text
```

**Adaptive 3D:**
- Scale dinamica basata su viewport
- Touch controls ottimizzati per mobile
- Polar rotation limits su mobile

### **♿ Accessibility**

- ✅ Keyboard navigation support
- ✅ ARIA labels su elementi interattivi
- ✅ Focus indicators visibili
- ✅ Contrast ratio WCAG AA compliant
- ✅ Reduced motion media query support

---

## 🌐 Browser Support

| Browser | Versione Minima | Note |
|---------|-----------------|------|
| 🟢 **Chrome** | 90+ | ✅ Full support |
| 🟢 **Edge** | 90+ | ✅ Full support |
| 🟡 **Firefox** | 88+ | ⚠️ Alcune animazioni potrebbero essere meno fluide |
| 🟡 **Safari** | 14+ | ⚠️ Richiede WebGL 2.0 |

> ⚠️ **Requisito critico:** WebGL 2.0 support

---

## 🙏 Credits

<table>
<tr>
<td align="center">
<b>Design Originale</b><br/>
<a href="https://www.apple.com">Apple Inc.</a><br/>
🍎
</td>
<td align="center">
<b>Sviluppo</b><br/>
<a href="https://github.com/Magnulemme">Magnulemme</a><br/>
👨‍💻
</td>
<td align="center">
<b>Ispirazione</b><br/>
Apple MacBook Pro<br/>
Landing Page
</td>
</tr>
</table>

---

## 📝 Licenza

> ⚖️ **Disclaimer Educativo**

Questo progetto è stato creato **esclusivamente per scopi educativi e di portfolio**.

- ❌ Non è affiliato con Apple Inc.
- ❌ Non può essere usato per scopi commerciali
- ✅ Tutti i diritti di design e brand appartengono ad **Apple Inc.**

---

<div align="center">

### **Sviluppato con ❤️ usando React, Three.js e GSAP**

[![GitHub](https://img.shields.io/badge/GitHub-Magnulemme-181717?style=for-the-badge&logo=github)](https://github.com/Magnulemme)

**⭐ Se ti è piaciuto il progetto, lascia una stella!**

</div>
