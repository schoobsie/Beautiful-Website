
var duration = 60 * 1000;
var animationEnd = Date.now() + duration;
var skew = 1;

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

(function frame() {
  var timeLeft = animationEnd - Date.now();
  var ticks = Math.max(200, 500 * (timeLeft / duration));
  skew = Math.max(0.8, skew - 0.001);

  confetti({
    particleCount: Math.round(Math.random()),
    startVelocity: 0,
    ticks: ticks,
    origin: {
      x: Math.random(),
      y: (Math.random() * skew) - 0.2
    },
    colors: ['#858585'],
    shapes: ['circle'],
    gravity: randomInRange(0.1, 0.2),
    scalar: randomInRange(0.4, 1),
    drift: randomInRange(0.1, 0.6)
  });

  if (timeLeft > 0) {
    setTimeout(() => requestAnimationFrame(frame), 50);
  }
}());

function glowFunction(event) {
    const imgArrows = event.currentTarget.querySelectorAll('img');
    const textElement = event.currentTarget.querySelector('p');
    imgArrows.forEach((imgArrow) => {
      imgArrow.classList.add('active');

      setTimeout(() => {
          imgArrow.classList.remove('active');
          window.location.href="JaxPenta.html";
      }, 800);
  })

  if (textElement) {
    textElement.style.transition = 'text-shadow 0.7s ease-in-out';
    textElement.style.textShadow = '0 0 20px rgba(255, 255, 255, 1), 0 0 30px rgba(255, 255, 255, 0.9)';

    setTimeout(() => {
          textElement.style.textShadow = 'none';
      }, 500);
  }
}