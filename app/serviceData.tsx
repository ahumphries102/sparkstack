import { Camera, Code, Zap, Coffee } from "lucide-react"
export const serviceData = [
    {
      title: "Front-End",
      icon: <Camera className="w-8 h-8" />,
      description: "Beautiful, responsive interfaces that users love",
      features: [
        "Modern UI/UX Design",
        "Responsive Layouts",
        "React, Vue, or Vanilla JS",
        "Performance Optimization",
        "Cross-browser Compatible",
        "Accessibility Standards",
      ],
      color: "from-cyan-400 to-blue-500",
    },
    {
      title: "Back-End",
      icon: <Code className="w-8 h-8" />,
      description: "Robust server-side solutions for your applications",
      features: [
        "RESTful API Development",
        "Database Design & Management",
        "Authentication & Security",
        "Server Configuration",
        "Payment Integration",
        "Scalable Architecture",
      ],
      color: "from-violet-400 to-purple-500",
    },
    {
      title: "Full-Stack",
      icon: <Zap className="w-8 h-8" />,
      description: "Complete end-to-end web application development",
      features: [
        "All Front-End Features",
        "All Back-End Features",
        "Database Integration",
        "Deployment & Hosting",
        "Ongoing Maintenance",
        "Priority Support",
      ],
      color: "from-pink-400 to-rose-500",
    },
    {
      title: "Web Development",
      icon: <Coffee className="w-8 h-8" />,
      description: "Custom solutions for your unique business needs",
      features: [
        "Business Websites",
        "E-commerce Platforms",
        "Content Management Systems",
        "Custom Web Applications",
        "SEO Optimization",
        "Analytics Integration",
      ],
      color: "from-amber-400 to-orange-500",
    },
  ]