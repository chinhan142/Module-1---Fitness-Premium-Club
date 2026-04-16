function includeHTML() {
  const elements = document.querySelectorAll("[data-include]");

  elements.forEach((el) => {
    const file = el.getAttribute("data-include");

    fetch(file)
      .then((response) => {
        if (response.ok) return response.text();
        throw new Error("Can't find: " + file);
      })
      .then((data) => {
        el.innerHTML = data;
      })
      .catch((err) => console.error(err));
  });
}

document.addEventListener("DOMContentLoaded", includeHTML);
