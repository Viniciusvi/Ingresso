function comprar() {
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidade = parseInt(document.getElementById('qtd').value);

    if (tipoIngresso == 'pista') {
        comprarPista(quantidade);
    } else if(tipoIngresso == 'superior') {
        comprarSuperior(quantidade);
    } else {
        comprarInferior(quantidade);
    }
    
    quantidade = parseInt(document.getElementById('qtd').value = '');
}

function comprarPista(quantidade) {
   let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);  
   if (quantidade > qtdPista) {
    alert('Ingressos são insuficientes!');
   } else {
    qtdPista = qtdPista - quantidade;
    document.getElementById('qtd-pista').textContent = qtdPista;
    alert('Sua compra foi realizada com sucesso!');
   }
}

function comprarSuperior(quantidade) {
    let qtdCadeiraSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (quantidade > qtdCadeiraSuperior) {
        alert('Ingressos insuficientes!');
    } else {
        qtdCadeiraSuperior = qtdCadeiraSuperior - quantidade; 
        document.getElementById('qtd-superior').textContent = qtdCadeiraSuperior;
        alert('Sua compra foi realizada com sucesso!');
    }
}

function comprarInferior(quantidade) {
    let qtdCadeiraInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (quantidade > qtdCadeiraInferior) {
        alert('Ingressos insuficientes!');
    } else {
        qtdCadeiraInferior = qtdCadeiraInferior - quantidade;
        document.getElementById('qtd-inferior').textContent = qtdCadeiraInferior;
        alert('Sua compra foi realizada com sucesso');
    }
}
