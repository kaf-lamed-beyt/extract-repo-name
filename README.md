# 💡 repo-link-formatter

Lightweight utility function to extract the repository name from a GitHub repository URL

---

This is a npm package I built during DevFest Ibadan 2023 to illustrate the process of building JavaScript packages in 2023 and beyond.

# How to use

First, install the package

```shell
npm install repo-link-formatter
```

When the installation is done, import it in your project like so:

```js
import repoLinkFormatter from "repo-link-formatter";

const repositoryName = repoLinkFormatter("valid github url");
console.log(repositoryName);
```
