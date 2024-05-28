class Atleta {

    constructor(nome, idade, peso, altura, notas) {

        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;

    }

    calculaCategoria() {

        if (this.idade >= 9 && this.idade <= 11) {

            return "Infatil";

        } else if (this.idade == 12 && this.idade == 13) {

            return "Juvenil";

        } else if (this.idade == 14 && this.idade == 15) {

            return "Intermediário";

        } else if (16 <= this.idade <= 30) {

            return "Adulto";

        } else {

            return "Demais idades";

        }
    }

    calculaIMC() {

        let IMC = 0;

            IMC = (this.peso) / (this.altura * this.altura);

            return IMC;

    }

    calculaMediaValida() {

        let notasTodas = this.notas;
        let notasAtualizadas = notasTodas.sort(function(a, b) {
                
            if (a == b) {
                return 0;
            }

            if (a < b) {
                return -1; 
            }

            if (a > b) {
                return 1;
            
            }});

        let notasOK = notasAtualizadas.slice(1,4);
      
        let somaNotas = notasOK.reduce(function(total, atual) {
                return total + atual;

            },0);

        let media = (somaNotas/notasOK.length);
        
        return media;

    }

    obtemNomeAtleta() {

        return this.nome;

    }

    obtemIdadeAtleta() {

        return this.idade;

    }

    obtemPesoAtleta() {

        return this.peso;

    }

    obtemNotasAtleta() {

        return this.notas;

    }
    obtemCategoria() {

        return atleta.calculaCategoria();

    }

    obtemIMC() {

        return atleta.calculaIMC();

    }

    obtemMediaValida() {

        return atleta.calculaMediaValida();
    }

}

const atleta = new Atleta("Cesar Abascal", 

    30, 80, 1.70,

    [10, 9.34, 8.42, 10, 7.88]);

console.log("Nome: ", atleta.obtemNomeAtleta());
console.log("Idade: ", atleta.obtemIdadeAtleta());
console.log("Peso: ", atleta.obtemPesoAtleta());
console.log("Altura: ", atleta.altura);
console.log("Altura: ", atleta.notas);
console.log("Categoria: ", atleta.calculaCategoria());
console.log("IMC: ", atleta.calculaIMC());
console.log("Media Valida: ", atleta.calculaMediaValida());



