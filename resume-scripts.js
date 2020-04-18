function toHide() {
    var hidden = document.getElementById("profile-pic");
        if (!hidden.style.opacity) {
            hidden.style.opacity = 1;
        }
        if (hidden.style.opacity > 0) {
            hidden.style.opacity = 0;
        }
  }
  function fadeOutEffect() {
    var fadeTarget = document.getElementById("target");
    var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
        }
    }, 200);
}

function toShow() {
    var showTarget = document.getElementById("number");
    if (showTarget.style.display = 'none') {
        showTarget.style.display = 'flex';
    }
}

// document.getElementById("number").style.display = 'block';

// document.getElementById("target").addEventListener('click', fadeOutEffect);

// var s = document.getElementById("target").style;
// s.opacity = 1;
// (function fade(){(s.opacity-=.1)<0?s.display="none":setTimeout(fade,40)})();
// function toHide() {
//     var hidden = document.getElementById("profile-pic");
//         if (!hidden.style.opacity) {
//             hidden.style.opacity = 1;
//         }
//         if (hidden.style.opacity > 0) {
//             hidden.style.opacity = 0;
//         }
//   }
// document.getElementById("profile-pic").addEventListener("mouseover", hide);
  