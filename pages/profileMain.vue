<template>
  <ProfileMainComponent> </ProfileMainComponent>
</template>
<script>
export default {
  middleware: ['auth'],
  layout: 'main'
}
</script>
