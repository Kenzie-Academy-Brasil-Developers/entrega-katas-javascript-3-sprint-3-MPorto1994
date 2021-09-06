const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function show(titulo, texto){
    const elemento = document.getElementsByTagName('main');
    let novo_titulo = document.createElement ('h3');
    let novo_texto = document.createElement ('p');
    novo_titulo.innerText = titulo;
    novo_texto.innerText = texto;
    elemento.appendChild(novo_titulo); 
    elemento.appendChild(novo_texto) ;

}

function parametro (vaiAte, constante){
    let max = 0;
    if (vaiAte==undefined){
        max = constante;
    }
    else {
        max=vaiAte;
    }
    return max;
}
function kata1(final) {
    // numeros de 1 a 25
    const predefLimit = 25
    let list =[];
    let limite = parametro(final, predefLimit)
    for (let n=0; n<=limite;n++){
        list.push(n);
    }
    console.log(list);
    show ('kata1: Números de 1 a 25', list);
}
// kata1()

function kata2(final) {
    // numeros de25 a 1
    const predefLimit = 25
    let list =[];
    let limite = parametro(final, predefLimit)
    for (let n=limite; n>=1; n--){
        list.push(n);
    }
    console.log(list);
    show ('kata2: Números de 25 a 1', list);
}
// kata2()

function kata3(final) {
    // numeros de -1 a -25
    const predefLimit = -25
    let list =[];
    let limite = parametro(final, predefLimit)
    for (let n=-1; n>=limite; n--){
        list.push(n);
    }
    console.log(list);
    show ('kata3: Números de -1 a -25', list);
}
// kata3()

function kata4(final) {
    // numeros de -25 a -1
    const predefLimit = -1
    let list =[];
    let limite = parametro(final, predefLimit)
    for (let n=-25; n<=limite;n++){
        list.push(n);
    }
    console.log(list);
    show ('kata4: Números de -25 a -1', list);
}
// kata4()


function kata5(final) {
    // numeros de 25 a -25, impares
    const predefLimit = -25
    let list =[];
    let limite = parametro(final, predefLimit)
    for (let n=25; n>=limite; n-=2){
        list.push(n);
    }
    console.log(list);
    show ('kata5: Números impares de 25 a -25', list);
}
// kata5()

function kata6(final) {
    // Divisiveis por 3 até 100
    const predefLimit = 99
    let list =[];
    let limite = parametro(final, predefLimit)
    for (let n=3; n<=limite; n+=3){
        list.push(n);
    }
    console.log(list);
    show ('kata5: Números divisiveis por 3 até 100', list);

}
// kata6()


function kata7(final) {
    // Divisiveis por 7 até 100
    const predefLimit = 98
    let list =[];
    let limite = parametro(final, predefLimit)
    for (let n=7; n<=limite; n+=7){
        list.push(n);
    }
    console.log(list);
    show ('kata5: Números divisíveis por 7 até 100', list);
}
// kata7()

function kata8(final) {
    // Divisiveis por 3 e7 até 100
    const predefLimit = 1
    let list =[];
    let limite = parametro(final, predefLimit)
    for (let n=100; n>=limite; n--){
        if (n%3==0 || n%7==0){
            list.push(n);
        }
        
    }
    console.log(list);
    show ('kata5: Números divisiveis por 3 ou 7 regressivamente 100-0', list);
}
// kata8()

function kata9(final) {
       // Divisiveis impares divisiveis por 5
       const predefLimit = 100
       let list =[];
       let limite = parametro(final, predefLimit)
       for (let n=1; n<=limite; n++){
           if (n%2!=0 && n%5==0){
               list.push(n);
           }
           
       }
       console.log(list);
       show ('kata5: Números impares divisiveis por 5 no intervalo 100-0', list);
   
}
// kata9()

function kata10(final) {
    console.log(sampleArray)
}
// kata10()

function kata11(final) {
    // Números pares do array
    const predefLimit = sampleArray.length
    let list =[];
    let limite = parametro(final, predefLimit)
    for (let n=0; n<=limite-1; n++){
        if (sampleArray[n]%2==0){
            list.push(sampleArray[n]);
        }
        
    }
    console.log(list);
    show ('kata5: Números impares divisiveis por 5 no intervalo 100-0', list);
}
// kata11()

function kata12(final) {
    // Números impares do array
    const predefLimit = sampleArray.length
    let list =[];
    let limite = parametro(final, predefLimit)
    for (let n=0; n<=limite-1; n++){
        if (sampleArray[n]%2!=0){
            list.push(sampleArray[n]);
        }
        
    }
    console.log(list);
    show ('kata5: Números impares do array', list);
}
// kata12()

function kata13(final) {
        // Números divisiveis por 8 do array
        const predefLimit = sampleArray.length
        let list =[];
        let limite = parametro(final, predefLimit)
        for (let n=0; n<=limite-1; n++){
            if (sampleArray[n]%8==0){
                list.push(sampleArray[n]);
            }
        }
        console.log(list);
        show ('kata5: Números divisiveis por 8', list);    
}
// kata13()

function kata14(final) {
    // Números ao quadrado do array
    const predefLimit = sampleArray.length
    let list =[];
    let limite = parametro(final, predefLimit)
    for (let n=0; n<=limite-1; n++){
        list.push(sampleArray[n**2]);
    }
    console.log(list);
    show ('kata5: Números ao quadrado da lista', list);
}


function kata15(final) {
    // Soma até 20
    const predefLimit = 20
    let soma = 0;
    let limite = parametro(final, predefLimit)
    for (let n=0; n<=limite; n++){
        soma +=n;
    }
    console.log(soma);
    show ('kata5: Soma até 20', list);
}
// kata15()

function kata16(final) {
    // Soma array
    const predefLimit = sampleArray.length
    let soma = 0;
    let limite = parametro(final, predefLimit)
    for (let n=0; n<=limite-1; n++){
        soma +=sampleArray[n];
    }
    console.log(soma);
    show ('kata5: Soma array', list);
}
// kata16()

function kata17(final) {
    // Menor item do array
    const predefLimit = sampleArray.length
    let menor = sampleArray[0];
    let limite = parametro(final, predefLimit)
    for (let n=0; n<=limite-1; n++){
        if(menor>sampleArray[n]){
            menor = sampleArray[n]
        }
    }
    console.log(menor);
    show ('kata5: Menor item do array', list);
}
// kata17()

function kata18(final) {
    // Maior item do Array
    const predefLimit = sampleArray.length
    let maior = sampleArray[0];
    let limite = parametro(final, predefLimit)
    for (let n=0; n<=limite-1; n++){
        if(maior<sampleArray[n]){
            maior = sampleArray[n]
        }
    }
    console.log(maior);
    show ('kata5: Maior item do Array', list);
}
kata18()

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}
