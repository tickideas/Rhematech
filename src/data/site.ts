export type NavItem = {
  label: string;
  href: string;
  children?: Array<{ label: string; href: string }>;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Company", href: "/about#company" },
      { label: "Leadership", href: "/about#leadership" },
      { label: "Certifications", href: "/about#certifications" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Delivery Model", href: "/services#delivery-model" },
      { label: "Our Process", href: "/services#process" },
    ],
  },
  {
    label: "Projects",
    href: "/projects",
    children: [
      { label: "All Projects", href: "/projects" },
      { label: "Case Studies", href: "/projects#case-studies" },
    ],
  },
  // { label: "Capabilities", href: "/capabilities" },
  // { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export type Differentiator = {
  title: string;
  description: string;
  icon: string;
};

export const differentiators: Differentiator[] = [
  {
    title: "Specific Solutions",
    description:
      "Every engagement begins with a tailored feasibility, design, and delivery roadmap aligned to a client’s exact goals.",
    icon: "target",
  },
  {
    title: "Global Expertise, Local Insight",
    description:
      "Rhematech pairs international mega-project experience with deep Nigerian market knowledge to unlock resilient outcomes.",
    icon: "globe",
  },
  {
    title: "Safety & Accountability",
    description:
      "World-class HSE, quality management, and governance keep teams safe, budgets controlled, and programmes on schedule.",
    icon: "shield",
  },
];

export type Metric = {
  label: string;
  value: string;
  description?: string;
};

export const keyMetrics: Metric[] = [
  {
    label: "20+",
    description: "years of combined leadership on flagship global projects",
    value: "experience",
  },
  {
    label: "£400M+",
    description: "programme value delivered across UK transport upgrades",
    value: "programme",
  },
  {
    label: "11",
    description: "countries spanned by our multi-disciplinary teams",
    value: "countries",
  },
];

export type Leader = {
  name: string;
  role: string;
  biography: string;
  accolades: string;
};

export const leadership: Leader[] = [
  {
    name: "Inuma Iworima",
    role: "Chairman & Chief Executive Officer",
    biography:
      "Civil Engineer and Project Manager with a Master’s in Construction Management from Loughborough University. Led multidisciplinary delivery of Crossrail’s Stockley Flyover and Acton Diveunder, and managed elements of Hamad International Airport.",
    accolades:
      "Former Senior Construction Manager overseeing £300m of rail infrastructure enhancements across the Great Western Railway.",
  },
  {
    name: "Azunna Chukwuma",
    role: "Project Director",
    biography:
      "Civil Engineer with a Master’s in Highway & Transportation Engineering and an active member of the Nigerian Society of Engineers. Delivered high profile NDDC road and bridge schemes across Rivers, Cross River, and Imo States.",
    accolades:
      "Chairs the Nigerian Society of Engineers Omuku branch technical committee.",
  },
  {
    name: "Chinedu Ahiazu",
    role: "Head of Engineering",
    biography:
      "Chartered Civil & Structural Engineer with Imperial College London credentials. Delivered structural leadership on BP, Total, Chevron, Woodside and Shell mega-projects including Shah Deniz II and Yamal LNG.",
    accolades:
      "Originated modularisation work instructions adopted across Total’s global execution centres.",
  },
  {
    name: "Amarachukwu Adiukwu",
    role: "Operations Manager",
    biography:
      "Electrical Engineer with 14 years’ experience across energy, power, construction and public sector programmes; led concept-to-commissioning delivery and business development for major IOCs in Nigeria.",
    accolades:
      "Managed installations spanning Indorama Petrochemicals, Total E&P Nigeria, and Port Harcourt transport infrastructure upgrades.",
  },
];

export type Service = {
  name: string;
  slug: string;
  summary: string;
  deliverables: string[];
  outcomes: string[];
  sectorTag: string;
  relatedProjects: string[];
};

