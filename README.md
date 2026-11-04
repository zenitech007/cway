# CWAY cinematic experience

Next.js App Router / TypeScript / Tailwind CSS / Framer Motion / Lenis.

- `npm install`
- `npm run assets` converts extracted JPGs to 1600px desktop WebP and 960px mobile WebP (every second source frame).
- `npm run build`
- `npm start` serves the production app at localhost:3000.

Source archives and frames live outside public in source/zips and source/frames. Every sequence has a manifest. Add matching full-scene PNGs to public/products/<sequence-slug>.png and rerun npm run assets to enable final-ten-frame key-visual crossfades and reduced-motion key visuals.

No key visuals were supplied. Sequences hold their final available frame; static reduced-motion uses their first-frame poster. On mobile the last available source frame is 119. Product sizes come from official pages (Nutri-Yo: 500ml/125ml, not the 400ml asset label). No generated imagery. Supporting graphics use CSS/SVG. Map markers indicate countries, not factory addresses.

Concept and motion plan: CONCEPT.md. Official HTML and extracted source snapshots: source/research. Catalogue: lib/products.ts. All public product detail pages use the same data and renderer. The contact page links to official channels; it does not simulate a working submission form.

Audit updates: sequence playback switches resolution when the viewport crosses 800px; decoded frame caches are bounded to 48 images per active chapter, demand requests are bounded, reduced-motion changes clear text transforms, and the mobile menu closes with Escape and restores focus. Frame responses use a one-day cache with stale revalidation. Dependencies are pinned to the verified installed versions.

Verification commands: `npm run build`, `npm run check`, and (with the app serving localhost:3000) `npm run verify`. The verifier checks local links and all twelve desktop/mobile frame counts, and exits unsuccessfully on a route failure.
