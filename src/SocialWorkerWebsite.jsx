import { useState, useEffect, useRef } from "react";
import profileImg from "./assets/profile image1.jpeg";
import heroBg from "./assets/hero_bg.png";
import waImg1 from "./assets/WhatsApp Image 2026-04-04 at 13.33.35 (1).jpeg";
import waImg2 from "./assets/WhatsApp Image 2026-04-04 at 13.33.35 (2).jpeg";
import waImg3 from "./assets/WhatsApp Image 2026-04-04 at 13.33.35.jpeg";
import waImg4 from "./assets/WhatsApp Image 2026-04-04 at 13.33.36.jpeg";
import waImg5 from "./assets/WhatsApp Image 2026-04-04 at 13.33.37 (1).jpeg";
import waImg6 from "./assets/WhatsApp Image 2026-04-04 at 13.33.37.jpeg";
import waImg7 from "./assets/WhatsApp Image 2026-04-04 at 13.33.39.jpeg";
import waImg8 from "./assets/WhatsApp Image 2026-04-04 at 13.33.40 (1).jpeg";
import waImg9 from "./assets/WhatsApp Image 2026-04-04 at 13.33.40.jpeg";
import waImg10 from "./assets/WhatsApp Image 2026-04-04 at 13.33.41.jpeg";
import waImg11 from "./assets/WhatsApp Image 2026-04-04 at 13.33.45.jpeg";
import waImg12 from "./assets/WhatsApp Image 2026-04-04 at 13.33.46.jpeg";
import waImg13 from "./assets/WhatsApp Image 2026-04-04 at 13.33.47.jpeg";
import waImg14 from "./assets/WhatsApp Image 2026-04-04 at 13.33.48 (1).jpeg";
import waImg15 from "./assets/WhatsApp Image 2026-04-04 at 13.33.48.jpeg";
import waImg16 from "./assets/WhatsApp Image 2026-04-04 at 13.33.49.jpeg";

import popupImg1 from "./assets/gallery_education.png";
import popupImg2 from "./assets/gallery_women.png";
import popupImg3 from "./assets/gallery_village.png";
import popupImg4 from "./assets/gallery_flood.png";
import popupImg5 from "./assets/gallery_wedding.png";
import popupImg6 from "./assets/gallery_blanket.png";

import awardImg2 from "./assets/award2.jpeg";
import awardImg3 from "./assets/award3.jpeg";
import awardImg4 from "./assets/award4.jpeg";
import awardImg5 from "./assets/award5.jpeg";

import biodataPdf from "./assets/kuljeet biodata.pdf";

const COLORS = {
  saffron: "#E8612C",
  saffronDark: "#C04E1F",
  green: "#2D6A2D",
  greenDark: "#153E15",
};

const NAV_LINKS_HI = [
  "होम",
  "परिचय",
  "सेवा कार्य",
  "प्रभाव",
  "पुरस्कार",
  "गैलरी",
  "मीडिया",
  "संपर्क",
];
const NAV_LINKS_EN = [
  "Home",
  "About",
  "Services",
  "Impact",
  "Awards",
  "Gallery",
  "Media",
  "Contact",
];
const NAV_IDS = [
  "home",
  "about",
  "services",
  "impact",
  "awards",
  "gallery",
  "media",
  "contact",
];

const SERVICES_HI = [
  {
    icon: "📚",
    title: "शिक्षा सेवा",
    desc: "वर्ष 2016 से 150+ गरीब बच्चों को निःशुल्क पाठ्य सामग्री, कोचिंग एवं आर्थिक सहायता। NEET व IIT छात्र इनकी प्रेरणा से आगे बढ़े।",
    color: "#E8612C",
  },
  {
    icon: "🤲",
    title: "महिला कल्याण",
    desc: "110 विधवा एवं असहाय वृद्ध महिलाओं को साड़ी, चप्पल एवं खाद्य सामग्री वितरण। दलित टोलों को सरकारी सुविधाएं दिलाना।",
    color: "#2D6A2D",
  },
  {
    icon: "💒",
    title: "गरीब बेटियों का विवाह",
    desc: "लगभग तीन दर्जन निर्धन परिवारों की बेटियों के विवाह में खाद्य सामग्री, वस्त्र एवं आर्थिक सहायता — जिला भोजपुर एवं बोकारो दोनों में।",
    color: "#C04E1F",
  },
  {
    icon: "💡",
    title: "ग्राम विकास",
    desc: "कुंजन टोला, सलेमपुर एवं गोपालपुर के दलित टोलों में स्वयं के लगभग ₹1 लाख व्यय से स्ट्रीट लाइट की व्यवस्था।",
    color: "#4A8C3F",
  },
  {
    icon: "🌊",
    title: "आपदा राहत",
    desc: "2018 की बाढ़ एवं 2019-20 कोविड महामारी में 37+ गांवों में अन्न, वस्त्र एवं आवश्यक सामग्री वितरण। हर कठिन घड़ी में जरूरतमंदों के साथ।",
    color: "#D4A017",
  },
  {
    icon: "🏙️",
    title: "बोकारो में सेवा",
    desc: "कर्मभूमि बोकारो में भी अनाथालय के बच्चों को पाठ्य सामग्री, वृद्धाश्रम सेवा, रेलवे स्टेशन पर कंबल वितरण एवं विषम परिस्थितियों में भोजन।",
    color: "#1A4A1A",
  },
];

const SERVICES_EN = [
  {
    icon: "📚",
    title: "Education Service",
    desc: "Since 2016, provided free study materials, coaching, and financial aid to 150+ poor children. Inspiring NEET and IIT students to move forward.",
    color: "#E8612C",
  },
  {
    icon: "🤲",
    title: "Women's Welfare",
    desc: "Distributed sarees, footwear, and food to 110 widows and destitute elderly women. Helping marginalized communities access government facilities.",
    color: "#2D6A2D",
  },
  {
    icon: "💒",
    title: "Marriage Assistance",
    desc: "Provided food materials, clothing, and financial aid for the marriages of daughters from nearly three dozen destitute families — across both Bhojpur and Bokaro districts.",
    color: "#C04E1F",
  },
  {
    icon: "💡",
    title: "Village Development",
    desc: "Installed street lights at personal expense of nearly ₹1 lakh in the Dalit hamlets of Kunjan Tola, Salempur, and Gopalpur.",
    color: "#4A8C3F",
  },
  {
    icon: "🌊",
    title: "Disaster Relief",
    desc: "Distributed food, clothing, and essentials in 37+ villages during the 2018 floods and 2019-20 Covid pandemic. Always standing with the needy during tough times.",
    color: "#D4A017",
  },
  {
    icon: "🏙️",
    title: "Service in Bokaro",
    desc: "In the workplace of Bokaro, distributed study materials to orphanages, served old age homes, provided blankets at the railway station, and arranged meals during difficult circumstances.",
    color: "#1A4A1A",
  },
];

const AWARDS_HI = [
  {
    year: "2016",
    title: "टैलेंट अवार्ड",
    desc: "तत्कालीन DM भोजपुर डॉ. वीरेन्द्र प्रसाद यादव एवं Circle Officer कोईलवर श्री मृत्युंजय कुमार की उपस्थिति में मेडल एवं शॉल से सम्मानित।",
  },
  {
    year: "2018",
    title: "अचीवर्स टैलेंट अवार्ड",
    desc: "तत्कालीन DEO भोजपुर द्वारा जमीरा में आयोजित भव्य छात्र सम्मेलन में शिक्षा क्षेत्र में उत्कृष्ट कार्य हेतु मेडल एवं शॉल।",
  },
  {
    year: "2023",
    title: "भोजपुर जिला मेधावी उत्कृष्ट कार्य सम्मान",
    desc: "जिला समाहरणालय भोजपुर में DM श्री राज कुमार एवं ADM की उपस्थिति में 32 मेधावी छात्रों के साथ मेडल एवं शॉल से सम्मानित।",
  },
  {
    year: "2024",
    title: "उत्कृष्ट सांसद पुरस्कार",
    desc: "पूर्णिया के सांसद श्री पप्पू यादव (राजेश रंजन) द्वारा उल्लेखनीय समाज सेवा हेतु सम्मानित।",
  },
  {
    year: "2026",
    title: "भोजपुर गौरव सम्मान",
    desc: "बिहार सरकार के श्रम संसाधन मंत्री श्री संजय सिंह 'टाइगर' द्वारा निःस्वार्थ सामाजिक कार्यों एवं गरीब बेटियों के विवाह में सहयोग हेतु सम्मानित।",
  },
];

const AWARDS_EN = [
  {
    year: "2016",
    title: "Talent Award",
    desc: "Honored with a medal and shawl in the presence of then DM Bhojpur Dr. Birendra Prasad Yadav and Circle Officer Koilwar Mr. Mritunjay Kumar.",
  },
  {
    year: "2018",
    title: "Achievers Talent Award",
    desc: "Awarded a medal and shawl for outstanding work in the field of education during a grand student conference organized by then DEO Bhojpur in Jamira.",
  },
  {
    year: "2023",
    title: "Bhojpur District Meritorious Excellence Award",
    desc: "Honored with a medal and shawl alongside 32 meritorious students in the presence of DM Mr. Raj Kumar and ADM at the District Collectorate Bhojpur.",
  },
  {
    year: "2024",
    title: "Outstanding MP Award",
    desc: "Honored by Purnia MP Mr. Pappu Yadav (Rajesh Ranjan) for remarkable social service.",
  },
  {
    year: "2026",
    title: "Bhojpur Pride Award",
    desc: "Honored by the Honorable Labour Resources Minister of the Bihar Government, Mr. Sanjay Singh 'Tiger', for selfless social work and contributing to the marriages of poor daughters.",
  },
];

const IMPACT_STATS_HI = [
  { value: 150, label: "गरीब बच्चे शिक्षित", suffix: "+" },
  { value: 37, label: "गांवों में सेवा", suffix: "+" },
  { value: 36, label: "बेटियों का विवाह", suffix: "" },
  { value: 110, label: "विधवा माताएं सहायता प्राप्त", suffix: "+" },
  { value: 10, label: "वर्षों का अनुभव", suffix: "+" },
  { value: 5000, label: "जीवन बदले", suffix: "+" },
];

const IMPACT_STATS_EN = [
  { value: 150, label: "Poor Children Educated", suffix: "+" },
  { value: 37, label: "Villages Served", suffix: "+" },
  { value: 36, label: "Daughters' Marriages", suffix: "" },
  { value: 110, label: "Widowed Mothers Assisted", suffix: "+" },
  { value: 10, label: "Years of Experience", suffix: "+" },
  { value: 5000, label: "Lives Changed", suffix: "+" },
];

const GALLERY_ITEMS_HI = [
  { label: "निरंतर सेवा", img: waImg1 },
  { label: "समाज उत्थान", img: waImg2 },
  { label: "सामाजिक कार्य", img: waImg3 },
  { label: "जन सेवा", img: waImg4 },
  { label: "समर्पण", img: waImg5 },
  { label: "गरीबों की मदद", img: waImg6 },
  { label: "निःस्वार्थ सेवा", img: waImg7 },
  { label: "मानवता", img: waImg8 },
  { label: "निरंतर सेवा", img: waImg9 },
  { label: "समाज उत्थान", img: waImg10 },
  { label: "सामाजिक कार्य", img: waImg11 },
  { label: "जन सेवा", img: waImg12 },
  { label: "समर्पण", img: waImg13 },
  { label: "सहयोग", img: waImg14 },
  { label: "निःस्वार्थ सेवा", img: waImg15 },
  { label: "मानवता", img: waImg16 },
  { label: "सम्मान प्रतिपल", img: awardImg2 },
  { label: "विशिष्ट उपलब्धि", img: awardImg3 },
  { label: "गौरवशाली क्षण", img: awardImg4 },
  { label: "पुरस्कार समारोह", img: awardImg5 },
];

