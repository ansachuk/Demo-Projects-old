const stepsRef = document.querySelectorAll(".steps__item");
const nextButtonsRef = document.querySelector("[data-action='next']");
const prevButtonsRef = document.querySelector("[data-action='prev']");

const ACTIVE_CLASS = "steps_active";

let currentActiveStepIndex = 0;

nextButtonsRef.addEventListener("click", nextStepClickHandler);
prevButtonsRef.addEventListener("click", prevStepClickHandler);

function nextStepClickHandler() {
  prevButtonsRef.removeAttribute("disabled");

  currentActiveStepIndex += 1;
  stepsRef[currentActiveStepIndex].classList.add(ACTIVE_CLASS);

  if (currentActiveStepIndex === 3) {
    nextButtonsRef.setAttribute("disabled", "true");
    return;
  }
}

function prevStepClickHandler() {
  nextButtonsRef.removeAttribute("disabled");

  stepsRef[currentActiveStepIndex].classList.remove(ACTIVE_CLASS);
  currentActiveStepIndex -= 1;

  if (currentActiveStepIndex === 0) {
    prevButtonsRef.setAttribute("disabled", "true");
    return;
  }
}
