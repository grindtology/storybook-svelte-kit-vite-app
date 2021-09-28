<script>
  //-----1.LIB
    import Button from "$lib/button/_Button.svelte"
  import {goto} from "$app/navigation"

</script>
<!-- <svelte:body style="background-color:black;"/> -->

<div class=" grid grid-flow-row p-3 grid-cols-2 gap-3">
  <Button sIcon="calendar"  sText="week schedule" sSize="lg" onClick={() => goto("/schedule")} />
  <Button sIcon="email" sText="messages" sSize="lg" onClick={() => goto("/message")} />
  <Button sIcon="run" sText="training" sSize="lg" onClick={() => goto("/training")} />
    <Button sIcon="person" sText="account" sSize="lg" onClick={() => goto("/account")} />
      <Button sIcon="home" sText="music" sSize="lg" onClick={() => goto("/music")} />
           <Button sIcon="settings" sText="settings" sSize="lg" onClick={() => goto("/settings")} />
</div>
