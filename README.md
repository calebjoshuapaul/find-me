# find-me
The site is published at https://calebjoshuapaul.github.io/find-me/

This app uses cloudflare worker [find-me-worker](https://github.com/calebjoshuapaul/find-me-worker/) to get nearby locations and list them.

- The code starts by adding an event listener to the window.load event, which is fired when the page loads.
- The code then fetches data from a URL and assigns it to a variable called response .
- It then sends that response object as JSON to another function called fetchData() , which returns a promise of type Promise<Object> .
- This means that this function will return either an Object or undefined depending on whether or not there was an error in sending the request.
- If there was no error, then the promise resolves with whatever data is returned from the server.

- The serveData() function starts by calling fetchData() and passing it a callback function for handling errors if any occur during the request process.
- Then it creates two variables: mapImage and list .
- These are used later in order to create elements inside of list , which is used as part of creating content for each section on our website (elements inside list are created using document.createElement("li") ).
- Next, we iterate through all of the data items in response and assign them to variables called i and name respectively; these values correspond with index number 0-based array indexes starting at 0 (i=0) and name=“name” respectively).
- We also
–
- The code is a simple JavaScript function that fetches the data from an API endpoint.
- The code also serves the data to a map on the page.
