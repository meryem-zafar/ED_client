export const BRAND_INFO = {
  name: "ED-WISE CONSULTANCY",
  tagline: "Study Abroad & International University Portal",
  subtitle: "Your Trusted Gateway to Central Asia, Europe & Global Higher Education",
  headquarters: "Bishkek city, Kyrgyzstan",
  ceo: "Dr. Ahmed Bilal",
  phones: ["+996999516400", "+923226914300"],
  whatsapp: "996999516400",
  email: "Edwiseconsultancy91@gmail.com",
  operatingHours: "Mon - Sat: 9:00 AM - 6:00 PM (GMT+6)",
  lastVerifiedGlobal: "September 2026",
  stats: {
    countriesCount: 15,
    universitiesCount: 500,
    programsCount: 10000,
    successRate: "99.2%",
    studentsPlaced: 3500
  }
}

export const COUNTRIES = [
  {
    id: "kyrgyzstan",
    name: "Kyrgyzstan",
    shortName: "Kyrgyzstan",
    flag: "🇰🇬",
    flagCode: "kg",
    flagSvg: "/flags/kg.svg",
    region: "Central Asia",
    isSpecialFeature: true,
    tagline: "Land of Mountains & Premier Affordable Medical Education",
    heroImage: "https://images.unsplash.com/photo-1578637387939-43c525550085?auto=format&fit=crop&w=1200&q=80",
    overview: "Kyrgyzstan is the leading destination for Pakistani and international students pursuing high-quality, affordable Medical (MBBS/MD) and technical degrees. Nestled in Central Asia with breathtaking mountain landscapes, it offers safe cities, low living costs, and recognized universities.",
    capital: "Bishkek",
    popularCities: ["Bishkek", "Osh", "Karakol", "Jalal-Abad"],
    currency: "Kyrgyzstani Som (KGS) / USD",
    livingCostMonthly: "$200 - $350",
    tuitionRange: "$3,000 - $5,000 / year",
    partTimeWork: "Allowed under student visa regulations",
    medicalFocus: true,
    whyStudy: [
      "Extremely affordable MBBS tuition fees ($3k-$5k/yr) compared to Western options",
      "WHO, WFME, WDOMS & International Medical Board Recognized Universities",
      "English medium instruction for international medical pathways",
      "Modern hospital affiliations and clinical rotatory internships",
      "Safe, welcoming student environment with vibrant Pakistani student communities"
    ],
    requirements: [
      "FSc Pre-Medical / High School Certificate with minimum 50%-60% marks",
      "Valid Passport (at least 2 years validity remaining)",
      "Police Clearance Certificate & Medical Fitness Certificate (HIV/Hepatitis negative)",
      "Passport size photographs with white background"
    ],
    visaGuidance: "Express e-visa/invitation support via Ministry of Education & Foreign Affairs Kyrgyzstan. Average visa processing: 7-14 business days.",
    sourceLink: "https://edu.gov.kg/",
    lastVerified: "Sep 2026"
  },
  {
    id: "uzbekistan",
    name: "Uzbekistan",
    shortName: "Uzbekistan",
    flag: "🇺🇿",
    flagCode: "uz",
    flagSvg: "/flags/uz.svg",
    region: "Central Asia",
    isSpecialFeature: true,
    tagline: "Historic Silk Road Hub & Rapidly Expanding Medical & Tech Education",
    heroImage: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=1200&q=80",
    overview: "Uzbekistan is a booming educational hub in Central Asia, renowned for its ancient Silk Road cities of Tashkent, Samarkand, and Bukhara. Offering state-of-the-art medical institutes and engineering hubs with low tuition and low living costs.",
    capital: "Tashkent",
    popularCities: ["Tashkent", "Samarkand", "Bukhara", "Andijan"],
    currency: "Uzbek Som (UZS) / USD",
    livingCostMonthly: "$250 - $400",
    tuitionRange: "$3,200 - $5,500 / year",
    partTimeWork: "Permitted on-campus and selected tech hubs",
    medicalFocus: true,
    whyStudy: [
      "Historic, culturally rich environment with top-tier modern infrastructure",
      "World-recognized Tashkent and Samarkand Medical Academies",
      "Affordable hostel facilities with halal dining options",
      "Direct flight connections with Pakistan, Middle East, and Europe"
    ],
    requirements: [
      "Higher Secondary Education Transcript (FSc / A-Levels)",
      "Valid International Passport",
      "Medical Fitness Report",
      "Financial Guarantee statement"
    ],
    visaGuidance: "Official student visa invitation processed within 10 days by the Ministry of Higher Education Uzbekistan.",
    sourceLink: "https://edu.uz/",
    lastVerified: "Sep 2026"
  },
  {
    id: "kazakhstan",
    name: "Kazakhstan",
    shortName: "Kazakhstan",
    flag: "🇰🇿",
    flagCode: "kz",
    flagSvg: "/flags/kz.svg",
    region: "Central Asia",
    isSpecialFeature: false,
    tagline: "Economic Leader of Central Asia with Modern Research Universities",
    heroImage: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=1200&q=80",
    overview: "Kazakhstan combines top-ranked global universities, cutting-edge IT and Engineering research facilities, and medical faculties in cosmopolitan hubs like Almaty and Astana.",
    capital: "Astana",
    popularCities: ["Almaty", "Astana", "Shymkent"],
    currency: "Kazakhstani Tenge (KZT)",
    livingCostMonthly: "$300 - $500",
    tuitionRange: "$3,500 - $6,500 / year",
    partTimeWork: "Up to 20 hrs/week",
    medicalFocus: true,
    whyStudy: [
      "Top ranked universities in QS World Rankings (Al-Farabi Kazakh National University)",
      "Strong STEM and Medical research infrastructure",
      "High quality of life and modern city transport in Almaty"
    ],
    requirements: ["High School Certificate", "Passport copy", "Language proficiency test (if non-English track)"],
    visaGuidance: "C9 Student Visa issued through Ministry of Foreign Affairs Kazakhstan.",
    sourceLink: "https://gov.kz/memleket/entities/edu",
    lastVerified: "Sep 2026"
  },
  {
    id: "belarus",
    name: "Belarus",
    shortName: "Belarus",
    flag: "🇧🇾",
    flagCode: "by",
    flagSvg: "/flags/by.svg",
    region: "Europe",
    isSpecialFeature: false,
    tagline: "Affordable European Medical & Engineering Hub",
    heroImage: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80",
    overview: "Belarus offers European standard medical and technical education in Minsk and Grodno with English-medium MBBS/MD courses.",
    capital: "Minsk",
    popularCities: ["Minsk", "Grodno", "Vitebsk"],
    currency: "Belarusian Ruble (BYN) / USD",
    livingCostMonthly: "$250 - $400",
    tuitionRange: "$4,000 - $5,200 / year",
    partTimeWork: "Restricted",
    medicalFocus: true,
    whyStudy: ["WHO/WFME recognized medical degrees", "Modern clinical facilities", "Safe European country"],
    requirements: ["FSc Pre-Medical", "Passport", "Medical Certificates"],
    visaGuidance: "Visa on arrival or at Belarus diplomatic missions upon university invitation approval.",
    sourceLink: "https://edu.gov.by/",
    lastVerified: "Sep 2026"
  },
  {
    id: "serbia",
    name: "Serbia",
    shortName: "Serbia",
    flag: "🇷🇸",
    flagCode: "rs",
    flagSvg: "/flags/rs.svg",
    region: "Europe",
    isSpecialFeature: false,
    tagline: "European Standard Medical & Technical Degrees at Low Cost",
    heroImage: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=1200&q=80",
    overview: "Serbia offers accredited medical, IT, and business degree programs in Belgrade and Novi Sad with affordable tuition fees, European living standards, and welcoming international communities.",
    capital: "Belgrade",
    popularCities: ["Belgrade", "Novi Sad", "Nis"],
    currency: "Serbian Dinar (RSD) / EUR",
    livingCostMonthly: "$300 - $500",
    tuitionRange: "€3,500 - €6,000 / year",
    partTimeWork: "Permitted under student residency guidelines",
    medicalFocus: true,
    whyStudy: [
      "Affordable European medical & pharmacy degree options",
      "Degrees widely recognized throughout Europe and overseas",
      "Vibrant student life in historic Belgrade"
    ],
    requirements: ["High School Certificate", "Passport", "Medical Certificate"],
    visaGuidance: "Type D Visa issued by Serbian diplomatic consular offices with university acceptance.",
    sourceLink: "https://mpn.gov.rs/",
    lastVerified: "Sep 2026"
  },
  {
    id: "malta",
    name: "Malta",
    shortName: "Malta",
    flag: "🇲🇹",
    flagCode: "mt",
    flagSvg: "/flags/mt.svg",
    region: "Europe",
    isSpecialFeature: false,
    tagline: "English-Speaking EU Mediterranean Island for Global Higher Education",
    heroImage: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80",
    overview: "Malta is an English-speaking European Union archipelago offering British-accredited degrees, warm Mediterranean climate, top medical research schools, and rich post-graduation pathways.",
    capital: "Valletta",
    popularCities: ["Valletta", "Sliema", "Msida"],
    currency: "Euro (€)",
    livingCostMonthly: "€600 - €900",
    tuitionRange: "€5,000 - €9,000 / year",
    partTimeWork: "Up to 20 hrs/week after 90 days of study",
    medicalFocus: true,
    whyStudy: [
      "100% English-speaking EU country with British education standards",
      "Safe, sunny Mediterranean island lifestyle",
      "Pathway to European careers and Schengen access"
    ],
    requirements: ["High School Diploma / Bachelor Certificate", "Passport", "Bank statement"],
    visaGuidance: "National Long Stay Visa (D Visa) via Identity Malta.",
    sourceLink: "https://education.gov.mt/",
    lastVerified: "Sep 2026"
  },
  {
    id: "germany",
    name: "Germany",
    shortName: "Germany",
    flag: "🇩🇪",
    flagCode: "de",
    flagSvg: "/flags/de.svg",
    region: "Europe",
    isSpecialFeature: false,
    tagline: "Tuition-Free Public Higher Education & Engineering Powerhouse",
    heroImage: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1200&q=80",
    overview: "Germany offers top-tier public university tuition-free education (semester fee only), 18-month post-study work visas, and world-renowned degrees in Engineering, CS, and Natural Sciences.",
    capital: "Berlin",
    popularCities: ["Munich", "Berlin", "Aachen", "Frankfurt"],
    currency: "Euro (€)",
    livingCostMonthly: "€850 - €1,100",
    tuitionRange: "€0 - €3,000 / year (Public Universities)",
    partTimeWork: "20 hrs/week during semester, full-time in holidays",
    medicalFocus: false,
    whyStudy: ["Zero public tuition fees for most programs", "Post-study job seeker visa for 18 months", "Highest engineering standard in Europe"],
    requirements: ["FSc / A-Levels + Studienkolleg or 1 year Bachelor", "IELTS 6.5+ or TOEFL", "Blocked Account (~€11,208)"],
    visaGuidance: "National Visa (Category D) via German Embassy appointment.",
    sourceLink: "https://www.daad.de/",
    lastVerified: "Sep 2026"
  },
  {
    id: "finland",
    name: "Finland",
    shortName: "Finland",
    flag: "🇫🇮",
    flagCode: "fi",
    flagSvg: "/flags/fi.svg",
    region: "Europe",
    isSpecialFeature: false,
    tagline: "World's #1 Education System & Tech Innovation Hub",
    heroImage: "https://images.unsplash.com/photo-1538332576228-eb5b4c4de6f5?auto=format&fit=crop&w=1200&q=80",
    overview: "Finland provides globally celebrated education with generous scholarships, safe Nordic living standards, cutting-edge technology programs, and generous post-study work permits.",
    capital: "Helsinki",
    popularCities: ["Helsinki", "Tampere", "Turku", "Oulu"],
    currency: "Euro (€)",
    livingCostMonthly: "€700 - €1,000",
    tuitionRange: "€6,000 - €12,000 / year",
    partTimeWork: "Up to 30 hrs/week permitted",
    medicalFocus: false,
    whyStudy: [
      "Top-ranked education system globally with high innovation index",
      "Up to 2-year post-study job seeker residence permit",
      "High English proficiency and safe Nordic society"
    ],
    requirements: ["High School Certificate / Bachelor Degree", "IELTS 6.0+", "Financial proof (~€6,720/year)"],
    visaGuidance: "First residence permit for studies processed via EnterFinland electronic service.",
    sourceLink: "https://www.studyinfinland.fi/",
    lastVerified: "Sep 2026"
  },
  {
    id: "uk",
    name: "United Kingdom",
    shortName: "UK",
    flag: "🇬🇧",
    flagCode: "gb",
    flagSvg: "/flags/gb.svg",
    region: "Europe",
    isSpecialFeature: false,
    tagline: "World-Class Academic Reputation & 2-Year Graduate Work Route",
    heroImage: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80",
    overview: "The UK is home to world leading institutions like Oxford, Cambridge, and Imperial. Offers 1-year Master degrees and 2-year Graduate Post-Study Work Visas.",
    capital: "London",
    popularCities: ["London", "Manchester", "Birmingham", "Oxford"],
    currency: "British Pound (£)",
    livingCostMonthly: "£1,000 - £1,400",
    tuitionRange: "£12,000 - £25,000 / year",
    partTimeWork: "20 hrs/week during term time",
    medicalFocus: false,
    whyStudy: ["1-Year Master's programs saving time and living expenses", "Graduate Route 2-Year Post Study Work Permit", "Global prestige"],
    requirements: ["High School / Bachelor Degree", "IELTS 6.5+ / MOI letter", "Proof of funds for tuition & living"],
    visaGuidance: "Student Visa (Tier 4) via UKVI online system with CAS letter.",
    sourceLink: "https://www.gov.uk/student-visa",
    lastVerified: "Sep 2026"
  },
  {
    id: "usa",
    name: "United States",
    shortName: "USA",
    flag: "🇺🇸",
    flagCode: "us",
    flagSvg: "/flags/us.svg",
    region: "North America",
    isSpecialFeature: false,
    tagline: "World Leader in Higher Education, Innovation & STEM Careers",
    heroImage: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=1200&q=80",
    overview: "The United States hosts thousands of prestigious universities, providing unparalleled research opportunities, diverse campus cultures, OPT work authorization, and 3-year STEM extensions.",
    capital: "Washington, D.C.",
    popularCities: ["New York", "Boston", "Chicago", "San Francisco"],
    currency: "US Dollar ($)",
    livingCostMonthly: "$900 - $1,500",
    tuitionRange: "$15,000 - $35,000 / year",
    partTimeWork: "20 hrs/week on-campus during semester",
    medicalFocus: false,
    whyStudy: [
      "Home to top-ranked Ivy League and tier-1 research universities",
      "Up to 36 months STEM OPT post-graduation work authorization",
      "Generous research grants, teaching assistantships, and scholarships"
    ],
    requirements: ["High School / Bachelor Degree", "TOEFL / IELTS / Duolingo", "Form I-20 and SEVIS fee payment", "Bank statement of sponsor"],
    visaGuidance: "F-1 Student Visa application through DS-160 and US Embassy consular interview.",
    sourceLink: "https://travel.state.gov/",
    lastVerified: "Sep 2026"
  },
  {
    id: "canada",
    name: "Canada",
    shortName: "Canada",
    flag: "🇨🇦",
    flagCode: "ca",
    flagSvg: "/flags/ca.svg",
    region: "North America",
    isSpecialFeature: false,
    tagline: "Top Global Standard of Living, Affordable Tuition & PGWP Pathways",
    heroImage: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=1200&q=80",
    overview: "Canada is one of the most welcoming nations for international students, known for world-class universities, high safety, multicultural society, and post-graduation work permits (PGWP) leading to permanent residency.",
    capital: "Ottawa",
    popularCities: ["Toronto", "Vancouver", "Montreal", "Calgary"],
    currency: "Canadian Dollar (CAD)",
    livingCostMonthly: "CAD $1,000 - $1,600",
    tuitionRange: "CAD $12,000 - $28,000 / year",
    partTimeWork: "Up to 24 hrs/week off-campus during terms",
    medicalFocus: false,
    whyStudy: [
      "Up to 3-year Post-Graduation Work Permit (PGWP)",
      "Clear permanent residency pathways via Express Entry & PNP",
      "Safe, multicultural and globally ranked universities"
    ],
    requirements: ["High School / Bachelor Degree", "IELTS 6.0 - 6.5", "GIC proof of funds (CAD $20,635)"],
    visaGuidance: "Canadian Study Permit applied via IRCC portal with provincial attestation letter (PAL).",
    sourceLink: "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada.html",
    lastVerified: "Sep 2026"
  },
  {
    id: "australia",
    name: "Australia",
    shortName: "Australia",
    flag: "🇦🇺",
    flagCode: "au",
    flagSvg: "/flags/au.svg",
    region: "Australia",
    isSpecialFeature: false,
    tagline: "High Quality of Life, World-Class Universities & Post-Study Work Visas",
    heroImage: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=1200&q=80",
    overview: "Australia offers globally recognized Group of Eight universities, exceptional student lifestyles in Sydney, Melbourne, and Brisbane, and up to 4-5 years of post-study work rights.",
    capital: "Canberra",
    popularCities: ["Sydney", "Melbourne", "Brisbane", "Perth"],
    currency: "Australian Dollar (AUD)",
    livingCostMonthly: "AUD $1,200 - $1,800",
    tuitionRange: "AUD $18,000 - $35,000 / year",
    partTimeWork: "48 hrs per fortnight during semester",
    medicalFocus: false,
    whyStudy: [
      "7 universities in global QS Top 100",
      "Post-study work rights with potential extension for regional study",
      "Warm climate, outdoor lifestyle and high student satisfaction"
    ],
    requirements: ["High School Certificate / Bachelor Degree", "IELTS 6.0 - 6.5 or PTE", "Confirmation of Enrolment (CoE)"],
    visaGuidance: "Subclass 500 Student Visa processed online via ImmiAccount.",
    sourceLink: "https://immi.homeaffairs.gov.au/",
    lastVerified: "Sep 2026"
  },
  {
    id: "cyprus",
    name: "Cyprus",
    shortName: "Cyprus",
    flag: "🇨🇾",
    flagCode: "cy",
    flagSvg: "/flags/cy.svg",
    region: "Europe",
    isSpecialFeature: false,
    tagline: "Mediterranean Study Hub with Generous 50% Scholarships",
    heroImage: "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?auto=format&fit=crop&w=1200&q=80",
    overview: "Cyprus combines Mediterranean lifestyle, high quality international universities, 50% automatic entry scholarships, and seamless admission requirements.",
    capital: "Nicosia",
    popularCities: ["Nicosia", "Famagusta", "Kyrenia"],
    currency: "Euro (€) / Turkish Lira (TRY)",
    livingCostMonthly: "$350 - $500",
    tuitionRange: "$3,000 - $7,000 / year (after scholarship)",
    partTimeWork: "20 hrs/week allowed",
    medicalFocus: true,
    whyStudy: ["50% automatic scholarships for international applicants", "No complex IELTS requirements for pathway options", "Pleasant Mediterranean climate"],
    requirements: ["High School Certificate", "Passport", "Bank statement"],
    visaGuidance: "Simplified student visa procedure upon acceptance.",
    sourceLink: "https://highereducation.gov.cy/",
    lastVerified: "Sep 2026"
  },
  {
    id: "south-cyprus",
    name: "South Cyprus",
    shortName: "South Cyprus",
    flag: "🇨🇾",
    flagCode: "cy",
    flagSvg: "/flags/cy.svg",
    region: "Europe",
    isSpecialFeature: false,
    tagline: "EU Member Republic of Cyprus with World-Class Higher Education",
    heroImage: "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?auto=format&fit=crop&w=1200&q=80",
    overview: "South Cyprus (Republic of Cyprus) is a full European Union member offering internationally accredited medical, business, and tech universities with English instruction and European transfer pathways.",
    capital: "Nicosia",
    popularCities: ["Nicosia", "Limassol", "Larnaca", "Paphos"],
    currency: "Euro (€)",
    livingCostMonthly: "€600 - €900",
    tuitionRange: "€4,000 - €9,000 / year",
    partTimeWork: "20 hrs/week allowed for international students",
    medicalFocus: true,
    whyStudy: [
      "European Union recognized degrees and diplomas",
      "Direct pathway to EU work and postgraduate options",
      "Sunny Mediterranean climate and safe student cities"
    ],
    requirements: ["High School Certificate", "Passport", "Police clearance report"],
    visaGuidance: "Entry permit issued via Migration Department of the Republic of Cyprus.",
    sourceLink: "https://highereducation.gov.cy/",
    lastVerified: "Sep 2026"
  },
  {
    id: "turkey",
    name: "Turkey",
    shortName: "Turkey",
    flag: "🇹🇷",
    flagCode: "tr",
    flagSvg: "/flags/tr.svg",
    region: "Europe / Asia",
    isSpecialFeature: false,
    tagline: "Bridge Between Continents with Top-Tier Medical & Business Schools",
    heroImage: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1200&q=80",
    overview: "Turkey features modern state and private universities offering English-medium programs in Medicine, Engineering, Architecture, and Business in Istanbul and Ankara.",
    capital: "Ankara",
    popularCities: ["Istanbul", "Ankara", "Izmir"],
    currency: "Turkish Lira (TRY) / USD",
    livingCostMonthly: "$300 - $500",
    tuitionRange: "$3,500 - $12,000 / year",
    partTimeWork: "Permitted for postgraduate students",
    medicalFocus: true,
    whyStudy: ["High quality medical training", "Vibrant multicultural cities", "Turkiye Burslari Scholarships available"],
    requirements: ["High School Certificate / Bachelor Degree", "Passport", "Language test or university foundation test"],
    visaGuidance: "Student residence permit issued post-arrival after student visa entry.",
    sourceLink: "https://www.yok.gov.tr/",
    lastVerified: "Sep 2026"
  }
]

