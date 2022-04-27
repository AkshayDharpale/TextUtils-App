function makeRequest(location){
    return new Promise((resolve, reject)=>{

        console.log(`Making request to ${location}` );

        if(location == "google"){
            resolve("google say Hiii....");
        }else{
            reject("We can ony Talk to google");
        }

    });
}

function processRequest(response){
    return new Promise((resolve, reject)=>{
        console.log("processing the response");
        resolve(`Extra Information:- ${response}`);
    });
}


makeRequest("Facebook").then(response =>{
    console.log("Response Received");
    return processRequest(response);
}).then((ProcessResponse) => {
    
    console.log(ProcessResponse);

}).catch(error=>{
     console.log(error);
});




/* async function doWork(){
    const response = await makeRequest("google");
    console.log("Response Received");
    const ProcessResponse = await processRequest(response);
    console.log(ProcessResponse);
}

doWork(); */
