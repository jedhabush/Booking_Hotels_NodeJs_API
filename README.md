# Booking_Hotels_NodeJs_API
This is a NodeJs backend project to create a server API to fetch and receive data to and from the front-end. To understand the context of this backend. Let me talk a bit about the proposed front-end which if I were to do it I would be using **ReactJs**. It is a hotel booking system to book rooms similar to (Airbnb). You should be able to choose the destination , price-range, date of the stay and number of rooms needed. Then, the system will fetch all related data of that particular search. Let's say you decided to reserve a room on a particular date and then let's say another user happen to attempt to reserve the exact same room on the same date, in this case you will see that the room is not available anymore as it has already been booked. These type of validations should happen on the backend to avoid data tampering.

# Technologies 

- **NodeJs** <br/>
I used Node.js for server-side operations, and the benefits of using nodeJs as the backend is the ability to **asynchronous request handling**. So instead of waiting for the function to complete after fetching the data, Node.js will run the next requests, while processing the inputs and outputs (like fetching data) in the background. This is possible because of callbacks and promises.
- **nodemon** <br/>
I stumbled upon this library while making this project. It is a very useful tool to watch and update changes as they happen on the backend. It helped me debug my code as I go which saved me a lot of time.
- **mongoDB** <br/>
This technology is self explanatory but for non techie readers it is a NoSQL database used to save unstructured data (MongoDB is a schema-less NoSQL document database). MongoDB is used to save unstructured data in JSON format witht the downside of being not able to impelement advanced analytics and joins like SQL databases support. It is full cloud-based developer data platform, easy to install and use.
- **mongoose** <br/>
Generally using mongoDb means there's a good chance that the project would also use mongoose as part of the equation. Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node. js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB. 
- **dotenv** <br/>
Another tool I dicovered while playing around with this API project. The dotenv package is a great way to keep passwords, API keys, and other sensitive data out of my code. It allows me to create environment variables in a . env file instead of putting them in my code.
- **bcrypt** <br/>
To make this backend project more realsitic I used this tool to hash and salt passwords securely. It means when the user password information get sent to the DB it gets encoded which prevents non authorized users to see these sensitive information.
- **Json Web Token JWT** <br/>
To spice things even more, I opted to use JWT. In summary, it is a good way of securely transmitting information between parties because they can be signed, which means you can be sure that the senders are who they say they are (authentication). Additionally, the structure of a JWT allows you to verify that the content hasn't been tampered with.
- **cookie-parser** <br/>
This is a pretty decent library to parses cookies and puts the cookie information on req object in the middleware. It will also decrypt signed cookies provided you know the secret. I used a random key generator and was stored in the ```.env``` file which is not included in this repo but you got the idea.



