function addPromise(a, b) {
  return new Promise(function(resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a+b);
    } else {
      reject('Parameters are not both a number.');
    }
  });
};

addPromise(5, 7).then(function(result) {
  console.log('Success', result);
}, function(err) {
  console.log('Error', err);
});

addPromise(5, 'test').then(function(result) {
  console.log('Success', result);
}, function(err) {
  console.log('Error', err);
});
