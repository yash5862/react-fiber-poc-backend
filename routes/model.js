module.exports = {
	getAllModels: (req, res) => {
		let query = "SELECT * FROM `models` ORDER BY id ASC"; // query database to get all the players

		// execute query
		db.query(query, (err, data) => {
			if (err) {
				return res.send({error: "something went wrong"});
			}
			return res.send({
				message: "All models fetched.!",
				data: data
			});
		});
	},
	getFirstModel: (req, res) => {
		let query = "SELECT * FROM `models` ORDER BY id DESC limit 1";

		// execute query
		db.query(query, [req.params.id], (err, data) => {
			if (err) {
				return res.send({error: "something went wrong"});
			}
			return res.send({
				message: "model fetched.!",
				data: (data && data.length) ? data[0] : null
			});
		});
	},
	getModel: (req, res) => {
		let query = "SELECT * FROM `models` where id=?";

		// execute query
		db.query(query, [req.params.id], (err, data) => {
			if (err) {
				return res.send({error: "something went wrong"});
			}
			return res.send({
				message: "model fetched.!",
				data: data
			});
		});
	},
	deleteModel: (req, res) => {
		let query = "DELETE FROM `models` where id='"+req.params.id+"'";

		// execute query
		db.query(query, (err, data) => {
			if (err) {
				return res.send({error: "something went wrong"});
			}
			return res.send({
				message: "model deleted.!"
			});
		});
	},
	updateModel: (req, res) => {

		let data = JSON.stringify(req.body.data)
		let query = "UPDATE `models` set data='"+data+"' where id='"+req.params.id+"'";
		console.log("query", query)

		// execute query
		db.query(query, (err, data) => {
			if (err) {
				console.log("err", err)
				return res.send({error: "something went wrong"});
			}
			return res.send({
				message: "model updated.!",
			});
		});
	},
	addModel: (req, res) => {
		let data = JSON.stringify(req.body.data)
		console.log("data", data)
		console.log("req.body", req.body)
		let query = "INSERT INTO `models` values(null, '"+data+"')";

		// execute query
		db.query(query, (err, data) => {
			if (err) {
				return res.send({error: "something went wrong"});
			}
			return res.send({
				message: "model saved.!"
			});
		});
	},
};
