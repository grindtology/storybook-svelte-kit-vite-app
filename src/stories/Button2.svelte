<script>
  export let text = "..."
  export let color = ""
  export let onTap = () => console.log("onTap Button.svelte")
  export let disabled = false
  export let sWidth = "w-full"
  //----COMP
  import Test from "../lib/common/Test.svelte"
  // METHODS
  const tap = () => {
    if (!disabled) {
      onTap()
    }
  }
  const getColor = (color) => {
    let sResult = ""
    switch (color) {
      case "info":
        sResult = "blue-500"
        break
      case "success":
        sResult = "green-500"
        break
      case "warning":
        sResult = "yellow-500"
        break
      case "error":
        sResult = "red-400"
        break
      default:
        sResult = "gray-600"
    }
    return sResult
  }
  $: textColor = "text-" + getColor(color)
  $: bgColor = () => {
    let sResult = ""
    return sResult
  }
  $: borderColor = "border-" + getColor(color)
  $: opacity = () => {
    return disabled ? "opacity-30" : ""
  }
</script>
<div>
<Test />
<button
  on:click={tap}
  class="inline-block {opacity()}  {sWidth} {bgColor()} px-6 py-2 text-xs font-medium leading-6 text-center {textColor} uppercase transition bg-transparent border-2 {borderColor} rounded hover:bg-gray-200 focus:outline-none"
>
  {text}
</button>
</div>