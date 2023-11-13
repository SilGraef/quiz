$(document).ready(function() {
    $('#quiz-form').submit(function(event) {
        event.preventDefault(); 

        
        var selectedAnswers = {};
        $('input[type=radio]:checked').each(function() {
            var questionNumber = $(this).parent().attr('id').substring('question'.length);
            selectedAnswers[questionNumber] = $(this).val();
        });

        // must answer all 4
        if (Object.keys(selectedAnswers).length !== 4) {
            alert('Please answer all questions before submitting.');
            return;
        }

        // validate answers, define feedback
        var correctAnswers = {
            1: 'Japan',
            2: 'Nile',
            3: 'Mount Everest',
            4: 'Pacific',
        };

        var numCorrect = 0;
        var feedbackMessage = '';
        for (var questionNumber in selectedAnswers) {
            if (selectedAnswers[questionNumber] === correctAnswers[questionNumber]) {
                numCorrect++;
                feedbackMessage += '<div class="correct-feedback">Question ' + questionNumber + ': Correct!</div>';
            } else {
                feedbackMessage += '<div class="incorrect-feedback">Question ' + questionNumber + ': Incorrect. The correct answer is ' + correctAnswers[questionNumber] + '.</div>';
            }
        }

        // almost broke my brain, but finally displays 
        $('#feedbackMessage').html(feedbackMessage);
    });
});