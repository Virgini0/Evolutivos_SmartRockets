function DNA(genes) {
    // Recebe os genes e cria um objeto de DNA
    if (genes) {
        this.genes = genes;
    }
    // Se não possui genes, então cria um DNA aleatório
    else {
        this.genes = [];
        for (var i = 0; i < lifespan; i++) {
            // Fornece vetores aleatóriosfunction DNA(genes) {
    // Recebe os genes e cria um objeto de DNA
    if (genes) {
        this.genes = genes;
    }
    // Se não possui genes, então cria um DNA aleatório
    else {
        this.genes = [];
        for (var i = 0; i < lifespan; i++) {
            // Fornece vetores aleatórios
            this.genes[i] = p5.Vector.random2D();
            // Define a forma máxima do vetor a ser aplicada a um foguete
            this.genes[i].setMag(maxforce);
        }
    }
    // Realiza um cruzamento com outro membro da espécie
    this.crossover = function(partner) {
        var newgenes = [];
        // Escolhe um ponto aleatório médio
        var mid = floor(random(this.genes.length));
        for (var i = 0; i < this.genes.length; i++) {
            // Se i for maior do que a metade, o novo gene deve vir deste parceiro
            if (i > mid) {
                newgenes[i] = this.genes[i];
            }
            // Se i for menor do que a metade, o novo gene deve vir de outros genes parceiros
            else {
                newgenes[i] = partner.genes[i];
            }
        }
        // Fornece uma matriz ao objeto DNA
        return new DNA(newgenes);
    };

    // Adiciona uma mutação aleatória aos genes para proporcionar uma variância entre eles
    this.mutation = function() {
        for (var i = 0; i < this.genes.length; i++) {
            // Se o número aleatório for menor do que 0.01, então o novo gene é um vetor aleatório
            if (random(1) < taxa_mutacao) {
                this.genes[i] = p5.Vector.random2D();
                this.genes[i].setMag(maxforce);
            }
        }
    };
}

            this.genes[i] = p5.Vector.random2D();
            // Define a forma máxima do vetor a ser aplicada a um foguete
            this.genes[i].setMag(maxforce);
        }
    }
    // Realiza um cruzamento com outro membro da espécie
    this.crossover = function(partner) {
        var newgenes = [];
        // Escolhe um ponto aleatório médio
        var mid = floor(random(this.genes.length));
        for (var i = 0; i < this.genes.length; i++) {
            // Se i for maior do que a metade, o novo gene deve vir deste parceiro
            if (i > mid) {
                newgenes[i] = this.genes[i];
            }
            // Se i for menor do que a metade, o novo gene deve vir de outros genes parceiros
            else {
                newgenes[i] = partner.genes[i];
            }
        }
        // Fornece uma matriz ao objeto DNA
        return new DNA(newgenes);
    };

    // Adiciona uma mutação aleatória aos genes para proporcionar uma variância entre eles
    this.mutation = function() {
        for (var i = 0; i < this.genes.length; i++) {
            // Se o número aleatório for menor do que 0.01, então o novo gene é um vetor aleatório
            if (random(1) < taxa_mutacao) {
                this.genes[i] = p5.Vector.random2D();
                this.genes[i].setMag(maxforce);
            }
        }
    };
}
