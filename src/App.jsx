import { useState, useEffect } from "react";
import { X, Mail, Phone, Linkedin, Github, ChevronDown, ExternalLink, Cpu, Zap, Bot, Award, Code2, Layers } from "lucide-react";

const experiences = [
  {
    id: 1, company: "Virya Autonomous Technologies", role: "Robotic Software Intern", period: "07/2025 – 12/2025", color: "#00f5c4",
    icon: <Bot size={22}/>, summary: "Built high-fidelity localization and perception pipelines for an Autonomous Mobile Robot, optimizing SLAM accuracy and dramatically reducing compute footprint.",
    points: [
      { title: "High-Fidelity State Estimation", body: "Benchmarked and tuned Cartographer and RTAB-Map for an Autonomous Mobile Robot (AMR) against RTK ground truth, achieving highly accurate localization with an Absolute Trajectory Error (ATE) of < 20 cm and Relative Pose Error (RPE) of < 10 cm." },
      { title: "Odometry & Compute Optimization", body: "Re-architected the Direct LiDAR-Inertial Odometry (DLIO) pipeline by implementing dynamic queue management, successfully slashing average RAM consumption from ~4.5 GB to 470 MB without sacrificing real-time performance." },
      { title: "Advanced SLAM Architecture", body: "Optimized RTAB-Map computational efficiency and reliability for state estimation by integrating Fast-GICP and evaluating various graph optimizers (g2o, GTSAM) and CV feature extractors (ORB, FAST, SIFT)." },
      { title: "Perception & Sensor Fusion", body: "Integrated a multi-modal sensor suite (3D LiDAR, IMU, depth cameras) over stable DDS profiles. Engineered a custom point cloud pipeline for data compression and mathematically projected 3D LiDAR data into equirectangular and simulated multi-camera pinhole views." },
      { title: "Navigation Architecture & Routing", body: "Developed a custom JavaScript-based ROS environment to streamline navigation stack deployment, featuring interactive PCD and grid map editing. Rewrote the core routing algorithm for predefined paths and implemented custom behavior layers for robust autonomous task execution." },
    ],
  },
  {
    id: 2, company: "Hyper Horizon", role: "Intern – Autonomous Systems", period: "05/2025 – 06/2025", color: "#38bdf8",
    icon: <Layers size={22}/>, summary: "Engineered multi-sensor state estimation and full-stack integration for a defense-grade Autonomous Underwater Vehicle operating in GPS-denied environments.",
    points: [
      { title: "Advanced State Estimation", body: "Engineered a robust multi-sensor state estimation pipeline by developing and tuning Extended and Unscented Kalman Filters (EKF/UKF) to fuse multi-modal data. This ensured high navigational accuracy for the AUV, especially during transitions into GPS-denied underwater environments." },
      { title: "Sensor Integration & Calibration", body: "Led the physical integration and rigorous calibration of a complex subsea sensor suite including DVL, AHRS, RTK GPS, and IMU — for a defense-grade Autonomous Underwater Vehicle (AUV)." },
      { title: "Autonomous System Development", body: "Contributed to the development of a complete autonomous navigation and control system, bridging the gap from low-level sensor integration up to high-level mission execution." },
      { title: "Lifecycle & Environment Architecture", body: "Streamlined the end-to-end robotics software lifecycle by architecting remote development environments. Deployed C++ control algorithms, conducted comprehensive simulation-based tuning, and integrated a React-based operator GUI for system monitoring." },
    ],
  },
  {
    id: 3, company: "Mars Rover Students Club, IIITDM", role: "Team Leader", period: "04/2024 – 02/2025", color: "#a78bfa",
    icon: <Zap size={22}/>, summary: "Led a 30+ member interdisciplinary team to national and international recognition in ISRO and IRC rover challenges, overseeing the full hardware-software stack.",
    points: [
      { title: "Cross-Functional Leadership", body: "Led a 30+ member team in ISRO's IROC-U24, successfully securing 6th place nationwide among 267 teams. This achievement was recognized by the President of India on National Space Day." },
      { title: "End-to-End System Integration", body: "Oversaw the comprehensive system integration across all mechanical, electrical, and software subsystems. Acted as the technical bridge, architecting solutions from low-level embedded systems up to high-level navigation controls." },
      { title: "Robust Control & Planning Stack", body: "Integrated and fine-tuned a diverse suite of global and local path planners (A*, Hybrid A*) alongside advanced controllers (MPPI, Pure Pursuit, DWA)." },
      { title: "Autonomous Terrain Navigation", body: "Engineered the navigation pipeline to enable the rover to reliably traverse rough, unstructured terrain while executing dynamic obstacle avoidance." },
    ],
  },
];

const projects = [
  {
    id: 1, title: "Hospitality Co-Bot", color: "#00f5c4", icon: <Bot size={22}/>, summary: "A fully autonomous hospitality robot running ROS 2 Humble on NVIDIA Jetson with custom UDP hardware interface, 2D SLAM, and Nav2-powered dynamic obstacle avoidance.",
    points: [
      { title: "Custom Control Architecture", body: "Developed a custom UDP-based hardware interface plugin within the ROS 2 Humble ros2_control framework, enabling precise closed-loop PID control of a differential-drive base (diff_drive_controller) on NVIDIA Jetson edge hardware." },
      { title: "2D Mapping & Localization", body: "Implemented a robust 2D SLAM pipeline utilizing Cartographer and SLAM Toolbox for high-fidelity environment mapping and reliable pose estimation against pre-existing floor plans." },
      { title: "Dynamic Navigation Stack", body: "Integrated the Nav2 stack with custom Behavior Trees and 2D costmap plugins, tailoring the system for safe, dynamic obstacle avoidance in unstructured, human-centric environments." },
      { title: "Simulation & Hardware Validation", body: "Designed and validated the system's kinematics and URDF within a Gazebo simulation, bridging the gap between simulated motion planning and the physical UDP-based hardware deployment." },
    ],
  },
  {
    id: 2, title: "RL-Based Quadruped (Spider Bot)", color: "#a78bfa", icon: <Cpu size={22}/>, summary: "An ongoing project architecting a reinforcement learning framework for a custom-built quadruped robot, formulating gait policies from single-leg actuation upward.",
    points: [
      { title: "RL-Driven Locomotion", body: "Architecting a reinforcement learning framework to govern the complex kinematics and autonomous locomotion of a custom four-legged (quadrupedal) robot." },
      { title: "Kinematic Modeling & Control", body: "Currently formulating the state-action space and reward functions to train isolated single-leg actuation, establishing the foundational policy for full-body gait generation." },
      { title: "Simulation & Training Environment", body: "Developing the initial simulation parameters to iteratively train the agent, with the overarching goal of achieving stable, point-to-point autonomous navigation." },
    ],
  },
  {
    id: 3, title: "6-DOF Mobile Manipulator", color: "#38bdf8", icon: <Layers size={22}/>, summary: "A custom mobile manipulator UGV built ground-up for autonomous pick-and-place, with full ROS 1 + MoveIt control pipeline and OMPL collision-free trajectory planning.",
    points: [
      { title: "End-to-End System Design", body: "Architected and developed a custom mobile manipulator UGV from the ground up, specifically targeting autonomous pick-and-place operations within unstructured environments." },
      { title: "Kinematics & Control Stack", body: "Engineered the complete autonomous control pipeline for the 6-DOF robotic arm utilizing ROS 1 and MoveIt." },
      { title: "Collision-Free Trajectory Planning", body: "Implemented and rigorously benchmarked Open Motion Planning Library (OMPL) algorithms, including RRT and RRTConnect, to generate optimal, collision-free motion trajectories." },
      { title: "Physics-Based Simulation", body: "Constructed a high-fidelity Gazebo simulation featuring a meticulously tuned URDF. This enabled precise validation of the manipulator's kinematics and dynamic behavior prior to physical hardware deployment." },
    ],
  },
];