export const services: Service[] = [
  {
    name: "Residential & Industrial Buildings",
    slug: "residential-industrial-buildings",
    summary:
      "Design-build delivery of bespoke residential, hospitality, and industrial facilities engineered for performance and longevity.",
    deliverables: ["Concept-to-commissioning", "Structural and MEP integration", "Quality assurance & handover"],
    outcomes: ["Optimised lifecycle cost", "Accelerated commercial readiness", "Enhanced occupant comfort"],
    sectorTag: "Built Environment",
    relatedProjects: ["okwuzu-uganda-road"],
  },
  {
    name: "Electrification & Power Systems",
    slug: "electrification-power-systems",
    summary:
      "Transmission, distribution, and renewable integration programmes that modernise critical power infrastructure.",
    deliverables: ["Grid expansion", "Substation upgrades", "Smart monitoring & controls"],
    outcomes: ["Improved reliability", "Operational efficiency", "Reduced downtime"],
    sectorTag: "Energy",
    relatedProjects: ["acton-diveunder", "crossrail-surface-stations"],
  },
  {
    name: "Roads & Rail Systems",
    slug: "roads-rail-systems",
    summary:
      "End-to-end transportation corridors including highways, bridges, track, and station modernisation.",
    deliverables: ["Feasibility & alignment studies", "Civil structures", "Track, signalling & electrification"],
    outcomes: ["Increased capacity", "Safer journeys", "Minimal service disruption"],
    sectorTag: "Transport",
    relatedProjects: ["stockley-flyover", "acton-diveunder", "crossrail-surface-stations"],
  },
  {
    name: "Oil & Gas Field Development",
    slug: "oil-gas-field-development",
    summary:
      "Engineering and project management across onshore/offshore assets, from FEED to execution for major IOCs.",
    deliverables: ["FEED & detailed design", "Modular fabrication", "Construction supervision"],
    outcomes: ["HSSE excellence", "Schedule certainty", "Productivity uplift"],
    sectorTag: "Energy",
    relatedProjects: ["yamal-lng"],
  },
  {
    name: "Defense Facilities",
    slug: "defense-facilities",
    summary:
      "Secure, mission-ready installations engineered to align with sensitive operational requirements.",
    deliverables: ["Secure infrastructure", "Specialist systems", "Lifecycle maintenance"],
    outcomes: ["Operational readiness", "Resilience", "Security compliance"],
    sectorTag: "Defense",
    relatedProjects: ["stockley-flyover"],
  },
  {
    name: "Airports & Seaports",
    slug: "airports-seaports",
    summary:
      "Aviation and marine hubs that streamline passenger and cargo throughput while elevating safety and sustainability.",
    deliverables: ["Airside & landside works", "Terminal upgrades", "Navigational systems"],
    outcomes: ["Capacity growth", "Improved passenger experience", "Operational resilience"],
    sectorTag: "Transport",
    relatedProjects: ["stockley-flyover", "crossrail-surface-stations"],
  },
  {
    name: "Petrochemical & Refinery Projects",
    slug: "petrochemical-refinery-projects",
    summary:
      "Complex refinery upgrades and petrochemical plants leveraging modularisation and advanced controls.",
    deliverables: ["Process unit design", "Turnaround planning", "Commissioning"],
    outcomes: ["Increased throughput", "Safety improvements", "Optimised operations"],
    sectorTag: "Energy",
    relatedProjects: ["yamal-lng"],
  },
];

export type ProjectMetric = {
  label: string;
  value: string;
};

export type Project = {
  slug: string;
  title: string;
  location: string;
  client: string;
  sector: string;
  services: string[];
  completion: string;
  value: string;
  summary: string;
  heroImage: string;
  metrics: ProjectMetric[];
  challenges: string[];
  solutions: string[];
  results: string[];
};

