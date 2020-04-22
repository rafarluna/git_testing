function saveUser(userName, password, rol){
    console.log('User Saved', userName, password, rol);
}


function makeCreateUser(rol) {
    return function(userName, password) {
        saveUser(userName, password, rol);
    };
}


function makeCreateUserMultipleFunctions(rol) {
    return function(userName) {
        return function(password) {
            saveUser(userName, password, rol);
        };
    };
}

var createAdmin = makeCreateUser('Admin');
var createUser = makeCreateUser('User');
createAdmin('RAFA', '1234');
createUser('USER', '0000');

var createAdminMultipleFuctions = makeCreateUserMultipleFunctions('Admin');
createAdminMultipleFuctions('RAFA')('12345');
makeCreateUserMultipleFunctions('USER')('USER-RAFA')('0000000'); //??


