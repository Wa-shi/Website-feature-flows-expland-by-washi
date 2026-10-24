/**
 * BAS Website - Main Application Script (Course 953104 Term Project)
 * Technology Stack: Pure Vanilla JavaScript (ES6)
 * Strict Constraints: No external libraries, no fetch(), no localStorage, no external APIs.
 * Architecture: Clean, modular, easily explainable for the individual paper defense exam.
 */

"use strict";

/* ==========================================================================
   0. BILINGUAL LOCALIZATION DICTIONARY (Pure Vanilla JS - In-Memory)
   Centralized content dictionary for easy maintenance (Course 953104)
   ========================================================================== */
let currentLang = "en"; // Default: English on initial load ("en" | "th")

const translations = {
  th: {
    // Navigation
    "nav.home": "หน้าแรก",
    "nav.about": "เกี่ยวกับเรา",
    "nav.services": "บริการ",
    "nav.projects": "ผลงานโครงการ",
    "nav.contact": "ติดต่อเรา",
    "nav.cta": "ขอนัดหมายสำรวจ",
    "nav.themeToggle": "สลับธีม สว่าง/มืด",
    "nav.cursorToggle": "เปิด/ปิด วงแหวนเมาส์ (กด C)",
    // Hero
    "hero.tag": "Smart Building & Energy Solutions",
    "hero.desc": "เพื่อความปลอดภัย พร้อมรักษาสิ่งแวดล้อม และพลังงานที่ยั่งยืน บริษัท บิวดิ้ง แอดวานซด์ โซลูชั่น จำกัด (BAS) ผู้นำด้านระบบควบคุมอัตโนมัติภายในอาคาร ระบบปรับอากาศ HVAC และระบบรักษาความปลอดภัยอัจฉริยะครบวงจร",
    "hero.btnServices": "ดูบริการของเรา",
    "hero.btnContact": "ปรึกษาวิศวกร",
    "hero.cardTitle": "หัวใจสำคัญของการบริการ",
    "hero.hl1": "นำเข้าและติดตั้งเทคโนโลยีที่ทันสมัยสูงสุดระดับสากล",
    "hero.hl2": "ทีมวิศวกรผู้เชี่ยวชาญได้รับใบรับรองจาก Johnson Controls",
    "hero.hl3": "สต็อกอะไหล่สำรองมูลค่ากว่า 5 ล้านบาท พร้อมบริการ 24 ชม.",
    // About
    "about.tag": "เกี่ยวกับ BAS",
    "about.title": "มุ่งสู่ความเป็นเลิศในงานวิศวกรรมอาคารอัจฉริยะ",
    "about.desc1": "บริษัท บิวดิ้ง แอดวานซด์ โซลูชั่น จำกัด หรือ “BAS” ก่อตั้งขึ้นเมื่อวันที่ 21 กันยายน 2554 ด้วยทุนจดทะเบียน 15 ล้านบาท โดยมีเป้าหมายว่า เรามุ่งสู่บริษัทที่มีคุณภาพและการบริการที่ดีที่สุดในการจัดจำหน่ายและติดตั้งอุปกรณ์ในงานวิศวกรรม",
    "about.desc2": "BAS เป็นตัวแทนจำหน่ายอย่างเป็นทางการของกลุ่มบริษัทชั้นนำระดับโลก เช่น Johnson Controls, Hikvision, Tyco, Eaton เรามีทีมวิศวกรเฉพาะทางพร้อมดูแลตั้งแต่วิเคราะห์ความต้องการ ออกแบบ ติดตั้ง จนถึงบริการหลังการขาย",
    "about.statExp": "ปีแห่งประสบการณ์",
    "about.statProj": "โครงการขนาดใหญ่สำเร็จ",
    "about.statSat": "ความพึงพอใจของลูกค้า",
    // Partners
    "partners.label": "พันธมิตรทางเทคโนโลยีระดับสากลที่ร่วมงานกับ BAS",
    // Services
    "services.tag": "ระบบและบริการ",
    "services.title": "บริการของเรา",
    "services.subtitle": "บริการครอบคลุมทั้งอาคารสำนักงานและโรงงานอุตสาหกรรม เสริมความปลอดภัย เพิ่มประสิทธิภาพการประหยัดพลังงาน",
    "services.filterAll": "ทั้งหมด",
    "services.filterOffice": "สำนักงานและอาคาร",
    "services.filterFactory": "โรงงานอุตสาหกรรม",
    "services.searchLabel": "ค้นหาบริการ",
    "services.searchPlaceholder": "ค้นหาบริการ (กด / เพื่อค้นหา)...",
    "services.sortLabel": "จัดเรียงตาม",
    "services.sortAsc": "ชื่อบริการ (ก - ฮ)",
    "services.sortDesc": "ชื่อบริการ (ฮ - ก)",
    "services.noResults": "ไม่พบรายการบริการที่ตรงกับเงื่อนไขการค้นหาของคุณ",
    "services.expandShowMore": "ดูบริการทั้งหมด (16 รายการ)",
    "services.expandShowLess": "ย่อบริการ",
    "services.btnSelect": "+ สนใจระบบนี้",
    "services.btnSelected": "✔ เลือกแล้ว",
    "services.btnDetails": "ดูรายละเอียด",
    "services.btnDelete": "ลบรายการนี้",
    "services.badgeFeatured": "บริการแนะนำ",
    "services.badgeCustom": "รายการเสนอเพิ่มเติม",
    // Projects
    "projects.tag": "ผลงานคุณภาพ",
    "projects.title": "โครงการที่ได้รับความไว้วางใจ",
    "projects.subtitle": "เราส่งมอบโครงการคุณภาพสูงแก่องค์กรชั้นนำระดับประเทศ ด้วยมาตรฐานและใบรับรองทางวิศวกรรมระดับสากล",
    "projects.downloadPdf": "ดาวน์โหลดเอกสารผลงานโครงการ (Company Profile & Projects Reference PDF)",
    // Contact
    "contact.tag": "ติดต่อเรา",
    "contact.title": "ปรึกษาเราเพื่ออนาคตของอาคารคุณ",
    "contact.lead": "ยินดีให้คำปรึกษาและสำรวจหน้างานโดยทีมวิศวกรผู้เชี่ยวชาญ พร้อมประเมินความคุ้มค่าและประสิทธิภาพพลังงาน",
    "contact.officeTag": "สำนักงาน",
    "contact.companyName": "บริษัท บิวดิ้ง แอดวานซด์ โซลูชั่น จำกัด",
    "contact.companyAddress": "2/1 ซอยนนทบุรี 14 แยก 4 ตำบลบางกระสอ อำเภอเมืองนนทบุรี จังหวัดนนทบุรี 11000",
    "contact.formTitle": "แบบฟอร์มนัดหมายสำรวจหน้างาน / ขอใบเสนอราคา",
    "contact.formSubtitle": "กรุณากรอกข้อมูลให้ครบถ้วน วิศวกรจะติดต่อกลับภายใน 24 ชั่วโมง",
    "contact.selectedTitle": "ระบบที่คุณสนใจขอใบเสนอราคา",
    "contact.selectedHint": "คลิกที่ป้ายเพื่อยกเลิกรายการ",
    "contact.nameLabel": "ชื่อผู้ติดต่อ / บริษัท",
    "contact.namePlaceholder": "เช่น บจก. พัฒนาอสังหาริมทรัพย์ หรือ วิชัย ใจดี",
    "contact.phoneLabel": "เบอร์โทรศัพท์ติดต่อ",
    "contact.phonePlaceholder": "เช่น 0812345678 (อย่างน้อย 9-10 หลัก)",
    "contact.serviceLabel": "ระบบงานที่ต้องการปรึกษา",
    "contact.optDefault": "-- กรุณาเลือกระบบงานที่ต้องการ --",
    "contact.optOther": "ระบบอื่นๆ / วางแผนทั้งอาคาร",
    "contact.notesLabel": "รายละเอียดสถานที่หรือข้อความเพิ่มเติม",
    "contact.notesPlaceholder": "เช่น ขนาดอาคาร 5 ชั้น, พื้นที่กรุงเทพฯ, ต้องการเปลี่ยนระบบเดิม",
    "contact.submitBtn": "ส่งข้อมูลขอนัดหมายสำรวจหน้างาน",
    // Footer & Dialog
    "footer.desc": "ผู้นำการจัดจำหน่าย ออกแบบ และติดตั้งระบบวิศวกรรมอาคารอัจฉริยะ ประหยัดพลังงาน และเพิ่มความปลอดภัยระดับมาตรฐานสากล",
    "footer.quickLinks": "ลิงก์ด่วน",
    "footer.academicTitle": "ข้อมูลโครงงานการศึกษา",
    "footer.academicText": "เว็บไซต์นี้พัฒนาขึ้นสำหรับการเรียนการสอนวิชา 953104 Web User Interface Design and Development ภาคเรียนที่ 1/2026 มหาวิทยาลัยเชียงใหม่",
    "footer.academicMeta": "พัฒนาด้วย Pure HTML5, CSS3 และ Vanilla ES6 JavaScript (No Libraries / No Server)",
    "footer.copyright": "© 2026 Building Advanced Solution Co., Ltd. All Rights Reserved. | พัฒนาเพื่อการศึกษา วิชา 953104",
    "dialog.title": "รายละเอียดบริการ",
    "dialog.close": "ปิดหน้าต่าง (Esc)"
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.services": "Services",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "nav.cta": "Schedule Survey",
    "nav.themeToggle": "Toggle Dark/Light Theme",
    "nav.cursorToggle": "Toggle Cursor Effect (Press C)",
    // Hero
    "hero.tag": "Smart Building & Energy Solutions",
    "hero.desc": "For safety, environmental sustainability, and reliable energy management. Building Advanced Solution Co., Ltd. (BAS) is a leading provider of Building Automation, HVAC, and Smart Security solutions.",
    "hero.btnServices": "Our Services",
    "hero.btnContact": "Consult Engineers",
    "hero.cardTitle": "Core Service Strengths",
    "hero.hl1": "Importing and deploying world-class, cutting-edge building technologies.",
    "hero.hl2": "Specialized engineering team certified by Johnson Controls.",
    "hero.hl3": "Over 5M THB in reserved spare parts inventory ready 24/7.",
    // About
    "about.tag": "About BAS",
    "about.title": "Striving for Excellence in Smart Building Engineering",
    "about.desc1": "Building Advanced Solution Co., Ltd., called “BAS”, was founded on September 21, 2011, with registered capital of 15 million baht. We strive to provide the best quality and service in engineering equipment distribution and installation.",
    "about.desc2": "BAS is an authorized distributor of world-leading brands including Johnson Controls, Hikvision, Tyco, and Eaton. Our dedicated engineers manage requirements, design, installation, and after-sales service.",
    "about.statExp": "Years Experience",
    "about.statProj": "Major Projects Completed",
    "about.statSat": "Client Satisfaction",
    // Partners
    "partners.label": "International Technology Partners Working with BAS",
    // Services
    "services.tag": "Systems & Solutions",
    "services.title": "Our Services",
    "services.subtitle": "Comprehensive engineering solutions for office buildings and industrial factories, enhancing safety and energy efficiency.",
    "services.filterAll": "All",
    "services.filterOffice": "Office & Commercial",
    "services.filterFactory": "Industrial Plants",
    "services.searchLabel": "Search Services",
    "services.searchPlaceholder": "Search services (press / to focus)...",
    "services.sortLabel": "Sort by",
    "services.sortAsc": "Service Name (A - Z)",
    "services.sortDesc": "Service Name (Z - A)",
    "services.noResults": "No services found matching your criteria.",
    "services.expandShowMore": "Show All Services (16 items)",
    "services.expandShowLess": "Collapse Services",
    "services.btnSelect": "+ Interested",
    "services.btnSelected": "✔ Selected",
    "services.btnDetails": "View Details",
    "services.btnDelete": "Delete Item",
    "services.badgeFeatured": "Featured",
    "services.badgeCustom": "Custom Inquiry",
    // Projects
    "projects.tag": "Featured Projects",
    "projects.title": "Trusted by Industry Leaders",
    "projects.subtitle": "Delivering high-standard engineering projects to premier organizations with international certifications.",
    "projects.downloadPdf": "Download Company Profile & Projects Reference (PDF)",
    // Contact
    "contact.tag": "Contact Us",
    "contact.title": "Consult with Us for the Future of Your Building",
    "contact.lead": "Our certified engineers provide on-site surveys, energy audits, and feasibility evaluations.",
    "contact.officeTag": "Office",
    "contact.companyName": "Building Advanced Solution Co., Ltd.",
    "contact.companyAddress": "2/1 Soi Nonthaburi 14, Intersection 4, Bang Krasor, Mueang Nonthaburi, Thailand 11000",
    "contact.formTitle": "On-Site Survey & Quotation Request",
    "contact.formSubtitle": "Please fill out the information. Our engineers will contact you within 24 hours.",
    "contact.selectedTitle": "Selected Systems for Quotation",
    "contact.selectedHint": "Click badge to remove item",
    "contact.nameLabel": "Contact Name / Company",
    "contact.namePlaceholder": "e.g. Acme Corporation or John Smith",
    "contact.phoneLabel": "Phone Number",
    "contact.phonePlaceholder": "e.g. 0812345678 (at least 9-10 digits)",
    "contact.serviceLabel": "System of Interest",
    "contact.optDefault": "-- Please select a system --",
    "contact.optOther": "Other Systems / Full Building Planning",
    "contact.notesLabel": "Site Details & Additional Notes",
    "contact.notesPlaceholder": "e.g. 5-storey building, Bangkok area, upgrading existing system",
    "contact.submitBtn": "Submit Survey & Quotation Request",
    // Footer & Dialog
    "footer.desc": "Leading distributor, designer, and installer of smart building automation, energy saving, and international-standard safety systems.",
    "footer.quickLinks": "Quick Links",
    "footer.academicTitle": "Academic Project Info",
    "footer.academicText": "This website is developed for 953104 Web User Interface Design and Development, Semester 1/2026, Chiang Mai University.",
    "footer.academicMeta": "Built with Pure HTML5, CSS3, and Vanilla ES6 JavaScript (No Libraries / No Server).",
    "footer.copyright": "© 2026 Building Advanced Solution Co., Ltd. All Rights Reserved. | Course 953104 Educational Project",
    "dialog.title": "Service Details",
    "dialog.close": "Close Window (Esc)"
  }
};

