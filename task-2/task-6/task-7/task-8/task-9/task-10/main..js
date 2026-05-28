const buttons = document.querySelectorAll(".filter-btn");
const items = document.querySelectorAll(".gallery-item");

buttons.forEach(button => {

  button.addEventListener("click", () => {

    buttons.forEach(btn => btn.classList.remove("active"));

    button.classList.add("active");

    const filter = button.getAttribute("data-filter");

    items.forEach(item => {

      const category = item.getAttribute("data-category");

      if (filter === "all" || category === filter) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }

    });

  });

});