const skillCategories = [
  { label: "Languages", icon: <Code2 size={14}/>, color: "#00f5c4", tags: ["C++", "Python", "Embedded C", "Bash/Shell", "MATLAB", "JavaScript"] },
  { label: "Robotics Core", icon: <Bot size={14}/>, color: "#38bdf8", tags: ["ROS 1 & 2", "Nav2", "MoveIt", "TF2", "URDF/Xacro", "Gazebo", "Rviz", "ros2_control", "DDS Profiles"] },
  { label: "Algorithms & Control", icon: <Cpu size={14}/>, color: "#a78bfa", tags: ["SLAM", "Cartographer", "RTAB-Map", "DLIO", "FAST-LIO", "Fast-GICP", "g2o", "GTSAM", "A*", "Hybrid A*", "RRT", "RRTConnect", "MPPI", "DWA", "Pure Pursuit", "EKF", "UKF", "PID", "Reinforcement Learning"] },
  { label: "Embedded, OS & HW", icon: <Zap size={14}/>, color: "#f97316", tags: ["Linux (Ubuntu/Debian)", "Yocto", "ARM", "Real-Time Systems", "Docker", "NVIDIA Jetson", "STM32"] },
  { label: "Libraries & Perception", icon: <Layers size={14}/>, color: "#f43f5e", tags: ["PCL", "OpenCV", "Eigen", "OMPL", "Ceres Solver", "ORB/FAST/SIFT", "LiDAR", "IMU", "DVL", "RTK GPS", "Intel RealSense"] },
];

const achievements = [
  {
    id: 1,
    icon: "🌍",
    title: "International Rover Challenge 2025",
    body: "Led a 50+ member team to 16th place internationally.",
    color: "#00f5c4",
    certificateSrc: "/irc.jpg",
    certificateAlt: "International Rover Challenge Certificate",
  },
  {
    id: 2,
    icon: "🇮🇳",
    title: "ISRO Robotics Challenge",
    body: "Secured 6th place nationwide among 267 teams, recognized by the President of India on National Space Day.",
    color: "#38bdf8",
    certificateSrc: "/isro_cert.jpg",
    certificateAlt: "ISRO Robotics Challenge Certificate",
  },
  {
    id: 3,
    icon: "🏆",
    title: "NSO CS Olympiad",
    body: "Secured international rank 32 and national rank 16.",
    color: "#a78bfa",
    certificateSrc: "/10.jpg",
    certificateAlt: "NSO CS Olympiad Certificate",
  },
];

const galleryItems = [
  {
    id: 1,
    src: "/about_me.jpg",
    alt: "Ayush portrait",
    label: "Profile",
    popupImages: [
      { id: 1, src: "", alt: "Profile photo 1", label: "Place Image 1" },
      { id: 2, src: "", alt: "Profile photo 2", label: "Place Image 2" },
      { id: 3, src: "", alt: "Profile photo 3", label: "Place Image 3" },
      { id: 4, src: "", alt: "Profile photo 4", label: "Place Image 4" },
      { id: 5, src: "", alt: "Profile photo 5", label: "Place Image 5" },
    ],
  },
  {
    id: 2,
    src: "/irc.jpg",
    alt: "International Rover Challenge certificate",
    label: "IRC 2025",
    popupImages: [
      { id: 1, src: "", alt: "IRC 2025 photo 1", label: "Place Image 1" },
      { id: 2, src: "", alt: "IRC 2025 photo 2", label: "Place Image 2" },
      { id: 3, src: "", alt: "IRC 2025 photo 3", label: "Place Image 3" },
      { id: 4, src: "", alt: "IRC 2025 photo 4", label: "Place Image 4" },
      { id: 5, src: "", alt: "IRC 2025 photo 5", label: "Place Image 5" },
    ],
  },
  {
    id: 3,
    src: "/isro_cert.jpg",
    alt: "ISRO certificate",
    label: "ISRO",
    popupImages: [
      { id: 1, src: "", alt: "ISRO photo 1", label: "Place Image 1" },
      { id: 2, src: "", alt: "ISRO photo 2", label: "Place Image 2" },
      { id: 3, src: "", alt: "ISRO photo 3", label: "Place Image 3" },
      { id: 4, src: "", alt: "ISRO photo 4", label: "Place Image 4" },
      { id: 5, src: "", alt: "ISRO photo 5", label: "Place Image 5" },
    ],
  },
  {
    id: 4,
    src: "/10.jpg",
    alt: "Achievement certificate",
    label: "Achievement",
    popupImages: [
      { id: 1, src: "", alt: "Achievement photo 1", label: "Place Image 1" },
      { id: 2, src: "", alt: "Achievement photo 2", label: "Place Image 2" },
      { id: 3, src: "", alt: "Achievement photo 3", label: "Place Image 3" },
      { id: 4, src: "", alt: "Achievement photo 4", label: "Place Image 4" },
      { id: 5, src: "", alt: "Achievement photo 5", label: "Place Image 5" },
    ],
  },
];

// ── ILLUSTRATIONS ────────────────────────────────────────────────────────────

function SlamIllustration() {
  return (
    <svg viewBox="0 0 320 148" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}>
      <rect width="320" height="148" fill="#060c16"/>
      <defs><pattern id="g1" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M20 0L0 0 0 20" fill="none" stroke="#00f5c4" strokeWidth="0.22" opacity="0.3"/></pattern></defs>
      <rect width="320" height="148" fill="url(#g1)"/>
      {/* floor plan */}
      <rect x="20" y="18" width="188" height="112" rx="2" fill="none" stroke="rgba(0,245,196,0.18)" strokeWidth="0.7"/>
      <rect x="20" y="18" width="188" height="6" fill="rgba(0,245,196,0.18)"/>
      <rect x="20" y="124" width="188" height="6" fill="rgba(0,245,196,0.18)"/>
      <rect x="20" y="18" width="6" height="112" fill="rgba(0,245,196,0.18)"/>
      <rect x="202" y="18" width="6" height="112" fill="rgba(0,245,196,0.18)"/>
      <rect x="85" y="58" width="6" height="72" fill="rgba(0,245,196,0.14)"/>
      <rect x="138" y="18" width="6" height="62" fill="rgba(0,245,196,0.12)"/>
      {/* planned path */}
      <path d="M44 112 L44 76 L105 76 L105 42 L168 42 L168 112 L194 112" fill="none" stroke="#00f5c4" strokeWidth="1.8" strokeDasharray="6 3"/>
      {/* robot */}
      <circle cx="44" cy="112" r="9" fill="rgba(0,245,196,0.1)" stroke="#00f5c4" strokeWidth="1.5"/>
      <circle cx="44" cy="112" r="3.5" fill="#00f5c4"/>
      {[0,30,60,90,120,150,180,210,240,270,300,330].map((d,i)=>{const r=d*Math.PI/180;const l=18+(i%3)*5;return<line key={i} x1="44" y1="112" x2={44+Math.cos(r)*l} y2={112+Math.sin(r)*l} stroke="#00f5c4" strokeWidth="0.5" opacity="0.25"/>})}
      <circle cx="44" cy="112" r="17" fill="none" stroke="rgba(0,245,196,0.12)" strokeWidth="0.7"/>
      <circle cx="44" cy="112" r="25" fill="none" stroke="rgba(0,245,196,0.07)" strokeWidth="0.7"/>
      {/* goal */}
      <circle cx="194" cy="112" r="6" fill="rgba(0,245,196,0.1)" stroke="#00f5c4" strokeWidth="1.5" strokeDasharray="3 2"/>
      {/* HUD */}
      <rect x="218" y="18" width="90" height="112" rx="3" fill="rgba(0,245,196,0.03)" stroke="rgba(0,245,196,0.12)" strokeWidth="0.5"/>
      <text x="226" y="36" fill="#00f5c4" fontFamily="monospace" fontSize="7.5" opacity="0.9">SLAM: ACTIVE</text>
      <text x="226" y="50" fill="#00f5c4" fontFamily="monospace" fontSize="7" opacity="0.8">ATE: &lt;20cm</text>
      <text x="226" y="63" fill="#00f5c4" fontFamily="monospace" fontSize="7" opacity="0.8">RPE: &lt;10cm</text>
      <text x="226" y="78" fill="rgba(0,245,196,0.5)" fontFamily="monospace" fontSize="7">LiDAR: 360°</text>
      <text x="226" y="91" fill="rgba(0,245,196,0.5)" fontFamily="monospace" fontSize="7">IMU: FUSED</text>
      <text x="226" y="104" fill="rgba(0,245,196,0.5)" fontFamily="monospace" fontSize="7">RAM: 470MB</text>
      <path d="M0 0L13 0L13 1.5L1.5 1.5L1.5 13L0 13Z" fill="#00f5c4" opacity="0.45"/>
      <path d="M320 0L307 0L307 1.5L318.5 1.5L318.5 13L320 13Z" fill="#00f5c4" opacity="0.45"/>
    </svg>
  );
}

