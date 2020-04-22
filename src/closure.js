function padre() {
    const cerveza = 'Heineken';
    return function hijo() {
        console.log(cerveza);
    }
}

const hijo = padre();
hijo();