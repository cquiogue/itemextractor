function scanDocument() {
  var documentInput = document.getElementById('documentInput').value;
  var patterns = [
    /^\d{2}-\d{3}-\d{2}-\d{2}$/,
    /^\d{2}-\d{3}-\d{2}-\d{2}-[a-zA-Z]{2}$/,
    /^[a-zA-Z]{3}-[a-zA-Z]{2}-\d{3}$/,
  ];
  var outputCode = document.getElementById('outputCode');
  outputCode.textContent = ''; // Clear previous results

  var words = documentInput.split(/\s+/); // Split the document into words

  for (var i = 0; i < words.length; i++) {
    var word = words[i];

    // Check each pattern for a match
    for (var j = 0; j < patterns.length; j++) {
      var pattern = patterns[j];
      if (pattern.test(word)) {
        outputCode.textContent += word + '\n'; // Output the match
        break; // Break the loop to avoid checking further patterns for this word
      }
    }
  }

  var outputDiv = document.getElementById('output');
  if (outputCode.textContent.trim() !== '') {
    outputDiv.style.display = 'block'; // Show the output container if there are matches
  } else {
    outputDiv.style.display = 'none'; // Hide the output container if there are no matches
  }
}

function copyOutput() {
  var outputCode = document.getElementById('outputCode');
  var textToCopy = outputCode.textContent;
  navigator.clipboard.writeText(textToCopy);

  var copyButton = document.getElementById('copyButton');
  copyButton.innerHTML = '<i class="fas fa-check"></i> Copied';
  copyButton.classList.add('copied');

  setTimeout(function () {
    copyButton.innerHTML = 'Copy';
    setTimeout(function () {
      copyButton.classList.remove('copied');
    }, 300); // Delay the removal of 'copied' class to allow the transition to complete
  }, 1200);
}

var input = document.getElementById('documentInput');
input.addEventListener('input', scanDocument);
