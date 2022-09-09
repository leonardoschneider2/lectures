// That is my resolution from the Anagram

function anagrams(word, words) {
  const result = words.reduce((accumulator, element) => {
    const anagram = element.split('');
    word.split('').forEach(letter => {
      const index = anagram.findIndex(l => l === letter);
      if (index !== -1) anagram.splice(index, 1);
    })
    if (element.length === word.length && anagram.length === 0) {
      return accumulator = [...accumulator, element];
    } else return accumulator;

  }, [])
  return result;
}

// That is the best logical from resolve the anagrams, but that logical is not mine

const correctAnagrams = (word, words) => {
  const ordena = (sortWord) => sortWord.split('').sort().join('');
  return words.reduce((acc, w) => {
    return (ordena(word) === ordena(w)) ? [...acc, w] : acc;
  }, [])
}


console.log('ANAGRAM: ', anagrams('abba', ['abba', 'acac']));
console.log('CORRECTANAGRAM: ', correctAnagrams('abba', ['abba', 'acac', 'bbaa', 'jsab']));