const GALLERY_ITEMS_EN = [
  { label: "Continuous Service", img: waImg1 },
  { label: "Society Upliftment", img: waImg2 },
  { label: "Social Work", img: waImg3 },
  { label: "Public Service", img: waImg4 },
  { label: "Dedication", img: waImg5 },
  { label: "Helping the Poor", img: waImg6 },
  { label: "Selfless Service", img: waImg7 },
  { label: "Humanity", img: waImg8 },
  { label: "Support", img: waImg14 },
  { label: "Selfless Service", img: waImg15 },
  { label: "Humanity", img: waImg16 },
  { label: "Honors Everyday", img: awardImg2 },
  { label: "Special Achievement", img: awardImg3 },
  { label: "Proud Moment", img: awardImg4 },
  { label: "Award Ceremony", img: awardImg5 },
];

const SLIDER_IMAGES = [
  { img: popupImg1 },
  { img: popupImg2 },
  { img: popupImg3 },
  { img: popupImg4 },
  { img: popupImg5 },
  { img: popupImg6 },
];

const MEDIA_LINKS_HI = [
  {
    type: "youtube",
    url: "https://www.youtube.com/embed/uBG9ZZGY7x0",
    title: "इंजीनियर कुलजीत यादव होली पर्व में दलित असहाय लोगों के बीच",
  },
  {
    type: "facebook",
    url: "https://www.facebook.com/share/r/1CBuptrEro/",
    title: "कुलजीत सिंह इंजिनियर साहब ने गरीबों में साड़ी वितरण किया।",
  },
  {
    type: "facebook",
    url: "https://www.facebook.com/share/v/1LKCzjnSm5/",
    title:
      "होली के पावन अवसर पर सामाजिक कार्यकर्ता इंजीनियर साहब कुलजीत सिंह जी ने महादलित एवं जरूरतमंद महिलाओं को विशेष उपहार भेंट कर उनका आशीर्वाद प्राप्त किया और उनके चेहरे पर खुशियां बिखेरीं",
  },
  {
    type: "facebook",
    url: "https://www.facebook.com/share/v/18MjtP7c4b/",
    title:
      "इंजीनियर कुलजीत सिंह: एक दशक से गरीबों की शादी-विवाह में निरंतर सेवा",
  },
  {
    type: "facebook",
    url: "https://www.facebook.com/share/p/179BZpmLmx/",
    title:
      "होली पर खुशियों की सौगात: इंजीनियर कुलजीत यादव ने 10वें वर्ष में 37 गांवों के जरूरतमंदों तक पहुँचाई मदद",
  },
];

const MEDIA_LINKS_EN = [
  {
    type: "youtube",
    url: "https://www.youtube.com/embed/uBG9ZZGY7x0",
    title:
      "Engineer Kuljeet Yadav among the destitute Dalit people during Holi festival",
  },
  {
    type: "facebook",
    url: "https://www.facebook.com/share/r/1CBuptrEro/",
    title: "Engineer Kuljeet Singh distributed sarees among the poor.",
  },
  {
    type: "facebook",
    url: "https://www.facebook.com/share/v/1LKCzjnSm5/",
    title:
      "On the auspicious occasion of Holi, social worker Engineer Kuljeet Singh gifted special presents to Mahadalit and needy women, receiving their blessings and bringing smiles to their faces.",
  },
  {
    type: "facebook",
    url: "https://www.facebook.com/share/v/18MjtP7c4b/",
    title:
      "Engineer Kuljeet Singh: Continuous service in the marriages of the poor for a decade",
  },
  {
    type: "facebook",
    url: "https://www.facebook.com/share/p/179BZpmLmx/",
    title:
      "Gift of happiness on Holi: Engineer Kuljeet Yadav delivered help to the needy in 37 villages in his 10th year",
  },
];

function CoverflowSlider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        width: "100%",
        height: "clamp(220px, 45vw, 440px)",
        perspective: "1200px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        margin: "2rem 0",
      }}
    >
      {images.map((obj, i) => {
        const half = Math.floor(images.length / 2);
        let offset =
          (((i - currentIndex) % images.length) + images.length) %
          images.length;
        if (offset > half) offset -= images.length;

        const absOffset = Math.abs(offset);
        const isCenter = offset === 0;

        const zIndex = 100 - absOffset;
        const scale = isCenter ? 1 : Math.max(0.55, 1 - absOffset * 0.18);
        // Use vw-based translate so side cards stay within viewport
        const translateX = offset * Math.min(320, window.innerWidth * 0.42);
        const rotateY = isCenter ? 0 : offset < 0 ? 35 : -35;
        const opacity = absOffset > 2 ? 0 : isCenter ? 1 : 1 - absOffset * 0.35;
        const blur = isCenter ? "0px" : `${absOffset * 3}px`;
        const brightness = isCenter ? "1" : "0.45";

        return (
          <div
            key={i}
            onClick={() => setCurrentIndex(i)}
            style={{
              position: "absolute",
              width: "min(680px, 85vw)",
              height: "clamp(200px, 42vw, 400px)",
              transition: "all 0.8s cubic-bezier(0.25, 0.8, 0.25, 1)",
              transform: `translateX(${translateX}px) scale(${scale}) rotateY(${rotateY}deg)`,
              zIndex,
              opacity,
              filter: `blur(${blur}) brightness(${brightness})`,
              borderRadius: "20px",
              boxShadow: isCenter
                ? "0 30px 60px rgba(0,0,0,0.4)"
                : "0 10px 30px rgba(0,0,0,0.2)",
              overflow: "hidden",
              cursor: "pointer",
              border: isCenter
                ? `4px solid ${COLORS.saffron}`
                : "1px solid rgba(255,255,255,0.1)",
              pointerEvents: absOffset > 2 ? "none" : "auto",
            }}
          >
            <img
              src={obj.img}
              alt={obj.label || ""}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
            {isCenter && (
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.9), transparent)",
                  padding: "2.5rem 1.5rem 1.2rem",
                  color: "#fff",
                }}
              >
                <h3
                  style={{
                    fontSize: "clamp(1rem, 3vw, 1.8rem)",
                    fontWeight: 800,
                    textShadow: "0 2px 10px rgba(0,0,0,0.5)",
                  }}
                >
                  {obj.label}
                </h3>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function useCountUp(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function AnimatedCounter({ value, suffix, label }) {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);
  const count = useCountUp(value, 2000, started);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStarted(true);
      },
      { threshold: 0.3 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        background: "rgba(255, 255, 255, 0.85)",
        backdropFilter: "blur(20px)",
        border: "1px solid #fff",
        borderTop: `4px solid ${COLORS.saffron}`,
        borderRadius: "24px",
        padding: "3.5rem 2rem",
        textAlign: "center",
        transition: "transform 0.4s ease, box-shadow 0.4s",
        boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-10px)";
        e.currentTarget.style.boxShadow = "0 25px 50px rgba(0,0,0,0.1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.05)";
      }}
    >
      <div
        style={{
          fontSize: "3.5rem",
          fontWeight: 900,
          color: COLORS.greenDark,
          lineHeight: 1,
          textShadow: "0 2px 10px rgba(0,0,0,0.05)",
          marginBottom: "1rem",
        }}
      >
        {count.toLocaleString()}
        <span style={{ color: COLORS.saffron }}>{suffix}</span>
      </div>
      <div
        style={{
          fontSize: "1.1rem",
          color: "#555",
          fontWeight: 700,
          letterSpacing: "1px",
        }}
      >
        {label}
      </div>
    </div>
  );
}

