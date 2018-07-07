//timer
var number = 31;
var intervalId;

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
    number --;
    $("#show-timer").html("<h2>"+ "Time left: " + number + "</h2>");

    if (number === 0) {
        stop();
        console.log("time up")
    }
}

function stop() {
    clearInterval(intervalId);
}

run();


//Questions - Jquery
var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");
var submitButton = document.getElementById("submit");
var myQuestions = [
    {
        question: "Which of the following was about a group of kids who loved X-treme sports?",
        answers: {
            a: "X-Kids",
            b: "Rocket Power",
            c: "Gnarly Charlie",
            d: "Recess",
        },
        correctAnswer: "b"
    },
    {
        question: "Which of these shows was about an Austrailian-immigrant wallaby?",
        answers: {
            a: "Arthur",
            b: "Ren and Stimpy",
            c: "Adventure Time",
            d: "Rocko's Modern Life",
        },
        correctAnswer: "d"   
    },
    {
        question: "Which character was known for his catch phrase 'Woah Mama!'?",
        answers: {
            a: "Johnny Bravo",
            b: "Shaggy",
            c: "SpongeBob",
            d: "Eddy",
        },
        correctAnswer: "a"   
    },
    {
        question: "Who was responsible for defeating the evil Mojo Jojo?",
        answers: {
            a: "Scooby Doo",
            b: "Cat-Dog",
            c: "The Teen Titans",
            d: "Powerpuff Girls",
        },
        correctAnswer: "d"   
    },
    {
        question: "Which character was super in love with Miss Mayonnaise?",
        answers: {
            a: "Skeeter Valentine",
            b: "Roger Klots",
            c: "Doug Funnie",
            d: "Porkchop",
        },
        correctAnswer: "c"   
    },
    {
        question: "One of these little rodents tried consistently to take over the world...",
        answers: {
            a: "Pinky",
            b: "Brain",
            c: "Mickey",
            d: "Hammy",
        },
        correctAnswer: "b"   
    },
    {
        question: "Which little pup lived in a scary world with his owners Muriel and Eustace?",
        answers: {
            a: "Pluto",
            b: "Scooby",
            c: "Brian",
            d: "Courage",
        },
        correctAnswer: "d"   
    },
    {
        question: "Mermaid Man and Barnacle Boy appear in which cartoon series?",
        answers: {
            a: "SpongeBob",
            b: "Fairly Odd-Parents",
            c: "Animaniacs",
            d: "Rugrats",
        },
        correctAnswer: "a"   
    },
    {
        question: "Which throwback show from the 1960s was actually based years in the future?",
        answers: {
            a: "The Flintstones",
            b: "The Jetsons",
            c: "Scooby Doo",
            d: "Super Friends",
        },
        correctAnswer: "b"   
    },
    {
        question: "Which of the following is the longest-running cartoon in US History?",
        answers: {
            a: "Rugrats",
            b: "South Park",
            c: "Arthur",
            d: "The Simpsons",
        },
        correctAnswer: "c"   
    }
]

//Function for making the quiz

makeQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function makeQuiz(questions, quizContainer, resultsContainer, submitButton){

    function showQuestions(questions, quizContainer){
        var output = [];
        var answers;

        
        for(var i=0; i<questions.length; i++){
            answers = [];
            for(letter in questions[i].answers){

    //RADIO BUTTONS
        answers.push(
            '<label>'
                + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                + letter + ': '
                + questions[i].answers[letter]
            + '</label>'
        );
        }
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }

       //OUTPUTTING TO HTML
        quizContainer.innerHTML = output.join('');
    }


    //RESULTS
    function showResults(questions, quizContainer, resultsContainer){
        
        var userAnswer = "";
        var numCorrect = 0;
        var answerContainers = quizContainer.querySelectorAll('.answers');

    //For Questions
        for(var i=0; i<questions.length; i++){

        // For Correct Answers
        userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
        if(userAnswer === questions[i].correctAnswer){
            numCorrect++;
            
            }
        }

        //Correct # 
        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }

    //SHOW QUESTIONS ON LOAD
    showQuestions(questions, quizContainer);
    
    // Results
    submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
    }

}


//restart