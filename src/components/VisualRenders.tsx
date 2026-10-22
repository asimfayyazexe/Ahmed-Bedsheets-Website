import React from 'react';
import { ProductItem } from '../types';

/**
 * Visual renders crafted to faithfully replicate the iconic Parachute Home photography
 * adapted for Ahmed Bedsheets in Punjab, Pakistan with warm natural lighting,
 * organic cotton weaves, shiplap backdrop, and artisan craft textures.
 */

export const HeroBedroomVisual: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full h-full overflow-hidden select-none bg-[#637989] ${className}`}>
      <svg
        viewBox="0 0 1600 800"
        className="w-full h-full object-cover"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="wallLight" x1="0%" y1="0%" x2="100%" y2="70%">
            <stop offset="0%" stopColor="#879BAA" />
            <stop offset="40%" stopColor="#6C8293" />
            <stop offset="100%" stopColor="#546A7A" />
          </linearGradient>

          <linearGradient id="sunBeam" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#EAF0F6" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="woodFloor" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#E2E6EA" />
            <stop offset="35%" stopColor="#D5DAE0" />
            <stop offset="70%" stopColor="#C8CED6" />
            <stop offset="100%" stopColor="#B6BEC8" />
          </linearGradient>

          <linearGradient id="bedFrameWood" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#9E7348" />
            <stop offset="50%" stopColor="#C49B68" />
            <stop offset="100%" stopColor="#8A6038" />
          </linearGradient>

          <linearGradient id="dresserWood" x1="0%" y1="0%" x2="100%" y2="20%">
            <stop offset="0%" stopColor="#A86F3E" />
            <stop offset="60%" stopColor="#BE8550" />
            <stop offset="100%" stopColor="#875327" />
          </linearGradient>

          <linearGradient id="linenDuvet" x1="15%" y1="20%" x2="90%" y2="90%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="25%" stopColor="#F6F1EA" />
            <stop offset="55%" stopColor="#E9DFD3" />
            <stop offset="85%" stopColor="#DBCFC3" />
            <stop offset="100%" stopColor="#C8BCB0" />
          </linearGradient>

          <linearGradient id="pillowWarm1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FAF7F2" />
            <stop offset="100%" stopColor="#DED5C9" />
          </linearGradient>

          <linearGradient id="pillowWarm2" x1="0%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stopColor="#F5ECE4" />
            <stop offset="100%" stopColor="#D5C4B7" />
          </linearGradient>

          <radialGradient id="brassGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFECC7" stopOpacity="0.85" />
            <stop offset="30%" stopColor="#FAD79A" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#FAD79A" stopOpacity="0" />
          </radialGradient>

          <filter id="bedShadow" x="-10%" y="-10%" width="120%" height="130%">
            <feDropShadow dx="0" dy="18" stdDeviation="15" floodColor="#3F3022" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* Back wall with vertical shiplap panelling */}
        <rect x="0" y="0" width="1600" height="600" fill="url(#wallLight)" />
        {Array.from({ length: 40 }).map((_, i) => (
          <line
            key={`shiplap-${i}`}
            x1={i * 42}
            y1="0"
            x2={i * 42}
            y2="600"
            stroke="#73899B"
            strokeWidth="1.2"
            opacity="0.85"
          />
        ))}

        {/* Sunlight beam */}
        <polygon points="0,0 800,0 1200,800 0,800" fill="url(#sunBeam)" opacity="0.75" />

        {/* Floor */}
        <rect x="0" y="520" width="1600" height="280" fill="url(#woodFloor)" />
        {Array.from({ length: 12 }).map((_, i) => (
          <line
            key={`floor-${i}`}
            x1="0"
            y1={520 + i * 24}
            x2="1600"
            y2={520 + i * 24}
            stroke="#634522"
            strokeWidth="0.8"
            opacity="0.5"
          />
        ))}

        {/* Planter */}
        <g id="plantAndBasket">
          <path d="M 90 490 L 170 490 L 155 610 L 105 610 Z" fill="#9C6B38" />
          <path d="M 85 490 L 175 490 L 165 520 L 95 520 Z" fill="#B8854D" />
          <ellipse cx="130" cy="615" rx="35" ry="10" fill="#3D2916" opacity="0.35" />
          <path d="M 130 490 Q 128 340 140 220" stroke="#5C4028" strokeWidth="8" strokeLinecap="round" fill="none" />
          <path d="M 135 380 Q 80 320 60 290" stroke="#5C4028" strokeWidth="5" strokeLinecap="round" fill="none" />
          <path d="M 136 330 Q 180 270 190 240" stroke="#5C4028" strokeWidth="5" strokeLinecap="round" fill="none" />
          <path d="M 60 290 Q 30 250 50 200 Q 90 220 85 275 Z" fill="#2E4A28" />
          <path d="M 80 260 Q 95 180 140 170 Q 150 230 115 250 Z" fill="#3D5F34" />
          <path d="M 138 220 Q 110 130 170 110 Q 200 170 160 210 Z" fill="#4B6F3E" />
          <path d="M 190 240 Q 230 200 240 260 Q 200 280 170 260 Z" fill="#2D4627" />
          <path d="M 135 310 Q 175 320 185 360 Q 140 370 130 330 Z" fill="#36542E" />
          <path d="M 85 360 Q 45 370 40 420 Q 95 410 100 370 Z" fill="#426338" />
        </g>

        {/* Dresser */}
        <g id="dresser" filter="url(#bedShadow)">
          <rect x="220" y="220" width="240" height="340" rx="4" fill="url(#dresserWood)" />
          <path d="M 220 230 Q 270 205 340 205 Q 410 205 460 230 Z" fill="#B57C48" />
          <line x1="230" y1="300" x2="450" y2="300" stroke="#693F1B" strokeWidth="2.5" />
          <line x1="230" y1="370" x2="450" y2="370" stroke="#693F1B" strokeWidth="2.5" />
          <line x1="230" y1="440" x2="450" y2="440" stroke="#693F1B" strokeWidth="2.5" />
          <line x1="230" y1="510" x2="450" y2="510" stroke="#693F1B" strokeWidth="2.5" />
          <circle cx="280" cy="335" r="5" fill="#D4AF37" />
          <circle cx="400" cy="335" r="5" fill="#D4AF37" />
          <circle cx="280" cy="405" r="5" fill="#D4AF37" />
          <circle cx="400" cy="405" r="5" fill="#D4AF37" />
          <circle cx="280" cy="475" r="5" fill="#D4AF37" />
          <circle cx="400" cy="475" r="5" fill="#D4AF37" />
          <polygon points="230,560 245,560 240,595 225,595" fill="#693F1B" />
          <polygon points="435,560 450,560 455,595 440,595" fill="#693F1B" />
        </g>

        {/* Wall Sconces */}
        <g id="sconceLeft">
          <circle cx="700" cy="180" r="90" fill="url(#brassGlow)" />
          <circle cx="700" cy="180" r="14" fill="#8A6E32" />
          <path d="M 700 180 Q 730 190 750 170" stroke="#B38F3F" strokeWidth="4.5" fill="none" />
          <polygon points="735,170 775,150 780,185" fill="#C5A049" />
          <ellipse cx="780" cy="185" rx="8" ry="14" fill="#FFF2C6" />
        </g>

        <g id="sconceRight">
          <circle cx="1320" cy="180" r="90" fill="url(#brassGlow)" />
          <circle cx="1320" cy="180" r="14" fill="#8A6E32" />
          <path d="M 1320 180 Q 1350 190 1370 170" stroke="#B38F3F" strokeWidth="4.5" fill="none" />
          <polygon points="1355,170 1395,150 1400,185" fill="#C5A049" />
          <ellipse cx="1400" cy="185" rx="8" ry="14" fill="#FFF2C6" />
        </g>

        {/* Bed */}
        <g id="bed" filter="url(#bedShadow)">
          <polygon points="460,420 1380,420 1440,640 40,640" fill="url(#bedFrameWood)" />
          <line x1="40" y1="640" x2="1440" y2="640" stroke="#DAB07E" strokeWidth="4" />
          <rect x="520" y="240" width="800" height="190" fill="#C49B68" rx="2" />
          <line x1="520" y1="280" x2="1320" y2="280" stroke="#9E7348" strokeWidth="2" />

          {/* Euro shams */}
          <rect x="560" y="240" width="160" height="150" rx="12" fill="url(#pillowWarm1)" transform="rotate(-4 640 315)" />
          <rect x="720" y="235" width="165" height="155" rx="12" fill="url(#pillowWarm2)" />
          <rect x="890" y="235" width="165" height="155" rx="12" fill="url(#pillowWarm1)" />
          <rect x="1060" y="240" width="160" height="150" rx="12" fill="url(#pillowWarm2)" transform="rotate(4 1140 315)" />

          {/* Sleeping pillows */}
          <rect x="600" y="300" width="180" height="110" rx="16" fill="#FAF6EE" stroke="#E3DCD2" strokeWidth="1.5" />
          <rect x="800" y="300" width="180" height="110" rx="16" fill="#FAF6EE" stroke="#E3DCD2" strokeWidth="1.5" />
          <rect x="1000" y="300" width="180" height="110" rx="16" fill="#FAF6EE" stroke="#E3DCD2" strokeWidth="1.5" />

          {/* Dressed cotton bedsheet and rumpled duvet */}
          <path
            d="M 500 370 
               C 560 365, 760 360, 920 360 
               C 1080 360, 1260 365, 1340 380
               C 1360 440, 1360 520, 1310 590
               C 1200 620, 1050 635, 880 630
               C 660 625, 420 610, 260 570
               C 120 535, 18 510, 10 490
               C 40 450, 120 420, 240 410
               C 340 400, 440 380, 500 370 Z"
            fill="url(#linenDuvet)"
          />
          <path d="M 280 430 Q 380 470 520 440 Q 720 460 900 420" stroke="#B8A999" strokeWidth="3" fill="none" opacity="0.6" />
          <path d="M 160 480 Q 340 530 580 490 Q 820 520 1080 480" stroke="#BAABA0" strokeWidth="4" fill="none" opacity="0.65" />
          <path d="M 40 530 Q 240 590 540 550 Q 820 580 1200 540" stroke="#C5B6A8" strokeWidth="3.5" fill="none" opacity="0.5" />
        </g>
      </svg>
    </div>
  );
};

