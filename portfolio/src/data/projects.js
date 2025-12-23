export const projects = [
  {
    slug: "careercompass",
    title: "CareerCompass",
    tagline: "AI-powered career guidance platform",
    image: "/projects/careercompass.png",
    github: "https://github.com/ayonpaul8906/Career-Compass-GDG",
    live: "https://career-compass-4a13f.web.app/",
    problem: "Students struggle to find structured, personalized career guidance and actionable roadmaps to navigate diverse industries. [cite: 11, 12]",
    solution: "Developed an AI-driven platform using Gemini AI to provide personalized recommendations, interactive dynamic roadmaps, and curated opportunities. [cite: 12, 14]",
    features: [
      "AI-powered personalized recommendations using Gemini AI [cite: 12]",
      "Interactive dynamic roadmaps across multiple career domains [cite: 14]",
      "Secure access via Firebase Authentication and real-time tracking with Firestore [cite: 13]",
      "Curated lists of internships, workshops, and a community engagement system [cite: 14]"
    ],
    tech: ["React.js", "Firebase", "Gemini AI", "Render", "Firestore", "Tailwind CSS"],
    outcome: "Delivered a scalable platform deployed via Firebase Hosting and Render for smooth performance across all devices. [cite: 15]"
  },
  {
    slug: "zencue",
    title: "ZenCue",
    tagline: "Neurodivergent-friendly productivity tool",
    image: "/projects/zencue.png",
    github: "https://github.com/ayonpaul8906/ZenCue",
    live: "https://zen-cue.vercel.app/",
    problem: "Traditional tools overwhelm neurodivergent users with cluttered interfaces and rigid workflows that lack accessibility. [cite: 16, 19]",
    solution: "Designed a calm, AI-assisted productivity tool using GROQ APIs to provide explanations through text, images, and voice feedback. [cite: 17, 19]",
    features: [
      "AI-driven explanations via GROQ APIs (text, image, voice) [cite: 17]",
      "Screen capture and image upload via html2canvas and Imgur [cite: 18]",
      "Calm UI animations and distraction-free responsive design [cite: 19]",
      "Real-time voice feedback for soothing user interaction [cite: 19]"
    ],
    tech: ["React", "Flask", "Tailwind CSS", "GROQ API", "html2canvas"],
    outcome: "Built an inclusive tool specifically tailored for neurodiverse users to gain contextual understanding from visuals. [cite: 18, 19]"
  },
  {
    slug: "trustbridge",
    title: "TrustBridge",
    tagline: "Decentralized P2P lending platform",
    image: "/projects/trustbridge.png",
    github: "https://github.com/ayonpaul8906/trustbridge-new",
    live: "https://trustbridge-six.vercel.app/",
    problem: "Peer-to-peer lending often lacks trust and transparency between borrowers and lenders in decentralized environments. [cite: 20, 21]",
    solution: "Developed a secure web app using the Sepolia testnet for direct borrower-lender connections and dynamic trust score generation. [cite: 21, 22]",
    features: [
      "Wallet-based login and decentralized loan management [cite: 22]",
      "Dynamic trust score generation from financial and KYC documents [cite: 22]",
      "Firebase integration for document storage and secure verification [cite: 23]",
      "Optimized for academic and fintech innovation prototyping [cite: 23]"
    ],
    tech: ["React (Vite)", "Ethers.js", "Firebase", "Flask", "Sepolia Testnet"],
    outcome: "Successfully implemented a secure prototype demonstrating decentralized trust mechanisms and document verification. [cite: 23]"
  }
];