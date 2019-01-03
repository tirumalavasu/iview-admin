<template>
  <Card>
    <h3 style="padding: 10px 0;">drag-drawerThe component is a wrapper around iview's drawer component，Supports draggable and footer bottom slots based on support for all apis of drawer</h3>
    <div style="padding: 10px 0">
      <b>
        direction
        <i-switch v-model="placement">
          <span slot="open">left</span>
          <span slot="close">right</span>
        </i-switch>
      </b>
      <b>
        Can you drag
        <i-switch v-model="draggable"></i-switch>
      </b>
      <Button @click="showContainerBDrawer = !showContainerBDrawer" type="primary" style="margin-left: 10px">{{ showContainerBDrawer ? 'Close' : 'Open' }} container drawer</Button>
      <Button @click="showWindowBDrawer = true" type="primary" style="margin-left: 10px">Open full screen drawer</Button>
    </div>
    <div class="drag-drawer-inner-box">
      <drag-drawer v-model="showContainerBDrawer"
        :width.sync="width2"
        min-width="30px"
        :inner="true"
        :transfer="false"
        :placement="placementComputed"
        :draggable="draggable"
        @on-resize="handleResize"
        :scrollable="true">
        <div slot="header">
          <Icon type="md-aperture" :size="18"></Icon>
          <b>This is the title</b>
        </div>
        <p v-for="n in 200" :key="n">{{ n }}</p>
        <div slot="footer">
          <p>123123</p>
          <p>21312</p>
        </div>
      </drag-drawer>
    </div>
    <drag-drawer v-model="showWindowBDrawer"
      :width.sync="width1"
      :min-width="300"
      :placement="placementComputed"
      :draggable="draggable"
      :scrollable="true">
      <div slot="header">
        <Icon type="md-aperture" :size="18"></Icon>
        <b>This is the title</b>
      </div>
      <Button @click="showBDrawer3 = true">Display multiple layers</Button>
      <p v-for="n in 200" :key="n">{{ n }}</p>
    </drag-drawer>
  </Card>
</template>

<script>
import DragDrawer from '_c/drag-drawer'
export default {
  name: 'drag_drawer_page',
  components: {
    DragDrawer
  },
  data () {
    return {
      showWindowBDrawer: false,
      showContainerBDrawer: false,
      showBDrawer3: false,
      width1: 300,
      width2: 200,
      placement: false,
      draggable: true
    }
  },
  computed: {
    placementComputed () {
      return this.placement ? 'left' : 'right'
    }
  },
  methods: {
    handleResize (event) {
      const { atMin } = event
      /* eslint-disable */
      console.log(atMin);
    },
  }
}
</script>

<style lang="less">
.drag-drawer-inner-box{
  position: relative;
  width: 500px;
  height: 400px;
  background: pink;
  border: 1px solid pink;
}
</style>
