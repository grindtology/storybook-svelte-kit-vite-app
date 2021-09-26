<script>
  import Icon from "../Icon.svelte"
  export let sColor = ""
  export let bChecked = false
  export let sLabel = ""
  export let onTap = ""
const f = "BaseCheckBox"
  const _onTap = () => {
    console.log(f, "_onTap")
    if(onTap) onTap()
  }
  $:sIcon = bChecked ? "checkbox-marked-outline" : "checkbox-blank-outline"
</script>
  <div class="flex pt-2 pb-2" on:click={_onTap}>
 
      <Icon {sColor} {sIcon} {sLabel}  />
 
  </div>

