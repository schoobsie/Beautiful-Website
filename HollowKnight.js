
var duration = 6000 * 1000;
var animationEnd = Date.now() + duration;
var skew = 1;

const myCanvas = document.getElementById('my-canvas');
const myConfetti = confetti.create(myCanvas, {
  resize: true,
  useWorker: true
});

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

(function frame() {
  var timeLeft = animationEnd - Date.now();
  var ticks = Math.max(200, 500 * (timeLeft / duration));
  skew = Math.max(0.8, skew - 0.001);

  myConfetti({
    particleCount: 1,
    startVelocity: 0,
    flat: true,
    ticks: ticks,
    origin: {
      x: Math.random(),
      y: Math.random()
    },
    colors: [ '#3d475e28', '#4a587799', '#364157ff'],
    shapes: ['circle'],
    gravity: randomInRange(-0.1, -0.2),
    scalar: randomInRange(0.5, 1.5),
    zIndex: 9,
    drift: randomInRange(1, 5)
  });

  if (timeLeft > 0) {
    setTimeout(() => requestAnimationFrame(frame), 50);
  }
}());

function glowFunction(event, urlstring) {
    console.log(urlstring);
    const imgArrows = event.currentTarget.querySelectorAll('img');
    const textElement = event.currentTarget.querySelector('p');
    const wholeScreen = document.getElementById("wholeScreen");

    imgArrows.forEach((imgArrow) => {
      imgArrow.classList.add('active');

      setTimeout(() => {
        imgArrow.classList.remove('active');                
      },1500);

    })

    setTimeout(() => {
        wholeScreen.classList.add('active');
      },500);

      setTimeout(() => {
        myCanvas.classList.add('active')
      },800);

      setTimeout(() => { 
        window.location.href=urlstring;                
      },1500);


  if (textElement) {
    textElement.style.transition = 'text-shadow 0.7s ease-in-out';
    textElement.style.textShadow = '0 0 20px rgba(255, 255, 255, 1), 0 0 30px rgba(255, 255, 255, 0.9)';

    setTimeout(() => {
          textElement.style.textShadow = 'none';
      }, 500);
  }
}

let resources = 0;
let producers = 0;
let producerCost = 10;

// manual click for money
function gather() {
  resources++;
}

// buys auto producor
function buyProducer() {
  if (resources >= producerCost) {
    resources -= producerCost;
    producers++;
    producerCost = Math.floor(producerCost * 1.5);
  }
}

// my idle loop
setInterval(() => {
  resources += producers;
  
  // update html ui
  document.getElementById("resourceCount").innerText = resources;
  document.getElementById("producerCount").innerText = producers;
  document.getElementById("producerCost").innerText = producerCost;
}, 100);
