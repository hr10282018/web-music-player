

const collectListData = [
  {
    id: 1,
    title: '喜欢',
    description:'',
    musicId: ['1', '2', '3', '4', '5'],
    createTime:'2023/4/22',
  }
]


const KEY_COLLECT_LIST = 'KEY_COLLECT_LIST'
localStorage.setItem(KEY_COLLECT_LIST, JSON.stringify(collectListData))