/* ==========================================================================
   1. IN-MEMORY DATA ARRAY (Feature 3: >= 6 items, >= 3 properties each)
   Real Data from Target User: Building Advanced Solution Co., Ltd. (BAS)
   ========================================================================== */
let servicesData = [
  {
    id: 1,
    title: "Building Management System (BMS)",
    titleEn: "Building Management System (BMS)",
    category: "office",
    categoryName: "สำนักงานและอาคาร",
    categoryNameEn: "Office & Building",
    description: "ระบบควบคุมอัตโนมัติที่ช่วยจัดการส่วนต่างๆ ของอาคาร เช่น ระบบปรับอากาศ ระบบแสงสว่าง และระบบความปลอดภัย เพื่อความปลอดภัยและประหยัดพลังงานสูงสุด",
    descriptionEn: "Automated central system that controls and monitors HVAC, lighting, and security systems to optimize safety and energy efficiency.",
    image: "images/services/BAS.webp",
    isFeatured: true,
    isSelected: false,
    isCustom: false
  },
  {
    id: 2,
    title: "Retail Management System (RMS)",
    titleEn: "Retail Management System (RMS)",
    category: "office",
    categoryName: "สำนักงานและอาคาร",
    categoryNameEn: "Office & Building",
    description: "ออกแบบสำหรับธุรกิจค้าปลีก เพื่อบริหารการขายและสินค้าคงคลัง รองรับ SKU ปริมาณมากและเชื่อมต่อหลายจุด ทำงานแบบ Stand-alone หรือ Client/Server",
    descriptionEn: "Engineered for retail chains to manage sales and inventory across high SKU counts, operating in stand-alone or client/server modes.",
    image: "images/services/RMS.webp",
    isFeatured: false,
    isSelected: false,
    isCustom: false
  },
  {
    id: 3,
    title: "Chiller Plant Management System",
    titleEn: "Chiller Plant Management System",
    category: "factory",
    categoryName: "โรงงานอุตสาหกรรม",
    categoryNameEn: "Industrial Plants",
    description: "ใช้สำหรับควบคุมการทำงานของอุปกรณ์ทำความเย็นขนาดใหญ่ สามารถควบคุมได้ผ่านคอมพิวเตอร์เพื่อเพิ่มประสิทธิภาพการใช้พลังงานในระดับสูงสุด",
    descriptionEn: "Controls and optimizes large-scale industrial chiller operations via computer interfaces to maximize thermodynamic efficiency.",
    image: "images/services/ChillerPlant.webp",
    isFeatured: true,
    isSelected: false,
    isCustom: false
  },
  {
    id: 4,
    title: "Intelligent Lighting System",
    titleEn: "Intelligent Lighting System",
    category: "factory",
    categoryName: "โรงงานอุตสาหกรรม",
    categoryNameEn: "Industrial Plants",
    description: "ระบบควบคุมแสงสว่างอัจฉริยะที่เชื่อมโยงกับเซนเซอร์ตรวจจับ ช่วยควบคุมแสงสว่างทั้งภายในและภายนอกอาคารเพื่อความสะดวกสบายและลดต้นทุนค่าไฟฟ้า",
    descriptionEn: "Smart lighting automated with motion and daylight sensors, controlling internal and exterior fixtures to minimize electricity costs.",
    image: "images/services/light.webp",
    isFeatured: true,
    isSelected: false,
    isCustom: false
  },
  {
    id: 5,
    title: "Variable Speed Drive (VSD)",
    titleEn: "Variable Speed Drive (VSD)",
    category: "factory",
    categoryName: "โรงงานอุตสาหกรรม",
    categoryNameEn: "Industrial Plants",
    description: "อุปกรณ์ควบคุมความเร็วรอบของมอเตอร์ให้เหมาะสมกับโหลด ช่วยเพิ่มประสิทธิภาพในกระบวนการผลิตและยืดอายุการใช้งานของเครื่องจักรในโรงงาน",
    descriptionEn: "Adjusts motor rotational speeds according to real-time load requirements, extending industrial equipment lifespan and cutting energy use.",
    image: "images/services/Variable-Speed-Drive.webp",
    isFeatured: false,
    isSelected: false,
    isCustom: false
  },
  {
    id: 6,
    title: "PICV Pressure Independent Valve",
    titleEn: "PICV Pressure Independent Valve",
    category: "factory",
    categoryName: "โรงงานอุตสาหกรรม",
    categoryNameEn: "Industrial Plants",
    description: "วาล์วควบคุมแรงดันอิสระที่ใช้ในระบบควบคุมอุณหภูมิในอาคาร ช่วยรักษาสมดุลแรงดันและเพิ่มประสิทธิภาพการประหยัดพลังงานในระบบปรับอากาศ Chiller",
    descriptionEn: "Pressure-independent control valves maintaining dynamic hydronic balance in HVAC chiller loops to conserve operating energy.",
    image: "images/services/PICV-Valve.webp",
    isFeatured: false,
    isSelected: false,
    isCustom: false
  },
  {
    id: 7,
    title: "Access Control System",
    titleEn: "Access Control System",
    category: "office",
    categoryName: "สำนักงานและอาคาร",
    categoryNameEn: "Office & Building",
    description: "ระบบควบคุมการเข้าออกอัตโนมัติ ออกแบบมาเพื่อจำกัดการเข้าถึงข้อมูลหรือพื้นที่หวงห้าม เพื่อการรักษาความปลอดภัยระดับสูงสุดในอาคารสำนักงาน",
    descriptionEn: "Automated entry management restricting access to authorized personnel, protecting confidential zones and corporate assets.",
    image: "images/services/Access-Control-System.webp",
    isFeatured: true,
    isSelected: false,
    isCustom: false
  },
  {
    id: 8,
    title: "CCTV Surveillance System",
    titleEn: "CCTV Surveillance System",
    category: "office",
    categoryName: "สำนักงานและอาคาร",
    categoryNameEn: "Office & Building",
    description: "ระบบกล้องวงจรปิดความคมชัดสูงเพื่อการตรวจสอบและรักษาความปลอดภัย ส่งสัญญาณภาพไปยังจอควบคุมแบบเรียลไทม์พร้อมระบบบันทึกอัจฉริยะ",
    descriptionEn: "High-definition security camera surveillance streaming real-time video to central control desks with intelligent NVR recording.",
    image: "images/services/cctv.webp",
    isFeatured: false,
    isSelected: false,
    isCustom: false
  },
  {
    id: 9,
    title: "Digital Door Lock System",
    titleEn: "Digital Door Lock System",
    category: "office",
    categoryName: "สำนักงานและอาคาร",
    categoryNameEn: "Office & Building",
    description: "กลอนประตูดิจิทัลอัจฉริยะที่สามารถเปิด-ปิดอัตโนมัติด้วยการยืนยันตัวตนหลากหลายรูปแบบ เช่น สแกนลายนิ้วมือ คีย์การ์ด รหัสผ่าน และสมาร์ตโฟน",
    descriptionEn: "Smart digital locks supporting biometric fingerprints, RFID keycards, PIN codes, and mobile credentials for secure entry.",
    image: "images/services/Digital-Door-Lock.webp",
    isFeatured: false,
    isSelected: false,
    isCustom: false
  },
  {
    id: 10,
    title: "Optical Turnstile System",
    titleEn: "Optical Turnstile System",
    category: "office",
    categoryName: "สำนักงานและอาคาร",
    categoryNameEn: "Office & Building",
    description: "เครื่องกั้นคนอัตโนมัติความเร็วสูง อนุญาตให้ผ่านเข้า-ออกได้ทีละคน ป้องกันการเข้าพื้นที่โดยไม่ได้รับอนุญาต และเชื่อมต่อกับระบบลงเวลาทำงาน",
    descriptionEn: "High-speed pedestrian optical turnstiles preventing tailgating and integrating seamlessly with building time-attendance systems.",
    image: "images/services/optical-turnstiles.webp",
    isFeatured: false,
    isSelected: false,
    isCustom: false
  },
  {
    id: 11,
    title: "Road Blocker และ Bollard",
    titleEn: "Road Blocker and Bollard",
    category: "office",
    categoryName: "สำนักงานและอาคาร",
    categoryNameEn: "Office & Building",
    description: "อุปกรณ์กั้นรถที่ออกแบบให้ทนทานต่อแรงชน เพื่อเพิ่มความปลอดภัยในพื้นที่สำคัญจากการโจมตีของยานพาหนะ",
    descriptionEn: "Vehicle blocking equipment designed to withstand impact, increasing safety in critical areas from vehicle attacks.",
    image: "images/services/Road-Blocker-and-Bollard.webp",
    isFeatured: false,
    isSelected: false,
    isCustom: false
  },
  {
    id: 12,
    title: "Smart Pole (เสาไฟอัจฉริยะ)",
    titleEn: "Smart Pole",
    category: "office",
    categoryName: "สำนักงานและอาคาร",
    categoryNameEn: "Office & Building",
    description: "เสาไฟอัจฉริยะที่ผสานเทคโนโลยีหลากหลาย เช่น กล้อง CCTV และระบบตรวจสอบสภาพอากาศ เพื่อเพิ่มคุณภาพชีวิตและความปลอดภัยของชุมชน",
    descriptionEn: "An intelligent street pole integrating multiple technologies such as CCTV cameras and weather monitoring systems to enhance safety in communities.",
    image: "images/services/smart pole.webp",
    isFeatured: false,
    isSelected: false,
    isCustom: false
  },
  {
    id: 13,
    title: "ระบบแจ้งเตือนอัคคีภัย (Fire Alarm)",
    titleEn: "Fire Alarm System",
    category: "office",
    categoryName: "สำนักงานและอาคาร",
    categoryNameEn: "Office & Building",
    description: "ระบบแจ้งเตือนอัคคีภัยเพื่อการตรวจจับไฟ ควัน และเหตุฉุกเฉินอื่นๆ ที่เกี่ยวข้องกับเพลิงไหม้",
    descriptionEn: "A fire detection and alert system for detecting fire, smoke, and other fire-related emergencies in buildings.",
    image: "images/services/Fire-Alarm-System.webp",
    isFeatured: false,
    isSelected: false,
    isCustom: false
  },
  {
    id: 14,
    title: "ระบบตรวจจับระดับน้ำท่วม (Flood Sensor)",
    titleEn: "Flood Level Sensor",
    category: "office",
    categoryName: "สำนักงานและอาคาร",
    categoryNameEn: "Office & Building",
    description: "อุปกรณ์ตรวจจับระดับน้ำท่วมที่ส่งสัญญาณเตือนไปยังสมาร์ทโฟนเพื่อให้ผู้รับผิดชอบเข้ามาแก้ไขปัญหาได้ทันเวลา",
    descriptionEn: "A flood level sensor that sends alerts to smartphones, enabling responsible personnel to take timely action.",
    image: "images/services/flood level.webp",
    isFeatured: false,
    isSelected: false,
    isCustom: false
  },
  {
    id: 15,
    title: "ระบบเสียงประกาศ / IP Phone",
    titleEn: "Public Address System / IP Phone",
    category: "office",
    categoryName: "สำนักงานและอาคาร",
    categoryNameEn: "Office & Building",
    description: "ระบบประกาศเสียงผ่าน IP protocol สำหรับการสื่อสารภายในองค์กร",
    descriptionEn: "An IP-based public address system for communication within an organization.",
    image: "images/services/Public-Address-System.webp",
    isFeatured: false,
    isSelected: false,
    isCustom: false
  },
  {
    id: 16,
    title: "เครื่อง X-Ray Scanner",
    titleEn: "X-Ray Scanner",
    category: "office",
    categoryName: "สำนักงานและอาคาร",
    categoryNameEn: "Office & Building",
    description: "อุปกรณ์สแกนเพื่อค้นหาสิ่งแปลกปลอมโดยใช้หลักการคลื่นแม่เหล็กไฟฟ้า เหมาะสำหรับการตรวจจับโลหะและวัสดุอันตรายอื่นๆ",
    descriptionEn: "A scanner using electromagnetic waves to detect foreign objects, ideal for detecting metals and other dangerous materials.",
    image: "images/services/X-Ray-Scanner.webp",
    isFeatured: false,
    isSelected: false,
    isCustom: false
  }
];

