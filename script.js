function clickClass(classes) {
  console.log(classes);
  classes.forEach((clas) => {
    console.log(clas);
    clas.addEventListener(`click`, (e) => {
      const currentdate = new Date();
      const datetime =
        "" +
        // currentdate.getDate() +
        // "/" +
        // (currentdate.getMonth() + 1) +
        // "/" +
        // currentdate.getFullYear() +
        // " @ " +
        currentdate.getHours() +
        ":" +
        currentdate.getMinutes() +
        ":" +
        currentdate.getSeconds();
      console.log("Ik ben geklikt.");
      console.log(e.target.dataset.class);
      const clas = e.target;
      if (clas.dataset.status == 0) {
        clas.classList.toggle(`busy`);
        e.target.querySelector(`.js-time`).innerHTML = datetime;
        clas.dataset.status = 1;
      } else if (clas.dataset.status == 1) {
        clas.classList.toggle(`busy`);
        clas.classList.toggle(`done`);
        e.target.querySelector(`.js-time`).innerHTML += "-" + datetime;
        clas.dataset.status = -1;
      } else {
        clas.classList.toggle(`done`);
        clas.dataset.status = 0;
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("Script loaded.");

  const classes = document.querySelectorAll(`ul li`);

  clickClass(classes);
});
