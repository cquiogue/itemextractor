function scanDocument() {
  var documentInput = document.getElementById('documentInput').value;
  var patterns = [
    /^\d{2}-\d{3}-\d{2}-\d{2}$/,
    /^\d{2}-\d{3}-\d{2}-\d{2}-[a-zA-Z]{2}$/,
    /^[a-zA-Z]{3}-[a-zA-Z]{2}-\d{3}$/,
  ];
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = ''; // Clear previous results

  var words = documentInput.split(/\s+/); // Split the document into words

  for (var i = 0; i < words.length; i++) {
    var word = words[i];

    // Check each pattern for a match
    for (var j = 0; j < patterns.length; j++) {
      var pattern = patterns[j];
      if (pattern.test(word)) {
        var matchedWord = document.createElement('div');
        matchedWord.textContent = word;
        outputDiv.appendChild(matchedWord); // Output the match
        break; // Break the loop to avoid checking further patterns for this word
      }
    }
  }

  if (outputDiv.children.length > 0) {
    outputDiv.classList.add('show'); // Show the output container if there are matches
  } else {
    outputDiv.classList.remove('show'); // Hide the output container if there are no matches
  }
}

var input = document.getElementById('documentInput');
input.addEventListener('input', scanDocument);
