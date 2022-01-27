var mensagem = document.querySelector('.texto1');
var botaoCriptografa = document.querySelector('.criptografa');
var texto;

var resultado = document.querySelector('.texto2');
var botaoDescriptografa = document.querySelector('.descriptografa');

var botaoCopia = document.querySelector('.copia');

mensagem.addEventListener("keypress", function(e){
	if (!checkChar(e)) {
		e.preventDefault();
		alert('Caractere inválido');
	}
})

function checkChar(e){
	var char = String.fromCharCode(e.keyCode);

	var pattern = '[a-z]';
	if (char.match(pattern)) {
		return true;
	}
}

function criptografaTexto(){
	texto = mensagem.value;
	var novoTexto = texto.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');
	resultado.value = novoTexto;
	mensagem.value = "";
}

function descriptografaTexto(){
	texto = mensagem.value;
	var novoTexto = texto.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');
	resultado.value = novoTexto;
	mensagem.value = "";

}

function copiaTexto(){
	var textoCopiado = document.querySelector('.texto2');
	textoCopiado.select();
	document.execCommand("copy");
}

botaoCriptografa.onclick = criptografaTexto;
botaoDescriptografa.onclick = descriptografaTexto;
botaoCopia.onclick = copiaTexto;