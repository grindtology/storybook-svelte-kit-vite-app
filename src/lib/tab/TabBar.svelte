<script>
  //-----LIB
  import Tab from "./Tab.svelte"
  
  //-----2.STORES
  import {oColor, sTheme} from "$lib/stores/app"
  //-----5.DATA COMPUTED
  //-----3.DATA LOCAL
  const f = "TabBar"
  //-----4.PROPS
  export let sActiveTab = "Account"
    export let aoTab = [
    { sTitle: "Account", sPath: "/user", sIcon: "" },
    { sTitle: "Profile", sPath: "/profile", sIcon: "" },
  ]

  //-----8.METHODS
  export let onClick = (sTab) => {
    console.log("setTab", sTab)
    sActiveTab = sTab
  }


</script>

<div class="flex w-full {$oColor[$sTheme].bg2} ">
  {#each aoTab as oTab}
    <Tab {sActiveTab} {oTab} {onClick} />
  {/each}
</div>
