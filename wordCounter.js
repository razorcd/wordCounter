window.onload = function(){
	var textfield = document.getElementById("theTextarea");
	var wordCount = document.getElementById("wordCount");
	var words, len;

	textfield.onchange = count;
	textfield.onkeyup = count;

	function count(){
		//words separator is anything that is not a letter or number or ' or `
		words = textfield.value.split(/[\s,;\.:<>"%~#&!*_=@\$\^\?\|\\\{\}\-\+\[\]\(\)\/]+/);
		len=words.length;
		if (words[0] === "") len -=1;
		if (words[words.length-1] === "") len -=1;
		wordCount.innerHTML = len;
	}
};