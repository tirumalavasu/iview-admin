<style lang="less">
    @import "./common.less";
</style>
<template>
  <div>
    <Card title="Export EXCEL">
      <Row>
        <Button icon="md-download" :loading="exportLoading" @click="exportExcel">Export file</Button>
      </Row>
    </Card>
    <Row class="margin-top-10">
      <Table :columns="tableTitle" :data="tableData"></Table>
    </Row>
  </div>
</template>
<script>
import excel from '@/libs/excel'
export default {
  name: 'export-excel',
  data () {
    return {
      exportLoading: false,
      tableTitle: [
        {
          title: 'Primary classification',
          key: 'category1'
        },
        {
          title: 'Secondary classification',
          key: 'category2'
        },
        {
          title: 'Three-level classification',
          key: 'category3'
        }
      ],
      tableData: [
        {
          category1: 1,
          category2: 2,
          category3: 3
        },
        {
          category1: 4,
          category2: 5,
          category3: 6
        },
        {
          category1: 7,
          category2: 8,
          category3: 9
        }
      ]
    }
  },
  methods: {
    exportExcel () {
      if (this.tableData.length) {
        this.exportLoading = true
        const params = {
          title: ['Class 1', 'Class 2', 'Class 3'],
          key: ['category1', 'category2', 'category3'],
          data: this.tableData,
          autoWidth: true,
          filename: 'Category List'
        }
        excel.export_array_to_excel(params)
        this.exportLoading = false
      } else {
        this.$Message.info('The form data cannot be empty!')
      }
    }
  },
  created () {

  },
  mounted () {

  }
}
</script>
