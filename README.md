# Front-End

### Deployed to: https://gifted-darwin-f23160.netlify.com/

### Trello Board: https://trello.com/b/9kBU5226/build-week
### Product Canvas: https://docs.google.com/document/d/1Hnm_dfBQ3008gCqO0bb2n3Dc6GF7xzna2v1Gc5s8pKg/edit?usp=sharing
### Color Palette: https://coolors.co/333333-4e4e4e-ffffff-232328-46d2a3

#### Styled with: https://www.styled-components.com/


* Take a look at the endpoints that our API has to offer in `server.js`.

  * **[POST]** * to `/api/login`: returns a token to be added to the header of all other requests. Pass in the following credentials as the `body` of the request: `{ username: 'Lambda School', password: 'i<3Lambd4' }`
  * **[GET]** to `/api/clients`: returns the list of clients.
  * **[GET]** to `/api/clients/123`: returns the client with the id passed as part of the URL (123 in example).
  * **[POST]** to `/api/clients`: creates a client and return the new list of clients. Pass the client as the `body` of the request (the second argument passed to `axios.post`).
  * **[PUT]** to `/api/clients/:id`: updates the client using the `id` passed as part of the URL. Send the an object with the updated information as the `body` of the request (the second argument passed to `axios.put`).
  * **[DELETE]** to `/api/clients/123`: removes the client using the `id` passed as part of the URL (123 in example).


```js
{
   id: 0,
   name: 'Bob',
   village: 'MARAKA',
   loanAmount: 200,
   loanInitDate: Date.now(),
   dueDate: new Date('1995-12-17T03:24:00'),
   maizeHarvest: 50,
   maizeToSell: 25
 }
```

