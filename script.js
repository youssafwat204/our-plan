let buyerName = "";
let buyerIncome = 0;

function goToStep2() {
  buyerName = document.getElementById("buyerName").value.trim();
  buyerIncome = Number(document.getElementById("income").value);

  if (!buyerName || buyerIncome <= 0) {
    alert("Please enter valid information.");
    return;
  }

  document.getElementById("step1").classList.remove("active");
  document.getElementById("step2").classList.add("active");
}

function selectUnit(cost, years) {
  const monthly = Math.round(cost / (years * 12));
  const limit = buyerIncome * 0.35;

  let message;

  if (monthly <= limit) {
    message = `
      <strong>Purchase Verified</strong><br><br>
      Buyer: ${buyerName}<br>
      Unit Cost: ${cost} EGP<br>
      Payment Period: ${years} years<br>
      Monthly Installment: ${monthly} EGP
    `;
  } else {
    message = `
      <strong>Purchase Rejected</strong><br><br>
      Estimated installment (${monthly} EGP)
      exceeds affordability limits.
    `;
  }

  document.getElementById("modalText").innerHTML = message;
  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
