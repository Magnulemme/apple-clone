const navLinks = [
  { name: "Store", href: "#" },
  { name: "Mac", href: "#" },
  { name: "iPhone", href: "#" },
  { name: "Watch", href: "#" },
  { name: "Vision", href: "#" },
  { name: "AirPods", href: "#" },
];

const noChangeParts = [
  "Object_84",
  "Object_37",
  "Object_34",
  "Object_12",
  "Object_80",
  "Object_35",
  "Object_36",
  "Object_13",
  "Object_125",
  "Object_76",
  "Object_33",
  "Object_42",
  "Object_58",
  "Object_52",
  "Object_21",
  "Object_10",
];

const performanceImages = [
  { id: "p1", src: "/performance1.png" },
  { id: "p2", src: "/performance2.png" },
  { id: "p3", src: "/performance3.png" },
  { id: "p4", src: "/performance4.png" },
  { id: "p5", src: "/performance5.jpg" },
  { id: "p6", src: "/performance6.png" },
  { id: "p7", src: "/performance7.png" },
];

const performanceImgPositions = [
  {
      id: "p1",
      mobile: { left: 10, top: 25 },
      tablet: { left: 8, top: 23 },
      desktop: { left: 5, top: 20 },
  },
  {
      id: "p2",
      mobile: { right: 20, bottom: 60 },
      tablet: { right: 18, bottom: 58 },
      desktop: { right: 15, bottom: 55 },
  },
  {
      id: "p3",
      mobile: { right: 8, bottom: 48 },
      tablet: { right: 5, bottom: 46 },
      desktop: { right: 3, bottom: 45 },
  },
  {
      id: "p4",
      mobile: { right: 5, bottom: 35 },
      tablet: { right: 3, bottom: 33 },
      desktop: { right: 2, bottom: 30 },
  },
  {
      id: "p5",
      mobile: { left: 25, bottom: 52 },
      tablet: { left: 22, bottom: 51 },
      desktop: { left: 20, bottom: 50 },
  },
  {
      id: "p6",
      mobile: { left: 8, bottom: 32 },
      tablet: { left: 5, bottom: 31 },
      desktop: { left: 2, bottom: 30 },
  },
  {
      id: "p7",
      mobile: { right: 20, top: 30 },
      tablet: { right: 18, top: 28 },
      desktop: { right: 15, top: 25 },
  },
];

const features = [
  {
      id: 1,
      icon: "/feature-icon1.svg",
      highlight: "Email AI.",
      text: "Summarize and draft replies to emails instantly, so you stay on top of your inbox.",
      styles: "left-5 md:left-20 top-[20%] opacity-0 translate-y-5",
  },
  {
      id: 2,
      icon: "/feature-icon2.svg",
      highlight: "Image AI.",
      text: "Generate or edit images with ease. Just type what you imagine, and let AI bring it to life.",
      styles: "right-5 md:right-20 top-[30%] opacity-0 translate-y-5",
  },
  {
      id: 3,
      icon: "/feature-icon3.svg",
      highlight: "Summarize AI.",
      text: "Turn long articles, reports, or notes into clear, bite-sized summaries in seconds.",
      styles: "left-5 md:left-20 top-[50%] opacity-0 translate-y-5",
  },
  {
      id: 4,
      icon: "/feature-icon4.svg",
      highlight: "AirDrop.",
      text: "Wirelessly share photos, large files, and more between your iPhone, your Mac, & other devices.",
      styles: "right-5 md:right-20 top-[70%] opacity-0 translate-y-5",
  },
  {
      id: 5,
      icon: "/feature-icon5.svg",
      highlight: "Writing Tool.",
      text: "Write smarter and faster, whether it’s blogs, essays, or captions, AI helps polish your words.",
      styles: "left-5 md:left-20 top-[90%] opacity-0 translate-y-5",
  },
];

const featureSequence = [
  { videoPath: "/videos/feature-1.mp4", boxClass: ".box1", delay: 1 },
  { videoPath: "/videos/feature-2.mp4", boxClass: ".box2", delay: 0 },
  { videoPath: "/videos/feature-3.mp4", boxClass: ".box3", delay: 0 },
  { videoPath: "/videos/feature-4.mp4", boxClass: ".box4", delay: 0 },
  { videoPath: "/videos/feature-5.mp4", boxClass: ".box5", delay: 0 },
];

const footerLinks = [
  { label: "Privacy Policy", link: "#" },
  { label: "Terms of Use", link: "#" },
  { label: "Sales Policy", link: "#" },
  { label: "Legal", link: "#" },
  { label: "Site Map", link: "#" },
];

export {
  features,
  featureSequence,
  footerLinks,
  navLinks,
  noChangeParts,
  performanceImages,
  performanceImgPositions,
};