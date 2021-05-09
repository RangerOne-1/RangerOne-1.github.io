const view = document.getElementsByTagName('pre');

// ES6 arrow function expression and also making use of ES6 template strings
var log = (msg) => view[0].insertAdjacentHTML('beforeend', `${msg}`);

var letterCount = 0;
var sentenceCount = 0;

var type = function(message) {
    sentenceCount++;
    setTimeout(function() {
        message.forEach(function (character) {
            letterCount++;
            setTimeout(function() {
                log(character);
            }, 65 * letterCount);
        });
    }, 1000 * sentenceCount);
}

type('Hey..\n\n'.split(''));
type('I am glad to say that i am getting married!\n'.split(''));
type('and exited to.\n\n'.split(''));
type('we are inviting you and your family to our marriage,\n'.split(''));
type('we would be happy to have you here.\n\n'.split(''));
type('\nHope we see you on the day of marriage!\n\n'.split(''));
type('Regards,\n'.split(''));
type('Pavan & Navya\n'.split(''));