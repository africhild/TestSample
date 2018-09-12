var config = {
	port: process.env.PORT || 2000,
	db: process.env.MONGOLAB_URI || "mongodb://kolawole:qwerty123456@ds245805.mlab.com:45805/bookhub",
	test_port: 2001,
	test_db: "mongodb://kolawole:qwerty123456@ds251902.mlab.com:45805/bookhub_test"
}
module.exports = config;

