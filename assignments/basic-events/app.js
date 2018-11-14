new Vue({
    el: '#exercise',
    data: {
      value: ''
    },
    methods: {
      alert: function() {
        window.alert('Fire!');
      },
      store: function(event) {
        this.value = event.target.value;
      }
    }
  });