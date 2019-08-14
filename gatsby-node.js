const path = require(`path`)

const makeRequest = (graphql, request) =>
  new Promise((resolve, reject) => {
    resolve(
      graphql(request).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        return result
      })
    )
  })

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const getPage = makeRequest(
    graphql,
    `
    {
      allStrapiPage {
        edges {
          node {
          id
            title_en
          }
        }
      }
    }
    `
  ).then(result => {
    result.data.allStrapiPage.edges.forEach(({ node }) => {
      createPage({
        path: `/${node.title_en
          .trim()
          .toLowerCase()
          .replace(/\s+/, "-")}`,
        component: path.resolve(`src/templates/page.js`),
        context: {
          id: node.id,
          titel_en: node.title_en,
        },
      })
    })
  })

  const getActor = makeRequest(
    graphql,
    `
    {
      allStrapiActor {
        edges {
          node {
          id
            name_en
          }
        }
      }
    }
    `
  ).then(result => {
    // Create pages for each article.
    result.data.allStrapiActor.edges.forEach(({ node }) => {
      createPage({
        path: `/${node.name_en
          .trim()
          .toLowerCase()
          .replace(/\s+/, "-")}`,
        component: path.resolve(`src/templates/actor.js`),
        context: {
          id: node.id,
        },
      })
    })
  })

  const getAgent = makeRequest(
    graphql,
    `
    {
      allStrapiAgent {
        edges {
          node {
          id
            name_en
          }
        }
      }
    }
    `
  ).then(result => {
    // Create pages for each article.
    result.data.allStrapiAgent.edges.forEach(({ node }) => {
      createPage({
        path: `/agent/${node.name_en
          .trim()
          .toLowerCase()
          .replace(/\s/, "-")}`,
        component: path.resolve(`src/templates/agent.js`),
        context: {
          id: node.id,
          name_en: node.name_en,
        },
      })
    })
  })

  const getMens = makeRequest(
    graphql,
    `
    {
      allStrapiActor(
      filter: {gender: {eq: "male"}}
      ) {
        edges {
          node {
                id
              gender
          }
        }
      }
    }
    `
  ).then(result => {
    // Create pages for each article.
    result.data.allStrapiActor.edges.forEach(({ node }) => {
      createPage({
        path: `/men`,
        component: path.resolve(`src/templates/men.js`),
        context: {
          id: "men" + node.id,
        },
      })
    })
  })

  const getWomens = makeRequest(
    graphql,
    `
    {
      allStrapiActor (

      filter: {gender: {eq: "female"}}
      ){
        edges {
          node {
              gender
          id
          }
        }
      }
    }
    `
  ).then(result => {
    // Create pages for each article.
    result.data.allStrapiActor.edges.forEach(({ node }) => {
      createPage({
        path: `/womens`,
        component: path.resolve(`src/templates/woman.js`),
        context: {
          id: "woman" + node.id,
        },
      })
    })
  })

  return Promise.all([getActor, getMens, getWomens, getPage])
}
