/// promises

// setTimeout
// setInterval(function (_e) {
//   console.log("Hello");
// }, 1000);

// setTimeout(function (e) {
//   console.log("Hello");
// }, 5000);

// console.log("hello2");

/// Callback-hell
// setTimeout(function () {
//   console.log("Step 1");
//   setTimeout(function () {
//     console.log("Step 2");
//     setTimeout(function () {
//       console.log("Step 3");
//       setTimeout(function () {
//         console.log("Step 4");
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

/// promises

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(function (e) {
//     console.log("hello");
//     resolve();
//   }, 5000);
// });

// myPromise.then((e) => console.log("hello2"));

function buildTable(json) {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");
  const headTr = document.createElement("tr");
  const genderTh = document.createElement("td");
  genderTh.textContent = "Gender";
  const emailTh = document.createElement("td");
  emailTh.textContent = "Email";
  headTr.append(genderTh);
  headTr.append(emailTh);
  thead.append(headTr);
  table.append(thead);

  json.results.forEach((user) => {
    const bodyTr = document.createElement("tr");
    const genderTd = document.createElement("td");
    genderTd.textContent = user.gender;
    const emailTd = document.createElement("td");
    emailTd.textContent = user.email;
    bodyTr.append(genderTd);
    bodyTr.append(emailTd);
    tbody.append(bodyTr);
  });

  table.append(tbody);

  document.body.append(table);
}

// fetch json

fetch("https://randomuser.me/api/")
  .then((response) => response.json())
  .then((json) => {
    buildTable(json);
  })
  .catch((error) => {
    console.error(error);
  });

async function myAsyncFunciton() {
  try {
    let response = await fetch("https://randomuser.me/api/");
    let json = await response.json();
    buildTable(json);
  } catch (err) {
    console.error(err);
  }
}

myAsyncFunciton();
