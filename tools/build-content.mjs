import { mkdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const pages = [
  {
    path: 'projects/ate', type: 'project', title: 'ATE automated test platform',
    label: 'Rail transport / Test automation',
    summary: 'A C++ / Qt application for railway communication equipment and IO test benches. Configurable protocols and reusable test cases connect setup to execution and traceable reports.',
    meta: ['C++ / Qt', 'MVB / TRDP / CAN', 'Desktop application'],
    body: `<section class="detail-section"><h2>The test environment</h2><p>Railway test benches bring together communication interfaces, IO and instruments. Protocol changes and repeated validation make a shared configuration and execution workflow useful across integration, regression and production testing.</p></section>
<section class="detail-section"><h2>Core capabilities</h2><ul><li><strong>Protocol configuration.</strong> Import Excel definitions into a common resource and variable model, with checks on key fields.</li><li><strong>Reusable test sequences.</strong> Organize DSL test cases into units and flows, with conditions, loops and parallel execution.</li><li><strong>Observable execution.</strong> Inspect step results, monitor variables and frames, and retain session records for report export.</li></ul></section>
<figure class="detail-figure"><a href="../../images/ate-test-workspace.png" target="_blank" rel="noreferrer"><img src="../../images/ate-test-workspace.png" width="1920" height="880" alt="ATE test workspace with a hierarchical test sequence and execution controls" /></a><figcaption>Application workspace showing test organization and execution controls. Select the image to view it at full size.</figcaption></figure>
<section class="detail-section"><h2>Software foundation</h2><p>The platform separates test orchestration, protocol resources and device communication. Test cases reference named variables while communication workers handle the underlying interfaces. This structure supports protocol updates and reusable test logic.</p><p>Interface coverage depends on the hardware and project configuration.</p><a href="../../articles/configurable-test-workflows/">Related note: configurable test workflows ↗</a></section>`
  },
  {
    path: 'projects/spectrum-analysis', type: 'project', title: 'Spectrum analyzer platform',
    label: 'Measurement software / Spectrum analysis',
    summary: 'An analysis environment for swept and real-time spectrum workflows, modulation measurements and inspection of IQ data.',
    meta: ['SA / RTSA', 'LTE / NR', 'IQ analysis'],
    body: `<section class="detail-section"><h2>Spectrum measurement workspace</h2><p>The project brings instrument settings and signal inspection into one measurement interface. The spectrum view keeps the trace, frequency range, amplitude scale and marker readout together so engineers can interpret a signal in the context of its current configuration.</p></section>
<figure class="detail-figure"><a href="../../images/spectrum-workspace.png" target="_blank" rel="noreferrer"><img src="../../images/spectrum-workspace.png" width="1289" height="802" alt="Spectrum analyzer interface with a yellow spectrum trace, M1 marker and frequency, bandwidth and amplitude settings" /></a><figcaption>Spectrum workspace with a trace, marker readout and parameter controls. Values shown are interface examples. Select the image to view it at full size.</figcaption></figure>
<section class="detail-section"><h2>Interface and measurement controls</h2><ul><li><strong>Frequency and bandwidth.</strong> Dedicated controls expose center frequency, span, resolution bandwidth and FFT window selection.</li><li><strong>Amplitude setup.</strong> Reference level, scale per division, attenuation and preamplifier state sit alongside the plot.</li><li><strong>Trace inspection.</strong> The plotted spectrum and M1 frequency and level readouts help engineers examine individual points in the signal.</li><li><strong>Instrument workflow.</strong> The interface groups trace, sweep, marker, limit, trigger and measurement settings into separate navigation areas.</li></ul></section>
<section class="detail-section"><h2>Software design focus</h2><p>Acquisition, analysis and display need a consistent measurement state. Frequency axes, amplitude units and marker positions should follow the active configuration, while parameter changes remain easy to review. The layout gives the spectrum most of the screen and keeps frequently used controls close to it.</p><p>The broader project direction covers swept and real-time spectrum workflows, IQ inspection and wireless modulation analysis. The screenshot above illustrates the spectrum interface.</p></section>`
  },
  {
    path: 'projects/instrument-software', type: 'project', title: 'Instrument software platform',
    label: 'Product foundation / Overview',
    summary: 'An extensible desktop application foundation for instrument control, measurement workflows and engineering interfaces.',
    meta: ['C++ / Qt', 'Device control', 'Desktop UX'],
    body: `<section class="detail-section"><h2>Engineering scope</h2><p>Instrument software has to accommodate new devices and operating modes while keeping the application understandable to engineers. A shared software foundation gives device integration and measurement features a consistent place to evolve.</p></section><section class="detail-section"><h2>Platform priorities</h2><ul><li><strong>Device boundaries.</strong> Separate device communication from application workflows.</li><li><strong>Extensible modes.</strong> Organize measurement features so additions remain manageable.</li><li><strong>Engineering interfaces.</strong> Make device state and measurement controls clear in the desktop application.</li></ul></section><section class="detail-section"><h2>Discuss this work</h2><p>This page provides a brief overview. Detailed project information can be shared where appropriate.</p></section>`
  },
  {
    path: 'articles/configurable-test-workflows', type: 'article', title: 'Configurable protocols and reusable test workflows',
    label: 'Engineering note / Test automation',
    summary: 'Separating communication definitions from test intent in an ATE platform.',
    meta: ['Chenxing Zhang', '2 October 2026', '3 min read'],
    body: `<section class="detail-section"><h2>Protocols change more often than test intent</h2><p>A communication test may need to set a signal, wait for a response and compare the observed value. Its intent can stay the same even when an interface definition changes. Embedding field offsets and transport details in each test makes those updates expensive to manage.</p></section><section class="detail-section"><h2>Give test cases named resources</h2><p>In the ATE platform, protocol definitions enter through Excel and become resources in a common variable model. Test cases reference variable names. Communication workers handle the underlying interfaces.</p><p>This boundary lets engineers review protocol configuration separately from the sequence of actions and checks. Import validation can catch key definition errors before execution.</p></section><section class="detail-section"><h2>Keep execution visible</h2><p>Reusable test logic still needs an execution trail. A useful result identifies the case, step and observed value, with enough context to investigate a failure. Hierarchical execution views and session records help connect the test definition to what actually happened.</p></section><section class="detail-section"><h2>Preserve the configuration with the result</h2><p>When developing an automated test workflow, treat protocol configuration and test definitions as part of the evidence. Keeping their versions with an execution record makes later comparisons easier to interpret.</p><p>The ATE project combines protocol import, DSL test orchestration and execution records in one application.</p><a href="../../projects/ate/">Explore the ATE project ↗</a></section>`
  }
];

export function renderPage(page) {
  const article = page.type === 'article';
  const section = article ? 'Writing' : 'Work';
  const anchor = article ? 'writing' : 'work';
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1" /><meta name="description" content="${page.summary}" /><title>${page.title} — Chenxing Zhang</title><link rel="icon" href="../../favicon.svg" /><link rel="preconnect" href="https://fonts.googleapis.com" /><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin /><link href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&amp;family=Manrope:wght@400;500;600;700;800&amp;display=swap" rel="stylesheet" /><link rel="stylesheet" href="../../style.css" /><link rel="stylesheet" href="../../overrides.css" /></head>
<body><header class="site-header"><a class="brand" href="../../" aria-label="Chenxing Zhang home"><span class="brand-mark">CZ</span><span>CHENXING ZHANG</span></a><nav aria-label="Primary navigation"><a href="../../#work">Work</a><a href="../../#writing">Writing</a><a href="../../#capabilities">Capabilities</a><a href="../../#contact">Contact</a></nav><a class="header-link" href="https://www.linkedin.com/in/chenxing-zhang-8663322b7/" target="_blank" rel="noreferrer">LinkedIn ↗</a></header>
<main id="top" class="detail-main${article ? ' article-main' : ''}"><nav class="breadcrumbs" aria-label="Breadcrumb"><a href="../../">Home</a><span>/</span><a href="../../#${anchor}">${section}</a><span>/</span><span aria-current="page">${page.title}</span></nav><${article ? 'article' : 'div'}><header class="detail-hero"><p class="eyebrow">${page.label}</p><h1>${page.title}</h1><p class="lede">${page.summary}</p><div class="detail-meta">${page.meta.map(item => `<span>${item}</span>`).join('')}</div></header>${page.body}</${article ? 'article' : 'div'}><nav class="detail-end" aria-label="Page navigation"><a href="../../#${anchor}">← Back to ${section.toLowerCase()}</a><a href="mailto:chenxing88.zhang@gmail.com">Discuss this ${article ? 'note' : 'project'} ↗</a></nav></main>
<footer><a class="brand" href="../../"><span class="brand-mark">CZ</span><span>CHENXING ZHANG</span></a><div class="detail-footer"><a href="mailto:chenxing88.zhang@gmail.com">Email</a><a href="https://www.linkedin.com/in/chenxing-zhang-8663322b7/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://github.com/chenxing88zhang-ui" target="_blank" rel="noreferrer">GitHub ↗</a></div></footer></body></html>`;
}

for (const page of pages) {
  const dir = resolve(root, 'dist', page.path);
  mkdirSync(dir, { recursive: true });
  writeFileSync(resolve(dir, 'index.html'), renderPage(page).replace('href="../../overrides.css"', 'href="../../content-v2.css"'));
}
console.log(`Built ${pages.length} content pages.`);
