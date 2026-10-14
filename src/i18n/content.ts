// All site copy lives here, one block per language. Edit text here; the layout reads from it.

export const languages = { en: 'EN', es: 'ES' } as const;
export type Lang = keyof typeof languages;

export const profile = {
  name: 'Javier Hernández',
  email: 'jedmalfe2016@gmail.com',
  linkedin: 'https://www.linkedin.com/in/javier-hernandez2016/',
  location: 'Leamington, ON',
};

const en = {
  meta: {
    title: 'Javier Hernández · Logistics, Data & Automation',
    description:
      'Logistics and Warehouse Coordinator in Leamington, Ontario, building Power BI models, Excel control systems and real-time software for operations.',
  },
  nav: {
    about: 'About',
    journey: 'Journey',
    projects: 'Projects',
    credentials: 'Credentials',
    aerial: 'Aerial',
    contact: 'Contact',
  },
  hero: {
    role: 'Logistics & Warehouse Coordinator · Data & Automation',
    lede: 'I turn warehouse floors into data, and data into better decisions. From hive assembly to Power BI models and real-time systems, I build the tools that keep operations running.',
    ctaProjects: 'View projects',
    ctaContact: 'Get in touch',
  },
  board: {
    title: 'Packing queue',
    order: 'Order',
    lines: 'Lines',
    status: 'Status',
    states: { pack: 'Packing', ready: 'Ready', queue: 'Queued' },
    foot: 'Demo data · Node.js + Socket.IO + SQLite',
  },
  stats: [
    { value: '15+', label: 'years in operations, sales and client service' },
    { value: '184,693', label: 'hives tracked in one outdoor season' },
    { value: '9', label: 'months from labourer to coordinator' },
    { value: '2', label: 'countries, fully bilingual' },
  ],
  about: {
    title: 'I know the job from the floor up',
    paragraphs: [
      'I started on the production floor, assembling and inspecting hives for beneficial insect production. Nine months later I was coordinating the warehouse that supplies it. That path shapes how I work: the systems I build are the ones people actually use.',
      'Today I manage inventory, purchase orders and production material flow in SYSPRO ERP, and I spend my spare hours on what comes next: data analytics, Python and software that removes manual work. Before Canada I spent over a decade in Colombia advising corporate clients, which taught me to explain technical things clearly and to follow through until the job is closed.',
    ],
  },
  journey: {
    title: 'From the production line to the data model',
    items: [
      {
        when: '2025 – now',
        role: 'Logistics & Warehouse Coordinator',
        org: 'Plant Products Inc. (Biobest Group) · Leamington, ON',
        text: 'Run daily inventory, job creation, transfers and PO receiving in SYSPRO ERP for a dedicated production warehouse. Built the reporting, control tools and training material the team now relies on.',
      },
      {
        when: '2024 – 2025',
        role: 'Bumble Bee & Beneficial Insect Labourer',
        org: 'Plant Products Inc. · Leamington, ON',
        text: 'Hive assembly, quality inspection and packing against daily targets. Proposed workflow improvements the team adopted, which led to my promotion in nine months.',
      },
      {
        when: '2008 – 2024',
        role: 'Commercial & Client Advisory',
        org: 'Sanitas EPS (Keralty) · Medimás EPS · Efectiva · Saludcoop · Colombia',
        text: '15 years advising individual and corporate clients on health insurance and social security, from prospecting to documentation and follow-up, consistently meeting sales targets. Fully remote for four of those years.',
      },
    ],
  },
  projects: {
    title: 'Tools built for real operations',
    labels: { challenge: 'Challenge', solution: 'Solution', result: 'Result' },
    items: [
      {
        ref: 'PRJ-01 · POWER BI',
        title: 'Production & Scrap Analytics',
        challenge: 'No season-over-season view of production output, scrap and feed consumption.',
        solution: 'A Power BI data model with custom DAX measures and a three-page report.',
        result: 'One place to compare seasons and see where material is lost, across a 184,693-hive season.',
        tags: ['Power BI', 'DAX', 'Data modelling'],
      },
      {
        ref: 'PRJ-02 · EXCEL',
        title: 'Self-Serve Inventory Control',
        challenge: 'Stock questions depended on one person, and stock-outs were a constant risk.',
        solution: 'A live dashboard, a transaction log and a reorder calculator in Excel.',
        result: 'Colleagues manage stock on their own, with reorder points that flag shortages early.',
        tags: ['Excel', 'Power Query', 'Dashboards'],
      },
      {
        ref: 'PRJ-03 · NODE.JS',
        title: 'Real-Time Packing Order Display',
        challenge: 'Packing teams worked from order lists that went out of date during the shift.',
        solution: 'A web app that pushes order updates instantly to screens on the floor, backed by SQLite.',
        result: 'Everyone sees the same live queue, with no reprinting.',
        tags: ['Node.js', 'Socket.IO', 'SQLite'],
      },
      {
        ref: 'PRJ-04 · SOP',
        title: 'SYSPRO Manual & Training',
        challenge: 'Only one person knew how to enter jobs, transfers and receipts in the ERP.',
        solution: 'A step-by-step SYSPRO manual, hands-on training and Spanish onboarding for seasonal staff.',
        result: 'More people can run the system, and training records are complete.',
        tags: ['SYSPRO ERP', 'SOPs', 'Training'],
      },
    ],
  },
  credentials: {
    title: 'Education & certifications',
    items: [
      { kind: 'EDU', name: 'Systems Engineering (coursework)', detail: 'CUN, Colombia · 2022–2025' },
      { kind: 'EDU', name: 'Diploma in Machine Learning with Python', detail: 'CUN, Colombia · 2023–2024' },
      { kind: 'IN PROG', name: 'Google Advanced Data Analytics', detail: 'Professional Certificate · Coursera' },
      { kind: 'CERT', name: 'Advanced RPAS Pilot Certificate', detail: 'Transport Canada' },
      { kind: 'CERT', name: 'JHSC Certification', detail: 'Joint Health & Safety Committee · Ontario' },
      { kind: 'EDU', name: 'Systems Technician', detail: 'Instituto Politécnico Agroindustrial · 2014–2015' },
    ],
  },
  aerial: {
    title: 'Above the field',
    text: "I'm a Transport Canada certified Advanced RPAS pilot, capturing southwestern Ontario from above, from greenhouses to Lake Erie shorelines. Coming soon: a YouTube channel about life in Canada and aerial landscapes.",
    soon: 'First flights coming soon',
  },
  contact: {
    title: "Let's talk",
    text: "Whether it's operations, data or a project idea, I'm happy to connect.",
    copy: 'Copy',
    copied: 'Copied',
  },
  footer: 'Built with Astro · Leamington, Ontario',
};

