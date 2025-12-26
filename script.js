(function() {
	'use strict';

	document.addEventListener('DOMContentLoaded', function(event) {

		window.i18n = {
			pl: {
				realText: "Wpisano: ",
				wordsReverse: "Wyrazy od tyłu: ",
				textReverse: "Text od tyłu: ",
				charCount: "Ilość znaków: ",
				whiteSpaceCount: "Ilość białych znaków: ",
				lettersCount: "Ilość znaków bez białych znaków: ",
				wordsCount: "Ilość wyrazów: "
			},
			en: {
				realText: "Entered text: ",
				wordsReverse: "Words reversed: ",
				textReverse: "Text reversed: ",
				charCount: "Number of characters: ",
				whiteSpaceCount: "Number of white spaces: ",
				lettersCount: "Number of letters (no spaces): ",
				wordsCount: "Number of words: "
			}
		};

		const i18n = window.i18n;
		const areaText = document.getElementById('area');
		const analyzeButton = document.getElementById('analys');
		const clearButton = document.getElementById('clear');
		const selectLanguage = document.getElementById('lang-select');
		let currentLang = selectLanguage || document.documentElement.lang;
		
		//This function shows us the unchanged version of received text
		function realText(text) {
			document.getElementById('real-text').textContent = i18n[currentLang].realText + text;
		}

		//This function splits received text into words and shows us unchanged words in reversed order
		function wordsReverse(text) {
			let words = text.split(' ');
			let reverseWords = '';

			for(let i = (words.length - 1); i >= 0; i--) {
				reverseWords += words[i] + ' ';
			}

			document.getElementById('words-reverse').textContent = i18n[currentLang].wordsReverse + reverseWords;
		}

		//This function is reversing received text and shows it to us
		function textReverse(text) {
			let reverseText = '';

			for(let i = (text.length - 1); i >= 0; --i) {
				reverseText += text[i];
			}

			document.getElementById('text-reverse').textContent = i18n[currentLang].textReverse + reverseText;
		}

		//char-count
		function charCount(text) {
			document.getElementById('char-count').textContent = i18n[currentLang].charCount + text.length;
		}

		//white-space-count
		function whiteSpaceCount(text) {
			let whiteSpaces = 0;

			for(let i = 0; i < text.length; i++) {
				if(text.charAt(i) == ' ') whiteSpaces++;
			}

			document.getElementById('white-space-count').textContent = i18n[currentLang].whiteSpaceCount + whiteSpaces;
		}

		//letter-count
		function letterCount(text) {
			let letters = text.length;

			for(let i = 0; i < text.length; i++) {
				if(text.charAt(i) == ' ') letters--;
			}

			document.getElementById('letters-count').textContent = i18n[currentLang].lettersCount + letters;
		}

		//words-count
		function wordsCount(text) {
			let words = text.split(' ');
			let wordsCount = words.length;

			if(text.length > 0) {
				for(let i = 0; i < words.length; i++) {
					if(words[i] == '' || words[i] == ' ') wordsCount--;
				}
				document.getElementById('words-count').textContent = i18n[currentLang].wordsCount + wordsCount;
			}

			else
				document.getElementById('words-count').textContent = i18n[currentLang].wordsCount + " 0";
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
			text.textContent = '';
			text.value = '';
			init();
		}


		areaText.addEventListener('input', function(e) { init(); }, false);
		analyzeButton.addEventListener('click', function(e) { init(); }, false);
		clearButton.addEventListener('click', function(e) { clearText(areaText); }, false);
		selectLanguage.addEventListener('change', function(e) {
			currentLang = selectLanguage.value;
			document.documentElement.lang = currentLang;
			init();
		});

	});

})();
