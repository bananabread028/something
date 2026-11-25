/* PAGE NAVIGATION */

function go(id) {

    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    const selectedPage = document.getElementById(id);

    if (selectedPage) {
        selectedPage.classList.add('active');
    }

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    // Hide previously opened descriptions
    document.querySelectorAll('.description').forEach(item => {
        item.classList.remove('show');
    });

    // Clear previous answer
    document.getElementById('answer').innerHTML = '';
}


/* FLOWER AND STUFFED ANIMAL DESCRIPTIONS */

function showDescription(id) {

    document.querySelectorAll('.description').forEach(item => {
        item.classList.remove('show');
    });

    const selected = document.getElementById(id);

    if (selected) {

        selected.classList.add('show');

        setTimeout(() => {

            selected.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest'
            });

        }, 100);
    }
}


/* FINAL QUESTION */

function answer(choice) {

    const output = document.getElementById('answer');

    if (choice === 'yes') {

        output.innerHTML =
            "Yay! Here's to more beautiful memories! ♡";

    } else if (choice === 'ofcourse') {

        output.innerHTML =
            "That's wonderful! Looking forward to it! 🌷";

    } else {

        output.innerHTML =
            "No pressure! I'm still wishing you all the best. ♡";

    }

    setTimeout(() => {
        go('ending');
    }, 2500);
}


/* FLOATING HEARTS AND FLOWERS */

const decorations = [
    '♡',
    '🌸',
    '💕',
    '✿',
    '🌷',
    '🦋'
];

function createFloatingDecoration() {

    const container =
        document.getElementById('floating-container');

    const decoration = document.createElement('div');

    decoration.className = 'floating';

    decoration.innerHTML =
        decorations[
            Math.floor(Math.random() * decorations.length)
        ];

    decoration.style.left =
        Math.random() * 100 + 'vw';

    decoration.style.fontSize =
        (15 + Math.random() * 20) + 'px';

    decoration.style.animationDuration =
        (7 + Math.random() * 😎 + 's';

    container.appendChild(decoration);

    setTimeout(() => {
        decoration.remove();
    }, 15000);
}


/* START FLOATING ANIMATIONS */

setInterval(createFloatingDecoration, 700);
