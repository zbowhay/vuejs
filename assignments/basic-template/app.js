new Vue({
  el: '#exercise',
  data: {
    name: 'Zachary Bowhay',
    age: 24,
    image: 'https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&h=350'
  },
  methods: {
    nameAndAge: function() {
      return `${this.name} (${this.age})`;
    }
  }
});