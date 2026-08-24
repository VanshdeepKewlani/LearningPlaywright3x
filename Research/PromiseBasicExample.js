function wait(ms) {
  return new Promise((resolve, reject) => {
    if (ms < 0) {
      return reject(new Error("ms must be positive"));
    }
    setTimeout(() => {
      resolve(`waited ${ms}ms`);
    }, ms);
  });
}

wait(1000).then(message => console.log(message));