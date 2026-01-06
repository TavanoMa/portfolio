const buttons = document.querySelectorAll(".sections-nav button");
const sections = document.querySelectorAll(".section");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.getAttribute("data-section");

    
    buttons.forEach((btn) => btn.classList.remove("active"));

    sections.forEach((section) => section.classList.remove("active"))

    button.classList.add("active")

    document.getElementById(target).classList.add("active")
  });
});