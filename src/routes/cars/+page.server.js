import { tot } from "$lib/tot";

export const load = async function({fetch,locals}) {
	console.log(locals);
	let data = await tot.find().toArray();
		data=(JSON.parse(JSON.stringify(data)));
	//console.log(JSON.parse(JSON.stringify(data)));
	console.log("11111111111111111111111111111111");
	return {
		     twd:{ 
		      data
		     }
	
}
}
