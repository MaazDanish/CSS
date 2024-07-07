var clickButton = document.getElementById("click-btn")

clickButton.addEventListener('click', () => {
    const yearinput = prompt("Enter Your Birth Year")
    const yearOfBitrh = Number(yearinput)
    // console.log(typeof yearOfBitrh);


    const currentYear = new Date().getFullYear()

    const days = (currentYear - yearOfBitrh) * 365;
    localStorage.setItem('days', days)
    var result = document.getElementById('flex-box-result')
    var h2 = document.createElement('h2');
    h2.textContent = `Your are ${days} years old`;
    result.appendChild(h2);

    // console.log(currentYear);
})
// window.addEventListener('DOMContentLoaded', () => {
//     var days = localStorage.getItem('days')
//     var result = document.getElementById('flex-box-result')
//     var h2 = document.createElement('h2');
//     h2.textContent = `Your are ${days} years old`;
//     result.appendChild(h2);
// })

var resetbutoon = document.getElementById('reset-btn')
resetbutoon.addEventListener('click', () => {
    localStorage.clear()
    window.location.reload()
})

var generateCat = document.getElementById('generateCat')
generateCat.addEventListener('click', () => {
    var promptNumber = Number(prompt('How many cats do you want to generate ?'));
    var div = document.getElementById('flex-box-result-img');

    for (let i = 0; i < promptNumber; i++) {

        var image = document.createElement('img');

        image.src = "/YourAgeInDaysPoject/images/photo-1597626133663-53df9633b799.avif";
        image.alt = 'Image is loading';

        div.appendChild(image);

    }
})
