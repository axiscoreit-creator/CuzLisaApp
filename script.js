const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

navToggle?.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

siteNav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    siteNav.classList.remove("is-open");
    navToggle?.setAttribute("aria-expanded", "false");
  }
});

const friendSurvey = document.querySelector("#friendSurvey");
const surveyStatus = document.querySelector("#surveyStatus");

friendSurvey?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(friendSurvey);
  const name = data.get("name") || "Your";
  surveyStatus.textContent = `${name} intake is ready to connect to Google Forms, Airtable, Notion, or a custom database.`;
});

const contactForm = document.querySelector("#contactForm");
const contactStatus = document.querySelector("#contactStatus");

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(contactForm);
  const email = data.get("contactEmail") || "your email";
  contactStatus.textContent = `Message prepared from ${email}. Replace this with Formspree, Squarespace forms, or a backend endpoint when you launch.`;
});
