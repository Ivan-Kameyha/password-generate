const generatePassword = (base, length) => {
    let password = "";
    for (let x = 0; x < length; x++) {
        let random = Math.floor(Math.random() * base.length);
        password += base.charAt(random);
    }
    return password;
};

const generate = () => {
    let length = parseInt(document.getElementById("inputLength").value);

    let base = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "$/()=?¡¿+{}-.<>_!#@";

    if (document.getElementById("checkbox1").checked) base += numbers;

    if (document.getElementById("checkbox2").checked) base += symbols;

    document.getElementById("generatedPassword").innerText = generatePassword(base, length);
};

window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btnGenerate").addEventListener("click", () => {
        generate();
    });
});