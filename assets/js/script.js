// FIZZBUZZ

    // Stampa i numeri da 1 a 100

for (var i = 1; i <= 100; i++) {

    var number = i;

    // se sono multipli di 3 e 5
        if ((number % 3 == 0) && (number % 5 == 0)) {
            console.log('FizzBuzz');
        }
        // se sono multipli di 5
        else if (number % 5 == 0) {
            console.log('Buzz');
        }
        // se sono multipli di 3
        else if (number % 3 == 0) {
            console.log('Fizz');
        }
        // se non sono multipli di 3 o 5 stampami il numero
        else {
            console.log(number);
        }


       

}



// /FIZZBUZZ


// var keep_going = true;

// while (keep_going) {
//     var keep_going = prompt (' inserisci il valore, se false smette ciclo');
//     // APPARIRA' UN PROMPT, finche' noi non scriviamo 'false' il prompt continuera' ad apparire!!
// }

// do {
//     var keep_going = prompt ('Inserisci valore, se false smeete ciclo');

// } while (keep_going);