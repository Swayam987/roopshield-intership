fetch("https://jsonplaceholder.typicode.com/posts")

  .then((response) => response.json())

  .then((data) => {

    // Hide loading text
    document.getElementById("loading").style.display = "none";

    // Select grid
    const postsGrid = document.getElementById("posts-grid");

    // First 6 posts
    data.slice(0, 6).forEach((post) => {

      // Create card
      const card = document.createElement("div");

      // Add class
      card.classList.add("card");

      // Add content
      card.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
      `;

      // Append card
      postsGrid.appendChild(card);

    });

  })

  .catch((error) => {
    console.log(error);
  });