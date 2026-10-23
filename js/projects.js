/* Project data shared by index.html (EN) and index-es.html (ES).
   Order here = order in the "All" view. Images live in assets/images/work/. */
window.PROJECTS = [
  {
    slug: "bcm-studio", cat: "web", year: 2026, img: "bcm", stack: ["claude"],
    title: "Benitez Cruz Mazzochi",
    role: { en: "Co-founder, design & development", es: "Cofundador, diseño y desarrollo" },
    desc: {
      en: "The studio I run with my partner Agustina. Together we design and build websites, brand identities and brand refreshes for companies in finance, health, marketing and more.",
      es: "El estudio que armé con mi novia, Agustina. Juntos diseñamos y desarrollamos sitios web, identidades de marca y refreshes de marca para empresas de finanzas, salud, marketing y más."
    },
    tags: { en: ["Studio", "Branding", "Web Design"], es: ["Estudio", "Branding", "Diseño Web"] },
    links: [{ label: { en: "Open website", es: "Abrir sitio" }, url: "https://bcm-portfolio.vercel.app/" }]
  },
  {
    slug: "go-smartex", cat: "web", year: 2026, img: "go-smartex", stack: ["claude"], gs: true,
    title: "Go Smartex",
    role: { en: "Lead Designer", es: "Lead Designer" },
    desc: {
      en: "Built a modular system with Claude Code where every section adapts to content needs rather than forcing content into rigid templates. The challenge was communicating complex IoT and smart textile solutions to both B2B clients and end consumers without losing clarity.",
      es: "Construí un sistema modular con Claude Code donde cada sección se adapta a las necesidades del contenido en lugar de forzarlo dentro de plantillas rígidas. El desafío fue comunicar soluciones complejas de IoT y textiles inteligentes tanto a clientes B2B como a consumidores finales sin perder claridad."
    },
    tags: { en: ["Modular Design", "B2B"], es: ["Diseño Modular", "B2B"] },
    links: [{ label: { en: "Open website", es: "Abrir sitio" }, url: "https://gosmartex.com/" }]
  },
  {
    slug: "jj-capinvest", cat: "web", year: 2026, img: "jj-capinvest", stack: ["claude"], gs: true,
    title: "JJ Capinvest",
    role: { en: "Web Development", es: "Desarrollo Web" },
    desc: {
      en: "Website for an investment firm, built to present its role as investor, operator and connector with a sober, confident tone.",
      es: "Sitio web para una firma de inversión, pensado para presentar su rol de inversor, operador y conector con un tono sobrio y seguro."
    },
    tags: { en: ["Financial Services"], es: ["Servicios Financieros"] },
    links: [{ label: { en: "Open website", es: "Abrir sitio" }, url: "https://jjcapinvest.com/" }]
  },
  {
    slug: "888-capinvest", cat: "web", year: 2026, img: "888ci", stack: ["claude"], gs: true,
    title: "888 Capinvest",
    role: { en: "Web Design Proposal", es: "Propuesta de Diseño Web" },
    desc: {
      en: "Redesign proposal for a venture capital and growth equity firm, with bilingual pages for the firm, its portfolio and its team.",
      es: "Propuesta de rediseño para una firma de capital de riesgo y growth equity, con páginas bilingües para la firma, su portfolio y su equipo."
    },
    tags: { en: ["Venture Capital"], es: ["Capital de Riesgo"] },
    links: [{ label: { en: "View proposal", es: "Ver propuesta" }, url: { en: "proposals/888ci/en/index.html", es: "proposals/888ci/es/index.html" } }]
  },
  {
    slug: "proposolve", cat: "web", year: 2026, img: "proposolve", stack: ["claude"], gs: true,
    title: "Proposolve",
    role: { en: "Web Development", es: "Desarrollo Web" },
    desc: {
      en: "Website for a proposal software product, designed to explain the product clearly and move visitors toward a demo.",
      es: "Sitio web para un software de propuestas, diseñado para explicar el producto con claridad y llevar a los visitantes a pedir una demo."
    },
    tags: { en: ["SaaS"], es: ["SaaS"] },
    links: [{ label: { en: "Open website", es: "Abrir sitio" }, url: "https://www.proposolve.com/" }]
  },
  {
    slug: "stand-tick", cat: "ux", year: 2022, img: "stand-tick", stack: ["figma"],
    title: "Stand Tick",
    role: { en: "UX/UI Designer", es: "Diseñador UX/UI" },
    desc: {
      en: "A conceptual ticket resale app prototyped with Julian. From brand conception and logo design onward, we focused on an intuitive interface that simplifies event discovery, facilitates secure transactions and ensures user peace of mind. A benefits-based points system complements the experience, incentivizing loyalty.",
      es: "En colaboración con Julián, prototipé Stand Tick, una aplicación de reventa de entradas que prioriza la usabilidad. Desde la creación de la marca y el logo hasta el diseño de la interfaz, nos enfocamos en una navegación intuitiva, transacciones seguras y un programa de puntos con beneficios que incentiva la fidelidad."
    },
    tags: { en: ["Brand Design", "App Prototype"], es: ["Diseño de Marca", "Prototipo App"] },
    links: [
      { label: { en: "Open prototype", es: "Abrir prototipo" }, url: "https://www.figma.com/proto/QtxSgWtSAWvBYqCoudYtMy/Stand-Tick?page-id=0%3A1&node-id=550-82&starting-point-node-id=550%3A82&t=1y3IvOZ3hvk0uc50-1" },
      { label: { en: "Project folder", es: "Carpeta del proyecto" }, url: "https://drive.google.com/file/d/1YdRUotMycBpCSQGjZIDiBEQrmxRkZI-C/view?usp=sharing" }
    ]
  },
  {
    slug: "bta", cat: "web", year: 2026, img: "bta", stack: ["claude"], gs: true,
    title: "BTA",
    role: { en: "Web Development", es: "Desarrollo Web" },
    desc: {
      en: "Website design for a cybersecurity and technology services company, focused on a clear and confident digital presence.",
      es: "Diseño web para una empresa de ciberseguridad y servicios tecnológicos, con foco en una presencia digital clara y segura."
    },
    tags: { en: ["B2B"], es: ["B2B"] },
    links: [{ label: { en: "Open website", es: "Abrir sitio" }, url: "https://gobta.com" }]
  },
  {
    slug: "marketing-mob", cat: "web", year: 2026, img: "marketing-mob", stack: ["claude"], gs: true,
    title: "Marketing Mob",
    role: { en: "Web Designer", es: "Diseñador Web" },
    desc: {
      en: "Focused on polishing the UX through details. Redesigned key components like the header and footer, and created custom graphic assets to give the site more personality, always keeping navigation fluid and engaging.",
      es: "Me enfoqué en pulir la experiencia a través de los detalles. Rediseñé elementos clave como el header y el footer, además de crear recursos gráficos que le dieron más personalidad al sitio, siempre buscando que la navegación sea fluida y visualmente atractiva."
    },
    tags: { en: ["Service Design"], es: ["Diseño de Servicio"] },
    links: [{ label: { en: "Open website", es: "Abrir sitio" }, url: "https://marketing-mob.com/" }]
  },
  {
    slug: "eset", cat: "brand", year: 2023, img: "eset", stack: [],
    title: "ESET",
    role: { en: "Graphic Designer", es: "Diseñador Gráfico" },
    desc: {
      en: "At ESET, I designed e-commerce pages, landing pages and optimized UX for online sales and marketing. Created high-impact visuals for Mercado Libre and Google Ads, and developed HTML email campaigns. Collaborated with marketing, sales and content teams on product launches and promotions.",
      es: "En ESET diseñé y optimicé páginas de comercio electrónico y landings para impulsar las ventas y el marketing online. Creé contenido visual de alto impacto para Mercado Libre y Google Ads, y desarrollé campañas de email marketing en HTML. Colaboré con los equipos de marketing, ventas y contenido en lanzamientos de productos y promociones."
    },
    tags: { en: ["Photoshop", "Illustrator", "HTML Email", "Mercado Libre & Google Ads"], es: ["Photoshop", "Illustrator", "Email en HTML", "Mercado Libre y Google Ads"] },
    links: [{ label: { en: "View work", es: "Ver trabajos" }, url: "https://drive.google.com/drive/folders/1IBHA5SVcKjo_-TiWTB4WQ1IK5tZ1z-vx?usp=sharing" }]
  },
  {
    slug: "onesource-peo", cat: "web", year: 2026, img: "onesource", stack: ["wordpress"], gs: true,
    title: "OneSource PEO",
    role: { en: "Web Development", es: "Desarrollo Web" },
    desc: {
      en: "A clear, service-led web experience for a professional employer organization, designed to make complex HR solutions approachable.",
      es: "Una experiencia web clara y orientada a servicios para una organización profesional de empleadores, haciendo accesibles soluciones complejas de RR. HH."
    },
    tags: { en: ["Professional Services"], es: ["Servicios Profesionales"] },
    links: [{ label: { en: "Open website", es: "Abrir sitio" }, url: "https://onesourcepeo.com" }]
  },
  {
    slug: "prana-wealth", cat: "web", year: 2026, img: "prana", stack: ["wordpress", "claude-chrome"], gs: true,
    title: "Prana Wealth Management",
    role: { en: "Web Development", es: "Desarrollo Web" },
    desc: {
      en: "A refined digital experience for a wealth management firm, balancing warmth, clarity and trust.",
      es: "Una experiencia digital refinada para una firma de gestión patrimonial, equilibrando calidez, claridad y confianza."
    },
    tags: { en: ["Financial Services"], es: ["Servicios Financieros"] },
    links: [{ label: { en: "Open website", es: "Abrir sitio" }, url: "https://www.pranawealth.com" }]
  },
  {
    slug: "tribu-mkt", cat: "web", year: 2025, img: "tribu", stack: ["wordpress"], gs: true,
    title: "Tribu MKT",
    role: { en: "Web Designer", es: "Diseñador Web" },
    desc: {
      en: "Helped grow Tribu Marketing's web presence by designing entire modular sections and visual elements. Built structures that adapted to their dynamic style, making the content pop and connect better with their community.",
      es: "Ayudé a que la web de Tribu Marketing crezca, diseñando secciones enteras y elementos visuales con mucha onda. Armé estructuras modulares que se adaptaran a su estilo dinámico, haciendo que el contenido resalte y conecte mejor con su comunidad."
    },
    tags: { en: ["Content Strategy"], es: ["Estrategia de Contenido"] },
    links: [{ label: { en: "Open website", es: "Abrir sitio" }, url: "https://tribu-mkt.com/" }]
  },
  {
    slug: "hrlogics", cat: "web", year: 2025, img: "hrlogics", stack: ["hubspot"], gs: true,
    title: "HRlogics",
    role: { en: "UX/UI Designer", es: "Diseñador UX/UI" },
    desc: {
      en: "Gave HRlogics a fresh digital face during their rebranding. Simplified complex HR services into a clean, friendly, easy-to-navigate interface, making the technical feel professional yet accessible.",
      es: "Le di una nueva cara digital a HRlogics durante su rebranding. Bajé a tierra la complejidad de sus servicios de RR. HH. y los convertí en una interfaz amigable, limpia y fácil de navegar, logrando que lo técnico se sienta profesional pero cercano."
    },
    tags: { en: ["UX Strategy", "SaaS"], es: ["Estrategia UX", "SaaS"] },
    links: [{ label: { en: "Open website", es: "Abrir sitio" }, url: "https://hrlogics.com/" }]
  },
  {
    slug: "heritage-health", cat: "web", year: 2025, img: "heritage", stack: ["wordpress"], gs: true,
    title: "Heritage Health Network",
    role: { en: "Web Designer", es: "Diseñador Web" },
    desc: {
      en: "With the branding already established, I brought Heritage's website to life from scratch. Created a digital experience that felt solid and sophisticated, so users feel comfortable navigating the healthcare world.",
      es: "Con el branding ya definido, le di vida al sitio web de Heritage partiendo de cero. Busqué una experiencia digital sólida y sofisticada, diseñando cada sección para que el usuario se sienta cómodo y seguro navegando."
    },
    tags: { en: ["Healthcare"], es: ["Salud"] },
    links: [{ label: { en: "Open website", es: "Abrir sitio" }, url: "https://heritagehealthnetwork.com/" }]
  },
  {
    slug: "lycka", cat: "brand", year: 2024, img: "lycka", stack: [],
    title: "Lycka",
    role: { en: "Brand Designer", es: "Diseñador de Marca" },
    desc: {
      en: "Created the foundational brand identity for Lycka, a startup, so they could launch with a cohesive and professional visual presence. Included logo design, a comprehensive style guide and initial marketing assets.",
      es: "Desarrollé la identidad de marca fundacional de la startup Lycka, para que pudiera lanzarse con una presencia visual cohesiva y profesional. Incluyó el diseño del logotipo, una guía de estilo integral y los primeros materiales de marketing."
    },
    tags: { en: ["Brand Identity", "Logo Design", "Style Guide"], es: ["Identidad de Marca", "Diseño de Logo", "Guía de Estilo"] },
    links: [{ label: { en: "View work", es: "Ver trabajo" }, url: "https://drive.google.com/file/d/1Vvox1mzkjWyWmerMIqAip9a0z2HUQoEv/view?usp=sharing" }]
  },
  {
    slug: "gem", cat: "web", year: 2025, img: "gem", stack: ["wordpress"], gs: true,
    title: "GEM",
    role: { en: "Web Designer", es: "Diseñador Web" },
    desc: {
      en: "Building out the digital presence for GEM's electrochemotherapy platform, with a focus on accessibility and clear medical communication. Currently in progress.",
      es: "Construyendo la presencia digital de la plataforma de electroquimioterapia de GEM, con foco en accesibilidad y comunicación médica clara. Actualmente en proceso."
    },
    tags: { en: ["In Progress"], es: ["En Proceso"] },
    links: [{ label: { en: "Open website", es: "Abrir sitio" }, url: "https://new.electroquimioterapia.com.ar/que-es-la-electroquimioterapia/" }]
  },
  {
    slug: "chef-marco-rocha", cat: "web", year: 2024, img: "chef-marco", stack: ["wordpress"],
    title: "Chef Marco Rocha",
    role: { en: "Web Designer", es: "Diseñador Web" },
    desc: {
      en: "Developed a WordPress website showcasing his catering services. The site highlights menus, past events and contact information, serving as both a digital portfolio and a hub for potential clients.",
      es: "Desarrollé un sitio en WordPress que muestra los servicios de catering del Chef Marco Rocha. Destaca sus menús, eventos anteriores e información de contacto, y funciona como portafolio digital y punto de contacto para clientes potenciales."
    },
    tags: { en: ["Food & Hospitality"], es: ["Gastronomía"] },
    links: [{ label: { en: "Open website", es: "Abrir sitio" }, url: "https://chefmarcorocha.com/" }]
  },
  {
    slug: "jj-bulk", cat: "web", year: 2024, img: "jj-bulk", stack: ["wordpress"],
    title: "JJ-Bulk",
    role: { en: "Web Designer", es: "Diseñador Web" },
    desc: {
      en: "Built a WordPress site for JJ Bulk, a US-based carrier bulk service provider. The site details their specialized transportation solutions, service areas and contact info for logistics inquiries.",
      es: "Sitio en WordPress para JJ Bulk, un proveedor de transporte a granel en EE. UU. El diseño destaca sus soluciones de transporte especializado y sus áreas de servicio, con acceso fácil a la información clave para consultas logísticas."
    },
    tags: { en: ["Logistics"], es: ["Logística"] },
    links: [{ label: { en: "Open website", es: "Abrir sitio" }, url: "https://jjbulk.com/" }]
  },
  {
    slug: "benki", cat: "ux", year: 2021, img: "benki-mobile", stack: ["figma"], gallery: ["benki-desktop"],
    title: "Benki",
    role: { en: "UX/UI Designer", es: "Diseñador UX/UI" },
    desc: {
      en: "An early university project: conceived and prototyped a PWA for a buy-and-sell platform. Covered the full brand creation process, from logo, identity guidelines and color palette to initial market research. The prototype explores product listings, secure checkout and account management.",
      es: "Uno de mis primeros proyectos universitarios: prototipé una aplicación web progresiva (PWA) para una plataforma de compra y venta. Abarcó toda la creación de marca, desde el logotipo, el manual de identidad y la paleta de colores hasta el estudio de mercado inicial. El prototipo explora listados de productos, pago seguro y gestión de cuentas."
    },
    tags: { en: ["PWA", "Brand Identity"], es: ["PWA", "Identidad de Marca"] },
    links: [
      { label: { en: "Mobile prototype", es: "Prototipo mobile" }, url: "https://www.figma.com/proto/sNVysX1cOlT6dnNzd2WPml/Benki-Franco-Mazzochi?page-id=6%3A29&node-id=6-30&p=f&viewport=208%2C225%2C0.29&t=NHQZvNSP50daJTuw-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=6%3A30" },
      { label: { en: "Desktop prototype", es: "Prototipo desktop" }, url: "https://www.figma.com/proto/sNVysX1cOlT6dnNzd2WPml/Benki-Franco-Mazzochi?page-id=0%3A1&node-id=0-3&p=f&viewport=116%2C274%2C0.13&t=xlMYLuEk15wkSu0n-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=0%3A3" },
      { label: { en: "Project folder", es: "Carpeta del proyecto" }, url: "https://drive.google.com/file/d/102ATNtH2EzK2zBFBPKaCqZbDfP-Y8AQu/view?usp=sharing" }
    ]
  },
  {
    slug: "fr-automation", cat: "web", year: 2023, img: "fr-automation", stack: ["claude"],
    title: "FR Automation",
    role: { en: "Web Redesign", es: "Rediseño Web" },
    desc: {
      en: "Website redesign for FR Automation SRL, an industrial robotics and automation company based in San Miguel, Buenos Aires. Focused on giving the brand a clearer, more professional digital presence to showcase its robotic cell and industrial automation projects.",
      es: "Rediseño del sitio web de FR Automation SRL, empresa de robótica y automatización industrial ubicada en San Miguel, Buenos Aires. El proyecto buscó darle a la marca una presencia digital más clara y profesional para mostrar sus celdas robotizadas y automatismos industriales."
    },
    tags: { en: ["Web Design", "Industrial"], es: ["Diseño Web", "Industrial"] },
    links: [{ label: { en: "Open website", es: "Abrir sitio" }, url: "https://frautomation.com.ar" }]
  },
  {
    slug: "lbj", cat: "web", year: 2023, img: "lbj", stack: ["code"],
    title: "LBJ Website",
    role: { en: "Academic Project", es: "Proyecto Académico" },
    desc: {
      en: "A website dedicated to LeBron James fans featuring a custom online store. Academic project blending fan engagement with an e-commerce experience for brand merchandise.",
      es: "Un sitio para fanáticos de LeBron James con una tienda online de su marca. Trabajo académico que combinaba la experiencia de fan con un e-commerce de merchandising."
    },
    tags: { en: ["HTML/CSS", "E-commerce", "Academic"], es: ["HTML/CSS", "E-commerce", "Académico"] },
    links: [{ label: { en: "Open website", es: "Abrir sitio" }, url: "https://mazz0chi.github.io/TP-FINAL-LBJ/" }]
  }
];

