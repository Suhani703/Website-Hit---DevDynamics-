### Website Hit Counter System 

The project uses a publisher-subscriber system to create a website hit tracker, counting unique customer visits across devices (laptops, mobiles, tablets). It provides APIs to track visits, get the total visits for a website, and get visits by a specific customer. Using internal data structures, it ensures efficient and accurate visit tracking without external dependencies.

### Important Note

These APIs are deployed using Vercel and can be explored and tested directly via the comprehensive documentation on Postman:


- [Exportd Postman collection link](https://elements.getpostman.com/redirect?entityId=36249977-f4cd13d2-5bdc-4f55-b1a6-b28dd1abb2c4&entityType=collection)

- [API Documentation on Postman](https://documenter.getpostman.com/view/36249977/2sA3XMjPGd)


### Considerations for Edge Cases

-Add a Subscriber: Adds a subscriber to the specified topic based on its unique topic ID.
-Notify: Notifies the subscriber by sending a message. Confirms the successful subscription to the specified topic.
-Unsubscribed: Removes the subscriber from the specified topic, ensuring they no longer receive updates. Confirms the successful unsubscription to the subscriber.

### Conclusion

The project successfully implements a publisher-subscriber notification system to track unique customer visits to websites across multiple devices, using internal data structures. It provides APIs to monitor total and individual customer visits, offering insights into both website popularity and customer behavior without relying on external databases.
