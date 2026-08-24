function loadUser(id, callback) {
  setTimeout(() => {
    const user = { id, name: "Asha" };
    // call the callback once work is done, error-first style
    callback(null, user);
  }, 500);
}

loadUser(1, (err, user) => {
  if (err) {
    console.error("Something went wrong:", err);
    return;
  }
  console.log("Loaded:", user);
});