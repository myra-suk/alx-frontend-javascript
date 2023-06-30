/* Using the prototype getFullResponseFromAPI(success) return a promise */

function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ status: 200, body: 'Success' });
    } else {
      reject(Error('The fake API is not working currently'));
    }
  });
}

export default getFullResponseFromAPI;
