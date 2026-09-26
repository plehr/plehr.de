# plehr.de

Statische, zweisprachige (DE/EN) Visitenkarten-Website von Pascal Lehr. Kein Framework, kein Build-Schritt, keine externen Ressourcen – ausgeliefert von nginx im Container.

## Struktur

```
site/
  index.html            Visitenkarte
  datenschutz.html      Datenschutzerklärung
  assets/style.css      gemeinsame Styles (Dark/Light via prefers-color-scheme)
  assets/i18n.js        Sprachumschalter DE/EN
  assets/avatar.*       Profilbild
  assets/fonts/         Manrope (self-hosted)
nginx.conf              Server-Konfiguration (Caching, Redirects)
security-headers.conf   Security-Header (CSP u. a.)
Dockerfile              nginx:alpine Image
```

## Lokale Vorschau

```sh
docker build -t plehr.de . && docker run --rm -p 8080:80 plehr.de
```

Danach http://localhost:8080 öffnen.

## Deployment

GitHub Actions (`.github/workflows/deployment.yml`) validiert das HTML und veröffentlicht bei jedem Push auf `main` parallel:

- **Container:** Image für `linux/amd64` und `linux/arm64` nach `ghcr.io/plehr/plehr.de:latest`, inklusive `nginx.conf` und Security-Headern.
- **GitHub Pages:** Inhalt von `site/` per `actions/deploy-pages`. Voraussetzung: *Settings → Pages → Source: GitHub Actions*. Pages setzt keine HTTP-Header, daher steht die CSP zusätzlich als `<meta>` in den Seiten.
