import Swipe from "swipejs";
import alphabets from "../alphabets";

const getAlphabet = (language) => {
  return alphabets[language].get();
};

const synth = window.speechSynthesis;
const speakLetter = (ev) => {
  const el = ev.currentTarget;
  const letter = el.getAttribute("data-letter");
  console.log(ev, el, letter);
  const speak = new SpeechSynthesisUtterance(letter);
  synth.speak(speak);
};
const card = (letter) => {
  const el = document.createElement("div");
  el.setAttribute("data-letter", letter.ch);
  el.innerHTML = `<div class="card"><div class="card-content"><span class="letter">${letter.ch}</span></div></div>`;
  el.addEventListener("click", speakLetter);
  return el;
};

function init() {
  const select = document.querySelector("#language");
  Object.keys(alphabets).forEach((lang) => {
    const opt = document.createElement("option");
    opt.value = lang;
    opt.textContent = alphabets[lang].name;
    select.appendChild(opt);
  });

  // select the only language available for now
  const lang = Object.keys(alphabets)[0];
  getAlphabet(lang).then((a) => {
    console.log("alphabet", lang, a);
    const c = document.querySelector(".swipe-wrap");
    a.alphabet.forEach((letter) => {
      c.appendChild(card(letter));
    });
    const swipe = new Swipe(document.getElementById("alphabet-list"), {
      startSlide: 0,
      speed: 400,
      auto: false,
      draggable: false,
      continuous: true,
      disableScroll: false,
      stopPropagation: false,
      ignore: ".scroller",
      callback: function (index, elem, dir) {},
      transitionEnd: function (index, elem) {},
    });
    document
      .querySelector(".swipe-navigation .next")
      .addEventListener("click", () => {
        swipe.next();
      });
    document
      .querySelector(".swipe-navigation .prev")
      .addEventListener("click", () => {
        swipe.prev();
      });
  });
}

window.addEventListener("DOMContentLoaded", init);
