function carregaHtml(caminho,id){
    fetch(caminho)//Fech é a função que carrega um arquivo
        .then((response) => response.text()) //Converte o arquivo 
        .then((html)=>{
            document.getElementById(id).innerHTML = html;
        });
}