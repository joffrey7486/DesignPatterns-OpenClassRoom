class Me {
    constructor(firstName, lastName){
        this._firstName = firstName
        this._lastName = lastName
    }

    getFullName() {
        return `${this._firstName} ${this._lastName}`
    }

    sayHello(){
        console.log("Hello")
    }
}

const Jojo = new Me('Joffrey', 'caug')

// Retourne le nom et prénom
console.log(Jojo.getFullName())

// dit bonjour 
Jojo.sayHello()