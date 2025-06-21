const container = document.querySelector('.container');

// 3D Tilt on mousemove
document.addEventListener('mousemove', (e) => {
  const x = (window.innerWidth / 2 - e.pageX) / 25;
  const y = (window.innerHeight / 2 - e.pageY) / 25;
  container.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});

document.addEventListener('mouseleave', () => {
  container.style.transform = 'rotateY(0deg) rotateX(0deg)';
});

// Page switching
function showPage2() {
  document.getElementById('page1').classList.add('hidden');
  document.getElementById('page2').classList.remove('hidden');
}

function showPage1() {
  document.getElementById('page2').classList.add('hidden');
  document.getElementById('page1').classList.remove('hidden');
}
