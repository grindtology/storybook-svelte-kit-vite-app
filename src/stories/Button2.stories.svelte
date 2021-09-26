<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf"
  import Button2 from "./Button2.svelte"
</script>

<Meta
  title="Button2"
  component={Button2}
  argTypes={{
    text: { control: "text" },
    disabled: { control: "boolean" },
    color: { control: "text" },
    sWidth: {
      control: { type: "select", options: ["w-full", "w-40", "w-20"] },
    },
    onClick: { action: "onTap" },
  }}
/>

<Template let:args>
  <Button2 {...args} on:click={args.onClick} />
</Template>

<Story
  name="Disabled"
  args={{
    disabled: true,
    text: "my textsss",
    color: ""
  }}
/>

<Story
  name="Enabled"
  args={{
    text: "enabled",
    color:""
  }}
/>
<Story
  name="full width"
  args={{
    sWidth: "w-full",
    text: "full width Button",
  }}
/>

<Story
  name="Small"
  args={{
    sWidth: "w-40",
    text: "w-40 Button",
  }}
/>
