console.log('hola mundo');

var setCompany = function setCompany(company, optionalParameter) {
    return {
        name: company.clientName,
        theOptional : optionalParameter
    };
}

var setCompanyCurrying = function setCompanyCurrying(optionalParameter) {
    return function setCommon(company) {
        return {
            name: company.clientName,
            theOptional : optionalParameter
        }
    }
}

var miFuncion = function miFunction(){

    var companies = [
        { displayId : '001', clientName : 'clientName 01' },
        { displayId : '002', clientName : 'clientName 02' },
        { displayId : '003', clientName : 'clientName 03' },
        { displayId : '004', clientName : 'clientName 04' },
        { displayId : '005', clientName : 'clientName 05' },
    ];

    // NOT WORKING BECAUSE IT PASSES ALL PARAMETER FOR map AND THEN IT PASSES INDEX (OF THE MAP)AS SECOND PARAMETER
    var compsNormal = companies.map(setCompany); //??
    console.log('normal', compsNormal);

    /*
        IT WORKS !!!
        BECAUSE WE RE USING Currying strategy to set first the variable
        and then the curry function returns another function (function that is actually used)
        to format the object !
    */
    var compsCurrying = companies.map(setCompanyCurrying('CURRY FUNCTION')); //??
    console.log('currying', compsCurrying);

    // NOT WORKING BECUASE, IT PASSES ALL PARAMETER NEEDED IN MAP (LIKE OBJECT, INDEX, ETC)
    var compsLodash = _(companies)
                    .map(setCompany(true))
                    .value();
    console.log('lodash', compsLodash);

    // FUNCTION NOT WORKING WITH curryRight, becuase it passes all parameters
    var curryFunction = _.curryRight(setCompany)(true);
    var compsCurryRightLodash = _(companies)
                    .map(curryFunction)
                    .value();
    console.table('curryRightFunctionLodash', compsCurryRightLodash);

    /*
        FUNCTION IT WORKS
        USING ***ARY*** and ***CURRY*** IN MAP, IT LIMITS THE NUMBER OF THE PARAMETERS TO PASS, ALL OTHER PARAMETERS ARE IGNORED
    */
    var curryFunction = _.curryRight(setCompany)('ARY WITH CURRY - LODASH');
    var compsAryLodash = _(companies)
                    .map(_.ary(curryFunction, 1))
                    .value();

    console.table('compsAryLodash', compsAryLodash);


    /*
        FUNCTION IT WORKS
        USING ***UNARY*** and ***CURRY*** IN MAP, IT LIMITS THE NUMBER OF THE PARAMETERS TO PASS, ALL OTHER PARAMETERS ARE IGNORED
        UNARY JUST USES ONE PARAMETER
    */
    var curryFunction = _.curryRight(setCompany)('UNARY WITH CURRY - LODASH');
    var compsUnaryLodash = _(companies)
                    .map(_.unary(curryFunction))
                    .value();

    console.table('compsUnaryLodash', compsUnaryLodash);


}

miFuncion();