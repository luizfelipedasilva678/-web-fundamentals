(function() {
    let frase, frase2, txt, txt2, txt3, data;
    
    
    window.addEventListener('click', function(e) {
        if(e.target.id === "btn-questao1") {
            frase = document.querySelector('#input-questao1').value;
            document.querySelector('#questao1-resp').innerHTML = "Sua frase invertida é : " + inverteFrase(frase);
        }

        if(e.target.id === "btn-questao2") {
            frase2 = document.querySelector('#input-questao2').value;
            document.querySelector('#questao2-resp').innerHTML = "Frase com as vogais pintadas: " + pintaVogais(frase2);
        }
        
        if(e.target.id === "btn-questao3") {
            txt = document.querySelector('#questao3').value;
            montaTable(txt); 
        }

        if(e.target.id === "btn-questao4") {
            txt2 = document.querySelector('#questao4').value;
            let maior = maiorOcorrencia(txt2);
            document.querySelector('#questao4-resp').innerHTML = `Palavra de maior ocorrência foi ${maior.name} apareceu ${maior.vezes} vezes`; 
        }

        if(e.target.id === "btn-questao5") {    
            let find, change;
            txt3 = document.querySelector('#questao5').value;
            find = document.querySelector('#questao5-find').value;
            change = document.querySelector('#questao5-change').value;
            document.querySelector('#questao5-resp').innerHTML = "Texto com as palavras substituidas <br><br>" + procuraESubstitue(txt3, find, change);
        }

        if(e.target.id === 'btn-questao6') {
            data = document.querySelector('#questao6').value;
            document.querySelector('#questao6-resp').innerHTML = "Você viveu " + calculaTempoDeVida(data); ;
        }
    })
})();


function inverteFrase(frase) {
    return frase.split('').reverse().join('');
}

function pintaVogais(frase) {
    let array = frase.split('');

    for(let i = 0; i < array.length; i++) {
        if(array[i] === 'a' || array[i] === 'e' || array[i] === 'i' || array[i] === 'o' || array[i] === 'u') {
            array[i] = '<b>' + array[i] + '</b>';
        }
    }

    return array.join('');
}

function montaTable(texto) {
    let array = texto.split(' ');
    let table = document.createElement('table');
    let td, td2, tr;
    
    for(let i = 0; i < array.length; i++) {
        td = document.createElement('td');
        td2 = document.createElement('td');
        tr = document.createElement('tr');
        td.innerHTML = array[i];
        td2.innerHTML = ocorrencia(texto, array[i]);
        tr.appendChild(td);
        tr.appendChild(td2);
        table.appendChild(tr);
    }

    document.querySelector('#questao3-resp').innerHTML = '';
    document.querySelector('#questao3-resp').appendChild(table);
}

function ocorrencia(texto, palavra) {
    let array = texto.split(' ');
    let count = 0;

    for(let i = 0; i < array.length; i++) {
        if(palavra === array[i]) {
            count++;
        }
    }

    return count;
}

function maiorOcorrencia(texto) {
    let array = texto.split(' ');
    let ocorrencias = [];
    let maior = {
        name: 0,
        vezes: 0
    };
    
    for(let i = 0; i < array.length; i++) {
       ocorrencias[i] = ocorrencia(texto, array[i]); 
    }

    for(let i = 0; i < ocorrencias.length; i++) {
        if(ocorrencias[i] > maior.vezes) {
            maior.name = array[i];
            maior.vezes = ocorrencias[i];
        }
    }

    return maior;
}

function procuraESubstitue(text, find, change) {
    return text.replaceAll(find, change);
}

function calculaTempoDeVida(data) {
    let dataArray = data.split('/');
    let years = (new Date().getFullYear() - dataArray[2]) * 365;

    return years;
}





