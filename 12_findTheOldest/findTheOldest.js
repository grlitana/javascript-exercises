const findTheOldest = function (array) {
  const ageArr = array.map((element) => {
    let today = new Date().getFullYear();

    if (typeof element.yearOfDeath === "undefined") {
      return today - element.yearOfBirth;
    } else {
      return element.yearOfDeath - element.yearOfBirth;
    }
  });

  const index = ageArr.indexOf(Math.max(...ageArr))

  return array[index]
};

// Do not edit below this line
module.exports = findTheOldest;
