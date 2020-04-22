function padre() {
    if(true) {
        const cerveza = 'Heineken';
        return function hijo() {
            console.log('funcion hijo', cerveza);
        };
    }
    // return function hijo() {
    //     console.log('funcion hijo', cerveza);
    // };
}

const hijo = padre();
hijo();