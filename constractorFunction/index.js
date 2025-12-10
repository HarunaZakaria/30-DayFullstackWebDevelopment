//constractor function of house help
class HouseHelp {
  constructor(name, age, location, yearsOfEperience) {
    (this.name = name),
      (this.age = age),
      (this.location = location),
      (this.yearsOfEperience = yearsOfEperience),
      //greet method
      (this.greet = function () {
        console.log(
          `Hi, my name is ${this.name} and I have ${this.yearsOfEperience} years of experience`
        );
      });
  }
}

const haruna = new HouseHelp('Zakaria', 26, 'Tamale', 6);
console.log(haruna.greet());
