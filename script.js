// heart icon feature
const cards = document.getElementsByClassName('heart-card');
for (const card of cards) {
    card.addEventListener('click', function () {
        const iconValue = parseInt(document.getElementById('heart-nav').innerText);
        const newIconValue = iconValue + 1;
        document.getElementById('heart-nav').innerText = newIconValue;
    });
}

