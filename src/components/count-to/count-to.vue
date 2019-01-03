<template>
  <div class="count-to-wrapper">
    <slot name="left"/>
    <p class="content-outer"><span :class="['count-to-count-text', countClass]" :id="counterId">{{ init }}</span><i :class="['count-to-unit-text', unitClass]">{{ unitText }}</i></p>
    <slot name="right"/>
  </div>
</template>

<script>
import CountUp from 'countup'
import './index.less'
export default {
  name: 'CountTo',
  props: {
    init: {
      type: Number,
      default: 0
    },
    /**
     * @description The starting value, which is the value displayed before the animation starts.
     */
    startVal: {
      type: Number,
      default: 0
    },
    /**
     * @description End value, which is the value displayed after the animation ends
     */
    end: {
      type: Number,
      required: true
    },
    /**
     * @description Keep a few decimals

     */
    decimals: {
      type: Number,
      default: 0
    },
    /**
     * @description 
A symbol that separates integers and decimals. The default is the decimal point.
     */
    decimal: {
      type: String,
      default: '.'
    },
    /**
     * @description The duration of the animation, in seconds

     */
    duration: {
      type: Number,
      default: 2
    },
    /**
     * @description The time the animation delay starts, in seconds
     */
    delay: {
      type: Number,
      default: 0
    },
    /**
     * @description Whether to disable the easing animation effect

     */
    uneasing: {
      type: Boolean,
      default: false
    },
    /**
     * @description Whether to use grouping, every three digits will be separated by one symbol after grouping

     */
    usegroup: {
      type: Boolean,
      default: false
    },
    /**
     * @description 
Symbol for grouping (usegroup)
     */
    separator: {
      type: String,
      default: ','
    },
    /**
     * @description 
Whether to simplify the display, set to true will use the unit unit to do the relevant omission
     */
    simplify: {
      type: Boolean,
      default: false
    },
    /**
     * @description Custom units, such as [3, 'K+'], [6, 'M+'], that is, more than 3 digits less than 6 digits are omitted with k+

     *              1000That is shown as1K+
     */
    unit: {
      type: Array,
      default () {
        return [[3, 'K+'], [6, 'M+'], [9, 'B+']]
      }
    },
    countClass: {
      type: String,
      default: ''
    },
    unitClass: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      counter: null,
      unitText: ''
    }
  },
  computed: {
    counterId () {
      return `count_to_${this._uid}`
    }
  },
  methods: {
    getHandleVal (val, len) {
      return {
        endVal: parseInt(val / Math.pow(10, this.unit[len - 1][0])),
        unitText: this.unit[len - 1][1]
      }
    },
    transformValue (val) {
      let len = this.unit.length
      let res = {
        endVal: 0,
        unitText: ''
      }
      if (val < Math.pow(10, this.unit[0][0])) res.endVal = val
      else {
        for (let i = 1; i < len; i++) {
          if (val >= Math.pow(10, this.unit[i - 1][0]) && val < Math.pow(10, this.unit[i][0])) res = this.getHandleVal(val, i)
        }
      }
      if (val > Math.pow(10, this.unit[len - 1][0])) res = this.getHandleVal(val, len)
      return res
    },
    getValue (val) {
      let res = 0
      if (this.simplify) {
        let { endVal, unitText } = this.transformValue(val)
        this.unitText = unitText
        res = endVal
      } else {
        res = val
      }
      return res
    }
  },
  mounted () {
    this.$nextTick(() => {
      let endVal = this.getValue(this.end)
      this.counter = new CountUp(this.counterId, this.startVal, endVal, this.decimals, this.duration, {
        useEasing: !this.uneasing,
        useGrouping: this.useGroup,
        separator: this.separator,
        decimal: this.decimal
      })
      setTimeout(() => {
        if (!this.counter.error) this.counter.start()
      }, this.delay)
    })
  },
  watch: {
    end (newVal) {
      let endVal = this.getValue(newVal)
      this.counter.update(endVal)
    }
  }
}
</script>
