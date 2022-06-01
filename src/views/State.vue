<template>
  <div>
    <div :style="{ width: tweenNumber + 'px' }" class="bar">
      <span>{{ tweenNumber.toFixed(0) }}</span>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'
export default {
  data() {
    return {
      number: 0,
      tweenNumber: 0
    }
  },
  watch: {
    number(newNumber) {
      gsap.to(this.$data, {
        duration: 1,
        ease: 'circ.out',
        tweenNumber: newNumber
      })
    }
  },
  methods: {
    randomNumber() {
      this.number = Math.floor(Math.random() * (800 - 0))
    }
  },
  created() {
    setInterval(this.randomNumber, 1500)
  }
}
</script>

<style scoped>
.bar {
  padding: 5px;
  background-color: #2c3e50;
  border: 1px #16c0b0 solid;
  min-width: 20px;
}
.bar span {
  color: white;
}
</style>
