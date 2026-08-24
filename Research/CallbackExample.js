function retry(action, timesLeft, onDone) {
  action((err, result) => {
    if (err && timesLeft > 0) {
      console.log(`Retrying, ${timesLeft} attempts left...`);
      return retry(action, timesLeft - 1, onDone);
    }
    onDone(err, result);
  });
}