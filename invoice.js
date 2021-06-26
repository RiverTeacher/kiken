const app = new Vue({
  el: "#app",
  data: {
    count:100,
    color: "red",
  },
  created() {
    setInterval(() => {
      this.count = this.count - 1;
      if (this.color === "red") {
        this.color = "black";
      } else {
        this.color = "red";
      }
    }, 400);
  }
})