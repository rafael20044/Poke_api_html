function buscar() {
    const nombreOid = document.getElementById("input").value;
    const nombrePoke = document.getElementById("nombrePokemon");
    const tipoPoke = document.getElementById("tipoPokemon");
    const spritePoke = document.getElementById("sprite");
    const generacionPoke = document.getElementById("generacionPokemon");
    const nPoke = document.getElementById("nPokemon");
    let url = "https://pokeapi.co/api/v2/pokemon/" + nombreOid;
    if (nombreOid != "") {
        fetch(url.toLowerCase())
            .then(respuesta => {
                if (!respuesta.ok) {
                    alert("Error")
                } else {
                    return respuesta.json();
                }
            })
            .then(datos => {
                console.log(datos)
                nombrePoke.textContent = "Nombre: " + datos["name"];
                let idPoke = parseInt(datos["id"]);
                if (idPoke >= 1 && idPoke <= 151) {
                    generacionPoke.textContent = "Generación: Pirmera generación";
                } else if (idPoke >= 152 && idPoke <= 251) {
                    generacionPoke.textContent = "Generación: Segunda generación";
                } else if (idPoke >= 252 && idPoke <= 386) {
                    generacionPoke.textContent = "Generación: Tercera generación";
                } else if (idPoke >= 387 && idPoke <= 493) {
                    generacionPoke.textContent = "Generación: Cuearte generación";
                } else if (idPoke >= 494 && idPoke <= 649) {
                    generacionPoke.textContent = "Generación: Quinta generación";
                } else if (idPoke >= 650 && idPoke <= 721) {
                    generacionPoke.textContent = "Generación: Sexte generación";
                } else if (idPoke >= 722 && idPoke <= 809) {
                    generacionPoke.textContent = "Generación: Séptima generación";
                } else if (idPoke >= 810 && idPoke <= 905) {
                    generacionPoke.textContent = "Generación: Octava generación";
                } else {
                    generacionPoke.textContent = "Generación: Novena generación";
                }
                let types = datos["types"];
                let tipoConcatenado = " ";
                types.forEach(element => {
                    const tipo = element.type.name;
                    tipoConcatenado += tipo + ", ";
                });
                tipoPoke.textContent = "Tipo: " + tipoConcatenado;
                let urlImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idPoke}.png`;
                spritePoke.src = urlImg.toLowerCase();
                nPoke.textContent = `N pokédex: ${idPoke}`;
            })
            .catch(error => {
                console.error(error)
            })
            ;
    }else{
        alert("Digite texto")
    }

}