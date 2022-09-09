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

console.log(anagrams('abba', ['abba', 'acac']));
