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
        //optional chaining
        console.log(person.address?.street);
    }

    const lambros = new Person("Lambros", "Hatzini",undefined
        );

        lambros.print();
        printPersonStreet(lambros);


}//end block



{
    const name = "Lambros";
    const favFood = "Papoytsakia";
    const favMusic = "Rock";
    const lambros = {
        name,
        favFood,
        favMusic,
    }

    console.log(lambros.name);
    console.log(lambros.favFood);
    console.log(lambros.favMusic);
}