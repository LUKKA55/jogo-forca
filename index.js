const div = document.getElementById('texto');
const adivinhaLetra = document.getElementById('adivinhaLetra');
const letrasEscolhidas = document.getElementById('letrasEscolhidas');
const master = document.getElementById('master');
const tema = document.getElementById('tema');
const score = document.getElementById('e7');
const boneco = document.querySelectorAll('.boneco');
const body = document.body;
let letrasDigitadas = [];
let erro = 0;
let numLetra = 0;
let scoreboard = 0;
const bancoDeDados = [
	{ palavra: 'gato', tema: 'animal' },
	{ palavra: 'cachorro', tema: 'animal' },
	{ palavra: 'elefante', tema: 'animal' },
	{ palavra: 'leao', tema: 'animal' },
	{ palavra: 'tigre', tema: 'animal' },
	{ palavra: 'girafa', tema: 'animal' },
	{ palavra: 'leopardo', tema: 'animal' },
	{ palavra: 'panda', tema: 'animal' },
	{ palavra: 'zebra', tema: 'animal' },
	{ palavra: 'macaco', tema: 'animal' },
	{ palavra: 'peixe', tema: 'animal' },
	{ palavra: 'passaro', tema: 'animal' },
	{ palavra: 'borboleta', tema: 'animal' },
	{ palavra: 'cobra', tema: 'animal' },
	{ palavra: 'rato', tema: 'animal' },
	{ palavra: 'cavalo', tema: 'animal' },
	{ palavra: 'vaca', tema: 'animal' },
	{ palavra: 'porco', tema: 'animal' },
	{ palavra: 'pato', tema: 'animal' },
	{ palavra: 'ovelha', tema: 'animal' },
	{ palavra: 'banana', tema: 'comida' },
	{ palavra: 'maça', tema: 'comida' },
	{ palavra: 'abacaxi', tema: 'comida' },
	{ palavra: 'morango', tema: 'comida' },
	{ palavra: 'laranja', tema: 'comida' },
	{ palavra: 'uva', tema: 'comida' },
	{ palavra: 'cenoura', tema: 'comida' },
	{ palavra: 'batata', tema: 'comida' },
	{ palavra: 'tomate', tema: 'comida' },
	{ palavra: 'espinafre', tema: 'comida' },
	{ palavra: 'arroz', tema: 'comida' },
	{ palavra: 'feijao', tema: 'comida' },
	{ palavra: 'carne', tema: 'comida' },
	{ palavra: 'peixe', tema: 'comida' },
	{ palavra: 'pao', tema: 'comida' },
	{ palavra: 'queijo', tema: 'comida' },
	{ palavra: 'leite', tema: 'comida' },
	{ palavra: 'ovos', tema: 'comida' },
	{ palavra: 'iogurte', tema: 'comida' },
	{ palavra: 'chocolate', tema: 'comida' },
	{ palavra: 'futebol', tema: 'esporte' },
	{ palavra: 'basquete', tema: 'esporte' },
	{ palavra: 'tenis', tema: 'esporte' },
	{ palavra: 'nataçao', tema: 'esporte' },
	{ palavra: 'volei', tema: 'esporte' },
	{ palavra: 'handebol', tema: 'esporte' },
	{ palavra: 'atletismo', tema: 'esporte' },
	{ palavra: 'ginastica', tema: 'esporte' },
	{ palavra: 'boxe', tema: 'esporte' },
	{ palavra: 'judo', tema: 'esporte' },
	{ palavra: 'futebol americano', tema: 'esporte' },
	{ palavra: 'beisebol', tema: 'esporte' },
	{ palavra: 'rugby', tema: 'esporte' },
	{ palavra: 'golfe', tema: 'esporte' },
	{ palavra: 'xadrez', tema: 'esporte' },
	{ palavra: 'volei de praia', tema: 'esporte' },
	{ palavra: 'tiro com arco', tema: 'esporte' },
	{ palavra: 'corrida', tema: 'esporte' },
	{ palavra: 'professor', tema: 'emprego' },
	{ palavra: 'medico', tema: 'emprego' },
	{ palavra: 'engenheiro', tema: 'emprego' },
	{ palavra: 'advogado', tema: 'emprego' },
	{ palavra: 'enfermeiro', tema: 'emprego' },
	{ palavra: 'policial', tema: 'emprego' },
	{ palavra: 'bombeiro', tema: 'emprego' },
	{ palavra: 'piloto', tema: 'emprego' },
	{ palavra: 'dentista', tema: 'emprego' },
	{ palavra: 'cozinheiro', tema: 'emprego' },
	{ palavra: 'atriz', tema: 'emprego' },
	{ palavra: 'musico', tema: 'emprego' },
	{ palavra: 'artista', tema: 'emprego' },
	{ palavra: 'jornalista', tema: 'emprego' },
	{ palavra: 'estudante', tema: 'emprego' },
	{ palavra: 'eletricista', tema: 'emprego' },
	{ palavra: 'motorista', tema: 'emprego' },
	{ palavra: 'vendedor', tema: 'emprego' },
	{ palavra: 'professora', tema: 'emprego' },
	{ palavra: 'escritor', tema: 'emprego' },
	{ palavra: 'maria', tema: 'nome' },
	{ palavra: 'joao', tema: 'nome' },
	{ palavra: 'ana', tema: 'nome' },
	{ palavra: 'pedro', tema: 'nome' },
	{ palavra: 'miguel', tema: 'nome' },
	{ palavra: 'sophia', tema: 'nome' },
	{ palavra: 'lucas', tema: 'nome' },
	{ palavra: 'isabella', tema: 'nome' },
	{ palavra: 'gabriel', tema: 'nome' },
	{ palavra: 'julia', tema: 'nome' },
	{ palavra: 'davi', tema: 'nome' },
	{ palavra: 'larissa', tema: 'nome' },
	{ palavra: 'matheus', tema: 'nome' },
	{ palavra: 'melissa', tema: 'nome' },
	{ palavra: 'enzo', tema: 'nome' },
	{ palavra: 'manuela', tema: 'nome' },
	{ palavra: 'rafael', tema: 'nome' },
	{ palavra: 'eloa', tema: 'nome' },
	{ palavra: 'gustavo', tema: 'nome' },
	{ palavra: 'vitoria', tema: 'nome' },
	{ palavra: 'cadeira', tema: 'objeto' },
	{ palavra: 'mesa', tema: 'objeto' },
	{ palavra: 'sofa', tema: 'objeto' },
	{ palavra: 'televisao', tema: 'objeto' },
	{ palavra: 'geladeira', tema: 'objeto' },
	{ palavra: 'carro', tema: 'objeto' },
	{ palavra: 'bicicleta', tema: 'objeto' },
	{ palavra: 'livro', tema: 'objeto' },
	{ palavra: 'celular', tema: 'objeto' },
	{ palavra: 'computador', tema: 'objeto' },
	{ palavra: 'aculos', tema: 'objeto' },
	{ palavra: 'relogio', tema: 'objeto' },
	{ palavra: 'cama', tema: 'objeto' },
	{ palavra: 'lampada', tema: 'objeto' },
	{ palavra: 'chave', tema: 'objeto' },
	{ palavra: 'mochila', tema: 'objeto' },
	{ palavra: 'guarda chuva', tema: 'objeto' },
	{ palavra: 'escova', tema: 'objeto' },
	{ palavra: 'tesoura', tema: 'objeto' },
	{ palavra: 'martelo', tema: 'objeto' },
];

