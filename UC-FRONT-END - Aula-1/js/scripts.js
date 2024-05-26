function calcularAreaCirculo() {

    let raio = parseFloat(prompt("Insira o raio do círculo em metros"));
    const area = Math.PI * Math.pow(raio, 2);
    alert(area.toFixed(2) + "m²");
    
}