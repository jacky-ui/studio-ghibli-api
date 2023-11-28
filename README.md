# studio-ghibli-api

This was made for a friend who wanted to create a project centered around Studio Ghibli films, but noticed that there weren't a lot of Studio Ghibli APIs out there. This API was created with node.js, express.js and written with JavaScript. I've also used express-rate-limit to limit the amount of request that can be made. 10 requests/15mins. Credit to express-rate-limit. [Please check them out here: https://www.npmjs.com/package/express-rate-limit](https://www.npmjs.com/package/express-rate-limit) 
Currently deployed with Cyclic.

This API includes the following about Studio Ghibli films:
<ul>
  <li>Poster/Image</li>
  <li>Genre</li>
  <li>Ratings</li>
  <li>Synopsis</li>
  <li>Director</li>
  <li>Release Date</li>
  <li>More to be added!!</li>
</ul>

## Tech Stack

<ul>
  <li>Back-End: JavaScript, Node.js, Express.js</li>
  <li>Libraries: express-rate-limit</li>
</ul>

<p align="left">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=js,react,nodejs,expres"/>
  </a>
</p>

### `Run and Install Locally`

Clone the project in desired folder from the terminal

    git clone https://github.com/jacky-ui/studio-ghibli-api.git

Once cloned, you will need to insstall all the dependencies on the server side. This can be done by running the below commands in your terminal. Make sure you are in the project folder/directory

    npm i
    
Finally, to run studio-ghibli-api you would have to open your IDE, open the project folder if it isn't already open, then:

    npx index.js

### `Environment Variables`

To run this project, you will need to add the following environment variables to your .env file

PORT: The port on your local machine on which you want to run the server. If you're not sure which port to use, a good default is 8080.

URL: A URL path for HTTP requests. If you are running on your local machine, this should be set to http://localhost:<insert port>
