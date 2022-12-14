const activeButton = document.querySelectorAll('.radio .radio__wrapper input');
const submitButton = document.querySelector('.form__submit-button');
const resetButton = document.querySelector('.form__reset-button');
const inputs = document.querySelectorAll('.input__wrapper input');
const counterResult = document.querySelector('.counter__result');
const defaultActivity = document.getElementById('activity-minimal');
const caloriesMinimal = document.getElementById('calories-minimal');
const caloriesMaximal = document.getElementById('calories-maximal');
const caloriesNorm = document.getElementById('calories-norm');
const genderFemale = document.getElementById('gender-female');
const genderMale = document.getElementById('gender-male');


resetButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    counterResult.classList.add('counter__result--hidden');
    inputs.forEach(element => element.value = "");
    defaultActivity.checked = true;
    submitButton.disabled = true;
    genderFemale.checked = true;
    resetButton.disabled = true;
});

submitButton.addEventListener('click', function () {
    for (let i = 0; i < activeButton.length; i++) {
        const made = activeButton[i];
        if (made.checked) {
            setCalories(1.2 + (0.175 * i));
        }
    }
});

submitButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    counterResult.classList.remove('counter__result--hidden');
});

for (let input of inputs) {
    input.addEventListener('input', function (evt) {
        evt.preventDefault();
        submitButton.disabled = !(inputs[0].value.length > 0 && inputs[1].value.length > 0 && inputs[2].value.length > 0);
        resetButton.disabled = !(inputs[0].value.length > 0 || inputs[1].value.length > 0 || inputs[2].value.length > 0);
    });
}

const setCalories = function(a) {
    let ages = Number(5) * Number(inputs[0].value);
    let heights = Number(6.25) * Number(inputs[1].value);
    let weights = Number(10) * Number(inputs[2].value);
    let N = genderMale.checked ? weights + heights - ages + 5 : weights + heights - ages - 161;
    caloriesNorm.innerHTML = Math.round((N * a));
    caloriesMinimal.innerHTML = Math.round(((N * a) - (((N * a) / 100) * 15)));
    caloriesMaximal.innerHTML = Math.round(((N * a) + (((N * a) / 100) * 15)));
}






