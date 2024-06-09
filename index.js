const checkbox = document.querySelector(".checkbox");
const basicPrice = document.querySelector(".basicPrice");
const professionalPrice = document.querySelector(".professionalPrice");
const masterPrice = document.querySelector(".masterPrice");

const pricesObj = {
  basic: {
    monthly: 19.99,
    annually: 199.99,
  },
  professional: {
    monthly: 24.99,
    annually: 249.99,
  },
  master: {
    monthly: 39.99,
    annually: 399.99,
  },
};

checkbox.addEventListener("change", (e) => {
  if (e.target.checked) {
    basicPrice.innerText = pricesObj.basic.annually;
    professionalPrice.innerText = pricesObj.professional.annually;
    masterPrice.innerText = pricesObj.master.annually;
  } else {
    basicPrice.innerText = pricesObj.basic.monthly;
    professionalPrice.innerText = pricesObj.professional.monthly;
    masterPrice.innerText = pricesObj.master.monthly;
  }
});
