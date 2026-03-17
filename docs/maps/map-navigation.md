# map-navigation.md
# Navigations-Graph — App-Projekt (SPA mit React Router)
# Letzte Aktualisierung: 2026-03-17

## Screen-Graph

Haupt-Navigation:
  HomePage → ConfiguratorPage (Step 1)
  ConfiguratorPage (Step 1-6) → ConfiguratorPage (Next Step)
  ConfiguratorPage (Step 7) → ResultPage
  ResultPage → ThankYouPage

## Routes (react-router)
  /                        → HomePage
  /configure/step/:stepId  → ConfiguratorPage
  /result                  → ResultPage
  /thank-you               → ThankYouPage

## Shared State
  ConfigState (category, material, size, etc.) → ConfiguratorPage, ResultPage
  MOCK_SUMMARY (pricing) → ConfiguratorPage, ResultPage