function AuvIllustration() {
  return (
    <svg viewBox="0 0 320 148" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}>
      <defs>
        <linearGradient id="sea" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#001a2e"/><stop offset="100%" stopColor="#000810"/></linearGradient>
        <pattern id="g2" width="16" height="16" patternUnits="userSpaceOnUse"><path d="M16 0L0 0 0 16" fill="none" stroke="#38bdf8" strokeWidth="0.18" opacity="0.22"/></pattern>
      </defs>
      <rect width="320" height="148" fill="url(#sea)"/>
      <rect width="320" height="148" fill="url(#g2)"/>
      {/* surface */}
      <path d="M0 24 Q40 18 80 24 Q120 30 160 24 Q200 18 240 24 Q280 30 320 24" fill="none" stroke="#38bdf8" strokeWidth="1.2" opacity="0.35"/>
      <path d="M0 30 Q40 24 80 30 Q120 36 160 30 Q200 24 240 30 Q280 36 320 30" fill="none" stroke="#38bdf8" strokeWidth="0.5" opacity="0.15"/>
      {/* AUV */}
      <ellipse cx="160" cy="84" rx="54" ry="16" fill="rgba(56,189,248,0.07)" stroke="#38bdf8" strokeWidth="1.2"/>
      <ellipse cx="106" cy="84" rx="5" ry="11" fill="rgba(56,189,248,0.12)" stroke="#38bdf8" strokeWidth="1"/>
      <ellipse cx="214" cy="84" rx="5" ry="11" fill="rgba(56,189,248,0.12)" stroke="#38bdf8" strokeWidth="1"/>
      <path d="M148 68 L156 57 L172 57 L180 68" fill="rgba(56,189,248,0.09)" stroke="#38bdf8" strokeWidth="0.8"/>
      <path d="M148 100 L156 111 L172 111 L180 100" fill="rgba(56,189,248,0.09)" stroke="#38bdf8" strokeWidth="0.8"/>
      <circle cx="160" cy="84" r="7" fill="rgba(56,189,248,0.14)" stroke="#38bdf8" strokeWidth="1.1"/>
      <circle cx="160" cy="84" r="3" fill="#38bdf8" opacity="0.65"/>
      <circle cx="160" cy="84" r="20" fill="none" stroke="rgba(56,189,248,0.18)" strokeWidth="0.8"/>
      <circle cx="160" cy="84" r="35" fill="none" stroke="rgba(56,189,248,0.1)" strokeWidth="0.8"/>
      <circle cx="160" cy="84" r="50" fill="none" stroke="rgba(56,189,248,0.06)" strokeWidth="0.8"/>
      <line x1="145" y1="100" x2="130" y2="140" stroke="rgba(56,189,248,0.2)" strokeWidth="0.6"/>
      <line x1="160" y1="100" x2="160" y2="140" stroke="rgba(56,189,248,0.2)" strokeWidth="0.6"/>
      <line x1="175" y1="100" x2="190" y2="140" stroke="rgba(56,189,248,0.2)" strokeWidth="0.6"/>
      <path d="M0 138 Q60 132 120 138 Q180 144 240 138 Q280 133 320 138 L320 148 L0 148Z" fill="rgba(56,189,248,0.05)" stroke="rgba(56,189,248,0.18)" strokeWidth="0.5"/>
      {/* HUD */}
      <rect x="228" y="30" width="82" height="90" rx="3" fill="rgba(56,189,248,0.03)" stroke="rgba(56,189,248,0.14)" strokeWidth="0.5"/>
      <text x="236" y="48" fill="#38bdf8" fontFamily="monospace" fontSize="7.5" opacity="0.9">AUV: ACTIVE</text>
      <text x="236" y="61" fill="#38bdf8" fontFamily="monospace" fontSize="7" opacity="0.8">EKF: FUSED</text>
      <text x="236" y="74" fill="#38bdf8" fontFamily="monospace" fontSize="7" opacity="0.8">DVL: ONLINE</text>
      <text x="236" y="87" fill="#38bdf8" fontFamily="monospace" fontSize="7" opacity="0.8">GPS: DENIED</text>
      <text x="236" y="100" fill="rgba(56,189,248,0.5)" fontFamily="monospace" fontSize="7">DEPTH: 10m</text>
      <text x="236" y="113" fill="rgba(56,189,248,0.5)" fontFamily="monospace" fontSize="7">HDG: 247°</text>
      <path d="M0 0L13 0L13 1.5L1.5 1.5L1.5 13L0 13Z" fill="#38bdf8" opacity="0.35"/>
      <path d="M320 0L307 0L307 1.5L318.5 1.5L318.5 13L320 13Z" fill="#38bdf8" opacity="0.35"/>
    </svg>
  );
}

