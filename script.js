const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const botao = document.querySelector(".media");
const resultado = document.querySelector(".resultado");

botao.addEventListener("click", () => {
    console.log(num1.value);
    const media = (parseInt(num1.value) + parseInt(num2.value)) / 2;
    resultado.innerHTML = `A média entre os dois números é: ${media}`;
});
