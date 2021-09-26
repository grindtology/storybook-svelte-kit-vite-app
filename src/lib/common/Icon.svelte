<script>import Icon from '@iconify/svelte'

 let sWidth = "20"
 let sHeight = "20"
export let sSize = "sm"
export let bInline = false
export let sIcon = "home"
export let sColor = ""
export let sLabel = ""
export let bDisabled = false

$: {
  if(sSize === "lg") {
    sHeight = "40"
    sWidth = "40"
  } else if(sSize === "md"){
    sHeight = "30"
    sWidth = "30"
  } else if (sSize === "sm") {
    sHeight = "20"
    sWidth = "20"
  }
}
$: sOpacity = bDisabled ? "opacity-30" : ""
let sClass=`flex justify-start items-center ${sOpacity} `
$: {
if(sColor) {
  sClass += `text-${sColor}-500`
}
}
</script>

<div class={sClass}>
<Icon icon={`mdi:${sIcon}`} {bDisabled}  width={sWidth} height={sHeight} inline={bInline}  />
<div class="flex pl-2">{sLabel}</div>
</div>