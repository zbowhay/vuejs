new Vue({
  el: '#app',
  data: {
    title: 'Hello World!',
    link: 'http://www.google.com/',
    finishedLink: `<a href="http://www.google.com">Google</a>`
  },
  methods: {
    changeTitle: function(event) {
      this.title = event.target.value;
    }
  }
});