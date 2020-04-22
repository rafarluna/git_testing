var num = 1;

console.log(num);


var setName = function setName(name) {
    return function setLastName(lastName) {
        lastName = lastName || '';
        return function setSurName(surName) {
            surName = surName || '';
            return function getFullName() {
                return name + ' ' + lastName + ' ' + surName;
            };
        };
    };
};


var name = setName('RAFA')('RAMIREZ')('LUNA')(); //?
name


