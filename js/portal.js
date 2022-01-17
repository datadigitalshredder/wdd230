const year = document.getElementById("year");
year.innerHTML = new Date().getFullYear();
const lastmod = document.querySelector('#lastmod');
lastmod.innerHTML = `<strong>Last modified</strong>: ${document.lastModified}`;