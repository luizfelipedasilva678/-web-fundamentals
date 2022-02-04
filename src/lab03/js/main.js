   
(function() {

    function main() {
        const main = document.querySelector('main');
        
        $.ajax(
            {
                url: "data/filmes.json", 
                success: function(result) {
                    const cards = makeMovieCards(result.data);
                    main.innerHTML = cards.join('');
                }
            }   
        );
    }


    function makeMovieCards(data) {
        if(data !== undefined) {
            const cards = data.map((movieValues) => {
                const generos = getGeneros(movieValues.generos);
                
                return `
                    <div class="card">
                        <div class="card-classificacao" style="${classificacaoColor(movieValues.classificacao)}">
                            <p>${movieValues.classificacao > 0 ? movieValues.classificacao : 'Livre' }</p>
                        </div>
                        <div class="card-header">
                            <h2 class="card-title">${movieValues.titulo}</h2>
                            <img src=${movieValues.figura} alt="Imagem do filmes" class="card-img"/>
                            <p class="card-resumo">${movieValues.resumo}</p>
                        </div>
                        <div class="card-infos">
                            <div class="generos">
                                <p> Gêneros </p>
                                <ul class="card-generos">
                                    ${ generos }
                                </ul>
                            </div>
                            <div class="titulos-semelhantes">
                                ${ movieValues.titulosSemelhantes.length > 0 ? '<p>Títulos semelhantes: </p>' : '' }
                                <ul class="card-titulos-semelhantes">
                                    ${ titulosSemelhantes(movieValues.titulosSemelhantes, data) }
                                </ul>
                            </div>
                            <div class="card-elenco">
                                <p> Elenco </p>
                                <ul class="card-elenco">
                                    ${ movieValues.elenco.map((atores) => {return `<li> ${ atores } </li>`} ).join('') }
                                </ul>
                            </div>
                        </div>
                        <div class="card-avaliacoes">
                            <p> Opiniões: </p>
                            ${ movieValues.opinioes.map((opiniao) => {
                                return `
                                    <div class="card-avalicao">
                                        <div class="card-rating">
                                            ${generateRating(opiniao.rating)}
                                        </div>
                                        <div class="card-descricao">
                                            <p>${opiniao.descricao}</p>
                                        </div>
                                    </div>
                                `
                            }).join('')}
                        </div>
                    </div>
                `;
            })

            return cards;
        }
    }   
    
    function getGeneros(generos) {
        const lis = generos.map((genero) => {
            return `<li> ${genero} </li>`;
        }).join(''); 

        return lis;
    }   

    function generateRating(rating) {
        const stars = [];

        for(let i = 0; i < rating; i++) {
            stars.push("<i class='bi bi-star-fill' ></i>");
        }

        return stars.join('');
    }

    function titulosSemelhantes(titulosSemelhantes, movieValues) {
        const titulos = [];

        titulosSemelhantes.forEach((id) => {
            movieValues.forEach((movie) => {
                if(id === movie.id) {
                    titulos.push(`<li> <img src=${movie.figura} alt="Titulos semelhante" /></li>`)
                }
            })
        })

        return titulos.join('');
    }

    function classificacaoColor(classificacao) {
        if(classificacao <= 14) {
            return `background-color: #00BB46`;
        } else if(classificacao < 18 ) {
            return `background-color: #FBEF19`;
        } else {
            return `background-color: #FF0B01`
        }
    }

    main();
})();
