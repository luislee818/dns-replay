var dns = require('native-dns'),
		server = dns.createServer();

server.on('request', function (request, response) {
	// console.log('request is: ' + JSON.stringify(request));
	console.log('question is: ' + JSON.stringify(request.question));

	// var question = dns.Question({
	// 	name: request.question.name,
	// 		type: 'A'
	// });

	var start = new Date().getTime();

	var req = dns.Request({
		  question: request.question[0],
			  server: { address: '219.150.32.132', port: 53, type: 'udp' },
			  timeout: 1000
	});

	req.on('timeout', function () {
		  console.log('Timeout in making request');
	});

	req.on('message', function (err, answer) {
		answer.answer.forEach(function (a) {
			console.log(a);
			response.answer.push(a);
		});
	});

	// req.on('end', function () {
	// 	var delta = (new Date().getTime()) - start;
	// 	console.log('Finished processing request: ' + delta.toString() + 'ms');
	// });

	req.send();
});

server.on('error', function (err) {
	console.log(err.stack);
});

server.serve(53);
console.log('dns server started');