function FadeInSection({ children, delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default function SocialWorkerWebsite() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    subject: "",
    message: "",
  });
  const [formSent, setFormSent] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [lang, setLang] = useState("hi");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const handleSubmit = () => {
    if (formData.name && formData.contact) {
      // Construct simple WhatsApp message with form data
      const message = `Name: ${formData.name}\nContact: ${formData.contact}${formData.subject ? `\nSubject: ${formData.subject}` : ""}${formData.message ? `\nMessage: ${formData.message}` : ""}`;

      // URL encode the message
      const encodedMessage = encodeURIComponent(message);

      // Open WhatsApp with pre-filled message
      const whatsappUrl = `https://wa.me/917991176312?text=${encodedMessage}`;
      window.open(whatsappUrl, "_blank");

      // Show success message and clear form
      setFormSent(true);
      setFormData({ name: "", contact: "", subject: "", message: "" });
    }
  };

  const handleStepUp = () => {
    const sections = Array.from(document.querySelectorAll("section"));
    sections.reverse();
    for (let sec of sections) {
      if (sec.offsetTop < window.scrollY - 100) {
        window.scrollTo({ top: sec.offsetTop - 80, behavior: "smooth" });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {/* NAVBAR */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: scrolled ? "rgba(255,255,255,0.97)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.1)" : "none",
          transition: "all 0.4s ease",
          padding: "0 2rem",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 70,
          }}
        >
          <div
            onClick={() => scrollTo("home")}
            style={{ cursor: "pointer", flexShrink: 0 }}
          >
            <span
              style={{
                fontSize: "clamp(1rem, 4vw, 1.5rem)",
                fontWeight: 800,
                color: scrolled ? COLORS.green : "#fff",
                whiteSpace: "nowrap",
              }}
            >
              श्री कुलजीत कुमार
            </span>
          </div>
          <div
            className="desktop-only"
            style={{ display: "flex", gap: "2rem", alignItems: "center" }}
          >
            {(lang === "hi" ? NAV_LINKS_HI : NAV_LINKS_EN).map((link, i) => (
              <span
                key={i}
                className="nav-link"
                onClick={() => scrollTo(NAV_IDS[i])}
                style={{ color: scrolled ? "#333" : "#fff" }}
              >
                {link}
              </span>
            ))}
            <div
              style={{
                display: "flex",
                background: "rgba(255,255,255,0.2)",
                borderRadius: "20px",
                padding: "4px",
                border: "1px solid rgba(255,255,255,0.4)",
              }}
            >
              <button
                onClick={() => setLang("hi")}
                style={{
                  background: lang === "hi" ? COLORS.saffron : "transparent",
                  color: lang === "hi" ? "#fff" : scrolled ? "#333" : "#ebebeb",
                  border: "none",
                  borderRadius: "16px",
                  padding: "4px 12px",
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  cursor: "pointer",
                  transition: "all 0.3s",
                }}
              >
                HI
              </button>
              <button
                onClick={() => setLang("en")}
                style={{
                  background: lang === "en" ? COLORS.green : "transparent",
                  color: lang === "en" ? "#fff" : scrolled ? "#333" : "#ebebeb",
                  border: "none",
                  borderRadius: "16px",
                  padding: "4px 12px",
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  cursor: "pointer",
                  transition: "all 0.3s",
                }}
              >
                EN
              </button>
            </div>
            <button
              onClick={() => window.open(biodataPdf, "_blank")}
              style={{
                padding: "8px 24px",
                background: "#f2f2f2",
                color: COLORS.greenDark,
                border: `2px solid ${COLORS.greenDark}`,
                borderRadius: "30px",
                fontWeight: "bold",
                cursor: "pointer",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = COLORS.greenDark;
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#f2f2f2";
                e.currentTarget.style.color = COLORS.greenDark;
              }}
            >
              {lang === "hi" ? "बायोडाटा" : "Biodata"}
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="btn-primary"
              style={{ padding: "8px 24px" }}
            >
              {lang === "hi" ? "संपर्क करें" : "Contact"}
            </button>
          </div>
          <button
            className="mobile-only"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: "none",
              border: "none",
              fontSize: "1.8rem",
              cursor: "pointer",
              color: scrolled ? COLORS.green : "#fff",
              padding: "4px 8px",
              lineHeight: 1,
            }}
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
        {mobileMenuOpen && (
          <div
            style={{
              background: "white",
              padding: "1rem",
              borderTop: "1px solid #eee",
              boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "10px",
                padding: "10px 0",
                borderBottom: "1px solid #f0f0f0",
                marginBottom: "10px",
              }}
            >
              <button
                onClick={() => setLang("hi")}
                style={{
                  flex: 1,
                  background: lang === "hi" ? COLORS.saffron : "#eee",
                  color: lang === "hi" ? "#fff" : "#333",
                  border: "none",
                  borderRadius: "8px",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                हिन्दी
              </button>
              <button
                onClick={() => setLang("en")}
                style={{
                  flex: 1,
                  background: lang === "en" ? COLORS.green : "#eee",
                  color: lang === "en" ? "#fff" : "#333",
                  border: "none",
                  borderRadius: "8px",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                English
              </button>
            </div>
            <div
              onClick={() => window.open(biodataPdf, "_blank")}
              style={{
                padding: "12px 0",
                color: COLORS.saffronDark,
                fontWeight: 700,
                cursor: "pointer",
                borderBottom: "1px solid #f0f0f0",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              📄 {lang === "hi" ? "बायोडाटा देखें" : "View Biodata"}
            </div>
            {(lang === "hi" ? NAV_LINKS_HI : NAV_LINKS_EN).map((link, i) => (
              <div
                key={i}
                onClick={() => scrollTo(NAV_IDS[i])}
                style={{
                  padding: "12px 0",
                  color: "#333",
                  fontWeight: 500,
                  cursor: "pointer",
                  borderBottom: "1px solid #f0f0f0",
                }}
              >
                {link}
              </div>
            ))}
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section
        id="home"
        style={{
          minHeight: "100vh",
          position: "relative",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            /* Removed backgroundAttachment:'fixed' — causes iOS/webkit jitter & mobile overflow */
          }}
        />

        <div
          className="max-w-1200"
          style={{
            position: "relative",
            zIndex: 10,
            padding: "0 1rem",
            width: "100%",
            textAlign: "center",
            paddingTop: "96px",
            paddingBottom: "clamp(5rem, 14vw, 8rem)",
          }}
        >
          <div style={{ animation: "fadeSlide 1s ease forwards" }}>
            <div
              style={{
                display: "inline-block",
                background: "rgba(255,255,255,0.2)",
                padding: "8px 24px",
                borderRadius: 30,
                color: "#fff",
                fontSize: "0.9rem",
                marginBottom: 24,
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.3)",
                fontWeight: 500,
              }}
            >
              {lang === "hi"
                ? "🌟 समाज सेवा • शिक्षा • ग्रामीण विकास"
                : "🌟 Social Work • Education • Rural Development"}
            </div>
            <h1
              className="hero-title"
              style={{
                fontSize: "clamp(1.5rem, 5.5vw, 4rem)",
                fontWeight: 800,
                color: "#fff",
                lineHeight: 1.2,
                marginBottom: 20,
                textShadow: "0 4px 20px rgba(0,0,0,0.3)",
              }}
            >
              {lang === "hi" ? "समाज सेवा के माध्यम से" : "Through Social Work"}
              <br />
              <span style={{ color: COLORS.saffron }}>
                {lang === "hi" ? "आशा की नई किरण" : "A New Ray of Hope"}
              </span>
            </h1>
            <p
              className="hero-subtitle"
              style={{
                fontSize: "1.2rem",
                color: "rgba(255,255,255,0.9)",
                maxWidth: 700,
                margin: "0 auto 40px",
                lineHeight: 1.8,
              }}
            >
              {lang === "hi"
                ? "हम समाज के जरूरतमंद लोगों की सहायता के लिए निरंतर कार्य कर रहे हैं। शिक्षा, महिला सशक्तिकरण और ग्रामीण विकास हमारा मुख्य उद्देश्य है।"
                : "We are continuously working to help the needy in our society. Education, women's empowerment, and rural development are our main objectives."}
            </p>
            <div
              className="hero-buttons"
              style={{ display: "flex", gap: "1rem", justifyContent: "center" }}
            >
              <button
                onClick={() => scrollTo("contact")}
                className="btn-primary"
                style={{ animation: "pulse-ring 2s infinite" }}
              >
                {lang === "hi" ? "हमसे जुड़ें" : "Join Us"}
              </button>
              <button
                onClick={() => scrollTo("services")}
                className="btn-outline"
              >
                {lang === "hi" ? "सेवा कार्य देखें" : "View Services"}
              </button>
            </div>
          </div>
        </div>

        <svg
          style={{
            position: "absolute",
            bottom: -1,
            left: 0,
            width: "100%",
            height: "8vw",
          }}
          viewBox="0 0 1440 120"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M0,120 L1440,120 L1440,0 C1200,80 960,120 720,60 C480,0 240,80 0,20 Z"
            fill="var(--warm-white)"
          />
        </svg>
      </section>

      {/* ABOUT SECTION */}
      <section
        id="about"
        className="section-padding"
        style={{
          background: "linear-gradient(135deg, #FFFAF0 0%, #F4FBF4 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Stronger Background Decorative Elements */}
        {/* Massive Background Typography */}
        <div
          style={{
            position: "absolute",
            top: "5%",
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: "clamp(4rem, 15vw, 18rem)",
            fontWeight: 900,
            color: COLORS.saffron,
            opacity: 0.03,
            whiteSpace: "nowrap",
            fontFamily: "var(--font-primary)",
            zIndex: 0,
            userSelect: "none",
            overflow: "hidden",
            maxWidth: "100vw",
            pointerEvents: "none",
          }}
        >
          {lang === "hi" ? "PARICHAY" : "ABOUT"}
        </div>

        {/* Vibrant Mesh Blobs — clamp sizes to avoid overflow */}
        <div
          style={{
            position: "absolute",
            top: "-5%",
            left: "-10%",
            width: "clamp(200px,50vw,500px)",
            height: "clamp(200px,50vw,500px)",
            background: `radial-gradient(circle, ${COLORS.saffron} 0%, transparent 70%)`,
            opacity: 0.15,
            filter: "blur(40px)",
            borderRadius: "50%",
            animation: "float-slow 8s infinite ease-in-out",
            zIndex: 0,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-10%",
            right: "-10%",
            width: "clamp(200px,55vw,600px)",
            height: "clamp(200px,55vw,600px)",
            background: `radial-gradient(circle, ${COLORS.green} 0%, transparent 70%)`,
            opacity: 0.12,
            filter: "blur(50px)",
            borderRadius: "50%",
            animation: "float-slow 10s infinite reverse ease-in-out",
            zIndex: 0,
            pointerEvents: "none",
          }}
        />

        {/* Dot pattern overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(rgba(0,0,0,0.04) 2px, transparent 2px)",
            backgroundSize: "40px 40px",
            zIndex: 0,
          }}
        />

        <div
          className="max-w-1200"
          style={{ position: "relative", zIndex: 10 }}
        >
          {/* Enhanced Section Header */}
          <FadeInSection>
            <div
              style={{
                textAlign: "center",
                marginBottom: "5rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: `linear-gradient(135deg, ${COLORS.saffron}20, ${COLORS.saffron}40)`,
                  padding: "8px 24px",
                  borderRadius: "30px",
                  border: `1px solid ${COLORS.saffron}50`,
                  marginBottom: "1rem",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    width: 7,
                    height: 7,
                    borderRadius: "1px",
                    background: COLORS.saffron,
                    opacity: 0.8,
                    transform: "rotate(45deg)",
                    flexShrink: 0,
                  }}
                ></span>
                <span
                  style={{
                    color: COLORS.saffronDark,
                    fontWeight: 600,
                    letterSpacing: "0.6px",
                    textTransform: "uppercase",
                    fontSize: "0.78rem",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  {lang === "hi" ? "परिचय" : "Introduction"}
                </span>
                <span
                  style={{
                    display: "inline-block",
                    width: 7,
                    height: 7,
                    borderRadius: "1px",
                    background: COLORS.saffron,
                    opacity: 0.8,
                    transform: "rotate(45deg)",
                    flexShrink: 0,
                  }}
                ></span>
              </div>
              <h2
                className="heading-primary"
                style={{
                  fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                  color: COLORS.greenDark,
                  textShadow: "0 2px 10px rgba(0,0,0,0.05)",
                }}
              >
                {lang === "hi" ? "श्री कुलजीत कुमार" : "Shri Kuljeet Kumar"}
              </h2>
              <div
                style={{
                  width: 100,
                  height: 6,
                  background: `linear-gradient(90deg, ${COLORS.saffron}, ${COLORS.green})`,
                  margin: "20px auto 0",
                  borderRadius: 10,
                  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                }}
              />
            </div>
          </FadeInSection>

          <div
            className="about-layout"
            style={{ display: "flex", gap: "5rem", alignItems: "center" }}
          >
            {/* Enhanced Image Column — constrained on mobile */}
            <FadeInSection
              delay={100}
              style={{ flex: "1 1 340px", maxWidth: "min(380px, 100%)" }}
            >
              <div
                style={{
                  position: "relative",
                  margin: "0 auto",
                  maxWidth: "min(340px, 100%)",
                }}
              >
                {/* Decorative background frame */}
                <div
                  style={{
                    position: "absolute",
                    top: -16,
                    right: -16,
                    bottom: 16,
                    left: 16,
                    border: `2px dashed ${COLORS.saffron}80`,
                    borderRadius: 24,
                    zIndex: 0,
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: 16,
                    left: -16,
                    bottom: -16,
                    right: 16,
                    background: `linear-gradient(135deg, ${COLORS.green}30, transparent)`,
                    borderRadius: 24,
                    zIndex: 0,
                  }}
                />

                <img
                  src={profileImg}
                  alt="Shri Kuljeet Kumar"
                  style={{
                    width: "100%",
                    aspectRatio: "3/4",
                    borderRadius: 20,
                    boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
                    objectFit: "cover",
                    objectPosition: "center top",
                    zIndex: 2,
                    position: "relative",
                    border: "6px solid #fff",
                  }}
                />

                {/* Glassmorphic Experience Badge — anchored inside image */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 16,
                    right: 0,
                    background: "rgba(255,255,255,0.9)",
                    backdropFilter: "blur(12px)",
                    padding: "0.9rem 1.2rem",
                    borderRadius: 18,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
                    zIndex: 3,
                    border: "1px solid rgba(255,255,255,0.8)",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                  }}
                >
                  <div
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: "50%",
                      background: `linear-gradient(135deg, ${COLORS.saffron}, ${COLORS.saffronDark})`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      fontSize: "1.2rem",
                      fontWeight: "bold",
                      flexShrink: 0,
                    }}
                  >
                    10
                  </div>
                  <div>
                    <div
                      style={{
                        color: COLORS.greenDark,
                        fontWeight: 900,
                        fontSize: "0.95rem",
                        textTransform: "uppercase",
                      }}
                    >
                      {lang === "hi" ? "वर्षों का" : "Years of"}
                    </div>
                    <div
                      style={{
                        fontSize: "0.8rem",
                        color: "#666",
                        fontWeight: 600,
                      }}
                    >
                      {lang === "hi" ? "गौरवशाली अनुभव" : "Glorious Experience"}
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>

            {/* Enhanced Text Column */}
            <FadeInSection
              delay={200}
              style={{ flex: 1, position: "relative" }}
            >
              {/* Large quote watermark */}
              <div
                style={{
                  position: "absolute",
                  top: "-40px",
                  left: "-20px",
                  fontSize: "8rem",
                  color: COLORS.saffron,
                  opacity: 0.1,
                  fontFamily: "serif",
                  lineHeight: 1,
                  zIndex: 0,
                }}
              >
                "
              </div>

              <div style={{ position: "relative", zIndex: 1 }}>
                <h3
                  style={{
                    fontSize: "clamp(1.8rem, 2.5vw, 2.2rem)",
                    color: "#111",
                    marginBottom: "1.5rem",
                    lineHeight: 1.4,
                    fontWeight: 800,
                  }}
                >
                  {lang === "hi"
                    ? "समाज के उत्थान के लिए समर्पित एक"
                    : "Dedicated to the upliftment of society, a"}{" "}
                  <br />
                  <span style={{ color: COLORS.saffron }}>
                    {lang === "hi" ? "निःस्वार्थ जीवन" : "Selfless Life"}
                  </span>
                </h3>

                <p
                  style={{
                    fontSize: "1.1rem",
                    color: "#444",
                    lineHeight: 1.9,
                    marginBottom: "2.5rem",
                    fontWeight: 500,
                    letterSpacing: "0.2px",
                  }}
                >
                  {lang === "hi"
                    ? "श्री कुलजीत कुमार पिछले कई वर्षों से समाज सेवा के क्षेत्र में सक्रिय भूमिका निभा रहे हैं। उन्होंने शिक्षा, महिला सशक्तिकरण, गरीब परिवारों की सहायता, और ग्रामीण विकास जैसे महत्वपूर्ण क्षेत्रों में उल्लेखनीय कार्य किया है। वर्तमान में वे बोकारो स्टील कंपनी में कार्यपालक अभियंता के रूप में कार्यरत हैं।"
                    : "Shri Kuljeet Kumar has played an active role in the field of social service for many years. He has done remarkable work in critical areas like education, women's empowerment, assisting poor families, and rural development. He currently serves as an Executive Engineer at Bokaro Steel Company."}
                </p>

                <div
                  className="grid-cols-2"
                  style={{ gap: "1.2rem", marginBottom: "3rem" }}
                >
                  {(lang === "hi"
                    ? [
                        {
                          label: "पेशा",
                          value: "कार्यपालक अभियंता, बोकारो",
                          icon: "👨‍💼",
                          color: COLORS.saffron,
                        },
                        {
                          label: "सेवा क्षेत्र",
                          value: "37+ गांव, भोजपुर-बोकारो",
                          icon: "📍",
                          color: COLORS.green,
                        },
                        {
                          label: "मुख्य कार्य",
                          value: "शिक्षा, ग्रामीण विकास",
                          icon: "🌟",
                          color: COLORS.saffron,
                        },
                        {
                          label: "संपर्क",
                          value: "+91 79911 76312",
                          icon: "📞",
                          color: COLORS.green,
                        },
                      ]
                    : [
                        {
                          label: "Profession",
                          value: "Executive Engineer, Bokaro",
                          icon: "👨‍💼",
                          color: COLORS.saffron,
                        },
                        {
                          label: "Service Area",
                          value: "37+ Villages, Bhojpur-Bokaro",
                          icon: "📍",
                          color: COLORS.green,
                        },
                        {
                          label: "Main Work",
                          value: "Education, Rural Development",
                          icon: "🌟",
                          color: COLORS.saffron,
                        },
                        {
                          label: "Contact",
                          value: "+91 79911 76312",
                          icon: "📞",
                          color: COLORS.green,
                        },
                      ]
                  ).map((item, i) => (
                    <div
                      key={i}
                      style={{
                        background: "rgba(255,255,255,0.7)",
                        backdropFilter: "blur(10px)",
                        padding: "1.2rem",
                        borderRadius: 16,
                        border: "1px solid rgba(255,255,255,0.8)",
                        boxShadow: "0 10px 20px rgba(0,0,0,0.03)",
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                        transition: "transform 0.3s",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.transform = "translateY(-4px)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.transform = "translateY(0)")
                      }
                    >
                      <div
                        style={{
                          fontSize: "1.5rem",
                          background: `${item.color}15`,
                          width: 45,
                          height: 45,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: 12,
                        }}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <div
                          style={{
                            fontSize: "0.8rem",
                            color: "#888",
                            marginBottom: 2,
                            fontWeight: 700,
                            textTransform: "uppercase",
                          }}
                        >
                          {item.label}
                        </div>
                        <div
                          style={{
                            fontWeight: 800,
                            color: "#222",
                            fontSize: "0.95rem",
                          }}
                        >
                          {item.value}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => scrollTo("contact")}
                  className="btn-primary"
                  style={{
                    padding: "16px 40px",
                    fontSize: "1.1rem",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <span>{lang === "hi" ? "संपर्क करें" : "Contact Us"}</span>
                  <span>→</span>
                </button>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section
        id="services"
        className="section-padding"
        style={{
          background: "linear-gradient(180deg, #F9FAF9 0%, #FFFFFF 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Massive Background Typography */}
        <div
          style={{
            position: "absolute",
            top: "2%",
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: "clamp(4rem, 15vw, 18rem)",
            fontWeight: 900,
            color: COLORS.green,
            opacity: 0.03,
            whiteSpace: "nowrap",
            fontFamily: "var(--font-primary)",
            zIndex: 0,
            userSelect: "none",
            overflow: "hidden",
            maxWidth: "100vw",
            pointerEvents: "none",
          }}
        >
          SERVICES
        </div>

        {/* Decorative Grid Lines Background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)`,
            backgroundSize: "100px 100px",
            zIndex: 0,
          }}
        />

        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 2rem",
            position: "relative",
            zIndex: 10,
          }}
        >
          {/* Enhanced Section Header */}
          <FadeInSection>
            <div
              style={{
                textAlign: "center",
                marginBottom: "5rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: `linear-gradient(135deg, ${COLORS.green}15, ${COLORS.green}30)`,
                  padding: "8px 24px",
                  borderRadius: "30px",
                  border: `1px solid ${COLORS.green}40`,
                  marginBottom: "1rem",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    width: 7,
                    height: 7,
                    borderRadius: "1px",
                    background: COLORS.green,
                    opacity: 0.8,
                    transform: "rotate(45deg)",
                    flexShrink: 0,
                  }}
                ></span>
                <span
                  style={{
                    color: COLORS.greenDark,
                    fontWeight: 600,
                    letterSpacing: "0.6px",
                    textTransform: "uppercase",
                    fontSize: "0.78rem",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  {lang === "hi" ? "सेवा क्षेत्र" : "Service Areas"}
                </span>
                <span
                  style={{
                    display: "inline-block",
                    width: 7,
                    height: 7,
                    borderRadius: "1px",
                    background: COLORS.green,
                    opacity: 0.8,
                    transform: "rotate(45deg)",
                    flexShrink: 0,
                  }}
                ></span>
              </div>
              <h2
                className="heading-primary"
                style={{
                  fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                  color: COLORS.greenDark,
                  textShadow: "0 2px 10px rgba(0,0,0,0.05)",
                }}
              >
                {lang === "hi" ? "मुख्य सेवा कार्य" : "Key Services"}
              </h2>
              <div
                style={{
                  width: 100,
                  height: 6,
                  background: `linear-gradient(90deg, ${COLORS.green}, ${COLORS.saffron})`,
                  margin: "20px auto 0",
                  borderRadius: 10,
                  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                }}
              />
            </div>
          </FadeInSection>

          <div className="grid-cols-3" style={{ gap: "2.5rem" }}>
            {(lang === "hi" ? SERVICES_HI : SERVICES_EN).map((svc, i) => (
              <FadeInSection key={i} delay={i * 100}>
                <div
                  style={{
                    background: "#fff",
                    borderRadius: "24px",
                    padding: "2.5rem 2rem",
                    position: "relative",
                    overflow: "hidden",
                    border: "1px solid rgba(0,0,0,0.05)",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
                    transition: "all 0.4s ease",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    zIndex: 1,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-10px)";
                    e.currentTarget.style.boxShadow =
                      "0 20px 40px rgba(0,0,0,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 10px 30px rgba(0,0,0,0.04)";
                  }}
                >
                  {/* Subtle Top Border */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "6px",
                      background: svc.color,
                    }}
                  />

                  {/* Background Watermark Icon */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: "-20px",
                      right: "-20px",
                      fontSize: "8rem",
                      opacity: 0.04,
                      transform: "rotate(-15deg)",
                      zIndex: -1,
                      userSelect: "none",
                    }}
                  >
                    {svc.icon}
                  </div>

                  {/* Floating Dot Mesh */}
                  <div
                    style={{
                      position: "absolute",
                      top: "20px",
                      right: "20px",
                      width: "60px",
                      height: "60px",
                      backgroundImage: `radial-gradient(${svc.color}40 2px, transparent 2px)`,
                      backgroundSize: "10px 10px",
                      opacity: 0.5,
                      zIndex: -1,
                    }}
                  />

                  <div
                    style={{
                      fontSize: "3rem",
                      marginBottom: "1.5rem",
                      background: `${svc.color}15`,
                      width: 80,
                      height: 80,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "24px",
                      boxShadow: `0 8px 20px ${svc.color}20`,
                    }}
                  >
                    {svc.icon}
                  </div>

                  <h3
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: 800,
                      marginBottom: "1rem",
                      color: "#222",
                    }}
                  >
                    {svc.title}
                  </h3>
                  <p
                    style={{
                      color: "#555",
                      lineHeight: 1.8,
                      fontSize: "1.05rem",
                      flexGrow: 1,
                    }}
                  >
                    {svc.desc}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* 3D COVERFLOW GALLERY SLIDER */}
      <section
        className="section-padding"
        style={{
          background: "linear-gradient(180deg, #FFFFFF 0%, #F5F9F5 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Massive Background Typography */}
        <div
          style={{
            position: "absolute",
            top: "5%",
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: "clamp(4rem, 18vw, 22rem)",
            fontWeight: 900,
            color: COLORS.green,
            opacity: 0.03,
            whiteSpace: "nowrap",
            zIndex: 0,
            userSelect: "none",
            overflow: "hidden",
            maxWidth: "100vw",
            pointerEvents: "none",
          }}
        >
          {lang === "hi" ? "समर्पण" : "DEDICATION"}
        </div>

        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            position: "relative",
            zIndex: 10,
          }}
        >
          <FadeInSection>
            <div
              style={{
                textAlign: "center",
                marginBottom: "2rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: `linear-gradient(135deg, ${COLORS.saffron}15, ${COLORS.saffron}30)`,
                  padding: "8px 24px",
                  borderRadius: "30px",
                  border: `1px solid ${COLORS.saffron}40`,
                  marginBottom: "1rem",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    width: 7,
                    height: 7,
                    borderRadius: "1px",
                    background: COLORS.saffron,
                    opacity: 0.8,
                    transform: "rotate(45deg)",
                    flexShrink: 0,
                  }}
                ></span>
                <span
                  style={{
                    color: COLORS.saffronDark,
                    fontWeight: 600,
                    letterSpacing: "0.6px",
                    textTransform: "uppercase",
                    fontSize: "0.78rem",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  {lang === "hi" ? "निःस्वार्थ सेवा" : "Selfless Service"}
                </span>
                <span
                  style={{
                    display: "inline-block",
                    width: 7,
                    height: 7,
                    borderRadius: "1px",
                    background: COLORS.saffron,
                    opacity: 0.8,
                    transform: "rotate(45deg)",
                    flexShrink: 0,
                  }}
                ></span>
              </div>
              <h2
                className="heading-primary"
                style={{
                  fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                  color: COLORS.greenDark,
                  textShadow: "0 2px 10px rgba(0,0,0,0.05)",
                }}
              >
                {lang === "hi"
                  ? "ज़मीनी स्तर पर हमारे कदम"
                  : "Our Footsteps on the Ground"}
              </h2>
            </div>

            <CoverflowSlider images={SLIDER_IMAGES} />
          </FadeInSection>
        </div>
      </section>

      {/* IMPACT SECTION */}
      <section
        id="impact"
        className="section-padding"
        style={{
          background: `linear-gradient(135deg, #F4FBF4 0%, #E9F5E9 100%)`,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Massive Background Typography in Hindi */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "clamp(4rem, 20vw, 25rem)",
            fontWeight: 900,
            color: COLORS.green,
            opacity: 0.03,
            whiteSpace: "nowrap",
            zIndex: 0,
            userSelect: "none",
            overflow: "hidden",
            maxWidth: "100vw",
            pointerEvents: "none",
          }}
        >
          {lang === "hi" ? "प्रभाव" : "IMPACT"}
        </div>

        {/* Decorative Grid and Blur Elements */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `radial-gradient(${COLORS.green}20 1.5px, transparent 1.5px)`,
            backgroundSize: "30px 30px",
            opacity: 0.3,
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "10%",
            width: "400px",
            height: "400px",
            background: `radial-gradient(circle, ${COLORS.saffron} 0%, transparent 70%)`,
            opacity: 0.1,
            filter: "blur(60px)",
            borderRadius: "50%",
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-10%",
            right: "-10%",
            width: "500px",
            height: "500px",
            background: `radial-gradient(circle, ${COLORS.green} 0%, transparent 70%)`,
            opacity: 0.1,
            filter: "blur(60px)",
            borderRadius: "50%",
            zIndex: 0,
          }}
        />

        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 2rem",
            position: "relative",
            zIndex: 10,
          }}
        >
          <FadeInSection>
            <div
              style={{
                textAlign: "center",
                marginBottom: "5rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: `rgba(255,255,255,0.7)`,
                  padding: "8px 24px",
                  borderRadius: "30px",
                  border: `1px solid ${COLORS.green}30`,
                  marginBottom: "1rem",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.03)",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    width: 7,
                    height: 7,
                    borderRadius: "1px",
                    background: COLORS.green,
                    opacity: 0.8,
                    transform: "rotate(45deg)",
                    flexShrink: 0,
                  }}
                ></span>
                <span
                  style={{
                    color: COLORS.greenDark,
                    fontWeight: 600,
                    letterSpacing: "0.6px",
                    textTransform: "uppercase",
                    fontSize: "0.78rem",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  {lang === "hi" ? "सकारात्मक बदलाव" : "Positive Change"}
                </span>
                <span
                  style={{
                    display: "inline-block",
                    width: 7,
                    height: 7,
                    borderRadius: "1px",
                    background: COLORS.green,
                    opacity: 0.8,
                    transform: "rotate(45deg)",
                    flexShrink: 0,
                  }}
                ></span>
              </div>
              <h2
                className="heading-primary"
                style={{
                  fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                  color: COLORS.greenDark,
                  textShadow: "0 2px 10px rgba(0,0,0,0.05)",
                }}
              >
                {lang === "hi"
                  ? "हमारा समाज पर प्रभाव"
                  : "Our Impact on Society"}
              </h2>
              <div
                style={{
                  width: 100,
                  height: 6,
                  background: `linear-gradient(90deg, ${COLORS.saffron}, ${COLORS.green})`,
                  margin: "20px auto 0",
                  borderRadius: 10,
                }}
              />
            </div>
          </FadeInSection>
          <div className="grid-cols-3" style={{ gap: "2.5rem" }}>
            {(lang === "hi" ? IMPACT_STATS_HI : IMPACT_STATS_EN).map(
              (stat, i) => (
                <FadeInSection key={i} delay={i * 100}>
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    label={stat.label}
                  />
                </FadeInSection>
              ),
            )}
          </div>
        </div>
      </section>

      {/* AWARDS SECTION */}
      <section
        id="awards"
        className="section-padding"
        style={{
          background: "linear-gradient(180deg, #FFFDF8 0%, #FFFFFF 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Massive Background Typography in Hindi */}
        <div
          style={{
            position: "absolute",
            top: "5%",
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: "clamp(4rem, 18vw, 22rem)",
            fontWeight: 900,
            color: COLORS.saffron,
            opacity: 0.03,
            whiteSpace: "nowrap",
            zIndex: 0,
            userSelect: "none",
            overflow: "hidden",
            maxWidth: "100vw",
            pointerEvents: "none",
          }}
        >
          {lang === "hi" ? "सम्मान" : "HONORS"}
        </div>

        {/* Decorative Grid Lines Background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `linear-gradient(90deg, rgba(232, 97, 44, 0.03) 1px, transparent 1px), linear-gradient(rgba(232, 97, 44, 0.03) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "30%",
            right: "-10%",
            width: "500px",
            height: "500px",
            background: `radial-gradient(circle, ${COLORS.saffron} 0%, transparent 70%)`,
            opacity: 0.08,
            filter: "blur(60px)",
            borderRadius: "50%",
            zIndex: 0,
          }}
        />

        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 2rem",
            position: "relative",
            zIndex: 10,
          }}
        >
          <FadeInSection>
            <div
              style={{
                textAlign: "center",
                marginBottom: "5rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: `linear-gradient(135deg, ${COLORS.saffron}15, ${COLORS.saffron}30)`,
                  padding: "8px 24px",
                  borderRadius: "30px",
                  border: `1px solid ${COLORS.saffron}40`,
                  marginBottom: "1rem",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    width: 7,
                    height: 7,
                    borderRadius: "1px",
                    background: COLORS.saffron,
                    opacity: 0.8,
                    transform: "rotate(45deg)",
                    flexShrink: 0,
                  }}
                ></span>
                <span
                  style={{
                    color: COLORS.saffronDark,
                    fontWeight: 600,
                    letterSpacing: "0.6px",
                    textTransform: "uppercase",
                    fontSize: "0.78rem",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  {lang === "hi" ? "पुरस्कार" : "Awards"}
                </span>
                <span
                  style={{
                    display: "inline-block",
                    width: 7,
                    height: 7,
                    borderRadius: "1px",
                    background: COLORS.saffron,
                    opacity: 0.8,
                    transform: "rotate(45deg)",
                    flexShrink: 0,
                  }}
                ></span>
              </div>
              <h2
                className="heading-primary"
                style={{
                  fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                  color: COLORS.greenDark,
                  textShadow: "0 2px 10px rgba(0,0,0,0.05)",
                }}
              >
                {lang === "hi" ? "सम्मान एवं पुरस्कार" : "Honors and Awards"}
              </h2>
              <div
                style={{
                  width: 100,
                  height: 6,
                  background: `linear-gradient(90deg, ${COLORS.saffron}, ${COLORS.green})`,
                  margin: "20px auto 0",
                  borderRadius: 10,
                  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                }}
              />
            </div>
          </FadeInSection>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(min(280px, 100%), 1fr))",
              gap: "2rem",
            }}
          >
            {(lang === "hi" ? AWARDS_HI : AWARDS_EN).map((award, i) => (
              <FadeInSection key={i} delay={i * 100}>
                <div
                  style={{
                    background: "#fff",
                    borderRadius: "24px",
                    padding: "3rem 2.5rem",
                    position: "relative",
                    overflow: "hidden",
                    border: "1px solid rgba(0,0,0,0.04)",
                    boxShadow: "0 15px 35px rgba(0,0,0,0.04)",
                    transition:
                      "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    zIndex: 1,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform =
                      "translateY(-12px) scale(1.02)";
                    e.currentTarget.style.boxShadow =
                      "0 25px 50px rgba(232,97,44,0.1)";
                    e.currentTarget.style.borderColor = `${COLORS.saffron}50`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0) scale(1)";
                    e.currentTarget.style.boxShadow =
                      "0 15px 35px rgba(0,0,0,0.04)";
                    e.currentTarget.style.borderColor = "rgba(0,0,0,0.04)";
                  }}
                >
                  {/* Background Watermark Icon */}
                  <div
                    style={{
                      position: "absolute",
                      top: "-20px",
                      right: "-20px",
                      fontSize: "10rem",
                      opacity: 0.03,
                      transform: "rotate(15deg)",
                      zIndex: -1,
                      userSelect: "none",
                    }}
                  >
                    🏵️
                  </div>

                  {/* Floating Accent Blob */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: "-30px",
                      left: "-30px",
                      width: "120px",
                      height: "120px",
                      background: `radial-gradient(circle, ${COLORS.saffron} 0%, transparent 70%)`,
                      opacity: 0.15,
                      zIndex: -1,
                    }}
                  />

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1.5rem",
                      marginBottom: "1.5rem",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: 900,
                        color: "#fff",
                        background: `linear-gradient(135deg, ${COLORS.saffron}, ${COLORS.saffronDark})`,
                        width: 70,
                        height: 70,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "20px",
                        boxShadow: `0 10px 20px ${COLORS.saffron}30`,
                        flexShrink: 0,
                      }}
                    >
                      {award.year}
                    </div>
                    <h3
                      style={{
                        fontSize: "1.4rem",
                        fontWeight: 800,
                        color: COLORS.greenDark,
                        lineHeight: 1.3,
                      }}
                    >
                      {award.title}
                    </h3>
                  </div>

                  <p
                    style={{
                      color: "#555",
                      lineHeight: 1.8,
                      fontSize: "1.1rem",
                      flexGrow: 1,
                    }}
                  >
                    {award.desc}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* MEDIA & NEWS SECTION */}
      <section
        id="media"
        className="section-padding"
        style={{
          background: "linear-gradient(135deg, #696972ff 0%, #727274ff 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Massive Background Typography */}
        <div
          style={{
            position: "absolute",
            top: "5%",
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: "clamp(4rem, 18vw, 20rem)",
            fontWeight: 900,
            color: "#ffffff",
            opacity: 0.02,
            whiteSpace: "nowrap",
            zIndex: 0,
            userSelect: "none",
            overflow: "hidden",
            maxWidth: "100vw",
            pointerEvents: "none",
          }}
        >
          MEDIA
        </div>

        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 2rem",
            position: "relative",
            zIndex: 10,
          }}
        >
          <FadeInSection>
            <div
              style={{
                textAlign: "center",
                marginBottom: "5rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: `rgba(255,255,255,0.1)`,
                  padding: "8px 24px",
                  borderRadius: "30px",
                  border: `1px solid rgba(255,255,255,0.2)`,
                  marginBottom: "1rem",
                  backdropFilter: "blur(10px)",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    width: 7,
                    height: 7,
                    borderRadius: "1px",
                    background: "rgba(255,255,255,0.9)",
                    transform: "rotate(45deg)",
                    flexShrink: 0,
                  }}
                ></span>
                <span
                  style={{
                    color: "#fff",
                    fontWeight: 600,
                    letterSpacing: "0.6px",
                    textTransform: "uppercase",
                    fontSize: "0.78rem",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  {lang === "hi" ? "मीडिया कवरेज" : "Media Coverage"}
                </span>
                <span
                  style={{
                    display: "inline-block",
                    width: 7,
                    height: 7,
                    borderRadius: "1px",
                    background: "rgba(255,255,255,0.9)",
                    transform: "rotate(45deg)",
                    flexShrink: 0,
                  }}
                ></span>
              </div>
              <h2
                className="heading-primary"
                style={{
                  fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                  color: "#fff",
                  textShadow: "0 2px 10px rgba(0,0,0,0.5)",
                }}
              >
                {lang === "hi"
                  ? "समाचार और सोशल मीडिया"
                  : "News and Social Media"}
              </h2>
              <div
                style={{
                  width: 100,
                  height: 6,
                  background: `linear-gradient(90deg, ${COLORS.saffron}, #D45017)`,
                  margin: "20px auto 0",
                  borderRadius: 10,
                  boxShadow: "0 4px 10px rgba(232, 97, 44, 0.4)",
                }}
              />
            </div>
          </FadeInSection>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(min(300px, 100%), 1fr))",
              gap: "2rem",
            }}
          >
            {(lang === "hi" ? MEDIA_LINKS_HI : MEDIA_LINKS_EN).map(
              (link, i) => (
                <FadeInSection key={i} delay={(i % 3) * 100}>
                  {link.type === "youtube" ? (
                    <div
                      style={{
                        background: "#000",
                        borderRadius: "24px",
                        overflow: "hidden",
                        boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        transition: "transform 0.4s",
                        cursor: "pointer",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.transform = "scale(1.03)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.transform = "scale(1)")
                      }
                    >
                      <iframe
                        width="100%"
                        height="280"
                        src={link.url}
                        title={link.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{ display: "block", flexShrink: 0 }}
                      ></iframe>
                      <div
                        style={{
                          padding: "1.5rem",
                          background: "rgba(255,255,255,0.05)",
                          backdropFilter: "blur(10px)",
                          flexGrow: 1,
                        }}
                      >
                        <h4
                          style={{
                            color: "#fff",
                            fontSize: "1.1rem",
                            fontWeight: 700,
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            lineHeight: 1.5,
                          }}
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="#FF0000"
                            width="28"
                            height="28"
                            style={{ flexShrink: 0 }}
                          >
                            <path d="M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
                          </svg>
                          {link.title}
                        </h4>
                      </div>
                    </div>
                  ) : (
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        display: "block",
                        textDecoration: "none",
                        height: "100%",
                      }}
                    >
                      <div
                        style={{
                          background: "rgba(255,255,255,0.03)",
                          borderRadius: "24px",
                          overflow: "hidden",
                          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                          border: "1px solid rgba(255,255,255,0.1)",
                          backdropFilter: "blur(20px)",
                          transition: "all 0.4s",
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                          padding: "2.5rem 2rem",
                          position: "relative",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "translateY(-10px)";
                          e.currentTarget.style.background =
                            "rgba(255,255,255,0.08)";
                          e.currentTarget.style.borderColor =
                            "rgba(255,255,255,0.3)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "translateY(0)";
                          e.currentTarget.style.background =
                            "rgba(255,255,255,0.03)";
                          e.currentTarget.style.borderColor =
                            "rgba(255,255,255,0.1)";
                        }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            top: "-20px",
                            right: "-20px",
                            opacity: 0.1,
                            pointerEvents: "none",
                          }}
                        >
                          {link.type === "facebook" ? (
                            <svg
                              viewBox="0 0 24 24"
                              fill="#1877F2"
                              width="150"
                              height="150"
                            >
                              <path d="M12 2.04c-5.5 0-10 4.48-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 008.44-9.9c0-5.54-4.5-10.02-10-10.02z" />
                            </svg>
                          ) : (
                            <svg
                              viewBox="0 0 24 24"
                              fill="#E1306C"
                              width="150"
                              height="150"
                            >
                              <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.36.88.4.4.66.8.88 1.36.16.43.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.88 1.36-.4.4-.8.66-1.36.88-.43.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.36-.88-.4-.4-.66-.8-.88-1.36-.16-.43-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.88-1.36.4-.4.8-.66 1.36-.88.43-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07 5.77.13 4.89.33 4.14.62c-.78.3-1.44.71-2.1 1.37-.66.66-1.07 1.32-1.37 2.1-.29.75-.49 1.63-.55 2.91C.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.28.26 2.16.55 2.91.3.78.71 1.44 1.37 2.1.66.66 1.32 1.07 2.1 1.37.75.29 1.63.49 2.91.55 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c1.28-.06 2.16-.26 2.91-.55.78-.3 1.44-.71 2.1-1.37.66-.66 1.07-1.32 1.37-2.1.29-.75.49-1.63.55-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.28-.26-2.16-.55-2.91-.3-.78-.71-1.44-1.37-2.1-.66-.66-1.32-1.07-2.1-1.37-.75-.29-1.63-.49-2.91-.55C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1018.16 12 6.16 6.16 0 0012 5.84zm0 10.16A4 4 0 1116 12a4 4 0 01-4 4zm6.41-11.23a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
                            </svg>
                          )}
                        </div>
                        <div
                          style={{
                            display: "flex",
                            gap: "1rem",
                            alignItems: "center",
                            marginBottom: "1.5rem",
                            position: "relative",
                            zIndex: 1,
                          }}
                        >
                          {link.type === "facebook" ? (
                            <svg
                              viewBox="0 0 24 24"
                              fill="#1877F2"
                              width="36"
                              height="36"
                              style={{ flexShrink: 0 }}
                            >
                              <path d="M12 2.04c-5.5 0-10 4.48-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 008.44-9.9c0-5.54-4.5-10.02-10-10.02z" />
                            </svg>
                          ) : (
                            <svg
                              viewBox="0 0 24 24"
                              fill="#E1306C"
                              width="36"
                              height="36"
                              style={{ flexShrink: 0 }}
                            >
                              <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.36.88.4.4.66.8.88 1.36.16.43.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.88 1.36-.4.4-.8.66-1.36.88-.43.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.36-.88-.4-.4-.66-.8-.88-1.36-.16-.43-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.88-1.36.4-.4.8-.66 1.36-.88.43-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07 5.77.13 4.89.33 4.14.62c-.78.3-1.44.71-2.1 1.37-.66.66-1.07 1.32-1.37 2.1-.29.75-.49 1.63-.55 2.91C.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.28.26 2.16.55 2.91.3.78.71 1.44 1.37 2.1.66.66 1.32 1.07 2.1 1.37.75.29 1.63.49 2.91.55 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c1.28-.06 2.16-.26 2.91-.55.78-.3 1.44-.71 2.1-1.37.66-.66 1.07-1.32 1.37-2.1.29-.75.49-1.63.55-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.28-.26-2.16-.55-2.91-.3-.78-.71-1.44-1.37-2.1-.66-.66-1.32-1.07-2.1-1.37-.75-.29-1.63-.49-2.91-.55C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1018.16 12 6.16 6.16 0 0012 5.84zm0 10.16A4 4 0 1116 12a4 4 0 01-4 4zm6.41-11.23a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
                            </svg>
                          )}
                          <h4
                            style={{
                              color: "#fff",
                              fontSize: "1.2rem",
                              fontWeight: 800,
                            }}
                          >
                            {link.type === "facebook"
                              ? "Facebook"
                              : "Instagram"}
                          </h4>
                        </div>
                        <h5
                          style={{
                            color: "rgba(255,255,255,1)",
                            fontSize: "1.1rem",
                            lineHeight: 1.6,
                            fontWeight: 500,
                            position: "relative",
                            zIndex: 1,
                            marginBottom: "2rem",
                            flexGrow: 1,
                          }}
                        >
                          {link.title}
                        </h5>
                        <div
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "8px",
                            background: "rgba(255,255,255,0.1)",
                            padding: "10px 20px",
                            borderRadius: "8px",
                            color: "#fff",
                            fontWeight: 700,
                            width: "fit-content",
                            marginTop: "auto",
                          }}
                        >
                          <span style={{ fontSize: "0.95rem", opacity: 0.9 }}>
                            {link.type === "facebook"
                              ? "Watch on Facebook "
                              : "View Post "}
                          </span>{" "}
                          ➔
                        </div>
                      </div>
                    </a>
                  )}
                </FadeInSection>
              ),
            )}
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section
        id="gallery"
        className="section-padding"
        style={{
          background: "linear-gradient(135deg, #F0FDF4 0%, #FFFFFF 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative Blur Elements */}
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "-5%",
            width: "clamp(150px,35vw,400px)",
            height: "clamp(150px,35vw,400px)",
            background: `radial-gradient(circle, ${COLORS.green} 0%, transparent 70%)`,
            opacity: 0.06,
            filter: "blur(50px)",
            borderRadius: "50%",
            zIndex: 0,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "10%",
            right: "-5%",
            width: "clamp(150px,40vw,500px)",
            height: "clamp(150px,40vw,500px)",
            background: `radial-gradient(circle, ${COLORS.saffron} 0%, transparent 70%)`,
            opacity: 0.05,
            filter: "blur(50px)",
            borderRadius: "50%",
            zIndex: 0,
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 1rem",
            position: "relative",
            zIndex: 10,
          }}
        >
          <FadeInSection>
            <div
              style={{
                textAlign: "center",
                marginBottom: "2.5rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: `linear-gradient(135deg, ${COLORS.green}15, ${COLORS.green}30)`,
                  padding: "8px 24px",
                  borderRadius: "30px",
                  border: `1px solid ${COLORS.green}40`,
                  marginBottom: "1rem",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    width: 7,
                    height: 7,
                    borderRadius: "1px",
                    background: COLORS.green,
                    opacity: 0.8,
                    transform: "rotate(45deg)",
                    flexShrink: 0,
                  }}
                ></span>
                <span
                  style={{
                    color: COLORS.greenDark,
                    fontWeight: 600,
                    letterSpacing: "0.6px",
                    textTransform: "uppercase",
                    fontSize: "0.78rem",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  {lang === "hi" ? "चित्र दीर्घा" : "Picture Gallery"}
                </span>
                <span
                  style={{
                    display: "inline-block",
                    width: 7,
                    height: 7,
                    borderRadius: "1px",
                    background: COLORS.green,
                    opacity: 0.8,
                    transform: "rotate(45deg)",
                    flexShrink: 0,
                  }}
                ></span>
              </div>
              <h2
                className="heading-primary"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  color: COLORS.greenDark,
                }}
              >
                {lang === "hi"
                  ? "सेवाकार्य की झलकियां"
                  : "Glimpses of Service Work"}
              </h2>
              <div
                style={{
                  width: 80,
                  height: 5,
                  background: `linear-gradient(90deg, ${COLORS.saffron}, ${COLORS.green})`,
                  margin: "14px auto 0",
                  borderRadius: 10,
                }}
              />
              <p
                style={{
                  color: "#999",
                  marginTop: "0.6rem",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                }}
              >
                {lang === "hi"
                  ? "किसी भी तस्वीर पर क्लिक करें — पूरा देखें"
                  : "Click any photo to view fullscreen"}
              </p>
            </div>
          </FadeInSection>

          {/* Modern uniform grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fill, minmax(min(190px, 100%), 1fr))",
              gap: "0.75rem",
            }}
          >
            {(lang === "hi" ? GALLERY_ITEMS_HI : GALLERY_ITEMS_EN).map(
              (item, i) => (
                <FadeInSection key={i} delay={(i % 5) * 50}>
                  <div
                    onClick={() => setSelectedImage(item.img)}
                    style={{
                      position: "relative",
                      borderRadius: "12px",
                      overflow: "hidden",
                      height: "180px",
                      cursor: "zoom-in",
                      boxShadow: "0 3px 10px rgba(0,0,0,0.09)",
                      border: "3px solid #fff",
                      background: "#e8e8e8",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.04)";
                      e.currentTarget.style.boxShadow =
                        "0 12px 30px rgba(0,0,0,0.18)";
                      e.currentTarget.querySelector(".gc-img").style.transform =
                        "scale(1.12)";
                      e.currentTarget.querySelector(".gc-ov").style.opacity =
                        "1";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.boxShadow =
                        "0 3px 10px rgba(0,0,0,0.09)";
                      e.currentTarget.querySelector(".gc-img").style.transform =
                        "scale(1)";
                      e.currentTarget.querySelector(".gc-ov").style.opacity =
                        "0";
                    }}
                  >
                    <img
                      className="gc-img"
                      src={item.img}
                      alt={item.label}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                        transition: "transform 0.5s ease",
                      }}
                    />
                    <div
                      className="gc-ov"
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(to top, rgba(0,30,10,0.80) 0%, rgba(232,97,44,0.2) 60%, transparent 100%)",
                        opacity: 0,
                        transition: "opacity 0.35s ease",
                        display: "flex",
                        alignItems: "flex-end",
                        padding: "0.6rem 0.75rem",
                      }}
                    >
                      <span
                        style={{
                          color: "#fff",
                          fontWeight: 700,
                          fontSize: "0.78rem",
                          textShadow: "0 1px 4px rgba(0,0,0,0.8)",
                        }}
                      >
                        🔍 {item.label}
                      </span>
                    </div>
                    <div
                      style={{
                        position: "absolute",
                        top: 7,
                        right: 7,
                        background: "rgba(255,255,255,0.88)",
                        backdropFilter: "blur(4px)",
                        borderRadius: "50%",
                        width: 24,
                        height: 24,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "0.65rem",
                        fontWeight: 800,
                        color: COLORS.greenDark,
                        boxShadow: "0 1px 6px rgba(0,0,0,0.14)",
                      }}
                    >
                      {i + 1}
                    </div>
                  </div>
                </FadeInSection>
              ),
            )}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="section-padding"
        style={{
          background: "linear-gradient(180deg, #FFFFFF 0%, #FFFDF8 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Massive Background Typography in Hindi */}
        <div
          style={{
            position: "absolute",
            top: "5%",
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: "clamp(4rem, 20vw, 25rem)",
            fontWeight: 900,
            color: COLORS.saffron,
            opacity: 0.03,
            whiteSpace: "nowrap",
            zIndex: 0,
            userSelect: "none",
            overflow: "hidden",
            maxWidth: "100vw",
            pointerEvents: "none",
          }}
        >
          {lang === "hi" ? "संपर्क" : "CONTACT"}
        </div>

        {/* Decorative Grid Lines Background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
            zIndex: 0,
          }}
        />

        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 2rem",
            position: "relative",
            zIndex: 10,
          }}
        >
          <FadeInSection>
            <div
              style={{
                textAlign: "center",
                marginBottom: "5rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: `linear-gradient(135deg, ${COLORS.saffron}15, ${COLORS.saffron}30)`,
                  padding: "8px 24px",
                  borderRadius: "30px",
                  border: `1px solid ${COLORS.saffron}40`,
                  marginBottom: "1rem",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    width: 7,
                    height: 7,
                    borderRadius: "1px",
                    background: COLORS.saffron,
                    opacity: 0.8,
                    transform: "rotate(45deg)",
                    flexShrink: 0,
                  }}
                ></span>
                <span
                  style={{
                    color: COLORS.saffronDark,
                    fontWeight: 600,
                    letterSpacing: "0.6px",
                    textTransform: "uppercase",
                    fontSize: "0.78rem",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  {lang === "hi" ? "जुड़ें" : "Connect"}
                </span>
                <span
                  style={{
                    display: "inline-block",
                    width: 7,
                    height: 7,
                    borderRadius: "1px",
                    background: COLORS.saffron,
                    opacity: 0.8,
                    transform: "rotate(45deg)",
                    flexShrink: 0,
                  }}
                ></span>
              </div>
              <h2
                className="heading-primary"
                style={{
                  fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                  color: COLORS.greenDark,
                  textShadow: "0 2px 10px rgba(0,0,0,0.05)",
                }}
              >
                {lang === "hi" ? "हमसे संपर्क करें" : "Contact Us"}
              </h2>
              <div
                style={{
                  width: 100,
                  height: 6,
                  background: `linear-gradient(90deg, ${COLORS.saffron}, ${COLORS.green})`,
                  margin: "20px auto 0",
                  borderRadius: 10,
                  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                }}
              />
            </div>
          </FadeInSection>

          {/* New 2-column wide layout */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "3rem" }}>
            {/* LEFT COLUMN: Map & Info */}
            <div
              style={{
                flex: "1 1 400px",
                maxWidth: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
              }}
            >
              {/* Contact Info Grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
                  gap: "1rem",
                }}
              >
                {/* Phone Card */}
                <a
                  href="tel:+917991176312"
                  style={{
                    background: `linear-gradient(135deg, #F5A96D, #E89156)`,
                    color: "#fff",
                    padding: "1.25rem 1rem",
                    borderRadius: "14px",
                    boxShadow: "0 4px 12px rgba(232, 97, 44, 0.15)",
                    border: "none",
                    textDecoration: "none",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "0.6rem",
                    textAlign: "center",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow = `0 8px 18px rgba(232, 97, 44, 0.25)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = `0 4px 12px rgba(232, 97, 44, 0.15)`;
                  }}
                >
                  <div
                    style={{
                      fontSize: "1.5rem",
                      width: 42,
                      height: 42,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "rgba(255,255,255,0.25)",
                      borderRadius: "10px",
                    }}
                  >
                    📞
                  </div>
                  <div>
                    <h4
                      style={{
                        fontWeight: 700,
                        marginBottom: "0.2rem",
                        fontSize: "0.9rem",
                        margin: 0,
                      }}
                    >
                      {lang === "hi" ? "फ़ोन" : "Phone"}
                    </h4>
                    <p
                      style={{
                        fontSize: "0.8rem",
                        fontWeight: 600,
                        margin: 0,
                        opacity: 0.95,
                        lineHeight: "1.2",
                      }}
                    >
                      +91 79911 76312
                    </p>
                  </div>
                </a>

                {/* Email Card */}
                <button
                  onClick={() => {
                    window.location.href = "mailto:erkuljeetbsl@gmail.com";
                  }}
                  style={{
                    background: `linear-gradient(135deg, #6BC16B, #54A054)`,
                    color: "#fff",
                    padding: "1.25rem 1rem",
                    borderRadius: "14px",
                    boxShadow: "0 4px 12px rgba(45, 106, 45, 0.15)",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "0.6rem",
                    textAlign: "center",
                    fontFamily: "inherit",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow = `0 8px 18px rgba(45, 106, 45, 0.25)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = `0 4px 12px rgba(45, 106, 45, 0.15)`;
                  }}
                >
                  <div
                    style={{
                      fontSize: "1.5rem",
                      width: 42,
                      height: 42,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "rgba(255,255,255,0.25)",
                      borderRadius: "10px",
                    }}
                  >
                    ✉️
                  </div>
                  <div>
                    <h4
                      style={{
                        fontWeight: 700,
                        marginBottom: "0.2rem",
                        fontSize: "0.9rem",
                        margin: 0,
                      }}
                    >
                      {lang === "hi" ? "ईमेल" : "Email"}
                    </h4>
                    <p
                      style={{
                        fontSize: "0.8rem",
                        fontWeight: 600,
                        margin: 0,
                        opacity: 0.95,
                        wordBreak: "break-word",
                        lineHeight: "1.2",
                      }}
                    >
                      erkuljeetbsl@gmail.com
                    </p>
                  </div>
                </button>
              </div>

              {/* Social Media Links */}
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <a
                  href="https://wa.me/917991176312"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    background: "#25D366",
                    color: "#fff",
                    padding: "12px 24px",
                    borderRadius: "30px",
                    textDecoration: "none",
                    fontWeight: 700,
                    fontSize: "1.1rem",
                    boxShadow: "0 8px 20px rgba(37,211,102,0.3)",
                    transition: "transform 0.3s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "translateY(-3px)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "translateY(0)")
                  }
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    width="20"
                    height="20"
                  >
                    <path d="M12.03 2A9.97 9.97 0 002 11.94c0 1.75.46 3.44 1.32 4.95L2 22l5.24-1.37a9.97 9.97 0 004.8 1.2h.01A9.97 9.97 0 0022 11.95 9.98 9.98 0 0012.03 2zm0 18.15a8.29 8.29 0 01-4.22-1.15l-.3-.18-3.13.82.83-3.05-.2-.31A8.28 8.28 0 013.7 11.95a8.29 8.29 0 0114.15-5.85 8.26 8.26 0 012.44 5.86 8.28 8.28 0 01-8.26 8.24zm4.53-6.18c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.16.25-.64.81-.79.98-.14.16-.29.18-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.44.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.49-.4-.42-.56-.43h-.48c-.17 0-.44.06-.68.32-.23.25-.91.89-.91 2.16 0 1.28.93 2.51 1.06 2.69.12.16 1.83 2.79 4.44 3.89.62.26 1.1.42 1.48.54.62.2 1.18.17 1.63.1.5-.07 1.47-.6 1.68-1.18.2-.58.2-1.08.14-1.18-.06-.1-.23-.16-.48-.28z" />
                  </svg>
                  WhatsApp
                </a>
                <a
                  href="https://www.facebook.com/share/1B5FsNSPw2/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    background: "#1877F2",
                    color: "#fff",
                    padding: "12px 24px",
                    borderRadius: "30px",
                    textDecoration: "none",
                    fontWeight: 700,
                    fontSize: "1.1rem",
                    boxShadow: "0 8px 20px rgba(24,119,242,0.3)",
                    transition: "transform 0.3s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "translateY(-3px)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "translateY(0)")
                  }
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    width="20"
                    height="20"
                  >
                    <path d="M12 2.04c-5.5 0-10 4.48-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 008.44-9.9c0-5.54-4.5-10.02-10-10.02z" />
                  </svg>
                  Facebook
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    background: "#FF0000",
                    color: "#fff",
                    padding: "12px 24px",
                    borderRadius: "30px",
                    textDecoration: "none",
                    fontWeight: 700,
                    fontSize: "1.1rem",
                    boxShadow: "0 8px 20px rgba(255,0,0,0.3)",
                    transition: "transform 0.3s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "translateY(-3px)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "translateY(0)")
                  }
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    width="20"
                    height="20"
                  >
                    <path d="M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
                  </svg>
                  YouTube
                </a>
              </div>

              {/* Google Map */}
              <div
                style={{
                  background: "#fff",
                  padding: "1rem",
                  borderRadius: "24px",
                  boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
                  flexGrow: 1,
                  minHeight: "350px",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div style={{ padding: "0 1rem 1rem" }}>
                  <h4
                    style={{
                      fontWeight: 800,
                      color: COLORS.greenDark,
                      fontSize: "1.4rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {lang === "hi" ? "हमारा पता" : "Our Address"}
                  </h4>
                  <p style={{ color: "#666", fontWeight: 500 }}>
                    {lang === "hi"
                      ? "राम नगर, कुंजन टोला, कोईलवर, भोजपुर (बिहार) - 802160"
                      : "Ram Nagar, Kunjan Tola, Koilwar, Bhojpur (Bihar) - 802160"}
                  </p>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57603.83708340872!2d84.64257584863282!3d25.530387400000013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398d591adc9fd2cd%3A0x7ff0c0efd113795e!2sRam%20Nagar%2Ckunjantola%2Cahiran%20tola!5e0!3m2!1sen!2sin!4v1775288761404!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{
                    border: 0,
                    borderRadius: "16px",
                    minHeight: "350px",
                    flexGrow: 1,
                  }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* RIGHT COLUMN: Form */}
            <div
              style={{
                flex: "1 1 400px",
                maxWidth: "100%",
                background: "#fff",
                borderRadius: "24px",
                padding: "clamp(1.5rem, 5vw, 3rem)",
                boxShadow: "0 20px 50px rgba(0,0,0,0.08)",
                borderTop: `6px solid ${COLORS.saffron}`,
                position: "relative",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "-50px",
                  right: "-50px",
                  width: "200px",
                  height: "200px",
                  background: `radial-gradient(circle, ${COLORS.saffron} 0%, transparent 70%)`,
                  opacity: 0.08,
                  zIndex: 0,
                }}
              />

              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <h3
                  style={{
                    fontSize: "2.2rem",
                    color: COLORS.greenDark,
                    marginBottom: "0.5rem",
                    fontWeight: 800,
                  }}
                >
                  {lang === "hi" ? "हमें संदेश भेजें" : "Send Us A Message"}
                </h3>
                <p
                  style={{
                    color: "#666",
                    marginBottom: "2.5rem",
                    lineHeight: 1.6,
                    fontSize: "1.1rem",
                  }}
                >
                  {lang === "hi"
                    ? "क्या आप हमारे सामाजिक कार्यों से जुड़ना चाहते हैं? कृपया अपने विवरण भरें।"
                    : "Do you want to join our social efforts? Please fill in your details."}
                </p>

                {formSent ? (
                  <div
                    style={{
                      textAlign: "center",
                      padding: "4rem 0",
                      background: `${COLORS.green}05`,
                      borderRadius: "16px",
                      flexGrow: 1,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div style={{ fontSize: "5rem", marginBottom: "1rem" }}>
                      ✅
                    </div>
                    <h4
                      style={{
                        fontSize: "2rem",
                        color: COLORS.green,
                        marginBottom: "1rem",
                        fontWeight: 800,
                      }}
                    >
                      {lang === "hi"
                        ? "संदेश सफलता से गया!"
                        : "Message Sent Successfully!"}
                    </h4>
                    <p style={{ color: "#666", fontSize: "1.1rem" }}>
                      {lang === "hi"
                        ? "हम जल्द ही आपसे संपर्क करेंगे।"
                        : "We will contact you shortly."}
                    </p>
                  </div>
                ) : (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "1.5rem",
                      flexGrow: 1,
                    }}
                  >
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns:
                          "repeat(auto-fit, minmax(200px, 1fr))",
                        gap: "1.5rem",
                      }}
                    >
                      <div>
                        <label
                          style={{
                            display: "block",
                            marginBottom: "0.5rem",
                            fontWeight: 600,
                            color: "#444",
                          }}
                        >
                          {lang === "hi" ? "आपका नाम" : "Your Name"}{" "}
                          <span style={{ color: COLORS.saffron }}>*</span>
                        </label>
                        <input
                          type="text"
                          placeholder={
                            lang === "hi"
                              ? "पूरा नाम दर्ज करें"
                              : "Enter Full Name"
                          }
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          style={{
                            width: "100%",
                            padding: "1.2rem",
                            borderRadius: "12px",
                            border: "1px solid rgba(0,0,0,0.1)",
                            fontSize: "1rem",
                            background: "#F9F9F9",
                            outline: "none",
                            transition: "border-color 0.3s",
                          }}
                          onFocus={(e) =>
                            (e.target.style.borderColor = COLORS.saffron)
                          }
                          onBlur={(e) =>
                            (e.target.style.borderColor = "rgba(0,0,0,0.1)")
                          }
                        />
                      </div>
                      <div>
                        <label
                          style={{
                            display: "block",
                            marginBottom: "0.5rem",
                            fontWeight: 600,
                            color: "#444",
                          }}
                        >
                          {lang === "hi" ? "फ़ोन नंबर / ईमेल" : "Phone / Email"}{" "}
                          <span style={{ color: COLORS.saffron }}>*</span>
                        </label>
                        <input
                          type="text"
                          placeholder={
                            lang === "hi" ? "संपर्क विवरण" : "Contact Details"
                          }
                          value={formData.contact}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              contact: e.target.value,
                            })
                          }
                          style={{
                            width: "100%",
                            padding: "1.2rem",
                            borderRadius: "12px",
                            border: "1px solid rgba(0,0,0,0.1)",
                            fontSize: "1rem",
                            background: "#F9F9F9",
                            outline: "none",
                            transition: "border-color 0.3s",
                          }}
                          onFocus={(e) =>
                            (e.target.style.borderColor = COLORS.saffron)
                          }
                          onBlur={(e) =>
                            (e.target.style.borderColor = "rgba(0,0,0,0.1)")
                          }
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        style={{
                          display: "block",
                          marginBottom: "0.5rem",
                          fontWeight: 600,
                          color: "#444",
                        }}
                      >
                        {lang === "hi" ? "विषय" : "Subject"} (Optional)
                      </label>
                      <input
                        type="text"
                        placeholder={
                          lang === "hi"
                            ? "किस संबंध में बात करना चाहते हैं?"
                            : "What would you like to discuss?"
                        }
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        style={{
                          width: "100%",
                          padding: "1.2rem",
                          borderRadius: "12px",
                          border: "1px solid rgba(0,0,0,0.1)",
                          fontSize: "1rem",
                          background: "#F9F9F9",
                          outline: "none",
                          transition: "border-color 0.3s",
                        }}
                        onFocus={(e) =>
                          (e.target.style.borderColor = COLORS.saffron)
                        }
                        onBlur={(e) =>
                          (e.target.style.borderColor = "rgba(0,0,0,0.1)")
                        }
                      />
                    </div>

                    <div
                      style={{
                        flexGrow: 1,
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <label
                        style={{
                          display: "block",
                          marginBottom: "0.5rem",
                          fontWeight: 600,
                          color: "#444",
                        }}
                      >
                        {lang === "hi" ? "आपका संदेश" : "Your Message"}
                      </label>
                      <textarea
                        placeholder={
                          lang === "hi"
                            ? "अपना पूरा संदेश यहाँ लिखें..."
                            : "Write your full message here..."
                        }
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        style={{
                          width: "100%",
                          padding: "1.2rem",
                          borderRadius: "12px",
                          border: "1px solid rgba(0,0,0,0.1)",
                          fontSize: "1rem",
                          fontFamily: "inherit",
                          background: "#F9F9F9",
                          outline: "none",
                          resize: "none",
                          flexGrow: 1,
                          minHeight: "120px",
                          transition: "border-color 0.3s",
                        }}
                        onFocus={(e) =>
                          (e.target.style.borderColor = COLORS.saffron)
                        }
                        onBlur={(e) =>
                          (e.target.style.borderColor = "rgba(0,0,0,0.1)")
                        }
                      ></textarea>
                    </div>

                    <button
                      onClick={handleSubmit}
                      style={{
                        width: "100%",
                        background: `linear-gradient(90deg, ${COLORS.saffron}, #D45017)`,
                        color: "#fff",
                        padding: "1.2rem",
                        borderRadius: "12px",
                        fontSize: "1.2rem",
                        fontWeight: 800,
                        border: "none",
                        cursor: "pointer",
                        boxShadow: `0 10px 20px ${COLORS.saffron}40`,
                        transition: "all 0.3s ease",
                        marginTop: "0.5rem",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-3px)";
                        e.currentTarget.style.boxShadow = `0 15px 25px ${COLORS.saffron}60`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = `0 10px 20px ${COLORS.saffron}40`;
                      }}
                    >
                      {lang === "hi" ? "संदेश भेजें 🚀" : "Send Message 🚀"}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      {/* FOOTER */}
      <footer
        style={{
          background: "linear-gradient(180deg, #FFFFFF 0%, #F5F9F5 100%)",
          color: COLORS.greenDark,
          padding: "3rem 2rem 1.5rem",
          position: "relative",
          borderTop: "1px solid rgba(0,0,0,0.05)",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: `linear-gradient(90deg, ${COLORS.saffron}, ${COLORS.green}, ${COLORS.saffron})`,
          }}
        />

        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "3rem",
              borderBottom: "1px solid rgba(0,0,0,0.1)",
              paddingBottom: "2rem",
              marginBottom: "1.5rem",
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: "1.8rem",
                  color: COLORS.greenDark,
                  marginBottom: "1.5rem",
                  fontWeight: 800,
                }}
              >
                {lang === "hi" ? "श्री कुलजीत कुमार" : "Shri Kuljeet Kumar"}
              </h3>
              <p
                style={{
                  color: "#666",
                  lineHeight: 1.8,
                  paddingRight: "1rem",
                  fontSize: "1.1rem",
                  fontWeight: 500,
                }}
              >
                {lang === "hi"
                  ? "समाज की सेवा ही ईश्वर की सेवा है। वर्ष 2016 से निरंतर समाज विकास, शिक्षा, और कल्याण में समर्पित।"
                  : "Service to society is service to God. Dedicated to social development, education, and welfare constantly since 2016."}
              </p>
            </div>

            <div>
              <h4
                style={{
                  fontSize: "1.3rem",
                  marginBottom: "1.5rem",
                  fontWeight: 800,
                  color: COLORS.greenDark,
                }}
              >
                {lang === "hi" ? "उपयोगी लिंक" : "Useful Links"}
              </h4>
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                {(lang === "hi" ? NAV_LINKS_HI : NAV_LINKS_EN).map(
                  (link, i) => (
                    <li key={i}>
                      <a
                        href={`#${NAV_IDS[i]}`}
                        style={{
                          color: "#666",
                          textDecoration: "none",
                          fontWeight: 700,
                          transition: "color 0.3s",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "8px",
                        }}
                        onMouseOver={(e) =>
                          (e.target.style.color = COLORS.saffron)
                        }
                        onMouseOut={(e) => (e.target.style.color = "#666")}
                      >
                        <span style={{ fontSize: "0.9rem" }}>➔</span> {link}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>

            <div>
              <h4
                style={{
                  fontSize: "1.3rem",
                  marginBottom: "1.5rem",
                  fontWeight: 800,
                  color: COLORS.greenDark,
                }}
              >
                {lang === "hi" ? "सेवा क्षेत्र" : "Service Areas"}
              </h4>
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  color: "#666",
                  fontWeight: 700,
                }}
              >
                <li
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <span style={{ color: COLORS.saffron, fontSize: "1.2rem" }}>
                    ✦
                  </span>{" "}
                  {lang === "hi" ? "शिक्षा सेवा" : "Education Service"}
                </li>
                <li
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <span style={{ color: COLORS.saffron, fontSize: "1.2rem" }}>
                    ✦
                  </span>{" "}
                  {lang === "hi" ? "महिला कल्याण" : "Women's Welfare"}
                </li>
                <li
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <span style={{ color: COLORS.saffron, fontSize: "1.2rem" }}>
                    ✦
                  </span>{" "}
                  {lang === "hi" ? "ग्राम विकास" : "Village Development"}
                </li>
                <li
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <span style={{ color: COLORS.saffron, fontSize: "1.2rem" }}>
                    ✦
                  </span>{" "}
                  {lang === "hi" ? "आपदा राहत" : "Disaster Relief"}
                </li>
              </ul>
            </div>

            <div>
              <h4
                style={{
                  fontSize: "1.3rem",
                  marginBottom: "1.5rem",
                  fontWeight: 800,
                  color: COLORS.greenDark,
                }}
              >
                {lang === "hi" ? "प्रेरणादायक विचार" : "Inspiring Thoughts"}
              </h4>
              <div
                style={{
                  position: "relative",
                  padding: "1.5rem",
                  background: "#fff",
                  borderRadius: "16px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                  border: "1px solid rgba(0,0,0,0.03)",
                  transition: "transform 0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-5px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                <div
                  style={{
                    position: "absolute",
                    top: "-15px",
                    left: "15px",
                    fontSize: "3rem",
                    color: COLORS.saffron,
                    opacity: 0.3,
                    lineHeight: 1,
                  }}
                >
                  "
                </div>
                <p
                  style={{
                    color: "#555",
                    fontSize: "1.05rem",
                    lineHeight: 1.6,
                    fontWeight: 600,
                    fontStyle: "italic",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {lang === "hi"
                    ? "स्वार्थ से परे होकर, दूसरों के दुख को अपना समझना और उनके चेहरों पर मुस्कान लाना ही जीवन का सबसे बड़ा धर्म है।"
                    : "Rising above selfishness, understanding others' sorrows as one's own, and bringing smiles to their faces is the greatest duty of life."}
                </p>
                <div
                  style={{
                    marginTop: "1rem",
                    color: COLORS.saffron,
                    fontWeight: 800,
                    fontSize: "0.9rem",
                  }}
                >
                  — {lang === "hi" ? "श्री कुलजीत कुमार" : "Shri Kuljeet Kumar"}
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              alignItems: "center",
            }}
          >
            <p
              style={{
                color: "#777",
                fontWeight: 700,
                fontSize: "1rem",
                margin: 0,
              }}
            >
              &copy; 2026{" "}
              {lang === "hi"
                ? "श्री कुलजीत कुमार। सर्वाधिकार सुरक्षित।"
                : "Shri Kuljeet Kumar. All rights reserved."}
            </p>
            <div
              style={{
                width: "100%",
                maxWidth: "600px",
                height: "1px",
                background: "rgba(0,0,0,0.05)",
              }}
            />
            <p
              style={{
                color: "#888",
                fontWeight: 500,
                fontSize: "0.85rem",
                margin: 0,
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "10px",
              }}
            >
              <span>
                Developed by{" "}
                <span style={{ fontWeight: 700, color: COLORS.greenDark }}>
                  Buddha Developers
                </span>
              </span>
              <span style={{ color: "#ccc" }}>|</span>
              <span style={{ whiteSpace: "nowrap" }}>📞 8969715486</span>
              <span style={{ color: "#ccc" }}>|</span>
              <span style={{ whiteSpace: "nowrap" }}>
                ✉️ designexa8@gmail.com
              </span>
            </p>
          </div>
        </div>
      </footer>

      {/* FIXED STEP UP BUTTON */}
      <div
        onClick={handleStepUp}
        style={{
          position: "fixed",
          bottom: "30px",
          right: "30px",
          zIndex: 9999,
          background: `linear-gradient(135deg, ${COLORS.saffron}, #E8612C)`,
          width: "55px",
          height: "55px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          boxShadow: "0 10px 25px rgba(232, 97, 44, 0.4)",
          opacity: scrolled ? 1 : 0,
          transform: scrolled ? "translateY(0)" : "translateY(20px)",
          pointerEvents: scrolled ? "auto" : "none",
          transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        }}
        onMouseEnter={(e) => {
          if (scrolled) {
            e.currentTarget.style.transform = "translateY(-8px) scale(1.1)";
            e.currentTarget.style.boxShadow =
              "0 15px 35px rgba(232, 97, 44, 0.6)";
          }
        }}
        onMouseLeave={(e) => {
          if (scrolled) {
            e.currentTarget.style.transform = "translateY(0) scale(1)";
            e.currentTarget.style.boxShadow =
              "0 10px 25px rgba(232, 97, 44, 0.4)";
          }
        }}
        title="एक सेक्शन ऊपर जाएँ"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fff"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          width="28"
          height="28"
        >
          <path d="M18 15l-6-6-6 6" />
        </svg>
      </div>

      {/* FULLSCREEN IMAGE MODAL */}
      {selectedImage && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.9)",
            zIndex: 10000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
            backdropFilter: "blur(10px)",
            cursor: "zoom-out",
          }}
          onClick={() => setSelectedImage(null)}
        >
          <div
            style={{
              position: "relative",
              maxWidth: "95vw",
              maxHeight: "95vh",
            }}
          >
            <span
              style={{
                position: "absolute",
                top: "-40px",
                right: "0",
                color: "#fff",
                fontSize: "2.5rem",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              &times;
            </span>
            <img
              src={selectedImage}
              alt="Full Screen"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                maxHeight: "90vh",
                borderRadius: "8px",
                boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
              }}
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
}
