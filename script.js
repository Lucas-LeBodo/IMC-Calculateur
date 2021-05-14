const prompts = require('prompts');
const result = require('./result.json');

const questions = [{
        type: 'number',
        name: 'taille',
        message: 'Quelle est votre taille ? (cm)'
    },
    {
        type: 'number',
        name: 'poids',
        message: 'Quel est votre taille ? (Kg)'
    }
];

(async () => {
    const reponse = await prompts(questions);
    let taille = reponse['taille'] * 0.01;
    let calcul = reponse['poids']/(taille * taille);
    let imc = Math.round(calcul * 100) / 100;

    console.log(`Votre IMC est de ${imc}`)

    if(imc < 18.5 ){
        console.log(result.reponse1);
    } else if(18.5 < imc < 24.9){
        console.log(result.reponse2);
    } else if(25 < imc < 29.9){
        console.log(result.reponse3);
    } else if(30 < imc < 34.9){
        console.log(result.reponse4);
    } else if(35 < imc < 39.9){
        console.log(result.reponse5);
    } else if(imc > 40){
        console.log(result.reponse6);
    }
})();