export const CITIES = [
  {
    id: "bishkek",
    countryId: "kyrgyzstan",
    countryName: "Kyrgyzstan",
    name: "Bishkek",
    heroImage: "https://images.unsplash.com/photo-1578637387939-43c525550085?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1578637387939-43c525550085?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?auto=format&fit=crop&w=800&q=80"
    ],
    overview: "Bishkek is the capital and largest city of Kyrgyzstan, situated against the breathtaking backdrop of the Ala-Too mountain range. Known for wide green boulevards, vibrant cafe culture, affordable hostels, and renowned medical universities.",
    population: "1.1 Million",
    climate: "Continental (Warm Summers, Snow-dusted Winters: -5°C to 30°C)",
    studentLife: "Bishkek hosts over 15,000 international medical and engineering students. Highly student-friendly with affordable public transport, traditional & halal food options, modern shopping malls (Bishkek Park, Dordoi Plaza), and safe student neighborhoods.",
    attractions: [
      "Ala-Too Square & State History Museum",
      "Ala-Archa National Park (30 mins from city)",
      "Bishkek Park Shopping Mall & Dordoi Bazaar",
      "Oak Park & Bishkek Opera Theater"
    ],
    universitiesInCity: ["Kyrgyz State Medical Academy (KSMU)", "International School of Medicine (ISM)", "American University of Central Asia (AUCA)", "Asian Medical Institute (ASMI)"]
  },
  {
    id: "tashkent",
    countryId: "uzbekistan",
    countryName: "Uzbekistan",
    name: "Tashkent",
    heroImage: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=800&q=80"
    ],
    overview: "Tashkent is the modern, fast-growing capital of Uzbekistan. It boasts grand Soviet-era architecture, modern glass skyscrapers, world-class metro networks, and premier medical and IT academies.",
    population: "2.9 Million",
    climate: "Subtropical Continental",
    studentLife: "Vibrant capital life with cheap living costs, high-tech student hubs, and rich Uzbek hospitality.",
    attractions: ["Chorsu Bazaar", "Tashkent Metro", "Hazrati Imam Complex", "Tashkent City Park"],
    universitiesInCity: ["Tashkent Medical Academy", "Tashkent State Technical University", "Inha University in Tashkent"]
  },
  {
    id: "samarkand",
    countryId: "uzbekistan",
    countryName: "Uzbekistan",
    name: "Samarkand",
    heroImage: "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?auto=format&fit=crop&w=800&q=80"
    ],
    overview: "Samarkand is one of the oldest inhabited cities in Central Asia and a UNESCO World Heritage site famous for Registan Square, tile work, and Samarkand State Medical University.",
    population: "550,000",
    climate: "Mediterranean Influenced Semi-Arid",
    studentLife: "Historic atmosphere with tranquil studying environment and friendly local community.",
    attractions: ["Registan Square", "Bibi-Khanym Mosque", "Gur-e-Amir Mausoleum"],
    universitiesInCity: ["Samarkand State Medical University", "Samarkand State University"]
  },
  {
    id: "bukhara",
    countryId: "uzbekistan",
    countryName: "Uzbekistan",
    name: "Bukhara",
    heroImage: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=800&q=80"
    ],
    overview: "Bukhara is a historic city-museum with over 140 architectural monuments and ancient Islamic heritage, hosting Bukhara State Medical Institute.",
    population: "280,000",
    climate: "Dry Continental",
    studentLife: "Serene student atmosphere focused on intensive medical study.",
    attractions: ["Po-i-Kalyan Complex", "Ark of Bukhara", "Chor Minor"],
    universitiesInCity: ["Bukhara State Medical Institute"]
  }
]

