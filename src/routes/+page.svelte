
<script>
	 import { page } from '$app/stores'
	export let data
	const results =(data.twd.data);
//console.log(results);
//console.log("444"+request.body.fname);
</script>


{#if $page.data.user} 
  Welcome {$page.data.user}
{/if}



<a href="/cars">cars </a>
<input type="text" placeholder="Type here" class="input input-bordered input-success w-full max-w-xs" />
<input type="text" placeholder="Type here" class="input input-bordered input-success w-full max-w-xs" />
<input type="submit" value="Submit" class="btn" /> 










{#await results}
lodind
 <div class="bg-red-400  m-0 absolute top-0 h-0 w-full my-0 "><progress class="progress progress-primary w-100"></progress>   </div>
	
 {:then user}
 
 <div class="py-2 grid gap-4 md:grid-cols-2 grid-cols-1">
	 {#each user as user}
	 <a  class="list-none p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center" href={`/ro/${user.email}`}>

		
		 <h2 class="uppercase text-2xl"> {user.email}</h2>
	 </a>
	 {/each}
 </div>
 {:catch error}
	 <p style="color: red">{error.message}</p>
 {/await}
