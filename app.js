const btn = document.querySelector(".talk");
const content = document.querySelector(".content");
const timeText = new Date();

const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function () {
  console.log("ok");
};

const greetings = ["I am Good, How Are You? ", "I am fine, What About You?"];
const weather = ["Weather is fine"];

recognition.onresult = function (event) {
  const current = event.resultIndex;

  const transcript = event.results[current][0].transcript;
  content.textContent = transcript;
  readOutLoud(transcript);
};

//add listener to button

btn.addEventListener("click", () => {
  recognition.start();
});

function readOutLoud(message) {
  const speech = new SpeechSynthesisUtterance();
  speech.text = "I dont know what you said";
  if (message.includes("how are you")) {
    const finalText = greetings[Math.floor(Math.random() * greetings.length)];
    speech.text = finalText;
  }
  if (message.includes("what is time")) {
    speech.text = timeText;
    content.textContent = timeText;
  }

  if (message.includes("what is the time right now")) {
    speech.text = timeText;
    content.textContent = timeText;
  }
  if (message.includes("how many days are there in a week")) {
    speech.text = "Seven";
    content.textContent = "Seven {7}";
  }
  if (message.includes("which year is it")) {
    speech.text = "2020";
    content.textContent = "2020";
  }
  if (message.includes("hello")) {
    speech.text = "Hello!!?";
    content.textContent = "Hello";
  }
  if (message.includes("hai")) {
    speech.text = "Hello!!";
    content.textContent = "Hello!!";
  }

  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);
}
