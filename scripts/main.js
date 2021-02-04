// Whole-script strict mode syntax
//'use strict';


// fetch (BASE_URL)
//   .then(response => response.json())
//   .then(data => generateChatHTML(data))

const BASE_URL = 'https://tiny-taco-server.herokuapp.com/api/v1/chats/'


//
//  Section that gets a new message...
//

document.getElementById("myBtn").addEventListener("click", function()nMessage(user, cMessage));


    function nMessage(user, cMessage) {
      var user, cMessage;
      user = document.getElementById("name").value;
      cMessage = document.getElementById("message").value;

      document.GetElementById("name").InnerHTML = user;
      document.GetElementById("message").InnerHTML = cMessage;

      const newSingleChat = user + cMessage;

      fetch(BASE_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newSingleChat),
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Bad Post Attempt');
          }
          return response.json()
        })
        .then(data => console.log('Message Added to Chat'))
        .catch(error => console.log('Error:', error));
    };

//    });

//
//  Section that DISPLAYS ALL CURRENT MESSAGES EVERY SECOND
//


      const generateChatHTML = (data) => {
        const source = document.getElementById("users").innerHTML;
        const template = Handlebars.compile(source);
        const context = data;
        const html = template(context);
        document.querySelector(".chat").innerHTML = html;
        console.log('data', data);
      };

      function updateEverySecond() {
        var refresh = 1000; // Refresh rate in milli seconds
        fetch(BASE_URL)
          .then(response => response.json())
          .then(data => generateChatHTML({chats: data}))
         }

      updateEverySecond();


  //
  // fetch (BASE_URL)
  //   .then(response => response.json())
  //   .then(data => generateChatHTML({chats:data}))
  //
