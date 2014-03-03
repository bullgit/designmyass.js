# designmyass.js

## What?
designmyass.js shows the source code of your site to the user. Instead of seeing the rendered site the user only sees the site's code.

## Why?
You have a site and want to stop care about design and readability.

## How?
You can simply include the script anywhere in your document. For best performance put the script before closing the body tag.

```javascript
    <script src="path/to/dma.js"></script>
```

To make things easier for you, we also made a bookmark to use designmyass.js.
Drag'n'Drop the following link into your bookmarks, to run our script on any site. [designmyass.js]( javascript:var xhr=new XMLHttpRequest();xhr.open('GET', window.location.href);xhr.onreadystatechange=function(){if ( xhr.status==200 && xhr.readyState==4 ){var pre=document.createElement('pre');pre.style.width='100%';pre.style.height='100%';pre.style.position='absolute';pre.style.overflow='scroll';pre.style.boxSizing='border-box';pre.style.padding='1em';pre.style.margin='0';pre.style.border='1em solid';var code=document.createElement('code');code.innerText=xhr.responseText;pre.appendChild(code);document.firstElementChild.style.margin='0';document.firstElementChild.style.width='100%';document.firstElementChild.style.height='100%';document.firstElementChild.appendChild(pre);document.firstElementChild.removeChild(document.querySelector('head'));document.firstElementChild.removeChild(document.querySelector('body'));}};xhr.send();)