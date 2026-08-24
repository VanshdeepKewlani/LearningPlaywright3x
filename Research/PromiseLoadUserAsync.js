function loadUserAsync(id) {
  return new Promise((resolve, reject) => {
    loadUser(id, (err, user) => {
      if (err) reject(err);
      else resolve(user);
    });
  });
}

// now this old callback-based function can be awaited directly
const user = await loadUserAsync(1);
console.log(user.name);