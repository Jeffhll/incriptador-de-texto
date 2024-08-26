document.addEventListener('DOMContentLoaded', () => {
    const inputText = document.getElementById('input-text');
    const outputText = document.getElementById('output-text');
    const encryptBtn = document.getElementById('encrypt-btn');
    const decryptBtn = document.getElementById('decrypt-btn');
    const copyBtn = document.getElementById('copy-btn');
    const resultContainer = document.getElementById('result-container');
    const defaultContainer = document.getElementById('default-container');

    const encryptionRules = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    function encrypt(text) {
        return text.split('').map(char => encryptionRules[char] || char).join('');
    }

    function decrypt(text) {
        let decrypted = text;
        Object.entries(encryptionRules).reverse().forEach(([key, value]) => {
            decrypted = decrypted.split(value).join(key);
        });
        return decrypted;
    }

    function showResult() {
        defaultContainer.style.display = 'none';
        resultContainer.style.display = 'block';
    }

    encryptBtn.addEventListener('click', () => {
        const text = inputText.value.toLowerCase();
        outputText.value = encrypt(text);
        showResult();
    });

    decryptBtn.addEventListener('click', () => {
        const text = inputText.value.toLowerCase();
        outputText.value = decrypt(text);
        showResult();
    });

    copyBtn.addEventListener('click', () => {
        outputText.select();
        document.execCommand('copy');
        alert('Texto copiado al portapapeles');
    });
});