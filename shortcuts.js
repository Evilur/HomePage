/** Append the shortcut HTML object to the DOM 
 * shortcut: shortcut object (fields: label, url)
*/
function dom_append_shortcut(shortcut) {
    container.innerHTML += `
    <a class='shortcut' href='${shortcut.url}'>
        <div class='icon-container'>
            <img src='icons/shortcuts/${get_domain(shortcut.url)}'//>
        </div>
        <span class='label'>${shortcut.label}</span>
    </a>
    `
}

/** Get the domain name from the URL
 * url: the address to get the domain from
 * return: the domain name
 */
function get_domain(url) {
    const url_obj = new URL(url);
    return url_obj.hostname.replace('www.','');
}

/* Get the shortcut container HTML object */
const container = document.getElementById('shortcut-container');

/* Add all shortcuts to the DOM */
for (var i in shortcuts) dom_append_shortcut(shortcuts[i])