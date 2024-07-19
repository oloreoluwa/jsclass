let score = 76; // Example score

if (score < 0 || score > 100) {
    console.log("Invalid score. Please enter a score between 0 and 100.");
} else if (score >= 0 && score <= 34) {
    console.log(`Your score is ${score} and this is Fail.`);
} else if (score >= 35 && score <= 44) {
    console.log(`Your score is ${score} and this is Pass.`);
} else if (score >= 45 && score <= 49) {
    console.log(`Your score is ${score} and this is Fair.`);
} else if (score >= 50 && score <= 59) {
    console.log(`Your score is ${score} and this is Good.`);
} else if (score >= 60 && score <= 69) {
    console.log(`Your score is ${score} and this is Very Good.`);
} else if (score >= 70 && score <= 100) {
    console.log(`Your score is ${score} and this is Excellence.`);
}
