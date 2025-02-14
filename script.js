let transformedText = '';
const inputTextArea = document.getElementById('inputText');
const outputDiv = document.getElementById('outputText');
const copyAlert = document.getElementById('copyAlert');
document.getElementById('fastActionBtn').addEventListener('click', fastAction);
document.getElementById('upperCaseBtn').addEventListener('click', toUpperCase);
document.getElementById('lowerCaseBtn').addEventListener('click', toLowerCase);
document.getElementById('properCaseBtn').addEventListener('click', toProperCase);
document.getElementById('removeMultipleSpacesBtn').addEventListener('click', removeMultipleSpaces);
document.getElementById('removeAllSpacesBtn').addEventListener('click', removeAllSpaces);
document.getElementById('addHashtagBtn').addEventListener('click', addHashtags);
document.getElementById('resetBtn').addEventListener('click', resetText);
document.getElementById('copyBtn').addEventListener('click', copyToClipboard);
function updateOutput() {
  outputDiv.textContent = transformedText;
}
function toUpperCase() {
  transformedText = transformedText || inputTextArea.value;
  transformedText = transformedText.toUpperCase();
  updateOutput();
}
function toLowerCase() {
  transformedText = transformedText || inputTextArea.value;
  transformedText = transformedText.toLowerCase();
  updateOutput();
}
function toProperCase() {
  transformedText = transformedText || inputTextArea.value;
  transformedText = transformedText.replace(/\b\w/g, function(char) {
    return char.toUpperCase();
  });
  updateOutput();
}
function removeMultipleSpaces() {
  transformedText = transformedText || inputTextArea.value;
  transformedText = transformedText.replace(/ {2,}/g, ' ').trim();
  updateOutput();
}
function removeAllSpaces() {
  transformedText = transformedText || inputTextArea.value;
  transformedText = transformedText.replace(/ /g, '');
  updateOutput();
}
function addHashtags() {
  transformedText = transformedText || inputTextArea.value;
  transformedText = transformedText.split(/(\s+)/).map(function(segment) {
    if (/\S/.test(segment)) {
      return '#' + segment;
    } else {
      return segment; 
    }
  }).join('');
  updateOutput();
}
function resetText() {
  transformedText = '';
  inputTextArea.value = '';
  outputDiv.textContent = '';
}
function copyToClipboard() {
  const textToCopy = outputDiv.textContent;
  navigator.clipboard.writeText(textToCopy).then(function() {
    copyAlert.textContent = 'Copied to clipboard!';
    setTimeout(function() {
      copyAlert.textContent = '';
    }, 2000);
  });
  resetText();
}
function fastAction() {
    transformedText = inputTextArea.value;
    transformedText = transformedText.replace(/\b\w/g, function(char) {
      return char.toUpperCase();
    });
    transformedText = transformedText.replace(/ /g, '');
    transformedText = transformedText.split(/(\s+)/).map(function(segment) {
      if (/\S/.test(segment)) {
        return '#' + segment;
      } else {
        return segment;
      }
    }).join('');
  
    updateOutput();
    copyToClipboard();
}  