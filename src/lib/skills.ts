export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  color: string;
  skills: string[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "programming",
    title: "Programming & Databases",
    icon: "Code2",
    color: "#6366F1",
    skills: ["Python", "SQL"],
  },
  {
    id: "ml-ai",
    title: "Machine Learning & AI",
    icon: "Brain",
    color: "#8B5CF6",
    skills: [
      "Convolutional Neural Networks (CNNs)",
      "Long Short-Term Memory (LSTMs)",
      "XGBoost",
      "Computer Vision",
      "Natural Language Processing",
      "Generative AI",
      "Agentic AI",
      "Predictive Modeling",
    ],
  },
  {
    id: "frameworks",
    title: "Frameworks & Libraries",
    icon: "Layers",
    color: "#06B6D4",
    skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn", "OpenCV"],
  },
  {
    id: "data-science",
    title: "Data Science & Analytics",
    icon: "BarChart3",
    color: "#10B981",
    skills: [
      "Exploratory Data Analysis",
      "Data Preprocessing",
      "Feature Engineering",
      "Power BI",
      "Tableau",
      "Data Visualization",
    ],
  },
  {
    id: "genai-apis",
    title: "Generative AI APIs",
    icon: "Sparkles",
    color: "#F59E0B",
    skills: ["OpenAI API", "Google Gemini API", "GitHub API", "Hugging Face API", "Groq API"],
  },
];
