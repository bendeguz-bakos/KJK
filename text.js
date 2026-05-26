const textElement = document.getElementById("text");

const originalText = textElement.textContent;

textElement.textContent = "";

let index = 0;

function typeWriter() {

    if (index < originalText.length) {

        textElement.textContent += originalText.charAt(index);

        index++;

        setTimeout(typeWriter, 80);
    }
}

typeWriter();