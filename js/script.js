const buttons = document.querySelectorAll(".sections-nav button")
const sections = document.querySelectorAll(".section")

const cards = document.querySelectorAll(".project-card")
const modal = document.getElementById("project-modal")
const closeModal = document.querySelector(".close-modal")


// funçoes

const fillTodo = () => {
  document.getElementById("modal-image").src = "img/projeto_todo.png"
  document.getElementById("modal-title").textContent = "Todo App"
  document.getElementById("modal-description").textContent = ""
}

const fillNotes = () => {
  document.getElementById("modal-image").src = "img/projeto_notes.png"
  document.getElementById("modal-title").textContent = "Todo App"
  document.getElementById("modal-description").textContent = ""
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
      fillTodo()
    } if (id === "notes-project") {
      fillNotes()
    } else {
      
    }
  })
})

closeModal.addEventListener("click", () => {
    modal.classList.remove("active")
})

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active")
  }
})
