addEventListener('fetch', event => {
	event.respondWith(handleRequest(event.request))
  })
  
  async function handleRequest(request) {
	const ip = request.headers.get('cf-connecting-ip')
	console.log(request);
	return new Response(ip || 'Unknown IP', {status: 200})
  }