function RoverIllustration() {
  return (
    <svg viewBox="0 0 320 148" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}>
      <rect width="320" height="148" fill="#090510"/>
      <defs><pattern id="g3" width="18" height="18" patternUnits="userSpaceOnUse"><path d="M18 0L0 0 0 18" fill="none" stroke="#a78bfa" strokeWidth="0.2" opacity="0.28"/></pattern></defs>
      <rect width="320" height="148" fill="url(#g3)"/>
      {/* terrain */}
      <path d="M0 118 Q30 110 60 118 Q90 126 120 113 Q150 100 180 112 Q210 124 240 108 Q270 94 300 103 L320 100 L320 148 L0 148Z" fill="rgba(167,139,250,0.05)" stroke="rgba(167,139,250,0.18)" strokeWidth="0.8"/>
      <ellipse cx="78" cy="116" rx="10" ry="5" fill="rgba(167,139,250,0.09)" stroke="rgba(167,139,250,0.22)" strokeWidth="0.7"/>
      <ellipse cx="238" cy="109" rx="8" ry="4.5" fill="rgba(167,139,250,0.08)" stroke="rgba(167,139,250,0.18)" strokeWidth="0.7"/>
      {/* path */}
      <path d="M20 130 Q55 120 95 110 Q130 100 162 90" fill="none" stroke="rgba(167,139,250,0.32)" strokeWidth="1.2" strokeDasharray="5 3"/>
      {/* rover */}
      <rect x="128" y="68" width="70" height="32" rx="5" fill="rgba(9,5,16,0.92)" stroke="#a78bfa" strokeWidth="1.2"/>
      <rect x="106" y="70" width="22" height="14" rx="2" fill="rgba(167,139,250,0.08)" stroke="#a78bfa" strokeWidth="0.8"/>
      <rect x="198" y="70" width="22" height="14" rx="2" fill="rgba(167,139,250,0.08)" stroke="#a78bfa" strokeWidth="0.8"/>
      {[3,6,9,12,15,18].map(x=><line key={x} x1={106+x} y1="70" x2={106+x} y2="84" stroke="rgba(167,139,250,0.28)" strokeWidth="0.4"/>)}
      {[3,6,9,12,15,18].map(x=><line key={x+50} x1={198+x} y1="70" x2={198+x} y2="84" stroke="rgba(167,139,250,0.28)" strokeWidth="0.4"/>)}
      <line x1="163" y1="68" x2="163" y2="48" stroke="#a78bfa" strokeWidth="1.2"/>
      <rect x="152" y="40" width="22" height="12" rx="3" fill="rgba(9,5,16,0.92)" stroke="#a78bfa" strokeWidth="1"/>
      <circle cx="163" cy="46" r="3.5" fill="#a78bfa" opacity="0.7"/>
      {[138,163,188].map(x=><g key={x}><circle cx={x} cy="105" r="9" fill="rgba(9,5,16,0.92)" stroke="#a78bfa" strokeWidth="1.2"/><circle cx={x} cy="105" r="3.8" fill="rgba(167,139,250,0.18)" stroke="#a78bfa" strokeWidth="0.8"/></g>)}
      <circle cx="163" cy="46" r="19" fill="none" stroke="rgba(167,139,250,0.13)" strokeWidth="0.8" strokeDasharray="4 3"/>
      <circle cx="163" cy="46" r="31" fill="none" stroke="rgba(167,139,250,0.07)" strokeWidth="0.8" strokeDasharray="4 4"/>
      {/* HUD */}
      <rect x="14" y="18" width="86" height="80" rx="3" fill="rgba(167,139,250,0.03)" stroke="rgba(167,139,250,0.14)" strokeWidth="0.5"/>
      <text x="22" y="34" fill="#a78bfa" fontFamily="monospace" fontSize="7.5" opacity="0.9">IROC-U24</text>
      <text x="22" y="47" fill="#a78bfa" fontFamily="monospace" fontSize="7" opacity="0.8">RANK: #6/267</text>
      <text x="22" y="60" fill="#a78bfa" fontFamily="monospace" fontSize="7" opacity="0.7">A*: ACTIVE</text>
      <text x="22" y="73" fill="rgba(167,139,250,0.5)" fontFamily="monospace" fontSize="7">MPPI: ONLINE</text>
      <text x="22" y="86" fill="rgba(167,139,250,0.5)" fontFamily="monospace" fontSize="7">6 WHEELS</text>
      <rect x="228" y="18" width="80" height="26" rx="3" fill="rgba(167,139,250,0.07)" stroke="rgba(167,139,250,0.22)" strokeWidth="0.7"/>
      <text x="268" y="28" fill="#a78bfa" fontFamily="monospace" fontSize="7.5" fontWeight="bold" textAnchor="middle">ISRO · IRC 2025</text>
      <text x="268" y="39" fill="rgba(167,139,250,0.55)" fontFamily="monospace" fontSize="6.5" textAnchor="middle">President's Recognition</text>
      <path d="M0 0L13 0L13 1.5L1.5 1.5L1.5 13L0 13Z" fill="#a78bfa" opacity="0.4"/>
    </svg>
  );
}

function CobotIllustration() {
  return (
    <svg viewBox="0 0 320 148" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}>
      <rect width="320" height="148" fill="#060c16"/>
      <defs><pattern id="g4" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M20 0L0 0 0 20" fill="none" stroke="#00f5c4" strokeWidth="0.2" opacity="0.22"/></pattern></defs>
      <rect width="320" height="148" fill="url(#g4)"/>

      {/* Nav2 BT Representation */}
      <g transform="translate(16, 16)">
        <rect x="0" y="0" width="80" height="48" rx="3" fill="rgba(0,245,196,0.03)" stroke="rgba(0,245,196,0.15)" strokeWidth="1"/>
        <text x="40" y="12" fill="rgba(0,245,196,0.7)" fontFamily="monospace" fontSize="6" textAnchor="middle">NAV2 BEHAVIOR TREE</text>
        <circle cx="40" cy="22" r="4" fill="rgba(0,245,196,0.1)" stroke="#00f5c4" strokeWidth="1"/>
        <path d="M 40 26 L 25 36 M 40 26 L 55 36" fill="none" stroke="#00f5c4" strokeWidth="1" strokeDasharray="2 1"/>
        <rect x="21" y="36" width="8" height="8" rx="1" fill="rgba(0,245,196,0.2)" stroke="#00f5c4" strokeWidth="1"/>
        <rect x="51" y="36" width="8" height="8" rx="1" fill="rgba(0,245,196,0.2)" stroke="#00f5c4" strokeWidth="1"/>
      </g>

      {/* NVIDIA Jetson & Hardware Architecture */}
      <g transform="translate(204, 16)">
        <rect x="0" y="0" width="100" height="116" rx="4" fill="rgba(0,245,196,0.02)" stroke="rgba(0,245,196,0.15)" strokeWidth="1"/>
        <text x="50" y="14" fill="#00f5c4" fontFamily="monospace" fontSize="7" textAnchor="middle" fontWeight="bold">NVIDIA JETSON</text>
        
        {/* Software Stack */}
        <rect x="12" y="24" width="76" height="26" rx="2" fill="rgba(0,245,196,0.08)" stroke="#00f5c4" strokeWidth="1"/>
        <text x="50" y="35" fill="#00f5c4" fontFamily="monospace" fontSize="6.5" textAnchor="middle">ROS 2 HUMBLE</text>
        <text x="50" y="44" fill="rgba(0,245,196,0.6)" fontFamily="monospace" fontSize="5.5" textAnchor="middle">ros2_control</text>
        
        {/* UDP Connection */}
        <path d="M 50 50 L 50 82" fill="none" stroke="#00f5c4" strokeWidth="1.5" strokeDasharray="3 2"/>
        <circle cx="50" cy="66" r="3" fill="#00f5c4"/>
        <rect x="58" y="62" width="22" height="9" rx="1" fill="rgba(0,245,196,0.1)" stroke="#00f5c4" strokeWidth="0.5"/>
        <text x="69" y="69" fill="#00f5c4" fontFamily="monospace" fontSize="5.5" textAnchor="middle">UDP</text>

        {/* Hardware Stack */}
        <rect x="12" y="82" width="76" height="24" rx="2" fill="rgba(0,245,196,0.04)" stroke="#00f5c4" strokeWidth="1"/>
        <text x="50" y="93" fill="#00f5c4" fontFamily="monospace" fontSize="6.5" textAnchor="middle">HW INTERFACE</text>
        <text x="50" y="101" fill="rgba(0,245,196,0.6)" fontFamily="monospace" fontSize="5" textAnchor="middle">diff_drive_controller</text>
      </g>

      {/* Hospitality Bot & Dynamic Navigation */}
      <g transform="translate(0, 75)">
        {/* Planned Path avoiding obstacle */}
        <path d="M 30 35 C 70 35 90 10 130 10 C 150 10 170 35 195 35" fill="none" stroke="#00f5c4" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.8"/>
        <path d="M 195 35 L 190 32 M 195 35 L 190 38" fill="none" stroke="#00f5c4" strokeWidth="1.5" opacity="0.8"/>
        
        {/* Dynamic Obstacle (Human) */}
        <circle cx="115" cy="35" r="5" fill="rgba(255,255,255,0.2)" stroke="#fff" strokeWidth="1.2" opacity="0.6"/>
        <circle cx="115" cy="35" r="14" fill="none" stroke="#fff" strokeWidth="0.8" strokeDasharray="2 2" opacity="0.25"/>
        <text x="115" y="55" fill="rgba(255,255,255,0.4)" fontFamily="monospace" fontSize="5" textAnchor="middle">DYNAMIC OBS</text>

        {/* The Robot */}
        <g transform="translate(35, 35)">
          {/* Costmap / Lidar Aura */}
          <path d="M 0 0 L 55 -25 A 60 60 0 0 1 55 25 Z" fill="rgba(0,245,196,0.08)"/>
          <circle cx="0" cy="0" r="45" fill="none" stroke="rgba(0,245,196,0.15)" strokeWidth="1" strokeDasharray="2 4"/>
          
          {/* Diff Drive Base */}
          <rect x="-8" y="-18" width="16" height="5" rx="1.5" fill="#060c16" stroke="#00f5c4" strokeWidth="1.5"/>
          <rect x="-8" y="13" width="16" height="5" rx="1.5" fill="#060c16" stroke="#00f5c4" strokeWidth="1.5"/>
          <circle cx="0" cy="0" r="14" fill="rgba(0,245,196,0.05)" stroke="#00f5c4" strokeWidth="1.5"/>
          <circle cx="0" cy="0" r="4" fill="#00f5c4" opacity="0.8"/>
          <line x1="0" y1="0" x2="14" y2="0" stroke="#00f5c4" strokeWidth="1.5"/>
        </g>
      </g>
      
      <path d="M0 0L13 0L13 1.5L1.5 1.5L1.5 13L0 13Z" fill="#00f5c4" opacity="0.4"/>
    </svg>
  );
}