export const projects: Project[] = [
  {
    slug: "stockley-flyover",
    title: "Crossrail Stockley Flyover",
    location: "London, United Kingdom",
    client: "Crossrail Programme",
    sector: "Transport",
    services: ["Design Management", "Construction Management", "Project Management"],
    completion: "2016",
    value: "£100M",
    summary:
      "Expansion of the Stockley flyover and grade separation to remove conflicts between Heathrow services and mainline traffic, unlocking improved performance for rail customers.",
    heroImage: "/images/projects/crossrail-stockley.jpg",
    metrics: [
      { label: "1,000 ton", value: "steel bridge" },
      { label: "2,500 m", value: "permanent way installed" },
      { label: "5 years", value: "multi-stage delivery" },
    ],
    challenges: [
      "Operate within one of London’s busiest live rail corridors without service disruption.",
      "Coordinate multiple contractors and heavy-lift sequences across constrained sites.",
    ],
    solutions: [
      "Implemented staged construction and real-time control rooms to manage possessions and programme risk.",
      "Led multidisciplinary teams delivering steel flyover, reinforced ramps, and viaduct structures in tandem.",
    ],
    results: [
      "Increased capacity for Heathrow Express and future Elizabeth Line services.",
      "Delivered to Crossrail’s rigorous safety and quality benchmarks.",
    ],
  },
  {
    slug: "acton-diveunder",
    title: "Acton Diveunder & Yard Programme",
    location: "London, United Kingdom",
    client: "Crossrail Programme",
    sector: "Transport",
    services: ["Design Management", "Construction Management"],
    completion: "2016",
    value: "£90M",
    summary:
      "26-stage delivery of a 1km diveunder allowing freight services to leave Acton Yard without impacting high-speed passenger lines.",
    heroImage: "/images/projects/acton-diveunder.jpg",
    metrics: [
      { label: "1,000 m", value: "diveunder structure" },
      { label: "1,402", value: "contiguous piles" },
      { label: "5 years", value: "sequenced construction" },
    ],
    challenges: [
      "Remodel one of London’s busiest freight yards during live operations.",
      "Deliver extensive piling and track works within restricted possessions.",
    ],
    solutions: [
      "Introduced 26 meticulously planned stages with predictive clash detection and stakeholder comms.",
      "Coordinated piling, track slab construction, and signalling integration under a unified control plan.",
    ],
    results: [
      "Achieved grade separation enabling smoother passenger services post-Elizabeth Line launch.",
      "Zero lost-time incidents across critical possessions.",
    ],
  },
  {
    slug: "crossrail-surface-stations",
    title: "Crossrail Surface Stations",
    location: "London, United Kingdom",
    client: "Crossrail Programme",
    sector: "Transport",
    services: ["Design Management", "Project Management", "Construction Management"],
    completion: "Ongoing",
    value: "£400M",
    summary:
      "Design and build upgrades across 26 stations from Acton Main Line to Shenfield and Abbey Wood, including platforms, lifts, power systems, and OLE.",
    heroImage: "/images/projects/internal-road-okrika.jpg",
    metrics: [
      { label: "26", value: "stations modernised" },
      { label: "6 years", value: "programme duration" },
      { label: "200 m", value: "train platform accommodation" },
    ],
    challenges: [
      "Maintain passenger movements while expanding and modernising busy commuter stations.",
      "Integrate new lifts, footbridges, and electrification systems within legacy infrastructure.",
    ],
    solutions: [
      "Phased construction outside of peak times with detailed passenger flow modelling.",
      "Coordinated multi-discipline teams delivering structural, electrical, and systems works concurrently.",
    ],
    results: [
      "Seamless interchange readiness for Elizabeth Line operations.",
      "Enhanced accessibility through new lifts, platforms, and passenger information systems.",
    ],
  },
  {
    slug: "okwuzu-uganda-road",
    title: "Okwuzi – Uganda Road & Bridge",
    location: "Rivers State, Nigeria",
    client: "Niger Delta Development Commission",
    sector: "Infrastructure",
    services: ["Structural Design", "Project Management", "Construction Management"],
    completion: "2015",
    value: "₦150M",
    summary:
      "9.6km of asphaltic concrete pavement with drainage improvements and bridge structures improving rural mobility in Rivers State.",
    heroImage: "/images/projects/okrika-road.jpg",
    metrics: [
      { label: "9.6 km", value: "new roadway" },
      { label: "150 m", value: "line drains" },
      { label: "2", value: "bridge structures" },
    ],
    challenges: [
      "Deliver durable transport links across flood-prone terrain.",
      "Coordinate community engagement and materials logistics in remote areas.",
    ],
    solutions: [
      "Applied resilient pavement design and drainage to mitigate seasonal flooding.",
      "Mobilised local workforce development and supply chain partnerships.",
    ],
    results: [
      "Improved access for commerce and essential services in host communities.",
      "Strengthened socio-economic activity along the corridor.",
    ],
  },
  {
    slug: "yamal-lng",
    title: "Yamal LNG Modularisation",
    location: "Sabetta, Russia",
    client: "Total / Novatek",
    sector: "Energy",
    services: ["Structural Engineering", "Modularisation Consultancy"],
    completion: "2017",
    value: "$25B programme",
    summary:
      "Lead modularisation consultancy covering analysis and sea-state simulation of 4,000 tonne modules for arctic LNG facilities.",
    heroImage: "/images/projects/yamal-lng.jpg",
    metrics: [
      { label: "11", value: "pre-assembled modules" },
      { label: "4,000 t", value: "average module weight" },
      { label: "-50°C", value: "design temperature" },
    ],
    challenges: [
      "Engineer modules for extreme sub-zero transport and installation conditions.",
      "Coordinate global execution centres in Japan, India, Russia, and France.",
    ],
    solutions: [
      "Developed load-out and transportation procedures adopted as Total’s global standard.",
      "Led multidisciplinary team performing advanced structural analysis and sea-state simulations.",
    ],
    results: [
      "Enabled safe delivery of 16.5 mtpa LNG capacity in Arctic conditions.",
      "Institutionalised modularisation know-how for future mega-projects.",
    ],
  },
];

