let words = [
  "небо",
  "коло",
  "чоло",
  "раки"
];

let slovo = words[Math.floor(Math.random()*4)];
console.log(slovo);

let answer = ["*","*","*","*"];

let remain = slovo.length;

while (remain>0) {

  alert(answer.join(" "));

  let guess = prompt("Введіть букву");

  guess = guess.toLowerCase();




  if (guess === null) {
    break;
  }

  else if (guess.length !==1) {
    alert("Введіть ОДНУ букву!")

  }
  else {

    for (let i = 0 ; i < slovo.length; i++){

      if (slovo[i] === guess) {

        answer[i] = guess;
        remain--;

      }

    }

  }

}

let congr = "Ви вгадали слово: "+slovo;

alert(congr);
