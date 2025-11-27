lucide.createIcons();

// certificates gallery
const certificates = [
  { src: "assets/certificates/cissp.jpg", title: "CISSP" },
  { src: "assets/certificates/ethical-hacking.jpg", title: "Ethical Hacking" },
  { src: "assets/certificates/ai-intro.jpg", title: "Intro to AI" },
  { src: "assets/certificates/cybercrime.jpg", title: "Intro to Cybercrime" },
];
const grid = document.getElementById("cert-grid");
certificates.forEach(c => {
  const img = document.createElement("img");
  img.src = c.src;
  img.alt = c.title;
  img.className = "rounded-md border-2 border-amber-500 hover:scale-105 transition";
  grid.appendChild(img);
});
