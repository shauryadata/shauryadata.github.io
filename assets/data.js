// assets/data.js
window.SITE_DATA = {
  experience: [
    {
      slug: "unified-mentor",
      org: "Unified Mentor",
      role: "Data Science Intern",
      dates: "Mar 2025 – Aug 2025",
      short: "Delivered four DS projects end-to-end (forecasting, classification, dashboards) with live demos and documented repos.",
      long: `
        <h4>What I did</h4>
        <ul>
          <li>Owned 4 production-style projects from data prep → modeling → evaluation → delivery.</li>
          <li>Built time-series forecasts (Prophet) and classification pipelines (scikit-learn/XGBoost) with clean modular code.</li>
          <li>Shipped Streamlit dashboards for stakeholders to explore scenarios and download results.</li>
          <li>Added tests, README instructions, and reproducible environments; used Git/GitHub for versioning.</li>
          <li>Packaged models as reusable utilities and wrote short post-project write-ups for each.</li>
        </ul>
        <h4>Stack</h4>
        <p>Python, Pandas, NumPy, scikit-learn, XGBoost, Prophet, Streamlit, Matplotlib/Plotly, Git/GitHub</p>
      `,
      banner: "assets/img/unified-banner.png"
    },
    {
      slug: "gujarat-dyestuff",
      org: "Gujarat Dyestuff",
      role: "Junior Manufacturing Analyst",
      dates: "May 2024 – Aug 2024",
      short: "Optimized yield and automated GMP reporting; built batch-performance analytics saving 2–5 hrs/week.",
      long: `
        <h4>What I did</h4>
        <ul>
          <li>Analyzed batch histories to model yield drivers with pandas + scikit-learn.</li>
          <li>Automated GMP Excel reports and QA summaries; reduced manual effort by 2–5 hrs/week.</li>
          <li>Built visuals for trend/deviation monitoring and hand-off to production engineers.</li>
        </ul>
        <h4>Stack</h4>
        <p>Python (pandas, scikit-learn), Excel (PowerQuery/VBA where needed), Matplotlib</p>
      `,
      banner: "assets/img/gujarat-banner.png"
    },
    {
      slug: "sini-designs",
      org: "Sini Designs Pvt. Ltd.",
      role: "Junior Data Analyst",
      dates: "Sep 2023 – May 2024",
      short: "Built pricing/inventory analytics and Tableau dashboards; supported cost control and demand planning.",
      long: `
        <h4>What I did</h4>
        <ul>
          <li>Developed pricing & supply-forecasting models in Python/Excel, feeding weekly planning.</li>
          <li>Built Tableau dashboards to track demand trends and material usage.</li>
          <li>Presented insights to design & ops; informed changes that helped reduce material costs by 10–15%.</li>
        </ul>
        <h4>Stack</h4>
        <p>Python, Excel, Tableau</p>
      `,
      banner: "assets/img/sini-banner.png"
    }
  ],

  projects: [
    {
  slug: "waste-classifier",
  title: "Waste Classifier (ResNet-50, TTA, Abstain)",
  subtitle: "PyTorch, timm, Streamlit",
  short: "Image classifier with ResNet-50 + test-time augmentation; ‘abstains’ when top-2 are too close.",
  long: `
    <h4>Highlights</h4>
    <ul>
      <li>Fine-tuned ResNet-50 (timm) for multi-class waste categories with robust augmentation.</li>
<li>Applied Test-Time Augmentation (TTA) to cut variance by averaging logits across flips and crops.</li>
<li>Abstains when the margin between top-1 and top-2 is below δ - returns "Unsure, please retake/confirm".</li>
<li>Streamlit UI with drag-and-drop upload, image preview, and class-probability bars.</li>
<li>Live demo available with a clean README for quick reproduction.</li>
    </ul>
    <h4>Stack</h4>
    <p>PyTorch, timm, torchvision, numpy, Pillow, Streamlit</p>
  `,
  github: "https://github.com/shauryadata/waste-classifier",   // <- update to real repo
  demo: "",                                                     // <- add Streamlit link if/when live
  banner: "assets/img/waste-classifier.jpg"                     
},
    {
      slug: "netflix",
      title: "Netflix Movie Recommendation System",
      subtitle: "Python, Pandas, Streamlit",
      short: "EDA of titles + genre-vector cosine similarity to recommend similar content.",
      long: `
        <h4>Highlights</h4>
        <ul>
          <li>Cleaned and explored the titles dataset (genres, year, country, ratings).</li>
          <li>Engineered genre vectors and used cosine similarity to rank nearest titles.</li>
          <li>Built a Streamlit UI with filters, title search, and “more like this”.</li>
          <li>Documented assumptions and offline evaluation (precision@k on hand-labeled pairs).</li>
        </ul>
        <h4>Stack</h4>
        <p>Python, Pandas, scikit-learn (metrics), Streamlit, Matplotlib</p>
      `,
      github: "https://github.com/shauryadata/netflix-data-analysis",
      demo: "",
      banner: "assets/img/netflix-banner.jpg"
    },
    {
      slug: "hr-attrition",
      title: "HR Attrition Predictor",
      subtitle: "scikit-learn, Streamlit, ELI5",
      short: "Built an end-to-end attrition classifier with explainability & live inference UI.",
      long: `
        <h4>Highlights</h4>
        <ul>
          <li>Preprocessed IBM HR data; handled class imbalance; compared tree-based models.</li>
          <li>Shipped a pipeline (encode → scale → model) with metrics (ROC-AUC, PR-AUC).</li>
          <li>Added ELI5 explanations (feature importance/weights) to improve trust.</li>
          <li>Deployed a Streamlit app for single-employee and batch predictions.</li>
        </ul>
        <h4>Stack</h4>
        <p>Python, scikit-learn, ELI5, Streamlit, Pandas, Matplotlib</p>
      `,
      github: "https://github.com/shauryadata/hr-attrition-predictor",
      demo: "",
      banner: "assets/img/ibm-banner.jpg"
    },
    {
      slug: "uber-forecast",
      title: "Uber Ride Demand Forecasting",
      subtitle: "Prophet, XGBoost",
      short: "Forecasted NYC ride demand; captured weekly/holiday seasonality with hybrid models.",
      long: `
        <h4>Highlights</h4>
        <ul>
          <li>Aggregated/cleaned ride counts; engineered calendar, holiday, and weather placeholders.</li>
          <li>Compared Prophet vs. XGBoost regressors; combined patterns where useful.</li>
          <li>Visualized forecasts with confidence ranges; evaluated MAE/MAPE by time-of-week.</li>
          <li>Produced a simple ops view for capacity planning.</li>
        </ul>
        <h4>Stack</h4>
        <p>Python, Pandas, Prophet, XGBoost, Matplotlib</p>
      `,
      github: "https://github.com/shauryadata/uber-trip-forecasting",
      demo: "",
      banner: "assets/img/uber-banner.jpg"
    },
    {
      slug: "supply-gap",
      title: "Supply Chain Demand–Supply Gap Analysis",
      subtitle: "Excel, Tableau, Python",
      short: "Analyzed forecast vs. actuals; surfaced recurring gaps and root-cause patterns.",
      long: `
        <h4>Highlights</h4>
        <ul>
          <li>Joined procurement, sales, and forecast tables; created gap KPIs (over/under supply).</li>
          <li>Flagged SKU/region patterns and seasonality-driven mismatches.</li>
          <li>Built Tableau dashboards with drill-downs (SKU → region → time).</li>
        </ul>
        <h4>Stack</h4>
        <p>Excel, Python (pandas), Tableau</p>
      `,
      github: "https://github.com/shauryadata/supply-chain-dashboard",
      demo: "",
      banner: "assets/img/scm.jpg"
    }
  ]
};
