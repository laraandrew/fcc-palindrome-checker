// Function to check if a given string is a palindrome
function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lower case
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    // Compare the cleaned string with its reversed version
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

// Function to handle the click event of the check button
function checkPalindrome() {
    // Get the input value
    const input = document.getElementById('text-input').value;
    // Get the result element
    const resultElement = document.getElementById('result');

    // Check if the input is empty
    if (input === '') {
        alert('Please input a value');
        return;
    }

    // Check if the input is a palindrome
    const result = isPalindrome(input) ? 'is a palindrome' : 'is not a palindrome';
    // Display the result
    resultElement.textContent = `${input} ${result}`;
}

// Add event listener to the check button
document.getElementById('check-btn').addEventListener('click', checkPalindrome);

// Add event listener for the "keydown" event on the input field
document.getElementById('text-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        checkPalindrome();
    }
});
