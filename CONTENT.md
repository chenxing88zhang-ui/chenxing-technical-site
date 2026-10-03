# Adding projects and articles

The homepage contains brief entry cards. Full content lives at `projects/<slug>/` or `articles/<slug>/` under `dist`.

Edit the `pages` array in `tools/build-content.mjs`. Each entry supplies a stable path, type (`project` or `article`), title, label, summary, metadata and HTML body. The shared `renderPage` template provides navigation, breadcrumbs, responsive layout, contact links and a return link. Article pages use a narrower reading column (`article-main`).

Run `node tools/build-content.mjs` after changing page content. Commit the generated pages with the source script. GitHub Pages publishes `dist` directly.

Add a matching card in `dist/index.html`: link both its title and action to the page directory. Use short descriptions on the homepage. Put screenshots and detailed material in the project page. Use paths relative to the page directory so the site works under its GitHub Pages project URL.

The ATE page uses a cropped screenshot from the supplied product promotion material. Other project pages are brief overviews, without unverified project metrics. The first article is a design note based on the ATE workflow, not a project performance claim.

## Styling

Shared presentation lives in `dist/style.css`. The homepage and the `renderPage` template both link that file, plus `dist/site.js`, which only opens and closes the small-screen navigation. Do not add a second stylesheet. Figures, inline code, fenced code blocks, tables and quotations are styled there for project and article pages.

Paths in the template are relative (`../../style.css`, `../../site.js`) so pages keep working when the site is served from the GitHub Pages project URL.
