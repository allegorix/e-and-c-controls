import { ProjectItem, ExpertiseCategory, InfrastructureItem } from '../types';

export const COMPANY_INFO = {
  name: "E & C Controls",
  tagline: "Class-1 Licensed Electrical Contractor & Turnkey EHT / HT / LT & Automation Solutions",
  establishedYear: 2008,
  licenseGrade: "Class-1 EHT / HT / LT Electrical Inspectorate License",
  licenseNo: "EC-KL-2008-8849-EHT",
  totalExecutedValueLakhs: 2031,
  
  overview: `We are a professionally managed Electrical Contracting firm specializing in the execution of a wide range of electrical works, including Extra High Tension (EHT) Substations, High Tension (HT) & Low Tension (LT) installations, industrial electrification, and infrastructure projects. With a strong commitment to quality, safety, and timely delivery, we provide end-to-end electrical solutions from design and installation to testing and commissioning.`,

  vision: `To become a trusted and leading electrical contracting company delivering reliable, safe, and efficient electrical solutions across all sectors.`,

  mission: [
    "To execute projects with excellence and professionalism at every stage of design, installation, and testing.",
    "To maintain long-term relationships with clients through uncompromised safety, quality assurance, and timely delivery.",
    "To stay ahead in high-voltage engineering through modern testing technology and continuous technical upgrades."
  ],

  keyStrengths: [
    {
      title: "Experienced Technical Team",
      desc: "Skilled electrical engineers, certified HT supervisors, and safety officers with decades of field expertise."
    },
    {
      title: "Proven High-Voltage Track Record",
      desc: "Successfully delivered major 110kV/66kV/33kV substations and heavy industrial electrification projects."
    },
    {
      title: "Strict Statutory & Safety Adherence",
      desc: "Full compliance with IS Standards, CEA Regulations, State Electrical Inspectorate directives, and zero-accident policies."
    },
    {
      title: "Timely Execution & Quality Assurance",
      desc: "Rigorous quality check benchmarks at every stage ensuring zero-downtime commissioning and long service life."
    },
    {
      title: "Comprehensive Turnkey Capabilities",
      desc: "Complete end-to-end responsibility from single-line design, civil switchyard, equipment erection to final inspectorate approval & charging."
    }
  ]
};

