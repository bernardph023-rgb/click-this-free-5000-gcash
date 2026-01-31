const CORRECT_PASSCODE = "112107"; // Change this to your desired passcode

// Create floating hearts in background
function createFloatingHearts() {
    const heartBg = document.getElementById('heartBg');
    const hearts = ['❤️', '💕', '💗', '💖'];
    
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = Math.random() * 100 + '%';
        heart.style.animationDuration = (4 + Math.random() * 4) + 's';
        heart.style.animationDelay = Math.random() * 2 + 's';
        heartBg.appendChild(heart);
    }
}

// Check passcode
function checkPasscode() {
    const input = document.getElementById('passcodeInput');
    const errorMessage = document.getElementById('errorMessage');
    
    if (input.value === CORRECT_PASSCODE) {
        document.getElementById('loginContainer').style.display = 'none';
        document.getElementById('questionContainer').classList.remove('hidden');
        createFloatingHearts();
    } else {
        errorMessage.style.display = 'block';
        input.value = '';
        input.focus();
        setTimeout(() => {
            errorMessage.style.display = 'none';
        }, 2000);
    }
}

// Answer Yes to Valentine question
function answerYes() {
    document.getElementById('questionContainer').classList.add('hidden');
    document.getElementById('mainContent').classList.remove('hidden');
    createHeartRain();
    
    // Play music when they say yes
    const audio = document.getElementById('bgMusic');
    if (audio) {
        audio.volume = 0.5;
        audio.play().catch(e => console.log('Audio play failed:', e));
    }
}

// Allow Enter key to submit passcode
document.addEventListener('DOMContentLoaded', function() {
    const passcodeInput = document.getElementById('passcodeInput');
    passcodeInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            checkPasscode();
        }
    });
    passcodeInput.focus();
});

// Toggle envelope open/close
function toggleEnvelope() {
    const envelope = document.getElementById('envelope');
    const letter = document.getElementById('letter');
    const openHint = document.getElementById('openHint');
    envelope.classList.toggle('open');
    letter.classList.toggle('open');
    
    if (envelope.classList.contains('open')) {
        openHint.style.display = 'none';
        createHeartRain();
    }
}

// Create heart rain effect
function createHeartRain() {
    const hearts = ['❤️', '💕', '💗', '💖', '💝'];
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'heart-fall';
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.animationDelay = Math.random() * 0.5 + 's';
            document.body.appendChild(heart);
            
            setTimeout(() => heart.remove(), 3000);
        }, i * 100);
    }
}

// Initialize
createFloatingHearts();

