let total = 0;

addBtn.addEventListener("click", (e) => {
    total += +userInput.value;
    outputResult(total, total);
});
