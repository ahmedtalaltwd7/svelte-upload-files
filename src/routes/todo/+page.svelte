<script>
    // /** @type {import('./$types').PageData} */
    // export let data;
    import { enhance } from '$app/forms';
    let fname="";
    let lname="";
    export let form
    export let data
    export let mes="";

</script>

<!-- svelte-ignore missing-declaration -->
<form method="post" action="?/reg" 
use:enhance={() => {
    return ({ form, result }) => {
      if (result.type === 'success') {
        mes=JSON.stringify(result.data);
      console.log(mes);
       // console.log(newTodo);
      }
    };
  }}


>

{#if mes}
<p
class="success-toast"
in:fade={{ duration: 150 }}
out:fade={{ duration: 150 }}
>
{mes}
</p>

{/if}


   <!-- else content here -->

    <input type="text" name="fname" placeholder="Type here" class="input input-bordered input-success w-full max-w-xs" bind:value={fname} />
    <input type="text" name="lname" placeholder="Type here" class="input input-bordered input-success w-full max-w-xs" bind:value={lname} />
    <input type="submit" value="Submit" class="btn" />

</form>