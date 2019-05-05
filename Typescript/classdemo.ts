class OurFirstClassInTS{
    regID: number;
    firstName: string;
    lastName: string;

    constructor(){
        console.log("always called first");
    }
    getLastName(){
        return this.lastName;
    }

    setLastName(sName: string){
        this.lastName = sName;
    }
}

//Creating an object of class: OurFirstClassInTS
let obj: OurFirstClassInTS = new OurFirstClassInTS();
obj.regID = 6894;
obj.firstName = 'Mayank';
obj.setLastName('Agarwal');

//Access the property values here
console.log(`Welcome ${obj.firstName} ${obj.getLastName()}`);