export const EXPERTISE_LIST: ExpertiseCategory[] = [
  {
    id: "eht-substations",
    title: "EHT Substations (110kV / 66kV / 33kV / 11kV)",
    voltageGrade: "110kV - 11kV",
    iconName: "Zap",
    shortDesc: "Complete turnkey EHT switchyard development, power transformer installation, circuit breaker integration, and protection relay panels.",
    fullDetails: "Full turnkey execution of Extra High Tension (EHT) substations including civil foundation works, steel gantry erections, 110kV/66kV/33kV outdoor isolators, SF6 circuit breakers, lightning arresters, CT/PT metering units, and control room protection systems.",
    keyDeliverables: ["Substation Civil & Steel Structures", "110kV/33kV SF6 Circuit Breakers", "Control & Protection Panels", "Inspectorate Approvals & Charging"],
    applications: ["State Power Utilities", "Heavy Industrial Parks", "Massive Commercial Hubs"]
  },
  {
    id: "ht-lt-installations",
    title: "HT & LT Electrical Installations",
    voltageGrade: "33kV / 11kV / 415V",
    iconName: "Cpu",
    shortDesc: "High Tension & Low Tension power distribution networks, busduct installation, sub-stations, and indoor/outdoor distribution.",
    fullDetails: "End-to-end HT & LT power distribution systems for complex manufacturing plants, commercial towers, and institutional campuses. Includes HT breaker panels, LT distribution switchgear, sandwich busducts, and cable riser networks.",
    keyDeliverables: ["HT VCB Switchgear", "LT Main Distribution Boards", "Sandwich Busduct Risers", "Factory Power Grid Integration"],
    applications: ["Printing Presses", "Pharmaceutical Factories", "Hospitals & Malls"]
  },
  {
    id: "transformer-erection",
    title: "Transformer Erection, Testing & Commissioning",
    voltageGrade: "Up to 110kV Class",
    iconName: "Box",
    shortDesc: "Power & distribution transformer positioning, oil filtration, insulation diagnostics, and pre-commissioning testing.",
    fullDetails: "Expert erection of oil-immersed and dry-type power & distribution transformers up to 10MVA+ capacity. Includes vacuum oil filling, online moisture removal, BDV testing, turns ratio test, and winding resistance verification.",
    keyDeliverables: ["Vacuum Oil Filtration & Filling", "Breakdown Voltage (BDV) Testing", "Tan Delta & Winding Resistance", "Buchholz & OLTC Relay Calibration"],
    applications: ["Industrial Plants", "Substations", "Hospital Complexes"]
  },
  {
    id: "switchyard-development",
    title: "Switchyard Development",
    voltageGrade: "110kV / 66kV / 33kV",
    iconName: "Grid",
    shortDesc: "Outdoor bay development, tubular busbars, isolator gang switches, earth grid mesh, and fencing.",
    fullDetails: "Civil and electrical switchyard engineering, including structural gantry erection, ACSR conductor stringing, gang-operated double break isolators, surge arresters, and earth mesh grounding matrix.",
    keyDeliverables: ["Gantry Structural Erection", "Outdoor Gang Isolators", "Substation Earth Mat Laying", "Bay Marshalling Kiosks"],
    applications: ["Power Generating Plants", "Transmission Substations", "Industrial Power Feeders"]
  },
  {
    id: "cable-laying",
    title: "Underground & Overhead Cable Laying",
    voltageGrade: "EHT / HT / LT XLPE",
    iconName: "Workflow",
    shortDesc: "Trenching, cable tray routing, high-voltage XLPE cable pulling, heat-shrink termination, and overhead line erection.",
    fullDetails: "Specialized cable laying for high-capacity power transfer. Underground XLPE cable trenching with sand padding and protective RCC tiles, perforated heavy-duty cable tray installation, and raychem heat-shrinkable cable joints/terminations.",
    keyDeliverables: ["Underground XLPE Cable Pulling", "Heat-Shrink Joints & Terminations", "Galvanized Cable Trays & Supports", "Hi-Pot Testing & Continuity Checks"],
    applications: ["City Grids", "Industrial Corridors", "Metro & Railway Electrification"]
  },
  {
    id: "industrial-electrification",
    title: "Industrial Electrification",
    voltageGrade: "Turnkey Plant Power",
    iconName: "Factory",
    shortDesc: "Complete power wiring for heavy machinery, Motor Control Centers (MCC), variable frequency drives (VFD), and automated process lines.",
    fullDetails: "Comprehensive electrical infrastructure for manufacturing plants, processing facilities, and automated production lines. Direct power supply to heavy motors, compressor units, furnace feeds, and localized DBs.",
    keyDeliverables: ["Motor Control Center (MCC) Panels", "VFD & Soft Starter Panels", "Industrial Machine Cabling", "Plant Lighting & Utility Feeds"],
    applications: ["Automated Press Units", "Cattle Feed Plants", "Chemical & Pharma Factories"]
  },
  {
    id: "commercial-residential",
    title: "Commercial & Residential Electrical Works",
    voltageGrade: "LT 415V / 230V",
    iconName: "Building2",
    shortDesc: "Turnkey electrification for multi-story healthcare, commercial complexes, institutional buildings, and modern office parks.",
    fullDetails: "High-grade commercial wiring, energy-efficient LED lighting schemes, main incoming panels, floor distribution boards, UPS power distribution for clean IT loads, and emergency life safety systems.",
    keyDeliverables: ["Floor Distribution Panels", "UPS & Clean Power Wiring", "Lighting & Energy Metering", "Life Safety Electrical Infrastructure"],
    applications: ["Multi-specialty Hospitals", "Corporate Campuses", "Commercial Malls"]
  },
  {
    id: "dg-installation",
    title: "DG Set Installation & Synchronization",
    voltageGrade: "500kVA - 2500kVA",
    iconName: "Power",
    shortDesc: "Diesel Generator set placement, acoustic enclosure exhaust piping, AMF panels, and multi-DG load sharing synchronization.",
    fullDetails: "Complete backup power engineering including heavy DG set alignment, acoustic insulation, exhaust ducting, Auto Main Failure (AMF) panel installation, and PLC-based multi-generator auto-synchronization.",
    keyDeliverables: ["Heavy DG Set Positioning", "AMF & Synchronization Panels", "Exhaust Piping & Fuel Lines", "Grid Back-feed Interlocks"],
    applications: ["24/7 Critical Hospitals", "Data Centers", "Continuous Process Press Units"]
  },
  {
    id: "earthing-lightning",
    title: "Earthing & Lightning Protection Systems",
    voltageGrade: "IS 3043 / IEC 62305",
    iconName: "ShieldAlert",
    shortDesc: "Chemical maintenance-free copper earthing, copper tape grid networks, Faraday cages, and Early Streamer Emission (ESE) arresters.",
    fullDetails: "Engineered grounding solutions designed to maintain earth resistance below 1 Ohm. Complete lightning protection networks covering building rooftops, structural steel grounding, and surge suppression.",
    keyDeliverables: ["Copper Bonded Earth Pits", "Chemical Compound Backfill", "Copper / GI Earth Strip Grid", "ESE Lightning Conductors"],
    applications: ["Substations", "Hospital Complexes", "Flammable Chemical Facilities"]
  },
  {
    id: "panel-installation",
    title: "Electrical Panel Installation (HT/LT Panels)",
    voltageGrade: "11kV VCB / 415V PCC",
    iconName: "Layers",
    shortDesc: "Power Control Centers (PCC), APFC automatic power factor correction, VFD panels, and outdoor feeder pillars.",
    fullDetails: "Custom manufacture alignment and commissioning of heavy switchboards. Automatic Power Factor Correction (APFC) panels with capacitor banks to maintain power factor near unity and avoid utility penalties.",
    keyDeliverables: ["PCC & MCC Panels", "APFC Capacitor Panels", "Feeder Pillars & Busbar Chambers", "Relay Protection & Metering"],
    applications: ["All Heavy & Medium Industries", "Commercial Centers"]
  },
  {
    id: "maintenance-amc",
    title: "Maintenance & Annual Service Contracts (AMC)",
    voltageGrade: "Preventive & Breakdown",
    iconName: "Wrench",
    shortDesc: "Regular thermography inspection, transformer oil testing, breaker servicing, switchyard maintenance, and 24/7 emergency response.",
    fullDetails: "Comprehensive AMC solutions keeping high-voltage assets operating at peak efficiency. Includes infrared thermal imaging audits, contact resistance measurements, transformer BDV tests, and emergency repair dispatch.",
    keyDeliverables: ["Infrared Thermal Audits", "Transformer BDV & DGA Oil Testing", "Annual Substation Shutdown Servicing", "24/7 Emergency Technical Support"],
    applications: ["Industrial Plants", "Hospitals", "State Press Facilities"]
  }
];