export const UNIVERSITIES = [
  {
    id: "ksmu-kyrgyzstan",
    name: "Kyrgyz State Medical Academy (KSMA / KSMU)",
    logo: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=200&q=80",
    heroImage: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80",
    countryId: "kyrgyzstan",
    countryName: "Kyrgyzstan",
    city: "Bishkek",
    established: "1939",
    type: "Public Medical University",
    ranking: "#1 Medical Academy in Kyrgyzstan",
    medicalFocus: true,
    tuitionFee: "$4,500 / year",
    hostelFee: "$600 - $800 / year",
    applicationFee: "$100",
    duration: "5 Years + 1 Year Clinical Internship",
    degreeAwarded: "MD / MBBS (Doctor of Medicine)",
    eligibility: "Minimum 60% marks in FSc Pre-Medical (Physics, Chemistry, Biology)",
    intakeDates: "September & February Intakes",
    officialWebsite: "https://www.kgma.kg/en",
    lastVerified: "Sep 2026",
    overview: "Kyrgyz State Medical Academy (KSMU) is the flagship public medical university of Kyrgyzstan with over 85 years of medical training excellence. Recognized worldwide by WHO, WFME, WDOMS, ECFMG, and medical councils across Asia, Europe, and America.",
    photos: [
      "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=800&q=80"
    ],
    programs: [
      { name: "General Medicine (MBBS / MD)", duration: "5+1 Years", fee: "$4,500/yr", language: "English" },
      { name: "Dentistry (BDS)", duration: "5 Years", fee: "$4,200/yr", language: "English" },
      { name: "Pharmacy", duration: "4 Years", fee: "$3,800/yr", language: "English" },
      { name: "Pediatrics", duration: "5 Years", fee: "$4,000/yr", language: "Russian/English" }
    ],
    requiredDocuments: [
      "Attested SSC & HSSC (FSc) Marksheets",
      "Valid Passport (2+ years validity)",
      "Medical & HIV Negative Certificate",
      "NOC / Police Verification Certificate",
      "8 Passport Photos"
    ],
    internationalStudentInfo: "KSMU hosts over 4,000 international students. Hostels provide furnished rooms, security, central heating, internet, and dedicated Pakistani mess serving authentic halal food.",
    accreditationNotice: "Note: Students must verify country-specific medical licensing regulations (such as NLE/PMC/PMDC in Pakistan or USMLE in USA) with their local medical authorities."
  },
  {
    id: "ism-kyrgyzstan",
    name: "International School of Medicine (ISM)",
    logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=200&q=80",
    heroImage: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1200&q=80",
    countryId: "kyrgyzstan",
    countryName: "Kyrgyzstan",
    city: "Bishkek",
    established: "2003",
    type: "Private International Medical Institution",
    ranking: "Top English-Medium Medical School in Central Asia",
    medicalFocus: true,
    tuitionFee: "$4,200 / year",
    hostelFee: "$700 / year",
    applicationFee: "$100",
    duration: "5 Years + 1 Year Internship",
    degreeAwarded: "MD (MBBS Equivalent)",
    eligibility: "Minimum 50% - 55% in FSc Pre-Medical",
    intakeDates: "September & March Intakes",
    officialWebsite: "https://ism.edu.kg/",
    lastVerified: "Sep 2026",
    overview: "International School of Medicine (ISM) is specifically built for international students with a 100% English medium curriculum, modern simulation centers, high-tech hospital rotations, and excellent licensing exam preparation (USMLE, NLE, PLAB).",
    photos: [
      "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80"
    ],
    programs: [
      { name: "Doctor of Medicine (MD / MBBS)", duration: "5 Years", fee: "$4,200/yr", language: "English" },
      { name: "Postgraduate Medical Specializations", duration: "3 Years", fee: "$5,000/yr", language: "English" }
    ],
    requiredDocuments: [
      "FSc Pre-Medical Certificate & Result Card",
      "Passport Copy",
      "Medical Fitness Report",
      "6 Passport Photographs"
    ],
    internationalStudentInfo: "ISM features state-of-the-art campus buildings across Bishkek with full-facility international hostels, student support cells, and sports complexes."
  },
  {
    id: "tashkent-med-uzb",
    name: "Tashkent Medical Academy",
    logo: "/images/tashkent-medical-academy.jpg",
    heroImage: "/images/tashkent-medical-academy.jpg",
    countryId: "uzbekistan",
    countryName: "Uzbekistan",
    city: "Tashkent",
    established: "1919 / 2005",
    type: "Public Medical University",
    ranking: "#1 University in Uzbekistan",
    medicalFocus: true,
    tuitionFee: "$3,800 / year",
    hostelFee: "$500 / year",
    applicationFee: "$50",
    duration: "6 Years (Including Internship)",
    degreeAwarded: "MD / MBBS",
    eligibility: "FSc Pre-Medical 55%+ marks",
    intakeDates: "September Intake",
    officialWebsite: "https://tma.uz/en/",
    lastVerified: "Sep 2026",
    overview: "Tashkent Medical Academy is the primary medical higher education institute in Uzbekistan, offering comprehensive clinical training across multiple affiliated tertiary hospitals in Tashkent.",
    photos: [
      "/images/tashkent-medical-academy.jpg"
    ],
    programs: [
      { name: "General Medicine", duration: "6 Years", fee: "$3,800/yr", language: "English" },
      { name: "Preventive Medicine", duration: "5 Years", fee: "$3,400/yr", language: "English" }
    ],
    requiredDocuments: ["High School Certificate", "Passport", "Medical Certificates"],
    internationalStudentInfo: "Extensive campus facilities, affordable government hostelling, and modern research laboratories."
  },
  {
    id: "tum-germany",
    name: "Technical University of Munich (TUM)",
    logo: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80",
    heroImage: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1200&q=80",
    countryId: "germany",
    countryName: "Germany",
    city: "Munich",
    established: "1868",
    type: "Public Research University",
    ranking: "#1 Technical University in Germany",
    medicalFocus: false,
    tuitionFee: "€0 - €3,000 / year (No Tuition Fee for standard state tracks)",
    hostelFee: "€350 - €600 / month",
    applicationFee: "€75 (Uni-Assist)",
    duration: "3 Years (B.Sc) / 2 Years (M.Sc)",
    degreeAwarded: "Bachelor / Master of Science",
    eligibility: "Studienkolleg or 1 year B.Sc completion + IELTS 6.5+",
    intakeDates: "October (Winter) & April (Summer)",
    officialWebsite: "https://www.tum.de/en/",
    lastVerified: "Sep 2026",
    overview: "TUM is one of Europe's top universities, world-renowned for Engineering, Computer Science, Artificial Intelligence, and Natural Sciences with strong industry links to BMW, Siemens, and SAP.",
    photos: [
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80"
    ],
    programs: [
      { name: "M.Sc Computer Science / AI", duration: "2 Years", fee: "€0 tuition", language: "English" },
      { name: "M.Sc Automotive Engineering", duration: "2 Years", fee: "€0 tuition", language: "English" },
      { name: "B.Sc Information Engineering", duration: "3 Years", fee: "€0 tuition", language: "English" }
    ],
    requiredDocuments: ["Bachelor Degree transcript", "IELTS 6.5+ / TOEFL 88", "GRE (for selected tracks)", "Statement of Purpose"],
    internationalStudentInfo: "World class labs, high job placement rates, and 18-month German post-study work visa."
  }
]

