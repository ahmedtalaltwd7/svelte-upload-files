<script>
   import { page } from '$app/stores'
    import "../app.css";
  </script>



<div class="navbar bg-base-100">
  <div class="flex-1">
    <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div class="flex-none gap-2">
    <div class="form-control">
      <input type="text" placeholder="Search" class="input input-bordered" />
    </div>
    <div class="dropdown dropdown-end">
      <label tabindex="0" class="btn btn-ghost btn-circle avatar">
        <div class="w-10 rounded-full">
          <img src="./favicon.png" />
        </div>
      </label>
      {#if $page.data.user}
  Welcome:<b>{$page.data.user}</b>
{/if}
      <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a class="justify-between">
            Profile
            <span class="badge">New</span>
          </a>
        </li>
        <li><a href="/todo">Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
{#if $page.data.user2}
Welcome:<b>{$page.data.user2}</b>
{/if}
  <slot />