export const MAJOR_PROJECTS: ProjectItem[] = [
  {
    id: "proj-1",
    client: "Malayala Manorama Co Pvt Ltd",
    category: "Media & Press",
    location: "Trivandrum, Kollam & Pathanamthitta Units, Kerala",
    scope: "HT and LT Electrification works for Modern Japanese Printing Press facilities across 3 regional units.",
    costInLakhs: 800,
    voltageGrade: "11kV HT / 415V LT",
    description: "Turnkey high-precision electrification for modern high-speed Japanese press lines. Required ultra-stable power regulation, synchronized DG backup, heavy cable laying, and sub-station transformers.",
    highlights: [
      "Total Project Cost: ₹800 Lakhs across 3 strategic press units",
      "Specialized Japanese press machine power interfacing & clean harmonic isolation",
      "HT Transformers, AMF DG synchronization, and LT switchgear installation",
      "Zero downtime execution during active publication schedules"
    ]
  },
  {
    id: "proj-2",
    client: "HOMCO Ltd (Kerala State Govt Undertaking)",
    category: "Industrial Factory",
    location: "Alappuzha, Kerala",
    scope: "HT and LT Electrification works for modern factory buildings and pharmaceutical manufacturing units.",
    costInLakhs: 577,
    voltageGrade: "11kV HT / 415V LT",
    description: "Comprehensive industrial electrification for state-of-the-art homeopathic manufacturing plant buildings. Executed clean-room lighting, motor control panels, chemical earthing, and main sub-station.",
    highlights: [
      "Total Electrification Cost: ₹577 Lakhs",
      "Complete cleanroom compliant electrical distribution & explosive-proof fittings",
      "Substation transformer erection, APFC panels, and cable tray networks",
      "Fully approved by Kerala State Electrical Inspectorate"
    ]
  },
  {
    id: "proj-3",
    client: "NSS Medical Mission Hospitals",
    category: "Healthcare",
    location: "Changanacherry and Pandalam Units, Kerala",
    scope: "Turnkey HT & LT Electrification for multi-specialty hospital complexes, OT power grids, and ICU isolation power.",
    costInLakhs: 500,
    voltageGrade: "11kV HT / 415V LT / IPS",
    description: "Critical healthcare electrical infrastructure serving multi-story hospital towers. Included isolated power supplies for Operation Theatres, seamless UPS integration, and auto-sync DG sets.",
    highlights: [
      "Total Project Cost: ₹500 Lakhs",
      "100% redundant power grid for ICUs, Operation Theatres, and Diagnostic Centers",
      "Transformer erection, emergency life-safety power, and hospital earthing",
      "Rapid execution adhering to medical safety standard IS 732 / NBC"
    ]
  },
  {
    id: "proj-4",
    client: "MILMA Palakkad (Kerala Co-operative Milk Marketing Federation)",
    category: "Agriculture & Dairy",
    location: "Cattle Feed Plant, Malampuzha, Palakkad",
    scope: "HT and LT Electrification works for heavy automated cattle feed processing plant.",
    costInLakhs: 154,
    voltageGrade: "11kV HT / 415V LT Heavy Duty",
    description: "Industrial power electrification for heavy feed milling machinery, grain elevators, pelletizers, and high-torque industrial motor drives.",
    highlights: [
      "Total Project Cost: ₹154 Lakhs",
      "High-power MCC panels, VFD drive integration for heavy conveyor motors",
      "Heavy duty cable tray routing, dust-proof panels, and earth protection grid",
      "Timely commissioning supporting state dairy feed production"
    ]
  },
  {
    id: "proj-5",
    client: "ISRO, Indian Railways & Quasi-Govt Establishments",
    category: "Government & Strategic",
    location: "Multiple Strategic Locations, India",
    scope: "Specialized high-reliability HT/LT electrification, substation works, testing, and annual maintenance contracts.",
    costInLakhs: 300, // estimated aggregate or representation
    voltageGrade: "33kV / 11kV / HT / LT",
    description: "Prestigious electrical contracts executed for premier space research organization ISRO, Southern Railways, and public sector undertakings requiring defense-grade safety compliance.",
    highlights: [
      "Strict security clearance & defense-grade engineering standards",
      "High reliability HT equipment testing, transformer oil filtration, and cable jointing",
      "Proven track record in handling mission-critical public infrastructure"
    ]
  }
];

