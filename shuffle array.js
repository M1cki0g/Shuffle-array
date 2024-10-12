num = ["1", "2", "3", "4", "5", "6"];
console.log(shuffle(num));

function shuffle(num) {
  let a = num.length;
  while (a != 0) {
    let b = Math.floor(Math.random() * a);
    a--;
    let temp = num[a];
    num[a] = num[b];
    num[b] = temp;
  }
  return num;
}
