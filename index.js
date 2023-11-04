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
    location.href = "https://www.linkedin.com/me?trk=p_mwlite_feed_updates-secondary_nav";
})
document.getElementById("stackoverflow").addEventListener("click", ()=>{
    location.href = "https://stackoverflow.com/users/22828249/codexabq";
})
let h1 = document.querySelector('nav h1');
window.addEventListener('scroll', ()=>{
  if(window.scrollY >= 15){
    h1.style.background = 'linear-gradient(120deg, #86A8E7, #B7C0EE)'
  }else{
    h1.style.background = 'aliceblue';
  }
})
