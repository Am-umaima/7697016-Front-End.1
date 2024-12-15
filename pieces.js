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

const btntrierprix =document.querySelector(".btn-trierCr");
btntrierprix.addEventListener("click",function () {
    const piecesOrdonnees1 = Array.from(pieces);
    piecesOrdonnees1.sort(function (elmentOne,elementTwo) {
       return elmentOne.prix-elementTwo.prix;
    })
    displayPieces(piecesOrdonnees1);
});

const btntrierprix2 =document.querySelector(".btn-trierDecr");
btntrierprix2.addEventListener("click",function () {
    const piecesOrdonnees2 = Array.from(pieces);
    piecesOrdonnees2.sort(function (elmentOne,elementTwo) {
       return elementTwo.prix-elmentOne.prix;
    })
    displayPieces(piecesOrdonnees2);
})

const btnfilter=document.querySelector(".btn-filtrer");
btnfilter.addEventListener("click",function () {
    const filterpieces=pieces.filter(function (pieces) {
            return pieces.prix<35;
        }
    ); displayPieces(filterpieces);
});

const IstherCategorie = document.querySelector(".filtrer-discription");
IstherCategorie.addEventListener("click",function (){
    const filtersCategroiepieces =pieces.filter(function (pieces) {
        return pieces.categorie !== undefined && pieces.categorie !== null;
    });displayPieces(filtersCategroiepieces);
})
