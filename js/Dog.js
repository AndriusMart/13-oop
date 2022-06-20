class Dog {
    constructor(name, breed){
        this.name = name;
        this.breed = breed;
        this.bones = 0;


    }
    voice() {
        return `${this.name}: Au au!` ;
    }

    getBone() {
        return `${this.name}: ${++this.bones} bone/-s` ;
    }
    intro(){
        return `Hi, my name is ${this.name} and I'm ${this.breed}` ;
    }

}

module.exports = Dog;