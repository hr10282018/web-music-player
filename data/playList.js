

const playList = [
  {
    id: 1,
    name: "纸短情长 (完整版)",
    author: "烟把儿乐队",
    album: "纸短情长",
    musicPath: "./data/music/纸短情长 (完整版)-烟把儿乐队.mp3",
    imgPath_70: "./data/imgs/music_2-70x70.jpg",
    imgPath_200: "./data/imgs/music_2-200x200.jpg",
    imgPath_400: "./data/imgs/music_2-400x400.jpg",
    time:'02:54',
  },

  {
    id: 2,
    name: "起风了",
    author: "买辣椒也用券",
    album: "起风了",
    musicPath: "./data/music/买辣椒也用券 - 起风了.mp3",
    imgPath_70: "./data/imgs/music_1-70x70.jpg",
    imgPath_200: "./data/imgs/music_1-200x200.jpg",
    imgPath_400: "./data/imgs/music_1-400x400.jpg",
    time:'05:23',
  },

  {
    id: 3,
    name: "此生不换",
    author: "青鸟飞鱼",
    album: "此生不换",
    musicPath: "./data/music/此生不换 - 青鸟飞鱼.mp3",
    imgPath_70: "./data/imgs/music_4-70x70.jpg",
    imgPath_200: "./data/imgs/music_4-200x200.jpg",
    imgPath_400: "./data/imgs/music_4-400x400.jpg",
    time:'04:25',
  },

  {
    id: 4,
    name: "白色球鞋",
    author: "陈奕迅",
    album: "认了吧",
    musicPath: "./data/music/白色球鞋 - 陈奕迅.mp3",
    imgPath_70: "./data/imgs/music_5-70x70.jpg",
    imgPath_200: "./data/imgs/music_5-200x200.jpg",
    imgPath_400: "./data/imgs/music_5-400x400.jpg",
    time:'02:54',
  },

  {
    id: 5,
    name: "孤城",
    author: "洛先生",
    album: "孤城",
    musicPath: "./data/music/孤城 - 洛先生.mp3",
    imgPath_70: "./data/imgs/music_3-70x70.jpg",
    imgPath_200: "./data/imgs/music_3-200x200.jpg",
    imgPath_400: "./data/imgs/music_3-400x400.jpg",
    time:'04:07',
  },

]


const KEY_PLAY_LIST = 'KEY_PLAY_LIST';
localStorage.setItem(KEY_PLAY_LIST, JSON.stringify(playList));