/* Hero Slide 2: Winter Razai & Velvet Quilt Heritage Room */
export const HeroWinterRazaiVisual: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full h-full overflow-hidden select-none bg-[#2C1E1B] ${className}`}>
      <svg
        viewBox="0 0 1600 800"
        className="w-full h-full object-cover"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="winterWallGrad" x1="0%" y1="0%" x2="100%" y2="80%">
            <stop offset="0%" stopColor="#4A342E" />
            <stop offset="40%" stopColor="#3B2823" />
            <stop offset="100%" stopColor="#251714" />
          </linearGradient>

          <linearGradient id="lampGlowWarm" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFE1A8" stopOpacity="0.55" />
            <stop offset="50%" stopColor="#E59A52" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#251714" stopOpacity="0" />
          </linearGradient>

          <radialGradient id="lampBulb" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFF2D6" stopOpacity="0.95" />
            <stop offset="40%" stopColor="#FFB35A" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#FF8F3D" stopOpacity="0" />
          </radialGradient>

          <linearGradient id="darkTeakWood" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#482E1E" />
            <stop offset="50%" stopColor="#63402A" />
            <stop offset="100%" stopColor="#3A2214" />
          </linearGradient>

          <linearGradient id="razaiVelvetGrad" x1="10%" y1="20%" x2="90%" y2="90%">
            <stop offset="0%" stopColor="#8C2534" />
            <stop offset="30%" stopColor="#6E1825" />
            <stop offset="70%" stopColor="#4E0F19" />
            <stop offset="100%" stopColor="#350810" />
          </linearGradient>

          <linearGradient id="goldZariBorder" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C99738" />
            <stop offset="50%" stopColor="#F7DF94" />
            <stop offset="100%" stopColor="#A87722" />
          </linearGradient>
        </defs>

        {/* Rich dark moody sanctuary wall */}
        <rect x="0" y="0" width="1600" height="600" fill="url(#winterWallGrad)" />
        {/* Wall molding / wainscoting */}
        <rect x="180" y="120" width="1240" height="420" fill="none" stroke="#543B33" strokeWidth="2.5" opacity="0.6" />
        <rect x="220" y="150" width="1160" height="360" fill="none" stroke="#48322B" strokeWidth="1.5" opacity="0.5" />

        {/* Ambient Warm Golden Sconce / Lamp glow on left and right */}
        <circle cx="280" cy="220" r="280" fill="url(#lampGlowWarm)" />
        <circle cx="1320" cy="220" r="280" fill="url(#lampGlowWarm)" />

        {/* Dark polished walnut floor */}
        <rect x="0" y="540" width="1600" height="260" fill="#2E1D13" />
        {/* Intricate warm oriental runner rug under bed */}
        <polygon points="120,680 1480,680 1560,780 40,780" fill="#5E2322" stroke="#A88242" strokeWidth="4" />
        <line x1="180" y1="730" x2="1420" y2="730" stroke="#D1AC62" strokeWidth="3" strokeDasharray="12 6" />

        {/* Carved Teakwood Bed Frame with Headboard */}
        <g id="carvedBed">
          <rect x="360" y="200" width="880" height="240" rx="6" fill="url(#darkTeakWood)" />
          {/* Headboard ornate carved panel lines */}
          <rect x="400" y="230" width="800" height="180" rx="4" fill="#3D2517" stroke="#66442D" strokeWidth="2" />
          {/* Symmetrical headboard carvings */}
          {[480, 640, 800, 960, 1120].map((cx) => (
            <circle key={`arch-${cx}`} cx={cx} cy={300} r="25" fill="none" stroke="#7A5237" strokeWidth="2.5" />
          ))}

          {/* Pillow stacks: Velvet maroon & golden ivory */}
          <rect x="420" y="240" width="170" height="150" rx="14" fill="#591621" transform="rotate(-3 505 315)" />
          <rect x="610" y="235" width="175" height="155" rx="14" fill="#E6D3B8" />
          <rect x="815" y="235" width="175" height="155" rx="14" fill="#591621" />
          <rect x="1010" y="240" width="170" height="150" rx="14" fill="#E6D3B8" transform="rotate(3 1095 315)" />

          {/* Golden cylindrical bolster pillow */}
          <rect x="650" y="340" width="300" height="60" rx="30" fill="#D6A856" stroke="#9E7631" strokeWidth="2" />

          {/* Heavy Layered Punjabi Velvet Razai (Quilt) with Gold Zari borders */}
          <path
            d="M 320 380 
               C 420 370, 780 365, 1000 365 
               C 1220 365, 1340 375, 1400 395
               C 1420 460, 1400 560, 1340 630
               C 1220 660, 1040 670, 850 665
               C 620 660, 380 645, 220 600
               C 140 560, 100 510, 120 480
               C 160 430, 240 400, 320 380 Z"
            fill="url(#razaiVelvetGrad)"
          />

          {/* Gold zari embroidery border ribbon on Razai */}
          <path
            d="M 335 410 Q 800 395 1375 420"
            stroke="url(#goldZariBorder)"
            strokeWidth="8"
            fill="none"
          />

          {/* Traditional hand-quilted Tagai rosettes on Razai */}
          {Array.from({ length: 4 }).map((_, row) =>
            Array.from({ length: 9 }).map((_, col) => {
              const x = 320 + col * 120 + (row % 2) * 50;
              const y = 440 + row * 45;
              return (
                <g key={`razai-tagai-${row}-${col}`}>
                  <circle cx={x} cy={y} r="3" fill="#FCE5A4" />
                  <circle cx={x} cy={y} r="6" fill="none" stroke="#DCAE58" strokeWidth="1" opacity="0.7" />
                </g>
              );
            })
          )}

          {/* Folded soft ivory pashmina throw draped across foot of bed */}
          <path
            d="M 280 570 Q 800 620 1320 580 L 1340 640 Q 800 680 260 630 Z"
            fill="#EADCC7"
            stroke="#C4B49D"
            strokeWidth="1.5"
          />
        </g>

        {/* Brass floor reading lamp on left */}
        <g id="floorLamp">
          <line x1="180" y1="200" x2="180" y2="620" stroke="#D1AC62" strokeWidth="5" />
          <ellipse cx="180" cy="620" rx="35" ry="10" fill="#9C7734" />
          {/* Conical shade */}
          <polygon points="140,200 220,200 240,240 120,240" fill="#E8D5B0" />
          <ellipse cx="180" cy="240" rx="60" ry="15" fill="#FFE29E" opacity="0.8" />
          <circle cx="180" cy="240" r="120" fill="url(#lampBulb)" />
        </g>
      </svg>
    </div>
  );
};

