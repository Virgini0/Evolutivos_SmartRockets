function Population() {
    // Matriz de foguetes
    this.rockets = [];
    // Quantidade de foguetes
    this.popsize = 35;
    // Quantidade de parceiros do foguete pai
    this.matingpool = [];

    // Associa um foguete a um índice da matriz
    for (var i = 0; i < this.popsize; i++) {
        this.rockets[i] = new Rocket();
    }

    this.evaluate = function() {
        var maxfit = 0;
        
        // Faz as iterações com todos os foguetes e calcula sua aptidão
        for (var i = 0; i < this.popsize; i++) {
            // Calcula a aptidão
            this.rockets[i].calcFitness();
            // Se a aptidão atual for maior do que o máximo, então torna o máximo igual ao valor atual
            if (this.rockets[i].fitness > maxfit) {
                maxfit = this.rockets[i].fitness;
                max_i = i;
            }
        }
        // Normaliza o fitness
        for (var i = 0; i < this.popsize; i++) {
            this.rockets[i].fitness /= maxfit;
        }

        this.matingpool = [];
        // Pega o fitness dos foguetes em uma escala de 1 a 100
        // Um foguete com alta aptidão muito provavelmente estará na piscina/conjunto de acasalamento
        for (var i = 0; i < this.popsize; i++) {
            var n = this.rockets[i].fitness * 100;
            if (n < 2000) n /= 2;
            for (var j = 0; j < n; j++) {
                this.matingpool.push(this.rockets[i]);
            }
        }
    };
    // Seleciona os genes apropriados para a criança
    this.selection = function() {
        var newRockets = [];
        for (var i = 0; i < this.rockets.length; i++) {
            // Escolhe um DNA aleatório
            var parentA = random(this.matingpool).dna;
            var parentB = random(this.matingpool).dna;
            // Cria um filho usando a função crossover
            var child = parentA.crossover(parentB);
            child.mutation();
            // Cria um novo foguete com o DNA do filho
            newRockets[i] = new Rocket(child);
        }
        newRockets[0] = this.rockets[max_i];
        
        // Essa instância de foguetes contem os novos foguetes
        this.rockets = newRockets;
    };

    // Solicita funções de atualização e exibição
    this.run = function() {
        for (var i = 0; i < this.popsize; i++) {
            this.rockets[i].update();
            // Exibe os foguetes na tela
            this.rockets[i].show();
        }
    };

    // Reseta as posicoes dos foguetes
    this.resetRockets = function() {
        for (var i = 0; i < this.popsize; i++) {
            this.rockets[i].reset();
        }
    };
}