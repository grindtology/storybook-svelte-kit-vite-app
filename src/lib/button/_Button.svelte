<script>
  //-----1.LIB
  import Icon from '$lib/icon/_Icon.svelte'
  import { oColor, sTheme } from '$lib/stores/app'
  import Text2 from '$lib/text/Text2.svelte'
  //-----2.STORES

  //-----3.DATA LOCAL
  const f = '_Button.svelte'
  let sHeight = ''
  let sOpacity = ''

  //-----4.PROPS
  export let sText = 'text'
  export let bDisabled = false
  export let onClick = null
  export let sColor = 'border'
  export let sIcon = ''
  export let sPadding = 'p-2'
  export let sSize = ''
  export let sWidth = 'w-full'
  export let sAlign = 'start'

  //-----5.DATA COMPUTED

  //-----6.DATA WATCH
  $: {
    if (sSize === 'lg') {
      sPadding = 'p-2'
    }
    if (bDisabled) {
      sOpacity = 'opacity-30'
    }
  }

  //-----8.METHODS
  const _onClick = () => {
    console.log(f, '_onClick')
    if (!bDisabled && onClick) {
      onClick()
    }
  }
</script>

<button
  on:click={_onClick}
  class="{sPadding} flex items-center
  justify-{sAlign} {sHeight} {sOpacity}  {sWidth}  
   text-xs font-medium leading-6  
   uppercase transition 
  bg-transparent border-2 
shadow-md
  border-{$oColor[$sTheme][sColor]}
  text-{$oColor[$sTheme][sColor]}
  rounded hover:bg-{$oColor[$sTheme].bg3}
  focus:outline-none">
  {#if sIcon}
    <Icon {sIcon} {sSize} sLabel={sText} />
  {:else}
    <Text2 {sText} />
  {/if}
  <!-- <div class="pl-2 w-full text-left"> {sText}</div> -->
</button>
