//constractor function of house help
class HouseHelp {
  constructor(name, age, location, yearsOfEperience) {
    (this.name = name),
      (this.age = age),
      (this.location = location),
      this.yearsOfEperience;
  }
}

const haruna = new HouseHelp('Zakaria', 26, 'Tamale', 6);
console.log(haruna);
