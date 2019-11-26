<template>
  <div class="pagination">
    <button @click="changeBtn(currentPage - 1)">上一页</button>
    <button
      v-for="(btn, i) in pagebtns"
      @click="changeBtn(btn)"
      :class="[{ currentPage: btn == currentPage }, 'pagebtn']"
      :key="btn + i"
    >
      {{ btn }}
    </button>
    <button @click="changeBtn(currentPage + 1)">下一页</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  data() {
    return {
      currentPage: 1,
    };
  },
  methods: {
    getpagebtns(total, cur, around) {
      let result = [];
      let baseCount = around * 2 + 1 + 2 + 2; //总共元素个数
      let surplus = baseCount - 2; //只出现一个省略号 剩余元素个数
      let startPosition = around + 4; //前面出现省略号的临界点
      let endPosition = total - around - 3; //后面出现省略号的临界点

      if (total <= baseCount) {
        //全部显示 不出现省略号
        result = Array.from({ length: total }, (v, i) => i + 1);
      } else {
        //需要出现省略号
        if (cur < startPosition) {
          //1.只有后面出现省略号
          result = [
            ...Array.from({ length: surplus }, (v, i) => i + 1),
            "...",
            totals
          ];
        } else if (cur > endPosition) {
          //2.只有前边出现省略号
          result = [
            1,
            "...",
            ...Array.from(
              { length: surplus },
              (v, i) => total - surplus + i + 1
            )
          ];
        } else {
          //3.两边都有省略号
          result = [
            1,
            "...",
            ...Array.from(
              { length: around * 2 + 1 },
              (v, i) => cur - around + i
            ),
            "...",
            total
          ];
        }
      }
      console.log(result);

      return result;
    },
    changeBtn(page) {
      if (page < 1) return;
      if (typeof page != "number") return;
      this.currentPage = page;
      this.$emit("handleList", page);
    }
  },
  computed: {
    pagebtns: function() {
      let total = this.currentPage + 10;
      let around = 2;
      return this.getpagebtns(total, this.currentPage, around);
    }
  }
};
</script>

<style scoped>
.pagination {
  margin-top: 5px;
  margin-bottom: 20px;
  background-color: white;
  padding: 6px 20px;
  border-radius: 5px;
  /*box-shadow: 0px 2px 9px #888888;*/
  border: 1px solid #888888;
}

button {
  background-color: #fff;
  border: 1px solid #ddd;
  color: #778087;
  border-radius: 3px;
  outline: none;
  height: 21px;
  cursor: pointer;
  padding: 0 2px;
  width: 55px;
  height: 29px;
}

.pagebtn {
  position: relative;
  bottom: 1px;
  width: 40px;
  margin: 0 4px;
}

.currentPage {
  color: white;
  background-color: #1f1b1b;
}
</style>