export const INFRASTRUCTURE_TOOLS: InfrastructureItem[] = [
  {
    id: "tool-1",
    category: "Cable Laying",
    name: "Hydraulic Cable Winches & Heavy Cable Rollers",
    specifications: "10-Ton pulling capacity hydraulic winches, corner rollers, and underground cable trench guides.",
    purpose: "Smooth, stress-free pulling of heavy EHT/HT XLPE armored cables up to 1000 sq mm without sheath damage.",
    isComplianceRequired: true
  },
  {
    id: "tool-2",
    category: "Transformer Handling",
    name: "Vacuum Oil Filtration Plant & High-Vacuum Pumps",
    specifications: "6000 LPH multi-stage vacuum oil degassing & dehydration plant with online moisture sensor.",
    purpose: "Achieving oil breakdown voltage (BDV) > 70kV and removing dissolved gases prior to charging transformers.",
    isComplianceRequired: true
  },
  {
    id: "tool-3",
    category: "Testing Instruments",
    name: "High Voltage Megger Insulation Testers (5kV / 10kV)",
    specifications: "Digital Microprocessor-based insulation resistance tester with Polarization Index (PI) & DAR logging.",
    purpose: "Verifying insulation dielectric integrity of EHT cables, transformers, and switchgear switchboards.",
    isComplianceRequired: true
  },
  {
    id: "tool-4",
    category: "Testing Instruments",
    name: "Microprocessor Relay Testing Kits & Micro-Ohmmeter",
    specifications: "Secondary injection relay test kit & 100A contact resistance meter.",
    purpose: "Testing overcurrent, earth fault, distance protection relays, and circuit breaker contact resistance.",
    isComplianceRequired: true
  },
  {
    id: "tool-5",
    category: "Safety Equipment",
    name: "HV Electrical Arc-Flash Suits & Rubber Mats",
    specifications: "40 cal/cm² Arc Flash suits, 33kV IS 15652 electrical insulation rubber mats, & discharge rods.",
    purpose: "Protecting site engineers and linesmen during high-voltage inspection, testing, and live switchyard works.",
    isComplianceRequired: true
  },
  {
    id: "tool-6",
    category: "Cable Laying",
    name: "Raychem Motorized Cable Crimp Hydraulic Press",
    specifications: "120-Ton hydraulic crimping tool with interchangeable dies from 16 to 1000 sq mm.",
    purpose: "Executing air-tight, low-resistance aluminum & copper lug crimping on heavy power feeds.",
    isComplianceRequired: false
  }
];

export const QUALITY_SAFETY_RULES = [
  {
    title: "IS Standards & Indian Electricity Rules Compliance",
    details: "All electrical designs, clearances, cable sizing, and transformer earthing strictly adhere to IS 3043, IS 732, CEA (Measures Relating to Safety and Electric Supply) Regulations, and State Electrical Inspectorate guidelines."
  },
  {
    title: "High-Voltage Pre-Commissioning Diagnostic Protocol",
    details: "Every installation undergoes a strict 5-stage pre-commissioning test protocol: Megger Insulation check, Hi-Pot test, Winding Resistance, Contact Resistance, Relay Trip Testing, and Inspectorate Sanction before energized charging."
  },
  {
    title: "Strict Zero-Accident Site Safety Protocols",
    details: "Mandatory Permit-To-Work (PTW) system, Lock-Out Tag-Out (LOTO) protocols for maintenance, daily toolbox safety meetings, and mandatory Class-E helmets, safety harnesses, and insulated boots for all personnel."
  },
  {
    title: "Calibrated Precision Instruments",
    details: "All testing meters and secondary injection kits are calibrated annually at NABL-accredited testing laboratories to guarantee pinpoint accuracy during site diagnostics."
  }
];
