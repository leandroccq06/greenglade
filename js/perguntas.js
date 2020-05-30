var facil, medio, dificil;
var perguntasJson = 
[
	{
		"pergunta":"Quantas fontes de energia sustentável existem atualmente?",
        "resposta":"6",
        "descricao":"Atualmente existem 6 tipos de fontes de energia renovável sendo elas, Eólica, Solar, Energia Hidroelétrica, Bioenergia, Energia das marés e Geotérmica.",
		"alternativas":["4","3"]
    },
    {
        "pergunta":"Quais dessas fontes são considerados fontes de energia renovável?",
        "resposta":"Luz do sol, força das águas, força dos ventos, energia Geotérmica e Biomassa",
        "descricao":"Luz do sol, força das águas, força dos ventos, energia Geotérmica e Biomassa, são as fontes renováveis que podem ser usadas como fonte de energia.",
        "alternativas":["Petróleo, Carvão Mineral, Luz do sol, força dos ventos e Biomassa","Carvão Vegetal, Combustivel fossil, Biomassa, energia Geotérmica"]
    },
    {
        "pergunta":"Qual dessas energias são fontes da energia solar?",
        "resposta":"Energia solar Fotovoltaica e a Energia Heliotérmica",
        "descricao":"A Energia Solar é produzida comumente de 2 formas, sendo ela Fotovaltaica que transforma a luz solar em energia e Heliotérmica que transforma o calor da luz solar em energia.",
        "alternativas":["Energia Térmica e Energia Nuclear","Energia Química e Energia Solar Heliotérmica"]
    },
    {
        "pergunta":"Qual é o tipo de energia que utiliza o calor interno da terra como fonte?",
        "resposta":"Energia Geotérmica",
        "descricao":"A energia que utiliza o calor interno da terra é a Energia Geotérmica.",
        "alternativas":["Energia Terrestre","Energia Biotérmica"]
    },
    {
        "pergunta":"Qual a desvantagem de utilizar a energia Hidrelétrica?",
        "resposta":"Erosão do solo",
        "descricao":"Uma das piores desvantagem que se tem ao utilizar a energia Hidroelétrica é a erosão do solo que pode gerar apartir de grandes reservatórios de água, que é um recurso necessário para construir uma usina dessa energia",
        "alternativas":["Nenhuma das alternativas","Consome água"]
    },
    {
        "pergunta":"Quais são as melhores regiões do Brasil para produção de energia eólica?",
        "resposta":"Sul e Nordeste",
        "descricao":"As melhores regiões do Brasil para produção de energia eólica são Sul e Nordeste.",
        "alternativas":["Nordeste e Sudeste","Norte e Nordeste"]
    }
];
perguntasJson = perguntasJson.sort(randOrd);

function randOrd() {
    return (Math.round(Math.random())-0.3);
}

var index = 0;
var pontos = 0;
exibirPerguntasFinal();
function exibirPerguntasFinal(){
    var labelPergunta = document.getElementById("labelPergunta");
    labelPergunta.innerText = perguntasJson[this.index].pergunta;

    var alternativas = document.getElementsByClassName("alternativa");
    var alternativasAfter = perguntasJson[this.index].alternativas.slice();
    alternativasAfter.push(perguntasJson[this.index].resposta);

    var valorAlternativas = alternativasAfter.sort(randOrd);
    for(i=0; i < alternativas.length; i++){
        alternativas[i].value = valorAlternativas[i];
    }
}

function corrigir(valor){
    var divResultado = document.getElementById("divResultado");

    var labelAcertou = document.getElementById("labelAcertou");
    var labelResposta = document.getElementById("labelResposta");

    if(perguntasJson[this.index].resposta === valor){
        this.pontos++;
        labelAcertou.innerText = "Parabéns você acertou!";
    }else{
        labelAcertou.innerText = "Que pena você errou :/";
    }

    labelResposta.innerText = perguntasJson[this.index].descricao;
    divResultado.style.visibility = "visible";
}

function proxima(){
    if(index+1 < perguntasJson.length){
        this.index++;
        exibirPerguntasFinal();
    }else{
        var divResultadoFinal = document.getElementById("divResultadoFinal");
        var labelResultadoFinal = document.getElementById("labelResultadoFinal");

        if(pontos == perguntasJson.length){
            labelResultadoFinal.innerText = "Parabéns você conseguiu acertar todas, sua pontuação foi de "+pontos+" pontos.";
        }else if(pontos >= perguntasJson.length/2){
            labelResultadoFinal.innerText = "Parabéns você conseguiu acertar mais do que a metade, sua pontuação foi de "+pontos+" pontos.";
        }else if(pontos > 1){
            labelResultadoFinal.innerText = "Ainda dá para melhorar, você conseguiu fazer "+pontos+" ponto!!";
        }else{
            labelResultadoFinal.innerText = "Se esforce um pouco mais, você conseguiu fazer "+pontos+" ponto!!";
        }
        divResultadoFinal.style.visibility = "visible";
    }
    
    var divResultado = document.getElementById("divResultado");
    divResultado.style.visibility = "hidden";
}

function reiniciar(){
    this.index = 0;
    this.pontos = 0;

    var divResultadoFinal = document.getElementById("divResultadoFinal");
    var labelResultadoFinal = document.getElementById("labelResultadoFinal");

    divResultadoFinal.style.visibility = "hidden";

    exibirPerguntasFinal();
}