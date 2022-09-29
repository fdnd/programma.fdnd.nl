import * as prismic from '@prismicio/client'

// Update your repository name here
const repositoryName = 'fdnd' // move to .env?

const routes = [
  {
    type: 'sprint',
    path: '/:uid'
  }
]

const createClient = ({ request, fetch } = {}) => {
	const clientOptions = {
		fetch,
		routes
	}
	const client = prismic.createClient(repositoryName, clientOptions)

	if (request) {
		client.enableAutoPreviewsFromReq(request)
	}

	return client
}

export default createClient
