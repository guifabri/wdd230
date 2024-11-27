// Set the last modified date
document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;
const hamButton = document.querySelector('#burger');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});
const modeButton = document.querySelector("#mode");
const main = document.querySelector("body");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
		main.style.background = "#43114f";
		main.style.color = "#fffbf4";
		modeButton.textContent = "🔆";
	} else {
		main.style.background = "#fffbf4";
		main.style.color = "#43114f";
		modeButton.textContent = "🕶️";
	}
});