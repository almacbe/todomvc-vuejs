<template>
  <li :class="{ completed: item.completed }">
    <div class="view">
      <input class="toggle" type="checkbox" :checked="item.completed" />
      <label>{{ item.description }}</label>
      <button class="destroy" @click="remove"></button>
    </div>
    <input class="edit" value="{ item.description }" />
  </li>
  <!--        <li>-->
  <!--          <div class="view">-->
  <!--            <input class="toggle" type="checkbox" />-->
  <!--            <label>Buy a unicorn</label>-->
  <!--            <button class="destroy"></button>-->
  <!--          </div>-->
  <!--          <input class="edit" value="Rule the web" />-->
  <!--        </li>-->
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    remove: function(event) {
      this.$store.commit('todoItems/removeItem', this.item)
    }
  }
}
</script>
