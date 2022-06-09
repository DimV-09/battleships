let arr = [0, 0, 0, 0, 0, 0, 0];
let hit = [];
let deck = Math.floor(Math.random() * (4 - 1 + 1) + 1);
let deckInfo = deck;
let trys = 0;
let startPoint = Math.floor(Math.random() * ((7 - deck) - 1 + 1) + 1);
for (let i = 0; i < deck; i++) {
    arr[startPoint++] = 1;
}
while (deck > 0) {
    let shot = prompt('Введите число от 0 до 6');
    if (arr[shot] == 1 & hit.indexOf(shot) == -1) {
        hit.push(shot);
        deck--;
        alert('Попадание!');
    } else {
        if (hit.indexOf(shot) != -1) {
            alert('Повторное попадание! Введите число от 0 до 6');
        } else {
            alert('Ты промахнулся!');
        }
    }
    trys++;
    console.log(trys);
}
alert('Затоплен ' + deckInfo + ' палубный корабль, за ' + trys + ' попыток.');
