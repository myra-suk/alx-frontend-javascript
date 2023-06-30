/* Write a function that returns the value returned by the promise that resolves first */

function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload])
    .then((value) => value);
}

export default loadBalancer;
