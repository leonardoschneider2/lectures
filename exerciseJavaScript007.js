// That is my resolution, I don't like, but I need to know how can I resorce with the correct practice.

function domainName(url){
  // your code here
  url = url
    .replace('https://', '')
    .replace('http://', '')
    .replace('www.', '')
    .split('.')[0];

  return url;
}

console.log(domainName("http://google.com"));
console.log(domainName("http://google.co.jp"));
console.log(domainName("www.xakep.ru"));
console.log(domainName("https://youtube.com"));

// Regex practice to resorce

const domainNameRegex = (url) => {
  return url.replace(/.+\/\/|www.|\..+/g, '');
  /* 
    I'm trying to understand the Regex,

    - /REGEXPARAMETERS/g

      EX: http://www.google.com
    - .+\/\/  '//' and what is coming before -> http:// and https:// -> replaced to ''.
    - | separe the regex comparator.

      EX: www.google.com
    - www. 'www.' will be replaced to ''.

      EX: google.com
    - \..+ -> get the point and what come later and replace to ''.

      EX: google
      all right!

  */
}

console.log(domainNameRegex("http://google.com"));
console.log(domainNameRegex("http://www.google.co.jp"));
console.log(domainNameRegex("www.xakep.ru"));
console.log(domainNameRegex("https://youtube.com"));
