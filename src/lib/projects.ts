export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  image: string;
  highlight?: string;
  tag?: string;
}

export const PROJECTS: Project[] = [
  {
    id: "ar-vr-plant-anatomy",
    title: "Learning Plant Anatomy Through AR/VR",
    description:
      "An immersive educational platform using AR, VR, interactive 3D models, and simulations to improve understanding of plant anatomy.",
    longDescription:
      "An innovative educational application that bridges the gap between traditional biology education and modern immersive technology. By leveraging augmented and virtual reality, students can explore plant structures in unprecedented detail through interactive 3D models.",
    technologies: ["AR/VR", "3D Visualization", "AI Virtual Assistance", "Computer Vision"],
    features: [
      "Interactive 3D plant and fruit models",
      "Visualization of internal biological structures",
      "Demonstrations of pollination and cross-breeding",
      "AI-based virtual assistants to explain biological concepts",
    ],
    githubUrl: undefined, // Add your repo URL when available
    liveUrl: undefined,
    image: "/images/project-arvr.jpg",
    highlight: "Published at ICSTSDG 2024",
    tag: "Research",
  },
  {
    id: "indian-sign-language",
    title: "Indian Sign Language Detection System",
    description:
      "A real-time hand gesture recognition system that recognises Indian Sign Language gestures using computer vision and deep learning.",
    longDescription:
      "A real-time gesture recognition system that uses OpenCV for image capture and preprocessing, combined with a CNN-based classifier to accurately identify Indian Sign Language hand gestures. Designed for low-latency, high-accuracy communication assistance.",
    technologies: ["Python", "OpenCV", "CNN", "Computer Vision", "Deep Learning"],
    features: [
      "Real-time hand gesture recognition",
      "OpenCV-based image processing pipeline",
      "CNN-based gesture classification",
      "Data augmentation and contour detection",
      "Low-latency recognition pipeline",
    ],
    githubUrl: undefined, // Add your repo URL when available
    liveUrl: undefined,
    image: "/images/project-isl.jpg",
    highlight: "93% accuracy · <150ms latency",
    tag: "Computer Vision",
  },
  {
    id: "academic-performance",
    title: "Academic Performance Analysis",
    description:
      "A data science project analysing student academic performance patterns to support educational decision-making with interactive Power BI dashboards.",
    longDescription:
      "This data science project analyses academic performance data from 500+ students using Python-based data analysis tools and interactive Power BI dashboards. The project identifies key trends and builds a predictive model to flag at-risk students early.",
    technologies: ["Python", "Pandas", "NumPy", "Power BI", "Scikit-learn", "Random Forest"],
    features: [
      "Analysis of 500+ student records",
      "Five interactive Power BI dashboards",
      "Drill-downs, slicers, and KPI visualisations",
      "Random Forest classification model",
      "82% precision at-risk student identification",
    ],
    githubUrl: undefined,
    liveUrl: undefined,
    image: "/images/project-academic.jpg",
    highlight: "82% model precision",
    tag: "Data Science",
  },
  {
    id: "ml-model-development",
    title: "ML Model Development & Optimisation",
    description:
      "A project showcase demonstrating machine learning model development, data preprocessing, feature engineering, optimisation, and performance evaluation.",
    longDescription:
      "A comprehensive machine learning project involving end-to-end model development: from data preprocessing and feature engineering through to model training, hyperparameter tuning, and performance evaluation using standard metrics.",
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "XGBoost"],
    features: [
      "End-to-end ML pipeline development",
      "Data preprocessing and feature engineering",
      "Model training and hyperparameter optimisation",
      "Performance evaluation (accuracy, precision, recall)",
      "25% improvement in data integrity",
    ],
    githubUrl: undefined,
    liveUrl: undefined,
    image: "/images/project-ml.jpg",
    highlight: "15% accuracy improvement",
    tag: "Machine Learning",
  },
];

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  period: string;
  responsibilities: string[];
  technologies?: string[];
  color: string;
}

