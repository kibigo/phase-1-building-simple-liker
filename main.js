// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const likeHeart = document.querySelectorAll(".like-glyph");

likeHeart.forEach(heart => heart.addEventListener('click', changeHeart));

function changeHeart(e){
  const heart = e.target;
  if(heart.classList.contains('clickedHeart')){
    heart.innerHTML = EMPTY_HEART;
    heart.classList.remove('clickedHeart');
  } else{
  mimicServerCall()
  .then(response => {
    heart.innerHTML = FULL_HEART;
    heart.classList.add('clickedHeart');
  })
  .catch(error => console.log("Something went wrong:", error))
}}



changeHeart();




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
