function Me(firstName, lastName){
    this._firstName = firstName
    this._lastName = lastName
}

Me.prototype.getFullName = function(){
    return `${this._firstName} ${this._lastName}`
}

Me.prototype.sayHello = function(){
    console.log("Hello")
}

const Jojo = new Me('joffrey', 'caug')

// Retourne le nom et prénom
console.log(Jojo.getFullName())

// dit bonjour
Jojo.sayHello()