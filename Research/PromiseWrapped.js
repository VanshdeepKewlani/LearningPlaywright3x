// wait(...) returns a real Promise, so it composes with Promise.all
const [first, second] = await Promise.all([
  wait(100),
  wait(200),
]);
console.log(first, second);