//jshint esversion: 6
/*
Author: Anthony Noel
You can add a word and example pair to a list and they are shown on the left side of the screen alphabetically by name

Future Development:
Add a horizontal line between each word

*/


const totalWords = document.querySelector(".left h1");
const wordDisplay = document.querySelector(".left p");
const words = [
  {name: "Pillow", example: "Have you seen my pillow?"},
  {name: "Rock", example: "Yesterday I tripped over a rock"}

];

const initPage = () => {
  //Get the current number in the word array
  totalWords.innerText = "Total Words: "+words.length;
  displayWords();

};

const addWord = (form) => {
  //get the word input and example input values
  let [name, example] = [form.name.value, form.example.value];
  console.log("Name", name);
  console.log("example", example);

  //clear the inputs
  [form.name.value, form.example.value] = ["",""];
  //Add it to the words array
  words.push({name: name, example: example});
  //the name word array
  displayWords();
};

const displayWords = () => {
  //words sorted
  words.sort((a,b) => a.name>b.name ? 1:-1);
  console.table(words);
  //Display to the left screen with each word seperated by a break
  wordDisplay.innerText = "";
  words.forEach(word => wordDisplay.innerText += word.name+"\n"+word.example+"\n\n");



};


initPage();
