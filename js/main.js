let submit = document.getElementById('submit');
let output = document.querySelector('.output');
let activities = document.getElementById('activities');

submit.addEventListener('click', function (e) {
    e.preventDefault()
    let mannlich = document.getElementById('mannlich');
    let bodySize = document.getElementById('bodySize');
    let age = document.getElementById('age');
    let weight = document.getElementById('weight');
    let grundumsatz;
    let gesamtumsatz;
    if (mannlich.checked) {
        grundumsatz = 66.47 + (13.7 * weight.value) + (5 * bodySize.value) - (6.8 * age.value);
        gesamtumsatz = grundumsatz * activities.value


        output.innerHTML = `
        <table>
            <tr>
                <th></th>
                <th>Kcal</th>
                <th>KJ</th>
            </tr>
            <tr>
                <td>Grundumsatz</td>
                <td>${(grundumsatz).toFixed(2)}</td>
                <td>${(grundumsatz * 4.1868).toFixed(2)} </td>
            </tr>
            <tr>
                <td>Gesamtumsatz</td>
                <td>${(gesamtumsatz ).toFixed(2)}</td>
                <td>${(gesamtumsatz *4.1868).toFixed(2)}</td>
            </tr>
    `;
    } else {
        grundumsatz = 65.1 + (9.6 * weight.value) + (1.8 * bodySize.value) - (4.7 * age.value);
        gesamtumsatz = grundumsatz * activities.value


        output.innerHTML = `
        <table>
            <tr>
                <th></th>
                <th>Kcal</th>
                <th>KJ</th>
            </tr>
            <tr>
                <td>Grundumsatz</td>
                <td>${(grundumsatz).toFixed(2)}</td>
                <td>${(grundumsatz * 4.1868).toFixed(2)}</td>
            </tr>
            <tr>
                <td>Gesamtumsatz</td>
                <td>${(gesamtumsatz ).toFixed(2)}</td>
                <td>${(gesamtumsatz *  4.1868).toFixed(2)}</td>
            </tr>
    `;
    }
});