/* Hero Slide 3: Curtains & Daylight Living Room Sanctuary */
export const HeroCurtainsVisual: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full h-full overflow-hidden select-none bg-[#EAE8E2] ${className}`}>
      <svg
        viewBox="0 0 1600 800"
        className="w-full h-full object-cover"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="palaceSunlight" x1="10%" y1="0%" x2="90%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="50%" stopColor="#F9F7F2" />
            <stop offset="100%" stopColor="#E2DDD2" />
          </linearGradient>

          <linearGradient id="emeraldCurtain" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#223B28" />
            <stop offset="25%" stopColor="#345B3E" />
            <stop offset="50%" stopColor="#1E3323" />
            <stop offset="75%" stopColor="#32573B" />
            <stop offset="100%" stopColor="#1B2D1F" />
          </linearGradient>

          <linearGradient id="sheerCurtain" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#F0EBE1" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.85" />
          </linearGradient>

          <linearGradient id="lightRayBeam" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFEEB" stopOpacity="0.5" />
            <stop offset="60%" stopColor="#FFF2CE" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="marbleTiles" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#DFD8CB" />
            <stop offset="100%" stopColor="#BEB5A5" />
          </linearGradient>
        </defs>

        {/* High architectural ceiling walls */}
        <rect x="0" y="0" width="1600" height="540" fill="url(#palaceSunlight)" />

        {/* 3 Large arched sunlit windows in background */}
        {[300, 800, 1300].map((wx) => (
          <g key={`win-${wx}`}>
            {/* Window frame */}
            <path
              d={`M ${wx - 160} 540 L ${wx - 160} 140 Q ${wx} 60 ${wx + 160} 140 L ${wx + 160} 540 Z`}
              fill="#F5F9FA"
              stroke="#D6CEC2"
              strokeWidth="6"
            />
            {/* Window panes */}
            <line x1={wx} y1="100" x2={wx} y2="540" stroke="#D6CEC2" strokeWidth="4" />
            <line x1={wx - 160} y1="260" x2={wx + 160} y2="260" stroke="#D6CEC2" strokeWidth="4" />
            <line x1={wx - 160} y1="400" x2={wx + 160} y2="400" stroke="#D6CEC2" strokeWidth="4" />
          </g>
        ))}

        {/* Streaming natural sunlight ray */}
        <polygon points="140,0 800,0 1200,800 200,800" fill="url(#lightRayBeam)" />

        {/* Floor */}
        <rect x="0" y="540" width="1600" height="260" fill="url(#marbleTiles)" />
        <line x1="0" y1="620" x2="1600" y2="620" stroke="#A89E8C" strokeWidth="1.5" />
        <line x1="0" y1="710" x2="1600" y2="710" stroke="#A89E8C" strokeWidth="1.5" />

        {/* Grand Brass Curtain Rod across ceiling */}
        <rect x="60" y="70" width="1480" height="14" rx="4" fill="#C79F48" stroke="#9E7C30" strokeWidth="2" />
        <circle cx="55" cy="77" r="14" fill="#A88232" />
        <circle cx="1545" cy="77" r="14" fill="#A88232" />

        {/* Floor-to-ceiling heavy emerald & sand thermal curtains with deep pleats */}
        {/* Far Left Drapes */}
        <path
          d="M 60 84 Q 160 95 240 84 L 270 580 Q 160 590 50 580 Z"
          fill="url(#emeraldCurtain)"
        />
        {/* Pleat shading lines */}
        <line x1="100" y1="84" x2="105" y2="580" stroke="#132317" strokeWidth="3" opacity="0.6" />
        <line x1="150" y1="84" x2="160" y2="580" stroke="#132317" strokeWidth="3" opacity="0.6" />
        <line x1="200" y1="84" x2="215" y2="580" stroke="#132317" strokeWidth="3" opacity="0.6" />

        {/* Center Sheer Linen curtains softly diffusing light */}
        <rect x="420" y="84" width="220" height="490" fill="url(#sheerCurtain)" />
        <rect x="940" y="84" width="220" height="490" fill="url(#sheerCurtain)" />

        {/* Far Right Drapes */}
        <path
          d="M 1360 84 Q 1460 95 1540 84 L 1550 580 Q 1460 590 1330 580 Z"
          fill="url(#emeraldCurtain)"
        />
        <line x1="1400" y1="84" x2="1390" y2="580" stroke="#132317" strokeWidth="3" opacity="0.6" />
        <line x1="1450" y1="84" x2="1445" y2="580" stroke="#132317" strokeWidth="3" opacity="0.6" />
        <line x1="1500" y1="84" x2="1495" y2="580" stroke="#132317" strokeWidth="3" opacity="0.6" />

        {/* Crisp Hotel Sateen Bed in foreground */}
        <g id="sateenBedForeground">
          <rect x="440" y="380" width="720" height="260" rx="8" fill="#FBFBF9" stroke="#E0DCD3" strokeWidth="2" />
          {/* Subtle sateen stripe weave texture */}
          {Array.from({ length: 18 }).map((_, i) => (
            <line
              key={`stripe-${i}`}
              x1={460 + i * 38}
              y1="410"
              x2={460 + i * 38}
              y2="630"
              stroke="#ECE8DC"
              strokeWidth="16"
              opacity="0.4"
            />
          ))}

          {/* Hotel sleeping pillows */}
          <rect x="480" y="320" width="200" height="110" rx="14" fill="#FFFFFF" stroke="#DEDAD1" strokeWidth="1.5" />
          <rect x="700" y="315" width="200" height="115" rx="14" fill="#FFFFFF" stroke="#DEDAD1" strokeWidth="1.5" />
          <rect x="920" y="320" width="200" height="110" rx="14" fill="#FFFFFF" stroke="#DEDAD1" strokeWidth="1.5" />

          {/* Draped waffle blanket folded at foot */}
          <rect x="420" y="550" width="760" height="70" rx="6" fill="#D6CBBF" />
        </g>
      </svg>
    </div>
  );
};

