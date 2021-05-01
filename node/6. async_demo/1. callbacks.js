console.log("Before");
getUser(4, (result) => {
  console.log(result);
  getRepositories(result.gitHubUserName, (repositories) => {
    console.log(repositories);
  });
});
console.log("After");

function getUser(id, callback) {
  setTimeout(() => {
    console.log("Connected to DB...");
    callback({ id: id, gitHubUserName: "mosh" });
  }, 2000);
}

function getRepositories(username, callback) {
  setTimeout(() => {
    console.log(`Calling github api for ${username}`);
    callback(["repo1", "repo2", "repo3"]);
  }, 2000);
}
