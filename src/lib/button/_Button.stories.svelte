<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf"
  import BaseButton from "./_Button.svelte"

</script>

<Meta
  title="common/button/BaseButton"
  component={BaseButton}
  argTypes={{
    bDisabled: { control: "boolean" },
    sIcon: {type: "select", options:["home", "arrow-back"]},
    sText: { control: "text" },
    sColor: { type: "select", options:["","blue", "yellow", "red", "green"] },
    sWidth: {
      control: { type: "select", options: ["w-full", "w-40", "w-20"] },
    },
     onClick: { action: ""} ,
  }}
/>

<Template let:args>
  <BaseButton {...args} on:click = {args.onClick} />
</Template>

<Story
  name="Generic"
  args={{
    bDisabled: false,
    sText: "text",
    sIcon: "",
    sColor: "green",
    sWidth:""
  }}
/>

<Story
  name="Create"
  args={{
    sText: "create",
    sColor:"green",
  }}
/>
<Story
  name="full width"
  args={{
    sWidth: "w-full",
    sText: "full width Button",
    sColor:"",
  }}
/>

<Story
  name="Small"
  args={{
    sWidth: "w-40",
    sText: "w-40 Button",
    sColor:"",
  }}
/>