/* Winter Razai and Comforters Feature Banner Visual */
export const WinterSpecialBannerVisual: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full h-full overflow-hidden select-none bg-[#382622] ${className}`}>
      <svg
        viewBox="0 0 900 600"
        className="w-full h-full object-cover"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="winterWarm" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4A2F2B" />
            <stop offset="50%" stopColor="#35211E" />
            <stop offset="100%" stopColor="#241614" />
          </linearGradient>

          <linearGradient id="razaiVelvet" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7E2430" />
            <stop offset="50%" stopColor="#5D151F" />
            <stop offset="100%" stopColor="#3C0B12" />
          </linearGradient>

          <linearGradient id="goldBraid" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D4AF37" />
            <stop offset="50%" stopColor="#F3E5AB" />
            <stop offset="100%" stopColor="#AA820A" />
          </linearGradient>
        </defs>

        <rect x="0" y="0" width="900" height="600" fill="url(#winterWarm)" />

        {/* Ambient warm lamp light from right */}
        <circle cx="850" cy="150" r="350" fill="#FFC98A" opacity="0.18" />

        {/* Hand-quilted traditional Punjabi Razai display */}
        <g id="foldedRazaiStack" transform="translate(100, 60)">
          {/* Bottom comforter base */}
          <rect x="40" y="320" width="560" height="120" rx="16" fill="#4B3A36" stroke="#5E4B46" strokeWidth="2" />
          {/* Middle plush comforter */}
          <rect x="60" y="230" width="520" height="110" rx="16" fill="#D1C3B2" stroke="#B8A895" strokeWidth="2" />
          {/* Top traditional velvet bridal razai */}
          <rect x="80" y="140" width="480" height="110" rx="18" fill="url(#razaiVelvet)" />
          {/* Golden brocade border */}
          <rect x="90" y="150" width="460" height="90" rx="14" fill="none" stroke="url(#goldBraid)" strokeWidth="6" />

          {/* Traditional Tagai (Hand-quilting floral rosettes) */}
          {Array.from({ length: 4 }).map((_, r) =>
            Array.from({ length: 6 }).map((_, c) => (
              <g key={`tagai-${r}-${c}`}>
                <circle cx={140 + c * 70} cy={175 + r * 15} r="3" fill="#D4AF37" />
                <path
                  d={`M ${135 + c * 70} ${175 + r * 15} Q ${140 + c * 70} ${170 + r * 15} ${145 + c * 70} ${175 + r * 15}`}
                  stroke="#FFDF85"
                  strokeWidth="1.5"
                  fill="none"
                />
              </g>
            ))
          )}

          {/* Sleeping bag rolled neatly beside */}
          <g transform="translate(560, 220)">
            <rect x="0" y="0" width="140" height="200" rx="40" fill="#2E3C2B" stroke="#41543D" strokeWidth="3" />
            <line x1="20" y1="40" x2="120" y2="40" stroke="#5C7557" strokeWidth="8" strokeLinecap="round" />
            <line x1="20" y1="100" x2="120" y2="100" stroke="#5C7557" strokeWidth="8" strokeLinecap="round" />
            <line x1="20" y1="160" x2="120" y2="160" stroke="#5C7557" strokeWidth="8" strokeLinecap="round" />
          </g>
        </g>
      </svg>
    </div>
  );
};

