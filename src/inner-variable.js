function padre() {
    //var cerveza = 'Heineken';
    function hijo() {
        const myCerveza = 'Corona';
        console.log('funcion hijo', cerveza, myCerveza);
    }
    cerveza = 'tecate';
    return hijo;
}

const hijo = padre();
hijo();
console.log('desde inicio -> variable que se usa dentro de una sub function:', cerveza);