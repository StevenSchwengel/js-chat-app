
  // fetch (BASE_URL)
  //   .then(response => response.json())
  //   .then(data => generateChatHTML(data))

const BASE_URL = 'https://tiny-taco-server.herokuapp.com/api/v1/chats/'


const generateChatHTML = (data) => {
  const source = document.getElementById("users").innerHTML;
  const template = Handlebars.compile(source);
  const context = data;
  const html = template(context);
  document.querySelector(".chat").innerHTML = html;
  // then(data => console.log(data))
};

fetch (BASE_URL)
  .then(response => response.json())
  .then(data => generateChatHTML({chats:data}))


// const generateHTML = (data) => {
//   console.log('data', data);
//   // const name = data.name;
//
//   const source = document.getElementById("name").innerHTML;
//   const template = Handlebars.compile(source);
//   const context = data.name;
//   const html = template(context);
//
//   document.querySelector('.container').innerHTML = html;