document.addEventListener('DOMContentLoaded', function () {
	let letras = newGame();
	adivinhaLetra.addEventListener('keypress', function (event) {
		if (event.keyCode === 13 || event.which === 13) {
			if (
				adivinhaLetra.value.length > 1 ||
				adivinhaLetra.value === '' ||
				adivinhaLetra.value === ' ' ||
				incluiLetra(adivinhaLetra.value.toUpperCase()) === 0
			) {
				adivinhaLetra.value = '';
				return;
			}
			let encontrouLetra = false;
			letras.forEach((letra, index) => {
				if (adivinhaLetra.value.toUpperCase() === letra) {
					const apareceLetra = document.getElementById(`${[index]}`);
					apareceLetra.style.color = 'black';
					adivinhaLetra.style.backgroundColor = 'rgba(144, 238, 144, 0.5)';
					encontrouLetra = true;
					numLetra += 1;
				}
			});

			if (numLetra === letras.length) {
				scoreboard += 1;
				score.innerHTML = `
				score: ${scoreboard}
				`;
				letras = newGame();
			}

			if (!encontrouLetra) {
				erro += 1;
				if (erro > 6) {
					return (master.innerHTML = `
					<div style="display:flex; align-items:center; flex-direction:column; align-itens:center; gap:15px;">
						<h1 style = "text-decoration: underline;">GAME OVER</h1>
						<h2> Palavra: ${letras.join('')}</h2>
						<h2> Scoreboard: ${scoreboard}</h2>	
					</div>
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

function newGame() {
	const indice_aleatorio = Math.floor(Math.random() * bancoDeDados.length);
	const letrasSeparadas = separaLetra(bancoDeDados[indice_aleatorio].palavra);
	div.innerHTML = '';
	letrasDigitadas = [];
	letrasEscolhidas.innerHTML = '';
	erro = 0;
	boneco.forEach((element) => {
		element.style.zIndex = '-1000';
	});
	numLetra = 0;
	for (let i = 0; i < letrasSeparadas.length; i++) {
		div.innerHTML += `
    <div style="display:flex; flex-direction:column; line-height: 0; letter-spacing:1px;">
    	<p id="${i}" style="color:rgb(219, 142, 61)">${letrasSeparadas[i]}</p>
    	<p id="p${i}">_</p>
    </div>
    `;

		if (letrasSeparadas[i] === ' ') {
			document.getElementById(`p${i}`).style.color = 'rgb(219, 142, 61)';
			numLetra += 1;
		}
	}

	tema.innerHTML = `
	${bancoDeDados[indice_aleatorio].tema}
	`;
	return letrasSeparadas;
}
