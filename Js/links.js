const compManualLink =
  "https://ftc-resources.firstinspires.org/ftc/game/manual";
const compYear = "2026-2027";
document.addEventListener("DOMContentLoaded", () => {
  const linkElement = document.getElementById("CompManual");
  if (linkElement) {
    linkElement.href = compManualLink;
    linkElement.textContent = `Competition Manual ${compYear}`;
  }
});

// ma gandeam daca tot sunt aici sa fac si pentru Regulamentul Nație prin Educație si copyright dar stiu la ce sa gandit persoana din inaintea mea cand a facut asta