export const api = {
  icon: '🚀',
  name: 'identity.do',
  description: 'Identity Management API',
  url: 'https://identity.do/api',
  type: 'https://apis.do/security',
  endpoints: {
    listCategories: 'https://identity.do/api',
    getCategory: 'https://identity.do/:type',
  },
  site: 'https://identity.do',
  login: 'https://identity.do/login',
  signup: 'https://identity.do/signup',
  subscribe: 'https://identity.do/subscribe',
  repo: 'https://github.com/drivly/identity.do',
}

export const gettingStarted = [
  `If you don't already have a JSON Viewer Browser Extension, get that first:`,
  `https://extensions.do`,
]

export const examples = {
  listItems: 'https://identity.do/worker',
}

export default {
  fetch: async (req, env) => {
    const { user, hostname, pathname, rootPath, pathSegments, query } = await env.CTX.fetch(req).then(res => res.json())
    if (rootPath) return json({ api, gettingStarted, examples, user })
    
    // TODO: Implement this
    const [ resource, id ] = pathSegments
    const data = { resource, id, hello: user.city }
    
    return json({ api, data, user })
  }
}

const json = obj => new Response(JSON.stringify(obj, null, 2), { headers: { 'content-type': 'application/json; charset=utf-8' }})