function SpiderIllustration() {
  return (
    <svg viewBox="0 0 320 148" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}>
      <rect width="320" height="148" fill="#07050f"/>
      <defs><pattern id="g5" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M20 0L0 0 0 20" fill="none" stroke="#a78bfa" strokeWidth="0.2" opacity="0.25"/></pattern></defs>
      <rect width="320" height="148" fill="url(#g5)"/>
      <rect x="14" y="16" width="182" height="116" rx="3" fill="rgba(167,139,250,0.025)" stroke="rgba(167,139,250,0.11)" strokeWidth="0.5"/>
      <text x="22" y="30" fill="rgba(167,139,250,0.55)" fontFamily="monospace" fontSize="7">RL REWARD CURVE</text>
      <line x1="28" y1="122" x2="182" y2="122" stroke="rgba(167,139,250,0.2)" strokeWidth="0.7"/>
      <line x1="28" y1="38" x2="28" y2="122" stroke="rgba(167,139,250,0.2)" strokeWidth="0.7"/>
      <polyline points="28,120 42,117 56,112 68,106 80,98 92,90 104,82 116,74 128,67 140,61 152,57 164,53 176,50" fill="none" stroke="#a78bfa" strokeWidth="1.8"/>
      <polygon points="28,120 42,117 56,112 68,106 80,98 92,90 104,82 116,74 128,67 140,61 152,57 164,53 176,50 176,122 28,122" fill="rgba(167,139,250,0.06)"/>
      <text x="98" y="135" fill="rgba(167,139,250,0.38)" fontFamily="monospace" fontSize="6.5" textAnchor="middle">training episodes →</text>
      <g transform="translate(256,74)">
        <ellipse cx="0" cy="0" rx="19" ry="13" fill="rgba(167,139,250,0.1)" stroke="#a78bfa" strokeWidth="1.3"/>
        {[[-15,-7,-36,-22],[-15,0,-38,0],[-15,7,-36,22],[15,-7,36,-22],[15,0,38,0],[15,7,36,22]].map(([x1,y1,x2,y2],i)=>(
          <g key={i}><line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#a78bfa" strokeWidth="1.3"/><circle cx={x2} cy={y2} r="3" fill="#a78bfa" opacity="0.7"/></g>
        ))}
        <circle cx="0" cy="0" r="5" fill="rgba(167,139,250,0.28)" stroke="#a78bfa" strokeWidth="1"/>
      </g>
      <rect x="220" y="16" width="86" height="90" rx="3" fill="rgba(167,139,250,0.025)" stroke="rgba(167,139,250,0.11)" strokeWidth="0.5"/>
      <text x="228" y="34" fill="#a78bfa" fontFamily="monospace" fontSize="7.5">RL: TRAINING</text>
      <text x="228" y="48" fill="#a78bfa" fontFamily="monospace" fontSize="7" opacity="0.8">POLICY: ACT</text>
      <text x="228" y="62" fill="rgba(167,139,250,0.5)" fontFamily="monospace" fontSize="7">DOF: 18</text>
      <text x="228" y="75" fill="rgba(167,139,250,0.5)" fontFamily="monospace" fontSize="7">LEGS: 6</text>
      <text x="228" y="88" fill="rgba(167,139,250,0.5)" fontFamily="monospace" fontSize="7">SIM: RUNNING</text>
      <path d="M0 0L13 0L13 1.5L1.5 1.5L1.5 13L0 13Z" fill="#a78bfa" opacity="0.35"/>
    </svg>
  );
}

function ManipIllustration() {
  return (
    <svg viewBox="0 0 320 148" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}>
      <rect width="320" height="148" fill="#030a10"/>
      <defs><pattern id="g6" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M20 0L0 0 0 20" fill="none" stroke="#38bdf8" strokeWidth="0.2" opacity="0.22"/></pattern></defs>
      <rect width="320" height="148" fill="url(#g6)"/>
      {[[30,128,60,108],[60,108,74,80],[60,108,50,70],[74,80,108,64],[108,64,138,47],[138,47,162,59],[162,59,196,49],[196,49,240,39],[196,49,256,62],[74,80,90,96],[50,70,36,58]].map(([x1,y1,x2,y2],i)=>(
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(56,189,248,0.22)" strokeWidth="0.8"/>
      ))}
      {[[60,108],[74,80],[108,64],[138,47],[162,59],[196,49]].map(([x,y],i)=><circle key={i} cx={x} cy={y} r="2.5" fill="rgba(56,189,248,0.5)"/>)}
      <rect x="82" y="36" width="28" height="28" rx="3" fill="rgba(239,68,68,0.07)" stroke="rgba(239,68,68,0.32)" strokeWidth="0.8"/>
      <rect x="165" y="74" width="22" height="38" rx="3" fill="rgba(239,68,68,0.07)" stroke="rgba(239,68,68,0.28)" strokeWidth="0.8"/>
      <rect x="114" y="104" width="32" height="24" rx="3" fill="rgba(239,68,68,0.07)" stroke="rgba(239,68,68,0.22)" strokeWidth="0.8"/>
      <path d="M30,128 Q52,110 74,80 Q98,63 138,47 Q165,55 196,49 Q230,43 256,62" fill="none" stroke="#38bdf8" strokeWidth="2"/>
      <circle cx="30" cy="128" r="6" fill="rgba(56,189,248,0.14)" stroke="#38bdf8" strokeWidth="1.5"/>
      <circle cx="30" cy="128" r="2.5" fill="#38bdf8"/>
      <circle cx="256" cy="62" r="6" fill="rgba(239,68,68,0.14)" stroke="#ef4444" strokeWidth="1.5"/>
      <circle cx="256" cy="62" r="2.5" fill="#ef4444"/>
      <g opacity="0.65">
        <line x1="278" y1="132" x2="278" y2="110" stroke="#38bdf8" strokeWidth="2.5"/>
        <circle cx="278" cy="110" r="4" fill="rgba(56,189,248,0.28)" stroke="#38bdf8" strokeWidth="1.2"/>
        <line x1="278" y1="110" x2="294" y2="92" stroke="#38bdf8" strokeWidth="2.2"/>
        <circle cx="294" cy="92" r="4" fill="rgba(56,189,248,0.28)" stroke="#38bdf8" strokeWidth="1.2"/>
        <line x1="294" y1="92" x2="305" y2="76" stroke="#38bdf8" strokeWidth="2"/>
        <circle cx="305" cy="76" r="4" fill="rgba(56,189,248,0.28)" stroke="#38bdf8" strokeWidth="1.2"/>
        <line x1="305" y1="76" x2="313" y2="60" stroke="#38bdf8" strokeWidth="1.8"/>
        <circle cx="313" cy="60" r="3" fill="#38bdf8" opacity="0.5"/>
      </g>
      <text x="16" y="13" fill="rgba(56,189,248,0.65)" fontFamily="monospace" fontSize="7.5">RRT-CONNECT · OMPL · MoveIt</text>
      <text x="244" y="13" fill="rgba(239,68,68,0.6)" fontFamily="monospace" fontSize="7">GOAL</text>
      <text x="14" y="142" fill="rgba(56,189,248,0.4)" fontFamily="monospace" fontSize="7">START</text>
      <path d="M0 0L13 0L13 1.5L1.5 1.5L1.5 13L0 13Z" fill="#38bdf8" opacity="0.4"/>
    </svg>
  );
}