/* Product Vector Render for all 11 Categories */
export const ProductItemVisual: React.FC<{
  type: ProductItem['renderType'];
  colorHex?: string;
  className?: string;
}> = ({ type, colorHex = '#E8E5DF', className = '' }) => {
  return (
    <div className={`relative w-full h-full flex items-center justify-center bg-[#FBFBFA] overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 400 320"
        className="w-full h-full object-contain p-4 transition-transform duration-500 ease-out hover:scale-105"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="pShadow" x="-10%" y="-10%" width="120%" height="130%">
            <feDropShadow dx="0" dy="12" stdDeviation="10" floodColor="#2B2824" floodOpacity="0.14" />
          </filter>
        </defs>

        <ellipse cx="200" cy="275" rx="140" ry="24" fill="#3D372F" opacity="0.12" />

        {/* 1. BEDSHEETS & MATTRESS */}
        {(type === 'bedsheet' || type === 'mattress') && (
          <g filter="url(#pShadow)">
            <rect x="75" y="180" width="250" height="65" rx="10" fill={colorHex} stroke="#96928C" strokeWidth="1" />
            <rect x="85" y="135" width="230" height="55" rx="9" fill={colorHex} stroke="#AAA6A0" strokeWidth="1" />
            {/* Matching printed pillowcases */}
            <rect x="100" y="90" width="95" height="50" rx="8" fill={colorHex} stroke="#BDB9B2" strokeWidth="1" />
            <rect x="205" y="90" width="95" height="50" rx="8" fill={colorHex} stroke="#BDB9B2" strokeWidth="1" />
            {/* Elegant stitching borders */}
            <line x1="85" y1="160" x2="315" y2="160" stroke="#FFFFFF" strokeWidth="2" opacity="0.7" />
            <line x1="100" y1="115" x2="195" y2="115" stroke="#FFFFFF" strokeWidth="2" opacity="0.7" />
            <line x1="205" y1="115" x2="300" y2="115" stroke="#FFFFFF" strokeWidth="2" opacity="0.7" />
          </g>
        )}

        {/* 2. COMFORTERS */}
        {type === 'comforter' && (
          <g filter="url(#pShadow)">
            <rect x="70" y="170" width="260" height="70" rx="16" fill={colorHex} stroke="#9C9993" strokeWidth="1" />
            <rect x="80" y="105" width="240" height="75" rx="16" fill={colorHex} stroke="#B0ACA4" strokeWidth="1" />
            {/* Box quilt stitching grid */}
            {Array.from({ length: 3 }).map((_, r) =>
              Array.from({ length: 4 }).map((_, c) => (
                <rect
                  key={`box-${r}-${c}`}
                  x={95 + c * 55}
                  y={118 + r * 18}
                  width="45"
                  height="14"
                  rx="4"
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth="1.5"
                  opacity="0.6"
                />
              ))
            )}
            <line x1="70" y1="205" x2="330" y2="205" stroke="#6E6A63" strokeWidth="1.5" strokeDasharray="3 3" />
          </g>
        )}

        {/* 3. CURTAINS */}
        {type === 'curtains' && (
          <g filter="url(#pShadow)">
            {/* Curtain rod */}
            <rect x="60" y="60" width="280" height="10" rx="4" fill="#3D372F" />
            <circle cx="55" cy="65" r="8" fill="#5C5346" />
            <circle cx="345" cy="65" r="8" fill="#5C5346" />
            {/* Eyelet rings */}
            {[90, 130, 170, 230, 270, 310].map((rx) => (
              <circle key={rx} cx={rx} cy={65} r="7" fill="none" stroke="#D1C3A5" strokeWidth="3" />
            ))}
            {/* Left curtain drape folds */}
            <path
              d="M 80 75 Q 100 85 120 75 Q 140 85 160 75 L 165 250 Q 140 240 120 250 Q 100 240 75 250 Z"
              fill={colorHex}
              stroke="#6B6256"
              strokeWidth="1.5"
            />
            {/* Right curtain drape folds */}
            <path
              d="M 240 75 Q 260 85 280 75 Q 300 85 320 75 L 325 250 Q 300 240 280 250 Q 260 240 235 250 Z"
              fill={colorHex}
              stroke="#6B6256"
              strokeWidth="1.5"
            />
            {/* Vertical shade pleats */}
            <line x1="120" y1="75" x2="120" y2="250" stroke="#3D372F" strokeWidth="1.5" opacity="0.3" />
            <line x1="280" y1="75" x2="280" y2="250" stroke="#3D372F" strokeWidth="1.5" opacity="0.3" />
          </g>
        )}

        {/* 4. PILLOWS */}
        {type === 'pillows' && (
          <g filter="url(#pShadow)">
            {/* Back resting pillow */}
            <rect x="100" y="80" width="200" height="110" rx="28" fill="#ECE8DF" stroke="#C4BEB1" strokeWidth="1.5" transform="rotate(-6 200 135)" />
            {/* Front plump sleeping pillow */}
            <rect x="90" y="130" width="220" height="115" rx="30" fill={colorHex} stroke="#BAB3A4" strokeWidth="1.5" />
            {/* Center crown softness contour */}
            <path d="M 130 180 Q 200 160 270 180" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" opacity="0.8" />
            <path d="M 140 190 Q 200 175 260 190" stroke="#A89F8F" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
          </g>
        )}

        {/* 4B. PILLOW COVERS (PAIR) */}
        {type === 'pillowcovers' && (
          <g filter="url(#pShadow)">
            {/* Bottom folded pillowcase */}
            <rect x="80" y="145" width="240" height="100" rx="10" fill={colorHex} stroke="#8C8880" strokeWidth="1.2" transform="rotate(-3 200 195)" />
            <line x1="95" y1="180" x2="305" y2="175" stroke="#FFFFFF" strokeWidth="2" opacity="0.6" />
            {/* Top folded pillowcase */}
            <rect x="85" y="95" width="230" height="105" rx="10" fill={colorHex} stroke="#9C978E" strokeWidth="1.2" />
            {/* Envelope flap stitch detail */}
            <path d="M 85 140 Q 200 155 315 140" stroke="#5E5A53" strokeWidth="2" strokeDasharray="4 2" fill="none" />
            <rect x="100" y="105" width="200" height="85" rx="6" fill="none" stroke="#FFFFFF" strokeWidth="1.8" opacity="0.75" />
            {/* Refined tailored border hem */}
            <line x1="100" y1="165" x2="300" y2="165" stroke="#48453F" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
          </g>
        )}

        {/* 5. RAZAI (PUNJABI TRADITIONAL QUILT) */}
        {type === 'razai' && (
          <g filter="url(#pShadow)">
            <rect x="70" y="160" width="260" height="85" rx="14" fill={colorHex} stroke="#7D232E" strokeWidth="1.5" />
            <rect x="85" y="100" width="230" height="75" rx="14" fill={colorHex} stroke="#7D232E" strokeWidth="1.5" />
            {/* Traditional Gold lace/Zari border */}
            <rect x="95" y="108" width="210" height="60" rx="10" fill="none" stroke="#D4AF37" strokeWidth="4" />
            {/* Traditional Tagai quilting dots */}
            {[125, 165, 205, 245, 285].map((x) => (
              <g key={x}>
                <circle cx={x} cy={138} r="3" fill="#FFE28A" />
                <circle cx={x} cy={200} r="3" fill="#FFE28A" />
              </g>
            ))}
          </g>
        )}

        {/* 6. RAZAI COVERS */}
        {type === 'razaicover' && (
          <g filter="url(#pShadow)">
            <rect x="75" y="130" width="250" height="110" rx="10" fill={colorHex} stroke="#877E71" strokeWidth="1.2" />
            {/* Visible corner zipper / border ribbon */}
            <line x1="75" y1="185" x2="325" y2="185" stroke="#4A4337" strokeWidth="3" strokeDasharray="5 3" />
            <rect x="85" y="140" width="230" height="90" rx="6" fill="none" stroke="#FFFFFF" strokeWidth="2" opacity="0.7" />
            {/* Corner tie ribbons */}
            <path d="M 75 130 L 60 120" stroke="#877E71" strokeWidth="3" strokeLinecap="round" />
            <path d="M 325 130 L 340 120" stroke="#877E71" strokeWidth="3" strokeLinecap="round" />
          </g>
        )}

        {/* 7. SLEEPING BAGS */}
        {type === 'sleepingbag' && (
          <g filter="url(#pShadow)">
            {/* Hood contour */}
            <path d="M 120 120 Q 200 60 280 120 L 270 240 Q 200 260 130 240 Z" fill={colorHex} stroke="#384232" strokeWidth="1.5" />
            {/* Head cushion */}
            <ellipse cx="200" cy="115" rx="55" ry="25" fill="#1C2119" opacity="0.6" />
            {/* Heavy-duty side zipper */}
            <path d="M 130 130 L 138 238" stroke="#D18738" strokeWidth="4" strokeDasharray="6 3" />
            {/* Compression straps */}
            <line x1="130" y1="165" x2="270" y2="165" stroke="#FFFFFF" strokeWidth="2.5" opacity="0.6" />
            <line x1="132" y1="205" x2="268" y2="205" stroke="#FFFFFF" strokeWidth="2.5" opacity="0.6" />
          </g>
        )}

        {/* 8. MOSQUITO NETS (MACHHAR DANI) */}
        {type === 'mosquitonet' && (
          <g filter="url(#pShadow)">
            {/* Pop-up dome arches */}
            <path d="M 70 230 Q 200 70 330 230" fill="none" stroke="#688FA8" strokeWidth="4" />
            <path d="M 110 230 Q 200 90 290 230" fill="none" stroke="#688FA8" strokeWidth="3" />
            {/* Fine transparent micro-mesh filling */}
            <path d="M 70 230 Q 200 70 330 230 Z" fill={colorHex} opacity="0.6" />
            {/* Zipper door curve */}
            <path d="M 140 230 Q 150 140 200 140 Q 250 140 260 230" fill="none" stroke="#D45B5B" strokeWidth="2.5" strokeDasharray="4 2" />
            <rect x="70" y="225" width="260" height="15" rx="3" fill="#3D5A6E" />
          </g>
        )}

        {/* 9. TOWELS */}
        {type === 'towels' && (
          <g filter="url(#pShadow)">
            <rect x="80" y="180" width="240" height="60" rx="12" fill={colorHex} stroke="#99A2A3" strokeWidth="1" />
            <rect x="95" y="130" width="210" height="55" rx="10" fill={colorHex} stroke="#B1BABA" strokeWidth="1" />
            <rect x="115" y="90" width="170" height="45" rx="8" fill={colorHex} stroke="#CBD3D4" strokeWidth="1" />
            <line x1="85" y1="210" x2="315" y2="210" stroke="#FFFFFF" strokeWidth="3" opacity="0.6" />
            <line x1="100" y1="155" x2="300" y2="155" stroke="#FFFFFF" strokeWidth="3" opacity="0.6" />
          </g>
        )}

        {/* 10. APRONS */}
        {type === 'aprons' && (
          <g filter="url(#pShadow)">
            {/* Neck loop */}
            <path d="M 160 80 Q 200 40 240 80" stroke="#4A453C" strokeWidth="5" fill="none" />
            {/* Bib & body */}
            <path
              d="M 155 80 L 245 80 L 245 130 L 285 170 L 275 255 L 125 255 L 115 170 L 155 130 Z"
              fill={colorHex}
              stroke="#3D372E"
              strokeWidth="2"
            />
            {/* Kangaroo pocket with double stitch */}
            <rect x="160" y="170" width="80" height="60" rx="6" fill="#F4EDE2" stroke="#4A453C" strokeWidth="1.5" />
            <line x1="160" y1="190" x2="240" y2="190" stroke="#4A453C" strokeWidth="1" strokeDasharray="3 3" />
            {/* Waist ties */}
            <line x1="115" y1="170" x2="70" y2="190" stroke="#4A453C" strokeWidth="4" />
            <line x1="285" y1="170" x2="330" y2="190" stroke="#4A453C" strokeWidth="4" />
          </g>
        )}

        {/* 11. SOCKS */}
        {type === 'socks' && (
          <g filter="url(#pShadow)">
            {/* Left sock */}
            <g transform="translate(130, 80) rotate(-10)">
              <path
                d="M 20 20 L 60 20 L 60 90 Q 75 110 95 120 Q 80 145 55 135 L 20 90 Z"
                fill={colorHex}
                stroke="#474136"
                strokeWidth="2"
              />
              <line x1="20" y1="35" x2="60" y2="35" stroke="#FFFFFF" strokeWidth="4" opacity="0.7" />
              <line x1="20" y1="45" x2="60" y2="45" stroke="#FFFFFF" strokeWidth="4" opacity="0.7" />
            </g>
            {/* Right sock */}
            <g transform="translate(190, 80) rotate(15)">
              <path
                d="M 20 20 L 60 20 L 60 90 Q 75 110 95 120 Q 80 145 55 135 L 20 90 Z"
                fill={colorHex}
                stroke="#474136"
                strokeWidth="2"
              />
              <line x1="20" y1="35" x2="60" y2="35" stroke="#FFFFFF" strokeWidth="4" opacity="0.7" />
              <line x1="20" y1="45" x2="60" y2="45" stroke="#FFFFFF" strokeWidth="4" opacity="0.7" />
            </g>
          </g>
        )}
      </svg>
    </div>
  );
};
