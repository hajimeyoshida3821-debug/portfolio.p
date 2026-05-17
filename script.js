const menuBtn = document.querySelector(".menu-btn");

const navBar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {
  navBar.classList.toggle("open");
});


const skillButtons = document.querySelectorAll(".skills-buttons button");

const skillContent = document.querySelector("#skill-content");

skillButtons.forEach((button) => {

  button.addEventListener("click", () => {

    const skill = button.dataset.skill;

    if (skill === "html") {
      skillContent.textContent =
        "CSSとともに、progateでの中級講座を受講しました。";
    }

    if (skill === "css") {
      skillContent.textContent =
        "HTMLとともに、progateでの中級講座を受講しました。";
    }

    if (skill === "js") {
      skillContent.textContent =
        "progateでのコールバック関数講座を受講しました。課題：アウトプット量";
    }

    if (skill === "react") {
      skillContent.textContent =
        "Reactの概念を大まかに把握しました。課題：詳細のインプット";
    }

  });

});