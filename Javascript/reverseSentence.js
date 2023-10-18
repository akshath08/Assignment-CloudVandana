function reverseWordsInSentence(sentence) {
    const words = sentence.split(' ');
    const reversedWords = words.map(word => reverseWord(word));
    const reversedSentence = reversedWords.join(' ');
    return reversedSentence;
}

function reverseWord(word) {
    return word.split('').reverse().join('');
}

const inputSentence = prompt("Enter a sentence:");
if (inputSentence !== null) {
    const reversedSentence = reverseWordsInSentence(inputSentence);
    alert("Reversed Sentence: " + reversedSentence);
}
