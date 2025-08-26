import { ContentClient } from '@contember/client-content'
import { GraphQlClient } from '@contember/graphql-client'



export const ContemberClient = () => {
	const apiUrl = process.env.CONTEMBER_API_URL
	const apiToken = process.env.CONTEMBER_API_TOKEN

	if (!apiUrl) {
		throw new Error('CONTEMBER_API_URL must be provided')
	}

	if (!apiToken) {
		throw new Error('CONTEMBER_TOKEN must be provided')
	}
	const graphqlClient = new GraphQlClient({
		url: apiUrl,
		apiToken: apiToken
	})
	return new ContentClient(graphqlClient)

}