const config = {
  title: "I'm Om Lakhera | Software Engineer • Web & Creative Development",
  description: {
    long:
      "I’m a software engineer who enjoys building things from scratch and refining them over time. My approach focuses on clarity, performance, and maintainability rather than overengineering. I like experimenting with interfaces, layouts, and small developer tools while continuously improving my technical and problem-solving skills.",
    short:
      "I’m a software engineer interested in building clean, modern, and practical web experiences. I focus on writing simple, readable code and improving UI/UX through iteration.",
  },
  keywords: [
    "Om Lakhera",
    "Software Engineer",
    "web development",
    "creative development",
    "frontend",
    "tooling",
    "UI/UX",
    "React",
    "Next.js",
    "Tailwind",
  ],
  author: "Om Lakhera",
  email: "omlakhera204@gmail.com",
  site: "https://omxdev-portfolio.vercel.app",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    github: "https://github.com/om-lakhera",
    linkedin: "",
    twitter: "",
    instagram: "",
  },
};
export { config };
