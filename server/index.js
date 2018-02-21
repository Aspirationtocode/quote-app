const app = require('express')();
const port = 3000;

app.listen(port, function(error) {
	if (error) {
		console.error(error);
	} else {
		console.info(
			`==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`,
		);
	}
});
