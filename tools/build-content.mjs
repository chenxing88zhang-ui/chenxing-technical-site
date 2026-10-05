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
<figure class="detail-figure"><a href="../../images/ate-test-execution.png" target="_blank" rel="noreferrer"><img src="../../images/ate-test-execution.png" width="1917" height="1126" alt="ATE application showing completed hierarchical test execution, passed step results, execution controls and test logs" /></a><figcaption>Test execution workspace showing completed flows, case results and execution logs. Select the image to view it at full size.</figcaption></figure>
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
    label: 'Custom instrument software / Integrated platform',
    summary: 'A customizable software platform integrating signal processing, measurement workflows, human-machine interaction and advanced rendering for instrument products.',
    meta: ['Signal processing', 'Measurement orchestration', 'C++ / Qt / OpenGL'],
    body: `<section class="detail-section"><h2>An integrated instrument software platform</h2><p>The platform connects signal processing algorithms with measurement execution and the operator interface. It provides a software foundation that can be customized around an instrument’s acquisition paths, measurement modes and interaction requirements.</p><p>Algorithm processing, measurement state and rendering form a connected workflow: acquired data becomes analysis results, results feed the measurement interface, and operator actions update the active configuration.</p></section>
<section class="detail-section"><h2>Signal processing and measurement workflows</h2><ul><li><strong>Algorithm processing.</strong> Organize signal processing and measurement algorithms into reusable components, with defined input data, parameters and result structures.</li><li><strong>Measurement orchestration.</strong> Coordinate configuration, acquisition and analysis within a measurement mode. Keep the active parameters and result context consistent across the workflow.</li><li><strong>Human-machine interaction.</strong> Connect mode selection, parameter controls and inspection tools to the measurement state so users can understand and control the processing behind each result.</li><li><strong>Advanced rendering.</strong> Present waveforms and density distributions through interactive views, including OpenGL-based rendering, without making display logic the owner of the measurement algorithms.</li></ul></section>
<section class="detail-section"><h2>Platform architecture</h2><p>The platform is organized around distinct responsibilities: device and data interfaces supply signal data; processing components produce analysis results; measurement workflows coordinate execution; interaction and rendering components present those results and accept user input.</p><p>Defined boundaries between these responsibilities allow instrument-specific acquisition, algorithms and measurement modes to fit into a shared application foundation. Customization can extend the processing and workflow as well as the interface.</p></section>
<section class="detail-section"><h2>Visualization examples</h2><p>The following development views illustrate the interaction and rendering part of the platform using a generated 16QAM signal. They demonstrate component behavior rather than measured hardware performance.</p></section>
<section class="detail-section"><h2>Constellation density view</h2><p>A density-colored constellation makes sample concentrations and the spread around symbol positions visible. The interface exposes block size, signal selection and noise controls, alongside pause and clear-density actions.</p><figure class="detail-figure"><a href="../../images/iq-constellation.png" target="_blank" rel="noreferrer"><img src="../../images/iq-constellation.png" alt="IQ visualization interface showing a density-colored 16QAM constellation with sixteen symbol clusters" loading="lazy" /></a><figcaption>16QAM constellation density demonstration with OpenGL selected. Select the image to view it at full size.</figcaption></figure></section>
<section class="detail-section"><h2>Eye diagram and interactive markers</h2><p>The eye view overlays signal trajectories across a two-unit-interval display. M1 and M2 controls and marker readouts support inspection of positions within the plot, while density coloring highlights frequently occurring trajectories.</p><figure class="detail-figure"><a href="../../images/iq-eye-diagram.png" target="_blank" rel="noreferrer"><img src="../../images/iq-eye-diagram.png" alt="Density-colored eye diagram with M1 and M2 vertical markers across a two-unit-interval axis" loading="lazy" /></a><figcaption>Eye-diagram development view with marker controls. Displayed values are demonstration settings, not performance specifications.</figcaption></figure></section>
<section class="detail-section"><h2>Customization across the software stack</h2><p>The common platform supports customization of signal processing, measurement sequences, device integration and operator workflows. Visualization components are one part of that foundation, alongside the algorithms and execution logic that make an instrument useful.</p></section>`
  },
  {
    path: 'articles/configurable-test-workflows', type: 'article', title: 'Configurable protocols and reusable test workflows',
    label: 'Engineering note / Test automation',
    summary: 'Separating communication definitions from test intent in an ATE platform.',
    meta: ['Chenxing Zhang', '2 October 2026', '3 min read'],
    body: `<section class="detail-section"><h2>Protocols change more often than test intent</h2><p>A communication test may need to set a signal, wait for a response and compare the observed value. Its intent can stay the same even when an interface definition changes. Embedding field offsets and transport details in each test makes those updates expensive to manage.</p></section><section class="detail-section"><h2>Give test cases named resources</h2><p>In the ATE platform, protocol definitions enter through Excel and become resources in a common variable model. Test cases reference variable names. Communication workers handle the underlying interfaces.</p><p>This boundary lets engineers review protocol configuration separately from the sequence of actions and checks. Import validation can catch key definition errors before execution.</p></section><section class="detail-section"><h2>Keep execution visible</h2><p>Reusable test logic still needs an execution trail. A useful result identifies the case, step and observed value, with enough context to investigate a failure. Hierarchical execution views and session records help connect the test definition to what actually happened.</p></section><section class="detail-section"><h2>Preserve the configuration with the result</h2><p>When developing an automated test workflow, treat protocol configuration and test definitions as part of the evidence. Keeping their versions with an execution record makes later comparisons easier to interpret.</p><p>The ATE project combines protocol import, DSL test orchestration and execution records in one application.</p><a href="../../projects/ate/">Explore the ATE project ↗</a></section>`
  },
  {
    path: 'articles/evm-reference-reconstruction', type: 'article',
    title: 'Why EVM is not the distance to the nearest constellation point',
    label: 'Engineering note / Vector signal analysis',
    summary: 'Reference reconstruction and normalization decide whether an EVM figure is a measurement or a debug aid.',
    meta: ['Chenxing Zhang', '5 October 2026', '7 min read'],
    body: `<section class="detail-section"><h2>Specification EVM compares two waveforms</h2><p>A recovered 16QAM cloud shows where samples landed. The distance from each sample to the nearest ideal point is a short calculation, and many lab scripts publish it as EVM. That distance describes the slicer. The error vector magnitude used against a transmitter limit is a different operation: subtract a reference waveform from the measured waveform, then divide by a stated reference power.</p><p>3GPP NR uplink (TS 38.101-1) is one concrete case. The reference is the ideal signal reconstructed by the measurement equipment. Sample timing and RF frequency offset are corrected first, carrier leakage is removed and reported on its own, and a defined equalizer is applied under a spectrum-flatness constraint. The ratio is taken over a slot, or over a preamble, after power transients are left out.</p><p>General-purpose single-carrier analysis uses the same idea with its own filter and interval. Software in the class of R&amp;S VSE and Keysight 89600 VSA rebuilds a reference from a known sequence or from recovered bits, applies the measurement filter named by the setup, aligns it, and forms the ratio. A nearest-constellation score skips that reconstruction. A different reference, filter, alignment, or denominator yields a different percent from the same I/Q capture.</p></section>
<section class="detail-section"><h2>A hard decision bounds the error</h2><p>A slicer assigns each received symbol to the constellation point of its decision region, and the error vector is drawn to that point. The vector stops at the region boundary. A sample that has crossed into the next cell is scored as a small residual about the wrong symbol, so decision mistakes pull the reported figure down. Once the slicer is failing, a larger impairment can produce a smaller “EVM”.</p><p>An unconstrained equalizer does the same thing if the metric is taken after the taps have moved samples onto the lattice. Residual inter-symbol interference, compression, and group delay move into the weights. The cloud tightens. The transmitter impairment is no longer in the number. A measurement that equalizes has to say so, and it has to show the equalizer’s frequency response beside the result. A low figure then means the residual after a stated correction, which is something an engineer can audit.</p><p>The nearest-point figure still belongs on a debug display. Call it decision EVM, keep it out of any result compared with a limit, and keep it out of the expected column when checking an implementation.</p>
<table>
<thead><tr><th></th><th>Decision EVM</th><th>Reference EVM</th></tr></thead>
<tbody>
<tr><td>Symbol source</td><td>Nearest constellation point</td><td>Known sequence, or bits recovered and remodulated</td></tr>
<tr><td>Wrong decision</td><td>Residual shrinks, measured to the wrong point</td><td>Residual grows, because the reference symbol is wrong</td></tr>
<tr><td>Filter</td><td>Whatever the plot happened to use</td><td>The measurement filter named by the definition</td></tr>
<tr><td>Equalizer</td><td>Can absorb the impairment into the cloud</td><td>Included only as the definition allows, with its response shown</td></tr>
<tr><td>Scale</td><td>Often unspecified</td><td>RMS or peak, over a stated power and interval</td></tr>
</tbody>
</table>
</section>
<section class="detail-section"><h2>Rebuild the reference from the bits</h2><p>For single-carrier PSK or QAM the chain is fixed before a percent is computed. Select the analysis region. Remove carrier leakage when the definition removes it. Resample to a rational multiple of the symbol rate. Apply a matched filter of the same family, roll-off, span, and group delay as the transmit filter. Recover symbol timing, then carrier frequency and phase. Equalize only inside the constraint the definition sets. Demap to bits, or substitute the known sequence. Remodulate those bits, pulse-shape them with the reference filter, align time, phase, and gain to the measured waveform, and subtract.</p>
<pre><code>e[k]    = y[k] - r[k]
EVM_rms = sqrt( sum |e[k]|^2 / sum |r[k]|^2 )</code></pre>
<p><code>y</code> is the measured signal after the corrections the definition allows. <code>r</code> is the reconstructed reference. The sum runs over the samples, or the symbol instants, that the definition includes. The bits are what produce <code>r</code>.</p><p>Recovered bits fail in the opposite direction from a slicer. One bit error rebuilds the wrong symbol and that symbol adds a large residual, so the EVM rises. On a limit test that is the conservative direction. When the payload is a known sequence, rebuild from the sequence and the metric no longer depends on the slicer.</p><p>The filter is part of the reference. Root-raised-cosine against a different roll-off, span, or delay leaves a residual that sits under the EVM and looks like additive noise. The constellation can still look round. A second implementation that used the specified pair will report a different number, and both readings can be internally consistent.</p><p>Timing and carrier recovery exist so sample-clock offset and carrier offset can be removed before the subtraction. A Gardner loop, an early-late gate, or an Oerder–Meyr estimate, followed by a coarse frequency estimate and a phase tracker, are there for that correction. A loop wide enough to follow symbol-to-symbol phase moves part of the impairment into the correction, and the residual falls. Record the loop bandwidth with the result.</p></section>
<section class="detail-section"><h2>Normalization is part of the definition</h2><p>The RMS form above is the square root of mean error power over mean reference power. In percent, multiply by 100. In dB, take 20 log10 of the ratio: EVM is a magnitude ratio. Scale the reference symbols so their mean square amplitude is 1, and the denominator drops out; the RMS EVM is then the RMS of <code>e</code> itself. Peak EVM replaces the mean error power with the largest <code>|e|</code>.</p><p>Several choices move the reported value while the capture stays fixed.</p>
<ul>
<li><strong>Denominator.</strong> RMS power of the reconstructed reference, average power of the constellation, or power of the outermost symbol. Peak normalization returns a smaller percent on the same error, because outer QAM points carry more power than the mean symbol.</li>
<li><strong>Origin offset.</strong> NR removes carrier leakage before the ratio and reports it separately. Leaving the offset inside the error adds a constant term to every symbol.</li>
<li><strong>What is corrected first.</strong> Sample timing and RF frequency offset come out before the ratio. A procedure that also removes gain imbalance and quadrature error is a narrower measurement than one that leaves those terms inside EVM.</li>
<li><strong>Equalizer.</strong> A stated equalizer with a flatness limit, as in NR, is one measurement. An unconstrained adaptive equalizer is another.</li>
<li><strong>Interval.</strong> One slot, one burst, or a preamble, excluding power transients and resource elements that were not allocated. Extending the average across a quieter region lowers the number.</li>
<li><strong>Domain.</strong> Waveform EVM after the measurement filter, and symbol EVM at the decision instant, answer different questions. Publishing one under the other’s name is a comparison error.</li>
</ul>
<p>Put the choices next to the result: modulation, filter, origin-offset removal, equalizer on or off, RMS or peak, and the interval. Two setups can then disagree for a reason that can be checked.</p></section>
<section class="detail-section"><h2>A low residual means the chain agreed</h2><p>A small EVM means timing, carrier recovery, filtering, any equalizer the definition allows, reference alignment, and normalization all ran as specified. Any one stage can dominate. Split the summary. Frequency error, origin offset, gain imbalance, quadrature error, amplitude error, and phase error each need their own estimator. An EVM-versus-symbol trace shows a burst edge or a single bad decision that the RMS average hides. When every injected impairment moves only the single EVM figure, those estimators are still folded together.</p><p>The constellation, the error trace, and the summary table have to be one result generation. Changing the roll-off or the analysis interval invalidates all three. A plot drawn from a later computation than the table is a false reading, however smooth the cloud looks.</p></section>
<section class="detail-section"><h2>Prove the definition on known I/Q</h2><p>Generate I/Q from a known symbol sequence and a known pulse-shaping filter. With no added impairment, reference-reconstruction EVM should sit at the numerical floor of the arithmetic in use. That floor follows from word length and filter length. Compute it for the implementation under test. A threshold copied from another instrument is a different setup’s floor, and it is not a specification of this one.</p><p>Add one impairment at a time. A frequency offset should appear in the frequency-error result and, once the definition compensates it, leave EVM near that floor. Additive noise should raise EVM and leave origin offset and imbalance where they were. A gain imbalance should move the imbalance result in the injected direction. A wrong roll-off should raise the floor while the constellation still looks acceptable.</p><p>A nearest-point implementation can pass the mild cases and still read low once symbols cross a boundary, or once an equalizer closes around the impairment. Keep decision EVM in the regression when it helps debugging. Store the reference-reconstruction result as the expected value.</p><p>The <a href="../../projects/spectrum-analysis/">spectrum analyzer platform</a> is where modulation results sit beside the trace and the I/Q capture. The constellation and eye views on the <a href="../../projects/instrument-software/">instrument software platform</a> are density pictures of a generated 16QAM signal. They show where samples land. They are pictures of the cloud, and the measurement above is the comparison against a rebuilt reference.</p></section>`
  }
];

