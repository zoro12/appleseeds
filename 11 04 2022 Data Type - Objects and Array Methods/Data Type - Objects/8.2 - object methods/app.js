const country = {
  mycountry: 'israel',
  capital: 'jerusalim',
  language: 'hebrew',
  population: 10,
  neighbours: ['egypt', 'jordan'],
};

country.describe = function () {
  console.log(
    `${this.mycountry} has ${this.population} million people, their mother tongue is ${this.language}, they have ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`
  );
};
country.describe();

country.checkIsland = function () {
  this.isIsland = this.neighbours.length == 0 ? true : false;
};
country.checkIsland();
console.log(country.isIsland);
