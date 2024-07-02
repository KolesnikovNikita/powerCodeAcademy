function sendFormData() {
    const form = document.getElementById('landing-form');

    var telInput = document.querySelector('#phone');
    const phoneInput = window.intlTelInput(telInput, {
        initialCountry: 'ua', // Set the initial country to Ukraine
        separateDialCode: true,
        preferredCountries: ['us', 'gb', 'in', 'au'], // Specify the preferred countries
        utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js',
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const botToken = '7022286275:AAF_I8kysNtX27nnRowbndIHCNwYGDLVGEU';
        const chatId = '-6163382681';

        const usernameInput = form.elements['username'];
        const emailInput = form.elements['email'];
        const phoneNumberInput = phoneInput.getNumber();

        const payload = {
            text: [
                `<b>Имя: </b>${usernameInput.value}`,
                `<b>Почта: </b>${emailInput.value}`,
                `<b>Телефон: </b>${phoneNumberInput}`,
            ].join('\n'),
            chat_id: `${chatId}`,
            parse_mode: 'HTML',
        };

        fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        })
            .then((response) => {
                if (!response.ok) {
                    thrownewError('Network response was not ok' + response.statusText);
                }
                return response.json();
            })
            .then((data) => {
                console.log('Success:', data);
            })
            .catch((error) => console.error('Error:', error));
    });
}

sendFormData();
