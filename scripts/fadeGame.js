export const fadeGame = () => {
    const startButton = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const duel = document.querySelector(".duel");

    startButton.addEventListener("click", () => {
        introScreen.classList.add("fadeOut");
        duel.classList.add("fadeIn");
    });
};