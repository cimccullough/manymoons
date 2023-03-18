const selectedDate = document.getElementById("selectedDate");
const moonSection = document.getElementById("moonSection");
const number = document.getElementById("numberOfMoons");
const moonsContainer = document.getElementById("moonsContainer");
const moonsText = document.getElementById("moonsText");

const today = new Date();
const currentDate = `${today.getFullYear()}-0${
  today.getMonth() + 1
}-${today.getDate()}`;

selectedDate.setAttribute("max", currentDate);

function calculateMoons() {
  moonSection.classList.replace("hide", "show");
  resetMoons();

  const startDate = new Date(selectedDate.value);
  const numberOfMoons = Number.parseFloat(
    dateDifference(startDate, today) / 29.5306
  ).toFixed(0);

  number.innerHTML = numberOfMoons;

  for (let i = 0; i < numberOfMoons; i++) {
    const moonEmoji = document.createElement("span");
    moonEmoji.setAttribute("class", "moonEmoji");
    moonEmoji.innerHTML = "🌕";

    moonsContainer.appendChild(moonEmoji);
  }
}

function dateDifference(start, today) {
  const msPerDay = 1000 * 60 * 60 * 24;
  const utc1 = Date.UTC(start.getFullYear(), start.getMonth(), start.getDate());
  const utc2 = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());

  return Math.floor((utc2 - utc1) / msPerDay);
}

function resetMoons() {
  while (moonsContainer.firstChild) {
    moonsContainer.removeChild(moonsContainer.lastChild);
  }
}
