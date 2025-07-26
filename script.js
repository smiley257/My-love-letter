function openLetter() {
  document.querySelector(".envelope").style.display = "none";
  const letter = document.querySelector(".letter-content");
  letter.classList.remove("hidden");
}
