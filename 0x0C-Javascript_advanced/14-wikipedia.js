function createElement(data) {
    var p = document.createElement('P');
    p.innerHTML = data;
    document.body.appendChild(p);
  }
  function queryWikipedia(callback) {
    let request = new XMLHttpRequest();
    request.open(
      'GET',
      'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*'
    );
  }