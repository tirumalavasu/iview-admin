const btns = {
  delete: (h, params, vm) => {
    return h('Poptip', {
      props: {
        confirm: true,
        title: 'Are you sure you want to delete?'
      },
      on: {
        'on-ok': () => {
          vm.$emit('on-delete', params)
          vm.$emit('input', params.tableData.filter((item, index) => index !== params.row.initRowIndex))
        }
      }
    }, [
      h('Button', {
        props: {
          type: 'text',
          ghost: true
        }
      }, [
        h('Icon', {
          props: {
            type: 'md-trash',
            size: 18,
            color: '#000000'
          }
        })
      ])
    ])
  }
}

export default btns
