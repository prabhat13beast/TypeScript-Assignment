var OurFirstClassInTS = /** @class */ (function () {
    function OurFirstClassInTS() {
        console.log("always called first");
    }
    OurFirstClassInTS.prototype.getLastName = function () {
        return this.lastName;
    };
    OurFirstClassInTS.prototype.setLastName = function (sName) {
        this.lastName = sName;
    };
    return OurFirstClassInTS;
}());
//Creating an object of class: OurFirstClassInTS
var obj = new OurFirstClassInTS();
obj.regID = 6894;
obj.firstName = 'Mayank';
obj.setLastName('Agarwal');
//Access the property values here
console.log("Welcome " + obj.firstName + " " + obj.getLastName());
