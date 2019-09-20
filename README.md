# [fart agency][fartt.ru]

[![Build Status](https://travis-ci.org/vaskes79/fartt.ru.svg?branch=master)](https://travis-ci.org/vaskes79/fartt.ru)

![preview project fart agency][preview]

## description

This is a web site of a agency for search actors for movie tv shows and works in the theatre

## technology and services

in the project using following technologies and services:

- [graphQl]
- [gatsbyjs]
- [react]
- [S3]
- [CloudFront]
- [netlify]
- [github]
- [bitbucket]
- [travis]
- [cloudinary]
- [strapi]
- [JEMstack][jemstack]
- [semantic versioning]

## architecture

In project using the [JEMstack] architecture. For management content using headles CMS [strapi] and for generate the static web site based on content to get form [strapi] using [gatsbyjs].

- [JEMstack] architecture of project
- [strapi] backend
- [gatsbyjs] frontend
- [travis CI][travis] for deploy and testing project

## development

For to development without to touch the current project to created `dev` branch that using for deploy `stage` version project on [netlify].

**development new feature**

- for development the new feature need create new branch from current `dev` branch
- branch name `git checkout -b 3-readmy` should contain number issue and title issue
- after finished create feature need merged feature to `dev` and test view

**development new version**

- to make new version project need create list feature that should improve or create
- for all feature create issue
- after complete all issue in list need merge pull request to the master branch and change version
- for versioning need using [semantic versioning]

---

[graphql]: https://graphql.org/learn/
[gatsbyjs]: https://www.gatsbyjs.org/
[react]: https://reactjs.org/
[s3]: https://aws.amazon.com/ru/s3/?nc2=h_m1
[cloudfront]: https://aws.amazon.com/ru/cloudfront/
[netlify]: //netlify.com
[github]: https://github.com/vaskes79
[bitbucket]: //bitbucket.org/vaskes
[travis]: https://travis-ci.org/
[cloudinary]: https://cloudinary.co://cloudinary.com
[strapi]: https://strapi.io/
[jemstack]: https://jamstack.org/
[semantic versioning]: https://semver.org/
[fartt.ru]: https://fartt.ru/
[logo]: http://cod.vguzov.ru/assets/fart_logo.jpg
[preview]: http://cod.vguzov.ru/assets/fart_peview.jpg
