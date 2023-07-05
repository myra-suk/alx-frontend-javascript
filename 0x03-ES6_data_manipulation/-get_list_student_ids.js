/* A function getListStudentIds that returns an array of ids from a list of objects.
*/

const getListStudentIds = (students) => {
  if (!Array.isArray(students)) {
    return [];
  }
  return students.map((student) => student.id);
};

export default getListStudentIds;
