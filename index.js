const gradesForm = document.querySelector("#grades-form");
const yourGrade = document.querySelector("#grade");

const grades = [40, 50, 60, 70, 80, 90, 100];

const getCountOfGrades = grades => {
  // return the number of grades in the array
  return grades.length
}

const getAverageOfGrades = grades => {
  // return the average of all the grades
  let average = 0
  // add all grades 
  grades.map(grade => average += grade)
  // take the total and divide by the length of the array
  return Math.round(average / grades.length)
}

const getLowestGrades = grade => {
  // return the lowest of the grades 
  return Math.min(...grades)
}

const getHighestGrades = grade => {
  // return the highest of the grades
  return Math.max(...grades)
}

const renderStatsTable = grades => {
  document.querySelector("#countGrades")
    .textContent = getCountOfGrades(grades)
  document.querySelector("#avgGrades")
    .textContent = getAverageOfGrades(grades)
  document.querySelector("#lowestGrades")
    .textContent = getLowestGrades(grades)
  document.querySelector("#highestGrades")
    .textContent = getHighestGrades(grades)
}

const getPassingGrades = grades => {
  // return CSV of all the passing grades in the array
  return grades.filter(grade => grade >= 65).join(", ")
}

const getFailingGrades = grades => {
  // return CSV of all the failing grades in the array
  return grades.filter(grade => grade < 65).join(", ")
}

const getRaisedGrades = grades => {
   // return CSV of all the grades in the array with 5 added (with a max of 100)
  return grades.map(grade => {
    const raisedGrade = grade + 5
    if(raisedGrade >= 100) {
      return 100
    }
    return raisedGrade
  }).join(", ")
}

const renderArraysTable = grades => {
  document.querySelector("#passingGrades")
    .textContent = getPassingGrades(grades)
  document.querySelector("#failingGrades")
    .textContent = getFailingGrades(grades)
  document.querySelector("#raisedGrades")
    .textContent = getRaisedGrades(grades)
}

const renderTables = grades => {
  renderStatsTable(grades)
  renderArraysTable(grades)
  console.log(grades)
}

gradesForm.addEventListener("submit", (event) => {
  event.preventDefault()
  // get the value of the input 
  const newGrade = Number(yourGrade.value);
  grades.push(newGrade)
  yourGrade.value = ""
  renderTables(grades)
})

renderTables(grades)

