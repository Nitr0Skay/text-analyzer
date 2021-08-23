(function() {
	'use strict';

	const areaText = document.getElementById('area');
	const analyzeButton = document.getElementById('analys');
	const clearButton = document.getElementById('clear');


	//real-text
	function realText(text) {
		document.getElementById('real-text').innerHTML = 'Wpisano: ' + text;
	}

	//words-reverse
	function wordsReverse(text) {
		let words = text.split(' ');
		let reverseWords = '';

		for(let i = (words.length - 1); i >= 0; i--) {
			reverseWords += words[i] + ' ';
		}

		document.getElementById('words-reverse').innerHTML = 'Wyrazy od tyłu: ' + reverseWords;
	}

	//text-reverse
	function textReverse(text) {
		let reverseText = '';

		for(let i = (text.length - 1); i >= 0; --i) {
			reverseText += text[i];
		}

		document.getElementById('text-reverse').innerHTML = 'Text od tyłu: ' + reverseText;
	}

	//char-count
	function charCount(text) {
		document.getElementById('char-count').innerHTML = 'Ilość znaków: ' + text.length;
	}

	//white-space-count
	function whiteSpaceCount(text) {
		let whiteSpaces = 0;

		for(let i = 0; i < text.length; i++) {
			if(text.charAt(i) == ' ') whiteSpaces++;
		}

		document.getElementById('white-space-count').innerHTML = 'Ilość białych znaków: ' + whiteSpaces;
	}

	//letter-count
	function letterCount(text) {
		let letters = text.length;

		for(let i = 0; i < text.length; i++) {
			if(text.charAt(i) == ' ') letters--;
		}

		document.getElementById('letters-count').innerHTML = 'Ilość znaków bez białych znaków: ' + letters;
	}

	//words-count
	function wordsCount(text) {
		let words = text.split(' ');
		let wordsCount = words.length;

		if(text.length > 0) {
			for(let i = 0; i < words.length; i++) {
				if(words[i] == '' || words[i] == ' ') wordsCount--;
			}
			document.getElementById('words-count').innerHTML = 'Ilość wyrazów: ' + wordsCount;
		}

		else
			document.getElementById('words-count').innerHTML = 'Ilość wyrazów: 0';
	}

	function init() {
		let text = areaText.value;

		realText(text);
		wordsReverse(text);
		textReverse(text);
		charCount(text);
		whiteSpaceCount(text);
		letterCount(text);
		wordsCount(text);
	}

	function clearText(text) {
		text.innerHTML = '';
		text.value = '';
	}


	areaText.addEventListener('input', function(e) { init(); }, false);
	analyzeButton.addEventListener('click', function(e) { init(); }, false);
	clearButton.addEventListener('click', function(e) { clearText(areaText); }, false);

})();
