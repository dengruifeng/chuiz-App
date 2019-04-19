import vue from 'vue'
import vuex from 'vuex'
import seller from './seller'

vue.use(vuex)

// 暴露仓库的实列对象
const store = new vuex.Store({

  state: {

    //放数据的
    // catData: localStorage.getItem('catData') ? JSON.parse(localStorage.getItem('catData')) : [],
    catData: [{
        "goodId": 100,
        "name": "送福单人套餐",
        "price": 39,
        "img": "https://fuss10.elemecdn.com/b/66/be76d44a4bcc5d39a668f07d50f37png.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/",
        "num": 1,
      },
      {
        "goodId": 101,
        "name": "王道椒香鸡腿",
        "price": 13,
        "img": "https://fuss10.elemecdn.com/e/ed/cf60fce3bca1fb41227128a076a04png.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/",
        "num": 1,
      },
      {
        "goodId": 102,
        "name": "霸王鸡条（鲜辣）",
        "price": 15,
        "img": "https://fuss10.elemecdn.com/4/6b/17d7df740be1b6abb1522242a3ab2jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/",
        "num": 1,
      },
      {
        "goodId": 103,
        "name": "大大满足双人餐",
        "price": 30,
        "img": "https://fuss10.elemecdn.com/a/73/975cb422a987a379961e47d97c261png.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/",
        "num": 1,
      },
     
    ],
    LoginData: localStorage.getItem('LoginData') ? JSON.parse(localStorage.getItem('LoginData')) : [],
  },
  getters: {
    //对数据的二次计算
    /**
     * 购物车中商品的数量`` 
     */
    goodCatNums(state) {
      // this.catData 中 num 的总和
      var total = 0;
      state.catData.map(item => {
        total += item.num
      });
      return total;
    }

  },
  mutations: {
    //唯一能修改 state 的东西
    catAdd(state, good) {
      
      // 判断当前点击的good是否已经加入了购物车
      var index = state.catData.findIndex(item => item.goodId === good.goodId);
      if (index > -1) {
        // 存在
        state.catData[index].num += 1;
      } else {
        // 不存在
        state.catData.push(Object.assign({}, good, {
          num: 1
        }));
      }
      // console.log(state.catData[index].num)
      // 将当前的购物车数据存放到本地存储里面。
      localStorage.setItem('catData', JSON.stringify(state.catData))
    },
    catReduce(state, good) {
      // 判断当前点击的good是否已经加入了购物车
      var index = state.catData.findIndex(item => item.goodId === good.goodId);
      if (index > -1) {
        // 存在
        if (state.catData[index].num === 1) {
          // 删除这个商品
          state.catData.splice(index, 1);
        } else {
          // 数量减一
          state.catData[index].num -= 1;
        }
      }
      // 将当前的购物车数据存放到本地存储里面。
      localStorage.setItem('catData', JSON.stringify(state.catData))
    },

  },
  modules: {
    seller: seller
  }

})
export default store;
