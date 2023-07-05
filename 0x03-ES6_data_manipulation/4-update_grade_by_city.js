/* Use filter and map on a function updateStudentGradeByCity
 * to return a new array of objects with updated grades for students in a specific city.
 */

function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const matchingGrade = newGrades.find((grade) => grade.studentId === student.id);
      const grade = matchingGrade ? matchingGrade.grade : 'N/A';
      return { ...student, grade };
    });
}

export default updateStudentGradeByCity;
