// Récupération des pièces depuis le fichier JSON
const reponse = await fetch("pieces-autos.json");
const pieces = await reponse.json();
function displayPieces(piecesArray)
{ 
    const  YemmasSection= document.querySelector(".fiches")
    YemmasSection.innerHTML = "";
    for (let index = 0; index < piecesArray.length; index++) {
        const article =piecesArray[index];
        
        
        const ijeDiv= document.createElement("div")
        YemmasSection.appendChild(ijeDiv)

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
        
        
        ijeDiv.appendChild(tswatharticle)
        ijeDiv.appendChild(Isamines)
        ijeDiv.appendChild(taman)
        ijeDiv.appendChild(inStock)
        ijeDiv.appendChild(categorie)  
    }
}
displayPieces(pieces);
const btntrierprix =document.querySelector(".btn-trier");

btntrierprix.addEventListener("click",function tireer() {alert("hey")
    const piecesOrdonnees = Array.from(pieces);
    piecesOrdonnees.sort(function (a,b) {
       return a.prix-b.prix;
    })
    displayPieces(piecesOrdonnees);
    console.log(piecesOrdonnees);
})


