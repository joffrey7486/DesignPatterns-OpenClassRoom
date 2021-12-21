// Object littéral
const Me = {
    firstName = "Jojo",
    lastName = "caug",
    getFullName: () => `${Me.firstName} ${Me.lastName}`,
    sayHello: () => console.log("Hello")
}

// Retourne mon nom et prénom
console.log(Me.getFullName)

// dit bonjour 
Me.sayHello()