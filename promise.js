async function getApi() 
{
    try{
        const response = await fetch('https://4c61-35-231-249-18.ngrok-free.app/');
        const data = await response;
        console.log(data);
    }
    catch(err){
        console.log(err);
    }
}

getApi()


