/* Using the function prototype  handleResponseFromAPI(promise)
 * Append three handlers and print "Got a response from the API" to the console
 */

function handleResponseFromAPI(promise) {
  return promise
    .then(() => ({ status: 200, body: 'success' }))
    .catch(() => Error())
    .finally(() => {
      console.log('Got a response from the API');
    });
}

export default handleResponseFromAPI;
