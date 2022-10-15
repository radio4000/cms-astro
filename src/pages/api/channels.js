import sdk from '@radio4000/sdk'

export async function get({params, request}) {
	const {data, error} = await sdk.findChannels()
	if (error) return []
	const res = JSON.stringify(data)
	return new Response(res, {
		status: 200,
		headers: {
			'Content-Type': 'application/json',
		},
	})
}
