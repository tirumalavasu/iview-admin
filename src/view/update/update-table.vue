<template>
  <Row :gutter="10">
    <i-col span="6">
      <Card>
        <Upload action="" :before-upload="beforeUpload">
          <Button icon="ios-cloud-upload-outline">Upload Csv file</Button>
          &nbsp;&nbsp;&nbsp;&nbsp;Click to upload Csv file
        </Upload>
        <p>util.js provides two methods to implement this function:</p>
        <p class="update-table-intro"><Icon style="margin-right: 10px;" :size="10" type="md-heart"/><span class="code-high-line">getArrayFromFile</span>: Parsing Csv files into two-dimensional arrays</p>
        <p class="update-table-intro"><Icon style="margin-right: 10px;" :size="10" type="md-heart"/><span class="code-high-line">getTableDataFromArray</span>: Convert 2D arrays to tabular data, see the documentation</p>
      </Card>
    </i-col>
    <i-col span="18">
      <Table :height="500" :columns="columns" :data="tableData"/>
    </i-col>
  </Row>
</template>

<script>
import { getArrayFromFile, getTableDataFromArray } from '@/libs/util'
export default {
  name: 'update_table_page',
  data () {
    return {
      columns: [],
      tableData: []
    }
  },
  methods: {
    beforeUpload (file) {
      getArrayFromFile(file).then(data => {
        let { columns, tableData } = getTableDataFromArray(data)
        this.columns = columns
        this.tableData = tableData
      }).catch(() => {
        this.$Notice.warning({
          title: 'Can only upload Csv files',
          desc: 'Only Csv files can be uploaded, please re-upload'
        })
      })
      return false
    }
  }
}
</script>

<style>
.update-table-intro{
  margin-top: 10px;
}
.code-high-line{
  color: #2d8cf0;
}
</style>
