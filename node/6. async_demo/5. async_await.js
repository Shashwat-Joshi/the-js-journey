console.log("Before");

// Async await approach
async function displayCommits() {
  try {
    const user = await getUser(1);
    const repositories = await getRepositories(user.gitHubUserName);
    const commits = await getCommits(repositories[0]);
    console.log(commits);
  } catch (e) {
    console.error(e.message);
  }
}

displayCommits();

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
      //   reject(new Error("Req failed.."));
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
