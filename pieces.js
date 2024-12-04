// Récupération des pièces depuis le fichier JSON
const reponse = await fetch("pieces-autos.json");
const pieces = await reponse.json();

const  YemmasSection= document.querySelector(".fiches")

for (let index = 0; index < pieces.length; index++) {
    const article =pieces[index];

    const Isamines= document.createElement("h2");
    Isamines.innerHTML=article.nom;
    
    const tswatharticle= document.createElement("img");
    tswatharticle.src=article.image;
    
    const taman= document.createElement("p");
    taman.innerHTML=`le prix : ${article.prix} MAD (${article.prix <35 ? "rkhisa" : "ghalya"})`;
 
    const inStock= document.createElement("p");
    inStock.innerHTML=article.disoniblite ? "En stock" : "Rupture de stock";

    const categorie= document.createElement("p");
    categorie.innerHTML=article.categorie ?? "(ila ya aucun categorie)";
    
    
    YemmasSection.appendChild(tswatharticle)
    YemmasSection.appendChild(Isamines)
    YemmasSection.appendChild(taman)
    YemmasSection.appendChild(inStock)
    YemmasSection.appendChild(categorie)  
}




