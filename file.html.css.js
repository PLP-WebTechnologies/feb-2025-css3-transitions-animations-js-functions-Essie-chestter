.HTML
<button id="fadeButton">Fade In Image</button>
<img id="myImage" src="https://images.pexels.com/photos/19027817/pexels-photo-19027817.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" style="opacity: 0; max-width: 500px; height: auto;">

.CSS 
#myImage {
  transition: opacity 1s ease-in-out; /* Smooth opacity transition */
}

.fade-in {
  opacity: 1 !important; /* !important to ensure it overrides inline style */
}

.Js
const fadeButton = document.getElementById('fadeButton');
const myImage = document.getElementById('myImage');

fadeButton.addEventListener('click', () => {
  myImage.classList.add('fade-in');
});
