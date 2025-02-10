

document.addEventListener("DOMContentLoaded", function () {
  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];

  const listaDominios = document.getElementById("dominios");

  for (let p of pronoun) {
    for (let a of adj) {
      for (let n of noun) {
        let dominio = `${p}${a}${n}.com`;
        let listItem = document.createElement("li");
        listItem.textContent = dominio;
        listItem.classList.add("list-group-item");
        listaDominios.appendChild(listItem);
      }
    }
  }
});
