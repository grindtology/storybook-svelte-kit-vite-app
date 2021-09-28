<script>
  //-----1.LIB
  import Button from '$lib/button/_Button.svelte'
  import Header from '$lib/gui/Header.svelte'
  import Back from '$lib/icon/Back.svelte'
  import { goto } from '$app/navigation'

  //-----8.METHODS
</script>

<Header sTitle1="Account">
  <div slot="btn1"><Back /></div>
</Header>
<div class="grid grid-flow-row p-3 grid-cols-2 gap-3">
  <Button sIcon="person" sText="profile" sSize="lg" onClick={() => goto('/account/profile')} />
  <Button sIcon="share-variant-outline" sText="follow" sSize="lg" onClick={() => goto('/account/follow')} />
  <Button sIcon="store" sText="club" sSize="lg" onClick={() => goto('/account/club')} />
</div>
