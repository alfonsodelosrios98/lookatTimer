function getTempCallback (location, callback) {
  return new Promise(function(resolve, reject) {
    if(typeof location == 'string') {
      resolve(location);
    } else {
      reject('Error')
    }
  })
}

getTempCallback('Monterrey').then(function(temp) {
  console.log('success', temp)
}, function(err) {
  console.log(err);
})
