class Person{
    constructor(name, lastName, address){
        this.name = name;
        this.lastName = lastName;
        this.address = address;
    }


}

const lambros = new Person("Lambros", "Hatzini",{
    city: "Retziki",
    street:null,
} );

function personalDetails(person){
    return (person?.address?.street?.street.streetName);
}

console.log(personalDetails(lambros));

