<template>
  <!-- Remove this if you don't implement routing -->
  <ul class="filters">
    <li>
      <NuxtLink to="/" :class="{ selected: isAllFilter }">
        All
      </NuxtLink>
    </li>
    <li>
      <NuxtLink to="/active" :class="{ selected: isActiveFilter }">
        Active
      </NuxtLink>
    </li>
    <li>
      <NuxtLink to="/completed" :class="{ selected: isCompletedFilter }">
        Completed
      </NuxtLink>
    </li>
  </ul>
</template>
<script>
export default {
  computed: {
    isActiveFilter: function() {
      return this.filter === 'active'
    },
    isCompletedFilter: function() {
      return this.filter === 'completed'
    },
    isAllFilter: function() {
      return !this.isActiveFilter && !this.isCompletedFilter
    }
  },
  created() {
    this.filter = this.$route.params.filter
  }
}
</script>
