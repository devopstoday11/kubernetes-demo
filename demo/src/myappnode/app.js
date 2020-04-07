const express = require('express')
const https = require('https')
const { ServiceBusClient } = require("@azure/service-bus"); 
const connectionString = process.env.SERVICEBUS_TODO_CONNECTION;
const queueName = process.env.QUEUE_NAME; 
const app = express()
const port = 3000

const sbClient = ServiceBusClient.createFromConnectionString(connectionString); 
const queueClient = sbClient.createQueueClient(queueName);
const sender = queueClient.createSender();
const message= {
    body: `Message sent`,
    label: `test`
  };
const options = {
  //  hostname: 'todo-myapp-todo',
    hostname: 'cloud.tomaskubica.in',
    port: 8080,
    path: '/api/todo',
    method: 'GET'
  }

app.get('/', function(req, res) {
    console.log('Sending message...');
    sender.send(message);
    console.log('Calling todo API...');
    const apireq = https.request(options, apires => {
        console.log(`statusCode: ${apires.statusCode}`)
      
        apires.on('data', d => {
          process.stdout.write(d)
        })
      });
    res.send('Sent');
  });

app.listen(port, () => console.log(`App is listening`))