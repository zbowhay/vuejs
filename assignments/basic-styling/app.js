new Vue({
  el: '#exercise',
  data: {
    shrinkOrHighlight: {
      highlight: false,
      shrink: true
    },
    largeText: 'largeText',
    padMeUp: 'padMeUp',
    userClass: 'bg-blue',
    userClass2: 'bg-red',
    rotate45: '',
    userStyles: 'background-color: orange;',
    status: '',
    statusPx: -500
  },
  methods: {
    startEffect: function() {
      const that = this;
      setInterval(function() {
        that.shrinkOrHighlight.highlight = !that.shrinkOrHighlight.highlight;
        that.shrinkOrHighlight.shrink = !that.shrinkOrHighlight.shrink;
      }, 500);
    },
    toggleRotate45: function(e) {
      console.log(e.target.checked);
      this.rotate45 = e.target.checked ? 'rotate45' : '';
    },
    startProgress: function() {
      const that = this;
      setInterval(function() {
        that.statusPx += that.statusPx < 0 ? (Math.random() * 50) : 0;
        that.statusPx = that.statusPx > 0 ? 0 : that.statusPx;
        that.status = `left: ${that.statusPx}px;`;
      }, 150);
    }
  }
});