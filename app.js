
function saveContent() {
	//get content from localStorage if any
	document.getElementById('heading').innerHTML = localStorage['header1'] || 'Just Write';
	document.getElementById('content').innerHTML = localStorage['content1'] || 'Text has been saved every 1 min';

	//Set content to localStorage on every 1 sec
	setInterval(function(){
			localStorage['header1'] = document.getElementById('heading').innerHTML;
			localStorage['content1'] = document.getElementById('content').innerHTML;
			document.title = document.getElementById('heading').innerHTML;

	},1000)
}

saveContent();