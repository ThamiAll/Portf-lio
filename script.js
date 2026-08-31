/* =========================================================
   1. DICIONÁRIO DE IDIOMAS (i18n: PT / EN)
   ========================================================= */
const translations = {
  pt: {
    nav_role: "Product Engineer & PO",
    nav_home: "Home",
    nav_bento: "Visão Geral",
    nav_cases: "Cases",
    nav_case_roommatch: "RoomMatch",
    nav_case_roommatch_desc: "App de Matching / PO",
    nav_case_lostfound: "Campus Lost & Found",
    nav_case_lostfound_desc: "Python & Back-end",
    nav_case_revolut: "Revolut Obsidian",
    nav_case_revolut_desc: "Estratégia de Produto",
    nav_case_agile: "Governança & Ágil",
    nav_case_agile_desc: "Jira, Métricas & Processos",
    nav_about_group: "Sobre & Atuação",
    nav_about_bio: "Minha Trajetória",
    nav_about_bio_desc: "Bio, Visão & Propósito",
    nav_about_pillars: "Pilares de Atuação",
    nav_about_pillars_desc: "Engenharia, Produto & Liderança",
    nav_process: "Processo",
    nav_contact: "Contato",
    nav_status: "DISPONÍVEL",
    nav_cta: "Vamos Conversar",

    hero_kicker: "[ PRODUCT & TECH ]",
    hero_title_1: "ESTRATÉGIA DE PRODUTO",
    hero_title_3: "& ENGENHARIA.",
    hero_desc: "Transformo problemas complexos de negócios em experiências digitais claras. Uno a visão estratégica de Product Owner com base técnica em Python e pesquisa orientada a dados.",
    hero_cta_main: "INICIAR CONVERSA",
    hero_cta_sec: "VER CASES",

    bento_kicker: "[ MATRIZ DE PRODUTO ]",
    bento_heading: "Visão 360° em Produto, Engenharia e Gestão",
    bento_card1_tag: "[ PROJETO PRINCIPAL ]",
    bento_card1_link: "[ EXPLORAR CASE ↗ ]",
    bento_card1_title: "RoomMatch — App de Matching para Moradia",
    bento_card1_desc: "Liderança de ponta a ponta como Product Owner, alinhando discovery de usuários, priorização de backlog no Jira e direcionamento de uma equipe de 2 desenvolvedores.",
    bento_card1_stat: "Devs em Liderança Técnica",
    bento_card2_tag: "[ PYTHON & DATA ARCHITECTURE ]",
    bento_card2_link: "[ REPOSITÓRIO ↗ ]",
    bento_card2_title: "Campus Lost & Found Engine",
    bento_card2_desc: "Arquitetura modular em Python para controle operacional, catalogação e triagem de itens com ciclo de vida de estados, injeção de CSS personalizado e persistência relacional.",
    bento_card3_tag: "[ DATA DRIVEN ]",
    bento_card3_title: "Pesquisa & Métricas",
    bento_card3_desc: "Validação de hipóteses antes do desenvolvimento para evitar retrabalho de engenharia e maximizar a retenção.",
    bento_card3_pill: "DATA ANALYSIS",
    bento_card4_tag: "[ GOVERNANÇA & PROCESSOS ]",
    bento_card4_title: "Alinhamento entre Negócio, Design e Código",
    bento_card4_desc: "Gestão ágil de sprints, escrita de critérios de aceite detalhados e documentação robusta em Notion e Jira para garantir entregas pontuais e consistentes.",
    bento_card4_metrics: "7 Sprints Estruturadas • 178 Story Points • Estimativa Fibonacci",

    case_kicker: "[ CONCEPT_PRODUCT // FINTECH & WEALTH ]",
    case_title: "Revolut Obsidian — The Next-Gen Private Wealth Experience",
    case_subtitle: "Concepção de produto, UX e viabilidade técnica para a expansão do segmento Ultra-High-End, integrando automação cambial preditiva e tokenização de cartões em tempo real.",
    case_disc_tag: "[ DISCLAIMER // ESTUDO CONCEITUAL ]",
    case_disc_text: "Este é um projeto autoral e conceitual de exploração de produto e UX. A marca Revolut foi utilizada exclusivamente como referência de ecossistema e estudo de caso prático para demonstrar estratégias de produto, arquitetura e design, sem vínculo comercial com a empresa.",
    case_status_pill: "STATUS: PROTOTYPE_READY // v1.4.0",
    case_stat1_lbl: "Tempo até 1ª Transação",
    case_stat2_lbl: "Aumento Est. de TPV",
    case_d1_tag: "[ 01 // DISCOVERY ]",
    case_d1_title: "Problem Framing & Contexto",
    case_d1_sub1: "Contexto de Mercado:",
    case_d1_txt1: "Clientes de alta renda e investidores globais enfrentam atrito ao gerenciar múltiplos ativos cambiais em interfaces bancárias convencionais, que sofrem com ruído visual, regras de spread pouco transparentes e lentidão na emissão física.",
    case_d1_sub2: "A Oportunidade:",
    case_d1_txt2: "Criar uma camada de produto ultra-exclusiva (Obsidian) com interface minimalista, eliminação de atrito operacional e foco em liquidez instantânea entre fronteiras.",
    case_d1_sub3: "Stakeholders & Escopo:",
    case_d1_txt3: "Alinhamento de regras de negócio de câmbio (FX), compliance antifraude internacional e experiência mobile de alta fidelidade.",
    case_d2_tag: "[ 02 // ESTRATÉGIA & UX ]",
    case_d2_title: "Funcionalidades Principais do Produto",
    case_f1_title: "Predictive Multi-Currency Engine (IA de Câmbio)",
    case_f1_desc: "Monitoramento contínuo de janelas cambiais favoráveis com conversão automática baseada em gatilhos (hedging) definidos pelo usuário.",
    case_f2_title: "Emissão Virtual Dinâmica",
    case_f2_desc: "Emissão instantânea de cartões virtuais com tokenização direta no Apple/Google Wallet antes do despacho do cartão metálico físico.",
    case_f3_title: "Interface Zen Wealth",
    case_f3_desc: "Modo de visualização limpo, sem distrações promocionais, focado em patrimônio líquido consolidado em tempo real.",
    case_d3_tag: "[ 03 // ARQUITETURA & GOVERNANÇA DE PO ]",
    case_d3_title: "Arquitetura Técnica & Governança de PO",
    case_d3_sub1: "Frontend / UX:",
    case_d3_txt1: "Microinterações táteis em 60fps, transições fluidas (Next.js & Tailwind) e arquitetura de componentes modulares.",
    case_d3_sub2: "Backend & APIs:",
    case_d3_txt2: "Integração de microsserviços em Python para conciliação bancária, webhooks assíncronos de transações e roteamento de APIs de cartões.",
    case_d3_sub3: "Entrega Ágil (Jira & Notion):",
    case_d3_txt3: "Épicos divididos em: Discovery, Security & Tokenization, Dynamic Limits Engine e VIP Waitlist Funnel. Critérios de aceitação estruturados no formato BDD (Given-When-Then) para testes de carga e resiliência de rede.",
    case_d4_tag: "[ 04 // IMPACTO & MÉTRICAS ]",
    case_d4_title: "Métricas & Impacto Esperado",
    case_m1_lbl: "Taxa de Conversão na Waitlist",
    case_m2_lbl: "Tempo até 1ª Transação",
    case_m3_lbl: "Retenção & LTV (TPV)",

    /* AGILE GOVERNANCE CASE */
    agile_kicker: "[ AGILE_GOVERNANCE // ENGINEERING COLLABORATION ]",
    agile_title: "Backlog Architecture & Sprint Orchestration",
    agile_subtitle: "Liderança ponta a ponta como Product Owner no projeto RoomMatch, coordenando a capacidade de 2 engenheiros full-stack através de 7 sprints estruturadas no Jira com pontuação em Fibonacci.",
    agile_cap_tag: "[ CAPACITY_MATRIX ]",
    agile_cap_status: "7 SPRINTS ENTREGUES",
    agile_stat1_lbl: "User Stories",
    agile_stat1_unit: "itens",
    agile_stat1_sub: "Mapeadas ponta a ponta",
    agile_stat2_lbl: "Story Points",
    agile_stat2_sub: "Fibonacci (1, 2, 3, 5, 8)",
    agile_stat3_lbl: "Velocity Média",
    agile_stat3_sub: "Capacidade nominal (2 Devs)",
    agile_stat4_lbl: "Cadência",
    agile_stat4_unit: "dias",
    agile_stat4_sub: "Sprints quinzenais contínuas",
    agile_team_note: "TIME: 2 DEVS FULL-STACK",
    agile_success_note: "100% SPRINT SUCCESS",
    agile_board_title: "Jira Board — Sprint 1 (Ativa)",
    agile_board_sub: "Clique nos cards para alternar o status",
    tab_all: "Todos",
    tab_done: "Concluído",
    tab_prog: "Fazendo",
    tab_todo: "A Fazer",
    agile_scope_note: "ESCOPO DA SPRINT 1: 23 PTS",
    agile_ontrack_note: "STATUS: ON_TRACK (100% COMMITTED)",
    agile_epics_tag: "[ PRODUCT_EPICS_HIERARCHY ]",
    agile_epics_title: "Mapeamento dos 6 Pilares Estratégicos",
    epic1_title: "Fundação, Contas & Segurança",
    epic2_title: "Módulo Imóvel",
    epic3_title: "Matching & Convivência",
    epic3_desc: "Algoritmo de afinidade, Swipe UX",
    epic4_title: "Chat em Tempo Real",
    epic4_desc: "WebSockets, Notificações, Privacidade",
    epic5_title: "Governança & Painel Admin",
    epic5_desc: "Moderação de anúncios, Denúncias",
    epic6_title: "Performance & Deploy",
    agile_risk_tag: "[ PO_CRITICAL_DECISION ]",
    agile_risk_status: "RISK_MANAGEMENT",
    agile_risk_title: "Gestão de Riscos & Replanejamento Contínuo",
    agile_alert_head: "Alerta Estratégico Detectado:",
    agile_alert_txt: "Identificação antecipada de sobrecarga na Sprint 7 com acúmulo de ~50 story points (200% da capacidade nominal do time).",
    agile_action_head: "Ação de Governança de PO:",
    agile_action_txt: "Replanejamento dinâmico baseado na Velocity média comprovada nas Sprints 5 e 6, desacoplando o deploy de infraestrutura para uma <strong>Sprint 8 de estabilização</strong>, prevenindo débito técnico e sobrecarga dos desenvolvedores.",
    agile_burnout_note: "Zero Burnout",
    agile_predict_note: "100% PREDICTABLE DELIVERIES",

    about_kicker: "[ QUEM SOU ]",
    about_heading: "Construindo pontes entre visão de negócio, código e design",
    about_p1: "Oi, sou a Thamires Alves! Sou movida pela curiosidade de transformar ideias complexas em produtos digitais fáceis, bonitos e gostosos de usar. Minha bagagem junta o lado analítico e investigativo da Química Computacional com a visão prática da Gestão de TI — o que me ajuda a transitar sem barreiras entre regras de negócio, código e design.",
    about_p2: "Hoje, atuo como Product Owner (PO) no desenvolvimento de um app imobiliário, rodando Scrum lado a lado com um time incrível de devs full stack. Mas não paro só na gestão: também coloco a mão na massa no UI/UX Design criando protótipos no Figma, colaboro com o front-end e uso ferramentas como Python, Next.js, CSS, Jira, Notion e IAs (Claude e Gemini) para acelerar entregas e criar experiências digitais que realmente resolvem a vida das pessoas.",
    about_btn: "EXPLORAR ATUAÇÃO",

    services_kicker: "[ O QUE EU FAÇO ]",
    services_heading: "Soluções sob medida para o ciclo de produto",
    btn_learn_more: "SABER MAIS",
    srv_1_title: "Product Ownership",
    srv_1_summary: "Priorização estratégica de backlog, roadmap claro e ritos ágeis de alta performance.",
    srv_1_more: "Conduzo cerimônias ágeis, defino critérios de aceite e mantenho o roadmap alinhado com as metas de negócio.",
    srv_2_title: "Pesquisa & UX",
    srv_2_summary: "Descoberta orientada por comportamento real de usuários e mapas de jornada.",
    srv_2_more: "Estruturo entrevistas, testes de usabilidade e protótipos no Figma para validar hipóteses antes de alocar esforço de engenharia.",
    srv_3_title: "Front & Backend",
    srv_3_summary: "Base sólida em Python e front-end moderno para decisões técnicas assertivas.",
    srv_3_more: "Entendo a arquitetura de sistemas para negociar débitos técnicos e estimar escopos realistas com o time de engenharia.",
    srv_4_title: "Análise de Dados",
    srv_4_summary: "Acompanhamento de métricas de retenção, engajamento e relatórios de produto.",
    srv_4_more: "Tradução de dados brutos de telemetria em insights acionáveis para guiar os próximos ciclos de desenvolvimento.",

    process_kicker: "[ COMO EU TRABALHO ]",
    process_heading: "Meu Processo de Produto",
    step_1_title: "Discovery & Descoberta",
    step_1_desc: "Compreensão profunda do problema do usuário e dos objetivos de negócio antes de redigir qualquer linha de requisito.",
    step_2_title: "Priorização & Backlog",
    step_2_desc: "Organização de valor baseada no framework RICE, esforço técnico e alinhamento estratégico com o roadmap.",
    step_3_title: "Execução Ágil",
    step_3_desc: "Acompanhamento diário com o time técnico, desbloqueio de impedimentos e refinamento contínuo de entregas.",
    step_4_title: "Validação & Iteração",
    step_4_desc: "Análise de métricas pós-lançamento, coleta de feedback e ajustes rápidos para otimizar a experiência do produto.",

    stmt_1: "Onde Estratégia",
    stmt_2: "Vira",
    stmt_3: "Produto",

    stack_kicker: "[ STACK & FERRAMENTAS ]",
    tip_python: "Python — Lógica de backend, scripts e análise de dados.",
    tip_next: "Next.js — Front-end moderno e componentização ágil.",
    tip_tailwind: "Tailwind CSS — Estilização rápida e consistente de interfaces.",
    tip_figma: "Figma — Prototipação, handoff e validação de wireframes.",
    tip_canva: "Canva — Design rápido, criativos e assets visuais de produto.",
    tip_jira: "Jira — Gestão ágil de sprints e backlog do projeto imobiliário.",
    tip_notion: "Notion — Documentação de regras de negócio e processos.",
    tip_claude: "Claude AI — Raciocínio avançado, engenharia de prompt e documentação.",
    tip_gemini: "Gemini AI — Análise multimodal de produto, pesquisa e ideação.",
    tip_google_labs: "Google Labs — Experimentação com IA generativa e prototipação.",
    tip_gpt: "ChatGPT — Automação de fluxos, revisão de código e prototipação rápida.",

    contact_kicker: "[ FALE COMIGO ]",
    contact_heading: "Vamos construir seu próximo produto",
    ph_name: "Nome",
    ph_email: "E-mail",
    ph_subject: "Assunto",
    ph_message: "Mensagem",
    contact_btn: "ENVIAR MENSAGEM →",
    contact_sent: "MENSAGEM ENVIADA COM SUCESSO ✓",

    foot_menu: "Menu",
    foot_projects: "Projetos",
    foot_reports: "Data & Relatórios",
    foot_top: "↑ VOLTAR AO TOPO",
    foot_big: "VAMOS CONSTRUIR",
    foot_rights: "Todos os direitos reservados."
  },

  en: {
    nav_role: "Product Engineer & PO",
    nav_home: "Home",
    nav_bento: "Overview",
    nav_cases: "Cases",
    nav_case_roommatch: "RoomMatch",
    nav_case_roommatch_desc: "Matching App / PO",
    nav_case_lostfound: "Campus Lost & Found",
    nav_case_lostfound_desc: "Python & Back-end",
    nav_case_revolut: "Revolut Obsidian",
    nav_case_revolut_desc: "Product Strategy",
    nav_case_agile: "Governance & Agile",
    nav_case_agile_desc: "Jira, Metrics & Processes",
    nav_about_group: "About & Focus",
    nav_about_bio: "My Journey",
    nav_about_bio_desc: "Bio, Vision & Purpose",
    nav_about_pillars: "Core Pillars",
    nav_about_pillars_desc: "Engineering, Product & Leadership",
    nav_process: "Process",
    nav_contact: "Contact",
    nav_status: "AVAILABLE",
    nav_cta: "Let's Talk",

    hero_kicker: "[ PRODUCT & TECH ]",
    hero_title_1: "PRODUCT STRATEGY",
    hero_title_3: "& ENGINEERING.",
    hero_desc: "Transforming complex business challenges into seamless digital experiences. Combining strategic Product Ownership with solid Python foundations and data-driven UX.",
    hero_cta_main: "START A CONVERSATION",
    hero_cta_sec: "EXPLORE CASES",

    bento_kicker: "[ PRODUCT MATRIX ]",
    bento_heading: "360° Vision across Product, Tech & Governance",
    bento_card1_tag: "[ FLAGSHIP PROJECT ]",
    bento_card1_link: "[ EXPLORE CASE ↗ ]",
    bento_card1_title: "RoomMatch — Shared Housing Matching App",
    bento_card1_desc: "End-to-end leadership as Product Owner, aligning user discovery, Jira backlog management, and mentoring a team of 2 software engineers.",
    bento_card1_stat: "Engineers in Tech Leadership",
    bento_card2_tag: "[ PYTHON & DATA ARCHITECTURE ]",
    bento_card2_link: "[ REPOSITORY ↗ ]",
    bento_card2_title: "Campus Lost & Found Engine",
    bento_card2_desc: "Modular Python architecture for operational control, item cataloging, and triage featuring finite state lifecycles, custom CSS injection, and relational persistence.",
    bento_card3_tag: "[ DATA DRIVEN ]",
    bento_card3_title: "Research & Metrics",
    bento_card3_desc: "Continuous hypothesis validation before writing code to prevent technical rework and maximize user retention.",
    bento_card3_pill: "DATA ANALYSIS",
    bento_card4_tag: "[ GOVERNANCE & PROCESS ]",
    bento_card4_title: "Connecting Business, Design & Clean Code",
    bento_card4_desc: "Agile sprint management, detailed acceptance criteria, and comprehensive documentation in Notion & Jira for predictable deliveries.",
    bento_card4_metrics: "7 Structured Sprints • 178 Story Points • Fibonacci Estimation",

    case_kicker: "[ CONCEPT_PRODUCT // FINTECH & WEALTH ]",
    case_title: "Revolut Obsidian — The Next-Gen Private Wealth Experience",
    case_subtitle: "Product design, UX strategy and technical feasibility for ultra-high-end banking, integrating predictive multi-currency hedging and instant virtual tokenization.",
    case_disc_tag: "[ DISCLAIMER // CONCEPTUAL STUDY ]",
    case_disc_text: "This is an independent conceptual exploration in product strategy and UX. The Revolut trademark was used solely as an ecosystem benchmark and case study context to showcase product architecture, design and engineering viability, with no official commercial affiliation with the company.",
    case_status_pill: "STATUS: PROTOTYPE_READY // v1.4.0",
    case_stat1_lbl: "Time-to-Transaction",
    case_stat2_lbl: "Est. TPV Lift",
    case_d1_tag: "[ 01 // DISCOVERY ]",
    case_d1_title: "Problem Framing & Discovery",
    case_d1_sub1: "Market Context:",
    case_d1_txt1: "High-net-worth individuals and global investors face friction managing multi-currency assets in conventional banking apps due to visual noise, hidden spreads, and slow physical card deliveries.",
    case_d1_sub2: "The Opportunity:",
    case_d1_txt2: "Engineer the Obsidian layer: an ultra-exclusive, zero-noise product tier focused on instant cross-border liquidity and automated hedging.",
    case_d1_sub3: "Stakeholders & Scope:",
    case_d1_txt3: "Full alignment across FX business logic, international anti-fraud compliance, and native mobile latency constraints.",
    case_d2_tag: "[ 02 // STRATEGY & UX ]",
    case_d2_title: "Core Product Features",
    case_f1_title: "Predictive Multi-Currency Engine (FX AI)",
    case_f1_desc: "Continuous monitoring of favorable exchange windows with automated conversion triggers defined by client rules.",
    case_f2_title: "Dynamic Virtual Issuance",
    case_f2_desc: "Instant card issuance with 1-click provisioning for Apple Wallet & Google Pay before the physical metal card ships.",
    case_f3_title: "Zen Wealth Interface",
    case_f3_desc: "High-contrast, noise-free dashboard consolidating global net worth and multi-asset liquidity in real time.",
    case_d3_tag: "[ 03 // ARCHITECTURE & PO GOVERNANCE ]",
    case_d3_title: "Technical Architecture & PO Governance",
    case_d3_sub1: "Frontend / UX:",
    case_d3_txt1: "60fps tactile microinteractions, fluid transitions (Next.js & Tailwind CSS), and atomic component architecture.",
    case_d3_sub2: "Backend & APIs:",
    case_d3_txt2: "Python microservices for automated ledger reconciliation, async webhooks, and payment rails integration.",
    case_d3_sub3: "Agile Delivery (Jira / Notion):",
    case_d3_txt3: "Epics scoped into Discovery, Tokenization Engine, Dynamic Limits, and VIP Waitlist, backed by BDD acceptance criteria.",
    case_d4_tag: "[ 04 // IMPACT & METRICS ]",
    case_d4_title: "Metrics & Expected Impact",
    case_m1_lbl: "Waitlist Conversion Rate",
    case_m2_lbl: "Time-to-First-Transaction",
    case_m3_lbl: "TPV Lift & Retention",

    /* AGILE GOVERNANCE CASE */
    agile_kicker: "[ AGILE_GOVERNANCE // ENGINEERING COLLABORATION ]",
    agile_title: "Backlog Architecture & Sprint Orchestration",
    agile_subtitle: "End-to-end leadership as Product Owner for RoomMatch, coordinating a 2-developer capacity across 7 sprints in Jira with Fibonacci-based story estimation.",
    agile_cap_tag: "[ CAPACITY_MATRIX ]",
    agile_cap_status: "7 SPRINTS DELIVERED",
    agile_stat1_lbl: "User Stories",
    agile_stat1_unit: "items",
    agile_stat1_sub: "Scoped end-to-end",
    agile_stat2_lbl: "Story Points",
    agile_stat2_sub: "Fibonacci (1, 2, 3, 5, 8)",
    agile_stat3_lbl: "Average Velocity",
    agile_stat3_sub: "Nominal Capacity (2 Devs)",
    agile_stat4_lbl: "Cadence",
    agile_stat4_unit: "days",
    agile_stat4_sub: "Continuous bi-weekly sprints",
    agile_team_note: "TEAM: 2 FULL-STACK DEVS",
    agile_success_note: "100% SPRINT SUCCESS",
    agile_board_title: "Jira Board — Sprint 1 (Active)",
    agile_board_sub: "Click task cards to cycle status",
    tab_all: "All",
    tab_done: "Done",
    tab_prog: "In Progress",
    tab_todo: "To Do",
    agile_scope_note: "SPRINT 1 SCOPE: 23 PTS",
    agile_ontrack_note: "STATUS: ON_TRACK (100% COMMITTED)",
    agile_epics_tag: "[ PRODUCT_EPICS_HIERARCHY ]",
    agile_epics_title: "Strategic 6-Epic Architecture",
    epic1_title: "Core Foundation, Auth & Security",
    epic2_title: "Property Management & Listing",
    epic3_title: "Matching & Cohabitation Algorithm",
    epic3_desc: "Affinity score, Swipe UX",
    epic4_title: "Real-Time Chat & Sockets",
    epic4_desc: "WebSockets, Notifications, Privacy",
    epic5_title: "Governance & Admin Moderation",
    epic5_desc: "Ad moderation, Reporting queue",
    epic6_title: "Performance, Infra & Deployment",
    agile_risk_tag: "[ PO_CRITICAL_DECISION ]",
    agile_risk_status: "RISK_MANAGEMENT",
    agile_risk_title: "Risk Management & Continuous Replanning",
    agile_alert_head: "Strategic Bottleneck Alert:",
    agile_alert_txt: "Identified Sprint 7 overload accumulating ~50 story points (200% over team nominal capacity).",
    agile_action_head: "PO Governance Action:",
    agile_action_txt: "Dynamic replanning based on proven velocity across Sprints 5 and 6, decoupling deployment into an 8th Stabilization Sprint to prevent technical debt and engineer burnout.",
    agile_burnout_note: "Zero Burnout",
    agile_predict_note: "100% PREDICTABLE DELIVERIES",

    about_kicker: "[ ABOUT ME ]",
    about_heading: "Bridging the gap between business vision, clean code & design",
    about_p1: "Hi, I'm Thamires Alves! I am driven by the curiosity to transform complex ideas into intuitive, beautiful, and enjoyable digital products. My background combines the analytical and investigative mindset of Computational Chemistry with the practical execution of IT Management — allowing me to navigate seamlessly between business rules, code, and design.",
    about_p2: "Today, I serve as Product Owner (PO) for a real estate platform, running Scrum side by side with a talented team of full-stack engineers. Beyond management, I get hands-on with UI/UX Design prototyping in Figma, collaborate with front-end code, and leverage Python, Next.js, CSS, Jira, Notion, and AI workflows (Claude & Gemini) to accelerate deliveries and craft digital experiences that genuinely solve real-world problems.",
    about_btn: "EXPLORE SERVICES",

    services_kicker: "[ WHAT I DO ]",
    services_heading: "Tailored solutions across the entire product lifecycle",
    btn_learn_more: "LEARN MORE",
    srv_1_title: "Product Ownership",
    srv_1_summary: "Strategic backlog prioritization, transparent roadmaps, and high-impact agile rituals.",
    srv_1_more: "Facilitating agile ceremonies, writing clear acceptance criteria, and keeping stakeholders aligned with product milestones.",
    srv_2_title: "UX Research",
    srv_2_summary: "Discovery driven by real user behavior, interviews, and end-to-end journey maps.",
    srv_2_more: "Conducting user tests, prototypes in Figma, and analytics reviews to validate features before investing engineering time.",
    srv_3_title: "Front & Backend",
    srv_3_summary: "Solid technical foundations in Python and modern front-end for confident scoping.",
    srv_3_more: "Understanding system architectures to proactively address technical debt and negotiate realistic deliverables.",
    srv_4_title: "Data Analytics",
    srv_4_summary: "Tracking engagement, retention funnels, and executive product reporting.",
    srv_4_more: "Turning raw telemetry into actionable product insights to guide roadmap iterations.",

    process_kicker: "[ HOW I WORK ]",
    process_heading: "My Product Process",
    step_1_title: "Discovery & Problem Framing",
    step_1_desc: "Deep-diving into user pain points and business goals before committing to requirements.",
    step_2_title: "Prioritization & Backlog",
    step_2_desc: "Scoring value using the RICE framework, engineering effort, and strategic roadmap alignment.",
    step_3_title: "Agile Execution",
    step_3_desc: "Daily collaboration with engineers, removing blockers, and refining deliverables iteratively.",
    step_4_title: "Validation & Iteration",
    step_4_desc: "Measuring post-launch metrics, gathering qualitative feedback, and iterating rapidly.",

    stmt_1: "Where Strategy",
    stmt_2: "Becomes",
    stmt_3: "Product",

    stack_kicker: "[ STACK & TOOLS ]",
    tip_python: "Python — Backend logic, automation scripts, and data analysis.",
    tip_next: "Next.js — Modern web front-end and modular component architecture.",
    tip_tailwind: "Tailwind CSS — Fast, utility-first styling for scalable user interfaces.",
    tip_figma: "Figma — UI/UX wireframing, interactive prototyping, and handoff.",
    tip_canva: "Canva — Rapid design, visual assets and creative collateral.",
    tip_jira: "Jira — Agile sprint boards and real estate app backlog management.",
    tip_notion: "Notion — Product requirements, technical specs, and processes.",
    tip_claude: "Claude AI — Advanced reasoning, prompt engineering & documentation.",
    tip_gemini: "Gemini AI — Multimodal product analysis, research & ideation.",
    tip_google_labs: "Google Labs — Generative AI experimentation and prototyping.",
    tip_gpt: "ChatGPT — Workflow automation, code review & rapid prototyping.",

    contact_kicker: "[ GET IN TOUCH ]",
    contact_heading: "Let's build your next digital product",
    ph_name: "Name",
    ph_email: "Email",
    ph_subject: "Subject",
    ph_message: "Message",
    contact_btn: "SEND MESSAGE →",
    contact_sent: "MESSAGE SENT SUCCESSFULLY ✓",

    foot_menu: "Menu",
    foot_projects: "Projects",
    foot_reports: "Data & Reports",
    foot_top: "↑ BACK TO TOP",
    foot_big: "LET'S BUILD",
    foot_rights: "All rights reserved."
  }
};