export const PHD_PROGRAMS = [
  {
    id: "phd-cs-ai",
    title: "PhD in Artificial Intelligence & Machine Learning",
    field: "Computer Science & Engineering",
    country: "Germany",
    university: "Technical University of Munich",
    duration: "3 - 4 Years",
    funding: "Fully Funded (Monthly Stipend ~€1,800 - €2,200)",
    ieltsRequirement: "IELTS 6.5 / TOEFL 90",
    requirements: "Master's degree in CS/Data Science/Math with research thesis",
    supervisorWorkflow: "Direct supervisor match & research proposal review through ED-WISE placement portal",
    deadline: "Rolling / Nov 30 & May 31"
  },
  {
    id: "phd-medicine-health",
    title: "Doctoral Research (PhD) in Clinical Medicine & Molecular Biology",
    field: "Medical & Health Sciences",
    country: "Kyrgyzstan",
    university: "Kyrgyz State Medical Academy",
    duration: "3 Years",
    funding: "Partial Grant & Research Assistantship",
    ieltsRequirement: "MOI / IELTS 6.0",
    requirements: "MD / MBBS or M.Sc Bio-Medical Sciences",
    supervisorWorkflow: "Faculty approval of research synopsis and hospital clinical trial protocol",
    deadline: "August 15"
  },
  {
    id: "phd-renewables",
    title: "PhD in Sustainable Energy & Green Engineering",
    field: "Engineering & Natural Sciences",
    country: "United Kingdom",
    university: "University of Oxford",
    duration: "3 - 4 Years",
    funding: "EPSRC & Commonwealth Fully Funded Scholarship",
    ieltsRequirement: "IELTS 7.5",
    requirements: "1st Class Master's or High 2:1 UK Equivalent",
    supervisorWorkflow: "Pre-application research proposal draft & supervisor acceptance letter required",
    deadline: "January 15"
  }
]

