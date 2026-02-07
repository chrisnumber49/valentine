function showDate() {
    const inputDate = document.getElementById("dateInput").value;

    if (!inputDate) {
        alert("You haven't chosen the date yet :( ");
        document.getElementById("dateMessage").innerHTML = "You haven't chosen the date yet :( ";
    } else {
        const date = new Date(inputDate);

        // Format the date
        const options = {
            year: 'numeric',
            month: 'short',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        };
        
        const formattedDate = date.toLocaleString('en-GB', options).replace(',', '');
    
        // Display the formatted date
        const message = `Hehehe! see you on: ${formattedDate} Paulinetje! 💖`;
        document.getElementById("dateMessage").innerHTML = message;
        document.getElementById("ask").style.display = "none";
        document.getElementById("dateDisplay").style.display = "block";

        const images = ["date1.jpg", "date2.jpg", "date3.jpg", "date4.jpg", "date5.jpg"];
        const slideImg = document.getElementById("slideshowImage");
        let currentIndex = 0;

        setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length; 
            
            slideImg.style.opacity = 0;

            setTimeout(() => {
                slideImg.src = images[currentIndex];
                slideImg.style.opacity = 1;
            }, 500);
        }, 2000);
    }
}