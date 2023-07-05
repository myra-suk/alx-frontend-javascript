/* A function getStudentIdsSum that returns the sum of all student ids. */

function getStudentIdsSum(students) {
  return students.reduce((acc, student) => acc + student.id, 0);
}

export default getStudentIdsSum;
