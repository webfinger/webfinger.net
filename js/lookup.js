const params = new URLSearchParams(window.location.search);
const resource = params.get('resource');

if (resource) {
  fetch("https://client.webfinger.net/?resource="+resource)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      document.getElementById("resource").value = data.resource;
      document.getElementById("logs").innerText = data.logs;
      document.getElementById("jrd").innerText = JSON.stringify(data.jrd, null, 2);
    });
}
