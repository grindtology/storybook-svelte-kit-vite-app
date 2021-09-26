<script>
  import "../styles/tailwind.css";
  // import Button from "../stories/Button.svelte"
  import BaseButton from "../lib/common/button/BaseButton.svelte"

  let x = "whatever"
  function testClick () {
    x = "test"
    console.log('test click')
  }
  
</script>


<div class="flex flex-col justify-center p-4 mb-12 align-middle">
  <h1 class="text-4xl font-light text-center text-purple-700">Welcome to SvelteKit</h1>

  <p class="mt-2 mb-4 text-center">
    Visit
    <a
      class="text-purple-400 hover:text-pink-700 hover:underline"
      href="https://kit.svelte.dev"
    >
      kit.svelte.dev
    </a>
    to read the documentation.
  </p>
  {x}
  <!-- <Button label="label" primary={true} backgroundColor="#c63333" size="large" onClick={() => testClick()}/> -->
<BaseButton sIcon="home" sText="tesst" sColor="blue"  />
</div>
