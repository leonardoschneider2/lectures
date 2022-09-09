const contaChaves = (stringBraces) => {
  let error = 'false';
  let bracesOpened = [];
  stringBraces.split('').forEach(element => {
    if (error === 'false') {
      switch (element) {
      case '(':
      case '{':
      case '[':
        bracesOpened = [ ...bracesOpened, element ];
        break;
      case ')':
        if (bracesOpened[bracesOpened.length - 1] === '(') {
          bracesOpened = bracesOpened.filter((e, i) => i !== bracesOpened.length - 1);
        } else {
          error = 'true';
        }
        break;
      case '}':
        if (bracesOpened[bracesOpened.length - 1] === '{') {
          bracesOpened = bracesOpened.filter((e, i) => i !== bracesOpened.length - 1);
        } else {
          error = 'true';
        }
        break;
      case ']':
        if (bracesOpened[bracesOpened.length - 1] === '[') {
          bracesOpened = bracesOpened.filter((e, i) => i !== bracesOpened.length - 1);
        } else {
          error = 'true';
        }
        break;
      }
    }
  });
  if (bracesOpened.length > 0) {
    return false;
  }
  return !(error === 'true');
};
