import fs from 'fs';

import { TwitterApi } from 'twitter-api-v2';

const SEARCH_TERM = 'fentanyl';

const QUERY_PARAMS = ' -is:retweet';

let next_token = null;

if (process.env.API_KEY === undefined) {
	process.stdout.write('API_KEY env variable not set, terminating...\n');
	process.exit(1);
}

const twitterClient = new TwitterApi(process.env.API_KEY);

const roClient = twitterClient.readOnly;

for (let i = 0; i < 3; i += 1) {
	let data;

	if (next_token !== null) {
		data = await roClient.search(SEARCH_TERM + QUERY_PARAMS, {
			max_results: 100,
			next_token: next_token,
		});
	} else {
		data = await roClient.search(SEARCH_TERM + QUERY_PARAMS, {
			max_results: 100,
		});
	}

	// console.log(data.meta.next_token);
	next_token = data.meta.next_token;

	// process.exit(0)

	let database = JSON.parse(fs.readFileSync('database.json', 'utf-8'));

	// database = [...database, ...data.data.data];
	// const ids = database.map((item) => {
	//   return item.id;
	// });

	// console.log(ids)

	function idMatch(db, id) {
		for (let i = 0; i < db.length; i += 1) {
			if (db[i].id === id) {
				return true;
			}
		}
		return false;
	}

	for (let i = 0; i < data.data.data.length; i += 1) {
		if (!idMatch(database, data.data.data[i].id)) {
			database.push({ ...data.data.data[i], search_term: SEARCH_TERM });
		}
	}

	console.log(database.length);

	fs.writeFileSync('database.json', JSON.stringify(database));
}
