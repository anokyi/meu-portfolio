// Menu de Resposta //

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});

// Modo Claro/Escuro //

const themeButton = document.getElementById("theme-button");

themeButton.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {

        themeButton.textContent = "𖤓";

    } else {

        themeButton.textContent = "☾";

    }

});

// Validação do Formulário //

const form = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

// Envio da Mensagem //

form.addEventListener("submit", function(event) {

    event.preventDefault();

    // Campos //

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    // Verificação de Email //

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Verificação dos Campos //

    if (nome === "" || email === "" || mensagem === "") {

        formMessage.textContent = "Preencha todas as informações, por favor!!";
        formMessage.style.color = "red";

        return;

    }

    if (!emailValido.test(email)) {

        formMessage.textContent = "Digite um email válido, por favor!";
        formMessage.style.color = "red";

        return;

    }

    // Tudo Correto //

    formMessage.textContent = "Mensagem enviada com sucesso!! ◛";
    formMessage.style.color = "lightgreen";

    form.reset();

});