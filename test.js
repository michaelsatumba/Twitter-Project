import fs from 'fs';

let database = JSON.parse(fs.readFileSync('database.json', 'utf-8'));

// console.log(database.length);

const listOfWords = [
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

let aa = 0;
let acquisition = 0;
// let count = 0;

for (let i = 0; i < database.length; i++) {
	let tweet = database[i].text;
	if (tweet.includes('aa')) {
		aa += 1;
	}
	if (tweet.includes('acquisition')) {
		acquisition += 1;
	}
}

// console.log(count);
console.log(`aa: ${aa}`);
console.log(`acquisition: ${acquisition}`);
