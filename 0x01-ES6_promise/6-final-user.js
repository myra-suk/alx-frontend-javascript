/* Write and export a function handleProfileSignup
 * It should accept firstName, lastName, and fileName arguments
 */

import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((results) => {
      for (const result of results) {
        if (result.status === 'rejected') {
          result.value = `Error: ${result.reason ? result.reason.message : 'Unknown error'}`;
          delete result.reason;
        }
      }
      return results;
    });
}

export default handleProfileSignup;
