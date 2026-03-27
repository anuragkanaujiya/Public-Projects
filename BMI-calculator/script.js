let height = document.querySelector("#height");
let weight = document.querySelector("#weight");
let calculate = document.querySelector("#Calculate");
let result = document.querySelector(".ans");
let show=document.querySelector(".show-p")

calculate.addEventListener("click", () => {
    let h = parseFloat(height.value);
    let w = parseFloat(weight.value);
    let answer = w / (h ** 2);
    let ans =answer.toFixed(2);
    console.log(ans);
    result.innerText = "Result: " + answer.toFixed(1);
    console.log(h);
    console.log(w);
    let needle = document.querySelector(".needle");
    let angel = 0;
    function needleRotate() {
        if (ans <= 16) {
            angel = 1.9 * ans;
            needle.style.transform = `rotate(${angel}deg)`
            show.innerHTML="Severe Thinness"
        }
        if (ans > 16 && ans <= 17) {
            angel=(12*(ans-16))+30;
            needle.style.transform = `rotate(${angel}deg)`
            show.innerHTML="Moderate Thinness"
        }
        if (ans > 17 && ans <= 18.5) {
           angel=(8.66666*(ans-17))+42;
            needle.style.transform = `rotate(${angel}deg)`
             show.innerHTML="Mild Thinness"
        }
        if (ans > 18.5 && ans <= 25) {
            angel=(6.46153846*(ans-18.5))+53;
            needle.style.transform = `rotate(${angel}deg)`
             show.innerHTML="Normal"
        }
        if (ans > 25 && ans <= 30) {
            angel = 3.866 * ans;
            needle.style.transform = `rotate(${angel}deg)`
             show.innerHTML="Overweight"
        }
        if (ans > 30 && ans <= 35) {
            angel = 3.877 * ans;
            needle.style.transform = `rotate(${angel}deg)`
             show.innerHTML="Obese Class I"
        }
        if (ans > 35 && ans <= 40) {
            angel = 3.925 * ans;
            needle.style.transform = `rotate(${angel}deg)`
             show.innerHTML="Obese Class II"
        }
        if (ans > 40 && ans <= 50) {
            angel = 3.6 * ans;
            needle.style.transform = `rotate(${angel}deg)`
             show.innerHTML="Obese Class III"
        }

    }
    setTimeout(needleRotate, 100)
});

document.getElementById("myForm").addEventListener("submit", function (e) {
    e.preventDefault();
});
