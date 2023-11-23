
let button = document.querySelector('button');

email_array = ["jonsnow@gmail.com", "kratos@gmail.com", "ellie@gmail.com", "christianpellino@gmail.com", "gokusupersayan@gmail.com"]

button.addEventListener(`click`, function() {
    let email_click = document.getElementById("email").value;
    console.log(email_click);

    for (let i=0; i<email_array.length; i++){

        if (email_click === email_array[i]){
            document.getElementById("risultato").innerHTML = "<p>Congratulazioni, la tua email si trova nel nostro database, hai ottenuto l'accesso al nostro minigioco.</p>"
        }

        else if (email_click !== email_array[i]){
            console.log("nope")
            document.getElementById("risultato").innerHTML = "<p>Siamo Spiacenti, la tua email non si trova nel nostro database, per registrarla accumula i punti sul nostro sito.</p>"
        }

    }
})