import * as f from './Functions.js';

f.Welcome();
let options = document.querySelector('select');
let Api = f.ApiAgents;

options.addEventListener("change", function () {

    if (options.value == 0) {
        f.showData(f.ApiAgents);
        f.row.innerHTML = '';
    }
   else if (options.value == 1)
        f.showData(f.ApiWeapons);
    else 
    f.row.innerHTML = '<h2>still on working visit us next Time !!</h2>';





})









