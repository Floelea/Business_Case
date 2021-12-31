// function afficheMonFormulaire(){
//     let clickAfficheFormulaire = document.querySelector(".pagedeconnexion")
//     clickAfficheFormulaire.classList.toggle("hide")

// }

// document.querySelector(".seconnecter").addEventListener("click",afficheMonFormulaire)

const onglets = document.querySelectorAll(".onglets");
const contenu = document.querySelectorAll(".contenu");
let index = 0;

onglets.forEach((onglet) => {
  onglet.addEventListener("click", () => {
    if (onglet.classList.contains("active")) {
      return;
    } else {
      onglet.classList.add("active");
    }
    index = onglet.getAttribute("data-anim");

    for (let i = 0; i < onglets.length; i++) {
      if (onglets[i].getAttribute("data-anim") != index) {
        onglets[i].classList.remove("active");
      }
    }

    for (let j = 0; j < contenu.length; j++) {
      if (contenu[j].getAttribute("data-anim") == index) {
        contenu[j].classList.add("activeContenu");
      } else {
        contenu[j].classList.remove("activeContenu");
      }
    }
  });
});
