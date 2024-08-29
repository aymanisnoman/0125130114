document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('password');
    const checkbox = document.getElementById('agree');
    const submitButton = document.getElementById('submitButton');

    const validPasswords = ['ayman', 'noman'];

    function checkForm() {
        const inputPassword = passwordInput.value.toLowerCase();

        const isPasswordValid = validPasswords.includes(inputPassword);

        if (checkbox.checked && isPasswordValid) {
            submitButton.disabled = false;
        } else {
            submitButton.disabled = true;
        }
    }

    passwordInput.addEventListener('input', checkForm);
    checkbox.addEventListener('change', checkForm);

    document.getElementById('passwordForm').addEventListener('submit', (e) => {
        e.preventDefault();
        if (checkbox.checked && validPasswords.includes(passwordInput.value.toLowerCase())) {
            window.location.href = 'main.html';
        } else {
            alert('Incorrect password or terms not agreed.');
        }
    });
});
