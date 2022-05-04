import fs from 'fs';

let database = JSON.parse(fs.readFileSync('database.json', 'utf-8'));

console.log(database.length);

const wordList = [
	'aa',
	'acquisition',
	'addiction',
	'alcohol',
	'antidepressants',
	'anxiolytics',
	'cannabis',
	'chem_and_bio',
	'comfort',
	'counseling',
	'darknet',
	'delivery',
	'depressants',
	'discomfort',
	'drug',
	'drug_paraphrenalia',
	'drug_quantity',
	'drug_users',
	'drunk',
	'effects',
	'energetic',
	'euphoria',
	'finance',
	'hallucinogens',
	'health',
	'health practitioner',
	'hospital department',
	'idu',
	'increased sociability',
	'legal',
	'locations',
	'meditation',
	'mental disorder',
	'nooptropics',
	'numbness',
	'opioids',
	'oral',
	'overdose',
	'physical',
	'physical_withdrawal_symptoms',
	'prescription',
	'psychedelic',
	'pschological_withdrawal_symptoms',
	'quitting',
	'recovery',
	'recovery programs',
	'recovery_support',
	'rehab',
	'relapse',
	'seizure',
	'smoking',
	'stimulants',
	'street',
	'supplements',
	'therapy',
	'tobacco',
	'tolerance',
	'using',
	'withdrawal',
];

for (let i = 0; i < wordList.length; i++) {
	let count = 0;
	for (let j = 0; j < database.length; j++) {
		let tweet = database[j].text;
		if (tweet.includes(wordList[i])) {
			count += 1;
		}
	}
	console.log(`${wordList[i]}: ${count}`);
	console.log(
		`${wordList[i]}: ${((count / database.length) * 100).toFixed(3)}%`
	);
}
