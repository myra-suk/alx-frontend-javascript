/* Write an async function named asyncUploadUser
 * Call the uploadphoto and createUser function and await for the result
 */

import { uploadPhoto, createUser } from './utils';

async function asyncUploadUser() {
  try {
    const p = await uploadPhoto();
    const u = await createUser();

    return { photo: p, user: u };
  } catch (error) {
    return { photo: null, user: null };
  }
}

export default asyncUploadUser;
