const createPerson = (name, age) => {
  return {name, age}
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  return !!object[property]
};

const isOver65 = person => {
  return person.age>65
};

const getAges = people => {
  const array=[]
  for (let i=0; i<people.length;i++){
    array.push(people[i].age)
  }
  return array
};

const findByName = (name, people) => {
  return people.filter(person=>person.name===name)[0]
}

const findHondas = cars => {
  return cars.filter(car=>car.manufacturer==='Honda')
};

const averageAge = people => {
  const array=[]
  for (let i=0;i<people.length;i++){
    array.push(people[i].age)
  }
  return array.reduce((a,b)=>a+b, 0)/array.length
};

const createTalkingPerson = (name, age) => {
  return {
    name,
    age,
    introduce(friend) {
      return `Hi ${friend}, my name is ${this.name} and I am ${this.age}!`
    }
  }
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
