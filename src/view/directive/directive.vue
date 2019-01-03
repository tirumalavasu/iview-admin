<template>
  <div>
    <Row>
      <i-col>
        <Card>
          <Row>
            <i-col span="8">
              <Button type="primary" @click="showModal">Show draggable pop-up</Button>
              <br/>
              <Button v-draggable="buttonOptions" class="draggable-btn">This button is also draggable</Button>
            </i-col>
            <i-col span="16">
              <div class="intro-con">
                &lt;Modal v-draggable="options" v-model="visible"&gt;title&lt;/Modal&gt;
                <pre class="code-con">
    options = {
      trigger: '.ivu-modal-body',
      body: '.ivu-modal'
    }
                </pre>
              </div>
            </i-col>
          </Row>
        </Card>
      </i-col>
      <Modal v-draggable="options" v-model="modalVisible">
        Drag here to drag the entire popup
      </Modal>
    </Row>
    <Row style="margin-top: 10px;">
      <i-col>
        <Card>
          <Row>
            <i-col span="8">
              <Input style="width: 60%" v-model="inputValue">
                <Button slot="append" v-clipboard="clipOptions">copy</Button>
              </Input>
            </i-col>
            <i-col span="16">
              <div class="intro-con">
                &lt;Input style="width: 60%" v-model="inputValue"&gt;
                  <br/>
                  &nbsp;&nbsp;&nbsp;&lt;Button slot="append" v-clipboard="clipOptions"&gt;copy&lt;/Button&gt;
                  <br/>
                &lt;/Input&gt;
                <pre class="code-con">
    clipOptions: {
      value: this.inputValue,
      success: (e) => {
        this.$Message.success('Successful copy')
      },
      error: () => {
        this.$Message.error('Replication failed')
      }
    }
                </pre>
              </div>
            </i-col>
          </Row>
        </Card>
      </i-col>
      <Modal v-draggable="options" v-model="modalVisible">
        Drag here to drag the entire popup
      </Modal>
    </Row>
  </div>
</template>

<script>
export default {
  name: 'directive_page',
  data () {
    return {
      modalVisible: false,
      options: {
        trigger: '.ivu-modal-body',
        body: '.ivu-modal',
        recover: true
      },
      buttonOptions: {
        trigger: '.draggable-btn',
        body: '.draggable-btn'
      },
      statu: 1,
      inputValue: 'This is the input content'
    }
  },
  computed: {
    clipOptions () {
      return {
        value: this.inputValue,
        success: (e) => {
          this.$Message.success('Successful copy')
        },
        error: () => {
          this.$Message.error('Replication failed')
        }
      }
    }
  },
  methods: {
    showModal () {
      this.modalVisible = true
    }
  }
}
</script>

<style>
.intro-con{
  min-height: 140px;
}
.draggable-btn{
  margin-top: 20px;
}
.code-con{
  width: 400px;
  background: #F9F9F9;
  padding-top: 10px;
}
</style>
