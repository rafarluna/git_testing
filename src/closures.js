function saveUser(userName, password, rol){
    console.log('User Save', userName, password, rol);
}


function getClosure() {
    var count = 0;
    return function() {
        count++;
        return count;
    };
}

var closure = getClosure();
console.log(closure()); //?
console.log(closure()); //?
console.log(closure()); //?