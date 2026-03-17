# map-configurator.md
# Letzte Aktualisierung: 2026-03-17

## Seite: Configurator
Route: /configure/step/:stepId

## Sections & Komponenten

### Visualizer
Datei:   src/components/configurator/Visualizer.tsx
Props:   currentCategory, currentMaterial
Imports: Eye, View, ZoomIn (lucide-react)

### Progress Bar
Datei:   src/components/configurator/ProgressBar.tsx
Props:   currentStep, totalSteps, stepTitle
Imports: n/a

### Step Content (Dynamic)
Datei:   src/pages/ConfiguratorPage.tsx
Props:   n/a
Imports: OptionCard (→ map-ui-shared.md), CONFIG_STEPS (mockData.ts)
