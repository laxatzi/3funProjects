class Person{
    constructor(firstName, lastName, address){
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
    }

}


function personStreet(person) {
    console.log(person?.address?.street?.streetName);
}

const lambros = new Person('Lambros', 'Hatzini',{
    street: undefined,
    city: 'Retziki',
});

personStreet(lambros);

