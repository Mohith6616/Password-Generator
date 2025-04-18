function generate() {
    const length = parseInt(document.getElementById('length').value, 10);
    const capital = document.getElementById('capital').checked;
    const symbol = document.getElementById('symbol').checked;
    const number = document.getElementById('number').checked;
    const small = document.getElementById('small').checked;
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const integers = '1234567890';
    const symbols = '!@#$%^&*<>?/+-=_';
    let characters = '';
    let password = '';
    if (small) {
        characters += lower;
        password += lower[Math.floor(Math.random() * lower.length)];
    }
    if (capital) {
        characters += upper;
        password += upper[Math.floor(Math.random() * upper.length)];
    }
    if (number) {
        characters += integers;
        password += integers[Math.floor(Math.random() * integers.length)];
    }
    if (symbol) {
        characters += symbols;
        password += symbols[Math.floor(Math.random() * symbols.length)];
    }
    if (characters === '') {
        alert('Please select at least one character type for the password.');
        return;
    }
    for (let i = password.length; i < length; i++) {
        const rand = Math.floor(Math.random() * characters.length);
        password += characters[rand];
    }
    password = password.split('').sort(() => 0.5 - Math.random()).join('');

    document.getElementById('pass').value = password;
}

function copyPassword() {
    const passwordField = document.getElementById('pass');
    passwordField.select();

    try {
        const successful = document.execCommand('copy');
        if (successful) {
            alert('Password copied to clipboard!');
        } else {
            alert('Failed to copy password.');
        }
    } catch (err) {
        console.error('Oops, unable to copy', err);
    }
}
