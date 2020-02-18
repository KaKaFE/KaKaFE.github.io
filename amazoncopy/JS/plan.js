// benefit-check border color changer

const labelWrapArr = document.querySelectorAll(".label-wrap");

labelWrapArr.forEach(el => {
  el.addEventListener("focusout", e => {
    let checkArr = e.target.getElementsByClassName("benefit-check");
    for (che of checkArr) che.classList.remove("benefit-check-black");
  });
});

labelWrapArr.forEach(el => {
  el.addEventListener("focusin", e => {
    let checkArr = e.target.getElementsByClassName("benefit-check");
    for (che of checkArr) che.classList.add("benefit-check-black");
  });
});

// for (el of inputArr) {
//   el.addEventListener("change", e => {
//     let checkArr = document.getElementsByClassName(
//       `${e.target.classList[1]}-check`
//     );
//     for (che of checkArr) {
//       if (!el.parentElement.getElementsByClassName("radio-button")[0].checked)
//         break;
//       che.classList.toggle("benefit-check-black");
//     }
//     // document.getElementsByClassName(`${el.classList[1]}-check`)[0].classList.toggle('benefit-check-black')
//   });
// }

// labelWrapArr.addEventListener('click', e => {
//     benefitChecked.classList.toggle('benefit-check::after')
// })

// inputArr.forEach(el => {
//     el.addEventListener('change' , e => {
//         benefitChecked.classList.toggle('benefit-check-black')
//     }, true)
// })

// let tar = null;
// let styleLeng = 0;
// console.log(labelWrapArr)
// labelWrapArr.forEach(btn => {
//   btn.addEventListener("change", e => {
//     // console.log(e);
//     // console.log(e.target.children[0]);
//     let stateCheck = e.target.checked;
//     if (!stateCheck)
//       document.styleSheets[0].cssRules[0].styleSheet.removeRule(0);
//     //   console.log(stateCheck)
//     tar = e.target.parentElement.children[1].children[3].children[0].children;
//     // console.log(tar);
//     for (ele of tar) {
//       let childEl = ele.children;
//       //   console.log(childEl);
//       if (childEl.length) {
//         let id = childEl[0].id;
//         let sty = `#${id}::after {
//             content: "";
//             display: inline-block;
//             width: 10px;
//             height: 20px;
//             border: solid #000 !important;
//             border-width: 0 2px 2px 0 !important;
//             transform: rotate(45deg);
//           }`;
//         document.styleSheets[0].cssRules[0].styleSheet.insertRule(sty);
//       }
//       if (!stateCheck)
//         document.styleSheets[0].cssRules[0].styleSheet.removeRule(0);
//     }
//   });
//   btn.addEventListener("mouseenter", e => {
//     styleLeng = document.styleSheets[0].cssRules[0].styleSheet.length;
//   });
//   btn.addEventListener("focusout", e => {
//     var targetStyle = document.styleSheets[0].cssRules[0].styleSheet;
//     if (e.relatedTarget) targetStyle.removeRule(targetStyle.length - styleLeng);
//   });
// });

// // function changeColor() {
// //   check.style.setProperty('--border-color', '#000')
// // }
