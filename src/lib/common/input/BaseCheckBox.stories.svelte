<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf"
  import BaseCheckBox from "./BaseCheckBox.svelte"

  let bCheck = false
const onTap = () =>{ console.log('test')
bCheck = !bCheck}

// continue
// make BaseCheckBox > BaseMarker
// Base marker will only have argTypes
// CheckBox will have toggle script, and no argTypes (all defined in script tags, see above)
</script>


<Meta
  title="common/input/BaseCheckBox"
  component={BaseCheckBox}
  argTypes={{
   // bChecked: bCheck,
    sLabel: {controls:"text"},
     sColor: { type: "select", options:["","blue", "yellow", "red", "green"] },
    // onTap: { action: test()} 
  }}
/>

<Template let:args>
  <BaseCheckBox {...args} bChecked={bCheck}  {onTap} />
</Template>

<Story
  name="unchecked"
  args={{
   bChecked: false,
   sLabel: "label"
  }}
/>
<Story
  name="checked"
  args={{
   bChecked: true,
   sLabel: "label"
  }}
/>



