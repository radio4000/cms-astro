// import sdk from '@radio4000/sdk'

export async function get(params, request) {
	const res = JSON.stringify({ ok: true })
	return new Response(res, {
		status: 200,
		headers: {
			'Content-Type': 'application/json',
		},
	})
}
