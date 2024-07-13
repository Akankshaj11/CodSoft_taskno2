function enterValue(value) {
    const screen = document.querySelector('.screen');
    
    if (screen.textContent === '0' || screen.textContent === 'Error') {
        screen.textContent = '';
    }

    if (value === 'AC') {
        screen.textContent = '0';
    } else if (value === '=') {
        try {
            screen.textContent = eval(screen.textContent);
        } catch {
            screen.textContent = 'Error';
        }
    } else {
        screen.textContent += value;
    }
}

function clearScreen() {
    const screen = document.querySelector('.screen');
    screen.textContent = '0';
}
