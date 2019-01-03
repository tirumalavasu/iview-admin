<template>
  <div>
    <Card shadow>
      Tree table component tree-table-vue, based on<a href="https://github.com/MisterTaki/vue-table-with-tree-grid">vue-table-with-tree-grid</a>Developed, fixed some bugs, added some new properties
      <p><b>Support for custom column rendering content using slot-scope</b></p>
      <p>Please see the documentation<a href="https://github.com/lison16/tree-table-vue">https://github.com/lison16/tree-table-vue</a></p>
      <tree-table expand-key="sex" :expand-type="false" :selectable="false" :columns="columns" :data="data" >
        <template slot="likes" slot-scope="scope">
          <Button @click="handle(scope)">123</Button>
        </template>
      </tree-table>
    </Card>
  </div>
</template>

<script>
export default {
  name: 'tree_table_page',
  data () {
    return {
      columns: [
        {
          title: 'name',
          key: 'name',
          width: '400px'
        },
        {
          title: 'sex',
          key: 'sex',
          minWidth: '50px'
        },
        {
          title: 'score',
          key: 'score'
        },
        {
          title: 'likes',
          key: 'likes',
          minWidth: '200px',
          type: 'template',
          template: 'likes'
        }
      ],
      data: [
        {
          name: 'Jack',
          sex: 'male',
          likes: ['football', 'basketball'],
          score: 10,
          children: [
            {
              name: 'Ashley',
              sex: 'female',
              likes: ['football', 'basketball'],
              score: 20,
              children: [
                {
                  name: 'Ashley',
                  sex: 'female',
                  likes: ['football', 'basketball'],
                  score: 20
                },
                {
                  name: 'Taki',
                  sex: 'male',
                  likes: ['football', 'basketball'],
                  score: 10,
                  children: [
                    {
                      name: 'Ashley',
                      sex: 'female',
                      likes: ['football', 'basketball'],
                      score: 20
                    },
                    {
                      name: 'Taki',
                      sex: 'male',
                      likes: ['football', 'basketball'],
                      score: 10,
                      children: [
                        {
                          name: 'Ashley',
                          sex: 'female',
                          likes: ['football', 'basketball'],
                          score: 20
                        },
                        {
                          name: 'Taki',
                          sex: 'male',
                          likes: ['football', 'basketball'],
                          score: 10
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              name: 'Taki',
              sex: 'male',
              likes: ['football', 'basketball'],
              score: 10
            }
          ]
        },
        {
          name: 'Tom',
          sex: 'male',
          likes: ['football', 'basketball'],
          score: 20,
          children: [
            {
              name: 'Ashley',
              sex: 'female',
              likes: ['football', 'basketball'],
              score: 20,
              children: [
                {
                  name: 'Ashley',
                  sex: 'female',
                  likes: ['football', 'basketball'],
                  score: 20
                },
                {
                  name: 'Taki',
                  sex: 'male',
                  likes: ['football', 'basketball'],
                  score: 10
                }
              ]
            },
            {
              name: 'Taki',
              sex: 'male',
              likes: ['football', 'basketball'],
              score: 10,
              children: [
                {
                  name: 'Ashley',
                  sex: 'female',
                  likes: ['football', 'basketball'],
                  score: 20
                },
                {
                  name: 'Taki',
                  sex: 'male',
                  likes: ['football', 'basketball'],
                  score: 10
                }
              ]
            }
          ]
        },
        {
          name: 'Tom',
          sex: 'male',
          likes: ['football', 'basketball'],
          score: 20
        },
        {
          name: 'Tom',
          sex: 'male',
          likes: ['football', 'basketball'],
          score: 20,
          children: [
            {
              name: 'Ashley',
              sex: 'female',
              likes: ['football', 'basketball'],
              score: 20
            },
            {
              name: 'Taki',
              sex: 'male',
              likes: ['football', 'basketball'],
              score: 10
            }
          ]
        }
      ]
    }
  },
  methods: {
    handle (scope) {
      console.log(scope)
    }
  }
}
</script>

<style>

</style>
