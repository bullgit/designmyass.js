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
    code.textContent = xhr.responseText;

    pre.appendChild(code);
    
    var closeBtn = document.createElement('button');
    closeBtn.classList.add('closeBtn');
    closeBtn.style.width  = '2.5em';
    closeBtn.style.height = '2.5em';
    closeBtn.style.position = 'absolute';
    closeBtn.style.right = '1em';
    closeBtn.style.top = '1em';
    closeBtn.style.cursor = 'pointer';
    closeBtn.style.fontSize = '1.5em';
    closeBtn.style.margin = '0';
    closeBtn.style.border = '0.5em solid';
    closeBtn.style.borderRadius = '1.5em';
    closeBtn.style.background = 'rgba(255, 255, 255, .5)';

    closeBtn.textContent = '✖';

    document.firstElementChild.style.margin = '0';
    document.firstElementChild.style.width  = '100%';
    document.firstElementChild.style.height = '100%';

    document.firstElementChild.appendChild(pre);
    document.firstElementChild.appendChild(closeBtn);

    document.firstElementChild.removeChild(document.querySelector('head'));
    document.firstElementChild.removeChild(document.querySelector('body'));
    
    closeBtn.addEventListener('click', reload);

  }

};

xhr.send();

function reload () {
  window.location.reload(true);
}
