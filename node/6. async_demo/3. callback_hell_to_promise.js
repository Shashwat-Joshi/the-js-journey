console.log("Before");
getUser(1)
  .then((user) => getRepositories(user.gitHubUserName))
  .then((repositories) => getCommits(repositories[0]))
  .then((commits) => console.log(commits))
  .catch((err) => console.log(err.message));
console.log("After");

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Connected to DB...");
      resolve({ id: id, gitHubUserName: "mosh" });
    }, 2000);
  });
}

function getRepositories(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Calling github api for ${username}`);
      resolve(["repo1", "repo2", "repo3"]);
    }, 2000);
  });
}

function getCommits(repo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Getting commits for ${repo}`);
      resolve(["commit1"]);
    }, 2000);
  });
}