type Content = typeof en;

const es: Content = {
  meta: {
    title: 'Javier Hernández · Logística, Datos y Automatización',
    description:
      'Coordinador de Logística y Almacén en Leamington, Ontario, que construye modelos en Power BI, sistemas de control en Excel y software en tiempo real para la operación.',
  },
  nav: {
    about: 'Sobre mí',
    journey: 'Trayectoria',
    projects: 'Proyectos',
    credentials: 'Formación',
    aerial: 'Aéreo',
    contact: 'Contacto',
  },
  hero: {
    role: 'Coordinador de Logística y Almacén · Datos y Automatización',
    lede: 'Convierto la operación del almacén en datos, y los datos en mejores decisiones. Desde el ensamble de colmenas hasta modelos en Power BI y sistemas en tiempo real, construyo las herramientas que mantienen la operación en marcha.',
    ctaProjects: 'Ver proyectos',
    ctaContact: 'Contáctame',
  },
  board: {
    title: 'Cola de empaque',
    order: 'Pedido',
    lines: 'Líneas',
    status: 'Estado',
    states: { pack: 'Empacando', ready: 'Listo', queue: 'En cola' },
    foot: 'Datos de ejemplo · Node.js + Socket.IO + SQLite',
  },
  stats: [
    { value: '15+', label: 'años en operaciones, ventas y servicio al cliente' },
    { value: '184.693', label: 'colmenas registradas en una temporada' },
    { value: '9', label: 'meses de operario a coordinador' },
    { value: '2', label: 'países, totalmente bilingüe' },
  ],
  about: {
    title: 'Conozco el trabajo desde el piso',
    paragraphs: [
      'Empecé en la línea de producción, ensamblando e inspeccionando colmenas para la producción de insectos benéficos. Nueve meses después coordinaba el almacén que la abastece. Ese camino define cómo trabajo: los sistemas que construyo son los que la gente realmente usa.',
      'Hoy manejo inventario, órdenes de compra y el flujo de materiales de producción en SYSPRO ERP, y dedico mi tiempo libre a lo que sigue: analítica de datos, Python y software que elimina trabajo manual. Antes de Canadá pasé más de una década en Colombia asesorando clientes corporativos, lo que me enseñó a explicar lo técnico con claridad y a cerrar cada proceso hasta el final.',
    ],
  },
  journey: {
    title: 'De la línea de producción al modelo de datos',
    items: [
      {
        when: '2025 – hoy',
        role: 'Coordinador de Logística y Almacén',
        org: 'Plant Products Inc. (Biobest Group) · Leamington, ON',
        text: 'Gestiono a diario inventario, creación de trabajos, transferencias y recepción de órdenes de compra en SYSPRO ERP para un almacén de producción. Construí los reportes, herramientas de control y material de capacitación que hoy usa el equipo.',
      },
      {
        when: '2024 – 2025',
        role: 'Operario de abejorros e insectos benéficos',
        org: 'Plant Products Inc. · Leamington, ON',
        text: 'Ensamble de colmenas, inspección de calidad y empaque con metas diarias. Propuse mejoras de flujo que el equipo adoptó y que me llevaron a un ascenso en nueve meses.',
      },
      {
        when: '2008 – 2024',
        role: 'Asesoría comercial y al cliente',
        org: 'Sanitas EPS (Keralty) · Medimás EPS · Efectiva · Saludcoop · Colombia',
        text: '15 años asesorando a clientes individuales y corporativos en salud y seguridad social, desde la prospección hasta la documentación y el seguimiento, cumpliendo metas de venta de forma constante. Cuatro de esos años en modalidad totalmente remota.',
      },
    ],
  },
  projects: {
    title: 'Herramientas hechas para la operación real',
    labels: { challenge: 'Reto', solution: 'Solución', result: 'Resultado' },
    items: [
      {
        ref: 'PRJ-01 · POWER BI',
        title: 'Analítica de Producción y Merma',
        challenge: 'No había una vista comparativa entre temporadas de producción, merma y consumo de alimento.',
        solution: 'Un modelo de datos en Power BI con medidas DAX propias y un reporte de tres páginas.',
        result: 'Un solo lugar para comparar temporadas y ver dónde se pierde material, en una temporada de 184.693 colmenas.',
        tags: ['Power BI', 'DAX', 'Modelado de datos'],
      },
      {
        ref: 'PRJ-02 · EXCEL',
        title: 'Control de Inventario Autoservicio',
        challenge: 'Las consultas de stock dependían de una sola persona y el riesgo de quiebre era constante.',
        solution: 'Un tablero en vivo, un registro de movimientos y una calculadora de reorden en Excel.',
        result: 'El equipo gestiona el inventario por su cuenta, con puntos de reorden que avisan a tiempo.',
        tags: ['Excel', 'Power Query', 'Tableros'],
      },
      {
        ref: 'PRJ-03 · NODE.JS',
        title: 'Pantalla de Pedidos en Tiempo Real',
        challenge: 'Los equipos de empaque trabajaban con listas que quedaban desactualizadas durante el turno.',
        solution: 'Una aplicación web que envía al instante los cambios de pedidos a pantallas en el área, con SQLite.',
        result: 'Todos ven la misma cola en vivo, sin reimprimir.',
        tags: ['Node.js', 'Socket.IO', 'SQLite'],
      },
      {
        ref: 'PRJ-04 · SOP',
        title: 'Manual SYSPRO y Capacitación',
        challenge: 'Solo una persona sabía registrar trabajos, transferencias y recepciones en el ERP.',
        solution: 'Un manual paso a paso de SYSPRO, capacitación práctica e inducción en español para personal de temporada.',
        result: 'Más personas operan el sistema y los registros de capacitación están completos.',
        tags: ['SYSPRO ERP', 'SOPs', 'Capacitación'],
      },
    ],
  },
  credentials: {
    title: 'Educación y certificaciones',
    items: [
      { kind: 'EDU', name: 'Ingeniería de Sistemas (cursada)', detail: 'CUN, Colombia · 2022–2025' },
      { kind: 'EDU', name: 'Diplomado en Machine Learning con Python', detail: 'CUN, Colombia · 2023–2024' },
      { kind: 'EN CURSO', name: 'Google Advanced Data Analytics', detail: 'Certificado Profesional · Coursera' },
      { kind: 'CERT', name: 'Piloto RPAS Avanzado', detail: 'Transport Canada' },
      { kind: 'CERT', name: 'Certificación JHSC', detail: 'Comité de Salud y Seguridad · Ontario' },
      { kind: 'EDU', name: 'Técnico en Sistemas', detail: 'Instituto Politécnico Agroindustrial · 2014–2015' },
    ],
  },
  aerial: {
    title: 'Desde el aire',
    text: 'Soy piloto RPAS Avanzado certificado por Transport Canada y capturo el suroeste de Ontario desde arriba, de los invernaderos a las orillas del lago Erie. Muy pronto: un canal de YouTube sobre la vida en Canadá y paisajes desde el aire.',
    soon: 'Primeros vuelos muy pronto',
  },
  contact: {
    title: 'Hablemos',
    text: 'Ya sea de operaciones, datos o una idea de proyecto, con gusto conversamos.',
    copy: 'Copiar',
    copied: 'Copiado',
  },
  footer: 'Hecho con Astro · Leamington, Ontario',
};

export const content: Record<Lang, Content> = { en, es };

export const skills = [
  'SYSPRO ERP', 'Power BI', 'DAX', 'Excel', 'Power Query', 'SQL', 'Python · pandas',
  'Machine Learning', 'Node.js', 'Socket.IO', 'SQLite', 'JavaScript', 'HTML / CSS',
];
