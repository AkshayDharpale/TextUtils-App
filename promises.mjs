let MyPromise = new Promise((resolve, reject)=>{
  
        resolve("Vishal Shinde");
        reject("Akshay Dharpale");


});

MyPromise.then((message)=>{
    console.log("this is message from THEN(Success):-  " + message);
}).catch((messsage) =>{
    console.log("this is the message from CATCH(Failed):-  " + messsage);
});
    

    
