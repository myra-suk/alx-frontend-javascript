/* Implement a class named HolbertonCourse:
 * Constructor: function(name, length, students)
 * Create getters and setters for each attribute
 */

/* eslint-disable no-underscore-dangle */

class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new Error('Name must be a string');
    }

    if (typeof length === 'number') {
      this._length = length;
    } else {
      throw new Error('Length must be a number');
    }

    if (Array.isArray(students)) {
      students.forEach((student) => {
        if (typeof student !== 'string') {
          throw new Error('Students must be an array of strings');
        }
      });
      this._students = students;
    } else {
      throw new Error('Students must be an array of strings');
    }
  }

  /* Getter and setter for name */

  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName === 'string') {
      this._name = newName;
    } else {
      throw new Error('Name must be a string');
    }
  }

  /* Getter and setter for length */

  get length() {
    return this._length;
  }

  set length(newLength) {
    if (typeof newLength === 'number') {
      this._length = newLength;
    } else {
      throw new Error('Length must be a number');
    }
  }

  /* Getter and setter for students */

  get students() {
    return this._students;
  }

  set students(newStudents) {
    if (Array.isArray(newStudents)) {
      newStudents.forEach((student) => {
        if (typeof student !== 'string') {
          throw new Error('Students must be an array of strings');
        }
      });
      this._students = newStudents;
    } else {
      throw new Error('Students must be an array of strings');
    }
  }
}

export default HolbertonCourse;
