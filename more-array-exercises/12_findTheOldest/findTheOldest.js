/*const findTheOldest = function(people) {
  const oldest = people.sort(function(a, b) {
    const lastGuy = a.yearOfDeath - a.yearOfBirth;
    const nextGuy = b.yearOfDeath - b.yearOfBirth;
    return lastGuy > nextGuy ? -1 : 1;
  });
  return oldest[0];
};*/

const findTheOldest = function(array) {
  return array.reduce((oldest, currentPerson) => {
    const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath)
    const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath)
    return oldestAge < currentAge ? currentPerson : oldest
  })
};

const getAge = function(birth, death) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
};


// Do not edit below this line
module.exports = findTheOldest;
