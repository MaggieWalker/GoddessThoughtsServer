This server is intended to be paired with Goddess Thoughts - an app that collects, stores, and displays important life realization from Maggie, Olivia, and Amelia, the women of the Goddess Palace. 

This server's sole responsibility is to await HTTP requests from a webhook configured with Twilio.

When a text is sent to Goddess Thoughts, it is received via Twilio. The configured webhook then sends an HTTP request here, with the message body, to be re-routed to the associated Firebase database.

We look forward to receiving your insights!

Hosted @ : https://goddess-thoughts.herokuapp.com/

This server uses:

|_| express

|_| dotenv

|_| firebase

