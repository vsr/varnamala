import "../styles/style.css";
import alphabets from "../alphabets";

const getAlphabet = (language) => {
  return alphabets[language].get();
};

function init() {
  // select the only language available for now
  const lang = Object.keys(alphabets)[0];
  getAlphabet(lang).then((a) => {
    console.log("alphabet", lang, a);
  });
}

window.addEventListener("DOMContentLoaded", init);
