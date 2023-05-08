const token  =  fetch('https://login.microsoftonline.com/common/oauth2/v2.0/token', {
	method: 'POST',
	body: JSON.stringify({
		'client_id' : '619c1ad8-3ff8-4d5b-b15a-5a0f18c724fd',
		'response_type' : 'code',
		'redirect_uri' : 'http://localhost',
		'grant_type' : 'authorization_code'
	}),
	headers: {
	  'content-type': 'application/json'
	}
      })
	.then((res) => {
	  if (res.ok) {
	    return res
	  }
    
	  return Promise.reject('error')
	})
	.then((res) => res.json())

console.log('accesstoken',token)