export const testimonial = {
  quote:
    "We pride ourselves in providing a specific solution that satisfies our customer’s needs and keeps them delighted long after handover.",
  author: "Rhematech Projects Limited",
};

export const contactInfo = {
  addressLines: [
    "No. 44 Port Harcourt Aba Express Road",
    "P.O.Box 4852, Port Harcourt",
    "Rivers State, Nigeria",
  ],
  phone: "+234 80 3339 5485",
  email: "info@rhematechpj.com",
};

export const processSteps = [
  {
    title: "Feasibility",
    description:
      "Interrogate objectives, constraints, and stakeholder expectations to align on the project definition and success metrics.",
  },
  {
    title: "Design & Engineering",
    description:
      "Develop multidisciplinary designs, simulations, and modular strategies that balance safety, quality, and programme.",
  },
  {
    title: "Construction & Procurement",
    description:
      "Execute with rigorous HSE, commercial, and schedule controls leveraging global procurement networks.",
  },
  {
    title: "Commissioning & Handover",
    description:
      "Deploy testing, documentation, and training to transition assets smoothly to operations with long-term performance in mind.",
  },
];

export const capabilityHighlights = [
  {
    title: "Engineering Excellence",
    description:
      "Advanced structural analysis, modularisation, and BIM-led coordination drive reliable delivery even in extreme environments.",
  },
  {
    title: "Project Controls",
    description:
      "Programme, cost, and risk management frameworks provide transparency and governance across every stage.",
  },
  {
    title: "Procurement & Supply Chain",
    description:
      "Trusted global partners and OEM relationships secure critical equipment, logistics, and specialist subcontractors.",
  },
  {
    title: "Quality & HSE",
    description:
      "ISO-aligned quality management and zero-harm HSE culture protect people, assets, and the environment.",
  },
];
