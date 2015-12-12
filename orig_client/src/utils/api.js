import urls from '../constants/urls';

var api = {
	createWormhole(wormholeData) {
		// debugger;
		// wormholeData = '{ "title": "hiking", "latitude":50, "longitude": 35, "deadline":"2015-12-09T23:37:58.271497Z", "notes":"foxboy", "status": "open", "requestor": 2}';
		// console.log('about to post to the server from util api', wormholeData);
	  return fetch(urls.wormholes, {
	    method: 'POST',
	    headers: {
	    	'Content-Type': 'application/json',
	    },
	    body: JSON.stringify(wormholeData)
	    // body: JSON.stringify({ "title": "fat ugly face party party at ikea", "latitude":50, "longitude": 35, "deadline":"2015-12-09T23:37:58.271497Z", "notes":"make it phat", "status": "zip line", "requestor": 2})
	  })
	  .then((res, a) => {
	  	// console.log('got this back from server on wormhole create post', res, a);
	  	return res.json();
	  })
	  ;
	  
	  //for testing
	  // return setTimeout(() => {
   //    return wormholeData;
   //  }, 1000);
	},

	getWormholeList() {
		return fetch(urls.wormholes)
		.then((res) => res.json())
		;
	},

	getWormholeDetails(id) {
		return fetch(`${urls.wormholes}/${id}`)
		.then((res) => res.json())
		;
	},

	updateWormholeDetails(wormholeId, wormholeData) {
		console.log('about to send put to update submit from api file, id: ', wormholeId, wormholeData );
		return fetch(`${urls.wormholes}/${wormholeId}/`, {
	    method: 'put',
	    headers: {
	    	'Content-Type': 'application/json',
	    	'Accept': 'application/json',
	    },
	    body: JSON.stringify(wormholeData)
	  })
	  .then((res) => {
	  	console.log('just head back from the put, and they said: ', res);
	  	res
	  })
	  ;
	},

	createSubmission(submissionData) {
		console.log('about to submit against request');
	  return fetch(urls.submissions, {
	    method: 'post',
	    headers: {
	    	'Content-Type': 'application/json',
	    },
	    body: JSON.stringify(submissionData)
	  })
	  .then((res) => res.json())
	  ;
	},

	getSubmissionList() {
		return fetch(urls.submissions)
		.then((res) => res.json())
		;
	},

	getSubmissionDetails(id) {
		return fetch(`${urls.submissions}/${id}`)
		.then((res) => res.json())
		;
	},

	updateSubmissionDetails(submissionData) {
		return fetch(`${urls.submissions}/${submissionData.id}`, {
	    method: 'put',
	    body: JSON.stringify(submissionData)
	  })
	  .then((res) => res.json())
	  ;
	},

	getUserList() {
		return fetch(urls.users)
		.then((res) => res.json())
		;
	},

	getUserDetails(id) {
		return fetch(`${urls.users}/${id}`)
		.then((res) => res.json())
		;
	},

	createUser(userData) {
		return fetch(urls.users, {
	    method: 'POST',
	    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
   		},
	    body: JSON.stringify(userData)
	  })
	  .then((res) => {
	  	res.json();
	  	// console.log(res);
	  })
	  ;
	},

	updateUserDetails(userData) {
		return fetch(`${urls.users}/${userData.id}`, {
	    method: 'PUT',
	    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
   		},
	    body: JSON.stringify(userData)
	  })
	  .then((res) => {
	  	res.json();
	  	// console.log(res);
	  })
	  ;
	},

};

module.exports = api;
