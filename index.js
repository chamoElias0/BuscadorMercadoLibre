function mostrarResultados(results){  
    //  console.log(results);
    const contenedor = document.querySelector(".result")
    const template = document.querySelector("#result-item-template")
    
    for (const r of results) {
        console.log(r);
        const tittleEl = template.content.querySelector(".result-item-tittle");
        tittleEl.textContent = r.title;
        
        const conditionEl = template.content.querySelector(".result-item-condition");
        conditionEl.textContent = "Estado :" + r.condition
        
        
        const priceEl = template.content.querySelector(".result-item-price");
        priceEl.textContent = "$" + r.price


        const cantEl = template.content.querySelector(".result-item-sell-count-numer");
        cantEl.textContent = r.available_quantity;

        const imgEl = template.content.querySelector(".result-item-img");
        imgEl.src = r.thumbnail;

        const clone= document.importNode(template.content , true);
        contenedor.appendChild(clone);
    }


}





function main(){
    const formEl = document.querySelector(".searchForm");
    formEl.addEventListener("submit" , function(e){
        e.preventDefault();
        const palabraABuscar = e.target.buscar.value;
        fetch(`https://api.mercadolibre.com/sites/MLA/search?q=` + palabraABuscar)
            .then((response)=> response.json())
            .then((data) => mostrarResultados(data.results));


    })
}

main();