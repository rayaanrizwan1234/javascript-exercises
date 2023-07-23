const findTheOldest = function(people) {
    const ordered = people.sort((last, next) => {
        // let nextYears;
        // let lastYears;
        if ("yearOfDeath" in last){
         lastYears = last.yearOfDeath - last.yearOfBirth;
        } else {
         lastYears = (new Date()).getFullYear()- last.yearOfBirth;
        }
        if ("yearOfDeath" in next){
             nextYears = next.yearOfDeath - next.yearOfBirth;
        } else {
             nextYears = (new Date()).getFullYear() - next.yearOfBirth;
        }

        if (lastYears > nextYears){
            return -1;
        }
        return 1;
    })
    return ordered[0];

};

// Do not edit below this line
module.exports = findTheOldest;