const fontHref = 'https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;500&amp;family=Source+Sans+3:ital,wght@0,400;0,500;0,600;1,400&amp;family=Source+Serif+4:ital,opsz,wght@0,8..60,500;0,8..60,600;1,8..60,500&amp;display=swap';

export function renderPage(page) {
  const article = page.type === 'article';
  const section = article ? 'Writing' : 'Work';
  const anchor = article ? 'writing' : 'work';
  const rootTag = article ? 'article' : 'div';
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="description" content="${page.summary}" />
  <meta name="theme-color" content="#f4f2ec" />
  <title>${page.title} — Chenxing Zhang</title>
  <link rel="icon" type="image/svg+xml" href="../../favicon.svg" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="${fontHref}" rel="stylesheet" />
  <link rel="stylesheet" href="../../style.css" />
  <noscript><style>@media (max-width: 760px) { .nav-toggle { display: none !important; } .header-inner { flex-wrap: wrap; } .site-nav { display: flex !important; position: static !important; flex-basis: 100%; flex-direction: column; align-items: stretch; margin: 0 0 .5rem; } }</style></noscript>
</head>
<body${article ? ' class="article"' : ''}>
  <a class="skip-link" href="#top">Skip to content</a>
  <header class="site-header">
    <div class="header-inner">
      <a class="brand" href="../../" aria-label="Chenxing Zhang home"><span class="brand-mark" aria-hidden="true">CZ</span><span class="brand-name">Chenxing Zhang</span></a>
      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav"><span class="nav-toggle-text">Menu</span></button>
      <nav id="site-nav" class="site-nav" aria-label="Primary navigation">
        <a href="../../#work">Work</a>
        <a href="../../#writing">Writing</a>
        <a href="../../#capabilities">Capabilities</a>
        <a href="../../#contact">Contact</a>
        <a class="nav-external" href="https://www.linkedin.com/in/chenxing-zhang-8663322b7/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
      </nav>
    </div>
  </header>
  <main id="top" class="detail-main${article ? ' article-main' : ''}">
    <nav class="breadcrumbs" aria-label="Breadcrumb"><a href="../../">Home</a><span>/</span><a href="../../#${anchor}">${section}</a><span>/</span><span aria-current="page">${page.title}</span></nav>
    <${rootTag}>
      <header class="detail-hero">
        <p class="eyebrow">${page.label}</p>
        <h1>${page.title}</h1>
        <p class="lede">${page.summary}</p>
        <div class="detail-meta">${page.meta.map(item => `<span>${item}</span>`).join('')}</div>
      </header>
      ${page.body}
    </${rootTag}>
    <nav class="detail-end" aria-label="Page navigation"><a href="../../#${anchor}">← Back to ${section.toLowerCase()}</a><a href="mailto:chenxing88.zhang@gmail.com">Discuss this ${article ? 'note' : 'project'} ↗</a></nav>
  </main>
  <footer class="site-footer">
    <div class="footer-inner">
      <a class="brand" href="../../"><span class="brand-mark" aria-hidden="true">CZ</span><span class="brand-name">Chenxing Zhang</span></a>
      <p class="footer-meta">© 2026 · Test &amp; Measurement Software</p>
      <nav class="footer-links" aria-label="Footer">
        <a href="mailto:chenxing88.zhang@gmail.com">Email</a>
        <a href="https://www.linkedin.com/in/chenxing-zhang-8663322b7/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
        <a href="https://github.com/chenxing88zhang-ui" target="_blank" rel="noreferrer">GitHub ↗</a>
        <a href="#top">Back to top ↑</a>
      </nav>
    </div>
  </footer>
  <script src="../../site.js"></script>
</body>
</html>
`;
}

for (const page of pages) {
  const dir = resolve(root, 'dist', page.path);
  mkdirSync(dir, { recursive: true });
  writeFileSync(resolve(dir, 'index.html'), renderPage(page));
}
console.log(`Built ${pages.length} content pages.`);
