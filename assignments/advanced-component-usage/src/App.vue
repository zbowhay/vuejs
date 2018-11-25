<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <app-quote>
            <h2 slot="title">{{quoteTitle}}</h2>
            <p slot="content">{{quote}}</p>
          </app-quote>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Quote from './components/Quote.vue';
export default {
  name: 'app',
  data: () => {
    return {
      quoteTitle: 'The Quote',
      quote: 'A wonderful quote!'
    };
  },
  components: {
    appQuote: Quote
  },
}
</script>

<style>
 #app {
   padding: 2rem;
 }
</style>
