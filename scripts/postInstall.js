const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askQuestion() {
  rl.question(
    "(this beta feature just answer and ignore, Thanks!) Which your languages [Bahasa, English]:",
    (answer) => {
      const lang = ["Bahasa", "English"];

      if (lang.includes(answer)) {
        if (answer === "Bahasa") {
          rl.question(
            "Sebutkan Hex kode warna yang anda butuhkan: ",
            (color) => {
              console.log(
                `Pilihan yang bagus warna ${color} akan segera di generate.`
              );
              rl.close();
            }
          );
        } else {
          rl.question("What hex of you prefer for your web: ", (color) => {
            console.log(
              `Great choice! Your pallete with color ${color} will generated.`
            );
            rl.close();
          });
        }
      } else {
        console.log("Please choose a valid lang from the options.");
        askQuestion();
      }
    }
  );
}

askQuestion();
