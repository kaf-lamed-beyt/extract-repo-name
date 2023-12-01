/**
 * @param {string} repoLink
 * @returns a formatted repository name from the provided GitHub repository link
 * @example
 *
 * const repositoryName = repoLinkFormatter("https://github.com/kaf-lamed-beyt/ng-tech-events")
 * console.log(repositoryName)
 */
var repoLinkFormatter = function (repoLink) {
    var repositoryURL = repoLink;
    var splittedLink = repositoryURL.split("/");
    var lastIndex = splittedLink.length - 1;
    var repositoryName = splittedLink[lastIndex];
    console.log(repositoryName);
};
repoLinkFormatter("https://github.com/kaf-lamed-beyt/ng-tech-events");
