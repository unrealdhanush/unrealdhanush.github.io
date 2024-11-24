jQuery(document).ready(function($){
    var words = [
        'Machine Learning Engineer',
        'Artificial Intelligence Engineer',
        'Computer Vision Engineer',
        'Data Scientist',
        'Data Analyst'
    ];

    var typingSpeed = 100;
    var deletingSpeed = 50;
    var pauseBetweenWords = 1000;
    var currentWordIndex = 0;
    var currentCharIndex = 0;
    var isDeleting = false;

    var $headline = $('.cd-headline');
    var $wordWrapper = $headline.find('.cd-words-wrapper');

    // Initialize the animation
    function type() {
        var currentWord = words[currentWordIndex];
        var displayedText = currentWord.substring(0, currentCharIndex);

        // Update the text
        $wordWrapper.text(displayedText);

        if (!isDeleting) {
            if (currentCharIndex < currentWord.length) {
                currentCharIndex++;
                setTimeout(type, typingSpeed);
            } else {

                isDeleting = true;
                setTimeout(type, pauseBetweenWords);
            }
        } else {
            if (currentCharIndex > 0) {
                currentCharIndex--;
                setTimeout(type, deletingSpeed);
            } else {
                isDeleting = false;
                currentWordIndex++;
                if (currentWordIndex >= words.length) {
                    currentWordIndex = 0;
                }
                setTimeout(type, 500);
            }
        }
    }

    type();
});
