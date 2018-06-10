/**
 * Created by lizheng on 2018/6/10.
 */
/**
 * getter 是对state的一个转换，把state中的属性做一些过滤或者是计算等，使用方法如下
 * getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    }
  }
 也可以把这个getter当作一个参数给下一个getter使用
 getters: {
  // ...
  doneTodosCount: (state, getters) => {
    return getters.doneTodos.length
  }
}

 调用时使用如下
 computed: {
  doneTodosCount () {
    return this.$store.getters.doneTodosCount
  }
}
 */

