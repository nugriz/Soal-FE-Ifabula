fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => {
    return res.json();
  })
  .then(data => {
    console.log(data)
  })
  .catch(error => {
    console.error(error);
  });