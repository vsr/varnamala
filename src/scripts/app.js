import "../styles/style.css";

console.log("varnamala");
const m = document.querySelector("#alphabet-list");
import("../alphabets/english").then(({ alphabet }) => {
  console.log("alphabet", alphabet);
  alphabet.forEach((letter) => {
    console.log(letter);
    const el = document.createElement("div");
    el.classList.add("card");
    el.innerHTML = letter.ch;
    m.appendChild(el);
  });
});

// enAlphabet.forEach((letter) => {
//   console.log(letter);
//   const el = document.createElement("div");
//   el.classList.add("card");
//   el.innerHTML = letter.ch;
//   m.appendChild(el);
// });
