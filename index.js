
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
    alert("GitHub");
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
let nav = document.querySelector('nav')
window.addEventListener('scroll', ()=>{
  if(window.scrollY >= 120){
    nav.style.transition = 'all 2s ease';
    nav.style.position = 'sticky';
    nav.style.top = '0';
    h1.innerHTML = 'CodexABQ'
    h1.classList.add('newh1');
  }else{
    nav.style.position = 'relative';
    h1.classList.remove('newh1');
    h1.innerHTML = 'Welcome to my page'
    nav.style.transition = 'all 2s ease';
  }
})
