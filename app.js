const texts = ['website', 'illustrations', 'videos'];
let count = 0;
let index = 0;
let currentText = '';
let letters = '';

(function type(){

    if(count === texts.length){
        count = 0;
    }

    currentText = texts[count];
    letters = currentText.slice(0, ++index);
    console.log(letters);

    document.querySelector('.typing').textContent = letters;

    if(letters.length === currentText.length){
        count++;
        index = 0;
    }

    setTimeout(type, 400);

})();


