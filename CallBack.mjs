const userLeft = true;
const UserSubscribed = false;

function WatchingAmazonPrime(callBack, callBackError, Error){
    if(userLeft){
        callBack({
            name: "Akshay Dharpale",
            message: "User left"
        });

    }
    
    if (UserSubscribed) {
        callBackError({
            name: "Akshay Dharpale",
            message: "User Subscribed the Amazon"
    });

  }


    Error("Network Error");
        
    
}

WatchingAmazonPrime(
    
(messsage)=>{
   console.log(messsage.name);
   console.log(messsage.message)
},

(messsage)=>{
    console.log(messsage.name);
    console.log(messsage.message)
},

(error) =>{
    console.log(error);
}

);


