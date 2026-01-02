let buyerName = "";
let buyerIncome = 0;

function goToStep2() {
  buyerName = document.getElementById("buyerName").value.trim();
  buyerIncome = Number(document.getElementById("income").value);

  if (!buyerName || buyerIncome <= 0) {
    alert("Please enter valid information.");
    return;
  }

  document.getElementById("step1").style.display = "none";
  document.getElementById("step2").style.display = "block";
}

function selectUnit(cost, years) {
  const monthly = Math.round(cost / (years * 12));
  const limit = buyerIncome * 0.35;

  const modal = document.getElementById("modal");
  const text = document.getElementById("modalText");

  if (!modal || !text) {
    console.error("Modal elements not found");
    return;
  }

  if (monthly <= limit) {
    text.innerHTML =
      "Purchase Verified<br>" +
      "Buyer: " + buyerName + "<br>" +
      "Monthly Installment: " + monthly + " EGP";
  } else {
    text.innerHTML =
      "Purchase Rejected<br>" +
      "Estimated installment exceeds affordability limit";
  }

  /* 🔑 FORCE RENDER */
  modal.style.display = "none";
  modal.offsetHeight;          // browser reflow trigger
  modal.style.display = "flex";
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}
