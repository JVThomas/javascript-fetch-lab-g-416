const gitHubBase =  'https://api.github.com/';
const repo =  'JVThomas/javascript-fetch-lab'

function getIssues() {
	fetch(`${gitHubBase}repos/${repo}/issues`).then(res => res.json()).then(json => showIssues(json));
}

function showIssues(json) {
	const template = Handlebars.compile(document.getElementById('issues-template').innerHTML);
	document.getElementById('issues').innerHTML = template(json);
}

function createIssue() {
	fetch(`${gitHubBase}repos${repo}/issues`,{
		method:`post`,
		headers:{
			Authorization: `token ${getToken()}`
		},
		title: 'New issue',
		body:	'test body'
	}).then(res=> rs.json()).then(json => showIssues(json));
}

function showResults(json) {
	const template = Handlebars.compile(document.getElementById('repo-template').innerHTML);
	document.getElementById('results').innerHTML = template(json);
}

function forkRepo() {
	const token = getToken();
	const fork = 'learn-co-curriculum/javascript-fetch-lab'
	fetch(`${gitHubBase}repos/${fork}/forks`, {
		headers:{
			Authorization: 'token ${token}}'
		},
		method: 'post'
	}).then(res => res.json()).then(json => showResults(json));
	//use fetch to fork it!
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
