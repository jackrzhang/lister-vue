var lister = new Vue({
  el: '#lister',
  data: {
    input: '',
    items: [
    ],
    filter: 'all'
  },
  computed: {
    showControl: function () {
      return this.items.length !== 0
    },
    filteredItems: function () {
      switch (this.filter) {
        case 'all':
          return this.items
        case 'active':
          return this.items.filter(function (item) {
            return item.isActive
          })
        case 'complete':
          return this.items.filter(function (item) {
            return !item.isActive
          })
        default:
          return this.items
      }
    }
  }
})
