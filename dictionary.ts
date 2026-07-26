export type Locale = "en" | "ar";

export interface Service {
  index: string;
  title: string;
  body: string;
  tags: string[];
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface JourneyStep {
  index: string;
  title: string;
  body: string;
}

export interface PortfolioItem {
  category: string;
  title: string;
  note: string;
}

export interface Dictionary {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    links: { label: string; href: string }[];
    cta: string;
  };
  hero: {
    eyebrow: string;
    line1: string;
    line2: string;
    sub: string;
    primaryCta: string;
    secondaryCta: string;
    scrollHint: string;
  };
  whoWeAre: {
    kicker: string;
    title: string;
    body: string;
    quote: string;
    quoteAttribution: string;
  };
  services: {
    kicker: string;
    title: string;
    intro: string;
    list: Service[];
  };
  portfolio: {
    kicker: string;
    title: string;
    intro: string;
    categories: string[];
    items: PortfolioItem[];
    badge: string;
  };
  industries: {
    kicker: string;
    title: string;
    list: string[];
  };
  whyUs: {
    kicker: string;
    title: string;
    points: { title: string; body: string }[];
    stats: Stat[];
    statsNote: string;
  };
  journey: {
    kicker: string;
    title: string;
    steps: JourneyStep[];
  };
  cta: {
    title: string;
    sub: string;
    button: string;
  };
  contact: {
    kicker: string;
    title: string;
    intro: string;
    phoneLabel: string;
    emailLabel: string;
    locationLabel: string;
    whatsappLabel: string;
    formName: string;
    formEmail: string;
    formMessage: string;
    formSubmit: string;
    socialLabel: string;
  };
  footer: {
    tagline: string;
    rights: string;
    builtWith: string;
  };
}

const phone = "+20 107 012 3405";
const phoneHref = "+201070123405";
const whatsappHref = "https://wa.me/201070123405";
const email = "mohpharma2024@gmail.com";

export const contactRaw = { phone, phoneHref, whatsappHref, email, location: "New Cairo, Egypt" };

