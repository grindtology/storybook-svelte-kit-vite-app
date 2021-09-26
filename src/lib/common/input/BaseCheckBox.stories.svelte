<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf"
  import BaseCheckBox from "./BaseCheckBox.svelte"

</script>


<Meta
  title="common/input/BaseCheckBox"
  component={BaseCheckBox}
  argTypes={{
    bChecked: { control: "boolean" },
    sLabel: {controls:"text"},
     sColor: { type: "select", options:["","blue", "yellow", "red", "green"] },
     onTap: { action: ""} ,
  }}
/>

<Template let:args>
  <BaseCheckBox {...args}   on:click={args.onTap} />
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



