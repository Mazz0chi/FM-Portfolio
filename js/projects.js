/* Project data shared by index.html (EN) and index-es.html (ES).
   Order here = order in the "All" view. Images live in assets/images/work/.
   stack: what it was built with (keys of STACK in main.js). gs: made with GO Smartex. */
window.PROJECTS = [
  {
    slug: "bcm-studio", cat: "web", year: 2026, img: "bcm", stack: ["claude"],
    title: "Benitez Cruz Mazzochi",
    role: { en: "Co-founder, designer & developer", es: "Cofundador, diseñador y desarrollador" },
    desc: {
      en: "A studio I co-founded with my partner, Agustina. We design and build websites, brand identities and brand refreshes for companies in finance, health, marketing and other industries.",
      es: "Estudio que fundé junto a Agustina, mi pareja. Diseñamos y desarrollamos sitios web, identidades de marca y actualizaciones de marca para empresas de finanzas, salud y marketing, entre otros rubros."
    },
    tags: { en: ["Studio", "Branding", "Web design"], es: ["Estudio", "Branding", "Diseño web"] },
    links: [
      { label: { en: "Visit website", es: "Visitar sitio" }, url: "https://bcm-portfolio.vercel.app/" }
    ]
  },
  {
    slug: "go-smartex", cat: "web", year: 2026, img: "go-smartex", stack: ["claude"], gs: true,
    title: "Go Smartex",
    role: { en: "Designer & developer", es: "Diseñador y desarrollador" },
    desc: {
      en: "I designed and built a modular system with Claude in which every section adapts to its content instead of forcing it into rigid templates. The challenge was to explain complex IoT and smart-textile solutions clearly to both B2B clients and end consumers.",
      es: "Diseñé y desarrollé con Claude un sistema modular en el que cada sección se adapta a su contenido, en lugar de forzarlo dentro de plantillas rígidas. El desafío fue comunicar con claridad soluciones complejas de IoT y textiles inteligentes, tanto para clientes B2B como para consumidores finales."
    },
    tags: { en: ["Modular design", "B2B", "IoT"], es: ["Diseño modular", "B2B", "IoT"] },
    links: [
      { label: { en: "Visit website", es: "Visitar sitio" }, url: "https://gosmartex.com/" }
    ]
  },
  {
    slug: "jj-capinvest", cat: "web", year: 2026, img: "jj-capinvest", stack: ["claude"], gs: true,
    title: "JJ Capinvest",
    role: { en: "Designer & developer", es: "Diseñador y desarrollador" },
    desc: {
      en: "I designed and built the website of an investment firm to present its role as investor, operator and connector, with a sober and confident tone.",
      es: "Diseñé y desarrollé el sitio de una firma de inversión para presentar su rol como inversor, operador y conector, con un tono sobrio y seguro."
    },
    tags: { en: ["Financial services"], es: ["Servicios financieros"] },
    links: [
      { label: { en: "Visit website", es: "Visitar sitio" }, url: "https://jjcapinvest.com/" }
    ]
  },
  {
    slug: "jj-capinvest-brand", cat: "brand", year: 2026, img: "jj-brand", stack: [],
    gallery: ["jj-brand-explore", "jj-brand-logo", "jj-brand-versions", "jj-brand-color", "jj-brand-type", "jj-brand-dashboard", "jj-brand-app", "jj-brand-social", "jj-brand-linkedin", "jj-brand-banner", "jj-brand-merch", "jj-brand-essentials"],
    title: { en: "JJ Capinvest brand identity", es: "Identidad de marca JJ Capinvest" },
    role: { en: "Brand designer", es: "Diseñador de marca" },
    desc: {
      en: "I developed the visual identity of an investment firm based in Paris, Lyon and Valencia. After exploring more than twenty logo directions, I arrived at a monogram, a serif wordmark and an orange dot, then documented the system in a 29-page brand guide covering logo use, color, typography, tone of voice and applications for the investor platform, social media, LinkedIn and merchandise.",
      es: "Desarrollé la identidad visual de una firma de inversión con sede en París, Lyon y Valencia. Después de explorar más de veinte direcciones de logo, llegué a un monograma, un logotipo en serif y un punto naranja, y documenté el sistema en un manual de marca de 29 páginas con uso del logo, color, tipografía, tono de voz y aplicaciones para la plataforma de inversores, redes sociales, LinkedIn y merchandising."
    },
    tags: { en: ["Visual identity", "Brand guidelines", "Logo design", "Financial services"], es: ["Identidad visual", "Manual de marca", "Diseño de logo", "Servicios financieros"] },
    links: []
  },
  {
    slug: "888-capinvest", cat: "web", year: 2026, img: "888ci", stack: ["claude"], gs: true,
    title: "888 Capinvest",
    role: { en: "Designer & developer", es: "Diseñador y desarrollador" },
    desc: {
      en: "A redesign proposal for a venture capital and growth equity firm, with bilingual pages for the firm, its portfolio and its team.",
      es: "Propuesta de rediseño para una firma de capital de riesgo y growth equity, con páginas bilingües para la firma, su portafolio y su equipo."
    },
    tags: { en: ["Venture capital", "Redesign proposal", "Bilingual"], es: ["Capital de riesgo", "Propuesta de rediseño", "Bilingüe"] },
    links: [
      { label: { en: "View proposal", es: "Ver propuesta" }, url: {"en": "proposals/888ci/en/index.html", "es": "proposals/888ci/es/index.html"} }
    ]
  },
  {
    slug: "proposolve", cat: "web", year: 2026, img: "proposolve", stack: ["claude"], gs: true,
    title: "Proposolve",
    role: { en: "Designer & developer", es: "Diseñador y desarrollador" },
    desc: {
      en: "I designed and built the website for a proposal software product, structured to explain the product clearly and guide visitors toward booking a demo.",
      es: "Diseñé y desarrollé el sitio de un software de propuestas comerciales, pensado para explicar el producto con claridad y guiar a los visitantes hacia una demo."
    },
    tags: { en: ["SaaS"], es: ["SaaS"] },
    links: [
      { label: { en: "Visit website", es: "Visitar sitio" }, url: "https://www.proposolve.com/" }
    ]
  },
  {
    slug: "stand-tick", cat: "ux", year: 2022, img: "stand-tick", stack: ["figma"],
    title: "Stand Tick",
    role: { en: "UX/UI designer", es: "Diseñador UX/UI" },
    desc: {
      en: "A concept app for ticket resale that I prototyped with Julián. From the brand and logo to the interface, we focused on intuitive navigation, secure transactions and a points program that rewards loyalty.",
      es: "Aplicación conceptual de reventa de entradas que prototipé junto a Julián. Desde la marca y el logo hasta la interfaz, nos enfocamos en una navegación intuitiva, transacciones seguras y un programa de puntos que incentiva la fidelidad."
    },
    tags: { en: ["Brand design", "App prototype"], es: ["Diseño de marca", "Prototipo de app"] },
    links: [
      { label: { en: "Open prototype", es: "Abrir prototipo" }, url: "https://www.figma.com/proto/QtxSgWtSAWvBYqCoudYtMy/Stand-Tick?page-id=0%3A1&node-id=550-82&starting-point-node-id=550%3A82&t=1y3IvOZ3hvk0uc50-1" },
      { label: { en: "Project folder", es: "Carpeta del proyecto" }, url: "https://drive.google.com/file/d/1YdRUotMycBpCSQGjZIDiBEQrmxRkZI-C/view?usp=sharing" }
    ]
  },
  {
    slug: "bta", cat: "web", year: 2026, img: "bta", stack: ["claude"], gs: true,
    title: "BTA",
    role: { en: "Designer & developer", es: "Diseñador y desarrollador" },
    desc: {
      en: "I designed and built the website of a cybersecurity and technology services company, focused on a clear and trustworthy digital presence.",
      es: "Diseñé y desarrollé el sitio de una empresa de ciberseguridad y servicios tecnológicos, con foco en una presencia digital clara y confiable."
    },
    tags: { en: ["Cybersecurity", "B2B"], es: ["Ciberseguridad", "B2B"] },
    links: [
      { label: { en: "Visit website", es: "Visitar sitio" }, url: "https://gobta.com" }
    ]
  },
  {
    slug: "marketing-mob", cat: "web", year: 2026, img: "marketing-mob", stack: ["claude"], gs: true,
    title: "Marketing Mob",
    role: { en: "Designer & developer", es: "Diseñador y desarrollador" },
    desc: {
      en: "I refined the experience through its details: I redesigned key components such as the header and footer, and created graphic assets that gave the site more personality while keeping navigation smooth.",
      es: "Trabajé en pulir la experiencia a partir de los detalles: rediseñé componentes clave, como el encabezado y el pie de página, y creé recursos gráficos que le dieron más personalidad al sitio, cuidando siempre que la navegación fuera fluida."
    },
    tags: { en: ["Marketing agency", "Service design"], es: ["Agencia de marketing", "Diseño de servicios"] },
    links: [
      { label: { en: "Visit website", es: "Visitar sitio" }, url: "https://marketing-mob.com/" }
    ]
  },
  {
    slug: "fr-automation", cat: "web", year: 2026, img: "fr-automation", stack: ["claude"],
    title: "FR Automation",
    role: { en: "Designer & developer", es: "Diseñador y desarrollador" },
    desc: {
      en: "A website redesign for FR Automation SRL, an industrial robotics and automation company in San Miguel, Buenos Aires. The goal was a clearer, more professional digital presence to showcase its robotic cells and automation projects.",
      es: "Rediseño del sitio web de FR Automation SRL, empresa de robótica y automatización industrial de San Miguel, Buenos Aires. El objetivo fue darle a la marca una presencia digital más clara y profesional para mostrar sus celdas robotizadas y proyectos de automatización."
    },
    tags: { en: ["Website redesign", "Industrial"], es: ["Rediseño web", "Industria"] },
    links: [
      { label: { en: "Visit website", es: "Visitar sitio" }, url: "https://frautomation.com.ar" }
    ]
  },
  {
    slug: "eset", cat: "brand", year: 2023, img: "eset", stack: [],
    title: "ESET",
    role: { en: "Marketing designer", es: "Diseñador de marketing" },
    desc: {
      en: "I designed and optimized e-commerce pages and landing pages to drive online sales. I created visuals for Mercado Libre and Google Ads, built HTML email campaigns and worked with the marketing, sales and content teams on launches and promotions.",
      es: "Diseñé y optimicé páginas de e-commerce y landings para impulsar las ventas online. Creé piezas visuales para Mercado Libre y Google Ads, desarrollé campañas de email marketing en HTML y colaboré con los equipos de marketing, ventas y contenido en lanzamientos y promociones."
    },
    tags: { en: ["Photoshop", "Illustrator", "HTML email", "Mercado Libre & Google Ads"], es: ["Photoshop", "Illustrator", "Email marketing en HTML", "Mercado Libre y Google Ads"] },
    links: [
      { label: { en: "View work", es: "Ver trabajos" }, url: "https://drive.google.com/drive/folders/1IBHA5SVcKjo_-TiWTB4WQ1IK5tZ1z-vx?usp=sharing" }
    ]
  },
  {
    slug: "onesource-peo", cat: "web", year: 2026, img: "onesource", stack: ["wordpress"], gs: true,
    title: "OneSource PEO",
    role: { en: "Designer & developer", es: "Diseñador y desarrollador" },
    desc: {
      en: "I designed and built a clear, service-led website for a professional employer organization (PEO), making complex HR solutions easy to understand.",
      es: "Diseñé y desarrollé un sitio claro y orientado a servicios para una organización profesional de empleadores (PEO), que hace accesibles soluciones complejas de recursos humanos."
    },
    tags: { en: ["Human resources", "Professional services"], es: ["Recursos humanos", "Servicios profesionales"] },
    links: [
      { label: { en: "Visit website", es: "Visitar sitio" }, url: "https://onesourcepeo.com" }
    ]
  },
  {
    slug: "prana-wealth", cat: "web", year: 2026, img: "prana", stack: ["wordpress", "claude-chrome"], gs: true,
    title: "Prana Wealth Management",
    role: { en: "Designer & developer", es: "Diseñador y desarrollador" },
    desc: {
      en: "I designed and built a refined digital experience for a wealth management firm, balancing warmth, clarity and trust.",
      es: "Diseñé y desarrollé una experiencia digital cuidada para una firma de gestión patrimonial, que equilibra calidez, claridad y confianza."
    },
    tags: { en: ["Wealth management", "Financial services"], es: ["Gestión patrimonial", "Servicios financieros"] },
    links: [
      { label: { en: "Visit website", es: "Visitar sitio" }, url: "https://www.pranawealth.com" }
    ]
  },
  {
    slug: "tribu-mkt", cat: "web", year: 2025, img: "tribu", stack: ["wordpress"], gs: true,
    title: "Tribu MKT",
    role: { en: "Designer & developer", es: "Diseñador y desarrollador" },
    desc: {
      en: "I supported the growth of Tribu Marketing's website by designing full sections and visual elements. I built modular structures suited to their dynamic style, so the content stands out and connects better with their community.",
      es: "Acompañé el crecimiento del sitio de Tribu Marketing con el diseño de secciones completas y elementos visuales. Armé estructuras modulares adaptadas a su estilo dinámico, para que el contenido se destaque y conecte mejor con su comunidad."
    },
    tags: { en: ["Marketing community", "Content strategy"], es: ["Comunidad de marketing", "Estrategia de contenido"] },
    links: [
      { label: { en: "Visit website", es: "Visitar sitio" }, url: "https://tribu-mkt.com/" }
    ]
  },
  {
    slug: "hrlogics", cat: "web", year: 2025, img: "hrlogics", stack: ["hubspot"], gs: true,
    title: "HRlogics",
    role: { en: "Designer & developer", es: "Diseñador y desarrollador" },
    desc: {
      en: "I redesigned HRlogics' digital presence during their rebrand. I turned complex HR services into a clear, easy-to-navigate interface that feels professional yet approachable.",
      es: "Rediseñé la presencia digital de HRlogics durante su rebranding. Traduje la complejidad de sus servicios de recursos humanos en una interfaz clara y fácil de navegar, que transmite profesionalismo sin perder cercanía."
    },
    tags: { en: ["UX strategy", "SaaS", "Rebranding"], es: ["Estrategia UX", "SaaS", "Rebranding"] },
    links: [
      { label: { en: "Visit website", es: "Visitar sitio" }, url: "https://hrlogics.com/" }
    ]
  },
  {
    slug: "heritage-health", cat: "web", year: 2025, img: "heritage", stack: ["wordpress"], gs: true,
    title: "Heritage Health Network",
    role: { en: "Designer & developer", es: "Diseñador y desarrollador" },
    desc: {
      en: "Starting from an established brand identity, I designed and built the website from scratch. I aimed for a solid, sophisticated experience, with sections designed so users can navigate with ease and confidence.",
      es: "A partir de una identidad de marca ya definida, diseñé y desarrollé el sitio desde cero. Busqué una experiencia sólida y sofisticada, con secciones pensadas para que cada usuario navegue con comodidad y confianza."
    },
    tags: { en: ["Healthcare"], es: ["Salud"] },
    links: [
      { label: { en: "Visit website", es: "Visitar sitio" }, url: "https://heritagehealthnetwork.com/" }
    ]
  },
  {
    slug: "lycka", cat: "brand", year: 2024, img: "lycka", stack: [],
    title: "Lycka",
    role: { en: "Brand designer", es: "Diseñador de marca" },
    desc: {
      en: "I created the brand identity for Lycka, a startup, so it could launch with a coherent and professional image. The work included the logo, a complete style guide and the first marketing materials.",
      es: "Desarrollé la identidad de marca de Lycka, una startup, para que pudiera salir al mercado con una imagen coherente y profesional. El trabajo incluyó el logotipo, una guía de estilo completa y las primeras piezas de marketing."
    },
    tags: { en: ["Brand identity", "Logo design", "Style guide"], es: ["Identidad de marca", "Diseño de logo", "Guía de estilo"] },
    links: [
      { label: { en: "View work", es: "Ver trabajo" }, url: "https://drive.google.com/file/d/1Vvox1mzkjWyWmerMIqAip9a0z2HUQoEv/view?usp=sharing" }
    ]
  },
  {
    slug: "gem", cat: "web", year: 2025, img: "gem", stack: ["wordpress"], gs: true,
    title: "GEM",
    role: { en: "Designer & developer", es: "Diseñador y desarrollador" },
    desc: {
      en: "I'm designing and building the digital presence of GEM, an electrochemotherapy platform, with a focus on accessibility and clear medical communication.",
      es: "Estoy diseñando y desarrollando la presencia digital de GEM, una plataforma sobre electroquimioterapia, con foco en la accesibilidad y en una comunicación médica clara."
    },
    tags: { en: ["Healthcare", "In development"], es: ["Salud", "En desarrollo"] },
    links: [
      { label: { en: "Visit website", es: "Visitar sitio" }, url: "https://new.electroquimioterapia.com.ar/que-es-la-electroquimioterapia/" }
    ]
  },
  {
    slug: "chef-marco-rocha", cat: "web", year: 2024, img: "chef-marco", stack: ["wordpress"],
    title: "Chef Marco Rocha",
    role: { en: "Designer & developer", es: "Diseñador y desarrollador" },
    desc: {
      en: "I designed and built Chef Marco Rocha's website to present his catering services. It brings together menus, past events and contact details, working as both a portfolio and an inquiry channel for new clients.",
      es: "Diseñé y desarrollé el sitio del Chef Marco Rocha para presentar sus servicios de catering. Reúne menús, eventos realizados y datos de contacto, y funciona como portafolio y como canal de consultas para nuevos clientes."
    },
    tags: { en: ["Food & hospitality", "Catering"], es: ["Gastronomía", "Catering"] },
    links: [
      { label: { en: "Visit website", es: "Visitar sitio" }, url: "https://chefmarcorocha.com/" }
    ]
  },
  {
    slug: "jj-bulk", cat: "web", year: 2024, img: "jj-bulk", stack: ["wordpress"],
    title: "JJ-Bulk",
    role: { en: "Designer & developer", es: "Diseñador y desarrollador" },
    desc: {
      en: "I designed and built the website for JJ Bulk, a bulk freight carrier in the United States. It presents their specialized transportation services and service areas, with quick access to the key information for logistics inquiries.",
      es: "Diseñé y desarrollé el sitio de JJ Bulk, empresa de transporte de carga a granel en Estados Unidos. Presenta sus servicios de transporte especializado y sus áreas de cobertura, con acceso directo a la información clave para consultas logísticas."
    },
    tags: { en: ["Logistics", "Transportation"], es: ["Logística", "Transporte"] },
    links: [
      { label: { en: "Visit website", es: "Visitar sitio" }, url: "https://jjbulk.com/" }
    ]
  },
  {
    slug: "benki", cat: "ux", year: 2021, img: "benki-mobile", stack: ["figma"], gallery: ["benki-desktop"],
    title: "Benki",
    role: { en: "UX/UI designer", es: "Diseñador UX/UI" },
    desc: {
      en: "One of my first university projects: a progressive web app (PWA) prototype for buying and selling products. It covered the full brand creation, from the logo, identity guidelines and color palette to initial market research. The prototype explores product listings, secure checkout and account management.",
      es: "Uno de mis primeros proyectos universitarios: el prototipo de una aplicación web progresiva (PWA) para comprar y vender productos. Abarcó la creación completa de la marca, del logotipo, el manual de identidad y la paleta de colores al estudio de mercado inicial. El prototipo recorre los listados de productos, el pago seguro y la gestión de cuentas."
    },
    tags: { en: ["PWA", "Brand identity", "University project"], es: ["PWA", "Identidad de marca", "Proyecto universitario"] },
    links: [
      { label: { en: "Mobile prototype", es: "Prototipo móvil" }, url: "https://www.figma.com/proto/sNVysX1cOlT6dnNzd2WPml/Benki-Franco-Mazzochi?page-id=6%3A29&node-id=6-30&p=f&viewport=208%2C225%2C0.29&t=NHQZvNSP50daJTuw-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=6%3A30" },
      { label: { en: "Desktop prototype", es: "Prototipo de escritorio" }, url: "https://www.figma.com/proto/sNVysX1cOlT6dnNzd2WPml/Benki-Franco-Mazzochi?page-id=0%3A1&node-id=0-3&p=f&viewport=116%2C274%2C0.13&t=xlMYLuEk15wkSu0n-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=0%3A3" },
      { label: { en: "Project folder", es: "Carpeta del proyecto" }, url: "https://drive.google.com/file/d/102ATNtH2EzK2zBFBPKaCqZbDfP-Y8AQu/view?usp=sharing" }
    ]
  },
  {
    slug: "lbj", cat: "web", year: 2023, img: "lbj", stack: ["code"],
    title: "LBJ Website",
    role: { en: "Designer & developer", es: "Diseñador y desarrollador" },
    desc: {
      en: "An academic project: a website for LeBron James fans with an online merchandise store, combining content about the player with an e-commerce experience.",
      es: "Proyecto académico: un sitio para fanáticos de LeBron James con tienda online de merchandising, que combina contenido sobre el jugador con una experiencia de e-commerce."
    },
    tags: { en: ["E-commerce", "Academic project"], es: ["E-commerce", "Proyecto académico"] },
    links: [
      { label: { en: "Visit website", es: "Visitar sitio" }, url: "https://mazz0chi.github.io/TP-FINAL-LBJ/" }
    ]
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