export const SCHOLARSHIPS = [
  {
    id: "central-asia-excellence",
    name: "ED-WISE Central Asia MBBS Merit Grant",
    offeredBy: "ED-WISE CONSULTANCY Partner Universities",
    destinations: ["Kyrgyzstan", "Uzbekistan", "Kazakhstan"],
    coverage: "Up to $1,500 Tuition Fee Discount / year",
    eligibility: "Students scoring 75%+ in FSc Pre-Medical",
    deadline: "October 30, 2026",
    applyProcess: "Submit application through ED-WISE Portal with high school transcripts."
  },
  {
    id: "cyprus-50-grant",
    name: "Mediterranean 50% Direct Tuition Scholarship",
    offeredBy: "Cyprus International Universities",
    destinations: ["Cyprus / North Cyprus"],
    coverage: "50% Discount on all Undergraduate & Master Tuitions",
    eligibility: "Open to all qualified international applicants upon acceptance",
    deadline: "Open All Year",
    applyProcess: "Automatic assessment upon submitting ED-WISE application."
  },
  {
    id: "daad-germany",
    name: "DAAD Postgraduate Study Scholarships",
    offeredBy: "German Academic Exchange Service",
    destinations: ["Germany"],
    coverage: "100% Tuition + €934 Monthly Stipend + Travel & Insurance",
    eligibility: "Bachelor's degree with 2 years professional experience",
    deadline: "September - November annually",
    applyProcess: "Submit research proposal and academic credentials through DAAD portal."
  }
]

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Ayesha Khan",
    country: "Pakistan",
    destination: "Kyrgyzstan (KSMU)",
    program: "MBBS / MD (3rd Year)",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    quote: "ED-WISE CONSULTANCY guided me from university selection to visa approval and hostel allotment in Bishkek. The MBBS quality at KSMU is exceptional, and living in Bishkek is very comfortable for Pakistani students."
  },
  {
    id: 2,
    name: "Ahmed Raza",
    country: "Pakistan",
    destination: "Uzbekistan (Tashkent Medical Academy)",
    program: "General Medicine (2nd Year)",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    quote: "Dr. Ahmed Bilal and the ED-WISE team provided genuine, verified advice regarding tuition costs and recognition. Everything promised was 100% accurate."
  },
  {
    id: 3,
    name: "Sara Ali",
    country: "UAE / International",
    destination: "Germany (TUM)",
    program: "M.Sc Computer Science",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    quote: "The free tuition in Germany seemed too good to be true until ED-WISE prepared my uni-assist and blocked account application smoothly. Highly recommended!"
  }
]

