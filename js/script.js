const buttons = document.querySelectorAll(".sections-nav button")
const sections = document.querySelectorAll(".section")

const cards = document.querySelectorAll(".project-card")
const modal = document.getElementById("project-modal")
const closeModal = document.querySelector(".close-modal")

const cardLinks = document.querySelectorAll(".project-links a")

const infoModal = {
  todoApp: {
    img: "img/projeto_todo.png",
    title: "Todo App",
    description: "exemplo descrição",
    demoLink: "https://tavanoma.github.io/todo-app/",
    gitHubLink: "https://github.com/TavanoMa/todo-app"
  },
  notesApp: {
    img: "img/projeto_notes.png",
    title: "Notes",
    description: "exemplo descrição notes",
    demoLink: "https://tavanoma.github.io/notes/",
    gitHubLink: "https://github.com/TavanoMa/notes"
  },
  boxShadowApp: {
    img: "img/projeto_box_shadow.png",
    title: "Gerador de Box Shadow",
    description: "exemplo descrição notes",
    demoLink: "https://tavanoma.github.io/box-shadow-generator/",
    gitHubLink: "https://github.com/TavanoMa/box-shadow-generator"
  }

}


// funçoes

const fillModal = (key) => {

  const info = infoModal[key]

  document.getElementById("modal-image").src = info.img
  document.getElementById("modal-title").textContent = info.title
  document.getElementById("modal-description").textContent = info.description
  document.getElementById("demo-link").href = info.demoLink
  document.getElementById("github-link").href = info.gitHubLink
  
}

//eventos


buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.getAttribute("data-section")

    
    buttons.forEach((btn) => btn.classList.remove("active"))

    sections.forEach((section) => section.classList.remove("active"))

    button.classList.add("active")

    document.getElementById(target).classList.add("active")
  });
});

cards.forEach((card) => {
  card.addEventListener("click", (e) => {
    
    const id = card.id

    modal.classList.toggle("active")

    if (id === "todo-project") {
      fillModal("todoApp")
    } if (id === "notes-project") {
      fillModal("notesApp")
    } if (id === "box-shadow-project") {
      fillModal("boxShadowApp")
    } 
  })
})

closeModal.addEventListener("click", () => {
    modal.classList.toggle("active")
})

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.toggle("active")
  }
})

cardLinks.forEach((link) => {
  link.addEventListener("click", () => {
    modal.classList.toggle("active")
  })
})


