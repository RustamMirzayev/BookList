window.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector("#title"),
    author = document.querySelector("#author"),
    year = document.querySelector("#year"),
    btn = document.querySelector(".btn"),
    bookList = document.querySelector("#book-list");

  btn.addEventListener("click", (event) => {
    event.preventDefault();

    if (title.value == "" && author.value == "" && year.value == "") {
      alert("Please input your information.");
    } else {
      const newRow = document.createElement("tr");

      const newTitle = document.createElement("th");
      newTitle.textContent = title.value;
      newRow.appendChild(newTitle);

      const newAuthor = document.createElement("th");
      newAuthor.textContent = author.value;
      newRow.appendChild(newAuthor);

      const newYear = document.createElement("th");
      newYear.textContent = year.value;
      newRow.appendChild(newYear);

      bookList.appendChild(newRow);
    }

    title.value = "";
    author.value = "";
    year.value = "";
  });
});
