var population;
// Cada foguete está ativo até os 330 frames
var lifespan = 330;
// Feito para exibir a contagem na tela
var lifeP;
// Mantém o controle de frames
var count = 0;
// Para onde os foguetes estão tentando ir
var target;
// Força máxima aplicada ao foguete
var maxforce = 0.6;
// indice do melhor foguete
var max_i = 0;

var taxa_mutacao = 0.01;

var tgt = 0;
/* O display é uma matriz com 5 posições, sendo:
pos 0 = geração
pos 1 = alvos (geração)
pos 2 = precisão (geração)
pos 3 = melhor geração
pos 4 = melhor alvo (melhor geração)
pos 5 = melhor precisão (melhor geração)
*/
var display = [0, 0, 0.00, 0, 0, 0.00]

// Dimensões da barreira
var rx = 400;
var ry = 300;
var rw = 200;
var rh = 10;

function setup() {
    createCanvas(1000, 500);
    population = new Population();
    lifeP = createP();
    target = createVector(floor(random(width)), floor(random(height)));
}

function draw() {
    background(51, 0, 0);
    let colorBarrier = color(153, 51, 0);
    let colorTarget = color(204, 153, 0);
    if (count == 0) {
        population.resetRockets();
        // Muda a posicao do alvo quando atinge acuracia maior que 80%
        if (display[5] >= 80) {
            target = createVector(floor(random(width)), floor(random(height)));
            display[4] = 0;
            display[5] = 0.00;
            taxa_mutacao = 0.01;
        }
    }
    population.run();

    // Exibe a contagem até a janela, diminuindo
    document.getElementById("lt").innerText = 330 - count;

    // Escreve na tabela pt1
    document.getElementById("gen").innerText = display[0];
    document.getElementById("best_gen").innerText = display[3];
    document.getElementById("btgt").innerText = display[4];
    document.getElementById("bacc").innerText = display[5];

    count++;
    if (count == lifespan) {
        population.evaluate();
        population.selection();
        if (display[1] > display[4]) {
            display[4] = display[1];
            display[3] = display[0];
            display[5] = display[2];
        }
        count = 0;
        display[1] = 0;
        tgt = 0;
        // Atraso na adição de geração a fim de mostrar o resultado da geração
        setTimeout(() => { display[0]++; }, 1000);

    }
    // Renderiza a barreira de foguetes
    fill(colorBarrier);
    rect(rx, ry, rw, rh);
    // Renderiza o alvo
    fill(colorTarget);
    ellipse(target.x, target.y, 16, 16);
}