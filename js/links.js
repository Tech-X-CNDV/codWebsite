const compManualLink = 'https://ftc-resources.firstinspires.org/ftc/game/manual';
const compYear = '2025';
document.addEventListener('DOMContentLoaded', () => {
  const linkElement = document.getElementById('CompManual');
  if (linkElement) {
    linkElement.href = compManualLink;
    linkElement.textContent = `Competition Manual ${compYear}`;
  }
});