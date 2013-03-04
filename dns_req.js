var dns = require('native-dns');

var question = dns.Question({
	  name: 'www.dapengli.com',
		  type: 'A'
});

var start = new Date().getTime();

var req = dns.Request({
	  question: question,
		  server: { address: '219.150.32.132', port: 53, type: 'udp' },
		  timeout: 1000
});

req.on('timeout', function () {
	  console.log('Timeout in making request');
});

req.on('message', function (err, answer) {
	  answer.answer.forEach(function (a) {
			    console.log(a.address);
					  });
});

req.on('end', function () {
	  var delta = (new Date().getTime()) - start;
		  console.log('Finished processing request: ' + delta.toString() + 'ms');
});

req.send();