/* Video editing work. kind: "reel" (vertical) or "short" (horizontal). */
window.VIDEOS = [
  { title: "Toby y Gareca", kind: "reel", year: "2025", img: "reel-toby", url: "https://www.instagram.com/p/DHUPJPPvtCd/" },
  { title: "El Juicio", kind: "short", year: "2024", img: "short-el-juicio", url: "https://www.youtube.com/watch?v=pOBqW1lEgTI" },
  { title: "Media Punta", kind: "reel", year: "2024", img: "reel-mediapunta", url: "https://www.instagram.com/p/C_HH_Ixv20H/" },
  { title: "(des)conocidos", kind: "short", year: "2024", img: "short-desconocidos", url: "https://youtu.be/x3EyoIFiBx8" },
  { title: "Comedy", kind: "reel", year: "2024", img: "reel-comedy", url: "https://www.instagram.com/p/C_eTNX1sggY/" },
  { title: "Melody", kind: "short", year: "2024", img: "short-melody", url: "https://youtu.be/YwMItz1eU5c" },
  { title: "Comedy II", kind: "reel", year: "2024", img: "reel-comedy-2", url: "https://www.instagram.com/p/C_6Rp-zPiQF/" },
  { title: "Peleas en Ciclos", kind: "short", year: "2024", img: "short-peleas", url: "https://youtu.be/FeRHUb7Ywgk" }
];
