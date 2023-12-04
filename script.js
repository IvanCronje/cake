document.addEventListener("DOMContentLoaded", function () {
    const candle = document.getElementById("candle");
  
    candle.addEventListener("click", function () {
      candle.classList.add("extinguished");
    });
  });
  