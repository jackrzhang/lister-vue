var lister = new Vue({
  el: '#lister',
  data: {
    input: '',
    items: [
      { id: 0, isActive: true, text: 'Buy milk.' },
      { id: 1, isActive: false, text: 'Learn Vue.' }
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
