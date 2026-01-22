const buttons = document.querySelectorAll(".sections-nav button")
const sections = document.querySelectorAll(".section")

const cards = document.querySelectorAll(".project-card")
const modal = document.getElementById("project-modal")
const closeModal = document.querySelector(".close-modal")

const modalDescriptions = document.querySelectorAll(".modal-description")

const trail = document.querySelector(".trail")
const body = document.querySelector("body")


const infoModal = {
  imageGenerator: {
    img: "img/projeto_gerador_de_imagens.png",
    title: "Gerador de Imagens",
    descriptionId: "description-image-generator",
    demoLink: "https://image-generator-one-mu.vercel.app/",
    gitHubLink: "https://github.com/TavanoMa/image-generator"
  },
  todoApp: {
    img: "img/projeto_todo.png",
    title: "Todo App",
    descriptionId: "description-todo",
    demoLink: "https://todo-list-gold-mu.vercel.app/",
    gitHubLink: "https://github.com/TavanoMa/todo-list"
  },
  notesApp: {
    img: "img/projeto_notes.png",
    title: "Notes",
    descriptionId: "description-notes",
    demoLink: "https://tavanoma.github.io/notes/",
    gitHubLink: "https://github.com/TavanoMa/notes"
  },
  boxShadowApp: {
    img: "img/projeto_box_shadow.png",
    title: "Gerador de Box Shadow",
    descriptionId: "description-box-shadow",
    demoLink: "https://tavanoma.github.io/box-shadow-generator/",
    gitHubLink: "https://github.com/TavanoMa/box-shadow-generator"
  }

}


// funçoes

const fillModal = (key) => {

  const info = infoModal[key]

  document.getElementById("modal-image").src = info.img
  document.getElementById("modal-title").textContent = info.title
  document.getElementById("demo-link").href = info.demoLink
  document.getElementById("github-link").href = info.gitHubLink

   modalDescriptions.forEach(desc => {
    desc.classList.remove("active")
  })

  document.getElementById(info.descriptionId).classList.add("active")
  
}

const closingModal = () => {
  modal.classList.remove("active")
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

    modal.classList.add("active")

    if (id === "todo-project") {
      fillModal("todoApp")
    } if (id === "notes-project") {
      fillModal("notesApp")
    } if (id === "box-shadow-project") {
      fillModal("boxShadowApp")
    } if (id === "img-generator-project") {
      fillModal("imageGenerator")
    } 
  })
})



closeModal.addEventListener("click", () => {
    closingModal()
})

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closingModal()
  }
})

trail.addEventListener("click", () => {
  body.classList.toggle("light")
  trail.classList.toggle("light")
})



