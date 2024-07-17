document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('colorButton');
    const historyList = document.getElementById('historyList');

    button.addEventListener('click', changeBackgroundColor);

    function changeBackgroundColor() {
        const newColor = getRandomColor();
        document.body.style.backgroundColor = newColor;
        addColorToHistory(newColor);
    }

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function addColorToHistory(color) {
        const listItem = document.createElement('li');
        listItem.textContent = color;
        historyList.appendChild(listItem);
    }
});