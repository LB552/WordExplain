let wordInput = document.getElementById('wordInput');
const button = document.getElementById('generateButton');
const resultsDiv = document.getElementById('results');

// Trigger on Enter key inside the input field
wordInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault(); // Prevent form submission (if any)
    button.click(); // Simulate clicking the Generate button
  }
});


button.addEventListener('click', () => {
  let word = wordInput.value;
  let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // Clear previous results
      resultsDiv.innerHTML = '';

      // Capitalized word
      const wordTitle = document.createElement('h2');
      wordTitle.textContent = capitalize(word);
      resultsDiv.appendChild(wordTitle);

      // Loop through meanings
      data.forEach((entry) => {
        entry.meanings.forEach((meaning) => {
          // Part of speech
          const pos = document.createElement('h3');
          pos.textContent = capitalize(meaning.partOfSpeech);
          resultsDiv.appendChild(pos);

          // Definitions
          const defsList = document.createElement('ul');
          meaning.definitions.forEach((def) => {
            const li = document.createElement('li');
            li.textContent = def.definition;
            defsList.appendChild(li);
          });
          resultsDiv.appendChild(defsList);
        });
      });
    })
    .catch((error) => {
      resultsDiv.innerHTML = `<p>Inputed word "${word}" not found in database.</p>`;
      console.error(error);
    })
    .finally(() => {
      // Always clear input, success or error
      wordInput.value = '';
    });

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }
});