export const EXPERIENCES: Experience[] = [
  {
    id: "vulture-lines",
    company: "Vulture Lines Tech Management Pvt Ltd",
    role: "Data Science Intern",
    duration: "June 2025 – July 2025",
    period: "2 months",
    responsibilities: [
      "Analysed academic performance data from 500+ students using Python, Pandas, and NumPy.",
      "Identified trends and correlations to support data-driven decision-making.",
      "Designed five interactive Power BI dashboards with drill-downs, slicers, and KPIs.",
      "Trained and optimised a Random Forest classification model to identify at-risk students.",
      "Achieved 82% precision in the at-risk student classification model.",
    ],
    technologies: ["Python", "Pandas", "NumPy", "Power BI", "Scikit-learn", "Random Forest"],
    color: "#6366F1",
  },
  {
    id: "autointelli",
    company: "Autointelli Systems Private Limited",
    role: "Machine Learning Intern",
    duration: "January 2025 – February 2025",
    period: "2 months",
    responsibilities: [
      "Developed machine learning models using real-world datasets.",
      "Improved data integrity by 25% and prediction accuracy by 15%.",
      "Performed comprehensive data preprocessing and feature engineering.",
      "Optimised models to improve robustness and reduce training time.",
      "Evaluated model performance using accuracy, precision, and recall metrics.",
    ],
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Feature Engineering"],
    color: "#8B5CF6",
  },
];

export const CERTIFICATIONS = [
  {
    id: "cisco-python",
    title: "Python Certification",
    issuer: "Cisco",
    icon: "Code2",
    color: "#6366F1",
    verifyUrl: undefined,
  },
  {
    id: "cisco-cybersecurity",
    title: "Cybersecurity Certification",
    issuer: "Cisco",
    icon: "Shield",
    color: "#06B6D4",
    verifyUrl: undefined,
  },
  {
    id: "nptel-wildlife",
    title: "Wildlife Ecology",
    issuer: "NPTEL",
    icon: "Leaf",
    score: "92%",
    color: "#10B981",
    verifyUrl: undefined,
  },
  {
    id: "icstsdg-research",
    title: "Research Publication & Presentation",
    issuer: "ICSTSDG 2024",
    icon: "BookOpen",
    color: "#F59E0B",
    verifyUrl: undefined,
  },
];

export const SERVICES = [
  {
    id: "ml-solutions",
    title: "Machine Learning Solutions",
    description:
      "Building and optimising machine learning models for classification, regression, and clustering tasks using Python, Scikit-learn, and XGBoost.",
    icon: "Brain",
    color: "#6366F1",
  },
  {
    id: "data-analysis",
    title: "Data Analysis & Visualisation",
    description:
      "Transforming raw data into actionable insights through exploratory data analysis, feature engineering, and interactive Power BI dashboards.",
    icon: "BarChart3",
    color: "#8B5CF6",
  },
  {
    id: "computer-vision",
    title: "Computer Vision Applications",
    description:
      "Developing real-time image processing and object detection systems using OpenCV and deep learning architectures including CNNs.",
    icon: "Eye",
    color: "#06B6D4",
  },
  {
    id: "ai-model",
    title: "AI Model Development",
    description:
      "End-to-end AI model development including data preprocessing, architecture design, training, evaluation, and deployment readiness.",
    icon: "Cpu",
    color: "#10B981",
  },
  {
    id: "generative-ai",
    title: "Generative AI Prototypes",
    description:
      "Exploring and building prototypes with large language models and generative AI APIs including OpenAI and Google Gemini.",
    icon: "Sparkles",
    color: "#F59E0B",
  },
  {
    id: "predictive-analytics",
    title: "Predictive Analytics",
    description:
      "Creating predictive models and pipelines to forecast outcomes, identify patterns, and support data-driven decision-making.",
    icon: "TrendingUp",
    color: "#EC4899",
  },
];
