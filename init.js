/**
 * Fetches a resource from the server and displays it in the page.
 *
 * @param {string} url The URL of the resource to fetch.
 * @param {string} tag The tag to use to display the resource.
 *
 */
function fetchResource(url, tag, position) {
  return fetch(url).then(response => response.text()).then(resource => {
    document.getElementsByTagName(tag)[0].insertAdjacentHTML(position, resource);
  }).catch(error => {
    console.log(error);
  });
}

/**
 * Fetches a resource from the server and displays it in the page.
 *
 * @param {string} url The URL of the resource to fetch.
 * @param {string} tag The tag to use to display the resource.
 *
 */
async function writeResource(url, id) {
  try
  {
    const response = await fetch(url);
    const resource = await response.text();
    document.getElementById(id).innerHTML = resource;
  } catch (error)
  {
    console.log(error);
  }
}

//Fetches the resources from the server and displays them in the page.
fetchResource('/library/head-links.html', 'title', 'afterend'); //head links
fetchResource('/library/site-header.html', 'header', 'beforeend'); //header
writeResource('/library/search-form.html', 'search-container'); //search form
writeResource('/library/contact-form.html', 'contact-form'); //contact form
fetchResource('/library/site-footer.html', 'footer', 'beforeend'); //footer
