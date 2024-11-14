let currentQuestion = 0;
const questions = document.querySelectorAll('.question-container');

function showQuestion(index) {
    questions.forEach((q, i) => {
        q.classList.add('hidden');
        if (i === index) {
            q.classList.remove('hidden');
            setTimeout(() => q.style.opacity = 1, 50);
        }
    });
}

document.querySelectorAll('.options button').forEach((button, index) => {
    button.addEventListener('click', () => {
        if (currentQuestion < questions.length - 1) {
            currentQuestion++;
            showQuestion(currentQuestion);
        }
    });
});

showQuestion(currentQuestion);