import { tot } from "$lib/tot";
import { data } from "autoprefixer";



export const load = async function({fetch,locals}) {
	console.log(locals);
	let data = await tot.find({ email:"twdww@twd.com" }).toArray()
		data=(JSON.parse(JSON.stringify(data)));
	console.log(JSON.parse(JSON.stringify(data)));
	console.log("2222222222222222222222222222222222");
	return {
		     twd:{ 
		      data,
			  locals: locals
		     }
	
}
}
// const serializeNonPOJOs = (data) => {
// 	return JSON.parse(JSON.stringify(data));
// };

// export const load  = async function ({ }) {
//     const data = await tot.find({}).toArray();
//     console.log(data);


//     return {
//      props:{ 
//          data
//      }
       
       
    
//     }
    
// }
 
// export const load = async function()  { 
//     const data = await tot.find({}).toArray();
       


//   }