export const dictionaries: Record<Locale, Dictionary> = {
  en: {
    meta: {
      title: "MOH Egypt — Marketing, Executed.",
      description:
        "MOH Egypt is a Cairo-based marketing service company covering social media management, brand activations, creative production, influencer marketing and corporate gifting — planned and executed end to end.",
    },
    nav: {
      links: [
        { label: "Who we are", href: "#who-we-are" },
        { label: "Services", href: "#services" },
        { label: "Work", href: "#work" },
        { label: "Why MOH", href: "#why-us" },
        { label: "Contact", href: "#contact" },
      ],
      cta: "Start a project",
    },
    hero: {
      eyebrow: "Marketing service company — Cairo, Egypt",
      line1: "Ideas are cheap.",
      line2: "Execution isn't.",
      sub: "MOH plans, builds and runs the campaigns most agencies only present — strategy, activation, content and influence, carried through to the last detail, on the ground, in Egypt.",
      primaryCta: "Start a project",
      secondaryCta: "See our work",
      scrollHint: "Scroll",
    },
    whoWeAre: {
      kicker: "Who we are",
      title: "An execution partner, not another agency.",
      body: "MOH Egypt was built around one frustration: brilliant strategy decks that never leave the boardroom. So we work backwards from delivery. Every plan we write, we can also staff, produce and run ourselves — from a mall activation in New Cairo to a year-round content calendar.",
      quote: "We don't hand you a plan and disappear. We're still there on launch day, on-site, checking the booth lighting.",
      quoteAttribution: "MOH Egypt, on how we work",
    },
    services: {
      kicker: "What we do",
      title: "Five disciplines. One team.",
      intro:
        "Each service is run by the people who actually produce it — not passed between departments. Here's what we cover, end to end.",
      list: [
        {
          index: "01",
          title: "Social Media Management",
          body: "Strategic planning, content calendars, design, copywriting, publishing and performance reporting — run as one continuous system, not a monthly scramble.",
          tags: ["Strategy", "Content calendars", "Design & copy", "Reporting"],
        },
        {
          index: "02",
          title: "Brand Activations",
          body: "Mall, school, college and gym activations — booth design, production, staffing and logistics, executed end to end across Egypt.",
          tags: ["Booth design", "Production", "Staffing", "Logistics"],
        },
        {
          index: "03",
          title: "Photography & Creative Production",
          body: "Commercial and brand photography, content creation and creative production that gives every campaign a consistent, premium visual language.",
          tags: ["Photography", "Content creation", "Creative production"],
        },
        {
          index: "04",
          title: "Influencer Marketing",
          body: "Sourcing, negotiation, campaign management and PR coordination — tracked against real performance, not follower counts.",
          tags: ["Sourcing", "Negotiation", "PR coordination", "Tracking"],
        },
        {
          index: "05",
          title: "Corporate Gifts & Promotional Merchandise",
          body: "Employee gifts, corporate gifts, event giveaways and custom branding — produced and delivered on your timeline.",
          tags: ["Employee gifts", "Event giveaways", "Custom branding"],
        },
      ],
    },
    portfolio: {
      kicker: "Selected work",
      title: "Built to hold dozens of case studies.",
      intro:
        "MOH is a young execution partner — this section is designed to grow with every campaign we run. A few sample categories below; full case studies are on their way.",
      categories: ["All", "Retail", "Education", "F&B", "Health & Fitness", "Real Estate"],
      badge: "Case study in progress",
      items: [
        { category: "Retail", title: "Mall activation, New Cairo", note: "Booth design, staffing & on-ground execution." },
        { category: "Education", title: "Campus engagement program", note: "Multi-university activation & content." },
        { category: "F&B", title: "Launch content calendar", note: "Social strategy & influencer coordination." },
        { category: "Health & Fitness", title: "Gym brand activation", note: "Booth production & member acquisition." },
        { category: "Real Estate", title: "Project launch campaign", note: "Photography, content & PR." },
        { category: "Retail", title: "Seasonal gifting program", note: "Corporate gifts & custom branding." },
      ],
    },
    industries: {
      kicker: "Who we work with",
      title: "Industries we know on the ground.",
      list: ["Retail & Malls", "Education", "F&B", "Health & Fitness", "Real Estate", "FMCG"],
    },
    whyUs: {
      kicker: "Why MOH",
      title: "Fewer handoffs. More done.",
      points: [
        {
          title: "One team, start to finish",
          body: "Strategy, production and on-ground execution sit under one roof — not five agencies passing you between meetings.",
        },
        {
          title: "Built for Egypt",
          body: "Local production network, on-ground staffing and vendor relationships already in place — before your brief even lands.",
        },
        {
          title: "Numbers, not vibes",
          body: "Every campaign reports against the KPIs we agree on up front — not vanity metrics dressed up as results.",
        },
      ],
      stats: [
        { value: 25, suffix: "+", label: "Activations executed" },
        { value: 5, suffix: "+", label: "Governorates reached" },
        { value: 12, suffix: "", label: "Avg. days, brief to launch" },
      ],
      statsNote: "Sample figures — swap in your real numbers as campaigns close.",
    },
    journey: {
      kicker: "How we work",
      title: "From brief to launch, in four moves.",
      steps: [
        {
          index: "01",
          title: "Brief & discovery",
          body: "We dig into the goal, the audience and the budget before a single idea gets pitched.",
        },
        {
          index: "02",
          title: "Strategy & plan",
          body: "A plan built around what we can actually produce and staff — not a wish list.",
        },
        {
          index: "03",
          title: "Production & activation",
          body: "Content, booths, shoots and influencer campaigns — built and run in-house.",
        },
        {
          index: "04",
          title: "Report & refine",
          body: "Performance tracked against agreed KPIs, and the plan sharpened campaign to campaign.",
        },
      ],
    },
    cta: {
      title: "Have a launch date? Let's work backwards from it.",
      sub: "Tell us what you're building — we'll tell you exactly how MOH gets it live.",
      button: "Get in touch",
    },
    contact: {
      kicker: "Contact",
      title: "Let's talk execution.",
      intro: "Based in New Cairo, working across Egypt. Reach us directly — no forms buried behind a chatbot.",
      phoneLabel: "Phone",
      emailLabel: "Email",
      locationLabel: "Location",
      whatsappLabel: "WhatsApp",
      formName: "Name",
      formEmail: "Email",
      formMessage: "Tell us about your project",
      formSubmit: "Send message",
      socialLabel: "Follow along",
    },
    footer: {
      tagline: "Marketing, executed.",
      rights: "All rights reserved.",
      builtWith: "Cairo, Egypt",
    },
  },
  ar: {
    meta: {
      title: "MOH إيجيبت — تسويق يُنفَّذ فعليًا",
      description:
        "MOH إيجيبت شركة خدمات تسويقية مقرها القاهرة، تغطي إدارة السوشيال ميديا، تفعيلات العلامة التجارية، الإنتاج الإبداعي، تسويق المؤثرين والهدايا المؤسسية — تخطيطًا وتنفيذًا كاملاً.",
    },
    nav: {
      links: [
        { label: "من نحن", href: "#who-we-are" },
        { label: "خدماتنا", href: "#services" },
        { label: "أعمالنا", href: "#work" },
        { label: "لماذا MOH", href: "#why-us" },
        { label: "تواصل معنا", href: "#contact" },
      ],
      cta: "ابدأ مشروعك",
    },
    hero: {
      eyebrow: "شركة خدمات تسويقية — القاهرة، مصر",
      line1: "الأفكار رخيصة…",
      line2: "التنفيذ هو الفارق",
      sub: "نخطط وننفّذ الحملات التي تكتفي وكالات أخرى بعرضها فقط — استراتيجية، تفعيل ميداني، محتوى وتأثير رقمي، بمتابعة كل تفصيلة حتى النهاية، على أرض الواقع في مصر.",
      primaryCta: "ابدأ مشروعك",
      secondaryCta: "شاهد أعمالنا",
      scrollHint: "مرّر للأسفل",
    },
    whoWeAre: {
      kicker: "من نحن",
      title: "شريك تنفيذ، لا مجرد وكالة أخرى",
      body: "تأسست MOH إيجيبت من فكرة واحدة: عروض استراتيجية لامعة لا تخرج أبدًا من قاعة الاجتماعات. لذلك نبني خططنا بالعكس، بدءًا من التنفيذ. كل خطة نكتبها، قادرون على تنفيذها بأنفسنا — من تفعيل في مول بالقاهرة الجديدة، إلى خطة محتوى تمتد على مدار العام.",
      quote: "لا نسلّمك خطة ثم نختفي. نظل موجودين يوم الإطلاق، على الأرض، نتابع حتى إضاءة الجناح.",
      quoteAttribution: "MOH إيجيبت، عن طريقة عملنا",
    },
    services: {
      kicker: "ماذا نقدّم",
      title: "خمس خدمات… فريق واحد",
      intro: "كل خدمة يديرها الفريق الذي ينفذها فعليًا، لا تنتقل بين أقسام مختلفة. هذا ما نغطيه من الألف إلى الياء.",
      list: [
        {
          index: "٠١",
          title: "إدارة السوشيال ميديا",
          body: "تخطيط استراتيجي، تقويم محتوى، تصميم وكتابة إبداعية، نشر وتقارير أداء — منظومة مستمرة، لا معركة شهرية.",
          tags: ["استراتيجية", "تقويم محتوى", "تصميم وكتابة", "تقارير أداء"],
        },
        {
          index: "٠٢",
          title: "تفعيلات العلامة التجارية",
          body: "تفعيلات في المولات، المدارس، الجامعات والجيمات — تصميم وإنتاج الأجنحة، التوظيف واللوجستيات، تنفيذًا كاملاً في مصر.",
          tags: ["تصميم الأجنحة", "الإنتاج", "التوظيف", "اللوجستيات"],
        },
        {
          index: "٠٣",
          title: "التصوير والإنتاج الإبداعي",
          body: "تصوير تجاري واحترافي، إنتاج محتوى وهوية بصرية موحّدة تمنح كل حملة طابعًا مميزًا وراقيًا.",
          tags: ["تصوير", "إنتاج محتوى", "إنتاج إبداعي"],
        },
        {
          index: "٠٤",
          title: "تسويق المؤثرين",
          body: "اختيار المؤثرين، التفاوض، إدارة الحملات والتنسيق الإعلامي — بمتابعة الأداء الفعلي، لا عدد المتابعين فقط.",
          tags: ["اختيار المؤثرين", "التفاوض", "تنسيق إعلامي", "متابعة الأداء"],
        },
        {
          index: "٠٥",
          title: "الهدايا المؤسسية والمنتجات الترويجية",
          body: "هدايا الموظفين، الهدايا المؤسسية، هدايا الفعاليات والعلامة التجارية المخصصة — إنتاجًا وتسليمًا في الموعد المحدد.",
          tags: ["هدايا الموظفين", "هدايا الفعاليات", "علامة مخصصة"],
        },
      ],
    },
    portfolio: {
      kicker: "أعمال مختارة",
      title: "مصمم لاستيعاب عشرات دراسات الحالة",
      intro:
        "MOH شريك تنفيذ جديد نسبيًا — وهذا القسم مصمم لينمو مع كل حملة ننفذها. بعض الفئات التوضيحية أدناه، ودراسات الحالة الكاملة قادمة قريبًا.",
      categories: ["الكل", "تجزئة", "تعليم", "أغذية ومشروبات", "صحة ولياقة", "عقارات"],
      badge: "دراسة الحالة قيد الإعداد",
      items: [
        { category: "تجزئة", title: "تفعيل في مول، القاهرة الجديدة", note: "تصميم الجناح، التوظيف والتنفيذ الميداني." },
        { category: "تعليم", title: "برنامج تفاعل جامعي", note: "تفعيل ومحتوى عبر عدة جامعات." },
        { category: "أغذية ومشروبات", title: "خطة محتوى لإطلاق منتج", note: "استراتيجية سوشيال وتنسيق مؤثرين." },
        { category: "صحة ولياقة", title: "تفعيل علامة جيم", note: "إنتاج الجناح واستقطاب الأعضاء." },
        { category: "عقارات", title: "حملة إطلاق مشروع", note: "تصوير، محتوى وتنسيق إعلامي." },
        { category: "تجزئة", title: "برنامج هدايا موسمي", note: "هدايا مؤسسية وعلامة مخصصة." },
      ],
    },
    industries: {
      kicker: "مع من نعمل",
      title: "قطاعات نعرفها على أرض الواقع",
      list: ["التجزئة والمولات", "التعليم", "الأغذية والمشروبات", "الصحة واللياقة", "العقارات", "السلع الاستهلاكية"],
    },
    whyUs: {
      kicker: "لماذا MOH",
      title: "تسليم أقل تعقيدًا… إنجاز أكثر",
      points: [
        {
          title: "فريق واحد من البداية للنهاية",
          body: "الاستراتيجية، الإنتاج والتنفيذ الميداني تحت سقف واحد — لا خمس وكالات تُحيلك بينها من اجتماع لآخر.",
        },
        {
          title: "مبني لمصر",
          body: "شبكة إنتاج محلية، فرق ميدانية وعلاقات موردين جاهزة بالفعل — قبل أن تصل خطتك إلينا حتى.",
        },
        {
          title: "أرقام، لا انطباعات",
          body: "كل حملة تُقاس مقابل مؤشرات أداء متفق عليها مسبقًا — لا مقاييس شكلية بلا معنى حقيقي.",
        },
      ],
      stats: [
        { value: 25, suffix: "+", label: "تفعيل تم تنفيذه" },
        { value: 5, suffix: "+", label: "محافظات تمت تغطيتها" },
        { value: 12, suffix: "", label: "متوسط الأيام من الإحاطة للإطلاق" },
      ],
      statsNote: "أرقام توضيحية — استبدلها بأرقامك الفعلية كلما اكتملت حملة.",
    },
    journey: {
      kicker: "طريقة عملنا",
      title: "من الإحاطة إلى الإطلاق، في أربع خطوات",
      steps: [
        { index: "٠١", title: "الإحاطة والاكتشاف", body: "نتعمق في الهدف، الجمهور والميزانية قبل طرح أي فكرة." },
        { index: "٠٢", title: "الاستراتيجية والخطة", body: "خطة مبنية على ما نقدر فعليًا على إنتاجه وتنفيذه — لا قائمة أمنيات." },
        { index: "٠٣", title: "الإنتاج والتفعيل", body: "المحتوى، الأجنحة، التصوير وحملات المؤثرين — إنتاجًا وتنفيذًا داخليًا." },
        { index: "٠٤", title: "التقرير والتطوير", body: "متابعة الأداء مقابل المؤشرات المتفق عليها، وتطوير الخطة من حملة لأخرى." },
      ],
    },
    cta: {
      title: "عندك موعد إطلاق؟ لنبدأ التخطيط من هناك بالعكس.",
      sub: "أخبرنا بما تخطط له، وسنوضح لك بالتفصيل كيف تنفذه MOH.",
      button: "تواصل معنا",
    },
    contact: {
      kicker: "تواصل",
      title: "لنتحدث عن التنفيذ",
      intro: "مقرنا في القاهرة الجديدة، ونعمل في مختلف أنحاء مصر. تواصل معنا مباشرة — بلا نماذج مخفية خلف شات بوت.",
      phoneLabel: "الهاتف",
      emailLabel: "البريد الإلكتروني",
      locationLabel: "الموقع",
      whatsappLabel: "واتساب",
      formName: "الاسم",
      formEmail: "البريد الإلكتروني",
      formMessage: "أخبرنا عن مشروعك",
      formSubmit: "إرسال الرسالة",
      socialLabel: "تابعنا",
    },
    footer: {
      tagline: "تسويق يُنفَّذ فعليًا",
      rights: "جميع الحقوق محفوظة.",
      builtWith: "القاهرة، مصر",
    },
  },
};
