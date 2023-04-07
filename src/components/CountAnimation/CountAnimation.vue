<template>
  <span>{{ count }}</span>
</template>
<script>
export default {
  name: 'CountAnimation',
  props: {
    start: {
        type: Number,
        default: 0
    },
    value: {
      type: Number,
      default: 1000
    },
    duration: {
      type: Number,
      default: 500
    },
  },
  data() {
      return {
          count: 0
      }
  },
  mounted() {
      this.counterAnim(this.start, this.value, this.duration)
  },
  methods: {
    counterAnim(start = 0, end, duration = 500) {
      if (this.count !== this.value) {
        start = this.start
      }
      end = this.value
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        this.count = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    },
  },
}
</script>

