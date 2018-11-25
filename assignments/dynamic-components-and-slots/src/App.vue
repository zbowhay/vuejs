<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <br>
        <button class="btn btn-primary" @click="setColor('blue')">Load Blue Template</button>
        <button class="btn btn-success" @click="setColor('green')">Load Green Template</button>
        <button class="btn btn-danger" @click="setColor('red')">Load Red Template</button>
        <hr>
        <component :is="currentComponent">
          <h1>I'm the {{color}} component!</h1>
        </component>
      </div>
    </div>
  </div>
</template>

<script>
  import Blue from './components/Blue.vue';
  import Green from './components/Green.vue';
  import Red from './components/Red.vue';

  export default {
    data: () => {
      return {
        color: 'blue'
      };
    },
    computed: {
      currentComponent() {
        return `app-${this.color}`;
      }
    },
    methods: {
      setColor(c) {
        this.color = c;
      }
    },
    components: {
      appBlue: Blue,
      appGreen: Green,
      appRed: Red
    }
  }
</script>

<style>
</style>
