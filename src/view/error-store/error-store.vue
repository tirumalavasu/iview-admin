<template>
  <div>
    <Card>
       Iview-admin will automatically collect the errors in your program, you can send the error log to the backend to save. If you don't need this feature, delete the 'error-store' attribute of the plugin in './src/config/index.js'.
       In addition, in the development environment, errors in your program will be collected, which may not help you troubleshoot errors. You can set the 'development-off' of './src/config/index.js' to 'error-store'. True.
       If you just want to collect the error log and don't want the login user to see the error log, you can not provide the entry to view the log, just put 'showInHeader' of './src/config/index.js' 'error-store' Set to false.
     </Card>
    <Card style="margin-top: 20px;">
      <Row>
        <i-col span="8">
          <Button @click="click" style="display: block">Click test trigger error</Button>
          <Button @click="ajaxClick" style="margin-top:10px;">Click test to trigger ajax interface request error</Button>
        </i-col>
        <i-col span="16">
          ajaxThe interface request is a non-existing interface requesting easy-mock, so the server will report a 404 error, the error collection mechanism will collect this error, there is a certain network delay when testing, so wait for a while after clicking the button to collect the error.
        </i-col>
      </Row>
    </Card>
  </div>
</template>

<script>
import { errorReq } from '@/api/data'
export default {
  name: 'error_store_page',
  methods: {
    click () {
      console.log(admin)
    },
    ajaxClick () {
      errorReq()
    }
  }
}
</script>

<style>

</style>
