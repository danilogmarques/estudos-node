class Person {
    constructor(name) {
        this.name = name;
        this.age = 30;
    }

    sayMyName() {
        return `My name is ${this.name} and I am ${this.age} years old.`;
    }
}

module.exports = {
    Person,
}