let currentLang = 'pt';

/* =========================================================
   2. ESTADO DO MINI-KANBAN JIRA
   ========================================================= */
const kanbanTasks = [
  { id: '1', key: 'ROOM-9', title: 'Infraestrutura Cloud & CI/CD Pipeline', points: 5, status: 'DONE' },
  { id: '2', key: 'ROOM-10', title: 'Modelagem de Dados PostgreSQL', points: 5, status: 'DONE' },
  { id: '3', key: 'ROOM-11', title: 'Auth & Login (OAuth2 + Social)', points: 5, status: 'IN_PROGRESS' },
  { id: '4', key: 'ROOM-12', title: 'Autenticação de Dois Fatores (2FA)', points: 3, status: 'TODO' },
  { id: '5', key: 'ROOM-15', title: 'Hardening de Segurança & Mitigação OWASP', points: 5, status: 'TODO' }
];

let activeFilter = 'ALL';

function renderKanban() {
  const container = document.getElementById('kanbanTasksList');
  if (!container) return;

  container.innerHTML = '';

  const filtered = activeFilter === 'ALL'
    ? kanbanTasks
    : kanbanTasks.filter(t => t.status === activeFilter);

  filtered.forEach(task => {
    const item = document.createElement('div');
    item.className = 'kanban-task-item';

    const statusLabels = {
      DONE: currentLang === 'pt' ? 'FEITO' : 'DONE',
      IN_PROGRESS: currentLang === 'pt' ? 'FAZENDO' : 'IN PROG',
      TODO: currentLang === 'pt' ? 'A FAZER' : 'TO DO'
    };

    const statusClass = {
      DONE: 'task-badge-done',
      IN_PROGRESS: 'task-badge-prog',
      TODO: 'task-badge-todo'
    };

    item.innerHTML = `
      <div class="task-left">
        <span class="task-key">${task.key}</span>
        <span class="task-name">${task.title}</span>
      </div>
      <div class="task-right">
        <span class="task-pts">${task.points} pts</span>
        <span class="${statusClass[task.status]}">${statusLabels[task.status]}</span>
      </div>
    `;

    item.addEventListener('click', () => {
      const cycle = { 'TODO': 'IN_PROGRESS', 'IN_PROGRESS': 'DONE', 'DONE': 'TODO' };
      task.status = cycle[task.status];
      renderKanban();
    });

    container.appendChild(item);
  });
}

function applyLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  document.getElementById('currentLangLabel').textContent = lang.toUpperCase();

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (translations[lang] && translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });

  document.querySelectorAll('.lang-opt').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  renderKanban();
}

// Seletor de Idioma
const langSelector = document.getElementById('langSelector');
const langBtn = document.getElementById('langBtn');

langBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  langSelector.classList.toggle('open');
});

document.querySelectorAll('.lang-opt').forEach(opt => {
  opt.addEventListener('click', () => {
    const selected = opt.getAttribute('data-lang');
    applyLanguage(selected);
    langSelector.classList.remove('open');
  });
});

document.addEventListener('click', (e) => {
  if (!langSelector.contains(e.target)) {
    langSelector.classList.remove('open');
  }
});

// Filtros do Kanban
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeFilter = btn.getAttribute('data-filter');
    renderKanban();
  });
});

/* =========================================================
   3. CURSOR FLUIDO (LERP) E MICROINTERAÇÕES
   ========================================================= */
const cur = document.getElementById('cur');
const ring = document.getElementById('curRing');
let mx = window.innerWidth / 2, my = window.innerHeight / 2;
let rx = mx, ry = my;

window.addEventListener('mousemove', e => {
  mx = e.clientX;
  my = e.clientY;
  cur.style.left = mx + 'px';
  cur.style.top = my + 'px';
});

