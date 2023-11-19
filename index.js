let nome = "Ronaldinho";
let vitoria = soma(140, 5);
let nivel = "inicial";

function soma (vit, derr) {
    let resultado = vit - derr
    return resultado
}

switch (true) {
  case vitoria < 10:
    nivel = "Ferro";
    break;
  case vitoria >= 10 && vitoria <= 20:
    nivel = "Bronze";
    break;
  case vitoria >= 21 && vitoria <= 50:
    nivel = "Prata";
    break;
  case vitoria >= 51 && vitoria <= 80:
    nivel = "Ouro";
    break;
  case vitoria >= 81 && vitoria <= 90:
    nivel = "Diamante";
    break;
  case vitoria >= 91 && vitoria <= 100:
    nivel = "Lendário";
    break;
  default:
    nivel = "Imortal";
}

console.log(`O jogador ${nome} está no nível ${nivel}`);
