//Clique sur la fleur rose//
let rose = document.querySelector('.img_product_rose');
function imageOne() {
    document.querySelector('.img_rose').src="images/rose.jpg"
}
rose.addEventListener('click', imageOne);

//Clique sur la fleur bleue//
let bleu = document.querySelector('.img_product_bleu');
function imageTwo() {
    document.querySelector('.img_rose').src="images/bleu.jpg"
}
bleu.addEventListener('click', imageTwo);

//Clique sur la fleur jaune//
let jaune = document.querySelector('.img_product_jaune');
function imageThree() {
    document.querySelector('.img_rose').src="images/jaune.jpg"
}
jaune.addEventListener('click', imageThree);

