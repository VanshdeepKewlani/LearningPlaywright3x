function loadUser(id, callback) {
  setTimeout(() => {
    const user = { id, name: "Asha" };
    callback(null, user); // (error, result) convention
  }, 500);
}

loadUser(1, (err, user) => {
  if (err) return console.error(err);
  console.log("Loaded:", user);
});