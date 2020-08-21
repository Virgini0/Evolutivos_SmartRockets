// Função do construtor
function Rocket(dna) {
    // Física do foguete na instância atual
    this.pos = createVector(width / 2, height);
    this.vel = createVector();
    this.acc = createVector();
    // Checa se os foguetes atingiram o alvo
    this.completed = false;
    // Checa se o foguete caiu
    this.crashed = false;
    // Fornece um DNA de foguete
    if (dna) {
        this.dna = dna;
    } else {
        this.dna = new DNA();
    }
    this.fitness = 0;

    // O objeto pode receber uma força e aumentar a aceleração
    this.applyForce = function(force) {
        this.acc.add(force);
    };
    // Calcula a aptidão do foguete
    this.calcFitness = function() {
        // Distancia-se do alvo
        var d = dist(this.pos.x, this.pos.y, target.x, target.y);

        // Gama de mapas de fitness
        this.fitness = map(d, 0, width, width, 0);
        // Se o foguete atingir o alvo, então sua aptidão aumenta
        if (this.completed) {
            this.fitness *= 10;
            tgt++;
            display[1] = tgt;
        }
        // Se o foguete não atingir o alvo, então sua aptidão diminui
        if (this.crashed) {
            this.fitness /= 10;
        }
    };
    // Calcula a precisão
    display[2] = (display[1] / 35).toFixed(2);

    // Escrita na tabela pt2 - Exibir o número de alvos e exibir a precisão
    document.getElementById("tgt").innerText = display[1];
    document.getElementById("acc").innerText = display[2];

    // Atualiza o estado do foguete
    this.update = function() {
        // Verifica a distância do foguete ao alvo
        var d = dist(this.pos.x, this.pos.y, target.x, target.y);
        // Se a distância for inferior a 10 pixels, entao o alvo atingiu o alvo
        if (d < 10) {
            this.completed = true;
            this.pos = target.copy();
        }
        // Foguete atingiu a barreira
        if (
            this.pos.x > rx &&
            this.pos.x < rx + rw &&
            this.pos.y > ry &&
            this.pos.y < ry + rh
        ) {
            this.crashed = true;
        }
        // O foguete atingiu o lado esquerdo ou direito da janela
        if (this.pos.x > width || this.pos.x < 0) {
            this.crashed = true;
        }
        // O foguete atingiu a parte superior ou inferior da janela
        if (this.pos.y > height || this.pos.y < 0) {
            this.crashed = true;
        }

        // Aplica os vetores aleatórios definidos no DNA a quadros consecutivos do foguete
        this.applyForce(this.dna.genes[count]);
        // Se o foguete não atingiu a meta e não travou, então atualizar o mecanismo da física
        if (!this.completed && !this.crashed) {
            this.vel.add(this.acc);
            this.pos.add(this.vel);
            this.acc.mult(0);
            this.vel.limit(4);
        }
    };
    // Exibe o foguete na janela
    this.show = function() {
        // Permissão de push e pop para que a rotação e a translação não afete outros objetos
        push();
        // Personalização das cores dos foguetes
        noStroke();
        fill(255, 150);
        // Traduzir para a posição do foguete
        translate(this.pos.x, this.pos.y);
        // Gira para o ângulo ao qual o foguete está apontando
        rotate(this.vel.heading());
        // Cria uma forma retangular para o foguete
        rectMode(CENTER);
        rect(0, 0, 25, 5);
        pop();
    };
}