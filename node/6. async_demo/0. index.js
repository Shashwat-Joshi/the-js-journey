console.log("Before");
const user = getUser(4);
console.log(user);
console.log("After");

function getUser(id) {
  setTimeout(() => {
    console.log("Connected to DB...");
    return { id: id, gitHubUserName: "mosh" };
  }, 2000);
  return 1;
}
