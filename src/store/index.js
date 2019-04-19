import vue from 'vue'
import vuex from 'vuex'
import seller from './seller'

vue.use(vuex)

// 暴露仓库的实列对象
const store = new vuex.Store({

  state: {

    //放数据的
    // catData: localStorage.getItem('catData') ? JSON.parse(localStorage.getItem('catData')) : [],
    catData: [
       
     
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
        total += item.selectedNum
      });
      return total;
    }

  },
  mutations: {
    //唯一能修改 state 的东西
    catAdd(state, good) {
      
      // 判断当前点击的good是否已经加入了购物车
      var index = state.catData.findIndex(item => item.goodsId === good.goodsId);
      if (index > -1) {
        // 存在
        state.catData[index].selectedNum += 1;
      } else {
        // 不存在
        state.catData.push(Object.assign({}, good, {
          selectedNum: 1
        }));
      }
      // console.log(state.catData[index].num)
      // 将当前的购物车数据存放到本地存储里面。
      localStorage.setItem('catData', JSON.stringify(state.catData))
    },
    catReduce(state, good) {
      // 判断当前点击的good是否已经加入了购物车
      var index = state.catData.findIndex(item => item.goodsId === good.goodsId);
      if (index > -1) {
        // 存在
        if (state.catData[index].selectedNum === 1) {
          // 删除这个商品
          state.catData.splice(index, 1);
        } else {
          // 数量减一
          state.catData[index].selectedNum -= 1;
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
