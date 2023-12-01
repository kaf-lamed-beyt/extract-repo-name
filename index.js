/**
 *
 * @param {string} repoLink - A string parameter. It should be a valid link to a github repository
 * @returns a formatted repository name from the provided link
 * @example
 *
 * repoLinkFormatter("https://github.com/kaf-lamed-beyt/ng-tech-events")
 */

const repoLinkFormatter = (repoLink) => {
  const repositoryURL = repoLink;
  const splittedLink = repositoryURL.split("/");

  const lastIndex = splittedLink.length - 1;
  const repositoryName = splittedLink[lastIndex];

  //   // for a use case where i need to bump the version, to illustrate semantic versioning
  //   if (!repositoryName.includes("github.com")) {
  //     console.log("💡 Please provide a valid GitHub URL");
  //     return;
  //   }

  console.log(repositoryName);
};

repoLinkFormatter("https://github.com/kaf-lamed-beyt/ng-tech-events");
