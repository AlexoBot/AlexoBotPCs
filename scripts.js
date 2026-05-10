const instagramHandle = "alexobotpc";
const contactEmail = "contacto@alexobot.com";

const header = document.querySelector("[data-site-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const siteNav = document.querySelector("[data-site-nav]");
const yearNodes = document.querySelectorAll("[data-current-year]");
const instagramLinks = document.querySelectorAll("[data-instagram-link]");
const contactForm = document.querySelector("[data-contact-form]");
const formStatus = document.querySelector("[data-form-status]");
const canvaEmbed = document.querySelector("[data-canva-embed]");

yearNodes.forEach((node) => {
  node.textContent = new Date().getFullYear();
});

instagramLinks.forEach((link) => {
  link.href = `https://www.instagram.com/${instagramHandle}`;
  if (link.textContent.trim().startsWith("@")) {
    link.textContent = `@${instagramHandle}`;
  }
});

const setHeaderState = () => {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 8);
};

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      siteNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

const revealNodes = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  revealNodes.forEach((node) => observer.observe(node));
} else {
  revealNodes.forEach((node) => node.classList.add("is-visible"));
}

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(contactForm);
    const name = String(data.get("name") || "").trim();
    const device = String(data.get("device") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name || !device || !message) {
      formStatus.textContent = "Completa los campos para preparar el correo.";
      return;
    }

    const subject = encodeURIComponent(`Cotizacion ${device} - ${name}`);
    const body = encodeURIComponent(
      `Nombre: ${name}\nEquipo: ${device}\n\nDescripcion:\n${message}`
    );

    formStatus.textContent = "Abriendo tu correo...";
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  });
}

if (canvaEmbed) {
  const canvaUrl = canvaEmbed.getAttribute("data-canva-url")?.trim();

  if (canvaUrl) {
    const iframe = document.createElement("iframe");
    iframe.src = canvaUrl;
    iframe.loading = "lazy";
    iframe.allowFullscreen = true;
    iframe.title = "Tarjeta de presentacion AlexoBot PCs";
    canvaEmbed.replaceChildren(iframe);
  }
}
