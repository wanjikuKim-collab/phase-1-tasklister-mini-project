document.addEventListener("DOMContentLoaded",()=>{
    displayMenu()
})
//Base url
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"

const displayMenu= async ()=>{    
    const cocktails = await fetchCocktail();
    console.log(cocktails)     
    const cocktailMenu = document.querySelector(".cocktail-menu")       
    cocktails.drinks.map(cocktail=>{  
        //create cocktailMenu innerHTML content 
        const div= document.createElement('div');
        const cardBody = document.createElement('div');
        const img= document.createElement("img");
        const cardFooter = document.createElement("div");

        //innerHTML attributes of created items
        div.classList= "card"
        cardBody.classList="card-body"; 
        cardBody.innerHTML=`
        <h5 class="card-title">${cocktail.strDrink}</h5>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">${cocktail.strIngredient1}</li>
            <li class="list-group-item">${cocktail.strIngredient2}<</li>
            <li class="list-group-item">${cocktail.strIngredient3}</li>
         </ul>
        <p class="card-text">${cocktail.strInstructions}</p>
        `
        img.setAttribute("src",cocktail.strDrinkThumb);
        img.classList= "card-img-top";
        cardFooter.classList= "card-footer"
        cardFooter.innerHTML=`<button> Delete </button>`
        

        cocktailMenu.appendChild(div)
        div.appendChild(img);
        div.appendChild(cardBody)
        div.appendChild(cardFooter)

    })
 
    

}

function fetchCocktail(){
    return fetch(url)
    .then(resp=>resp.json())
    .then(data=>data)
    .catch(function(err) {
            console.log('Fetch Error :-S', err);
            });
}



