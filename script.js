let red = document.getElementById('red');
let green = document.getElementById('green');
let blue = document.getElementById('blue');

let randomInterval1 = document.getElementById('randomInterval1');

let random_r = Math.floor(Math.random(1, 255) * 255);
let random_g = Math.floor(Math.random(1, 255) * 255);
let random_b = Math.floor(Math.random(1, 255) * 255);

let random_interval = Math.floor(Math.random(100, 300) * 300);

let random_interval_1 = Math.floor(Math.random(100, 300) * 300);
let random_interval_2 = Math.floor(Math.random(100, 300) * 300);
let random_interval_3 = Math.floor(Math.random(100, 300) * 300);

var direction = 1;
var r = 0;
var g = 0;
var b = 0;

function r_count() {
   r += direction;
   direction *= (((r % 255) == 0) ? -1 : 1);
}

function g_count() {
   g += direction;
   direction *= (((g % 255) == 0) ? -1 : 1);
}

function b_count() {
   b += direction;
   direction *= (((b % 255) == 0) ? -1 : 1);
}

setInterval(() => {
    r_count();
    document.documentElement.style.setProperty('--r', r);
    red.textContent = r;
}, random_interval_1)

setInterval(() => {
    g_count();
    document.documentElement.style.setProperty('--g', g);
    green.textContent = g;
}, random_interval_2)

setInterval(() => {
    b_count();
    document.documentElement.style.setProperty('--b', b);
    blue.textContent = b;
}, random_interval_3)

setInterval(() => {
    random_interval_1 = Math.floor(Math.random(100, 300) * 300);
    randomInterval1.textContent = random_interval_1;
    random_interval_2 = Math.floor(Math.random(100, 300) * 300);
    randomInterval2.textContent = random_interval_2;
    random_interval_3 = Math.floor(Math.random(100, 300) * 300);
    randomInterval3.textContent = random_interval_3;
}, 10000);

randomInterval1.textContent = random_interval_1;
randomInterval2.textContent = random_interval_2;
randomInterval3.textContent = random_interval_3;
