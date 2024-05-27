//nome atleta, notas obtidas, media valida sem maior e menor
let atletas = [
    {
        nome: "Cesar Abascal",
        notas: [10,9.34,8.42,10,7.88]
    },
    {
        nome: "Fernando Puntel",
        notas: [8,10,10,7,9.33]
    },
    {
        nome: "Daiane Jelinsky",
        notas: [7,10,9.5,9.5,8]
    },
    {
        nome:"Bruno Castro",
        notas: [10,10,10,9,9.5]
    }
    ];


let nomeAtletas = 0;
let mediaValida = 0;
let notasRecebidas = 0;

    for(let i = 0; i < atletas.length; i++) {
    
        nomeAtletas = atletas.map(function(nomes) {
               
            return nomes.nome;

        });

        notasRecebidas = atletas.map(function(notas) {

            let total =  notas.notas;

            total.sort(function(a, b) {

                return b - a;

               });

            return total;

        });
    }
    
    for(let i = 0; i < atletas.length; i++) {
         
        switch(i) {
             
            case i:

                console.log("Atletas: ", nomeAtletas[i]);
                consol.log("Notas Obtidas: ", notasRecebidas[i]);

                let notasAtualizadas = notasRecebidas[i].slice(1,notasRecebidas[i].length-1);

                let soma = notasAtualizadas.reduce(function(total, atual) {

                    return total + atual;
                });
        
                let media = soma / notasAtualizadas.length;

                console.log("Media Valida: ", media);

        break
        default:

        console.log("Atleta não cadastrado");
    
        }
    }




   