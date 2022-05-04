import fs from 'fs';

let database = JSON.parse(fs.readFileSync('database.json', 'utf-8'));

// console.log(database.length);

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

// let aa = 0;
// let acquisition = 0;
// let addiction = 0;
// let alcohol = 0;
// let antidepressants = 0;
// let anxiolytics = 0;
// let cannabis = 0;
// let chem_and_bio = 0;
// let comfort = 0;
// let counseling = 0;
// let darknet = 0;
// let delivery = 0;
// let depressants = 0;
// let discomfort = 0;
// let drug = 0;
// let drug_paraphrenalia = 0;
// let drug_quantity = 0;
// let drug_users = 0;
// let drunk = 0;
// let effects = 0;
// let energetic = 0;
// let euphoria = 0;
// let finance = 0;
// let hallucinogens = 0;
// let health = 0;
// let health_practitioner = 0;
// let hospital_department = 0;
// let idu = 0;
// let increased_sociability = 0;
// let legal = 0;
// let locations = 0;
// let meditation = 0;
// let mental_disorder = 0;
// let nooptropics = 0;
// let numbness = 0;
// let opioids = 0;
// let oral = 0;
// let overdose = 0;
// let physical = 0;
// let physical_withdrawal_symptoms = 0;
// let prescription = 0;
// let psychedelic = 0;
// let pschological_withdrawal_symptoms = 0;
// let quitting = 0;
// let recovery = 0;
// let recovery_programs = 0;
// let recovery_support = 0;
// let rehab = 0;
// let relapse = 0;
// let seizure = 0;
// let smoking = 0;
// let stimulants = 0;
// let street = 0;
// let supplements = 0;
// let therapy = 0;
// let tobacco = 0;
// let tolerance = 0;
// let using = 0;
// let withdrawal = 0;

// let count = 0;

for (let i = 0; i < wordList.length; i++) {
	let count = 0;
	for (let j = 0; j < database.length; j++) {
		let tweet = database[j].text;
		if (tweet.includes(wordList[i])) {
			count += 1;
		}
	}
	console.log(`${wordList[i]}: ${count}`);
}

// console.log(count);
// console.log(`aa: ${aa}`);
// console.log(`acquisition: ${acquisition}`);
// console.log(`addiction: ${addiction}`);
// console.log(`alcohol: ${alcohol}`);
// console.log(`antidepressants: ${antidepressants}`);
// console.log(`anxiolytics: ${anxiolytics}`);
// console.log(`cannabis: ${cannabis}`);
// console.log(`chem_and_bio: ${chem_and_bio}`);
// console.log(`comfort: ${comfort}`);
// console.log(`counseling: ${counseling}`);
// console.log(`darknet: ${darknet}`);
// console.log(`delivery: ${delivery}`);
// console.log(`depressants: ${depressants}`);
// console.log(`discomfort: ${discomfort}`);
// console.log(`drug: ${drug}`);
// console.log(`drug_paraphrenalia: ${drug_paraphrenalia}`);
// console.log(`drug_quantity: ${drug_quantity}`);
// console.log(`drug_users: ${drug_users}`);
// console.log(`drunk: ${drunk}`);
// console.log(`effects: ${effects}`);
// console.log(`energetic: ${energetic}`);
// console.log(`euphoria: ${euphoria}`);
// console.log(`finance: ${finance}`);
// console.log(`hallucinogens: ${hallucinogens}`);
// console.log(`health: ${health}`);
// console.log(`health_practitioner: ${health_practitioner}`);
// console.log(`hospital_department: ${hospital_department}`);
// console.log(`idu: ${idu}`);
// console.log(`increased_sociability: ${increased_sociability}`);
// console.log(`legal: ${legal}`);
// console.log(`locations: ${locations}`);
// console.log(`meditation: ${meditation}`);
// console.log(`mental_disorder: ${mental_disorder}`);
// console.log(`nooptropics: ${nooptropics}`);
// console.log(`numbness: ${numbness}`);
// console.log(`opioids: ${opioids}`);
// console.log(`oral: ${oral}`);
// console.log(`overdose: ${overdose}`);
// console.log(`physical: ${physical}`);
// console.log(`physical_withdrawal_symptoms: ${physical_withdrawal_symptoms}`);
// console.log(`prescription: ${prescription}`);
// console.log(`psychedelic: ${psychedelic}`);
// console.log(
// 	`pschological_withdrawal_symptoms: ${pschological_withdrawal_symptoms}`
// );
// console.log(`quitting: ${quitting}`);
// console.log(`recovery: ${recovery}`);
// console.log(`recovery_programs: ${recovery_programs}`);
// console.log(`recovery_support: ${recovery_support}`);
// console.log(`rehab: ${rehab}`);
// console.log(`relapse: ${relapse}`);
// console.log(`seizure: ${seizure}`);
// console.log(`smoking: ${smoking}`);
// console.log(`stimulants: ${stimulants}`);
// console.log(`street: ${street}`);
// console.log(`supplements: ${supplements}`);
// console.log(`therapy: ${therapy}`);
// console.log(`tobacco: ${tobacco}`);
// console.log(`tolerance: ${tolerance}`);
// console.log(`using: ${using}`);
// console.log(`withdrawal: ${withdrawal}`);
