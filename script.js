// Function to check if a given string is a palindrome
function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lower case
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    // Compare the cleaned string with its reversed version
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

// Function to generate random palindromes
function generateRandomPalindrome() {
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const length = Math.floor(Math.random() * 5) + 5; // Random length between 5 and 10
    let half = '';

    for (let i = 0; i < length; i++) {
        half += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    // Create the full palindrome
    const palindrome = half + half.split('').reverse().join('');
    return palindrome;
}

// Function to generate three random palindromes
function generatePalindromes() {
    const palindromes = [];
    for (let i = 0; i < 3; i++) {
        palindromes.push(generateRandomPalindrome());
    }
    return palindromes;
}

// Function to handle the click event of the check button
function checkPalindrome() {
    // Get the input value
    const input = document.getElementById('text-input').value;
    // Get the result element
    const resultElement = document.getElementById('result');
    // Get the generated palindromes element
    const generatedElement = document.getElementById('generated-palindromes');

    // Check if the input is empty
    if (input === '') {
        alert('Please input a value');
        return;
    }

    // Check if the input is a palindrome
    const result = isPalindrome(input) ? 'is a palindrome' : 'is not a palindrome';
    // Display the result
    resultElement.textContent = `${input} ${result}`;

    // Generate and display random palindromes
    const randomPalindromes = generatePalindromes();
    generatedElement.textContent = `Random Palindromes: ${randomPalindromes.join(', ')}`;
}

// Add event listener to the check button
document.getElementById('check-btn').addEventListener('click', checkPalindrome);

// Add event listener for the "keydown" event on the input field
document.getElementById('text-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        checkPalindrome();
    }
});
