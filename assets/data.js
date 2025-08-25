// assets/data.js
window.SITE_DATA = {
  experience: [
    {
      slug: "unified-mentor",
      org: "Unified Mentor",
      role: "Data Science Intern",
      dates: "Mar 2025 – Aug 2025",
      short: "4 projects: ML, forecasting, dashboards, deployment.",
      long: `
        <p>Delivered production-grade code and insights for multiple problem statements.</p>
        <ul>
          <li>XGBoost, Prophet, Streamlit dashboards</li>
          <li>Hosted demos + GitHub repos</li>
        </ul>
      `,
      banner: "assets/img/unified-mentor.png" 
    },
    {
      slug: "gujarat-dyestuff",
      org: "Gujarat Dyestuff",
      role: "Junior Manufacturing Analyst",
      dates: "May 2024 – Aug 2024",
      short: "Yield optimization, reporting automation, quality analysis.",
      long: `
        <ul>
          <li>Modeled drug yield with scikit-learn + pandas</li>
          <li>Automated GMP Excel reports (saved 2–5 hrs/week)</li>
          <li>Visualized trends; flagged deviations</li>
        </ul>
      `,
      banner: "assets/img/gujarat-banner.png"
    },
    {
      slug: "sini-designs",
      org: "Sini Designs Pvt. Ltd.",
      role: "Junior Data Analyst",
      dates: "Sep 2023 – May 2024",
      short: "Pricing, inventory planning, Tableau dashboards.",
      long: `
        <ul>
          <li>Pricing & supply forecasting models</li>
          <li>Dashboards reduced material costs by 10–15%</li>
        </ul>
      `,
      banner: "assets/img/sini-banner.png"
    }
  ],
  projects: [
    {
      slug: "netflix",
      title: "Netflix Movie Recommendation System",
      subtitle: "Python, Pandas, Streamlit",
      short: "EDA + simple genre-based recommender.",
      long: `
        <p>Explored title metadata, engineered genre vectors, and built a
        lightweight recommender using cosine similarity.</p>
      `,
      github: "https://github.com/shauryadata/netflix-data-analysis",
      demo: "",
      banner: "assets/img/netflix-banner.jpg"
    },
    {
      slug: "hr-attrition",
      title: "HR Attrition Predictor",
      subtitle: "Scikit-Learn, Streamlit, ELI5",
      short: "Pipeline for attrition prediction + explainability.",
      long: `<p>Deployed model with live predictions and explanations.</p>`,
      github: "https://github.com/shauryadata/hr-attrition-predictor",
      demo: "",
      banner: "assets/img/ibm-banner.jpg"
    },
    {
      slug: "uber-forecast",
      title: "Uber Ride Demand Forecasting",
      subtitle: "Prophet, XGBoost",
      short: "Temporal trends, seasonality, calendar effects.",
      long: `<p>Time-series forecasting on NYC ride data.</p>`,
      github: "https://github.com/shauryadata/uber-trip-forecasting",
      demo: "",
      banner: "assets/img/uber-banner.jpg"
    },
    {
      slug: "supply-gap",
      title: "Supply Chain Demand–Supply Gap Analysis",
      subtitle: "Excel, Tableau, Python",
      short: "Mismatch between forecasted vs actual quantities.",
      long: `<p>Presented insights using Tableau dashboards.</p>`,
      github: "https://github.com/shauryadata/supply-chain-dashboard",
      demo: "",
      banner: "assets/img/scm.jpg"
    }
  ]
};
