var lister = new Vue({
  el: '#lister',
  data: {
    input: '',
    items: [
      { id: 0, isActive: true, isEditing: false, editedText: '', text: 'Buy milk.' },
      { id: 1, isActive: true, isEditing: false, editedText: '', text: 'Learn Vue.' }
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
  },
  methods: {
    addItem: function () {
      this.items.push({
        id: this.items.reduce(function (maxId, item) {
          return Math.max(item.id, maxId)
        }, -1) + 1,
        isActive: true,
        isEditing: false,
        editedText: '',
        text: this.input
      })

      this.input = ''
    },
    removeItem: function (id) {
      this.items = this.items.filter(function (item) {
        return item.id !== id
      })
    },
    checkItem: function (id) {
      console.log('tri')
      this.items = this.items.map(function (item) {
        return item.id === id ?
          Object.assign({}, item, { isActive: !item.isActive }) :
          item
      })
    },
    editItem: function (id) {
      this.items = this.items.map(function (item) {
        return item.id === id ?
          Object.assign({}, item, { isEditing: true, editedText: item.text }) :
          item
      })
    },
    completeEdit: function (id) {
      this.items = this.items.map(function (item) {
        return item.id === id ?
          Object.assign({}, item, {
            isEditing: false,
            editedText: '',
            text: item.editedText
          }) : item
      })
    },
    cancelEdit: function (id) {
      this.items = this.items.map(function (item) {
        return item.id === id ?
          Object.assign({}, item, { isEditing: false, editedText: '' }) :
          item
      })
    }
  },
  directives: {
    focus: {
      inserted: function (el) {
        el.focus()
      }
    }
  }
})