// สถานะการกรอง ค้นหา และจัดเรียง (Filter / Search / Sort State)
let currentCategory = "all";
let searchKeyword = "";
let currentSort = "name-asc";

/* ==========================================================================
   2. CENTRALIZED RENDER FUNCTION (Feature 3)
   Clears container, handles empty state, iterates array, and constructs DOM nodes.
   ========================================================================== */
let isServicesExpanded = false;

function renderServices(items) {
  const container = document.getElementById("services-grid-container");
  const emptyMessage = document.getElementById("no-results-msg");
  if (!container) return;

  // 1. เคลียร์คอนเทนเนอร์ก่อนแสดงผลใหม่เสมอ (ตามกฎเกณฑ์ข้อ 3)
  container.innerHTML = "";

  // 2. ตรวจสอบกรณีไม่มีข้อมูลตรงตามเงื่อนไข (Empty State)
  if (!items || items.length === 0) {
    if (emptyMessage) emptyMessage.hidden = false;
    return;
  }
  if (emptyMessage) emptyMessage.hidden = true;

  // 3. วนลูป Array เพื่อสร้าง DOM Nodes (Card) แสดงผล
  items.forEach((service) => {
    const badgeClass = service.category === "office" ? "badge-office" : "badge-factory";
    const card = document.createElement("article");
    card.className = `service-card ${service.isSelected ? "is-selected" : ""}`;
    card.dataset.id = service.id;
    card.dataset.category = service.category;

    const displayTitle = currentLang === "en" && service.titleEn ? service.titleEn : service.title;
    const displayCategoryName = currentLang === "en" && service.categoryNameEn ? service.categoryNameEn : service.categoryName;
    const displayDesc = currentLang === "en" && service.descriptionEn ? service.descriptionEn : service.description;

    const selectText = service.isSelected 
      ? translations[currentLang]["services.btnSelected"] 
      : translations[currentLang]["services.btnSelect"];
    const detailText = translations[currentLang]["services.btnDetails"];
    const deleteText = translations[currentLang]["services.btnDelete"];

    // ปุ่ม Action:
    // หากเป็นรายการที่ผู้ใช้เพิ่มเองผ่านฟอร์ม (isCustom) จะมีปุ่ม "ลบ" ตามเกณฑ์ Test T4 & Feature 5
    // หากเป็นบริการหลักของบริษัท จะมีปุ่ม Status Toggle (+ สนใจระบบนี้ / ✔ เลือกแล้ว)
    let actionBtnHtml = "";
    if (service.isCustom) {
      actionBtnHtml = `<button type="button" class="btn btn-card-delete" data-delete-id="${service.id}" title="${deleteText}">${deleteText}</button>`;
    } else {
      actionBtnHtml = `
        <button type="button" class="btn ${service.isSelected ? "btn-card-selected" : "btn-card-select"}" data-toggle-id="${service.id}">
          ${selectText}
        </button>
      `;
    }

    card.innerHTML = `
      <div class="card-img-wrapper">
        <img src="${service.image}" alt="${displayTitle}" class="card-img">
        <span class="card-badge ${badgeClass}">${displayCategoryName}</span>
      </div>
      <div class="card-body">
        <h3 class="card-title">${displayTitle}</h3>
        <p class="card-desc">${displayDesc}</p>
        <div class="card-footer">
          <button type="button" class="btn btn-card-detail" data-service-id="${service.id}">${detailText}</button>
          ${actionBtnHtml}
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

/* ==========================================================================
   3. MULTI-CRITERIA FILTER, SEARCH & SORT (Feature 5)
   ========================================================================== */
function getFilteredAndSortedServices() {
  let result = [...servicesData];

  // 1. กรองตามหมวดหมู่ (Category Filter)
  if (currentCategory !== "all") {
    result = result.filter((service) => service.category === currentCategory);
  }

  // 2. ค้นหาตามคำค้น (Search Keyword)
  if (searchKeyword) {
    result = result.filter((service) => {
      const titleTh = service.title.toLowerCase();
      const titleEn = (service.titleEn || "").toLowerCase();
      const descTh = service.description.toLowerCase();
      const descEn = (service.descriptionEn || "").toLowerCase();
      const catTh = service.categoryName.toLowerCase();
      const catEn = (service.categoryNameEn || "").toLowerCase();

      return (
        titleTh.includes(searchKeyword) ||
        titleEn.includes(searchKeyword) ||
        descTh.includes(searchKeyword) ||
        descEn.includes(searchKeyword) ||
        catTh.includes(searchKeyword) ||
        catEn.includes(searchKeyword)
      );
    });
  }

  // 3. จัดเรียงลำดับ (Sort)
  if (currentSort === "name-asc") {
    result.sort((a, b) => {
      const strA = currentLang === "en" && a.titleEn ? a.titleEn : a.title;
      const strB = currentLang === "en" && b.titleEn ? b.titleEn : b.title;
      return strA.localeCompare(strB, currentLang);
    });
  } else if (currentSort === "name-desc") {
    result.sort((a, b) => {
      const strA = currentLang === "en" && a.titleEn ? a.titleEn : a.title;
      const strB = currentLang === "en" && b.titleEn ? b.titleEn : b.title;
      return strB.localeCompare(strA, currentLang);
    });
  }

  return result;
}

function updateServicesDisplay() {
  const filtered = getFilteredAndSortedServices();
  const expandWrapper = document.getElementById("expand-services-wrapper");
  const isMobile = window.innerWidth <= 768;

  // หากอยู่บนมือถือ และไม่ได้พิมพ์ค้นหา และเลือกหมวดหมู่ทั้งหมด และมีมากกว่า 4 รายการ
  if (isMobile && !searchKeyword && currentCategory === "all" && filtered.length > 4) {
    if (expandWrapper) expandWrapper.hidden = false;
    if (!isServicesExpanded) {
      renderServices(filtered.slice(0, 4));
      return;
    }
  } else {
    if (expandWrapper) expandWrapper.hidden = true;
  }

  renderServices(filtered);
}

/* ==========================================================================
   4. EVENT DELEGATION: DELETE, TOGGLE & MODAL (Feature 5 & 6)
   ========================================================================== */
function setupServicesEventDelegation() {
  const container = document.getElementById("services-grid-container");
  if (!container) return;

  container.addEventListener("click", (e) => {
    // 1. ตรวจสอบการคลิกปุ่ม "ลบรายการ" (Feature 5: Event Delegation Delete)
    const deleteBtn = e.target.closest("[data-delete-id]");
    if (deleteBtn) {
      const idToDelete = Number(deleteBtn.dataset.deleteId);
      servicesData = servicesData.filter((service) => service.id !== idToDelete);
      updateServicesDisplay();
      updateSelectedServicesUI();
      console.log(`Item ID ${idToDelete} deleted via Event Delegation.`);
      return;
    }

    // 2. ตรวจสอบการคลิกปุ่ม Status Toggle "+ สนใจระบบนี้ / ✔ เลือกแล้ว" (Feature 5: Status Toggle)
    const toggleBtn = e.target.closest("[data-toggle-id]");
    if (toggleBtn) {
      const idToToggle = Number(toggleBtn.dataset.toggleId);
      const targetService = servicesData.find((service) => service.id === idToToggle);
      if (targetService) {
        targetService.isSelected = !targetService.isSelected;
        updateServicesDisplay();
        updateSelectedServicesUI();
      }
      return;
    }

    // 3. ตรวจสอบการคลิกปุ่ม "ดูรายละเอียด" เพื่อเปิด Native Modal (Feature 6)
    const detailBtn = e.target.closest("[data-service-id]");
    if (detailBtn) {
      const idToView = Number(detailBtn.dataset.serviceId);
      openServiceModal(idToView);
      return;
    }
  });
}

/* ==========================================================================
   5. NATIVE MODAL <dialog> (Feature 6: showModal, close, Escape support)
   ========================================================================== */
function openServiceModal(serviceId) {
  const modal = document.getElementById("service-modal");
  const dialogTitle = document.getElementById("dialog-title");
  const dialogBody = document.getElementById("dialog-body-content");
  if (!modal) return;

  const service = servicesData.find((s) => s.id === serviceId);
  if (!service) return;

  const displayTitle = currentLang === "en" && service.titleEn ? service.titleEn : service.title;
  const displayCategoryName = currentLang === "en" && service.categoryNameEn ? service.categoryNameEn : service.categoryName;
  const displayDesc = currentLang === "en" && service.descriptionEn ? service.descriptionEn : service.description;

  if (dialogTitle) {
    dialogTitle.textContent = displayTitle;
  }

  if (dialogBody) {
    const certTitle = currentLang === "en" ? "BAS Quality & Engineering Standards" : "มาตรฐานและบริการจาก BAS";
    const certText = currentLang === "en"
      ? "Certified by Johnson Controls with international engineering standards, offering 24/7 technical support and authentic spare parts inventory valued over 5 million THB."
      : "ได้รับการรับรองมาตรฐานวิศวกรรมระดับสากลจาก Johnson Controls พร้อมบริการซ่อมบำรุงและสต็อกอะไหล่แท้ตลอด 24 ชั่วโมง มูลค่ากว่า 5 ล้านบาท";

    dialogBody.innerHTML = `
      <div class="modal-img-wrapper">
        <img src="${service.image}" alt="${displayTitle}" class="modal-img">
      </div>
      <div class="modal-badge-row">
        <span class="card-badge ${service.category === 'office' ? 'badge-office' : 'badge-factory'} modal-badge">${displayCategoryName}</span>
      </div>
      <p class="modal-desc">
        ${displayDesc}
      </p>
      <div class="modal-cert-card">
        <h4 class="modal-cert-title">${certTitle}</h4>
        <p class="modal-cert-desc">${certText}</p>
      </div>
    `;
  }

  // เรียกใช้เมธอด Native HTML5 .showModal()
  modal.showModal();
}

function setupModalListeners() {
  const modal = document.getElementById("service-modal");
  const closeBtn = document.getElementById("dialog-close-btn");
  const confirmBtn = document.getElementById("dialog-confirm-btn");

  if (!modal) return;

  // ปิดด้วยปุ่มกากบาท
  if (closeBtn) {
    closeBtn.addEventListener("click", () => modal.close());
  }

  // ปิดด้วยปุ่มยืนยันด้านล่าง
  if (confirmBtn) {
    confirmBtn.addEventListener("click", () => modal.close());
  }

  // ปิดเมื่อคลิกที่ฉากหลัง (Backdrop Click)
  modal.addEventListener("click", (e) => {
    const dialogDimensions = modal.getBoundingClientRect();
    const isClickInside = (
      e.clientX >= dialogDimensions.left &&
      e.clientX <= dialogDimensions.right &&
      e.clientY >= dialogDimensions.top &&
      e.clientY <= dialogDimensions.bottom
    );
    if (!isClickInside) {
      modal.close();
    }
  });

  // ปิดด้วยปุ่ม Escape บนแป้นพิมพ์ (Explicit Keydown Listener)
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.open) {
      modal.close();
    }
  });
}

/* ==========================================================================
   6. KEYBOARD INTERACTIONS (Feature 7: Shortcuts)
   ========================================================================== */
function setupKeyboardShortcuts() {
  const searchInput = document.getElementById("service-search-input");

  window.addEventListener("keydown", (e) => {
    // คีย์ลัด '/': โฟกัสไปที่ช่องค้นหาบริการ
    if (e.key === "/" && document.activeElement !== searchInput) {
      const activeTag = document.activeElement.tagName.toLowerCase();
      if (activeTag !== "input" && activeTag !== "textarea" && activeTag !== "select") {
        e.preventDefault();
        if (searchInput) {
          searchInput.focus();
          searchInput.select();
        }
      }
    }
  });
}

/* ==========================================================================
   7. FILTER, SEARCH & SORT CONTROLS SETUP
   ========================================================================== */
function setupFilterAndSearchControls() {
  // 1. ปุ่ม Filter หมวดหมู่
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.dataset.category || "all";
      updateServicesDisplay();
    });
  });

  // 2. ช่องค้นหา (Search Input) ทำงานแบบ Real-time
  const searchInput = document.getElementById("service-search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchKeyword = e.target.value.trim().toLowerCase();
      updateServicesDisplay();
    });
  }

  // 3. กล่องตัวเลือกจัดเรียง (Sort Select)
  const sortSelect = document.getElementById("service-sort-select");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      currentSort = e.target.value;
      updateServicesDisplay();
    });
  }
}

/* ==========================================================================
   8. FORM VALIDATION & STATE INSERTION (Feature 4: 6 Points)
   ========================================================================== */
function setupFormValidation() {
  const form = document.getElementById("consultation-form");
  const nameInput = document.getElementById("contact-name");
  const phoneInput = document.getElementById("contact-phone");
  const serviceSelect = document.getElementById("contact-service");
  const notesInput = document.getElementById("contact-notes");

  const nameError = document.getElementById("error-contact-name");
  const phoneError = document.getElementById("error-contact-phone");
  const serviceError = document.getElementById("error-contact-service");
  const successAlert = document.getElementById("form-success-alert");

  if (!form || !nameInput || !phoneInput || !serviceSelect) return;

  function showError(inputEl, errorEl, message) {
    if (errorEl) errorEl.textContent = message;
    if (inputEl) inputEl.classList.add("is-invalid");
  }

  function clearError(inputEl, errorEl) {
    if (errorEl) errorEl.textContent = "";
    if (inputEl) inputEl.classList.remove("is-invalid");
  }

  // ล้างข้อผิดพลาดอัตโนมัติขณะพิมพ์
  nameInput.addEventListener("input", () => clearError(nameInput, nameError));
  phoneInput.addEventListener("input", () => clearError(phoneInput, phoneError));
  serviceSelect.addEventListener("change", () => clearError(serviceSelect, serviceError));

  form.addEventListener("submit", (e) => {
    // 1. บังคับใช้ e.preventDefault()
    e.preventDefault();

    let isValid = true;
    const nameVal = nameInput.value.trim();
    const phoneVal = phoneInput.value.trim();
    const serviceVal = serviceSelect.value;
    const notesVal = notesInput ? notesInput.value.trim() : "";

    clearError(nameInput, nameError);
    clearError(phoneInput, phoneError);
    clearError(serviceSelect, serviceError);
    if (successAlert) successAlert.hidden = true;

    // กฎที่ 1: ตรวจสอบชื่อ
    if (!nameVal) {
      showError(nameInput, nameError, "กรุณากรอกชื่อผู้ติดต่อหรือชื่อบริษัท");
      isValid = false;
    } else if (nameVal.length < 3) {
      showError(nameInput, nameError, "ชื่อต้องมีความยาวอย่างน้อย 3 ตัวอักษร");
      isValid = false;
    }

    // กฎที่ 2: ตรวจสอบเบอร์โทรศัพท์
    const phonePattern = /^0[0-9]{8,9}$/;
    if (!phoneVal) {
      showError(phoneInput, phoneError, "กรุณากรอกเบอร์โทรศัพท์ติดต่อ");
      isValid = false;
    } else if (!phonePattern.test(phoneVal)) {
      showError(phoneInput, phoneError, "เบอร์โทรศัพท์ไม่ถูกต้อง (ต้องเป็นตัวเลข 9-10 หลัก เช่น 0812345678)");
      isValid = false;
    }

    // กฎที่ 3: ตรวจสอบการเลือกระบบงาน
    if (!serviceVal) {
      showError(serviceSelect, serviceError, "กรุณาเลือกระบบงานที่ต้องการปรึกษา");
      isValid = false;
    }

    if (!isValid) return;

    // แผนผังข้อมูลระบบที่เลือก
    const serviceMetaMap = {
      bms: { title: "Building Management System (BMS)", cat: "office", catName: "สำนักงานและอาคาร", img: "images/services/BAS.webp" },
      chiller: { title: "Chiller Plant Management System", cat: "factory", catName: "โรงงานอุตสาหกรรม", img: "images/services/ChillerPlant.webp" },
      access: { title: "Access Control & Turnstile", cat: "office", catName: "สำนักงานและอาคาร", img: "images/services/Access-Control-System.webp" },
      cctv: { title: "CCTV Surveillance System", cat: "office", catName: "สำนักงานและอาคาร", img: "images/services/cctv.webp" },
      lighting: { title: "Smart Lighting Control System", cat: "factory", catName: "โรงงานอุตสาหกรรม", img: "images/services/light.webp" },
      hvac: { title: "Variable Speed Drive & Valves", cat: "factory", catName: "โรงงานอุตสาหกรรม", img: "images/services/Variable-Speed-Drive.webp" },
      other: { title: "Integrated Building Automation", cat: "office", catName: "สำนักงานและอาคาร", img: "images/services/banner.webp" }
    };

    const selectedMeta = serviceMetaMap[serviceVal] || serviceMetaMap.other;
    const newId = servicesData.length > 0 ? Math.max(...servicesData.map((s) => s.id)) + 1 : 1;

    // สร้าง Object ใหม่ (กำหนด isCustom: true เพื่อให้มีปุ่มลบรายการนี้ได้)
    const newServiceItem = {
      id: newId,
      title: `${selectedMeta.title} (${nameVal})`,
      category: selectedMeta.cat,
      categoryName: selectedMeta.catName,
      description: notesVal ? `${notesVal} • ผู้ติดต่อ ${nameVal} (โทร ${phoneVal})` : `นัดหมายสำรวจหน้างานโดย ${nameVal} (โทร ${phoneVal})`,
      image: selectedMeta.img,
      isFeatured: false,
      isSelected: true,
      isCustom: true // รายการที่ผู้ใช้เพิ่มเอง จะสามารถลบได้ตามเกณฑ์ Test T4
    };

    // เพิ่ม Object ใหม่เข้าสู่ Array
    servicesData.unshift(newServiceItem);

    // อัปเดตการแสดงผลและเรียก render()
    updateServicesDisplay();

    // เลื่อนหน้าจอกลับไปยังโซนบริการเพื่อให้เห็นรายการที่เพิ่มเข้ามา
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }

    form.reset();
    if (successAlert) {
      successAlert.hidden = false;
      setTimeout(() => {
        successAlert.hidden = true;
      }, 7000);
    }
  });
}

/* ==========================================================================
   9. MOBILE NAVIGATION SETUP
   ========================================================================== */
function setupMobileNav() {
  const menuToggleBtn = document.getElementById("menu-toggle-btn");
  const mainNav = document.getElementById("main-nav");

  if (!menuToggleBtn || !mainNav) return;

  menuToggleBtn.addEventListener("click", () => {
    const isExpanded = menuToggleBtn.getAttribute("aria-expanded") === "true";
    menuToggleBtn.setAttribute("aria-expanded", String(!isExpanded));
    mainNav.classList.toggle("is-open");
  });

  const navLinks = mainNav.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (mainNav.classList.contains("is-open")) {
        mainNav.classList.remove("is-open");
        menuToggleBtn.setAttribute("aria-expanded", "false");
      }
    });
  });
}

/* ==========================================================================
   10. SELECTED SERVICES & WORKFLOW INTEGRATION
   ========================================================================== */
function updateSelectedServicesUI() {
  const container = document.getElementById("selected-services-box");
  const countBadge = document.getElementById("selected-count-badge");
  const tagsWrapper = document.getElementById("selected-services-tags");
  const serviceSelect = document.getElementById("contact-service");
  if (!container || !countBadge || !tagsWrapper) return;

  const selectedList = servicesData.filter((s) => s.isSelected);

  if (selectedList.length === 0) {
    container.hidden = true;
    countBadge.textContent = "0";
    tagsWrapper.innerHTML = "";
    return;
  }

  container.hidden = false;
  countBadge.textContent = String(selectedList.length);

  tagsWrapper.innerHTML = selectedList
    .map((item) => {
      const itemTitle = currentLang === "en" && item.titleEn ? item.titleEn : item.title;
      return `
        <span class="selected-tag-item">
          <span>${itemTitle}</span>
          <button type="button" class="tag-remove-btn" data-unselect-id="${item.id}" aria-label="ลบ ${itemTitle}">&times;</button>
        </span>
      `;
    })
    .join("");

  // ปรับตัวเลือก dropdown ในฟอร์มตามรายการแรกที่เลือก (หากยังไม่ได้เลือก)
  if (serviceSelect && !serviceSelect.value && selectedList.length > 0) {
    const first = selectedList[0];
    if (first.category === "office") {
      serviceSelect.value = "bms";
    } else {
      serviceSelect.value = "chiller";
    }
  }
}

function setupSelectedServicesDelegation() {
  const tagsWrapper = document.getElementById("selected-services-tags");
  if (!tagsWrapper) return;

  tagsWrapper.addEventListener("click", (e) => {
    const removeBtn = e.target.closest("[data-unselect-id]");
    if (removeBtn) {
      const idToUnselect = Number(removeBtn.dataset.unselectId);
      const target = servicesData.find((s) => s.id === idToUnselect);
      if (target) {
        target.isSelected = false;
        updateServicesDisplay();
        updateSelectedServicesUI();
      }
    }
  });
}

/* ==========================================================================
   11. MOBILE SERVICES EXPAND / COLLAPSE
   ========================================================================== */
function setupMobileServicesExpand() {
  const expandBtn = document.getElementById("expand-services-btn");
  const expandText = document.getElementById("expand-services-text");
  if (!expandBtn) return;

  expandBtn.addEventListener("click", () => {
    isServicesExpanded = !isServicesExpanded;
    expandBtn.setAttribute("aria-expanded", String(isServicesExpanded));
    if (expandText) {
      expandText.textContent = isServicesExpanded
        ? translations[currentLang]["services.expandShowLess"]
        : translations[currentLang]["services.expandShowMore"];
    }
    updateServicesDisplay();
  });
}

/* ==========================================================================
   12. SCROLLSPY (NAVBAR ACTIVE HIGHLIGHT ON SCROLL)
   ========================================================================== */
function setupScrollSpy() {
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".nav-link");
  if (!sections.length || !navLinks.length) return;

  function onScroll() {
    const scrollPos = window.scrollY + 130; // Offset สำหรับความสูงของ Header

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute("id");

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach((link) => {
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* ==========================================================================
   13. LANGUAGE SWITCHER (TH / EN PURE VANILLA JS)
   ========================================================================== */
function setupLanguageSwitcher() {
  const langToggleBtn = document.getElementById("lang-toggle-btn");
  const thCode = document.getElementById("lang-code-th");
  const enCode = document.getElementById("lang-code-en");
  const themeToggleBtn = document.getElementById("theme-toggle-btn");
  if (!langToggleBtn) return;

  function applyLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;

    // 1. แปลงข้อความ element ทั้งหมดที่มี data-i18n
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    // 2. แปลง placeholder attributes
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.dataset.i18nPlaceholder;
      if (translations[lang] && translations[lang][key]) {
        el.placeholder = translations[lang][key];
      }
    });

    // 3. ปรับสถานะ active ของปุ่มสลับภาษา
    if (thCode && enCode) {
      if (lang === "th") {
        thCode.classList.add("is-active");
        enCode.classList.remove("is-active");
      } else {
        enCode.classList.add("is-active");
        thCode.classList.remove("is-active");
      }
    }

    // 4. อัปเดต accessibility labels ของปุ่มสลับธีม และวงแหวนเมาส์
    if (themeToggleBtn) {
      const themeLabel = lang === "en"
        ? (currentTheme === "dark" ? "Switch to Light Theme" : "Switch to Dark Theme")
        : (currentTheme === "dark" ? "สลับเป็นโหมดสว่าง" : "สลับเป็นโหมดมืด");
      themeToggleBtn.setAttribute("aria-label", themeLabel);
      themeToggleBtn.setAttribute("title", themeLabel);
      const themeModeText = document.getElementById("theme-mode-text");
      if (themeModeText) {
        themeModeText.textContent = lang === "en"
          ? (currentTheme === "dark" ? "Dark" : "Light")
          : (currentTheme === "dark" ? "มืด" : "สว่าง");
      }
    }

    // 5. อัปเดตข้อความปุ่มย่อ/ขยายบริการ
    const expandText = document.getElementById("expand-services-text");
    if (expandText) {
      expandText.textContent = isServicesExpanded
        ? translations[lang]["services.expandShowLess"]
        : translations[lang]["services.expandShowMore"];
    }

    // 6. แสดงผล dynamic services และ selected tags ใหม่ในภาษาที่เลือก
    updateServicesDisplay();
    updateSelectedServicesUI();
  }

  // ใช้ภาษาเริ่มต้นที่กำหนด (Default: EN)
  applyLanguage(currentLang);

  langToggleBtn.addEventListener("click", () => {
    const nextLang = currentLang === "th" ? "en" : "th";
    applyLanguage(nextLang);
  });
}

/* ==========================================================================
   14. STATS COUNT-UP ANIMATION (Pure Vanilla JS - zero libraries)
   ========================================================================== */
function setupAnimatedCounters() {
  const statElements = document.querySelectorAll(".stat-number[data-target]");
  if (!statElements.length) return;

  function animateCounter(el) {
    const target = parseInt(el.dataset.target, 10);
    const suffix = el.dataset.suffix || "";
    if (isNaN(target)) return;

    const duration = 1800; // วิ่งประมาณ 1.8 วินาที ดูนุ่มนวลกำลังดี
    const startTime = performance.now();

    function update(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Easing out cubic: นุ่มนวล ชะลอตอนใกล้ถึงเป้าหมาย
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentVal = Math.floor(easeOut * target);

      el.textContent = currentVal + suffix;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = target + suffix;
      }
    }

    requestAnimationFrame(update);
  }

  // ใช้ IntersectionObserver เพื่อเริ่มนับตัวเลขเมื่อเลื่อนจอมาถึงส่วน About
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            obs.unobserve(entry.target); // รันรอบเดียวเมื่อปรากฏในจอ
          }
        });
      },
      { threshold: 0.3 }
    );

    statElements.forEach((el) => observer.observe(el));
  } else {
    // Fallback หากเบราว์เซอร์เก่าไม่รองรับ IntersectionObserver
    statElements.forEach((el) => animateCounter(el));
  }
}

/* ==========================================================================
   15. THEME TOGGLE (DARK / LIGHT MODE)
   Course 953104: Strictly In-Memory (Zero localStorage / Zero sessionStorage)
   ========================================================================== */
let currentTheme = "dark"; // "dark" | "light"

function setupThemeToggle() {
  const themeToggleBtn = document.getElementById("theme-toggle-btn");
  const themeModeText = document.getElementById("theme-mode-text");
  if (!themeToggleBtn) return;

  function applyTheme(theme) {
    currentTheme = theme;
    document.documentElement.setAttribute("data-theme", theme);
    themeToggleBtn.setAttribute("aria-checked", theme === "light" ? "true" : "false");
    themeToggleBtn.classList.toggle("is-light", theme === "light");

    if (themeModeText) {
      themeModeText.textContent = currentLang === "en"
        ? (theme === "dark" ? "Dark" : "Light")
        : (theme === "dark" ? "มืด" : "สว่าง");
    }

    const themeLabel = currentLang === "en"
      ? (theme === "dark" ? "Switch to Light Theme" : "Switch to Dark Theme")
      : (theme === "dark" ? "สลับเป็นโหมดสว่าง" : "สลับเป็นโหมดมืด");
    themeToggleBtn.setAttribute("aria-label", themeLabel);
    themeToggleBtn.setAttribute("title", themeLabel);
  }

  themeToggleBtn.addEventListener("click", () => {
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
  });
}

/* ==========================================================================
   16. HERO TITLE 3D TILT EFFECT (renumbered from 17)

/* ==========================================================================
   17. HERO TITLE 3D TILT EFFECT
   Smooth perspective tilt tracking mouse in Hero section (Zero Lag)
   ========================================================================== */
function setupHeroTiltEffect() {
  const heroSection = document.getElementById("hero");
  const heroTitle = document.getElementById("hero-heading");
  if (!heroSection || !heroTitle) return;

  if (window.matchMedia("(hover: none) or (pointer: coarse)").matches) return;

  let rafId = null;

  heroSection.addEventListener("mousemove", (e) => {
    if (rafId) cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(() => {
      const rect = heroSection.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5; // -0.5 to 0.5

      const rotateX = -(y * 8).toFixed(2); // max +-4 deg
      const rotateY = (x * 10).toFixed(2); // max +-5 deg

      heroTitle.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
  }, { passive: true });

  heroSection.addEventListener("mouseleave", () => {
    if (rafId) cancelAnimationFrame(rafId);
    heroTitle.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg)";
  });
}

/* ==========================================================================
   18. DOM INITIALIZATION
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  // 1. ระบบนำทางบนมือถือ
  setupMobileNav();

  // 2. ระบบ Scrollspy ไฮไลต์เมนูตามตำแหน่ง Scroll
  setupScrollSpy();

  // 3. ระบบสลับภาษา (TH / EN) - ค่าเริ่มต้นเป็น EN
  setupLanguageSwitcher();

  // 4. ระบบสลับธีม มืด / สว่าง (Dark / Light Mode - In-memory)
  setupThemeToggle();

  // 5. เอฟเฟกต์ 3D Tilt ตัวหนังสือ We Prepare For The Future
  setupHeroTiltEffect();

  // 7. แสดงผลข้อมูลบริการเริ่มต้น (Feature 3)
  updateServicesDisplay();

  // 8. ปุ่มขยาย/ย่อบริการบนจอมือถือ
  setupMobileServicesExpand();

  // 9. ตั้งค่าระบบควบคุม Filter, Search, Sort (Feature 5)
  setupFilterAndSearchControls();

  // 10. ตั้งค่า Event Delegation บนคอนเทนเนอร์บริการ (Feature 5)
  setupServicesEventDelegation();

  // 11. ตั้งค่า Event Delegation สำหรับกล่องระบบที่เลือกสนใจ
  setupSelectedServicesDelegation();

  // 12. ตั้งค่า Native Modal <dialog> (Feature 6)
  setupModalListeners();

  // 13. ตั้งค่า Keyboard Shortcuts (Feature 7)
  setupKeyboardShortcuts();

  // 14. ตั้งค่าการตรวจสอบแบบฟอร์ม (Feature 4)
  setupFormValidation();

  // 15. เอฟเฟกต์ตัวเลขนับขึ้น (Stats Counter Animation)
  setupAnimatedCounters();

  // 16. ปรับขนาดการแสดงผลบริการอัตโนมัติเมื่อหมุนหน้าจอหรือเปลี่ยนขนาดหน้าต่าง
  window.addEventListener("resize", () => {
    updateServicesDisplay();
  }, { passive: true });

  console.log("BAS Website: All Features (1 to 7) + Theme Toggle + Hero Tilt + i18n initialized.");
});


