import * as f from './Functions.js';

f.Welcome();
let options = document.querySelector('select');

options.addEventListener("change", function () {

    if (options.value == 1) {
        f.row.innerHTML = '';
        f.showData(f.ApiAgents);

    }
    else if (options.value == 2) {
        f.row.innerHTML = '';
        f.showData(f.ApiWeapons);
    }
    else
        f.row.innerHTML = '<h2>Still on working visit us next Time !!</h2>';





})









