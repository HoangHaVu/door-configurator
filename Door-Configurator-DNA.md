# Door-Configurator — DNA

---

## Bereich 1: Projekt-Brief

### Was ist dieses Projekt?
Ein mehrstufiger Premium-Tür-Konfigurator als Web-App in React. Dient gleichzeitig als Produkt-Konfigurator und Lead-Generierungs-Tool für Türhersteller und Fachhändler.

### Zielgruppe
- **Endkunden:** Hausbesitzer, die eine individuelle Tür konfigurieren und ein Angebot anfragen möchten
- **Geschäftskunden (B2B):** Bauunternehmer, Architekten

### Core User Flow
1. Türkategorie wählen
2. Material wählen
3. Maße eingeben (Standardgrößen + individuelle Maßeingabe)
4. Design & Stil wählen
5. Farbe & Oberfläche (RAL-Farbwähler, Rahmen und Türblatt unabhängig)
6. Hardware & Sicherheit
7. Extras & Montage
8. Ergebnisseite: visuelle Zusammenfassung + Preisaufstellung
9. Lead-Capture-Formular (inkl. Dateiupload für Maßskizzen/Fotos)
10. Dankeseite

### Key Technical Requirements
- Multi-Step-Formular mit Fortschrittsanzeige + Vor/Zurück-Navigation
- Live-Tür-Visualizer (Echtzeit-Update bei Farbwahl, Glaseinsätzen, Hardware)
- Individuelle Maßeingabe + Standard-Größenvorlagen
- RAL-Farbwähler für Rahmen und Türblatt unabhängig voneinander
- Dynamische Preisberechnung basierend auf allen Auswahlen
- Mobile-first, vollständig responsiv
- Lead-Capture-Formular mit Dateiupload-Option

### Business Context
White-Label-Produkt für Türhersteller und -händler.
Preisstaffelung: **3.000–15.000 € pro Kunde** (je nach Unternehmensgröße).
USP: Live-Visualizer + Echtzeit-Preisberechnung rechtfertigen den Premiumpreis.

---

## Bereich 2: Tech-Stack

### Core Architecture
- **Framework:** React 18 (Vite)
- **Styling:** Tailwind CSS (Vanilla CSS logic for custom tokens)
- **Sprache:** TypeScript
- **Package Manager:** npm
- **Routing:** React Router DOM v6
- **Icons:** Lucide React & Material Symbols Outlined

### State & Data
- **Configurator State:** Custom React Hook (`useConfigurator`) using local state for step-by-step persistence.
- **Data Layer:** Centralized `mockData.ts` for all product options, categories, and pricing logic.

### Folder Structure
```bash
/src
  /components
    /layout        # Navbar, Footer
    /configurator  # Visualizer, ProgressBar, OptionCard
    /ui            # Reusable primitive UI elements (planned)
  /data            # Static content (mockData.ts)
  /hooks           # useConfigurator state management
  /pages           # Page views (HomePage, ConfiguratorPage, etc.)
  App.tsx          # Router configuration
  main.tsx         # Entry point
  index.css        # Global styles & Tailwind
```

### Conventions
- **Components:** Functional components using PascalCase.
- **Directories:** Lowercase kebab-case for all folders.
- **Styling:** Design-token based Tailwind usage (aligned with DESIGN.md).
- **Naming:** Semantic naming for all variables and types.

### Scripts
- `npm run dev`: Start local development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build locally


---

## Bereich 3: Seiten-Baum

<!-- Wird von Antigravity/Cursor befüllt nach step-generate-maps.md -->
