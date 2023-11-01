const blockquotes = document.querySelectorAll(".section3 .container1 blockquote")
const quoteContainer = document.querySelectorAll(".section3 .container1")
let currentIndex = 0;
function rotateQuotes() {
  blockquotes[currentIndex].style.display = 'none';

  currentIndex = (currentIndex + 1) % blockquotes.length;

  blockquotes[currentIndex].style.display = 'block';
}

blockquotes[currentIndex].style.display = 'block';

const interval = setInterval(rotateQuotes, 5000);

document.getElementById("github").addEventListener("click", ()=>{
    location.href = "https://github.com/CodexABQ";
})
document.getElementById("twitter").addEventListener("click", ()=>{
    location.href = "https://x.com/CodexABQ?t=viwpNRVn3PoL39qCeb42gw&s=09";
})
document.getElementById("linkedin").addEventListener("click", ()=>{
    location.href = "https://ng.linkedin.com/in/abdulwahab-ohinoyi-qaasim-63b353297";
})
document.getElementById("stackoverflow").addEventListener("click", ()=>{
    location.href = "https://stackoverflow.com/users/22828249/codexabq";
})