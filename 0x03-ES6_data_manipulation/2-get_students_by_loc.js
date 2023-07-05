/* A function that takes that returns an array of students that are 
located in a specific city 
*/

function getStudentsByLocation(student, city) {
  return student.filter((student) => student.location === city);
}

export default getStudentsByLocation;
