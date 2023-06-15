<template>
  <div>
    <slot name="header"></slot>

    <div class="content">
      <slot name="content"></slot>
    </div>

    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyComponent'
}
</script>

<style lang="scss">
.content {
  margin-top: 20px;
}

.footer {
  margin-top: 40px;
}
</style>
