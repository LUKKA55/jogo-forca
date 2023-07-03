const div = document.getElementById('texto');
const adivinhaLetra = document.getElementById('adivinhaLetra');
const letrasEscolhidas = document.getElementById('letrasEscolhidas');
const master = document.getElementById('master');
const tema = document.getElementById('tema');
const body = document.body;

let letrasDigitadas = [];
const banco_de_dados = [
	{ palavra: 'gato', tema: 'animal' },
	{ palavra: 'cachorro', tema: 'animal' },
	{ palavra: 'elefante', tema: 'animal' },
	{ palavra: 'leão', tema: 'animal' },
	{ palavra: 'tigre', tema: 'animal' },
	{ palavra: 'girafa', tema: 'animal' },
	{ palavra: 'leopardo', tema: 'animal' },
	{ palavra: 'panda', tema: 'animal' },
	{ palavra: 'zebra', tema: 'animal' },
	{ palavra: 'macaco', tema: 'animal' },
	{ palavra: 'peixe', tema: 'animal' },
	{ palavra: 'pássaro', tema: 'animal' },
	{ palavra: 'borboleta', tema: 'animal' },
	{ palavra: 'cobra', tema: 'animal' },
	{ palavra: 'rato', tema: 'animal' },
	{ palavra: 'cavalo', tema: 'animal' },
	{ palavra: 'vaca', tema: 'animal' },
	{ palavra: 'porco', tema: 'animal' },
	{ palavra: 'pato', tema: 'animal' },
	{ palavra: 'ovelha', tema: 'animal' },
	{ palavra: 'banana', tema: 'alimento' },
	{ palavra: 'maçã', tema: 'alimento' },
	{ palavra: 'abacaxi', tema: 'alimento' },
	{ palavra: 'morango', tema: 'alimento' },
	{ palavra: 'laranja', tema: 'alimento' },
	{ palavra: 'uva', tema: 'alimento' },
	{ palavra: 'cenoura', tema: 'alimento' },
	{ palavra: 'batata', tema: 'alimento' },
	{ palavra: 'tomate', tema: 'alimento' },
	{ palavra: 'espinafre', tema: 'alimento' },
	{ palavra: 'arroz', tema: 'alimento' },
	{ palavra: 'feijão', tema: 'alimento' },
	{ palavra: 'carne', tema: 'alimento' },
	{ palavra: 'peixe', tema: 'alimento' },
	{ palavra: 'pão', tema: 'alimento' },
	{ palavra: 'queijo', tema: 'alimento' },
	{ palavra: 'leite', tema: 'alimento' },
	{ palavra: 'ovos', tema: 'alimento' },
	{ palavra: 'iogurte', tema: 'alimento' },
	{ palavra: 'chocolate', tema: 'alimento' },
	{ palavra: 'vermelho', tema: 'cor' },
	{ palavra: 'azul', tema: 'cor' },
	{ palavra: 'verde', tema: 'cor' },
	{ palavra: 'amarelo', tema: 'cor' },
	{ palavra: 'laranja', tema: 'cor' },
	{ palavra: 'roxo', tema: 'cor' },
	{ palavra: 'preto', tema: 'cor' },
	{ palavra: 'branco', tema: 'cor' },
	{ palavra: 'marrom', tema: 'cor' },
	{ palavra: 'cinza', tema: 'cor' },
	{ palavra: 'rosa', tema: 'cor' },
	{ palavra: 'dourado', tema: 'cor' },
	{ palavra: 'prateado', tema: 'cor' },
	{ palavra: 'turquesa', tema: 'cor' },
	{ palavra: 'violeta', tema: 'cor' },
	{ palavra: 'ciano', tema: 'cor' },
	{ palavra: 'vermelho', tema: 'cor' },
	{ palavra: 'amarelo', tema: 'cor' },
	{ palavra: 'azul', tema: 'cor' },
	{ palavra: 'verde', tema: 'cor' },
];
const indice_aleatorio = Math.floor(Math.random() * banco_de_dados.length);
let erro = 0;

document.addEventListener('DOMContentLoaded', function () {
	const letras = separaLetra(banco_de_dados[indice_aleatorio]['palavra']);
	mostraJogo(letras);

	adivinhaLetra.addEventListener('keypress', function (event) {
		if (event.keyCode === 13 || event.which === 13) {
			if (
				adivinhaLetra.value.length > 1 ||
				incluiLetra(adivinhaLetra.value.toUpperCase()) === 0
			) {
				return;
			}

			let encontrouLetra = false;
			letras.forEach((letra, index) => {
				if (adivinhaLetra.value.toUpperCase() === letra) {
					const apareceLetra = document.getElementById(`${[index]}`);
					apareceLetra.style.color = 'black';
					adivinhaLetra.style.backgroundColor = 'rgba(144, 238, 144, 0.5)';
					encontrouLetra = true;
				}
			});
			if (!encontrouLetra) {
				erro += 1;
				if (erro > 6) {
					return (master.innerHTML = `
					<h1 style = "text-decoration: underline;">GAME OVER</h1>
					`);
				}
				document.getElementById(`e${erro}`).style.zIndex = '2000';
				adivinhaLetra.style.backgroundColor = 'rgba(255, 128, 128, 0.5)';
			}
			adivinhaLetra.value = '';
		}
	});
});

function separaLetra(palavra) {
	const letras = palavra.toUpperCase().split('');
	return letras;
}

function mostraJogo(letras) {
	for (let i = 0; i < letras.length; i++) {
		div.innerHTML += `
    <div style="display:flex; flex-direction:column; line-height: 0;">
    <p id="${i}" style="color:rgb(219, 142, 61)">${letras[i]}</p>
    <p id="p${i}">_</p>
    </div>
    `;

		if (letras[i] === ' ') {
			document.getElementById(`p${i}`).style.color = 'rgb(219, 142, 61)';
		}
	}

	tema.innerHTML = `
	${banco_de_dados[indice_aleatorio]['tema']}
	`;
}

function incluiLetra(letra) {
	letrasEscolhidas.innerHTML = '';
	if (!letrasDigitadas.includes(letra)) {
		letrasDigitadas.push(letra);
		mostrarLetrasEscolhidas();
		return 1;
	}
	mostrarLetrasEscolhidas();
	return 0;
}

function mostrarLetrasEscolhidas() {
	letrasDigitadas.forEach((ele) => {
		letrasEscolhidas.innerHTML += `
		<p>${ele}</p>
		`;
	});
}
