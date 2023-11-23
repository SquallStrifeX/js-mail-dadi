
let button = document.querySelector('button');

email_array = ["jonsnow@gmail.com", "kratos@gmail.com", "ellie@gmail.com", "christianpellino@gmail.com", "gokusupersayan@gmail.com"]

button.addEventListener(`click`, function() {
    let email_click = document.getElementById("email").value;
    console.log(email_click);

    for (let i=0; i<email_array.length; i++){

        if (email_click === email_array[i]){
            document.getElementById("risultato").innerHTML = "<p>Congratulazioni, la tua email si trova nel nostro database, hai ottenuto la possibilità di effettuare un tentativo per vincere il grandioso premio.</p>";
            minigame = true;
            break;
            
        }else if (email_click !== email_array[i]){
            console.log("nope")
            document.getElementById("risultato").innerHTML = "<p>Siamo Spiacenti, la tua email non si trova nel nostro database, per registrarla accumula i punti sul nostro sito.</p>"
            minigame = false
        }
    
}
    if (minigame === true) {
        document.getElementById("minigame").innerHTML = ` <button type="button" class="btn btn-warning button button-minigame">Premi per sfidare la sorte</button>`
        let button_minigame = document.querySelector('.button-minigame');
        button_minigame.addEventListener(`click`, function(){
            let number_pg = Math.floor(Math.random() * 6 ) + 1;
            console.log(number_pg)
            let number_pc = Math.floor(Math.random() * 6 ) + 1;
            console.log(number_pc)
            
            if (number_pg > number_pc){
                document.getElementById("risultato-minigame").innerHTML = "Congratulazioni, hai vinto il nostro voucher da 1.000.000.000 di €"

            }

            else if (number_pg === number_pc){
                document.getElementById("risultato-minigame").innerHTML = "Pareggio, riprova"

            }
            
            else{
                document.getElementById("risultato-minigame").innerHTML = "Mi dispiace, non ti sei aggiudicato il premio che ti avrebbe cambiato la tua vita"

            }
        })
    }

})