const expIllustrations = [SlamIllustration, AuvIllustration, RoverIllustration];
const projIllustrations = [CobotIllustration, SpiderIllustration, ManipIllustration];

// ── MODAL ────────────────────────────────────────────────────────────────────

function Modal({ data, onClose }) {
  useEffect(() => {
    const h = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", h);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", h); document.body.style.overflow = ""; };
  }, [onClose]);
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.82)", backdropFilter: "blur(14px)" }}
      onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto rounded-2xl border p-8"
        style={{ background: "linear-gradient(135deg,#070d1a,#0b1420)", borderColor: data.color + "32", boxShadow: `0 0 80px ${data.color}12,0 0 0 1px ${data.color}1e` }}>
        <button onClick={onClose} className="absolute top-5 right-5 p-1.5 rounded-lg hover:bg-white/10 transition-colors" style={{ color: "#7788aa" }}><X size={18}/></button>
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg" style={{ background: data.color + "14", color: data.color }}>{data.icon}</div>
          <div>
            <div className="text-xs font-mono tracking-widest mb-0.5" style={{ color: data.color }}>{data.period || "PROJECT"}</div>
            <h3 className="text-xl font-bold text-white">{data.company || data.title}</h3>
            {data.role && <div className="text-sm" style={{ color: "#7788aa" }}>{data.role}</div>}
          </div>
        </div>
        <p className="text-sm mb-6 leading-relaxed" style={{ color: "#9aacbc" }}>{data.summary}</p>
        <div className="space-y-4">
          {data.points.map((p, i) => (
            <div key={i} className="pl-4 border-l-2" style={{ borderColor: data.color + "42" }}>
              <div className="text-sm font-semibold mb-1" style={{ color: data.color }}>{p.title}</div>
              <div className="text-sm leading-relaxed" style={{ color: "#8899ab" }}>{p.body}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ContactModal({ onClose }) {
  useEffect(() => {
    const h = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", h);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", h); document.body.style.overflow = ""; };
  }, [onClose]);
  const links = [
    { icon: <Phone size={16}/>, label: "+91 8292800825", href: "tel:+918292800825", color: "#00f5c4" },
    { icon: <Mail size={16}/>, label: "ayushle6@gmail.com", href: "mailto:ayushle6@gmail.com", color: "#38bdf8" },
    { icon: <Linkedin size={16}/>, label: "linkedin.com/in/ayush-kumar-a44632283", href: "https://www.linkedin.com/in/ayush-kumar-a44632283/", color: "#a78bfa" },
    { icon: <Github size={16}/>, label: "github.com/ayushlen", href: "https://github.com/ayushle", color: "#f97316" },
  ];
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.82)", backdropFilter: "blur(14px)" }}
      onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="relative w-full max-w-md rounded-2xl border p-8"
        style={{ background: "linear-gradient(135deg,#070d1a,#0b1420)", borderColor: "#00f5c432", boxShadow: "0 0 80px rgba(0,245,196,0.09)" }}>
        <button onClick={onClose} className="absolute top-5 right-5 p-1.5 rounded-lg hover:bg-white/10 transition-colors" style={{ color: "#7788aa" }}><X size={18}/></button>
        <div className="text-xs font-mono tracking-widest mb-1" style={{ color: "#00f5c4" }}>// CONTACT</div>
        <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
        <div className="space-y-3">
          {links.map((l, i) => (
            <a key={i} href={l.href} target="_blank" rel="noreferrer"
              className="flex items-center gap-3 p-3 rounded-xl border transition-all hover:scale-[1.02]"
              style={{ borderColor: l.color + "25", background: l.color + "07", color: "#cdd9e5" }}>
              <span style={{ color: l.color }}>{l.icon}</span>
              <span className="text-sm font-mono">{l.label}</span>
              <ExternalLink size={12} className="ml-auto opacity-40"/>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function GallerySetModal({ galleryItem, onClose }) {
  useEffect(() => {
    const h = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", h);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", h); document.body.style.overflow = ""; };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.82)", backdropFilter: "blur(14px)" }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="relative w-full max-w-5xl max-h-[88vh] overflow-y-auto rounded-2xl border p-6 md:p-8"
        style={{ background: "linear-gradient(135deg,#070d1a,#0b1420)", borderColor: "#22d3ee30", boxShadow: "0 0 80px rgba(34,211,238,0.12)" }}
      >
        <button onClick={onClose} className="absolute top-5 right-5 p-1.5 rounded-lg hover:bg-white/10 transition-colors" style={{ color: "#7788aa" }}>
          <X size={18}/>
        </button>
        <p className="text-xs font-mono tracking-widest mb-1" style={{ color: "#22d3ee" }}>// GALLERY SET</p>
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{galleryItem.label}</h3>
        <p className="text-sm mb-6" style={{ color: "#7f95a8" }}>Add your 5 photos by replacing each slot src in this tile's popupImages list.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryItem.popupImages.map((item) => (
            <figure key={item.id} className="rounded-xl border overflow-hidden" style={{ borderColor: "rgba(34,211,238,0.22)", background: "#060d18" }}>
              <div className="aspect-[4/3] border-b" style={{ borderColor: "rgba(34,211,238,0.16)" }}>
                {item.src ? (
                  <img src={item.src} alt={item.alt} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-center px-3" style={{ color: "#5f7d93", background: "linear-gradient(135deg,#091424,#0a1620)" }}>
                    <span className="text-xs font-mono">{item.label}</span>
                  </div>
                )}
              </div>
              <figcaption className="px-3 py-2 text-xs font-mono" style={{ color: "#87a2b8" }}>
                Slot {item.id}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── CARD ─────────────────────────────────────────────────────────────────────

function Card({ item, Illustration, onClick }) {
  return (
    <button onClick={() => onClick(item)}
      className="group relative w-full rounded-2xl border overflow-hidden text-left transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1"
      style={{ background: "#070c17", borderColor: item.color + "20", boxShadow: `0 0 0 1px ${item.color}0b` }}>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at 50% 0%,${item.color}0a,transparent 65%)` }}/>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg,transparent,${item.color}75,transparent)` }}/>
      <div className="h-36 overflow-hidden"><Illustration/></div>
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2.5">
          <span style={{ color: item.color }}>{item.icon}</span>
          <span className="text-xs font-mono tracking-wider" style={{ color: item.color + "bb" }}>{item.period || "PROJECT"}</span>
        </div>
        <h3 className="font-bold text-white text-[15px] mb-0.5">{item.company || item.title}</h3>
        {item.role && <p className="text-xs mb-2" style={{ color: "#778899" }}>{item.role}</p>}
        <p className="text-xs leading-relaxed" style={{ color: "#607080", display:"-webkit-box", WebkitLineClamp:2, WebkitBoxOrient:"vertical", overflow:"hidden" }}>{item.summary}</p>
        <div className="flex items-center gap-1.5 mt-4 text-xs font-mono" style={{ color: item.color + "cc" }}>
          <span>View details</span><ExternalLink size={11}/>
        </div>
      </div>
    </button>
  );
}

// ── FLIP CARD ────────────────────────────────────────────────────────────────

function FlipCard({ ach }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div className="cursor-pointer" style={{ perspective:"1000px", height:"200px" }} onClick={() => setFlipped(!flipped)}>
      <div style={{ position:"relative",width:"100%",height:"100%",transformStyle:"preserve-3d",transition:"transform 0.65s cubic-bezier(0.23,1,0.32,1)",transform:flipped?"rotateY(180deg)":"rotateY(0deg)" }}>
        <div className="absolute inset-0 rounded-2xl border p-6 flex flex-col justify-between"
          style={{ backfaceVisibility:"hidden",WebkitBackfaceVisibility:"hidden",background:"#070c17",borderColor:ach.color+"26" }}>
          <div className="absolute top-0 left-0 right-0 h-px rounded-t-2xl" style={{ background:`linear-gradient(90deg,transparent,${ach.color},transparent)` }}/>
          <div className="text-3xl">{ach.icon}</div>
          <div>
            <h4 className="font-bold text-white text-sm mb-1">{ach.title}</h4>
            <p className="text-xs leading-relaxed" style={{ color:"#778899" }}>{ach.body}</p>
          </div>
          <div className="text-xs font-mono" style={{ color:ach.color+"68" }}>click to flip →</div>
        </div>
        <div className="absolute inset-0 rounded-2xl border flex items-center justify-center"
          style={{ backfaceVisibility:"hidden",WebkitBackfaceVisibility:"hidden",transform:"rotateY(180deg)",background:"#070c17",borderColor:ach.color+"26" }}>
          <div className="w-full px-4 flex flex-col items-center gap-3">
            <div className="w-full h-28 rounded-xl border overflow-hidden" style={{ borderColor:ach.color+"32", background:"#040913" }}>
              <img src={ach.certificateSrc} alt={ach.certificateAlt} style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }}/>
            </div>
            <Award size={14} style={{ color:ach.color }}/>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── SKILLS ───────────────────────────────────────────────────────────────────

