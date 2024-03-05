const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});

//accordion for about
const about = document.querySelectorAll(".about");

about.forEach((about) => {
  about.addEventListener("click", () => {
    about.classList.toggle("active");
  });
});
