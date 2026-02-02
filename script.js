document.addEventListener("DOMContentLoaded", function () { 
    const noButton = document.getElementById("no");
    const buttonContainer = document.getElementById("button-container");

    noButton.addEventListener("mouseover", function (event) {
        noButton.style.position = "absolute";

        const containerRect = buttonContainer.getBoundingClientRect();
        const buttonWidth = noButton.clientWidth;
        const buttonHeight = noButton.clientHeight;

        const mouseX = event.clientX - containerRect.left;
        const mouseY = event.clientY - containerRect.top;

        let x, y;
        const safeMargin = 150;
        let attempts = 0;

        do {
            x = Math.random() * (containerRect.width - buttonWidth);
            y = Math.random() * (containerRect.height - buttonHeight);
            
            const distance = Math.sqrt(
                Math.pow(x + buttonWidth / 2 - mouseX, 2) + 
                Math.pow(y + buttonHeight / 2 - mouseY, 2)
            );

            if (distance > safeMargin || attempts > 20) break;
            attempts++;
        } while (true);

        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    });

    document.getElementById("yes").addEventListener("click", function () {
        window.location.href = "date.html";
    });
});
