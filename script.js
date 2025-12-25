const defaultConfig = {
  instructor_name: "Nimish Nailwal",
  instructor_qualification:
    "Masters in Computer Application (MCA), DUCS (Delhi University) | Bsc(H) CS, Delhi University | AIR 244 in NIMCET Examination | AIR 65 in BHU Examination",
  instructor_experience:
    "5+ years teaching CBSE Computer Science & Informatics Practices | Software Engineer @CIENA",
  teaching_philosophy:
    "I believe in practical learning combined with strong conceptual foundation. Every student can excel in Computer Science with the right guidance and hands-on practice. My goal is not just to help you score marks, but to make you fall in love with coding!",
  hero_headline: "Future Achievers",
  hero_subheading: "Expert Guidance for CBSE",
  whatsapp_number: "+919868817472",
  weekday_timing: "6:00 PM - 7:00 PM",
  saturday_timing: "11:00 AM - 1:00 PM",
  total_students: "200+",
  success_rate: "95%",
  years_experience: "5+",
  cs_course_title: "Computer Science",
  ip_course_title: "Informatics Practices",
  testimonial_1_text:
    "The teaching method is excellent. I scored 94% in Information Practices boards. Thank you sir!",
  testimonial_1_name: "Dhruv, Class 12, CBSE",
  testimonial_2_text:
    "Small batches helped my son get individual attention. His programming skills improved dramatically.",
  testimonial_2_name: "Mr. Rajesh Kumar, Parent",
  testimonial_3_text:
    "Practical sessions and doubt clearing made difficult topics easy.",
  testimonial_3_name: "Ayush, Class 12, CBSE",
  maps_link: "#",
  footer_text: "Empowering students with technology education",
  background_color: "#06b6d4",
  surface_color: "#ffffff",
  text_color: "#1f2937",
  primary_action_color: "#ffffff",
  secondary_action_color: "#8b5cf6",
  font_family: "system-ui",
  font_size: 16,
};
// Fallback: Set basic WhatsApp links immediately if JS loads
document.addEventListener("DOMContentLoaded", () => {
  const basicLink = "https://wa.me/919868817472";
  const floatBtn = document.getElementById("whatsappFloat");
  const heroBtn = document.getElementById("whatsappHeroBtn");

  if (
    (floatBtn && floatBtn.href === "#") ||
    floatBtn.href === "javascript:void(0)"
  ) {
    floatBtn.href = basicLink;
  }
  if (
    heroBtn &&
    (heroBtn.href === "#" || heroBtn.href === "javascript:void(0)")
  ) {
    heroBtn.href = basicLink;
  }
});
// WhatsApp link generation
function getWhatsAppLink(message) {
  const config = window.Element ? window.Element.config : defaultConfig;
  const number = (
    config.whatsapp_number || defaultConfig.whatsapp_number
  ).replace(/[^0-9]/g, "");
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

function joinBatch(batch) {
  const message = `Hi! I'm interested in joining the ${batch} batch for Computer Science tuition. Please share more details.`;
  window.open(getWhatsAppLink(message), "_blank", "noopener,noreferrer");
}

// Exit intent popup
let exitPopupShown = false;
let exitIntentEnabled = true;

document.addEventListener("mouseleave", (e) => {
  if (exitIntentEnabled && !exitPopupShown && e.clientY <= 0) {
    showExitPopup();
  }
});

function showExitPopup() {
  exitPopupShown = true;
  document.getElementById("exitPopup").classList.add("show");
}

function closeExitPopup() {
  document.getElementById("exitPopup").classList.remove("show");
  exitIntentEnabled = false;
}

// Close popup on outside click
document.addEventListener("click", (e) => {
  if (e.target.id === "exitPopup") {
    closeExitPopup();
  }
});

async function onConfigChange(config) {
  const heroHeadline = document.getElementById("heroHeadline");
  const heroSubheading = document.getElementById("heroSubheading");
  const instructorName = document.getElementById("instructorName");
  const instructorQualification = document.getElementById(
    "instructorQualification"
  );
  const instructorExperience = document.getElementById("instructorExperience");
  const teachingPhilosophy = document.getElementById("teachingPhilosophy");
  const csTitle = document.getElementById("csTitle");
  const ipTitle = document.getElementById("ipTitle");
  const testimonial1Text = document.getElementById("testimonial1Text");
  const testimonial1Name = document.getElementById("testimonial1Name");
  const testimonial2Text = document.getElementById("testimonial2Text");
  const testimonial2Name = document.getElementById("testimonial2Name");
  const testimonial3Text = document.getElementById("testimonial3Text");
  const testimonial3Name = document.getElementById("testimonial3Name");
  const contactPhone = document.getElementById("contactPhone");
  const contactWhatsapp = document.getElementById("contactWhatsapp");
  const contactEmail = document.getElementById("contactEmail");
  const contactAddress = document.getElementById("contactAddress");
  const mapsLink = document.getElementById("mapsLink");
  const footerText = document.getElementById("footerText");
  const heroSection = document.getElementById("hero");
  const app = document.getElementById("app");

  // Update text content
  heroHeadline.textContent =
    config.hero_headline || defaultConfig.hero_headline;
  heroSubheading.textContent =
    config.hero_subheading || defaultConfig.hero_subheading;
  instructorName.textContent =
    config.instructor_name || defaultConfig.instructor_name;
  instructorQualification.textContent =
    config.instructor_qualification || defaultConfig.instructor_qualification;
  instructorExperience.textContent =
    config.instructor_experience || defaultConfig.instructor_experience;
  teachingPhilosophy.textContent =
    '"' +
    (config.teaching_philosophy || defaultConfig.teaching_philosophy) +
    '"';
  csTitle.textContent = config.cs_course_title || defaultConfig.cs_course_title;
  ipTitle.textContent = config.ip_course_title || defaultConfig.ip_course_title;
  testimonial1Text.textContent =
    '"' + (config.testimonial_1_text || defaultConfig.testimonial_1_text) + '"';
  testimonial1Name.textContent =
    "— " + (config.testimonial_1_name || defaultConfig.testimonial_1_name);
  testimonial2Text.textContent =
    '"' + (config.testimonial_2_text || defaultConfig.testimonial_2_text) + '"';
  testimonial2Name.textContent =
    "— " + (config.testimonial_2_name || defaultConfig.testimonial_2_name);
  testimonial3Text.textContent =
    '"' + (config.testimonial_3_text || defaultConfig.testimonial_3_text) + '"';
  testimonial3Name.textContent =
    "— " + (config.testimonial_3_name || defaultConfig.testimonial_3_name);
  contactPhone.textContent =
    config.contact_phone || defaultConfig.contact_phone || "+91-XXXXX-XXXXX";
  contactWhatsapp.textContent =
    config.whatsapp_number || defaultConfig.whatsapp_number;
  contactEmail.textContent =
    config.contact_email ||
    defaultConfig.contact_email ||
    "info@csittuition.com";
  contactAddress.textContent =
    config.contact_address ||
    defaultConfig.contact_address ||
    "123 Education Lane, Your City, State - 123456";
  mapsLink.href = config.maps_link || defaultConfig.maps_link;
  footerText.textContent = config.footer_text || defaultConfig.footer_text;

  // Update schedule timings
  const weekdayTiming = config.weekday_timing || defaultConfig.weekday_timing;
  for (let i = 1; i <= 5; i++) {
    const el = document.getElementById(`weekdayTiming${i}`);
    if (el) el.textContent = weekdayTiming;
  }

  // Update trust signals
  const trustStudents = config.total_students || defaultConfig.total_students;
  const trustSuccess = config.success_rate || defaultConfig.success_rate;
  const trustExperience =
    config.years_experience || defaultConfig.years_experience;
  document.getElementById("trustStudents").textContent = trustStudents;
  document.getElementById("trustSuccess").textContent = trustSuccess;
  document.getElementById("trustExperience").textContent = trustExperience;
  document.getElementById("trustStudents2").textContent = trustStudents;
  document.getElementById("trustSuccess2").textContent = trustSuccess;
  document.getElementById("trustExperience2").textContent = trustExperience;

  // Update WhatsApp links with better messages
  const generalMessage = `Hi! I'm interested in joining your Computer Science / Informatics Practices tuition classes. Please share batch details, fees, and demo class information.`;
  const demoMessage = `Hi! I saw your limited-time offer and would like to claim the FREE Demo Class + Python Cheatsheet. Please send me the details!`;

  const floatBtn = document.getElementById("whatsappFloat");
  const heroBtn = document.getElementById("whatsappHeroBtn");
  const exitBtn = document.getElementById("exitWhatsappBtn");

  if (floatBtn) floatBtn.href = getWhatsAppLink(generalMessage);
  if (heroBtn) heroBtn.href = getWhatsAppLink(generalMessage);
  if (exitBtn) exitBtn.href = getWhatsAppLink(demoMessage);

  // Update colors and fonts (existing logic unchanged)
  const bgColor = config.background_color || defaultConfig.background_color;
  const secondaryActionColor =
    config.secondary_action_color || defaultConfig.secondary_action_color;
  const textColor = config.text_color || defaultConfig.text_color;
  const customFont = config.font_family || defaultConfig.font_family;
  const baseSize = config.font_size || defaultConfig.font_size;

  heroSection.style.background = `linear-gradient(135deg, ${bgColor} 0%, ${secondaryActionColor} 100%)`;
  app.style.color = textColor;

  const fontFamily = `${customFont}, system-ui, -apple-system, sans-serif`;
  document.body.style.fontFamily = fontFamily;

  heroHeadline.style.fontSize = `${baseSize * 2.5}px`;
  heroSubheading.style.fontSize = `${baseSize * 1.25}px`;
  document.querySelectorAll("h2").forEach((el) => {
    el.style.fontSize = `${baseSize * 2}px`;
  });
  document.querySelectorAll("h3").forEach((el) => {
    el.style.fontSize = `${baseSize * 1.25}px`;
  });
  document.querySelectorAll("p, li").forEach((el) => {
    el.style.fontSize = `${baseSize}px`;
  });
}

// Rest of your mapping functions remain unchanged
function mapToCapabilities(config) {
  /* ... unchanged ... */
}
function mapToEditPanelValues(config) {
  /* ... unchanged ... */
}

// Initialize
document.addEventListener("DOMContentLoaded", function () {
  onConfigChange(defaultConfig);

  if (window.Element) {
    window.Element.init({
      defaultConfig,
      onConfigChange,
      mapToCapabilities,
      mapToEditPanelValues,
    });
  }
});