export const FAQS = [
  {
    question: "Why is Kyrgyzstan & Uzbekistan so popular for MBBS / Medical study?",
    answer: "Kyrgyzstan and Uzbekistan offer WHO/WFME recognized 5-6 year MD/MBBS programs in 100% English medium at a fraction of Western costs ($3,000-$5,000 per year). Living expenses are low ($200-$350/mo), safe, and Pakistani/international student communities are well-established."
  },
  {
    question: "Is the Medical degree from Central Asia recognized in Pakistan and internationally?",
    answer: "Yes, top institutions like Kyrgyz State Medical Academy (KSMU), International School of Medicine (ISM), and Tashkent Medical Academy are listed on WDOMS (World Directory of Medical Schools). Graduates are eligible to appear in licensing exams such as NLE/PMC in Pakistan, USMLE in the USA, PLAB in the UK, and AMC in Australia."
  },
  {
    question: "How do I apply through ED-WISE CONSULTANCY?",
    answer: "Click 'Apply Now' on our website, fill out your academic details (FSc / High School marks, passport copy), and select your desired country and university. Our head office in Bishkek and regional counselors will review your documents, issue your admission letter, and process your visa invitation."
  },
  {
    question: "Are tuition fees paid directly to the university?",
    answer: "Yes! ED-WISE CONSULTANCY follows strict transparency: all tuition fees are paid directly to the official university bank account or university fee counter upon arrival. There are zero hidden fees."
  }
]
