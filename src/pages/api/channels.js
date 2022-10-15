export async function get(params, request) {
	const res = JSON.stringify({ ok: true })
	return new Response(res, {
		status: 200,
		headers: {
			'Content-Type': 'application/json',
		},
	})
}
