<template>
  <div class="stopwatch-widget">
    <div id="display">{{ formattedTime }}</div>
    <button @click="startTimer" class="btn start-button">Start</button>
    <button @click="stopTimer" class="btn stop-button">Stop</button>
    <button @click="resetTimer" class="btn reset-button">Reset</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stopwatchInterval: null,
      startTime: 0,
      elapsedTime: 0,
      isRunning: false,
    };
  },
  computed: {
    formattedTime() {
      const hours = Math.floor(this.elapsedTime / 3600000);
      const minutes = Math.floor((this.elapsedTime % 3600000) / 60000);
      const seconds = Math.floor((this.elapsedTime % 60000) / 1000);
      const milliseconds = Math.floor(this.elapsedTime % 1000);

      return (
        (hours > 9 ? hours : "0" + hours) +
        ":" +
        (minutes > 9 ? minutes : "0" + minutes) +
        ":" +
        (seconds > 9 ? seconds : "0" + seconds) +
        "." +
        (milliseconds > 99
          ? milliseconds
          : milliseconds > 9
          ? "0" + milliseconds
          : "00" + milliseconds)
      );
    },
  },
  methods: {
    startTimer() {
      if (!this.isRunning) {
        this.startTime = Date.now() - this.elapsedTime;
        this.stopwatchInterval = setInterval(() => {
          this.elapsedTime = Date.now() - this.startTime;
        }, 10);
        this.isRunning = true;
      }
    },
    stopTimer() {
      if (this.isRunning) {
        clearInterval(this.stopwatchInterval);
        this.isRunning = false;
      }
    },
    resetTimer() {
      clearInterval(this.stopwatchInterval);
      this.elapsedTime = 0;
      this.isRunning = false;
    },
  },
};
</script>

<style scoped>
.stopwatch-widget {
  text-align: center;
  margin-top: 100px;
}

.btn {
  margin: 5px;
  padding: 10px 20px;
  font-size: 16px;
}

.start-button {
  background-color: green;
  font-family: monospace;
  color: aqua;
}

.stop-button {
  background-color: red;
  font-family: monospace;
  color: aqua;
}

.reset-button {
  background-color: blue;
  font-family: monospace;
  color: aqua;
}

#display {
  font-size: 40px;
  margin-bottom: 20px;
  font-family: monospace;
  color: darkcyan;
}
</style>
