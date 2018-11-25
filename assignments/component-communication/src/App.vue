<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <header>
                    <h1>Server Status</h1>
                </header>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <ul class="list-group">
                    <li class="list-group-item"
                        v-for="server in Servers"
                        :key="server.id"
                        @click="loadDetails(server.id)">
                        Server #{{ server.id }}
                    </li>
                </ul>
            </div>
            <div class="col-xs-12 col-sm-6">
                <p v-if="!!details === false">Server Details are currently not updated</p>
                <div v-else>
                  <h3>Server Details</h3>
                  <h5>Server #{{details.id}}</h5>
                  <h5>status: "{{details.status}}"</h5>
                </div>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12">
                <footer>
                    <p>All Servers are managed here</p>
                </footer>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    data: () => {
      return {
        Servers: [
          { id: 1, status: 'normal'},
          { id: 2, status: 'critical'},
          { id: 3, status: 'offline'},
          { id: 4, status: 'offline'},
          { id: 5, status: 'normal'},
        ],
        details: null
      };
    },
    methods: {
      loadDetails(id) {
        this.details = this.Servers.filter((s) => s.id === id)[0];
      }
    }
  }
</script>

<style>
</style>