function SkillSection() {
  const [open, setOpen] = useState(0);
  return (
    <div className="space-y-2">
      {skillCategories.map((cat, i) => (
        <div key={i} className="rounded-xl border overflow-hidden" style={{ borderColor: cat.color + "1c" }}>
          <button onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between px-5 py-3.5 text-left transition-colors"
            style={{ background: open === i ? cat.color + "0a" : "transparent" }}>
            <div className="flex items-center gap-2.5">
              <span style={{ color: cat.color }}>{cat.icon}</span>
              <span className="text-sm font-semibold" style={{ color: open === i ? cat.color : "#bccdd8" }}>{cat.label}</span>
            </div>
            <ChevronDown size={14} style={{ color: cat.color, transform: open === i ? "rotate(180deg)" : "none", transition: "transform 0.3s" }}/>
          </button>
          <div style={{ maxHeight: open === i ? "300px" : "0", overflow:"hidden", transition:"max-height 0.4s cubic-bezier(0.23,1,0.32,1)" }}>
            <div className="px-5 pb-4 pt-1 flex flex-wrap gap-2">
              {cat.tags.map((tag, j) => (
                <span key={j} className="text-xs px-2.5 py-1 rounded-lg font-mono"
                  style={{ background: cat.color + "0d", color: cat.color + "cc", border: `1px solid ${cat.color}1c` }}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// ── APP ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [modal, setModal] = useState(null);
  const [contactOpen, setContactOpen] = useState(false);
  const [selectedGalleryItem, setSelectedGalleryItem] = useState(null);

  return (
    <div className="min-h-screen" style={{ background:"#050a12", color:"#cdd9e5" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');
        *{font-family:'Space Grotesk',sans-serif;}
        .mono,code{font-family:'JetBrains Mono',monospace!important;}
        html{scroll-behavior:smooth;}
        ::-webkit-scrollbar{width:4px;}
        ::-webkit-scrollbar-track{background:#050a12;}
        ::-webkit-scrollbar-thumb{background:rgba(0,245,196,0.28);border-radius:2px;}
        @keyframes fadeUp{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}}
        @keyframes blink{0%,100%{opacity:1}50%{opacity:0}}
        @keyframes floatY{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}
        @keyframes scanLine{0%{top:-1px}100%{top:100%}}
        @keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
        .fade-up{animation:fadeUp 0.9s ease both;}
        .cursor{animation:blink 1s step-end infinite;}
        .float{animation:floatY 4s ease-in-out infinite;}
      `}</style>

      {/* Subtle scan line — just one thin line, no noise */}
      <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
        <div style={{ position:"absolute",left:0,right:0,height:"1px",background:"linear-gradient(90deg,transparent,rgba(0,245,196,0.13),transparent)",animation:"scanLine 12s linear infinite" }}/>
      </div>

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-8 h-14"
        style={{ background:"rgba(5,10,18,0.88)",backdropFilter:"blur(16px)",borderBottom:"1px solid rgba(0,245,196,0.07)" }}>
        <span className="text-sm font-bold tracking-widest mono" style={{ color:"#00f5c4" }}>AK://</span>
        <div className="hidden md:flex items-center gap-6">
          {["About","Experience","Projects","Skills","Achievements","Gallery"].map(s=>(
            <a key={s} href={`#${s.toLowerCase()}`} className="text-xs font-mono tracking-wider transition-colors hover:text-white" style={{ color:"#778899" }}>{s}</a>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-14 overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage:"linear-gradient(rgba(0,245,196,0.022) 1px,transparent 1px),linear-gradient(90deg,rgba(0,245,196,0.022) 1px,transparent 1px)",backgroundSize:"48px 48px" }}/>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[560px] rounded-full pointer-events-none" style={{ background:"radial-gradient(circle,rgba(0,245,196,0.04),transparent 65%)" }}/>
        <div className="relative z-10 fade-up">
          <p className="text-xs font-mono tracking-[0.3em] mb-3" style={{ color:"#00f5c4" }}>// initializing...</p>
          <p className="text-lg mb-1" style={{ color:"#778899" }}>Hi there, I'm</p>
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight mb-3"
            style={{ background:"linear-gradient(135deg,#ffffff 25%,#00f5c4 68%,#38bdf8 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",letterSpacing:"-0.03em" }}>
            Ayush Kumar
          </h1>
          <div className="flex items-center justify-center gap-2 text-xl md:text-2xl mb-10" style={{ color:"#38bdf8" }}>
            <span className="mono">a robotic enthusiast</span>
            <span className="cursor text-white mono">_</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button onClick={() => setContactOpen(true)}
              className="px-7 py-3 rounded-xl font-semibold text-sm transition-all hover:scale-105"
              style={{ background:"linear-gradient(135deg,#00f5c4,#38bdf8)",color:"#050a12",boxShadow:"0 0 28px rgba(0,245,196,0.22)" }}>
              Contact Me
            </button>
            <a href="/Ayush_Kumar_Resume.pdf" target="_blank" rel="noreferrer"
              className="px-7 py-3 rounded-xl font-semibold text-sm border transition-all hover:scale-105"
              style={{ borderColor:"rgba(0,245,196,0.32)",color:"#00f5c4",background:"rgba(0,245,196,0.05)" }}>
              Check my Resume ↗
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 float" style={{ color:"#778899" }}><ChevronDown size={20}/></div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-5xl mx-auto px-6 py-28">
        <p className="text-xs font-mono tracking-widest mb-2" style={{ color:"#00f5c4" }}>// 01. about_me</p>
        <h2 className="text-4xl font-extrabold text-white mb-10">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Photo frame */}
          <div className="flex justify-center">
            <div className="relative w-72 h-80">
              {/* Animated corner ring */}
              <div className="absolute -inset-[2px] rounded-2xl" style={{ background:"linear-gradient(135deg,#00f5c4,#38bdf8,#a78bfa,#00f5c4)",padding:"2px",borderRadius:"18px" }}/>
              <div className="relative w-full h-full rounded-2xl overflow-hidden" style={{ background:"#080f1c", border:"2px solid rgba(0,245,196,0.0)" }}>
                {<img src="/about_me.jpg" alt="Ayush Kumar" style={{width:"100%",height:"100%",objectFit:"cover"}}/>
               /*
                  ── TO ADD YOUR PHOTO ──────────────────────────────────
                  Replace the placeholder block below with:
                    <img src="/your-photo.jpg" alt="Ayush Kumar" style={{width:"100%",height:"100%",objectFit:"cover"}}/>
                  Put your photo in the /public folder as your-photo.jpg
                  ─────────────────────────────────────────────────────── 
                */}
                <div className="w-full h-full flex flex-col items-center justify-center gap-3" style={{ background:"linear-gradient(135deg,#080f1c,#0c1826)" }}>
                  <div className="w-20 h-20 rounded-full flex items-center justify-center text-3xl" style={{ background:"rgba(0,245,196,0.08)",border:"1.5px solid rgba(0,245,196,0.22)" }}>👤</div>
                  <p className="text-xs font-mono text-center px-4" style={{ color:"rgba(0,245,196,0.45)" }}>
                    [ YOUR PHOTO ]<br/>
                    <span style={{ color:"rgba(0,245,196,0.25)",fontSize:"10px" }}>add to /public and update src</span>
                  </p>
                </div>
                {/* Corner accents */}
                <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2" style={{ borderColor:"#00f5c4" }}/>
                <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2" style={{ borderColor:"#00f5c4" }}/>
                <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2" style={{ borderColor:"#00f5c4" }}/>
                <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2" style={{ borderColor:"#00f5c4" }}/>
              </div>
            </div>
          </div>
          {/* Text + stat cards */}
          <div>
            <p className="text-base leading-relaxed mb-6" style={{ color:"#8899aa" }}>
              I'm a curious young engineer who is{" "}
              <span className="font-semibold text-white">deeply passionate about robotics</span>.
              I don't just write code — I work hands-on with the integration of physical hardware as well as
              architecting the complete software stack. My ultimate goal is to add{" "}
              <span className="font-semibold" style={{ color:"#00f5c4" }}>real intelligence to bots</span>,
              enabling them to perceive and navigate complex environments.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label:"Education", value:"IIITDM Kancheepuram", sub:"B.Tech ECE · 2022–2026" },
                { label:"Location", value:"Chennai, India", sub:"Open to relocation" },
                { label:"Focus", value:"Autonomous Systems", sub:"SLAM · Nav · Control" },
                { label:"Status", value:"Seeking Roles", sub:"Full-time / Internship" },
              ].map((item,i) => (
                <div key={i} className="p-3 rounded-xl border" style={{ borderColor:"rgba(0,245,196,0.1)",background:"rgba(0,245,196,0.025)" }}>
                  <div className="text-xs font-mono mb-0.5" style={{ color:"rgba(0,245,196,0.48)" }}>{item.label}</div>
                  <div className="text-sm font-semibold text-white">{item.value}</div>
                  <div className="text-xs" style={{ color:"#607080" }}>{item.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="max-w-6xl mx-auto px-6 py-20">
        <p className="text-xs font-mono tracking-widest mb-2" style={{ color:"#38bdf8" }}>// 02. experience</p>
        <h2 className="text-4xl font-extrabold text-white mb-10">Work & Leadership</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {experiences.map((item, i) => <Card key={item.id} item={item} Illustration={expIllustrations[i]} onClick={setModal}/>)}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
        <p className="text-xs font-mono tracking-widest mb-2" style={{ color:"#a78bfa" }}>// 03. projects</p>
        <h2 className="text-4xl font-extrabold text-white mb-10">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {projects.map((item, i) => <Card key={item.id} item={{ ...item, company:item.title }} Illustration={projIllustrations[i]} onClick={setModal}/>)}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="max-w-3xl mx-auto px-6 py-20">
        <p className="text-xs font-mono tracking-widest mb-2" style={{ color:"#f97316" }}>// 04. skills</p>
        <h2 className="text-4xl font-extrabold text-white mb-10">Technical Arsenal</h2>
        <SkillSection/>
      </section>

      {/* ACHIEVEMENTS */}
      <section id="achievements" className="max-w-5xl mx-auto px-6 py-20">
        <p className="text-xs font-mono tracking-widest mb-2" style={{ color:"#f43f5e" }}>// 05. achievements</p>
        <h2 className="text-4xl font-extrabold text-white mb-2">Awards & Recognition</h2>
        <p className="text-sm font-mono mb-10" style={{ color:"#778899" }}></p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map(ach => <FlipCard key={ach.id} ach={ach}/>)}
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="max-w-6xl mx-auto px-6 py-20">
        <p className="text-xs font-mono tracking-widest mb-2" style={{ color:"#22d3ee" }}>// 06. gallery</p>
        <h2 className="text-4xl font-extrabold text-white mb-2">Gallery</h2>
        <p className="text-sm mb-10" style={{ color:"#778899" }}>Snapshots from my journey.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {galleryItems.map((item) => (
            <figure
              key={item.id}
              className="group rounded-2xl border overflow-hidden cursor-pointer"
              onClick={() => setSelectedGalleryItem(item)}
              style={{ borderColor:"rgba(34,211,238,0.2)", background:"#060d18" }}>
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <figcaption className="px-3 py-2 text-xs font-mono flex items-center justify-between" style={{ color:"#87a2b8" }}>
                <span>{item.label}</span>
                <span style={{ color: "#22d3ee" }}>open</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t py-10 px-6 flex flex-col items-center gap-4" style={{ borderColor:"rgba(0,245,196,0.07)" }}>
        <div className="flex items-center gap-5">
          <a href="mailto:ayushle6@gmail.com" className="transition-colors hover:text-white" style={{ color:"#778899" }}><Mail size={18}/></a>
          <a href="https://www.linkedin.com/in/ayush-kumar-a44632283/" target="_blank" rel="noreferrer" className="transition-colors hover:text-white" style={{ color:"#778899" }}><Linkedin size={18}/></a>
          <a href="https://github.com/ayushle" target="_blank" rel="noreferrer" className="transition-colors hover:text-white" style={{ color:"#778899" }}><Github size={18}/></a>
        </div>
        <p className="text-xs font-mono" style={{ color:"#445566" }}>Built by Ayush Kumar — Robotics Engineer</p>
      </footer>

      {modal && <Modal data={modal} onClose={() => setModal(null)}/>}
      {contactOpen && <ContactModal onClose={() => setContactOpen(false)}/>}
      {selectedGalleryItem && <GallerySetModal galleryItem={selectedGalleryItem} onClose={() => setSelectedGalleryItem(null)}/>} 
    </div>
  );
}
