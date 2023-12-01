/**
 * @param {string} repoLink
 * @returns a formatted repository name from the provided GitHub repository link
 * @example
 *
 * const repositoryName = repoLinkFormatter("https://github.com/kaf-lamed-beyt/ng-tech-events")
 * console.log(repositoryName)
 */

const repoLinkFormatter = (repoLink: string): void => {
  const repositoryURL: string = repoLink;
  const splittedLink: string[] = repositoryURL.split("/");

  const lastIndex = splittedLink.length - 1;
  const repositoryName = splittedLink[lastIndex];

  console.log(repositoryName);
};

repoLinkFormatter("https://github.com/kaf-lamed-beyt/ng-tech-events");
