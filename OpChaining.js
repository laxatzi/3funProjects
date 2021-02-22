'use strict';
{
    class Person {
        constructor(firstName, lastName, address){
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
    }

    print(){
        console.log(this);
    }

}

    function printPersonStreet(person){
        console.log(person?.address?.street);
    }

    const lambros = new Person("Lambros", "Hatzini",undefined
        );

        lambros.print();
        printPersonStreet(lambros);


}//end block

/* 
    */