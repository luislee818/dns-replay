var dnsCache = require('./dns_cache');

describe("dns_cache", function () {
	var entry = [{"name":"api.t.sina.com.cn","type":1,"class":1}],
			answer = [{ name: 'api.t.sina.com.cn',
									type: 1,
									class: 1,
									ttl: 100,
									address: '180.149.135.224' }];

	describe("when an entry does not exist", function () {
		it("should return nil upon retrieval", function () {
			expect(dnsCache.getAnswer(entry)).not.toBeDefined();
		});
	});

	describe("when an entry exists", function () {
		beforeEach(function () {
			dnsCache.setAnswer(entry, answer);
		});

		it("should return the saved answer upon retrieval", function () {
			var returnedAnswer = dnsCache.getAnswer(entry);

			expect(returnedAnswer).toEqual(answer);
		});
	});
});