window.addEventListener('mousedown', () => {
  ring.classList.add('active');
});

window.addEventListener('mouseup', () => {
  ring.classList.remove('active');
});

function renderLoop() {
  rx += (mx - rx) * 0.16;
  ry += (my - ry) * 0.16;
  ring.style.left = rx + 'px';
  ring.style.top = ry + 'px';
  requestAnimationFrame(renderLoop);
}
renderLoop();

document.querySelectorAll('.hoverable, a, button, input, textarea, .hotspot, .client-tile, .bento-card, .service-card, .case-card, .agile-card, .dropdown-item').forEach(el => {
  el.addEventListener('mouseenter', () => ring.classList.add('hover'));
  el.addEventListener('mouseleave', () => ring.classList.remove('hover'));
});

/* =========================================================
   4. FÍSICA MAGNÉTICA EM BOTÕES E ÍCONES
   ========================================================= */
document.querySelectorAll('.magnetic').forEach(btn => {
  btn.addEventListener('mousemove', e => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.28}px, ${y * 0.28}px)`;
  });

  btn.addEventListener('mouseleave', () => {
    btn.style.transform = '';
  });
});

/* =========================================================
   5. PROGRESSO DE SCROLL E NAV ATIVA
   ========================================================= */
const progress = document.getElementById('progress');
window.addEventListener('scroll', () => {
  const h = document.documentElement;
  const pct = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
  progress.style.width = pct + '%';
});

const sections = ['home', 'bento', 'case-obsidian', 'agile-governance', 'about', 'services', 'process', 'contact'].map(id => document.getElementById(id)).filter(Boolean);
const navA = document.querySelectorAll('#navLinks .nav-item');
const navIO = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navA.forEach(a => a.classList.remove('active'));
      const link = document.querySelector(`#navLinks a[href="#${e.target.id}"]`);
      if (link && link.classList.contains('nav-item')) link.classList.add('active');
    }
  });
}, { threshold: 0.25 });
sections.forEach(s => navIO.observe(s));

