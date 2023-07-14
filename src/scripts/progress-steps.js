const stepsRef = document.querySelectorAll(".steps__item");
const prevButtonsRef = document.querySelector("[data-action='prev']");
const nextButtonsRef = document.querySelector("[data-action='next']");

prevButtonsRef.addEventListener("click", prevStepButtonClickHandler);
nextButtonsRef.addEventListener("click", nextStepButtonClickHandler);

function prevStepButtonClickHandler() {
	nextButtonsRef.removeAttribute("disabled");

	stepsRef[currentActiveStepIndex].classList.remove(ACTIVE_CLASS);
	currentActiveStepIndex -= 1;

	if (currentActiveStepIndex === 0) {
		prevButtonsRef.setAttribute("disabled", "true");
		return;
	}
}

function nextStepButtonClickHandler() {
	prevButtonsRef.removeAttribute("disabled");

	currentActiveStepIndex += 1;
	stepsRef[currentActiveStepIndex].classList.add(ACTIVE_CLASS);

	if (currentActiveStepIndex === stepsRef.length - 1) {
		nextButtonsRef.setAttribute("disabled", "true");
		return;
	}
}
