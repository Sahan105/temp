
const btns = document.querySelectorAll(".tab-btn");
const trades = document.querySelectorAll(".trade-details");

for (i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", (e) => {
    e.preventDefault();
    const filter = e.target.dataset.filter;
    trades.forEach((trade) => {
      console.log(trade);
      if (filter === "all") {
        trade.style.display = "grid";
      } else {
        if (trade.classList.contains(filter)) {
          trade.style.display = "block";
        } else {
          trade.style.display = "none";
        }
      }
    });
 
  });
}