/* =========================================================
   6. REVEAL ESCALONADO EM SCROLL
   ========================================================= */
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      if (e.target.classList.contains('stagger-reveal')) {
        Array.from(e.target.children).forEach((child, index) => {
          child.style.transitionDelay = `${index * 70}ms`;
        });
      }
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal, .stagger-reveal').forEach(el => io.observe(el));

/* =========================================================
   7. GLOW SPOTLIGHT NOS CARDS
   ========================================================= */
document.querySelectorAll('.glow-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  });
});

/* =========================================================
   8. TILT 3D COM AMORTECIMENTO SUAVE
   ========================================================= */
document.querySelectorAll('.service-card, .bento-card, .case-card, .agile-card').forEach(card => {
  const btn = card.querySelector('.discover');
  if (btn) {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      card.classList.toggle('expanded');
    });
  }

  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    card.style.transform = `perspective(900px) rotateY(${px * 5}deg) rotateX(${-py * 5}deg) translateY(-4px)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

/* =========================================================
   9. ACCORDION DO PROCESSO
   ========================================================= */
document.querySelectorAll('[data-step]').forEach(row => {
  row.addEventListener('click', () => {
    const wasOpen = row.classList.contains('open');
    document.querySelectorAll('[data-step]').forEach(r => r.classList.remove('open'));
    if (!wasOpen) row.classList.add('open');
  });
});

/* =========================================================
   10. FORMULÁRIO E SCROLL SUAVE
   ========================================================= */
document.querySelectorAll('#contactForm input[required], #contactForm textarea[required]').forEach(inp => {
  inp.addEventListener('input', () => {
    inp.closest('.field').classList.toggle('valid', inp.checkValidity() && inp.value.trim().length > 0);
  });
});

document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const btn = document.getElementById('submitBtn');
  btn.textContent = translations[currentLang].contact_sent;
  btn.classList.add('sent');
  setTimeout(() => {
    btn.textContent = translations[currentLang].contact_btn;
    btn.classList.remove('sent');
    this.reset();
    document.querySelectorAll('.field.valid').forEach(f => f.classList.remove('valid'));
  }, 2400);
});

document.getElementById('backTop').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
document.getElementById('footWord').addEventListener('click', () => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }));

// Inicialização
// document.addEventListener('DOMContentLoaded', () => {
//   const heroVideo = document.getElementById('heroAmbientVideo');
//   if (heroVideo) {
//     heroVideo.playbackRate = 0.6;
//   }
//   renderKanban();
// });
document.addEventListener('DOMContentLoaded', () => {
  const heroSection = document.querySelector('.hero-parallax');
  const layers = document.querySelectorAll('.parallax-layer');
  const heroContent = document.querySelector('.layer-content');

  function handleParallax() {
    const scrollY = window.pageYOffset;
    const heroHeight = heroSection.offsetHeight;

    if (scrollY <= heroHeight) {
      // 1. Efeito de fade progressivo conforme rola para baixo
      const fadeRatio = 1 - (scrollY / (heroHeight * 0.75));
      heroContent.style.opacity = Math.max(fadeRatio, 0);

      // 2. Translação em diferentes velocidades por camada
      layers.forEach(layer => {
        const speed = parseFloat(layer.getAttribute('data-speed') || '0.5');
        const yOffset = -(scrollY * speed);
        layer.style.transform = `translate3d(0, ${yOffset}px, 0)`;
      });
    }
  }

  window.addEventListener('scroll', () => {
    window.requestAnimationFrame(handleParallax);
  }, { passive: true });
});