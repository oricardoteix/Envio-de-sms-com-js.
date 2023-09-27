document.addEventListener("DOMContentLoaded", function () {
    const authForm = document.getElementById("authForm");
    const phoneNumberInput = document.getElementById("phoneNumber");
    const sendCodeButton = document.getElementById("sendCode");
    const verificationCodeInput = document.getElementById("verificationCode");
    const verifyCodeButton = document.getElementById("verifyCode");
    const messageDiv = document.getElementById("message");

    // Simulação do envio de código por SMS (substitua com uma implementação real)
    function sendSMSCode() {
        const phoneNumber = phoneNumberInput.value;
        // Aqui você deve enviar o código por SMS usando um serviço real
        // e lidar com a resposta, que geralmente envolve uma chamada AJAX.
        // Neste exemplo, vamos apenas gerar um código aleatório.
        const randomCode = Math.floor(1000 + Math.random() * 9000);
        return Promise.resolve(randomCode);
    }

    // Lidar com o envio do código por SMS
    sendCodeButton.addEventListener("click", function () {
        sendSMSCode()
            .then((code) => {
                messageDiv.textContent = `Código de verificação enviado para ${phoneNumberInput.value}`;
            })
            .catch((error) => {
                messageDiv.textContent = "Erro ao enviar o código. Tente novamente mais tarde.";
            });
    });

    // Lidar com a verificação do código
    verifyCodeButton.addEventListener("click", function () {
        const enteredCode = verificationCodeInput.value;
        const expectedCode = "1234"; // Substitua com o código correto
        if (enteredCode === expectedCode) {
            messageDiv.textContent = "Código de verificação correto. Autenticado com sucesso!";
        } else {
            messageDiv.textContent = "Código de verificação incorreto. Tente novamente.";
        }
    });
});
