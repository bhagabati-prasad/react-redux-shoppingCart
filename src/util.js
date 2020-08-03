export default {
  formatCurrency: function (num) {
    var num = 45.55;
    return "$" + Number(num.toFixed(2)).toLocaleString() + " ";
  },
};
