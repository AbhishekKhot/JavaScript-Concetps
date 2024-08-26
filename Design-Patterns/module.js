/*
Module pattern
enacpsulates variables and functions in a module, reducing global scope pollution and organizing code.
commonly used to create singleton objects, libraries or namespaces(completely unrealted code sharing same variable).
*/

/*
var myGradesCalculator = (function () {
  var grades = [90, 88, 94, 92, 95, 98];

  return {
    average: function () {
      var total = grades.reduce(function (accumulator, item) {
        return accumulator + item;
      }, 0);
      return "Your average grade is " + total / grades.length + ".";
    },
    failed: function () {
      var failedSubjects = grades.filter(function (item) {
        return item < 70;
      });
      return "You failed in " + failedSubjects.length + " subjects.";
    },
  };
})();

console.log(myGradesCalculator.averageGrades());
console.log(myGradesCalculator.failedSubjects());
*/

/*
Above lets us decide what variables/methods we want to keep private (e.g myGrades) and what variables/methods
we want to expose by putting them in the return statement (e.g average, fail)
*/

/* Revealing module pattern
this is very similar to above apporach, expect it ensures that all methods and variables are kept private 
until explicitly exposed.
*/

var myGradesCalculator = (function () {
  var grades = [93, 95, 88, 92, 95, 93];

  var avergeGrades = function () {
    var totalGrades = grades.reduce(function (accumulator, item) {
      return accumulator + item;
    }, 0);
    return "Your average grades are: " + totalGrades / grades.length + ".";
  };

  var failedSubjectCount = function () {
    var failedSubjects = grades.filter(function (item) {
      return item < 70;
    });

    return "You failed in: " + failedSubjects.length + " subjects.";
  };

  return {
    average: avergeGrades,
    failedSubjects: failedSubjectCount,
  };
})();

console.log(myGradesCalculator.average());
console.log(myGradesCalculator.failedSubjects());
