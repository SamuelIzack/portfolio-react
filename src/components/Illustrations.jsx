// Ilustrações dos projetos em SVG, usadas enquanto não há imagens reais

export function TerminalArt() {
  return (
    <svg className="art" viewBox="0 0 600 360" role="img" aria-label="Maquininha sincronizando com o banco de dados e a API da Capta">
      <defs>
        <pattern id="dots-a" width="22" height="22" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.2" fill="#2f4251" />
        </pattern>
        <linearGradient id="body-a" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2b3d4b" />
          <stop offset="1" stopColor="#1b2933" />
        </linearGradient>
        <linearGradient id="screen-a" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f6c869" />
          <stop offset="1" stopColor="#e09a2a" />
        </linearGradient>
        <radialGradient id="glow-a">
          <stop offset="0" stopColor="#f0b54a" stopOpacity=".28" />
          <stop offset="1" stopColor="#f0b54a" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="600" height="360" fill="url(#dots-a)" />
      <circle cx="140" cy="190" r="150" fill="url(#glow-a)" />

      {/* maquininha */}
      <g transform="translate(70 58) rotate(-6 70 120)">
        <rect x="0" y="0" width="140" height="240" rx="22" fill="url(#body-a)" stroke="#3d5363" strokeWidth="2" />
        <rect x="16" y="18" width="108" height="72" rx="8" fill="url(#screen-a)" />
        <path d="M44 56 l14 14 l30 -32" fill="none" stroke="#17232d" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
        <g fill="#3d5363">
          {[0, 1, 2, 3].map((row) =>
            [0, 1, 2].map((col) => (
              <rect key={`${row}-${col}`} x={22 + col * 34} y={108 + row * 28} width="26" height="18" rx="5" />
            ))
          )}
        </g>
        <rect x="30" y="-10" width="80" height="14" rx="4" fill="#ece6dc" opacity=".85" />
      </g>

      {/* linhas de dados */}
      <path className="art__wire" d="M232 170 C 290 170, 300 120, 360 120" />
      <path className="art__wire art__wire--late" d="M232 200 C 300 200, 330 250, 400 250" />

      {/* banco */}
      <g transform="translate(362 70)">
        <ellipse cx="50" cy="16" rx="50" ry="16" fill="#2b3d4b" stroke="#3d5363" strokeWidth="2" />
        <path d="M0 16 v60 a50 16 0 0 0 100 0 v-60" fill="#22323f" stroke="#3d5363" strokeWidth="2" />
        <path d="M0 46 a50 16 0 0 0 100 0" fill="none" stroke="#3d5363" strokeWidth="2" />
        <text x="50" y="68" textAnchor="middle" className="art__label">MySQL</text>
      </g>

      {/* nuvem capta */}
      <g transform="translate(402 206)">
        <path d="M30 80 h110 a34 34 0 0 0 0 -68 a46 46 0 0 0 -86 8 a30 30 0 0 0 -24 60 z" fill="#22323f" stroke="#f0b54a" strokeWidth="2" />
        <text x="84" y="58" textAnchor="middle" className="art__label art__label--amber">Capta API</text>
      </g>
    </svg>
  )
}

export function MapArt() {
  const drops = Array.from({ length: 26 }, (_, i) => ({
    x: (i * 53) % 600,
    y: (i * 37) % 120,
    d: (i % 7) * 0.25,
  }))

  return (
    <svg className="art" viewBox="0 0 600 360" role="img" aria-label="Mapa com chuva e áreas de risco de enchente">
      <defs>
        <radialGradient id="risk-high">
          <stop offset="0" stopColor="#e5604a" stopOpacity=".75" />
          <stop offset="1" stopColor="#e5604a" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="risk-mid">
          <stop offset="0" stopColor="#f0b54a" stopOpacity=".6" />
          <stop offset="1" stopColor="#f0b54a" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="risk-low">
          <stop offset="0" stopColor="#5fb7c9" stopOpacity=".45" />
          <stop offset="1" stopColor="#5fb7c9" stopOpacity="0" />
        </radialGradient>
        <clipPath id="map-clip"><rect width="600" height="360" /></clipPath>
      </defs>

      <g clipPath="url(#map-clip)">
        {/* curvas de nível */}
        <g fill="none" stroke="#2a3b49" strokeWidth="1.5">
          <path d="M-20 70 C 120 30, 220 120, 360 80 S 560 20, 640 60" />
          <path d="M-20 110 C 120 70, 230 160, 370 120 S 560 70, 640 100" />
          <path d="M-20 300 C 100 270, 220 330, 380 300 S 560 250, 640 290" />
          <path d="M-20 335 C 120 310, 240 360, 400 335 S 560 300, 640 325" />
        </g>
        {/* ruas */}
        <g stroke="#2f4251" strokeWidth="3" strokeLinecap="round">
          <path d="M60 0 L110 360" />
          <path d="M250 0 L230 360" />
          <path d="M430 0 L470 360" />
          <path d="M0 160 L600 140" />
          <path d="M0 250 L600 268" />
        </g>
        {/* rio */}
        <path d="M-10 215 C 90 180, 170 240, 280 205 S 470 170, 610 200" fill="none" stroke="#3f7f99" strokeWidth="10" strokeLinecap="round" opacity=".8" />

        {/* manchas de risco */}
        <circle cx="270" cy="205" r="90" fill="url(#risk-high)" />
        <circle cx="470" cy="190" r="70" fill="url(#risk-mid)" />
        <circle cx="110" cy="215" r="62" fill="url(#risk-low)" />

        {/* chuva */}
        <g className="art__rain" stroke="#9fd2df" strokeWidth="2" strokeLinecap="round" opacity=".55">
          {drops.map((p, i) => (
            <line key={i} x1={p.x} y1={p.y} x2={p.x - 6} y2={p.y + 16} style={{ animationDelay: `${p.d}s` }} />
          ))}
        </g>
      </g>

      {/* marcador */}
      <g transform="translate(270 132)">
        <circle cx="0" cy="62" r="14" className="art__pulse" fill="none" stroke="#e5604a" strokeWidth="2" />
        <path d="M0 62 C -22 34, -22 10, 0 4 C 22 10, 22 34, 0 62 Z" fill="#e5604a" />
        <circle cx="0" cy="24" r="7" fill="#17232d" />
      </g>

      {/* pluviômetro */}
      <g transform="translate(470 270)">
        <rect width="110" height="72" rx="10" fill="#111b23" stroke="#2f4251" />
        <g fill="#5fb7c9">
          {[14, 22, 30, 44, 36, 52].map((h, i) => (
            <rect key={i} x={12 + i * 15} y={60 - h} width="9" height={h} rx="2" opacity={i === 5 ? 1 : 0.55} />
          ))}
        </g>
      </g>
    </svg>
  )
}
