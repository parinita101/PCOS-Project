import { Link } from "react-router-dom";

function Home() {
  const articles = [
    {
      title: "Understanding PCOS Symptoms",
      text: "Learn about irregular cycles, acne, hormonal imbalance, and other common warning signs.",
      link: "https://www.mayoclinic.org/diseases-conditions/pcos/symptoms-causes/syc-20353439",
    },
    {
      title: "PCOS Diet Guide",
      text: "Nutrition strategies to improve insulin sensitivity and hormonal balance.",
      link: "https://www.healthline.com/nutrition/pcos-diet",
    },
    {
      title: "Exercise for PCOS",
      text: "Discover workouts that support metabolism and reproductive health.",
      link: "https://www.medicalnewstoday.com/articles/326560",
    },
    {
      title: "Mental Health & PCOS",
      text: "Understand emotional and psychological challenges linked to PCOS.",
      link: "https://www.verywellhealth.com/pcos-and-depression-2616644",
    },
    {
      title: "Fertility and PCOS",
      text: "Learn how PCOS impacts ovulation and fertility planning.",
      link: "https://www.nhs.uk/conditions/polycystic-ovary-syndrome-pcos/",
    },
    {
      title: "Importance of Early Detection",
      text: "Why early diagnosis improves long-term health outcomes.",
      link: "https://www.cdc.gov/diabetes/basics/pcos.html",
    },
  ];

  return (
    <div style={{ width: "100%", minHeight: "100vh" }}>
      {/* HERO */}
      <section style={heroStyle}>
        <h1 style={heroTitle}>PCOS Prediction & Health Tracker</h1>

        <p style={heroText}>
          Assess your PCOS risk, track symptoms, and access personalized
          reproductive health insights.
        </p>

        <Link to="/login" style={buttonStyle}>
          Get Started
        </Link>
      </section>

      {/* WHAT IS PCOS */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>What is PCOS?</h2>
        <p style={paragraphStyle}>
          Polycystic Ovary Syndrome (PCOS) is one of the most common hormonal
          disorders affecting women of reproductive age. It is associated with
          irregular ovulation, elevated androgen levels, insulin resistance,
          and metabolic complications. Common symptoms include irregular menstrual cycles, acne, excessive
          facial or body hair growth, scalp hair thinning, weight gain,
          fatigue, and fertility challenges. Early screening and lifestyle management can significantly improve
          health outcomes. Balanced nutrition, exercise, sleep, stress
          reduction, and medical consultation are commonly recommended.
        </p>
      </section>

      {/* SYMPTOMS */}
      <section style={altSectionStyle}>
        <h2 style={headingStyle}>Common Symptoms</h2>
        <div style={gridStyle}>
          {[
            "Irregular Periods",
            "Weight Gain",
            "Acne",
            "Hair Loss",
            "Fatigue",
            "Mood Swings",
            "Excess Hair Growth",
            "Skin Darkening",
          ].map((item) => (
            <div key={item} style={cardStyle}>
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* LIFESTYLE */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>Lifestyle Recommendations</h2>
        <div style={gridStyle}>
          {[
            "Balanced Diet",
            "Regular Exercise",
            "Adequate Sleep",
            "Stress Management",
            "Cycle Monitoring",
            "Medical Consultation",
          ].map((item) => (
            <div key={item} style={cardStyle}>
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* ARTICLES */}
      <section style={altSectionStyle}>
        <h2 style={headingStyle}>Featured Articles</h2>
        <div style={gridStyle}>
          {articles.map((article) => (
            <ArticleCard key={article.title} article={article} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={ctaStyle}>
        <h2 style={{ fontSize: "36px", marginBottom: "15px" }}>
          Take Your PCOS Assessment Today
        </h2>

        <p style={{ fontSize: "18px", marginBottom: "25px" }}>
          Start monitoring your symptoms and access your personalized dashboard.
        </p>

        <Link to="/login" style={darkButtonStyle}>
          Start Assessment
        </Link>
      </section>

      {/* FOOTER */}
      <footer style={footerStyle}>
        <h3 style={{ marginBottom: "10px" }}>PCOS Prediction System</h3>
        <p style={{ marginBottom: "8px" }}>
          AI-powered reproductive health awareness platform
        </p>
        <p>© 2026 All Rights Reserved</p>
      </footer>
    </div>
  );
}

function ArticleCard({ article }) {
  return (
    <div style={articleCardStyle}>
      <h3>{article.title}</h3>
      <p style={{ marginTop: "12px", color: "#475569", lineHeight: "1.6" }}>
        {article.text}
      </p>

      <a
        href={article.link}
        target="_blank"
        rel="noreferrer"
        style={readMoreStyle}
      >
        Read Article →
      </a>
    </div>
  );
}

const heroStyle = {
  minHeight: "42vh",
  background: "linear-gradient(135deg, #2563eb, #7c3aed)",
  color: "white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  padding: "30px 20px",
};

const heroTitle = {
  fontSize: "44px",
  marginBottom: "14px",
};

const heroText = {
  fontSize: "18px",
  maxWidth: "700px",
  lineHeight: "1.6",
  marginBottom: "22px",
};

const sectionStyle = {
  padding: "70px 8%",
  backgroundColor: "white",
};

const altSectionStyle = {
  padding: "70px 8%",
  backgroundColor: "#f8fafc",
};

const headingStyle = {
  fontSize: "34px",
  textAlign: "center",
  marginBottom: "28px",
  color: "#1e293b",
};

const paragraphStyle = {
  fontSize: "18px",
  lineHeight: "1.8",
  maxWidth: "900px",
  margin: "auto",
  textAlign: "center",
  color: "#475569",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "22px",
  marginTop: "30px",
};

const cardStyle = {
  background: "white",
  padding: "26px",
  borderRadius: "14px",
  boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
  textAlign: "center",
  fontWeight: "600",
};

const articleCardStyle = {
  background: "white",
  padding: "26px",
  borderRadius: "14px",
  boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
};

const readMoreStyle = {
  display: "inline-block",
  marginTop: "16px",
  color: "#2563eb",
  textDecoration: "none",
  fontWeight: "bold",
};

const ctaStyle = {
  padding: "90px 20px",
  textAlign: "center",
  backgroundColor: "#dbeafe",
};

const footerStyle = {
  backgroundColor: "#0f172a",
  color: "white",
  textAlign: "center",
  padding: "40px 20px",
};

const buttonStyle = {
  background: "white",
  color: "#2563eb",
  padding: "14px 26px",
  borderRadius: "10px",
  textDecoration: "none",
  fontWeight: "bold",
};

const darkButtonStyle = {
  background: "#2563eb",
  color: "white",
  padding: "14px 26px",
  borderRadius: "10px",
  textDecoration: "none",
  fontWeight: "bold",
};

export default Home;