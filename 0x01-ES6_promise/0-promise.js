/* Return a promise using this prototype function getResponseFromAPI() */

function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    resolve();
    reject();
  });
}

export default getResponseFromAPI;
