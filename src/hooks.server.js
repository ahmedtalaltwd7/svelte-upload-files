import {start_mongo} from "$lib/db"
import {tot} from "$lib/tot"
start_mongo ().then (()=> {
console.log("Starting");

}).catch (err => console.error(err));

export const handle = (async ({ event, resolve }) => {
 // let data = await tot.find().toArray();
		//data=(JSON.parse(JSON.stringify(data)));
    event.locals.user = "twd king" 
   //event.locals.user2 = await event.cookies.get('a_session_console_legacy');
    
   console.log(event.url.href); 
  
    const response = await resolve(event);
  
    return response; 
  }) 



