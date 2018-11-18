new Vue({
  el: '#app',
  data: {
    player: {
      health: 100,
      damage: {
        max: 10,
        min: 3
      }
    },
    monster: {
      health: 100,
      damage: {
        max: 12,
        min: 5
      }
    },
    game: {
      isRunning: false,
      turns: []
    }
  },
  methods: {
    startGame: function() {
      this.game.isRunning = true;
      this.player.health = 100;
      this.monster.health = 100;
    },
    attack: function () {
      const playerAttack = this.calculateDamage(this.player.damage.min, this.player.damage.max);
      this.monster.health -= playerAttack;

      this.game.turns.unshift({ isPlayer: true, text: `Player hits monster for ${playerAttack}` });

      if (this.checkWin()) { return; }
      
      this.monsterAttack();
    },
    specialAttack: function () {
      const playerAttack = this.calculateDamage(this.player.damage.min * 3, this.player.damage.max * 2);
      this.monster.health -= playerAttack;
      this.game.turns.unshift({ isPlayer: true, text: `Player hits monster with a Special Attack for ${playerAttack}` });
      if (this.checkWin()) { return ; }
      this.monsterAttack();
    },
    heal: function () {
      const heal = 10;
      this.player.health = (this.player.health + heal >= 100) ? 100 : this.player.health + heal;
      this.game.turns.unshift({ isPlayer: true, text: `Player heals for ${heal}` });
      this.monsterAttack();
    },
    giveUp: function () {
      this.game.isRunning = false;
    },
    monsterAttack: function () {
      const monsterAttack = this.calculateDamage(this.monster.damage.min, this.monster.damage.max);
      this.player.health -= monsterAttack;
      this.game.turns.unshift({ isPlayer: false, text: `Monster hits player for ${monsterAttack}` });
      this.checkWin();
    },
    calculateDamage: function (min, max) {
      return Math.max(Math.floor(Math.random() * max), min);
    },
    checkWin: function() {
      if (this.monster.health <= 0) {
        if (confirm('You won!  New game?')) {
          this.startGame();
        } else {
          this.game.isRunning = false;
        }
        return true;
      } else if (this.player.health <= 0) {
        if (confirm('You lost!  New game?')) {
          this.startGame();
        } else {
          this.game.isRunning = false;
        }
        return true;
      }
      return false;
    }
  }
})