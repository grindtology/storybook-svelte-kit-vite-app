<script>
  export let sText = "text"
  export let sColor = "red"
  export let onTap = null
  export let bDisabled = false
  export let sIcon = ""
  export let sWidth = "w-full"
  import Icon from "../Icon.svelte"
  // METHODS
  const f= "BaseButton.svelte"
  const tap = () => {
    console.log(f, "tap")
    if (!bDisabled && onTap) {
      onTap()
    }
  }
  $: opacity = () => {
    return bDisabled ? "opacity-30" : ""
  }
</script>


<button
  on:click={tap}
  class="pl-2 flex items-center justify-start  {opacity()}  {sWidth}  px-6 py-2 text-xs font-medium leading-6 text-center {`text-${sColor}-500`} uppercase transition bg-transparent border-2 {`border-${sColor}-500`} rounded hover:{`bg-${sColor}-50`} focus:outline-none"
>
<Icon {sIcon} />
 <div class="pl-2"> {sText}</div>
</button>
