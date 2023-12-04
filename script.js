document.addEventListener("DOMContentLoaded", function () {
    const candle = document.getElementById("candle");

    candle.addEventListener("click", function () {
      candle.classList.add("extinguished");
    });

    // Update the text to display
    const birthdayMessage = document.querySelector('.birthday-message p');
    birthdayMessage.textContent = "Happy Birthday!";

   
});
