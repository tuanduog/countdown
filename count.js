document.addEventListener('DOMContentLoaded', () => {
    const currentElement = document.getElementById('current');

    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1; 
    const year = currentDate.getFullYear();

    currentElement.textContent = `Hôm nay là: ${day}/${month}/${year}`;

    const need = document.getElementById('need');
    const targetDate = new Date('2025-01-29T00:00:00');

    function updateCountdown() {
        const now = new Date();
        const timeDif = targetDate - now;

        if (timeDif <= 0) {
            document.getElementById('need').textContent = "Hết thời gian!";
            document.getElementById('time').textContent = "";
            clearInterval(timer); 
            return;
        }

        const daysRemaining = Math.floor(timeDif / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDif / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeDif / (1000 * 60)) % 60);
        const seconds = Math.floor((timeDif / 1000) % 60);

        document.getElementById('need').textContent = `Còn ${daysRemaining} ngày`;
        document.getElementById('time').textContent = `Còn ${hours} giờ ${minutes} phút ${seconds} giây ➠ end day`;
    }
 
    const timer = setInterval(updateCountdown, 1000);
    updateCountdown();
    document.addEventListener('click', () => {
        const audio = document.querySelector('audio');
        audio.play().catch(error => console.error('Audio playback failed:', error));
    });
    


    // húp source :)
    function generateFireworks(event) {
        const numberOfParticles = 50;
        const colors = ['#ff6347', '#3cb371', '#1e90ff', '#ffd700', '#ff1493'];

  
        for (let i = 0; i < numberOfParticles; i++) {
            const particle = document.createElement('div');
            particle.classList.add('firework');
            document.body.appendChild(particle);

            const xPos = event.clientX + (Math.random() - 0.5) * 300;
            const yPos = event.clientY + (Math.random() - 0.5) * 300;
            particle.style.left = `${xPos}px`;
            particle.style.top = `${yPos}px`;

            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            particle.style.backgroundColor = randomColor;

            const duration = Math.random() * 0.5 + 0.5;
            particle.style.animationDuration = `${duration}s`;

            setTimeout(() => {
                particle.remove();
            }, duration * 1000);
        }

        const explosion = document.createElement('div');
        explosion.classList.add('firework-explosion');
        explosion.style.left = `${event.clientX - 50}px`;
        explosion.style.top = `${event.clientY - 50}px`;
        document.body.appendChild(explosion);


        setTimeout(() => {
            explosion.remove();
        }, 1000);
    }

 
    document.body.addEventListener('click', generateFireworks);
    
    
})