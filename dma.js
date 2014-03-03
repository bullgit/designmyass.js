var xhr = new XMLHttpRequest();

xhr.open('GET', window.location.href);

xhr.onreadystatechange = function () {

  if (xhr.status === 200 && xhr.readyState === 4) {

    var pre = document.createElement('pre');
    pre.style.width  = '100%';
    pre.style.height = '100%';
    pre.style.position = 'absolute';
    pre.style.overflow = 'scroll';
    pre.style.boxSizing = 'border-box';
    pre.style.padding = '1em';
    pre.style.margin = '0';
    pre.style.border = '1em solid';

    var code = document.createElement('code');
    code.innerText = xhr.responseText;

    pre.appendChild(code);

    document.firstElementChild.style.margin = '0';
    document.firstElementChild.style.width  = '100%';
    document.firstElementChild.style.height = '100%';

    document.firstElementChild.appendChild(pre);

    document.firstElementChild.removeChild(document.querySelector('head'));
    document.firstElementChild.removeChild(document.querySelector('body'));

  }

};

xhr.send();