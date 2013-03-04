var dnsCache = {},
		repository = {};

dnsCache.getAnswer = function (entry) {
	return repository[entry];
};

dnsCache.setAnswer = function (entry, answer) {
	repository[entry] = answer;
};

module.exports = dnsCache;
