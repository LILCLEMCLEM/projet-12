function getUrl() {
  const url = window.location.href;
  const id = url.split("/").pop();
  return id;
}

export default getUrl;
