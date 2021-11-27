function afficheMonFormulaire(){
    let clickAfficheFormulaire = document.querySelector(".pagedeconnexion")
    clickAfficheFormulaire.classList.toggle("hide")
    
}

document.querySelector(".seconnecter").addEventListener("click",afficheMonFormulaire)