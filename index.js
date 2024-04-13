const button = document.getElementById("button")

const scoreDiv = document.getElementById("hidden");

const totalcorrect = document.getElementById("totalcorrect");

button.addEventListener("click", function(event) {
    event.preventDefault();
    
    correct_answers = 0
    var answersCorrect = document.getElementsByClassName("correct")
    for (i = 0; i < answersCorrect.length; i++) {
        if (answersCorrect[i].checked) {
            correct_answers ++
        }
    }

    totalcorrect.textContent = `${correct_answers} answers correct`
    
});