function qs(element) {
  return document.querySelector(element);
}

const $inputTitle = qs("#title");
const $inputRating = qs("#rating");
const $inputAwards = qs("#awards");
const $inputReleaseDate = qs("#release_date");
const $inputLength = qs("#length");
const $inputGenre = qs("#genre");
const $form = qs("form");

/* ERRORS */
const errTitle = qs(".errTitle");
const errRating = qs(".errRating");
const errAwards = qs(".errAwards");
const errReleaseDate = qs(".errReleaseDate");
const errLength = qs(".errLength");
const errGenre = qs(".errGenre");
const submitErrors = qs(".submitErrors");

/* $inputTitle.focus(); */

let error = false;

window.addEventListener("load", function () {
  $inputTitle.addEventListener("blur", function () {
    switch (true) {
      case !$inputTitle.value.trim():
        errTitle.innerText = "Campo titulo obligatorio";
        $inputTitle.classList.add("is-invalid");
        $inputTitle.classList.remove("is-valid");
        error = true;
        break;
      default:
        $inputTitle.classList.remove("is-invalid");
        $inputTitle.classList.add("is-valid");
        errTitle.innerText = "";
        break;
    }
  });

  $inputRating.addEventListener("blur", function () {
    switch (true) {
      case !$inputRating.value.trim():
        errRating.innerText = "El campo calificación es obligatorio";
        $inputRating.classList.remove("is-valid");
        $inputRating.classList.add("is-invalid");
        error = true;
        break;
      case isNaN(Number($inputRating.value)):
        errRating.innerText = "El campo calificación es numerico";
        $inputRating.classList.remove("is-valid");
        $inputRating.classList.add("is-invalid");
        error = true;
        break;
      case Number($inputRating.value) < 0:
        errRating.innerText = "El valor calificación debe ser entre 0 y 10";
        $inputRating.classList.remove("is-valid");
        $inputRating.classList.add("is-invalid");
        error = true;
        break;
      case Number($inputRating.value) > 10:
        errRating.innerText = "El valor calificación debe ser entre 0 y 10";
        $inputRating.classList.remove("is-valid");
        $inputRating.classList.add("is-invalid");
        error = true;
        break;

      default:
        $inputRating.classList.remove("is-invalid");
        $inputRating.classList.add("is-valid");
        errRating.innerText = "";
    }
  });

  $inputAwards.addEventListener("blur", function () {
    switch (true) {
      case !$inputAwards.value.trim():
        errAwards.innerText = "El campo premios es obligatorio";
        $inputAwards.classList.remove("is-valid");
        $inputAwards.classList.add("is-invalid");
        error = true;
        break;
      case isNaN(Number($inputAwards.value)):
        errAwards.innerText = "El campo premios es numerico";
        $inputAwards.classList.remove("is-valid");
        $inputAwards.classList.add("is-invalid");
        error = true;
        break;
      case Number($inputAwards.value) < 0:
        errAwards.innerText = "El valor de premios debe ser entre 0 y 10";
        $inputAwards.classList.remove("is-valid");
        $inputAwards.classList.add("is-invalid");
        error = true;
        break;
      case Number($inputAwards.value) > 10:
        errAwards.innerText = "El valor de premios debe ser entre 0 y 10";
        $inputAwards.classList.remove("is-valid");
        $inputAwards.classList.add("is-invalid");
        error = true;
        break;
      default:
        $inputAwards.classList.remove("is-invalid");
        $inputAwards.classList.add("is-valid");
        errAwards.innerText = "";
    }
  });

  $inputReleaseDate.addEventListener("blur", function () {
    switch (true) {
      case !$inputReleaseDate.value.trim():
        errReleaseDate.innerHTML =
          "El campo de fecha de creación es obligatorio";
        $inputReleaseDate.classList.remove("is-valid");
        $inputReleaseDate.classList.add("is-invalid");
        error = true;
        break;
      default:
        $inputReleaseDate.classList.remove("is-invalid");
        $inputReleaseDate.classList.add("is-valid");
        errReleaseDate.innerHTML = "";
        break;
    }
  });

  $inputLength.addEventListener("blur", function () {
    switch (true) {
      case !$inputLength.value.trim():
        errLength.innerHTML = "El campo duración obligatorio";
        $inputLength.classList.remove("is-valid");
        $inputLength.classList.add("is-invalid");
        error = true;
        break;
      case isNaN(Number($inputLength.value)):
        errLength.innerHTML = "El campo duración es numerico";
        $inputLength.classList.remove("is-valid");
        $inputLength.classList.add("is-invalid");
        error = true;
        break;
      case Number($inputLength.value) < 60:
        errLength.innerHTML = "El valor de duración debe ser entre 60 y 360";
        $inputLength.classList.remove("is-valid");
        $inputLength.classList.add("is-invalid");
        error = true;
        break;
      case Number($inputLength.value) > 360:
        errLength.innerHTML = "El valor de duración debe ser entre 60 y 360";
        $inputLength.classList.remove("is-valid");
        $inputLength.classList.add("is-invalid");
        error = true;
        break;
      default:
        $inputLength.classList.remove("is-invalid");
        $inputLength.classList.add("is-valid");
        errLength.innerHTML = "";
        break;
    }
  });

  $inputGenre.addEventListener("blur", function () {
    switch (true) {
      case !$inputGenre.value.trim():
        errGenre.innerText = "El campo genero es obligatorio";
        $inputGenre.classList.add("is-invalid");
        $inputGenre.classList.remove("is-valid");
        error = true;
        break;
      default:
        $inputGenre.classList.remove("is-invalid");
        $inputGenre.classList.add("is-valid");
        errGenre.innerText = "";
        break;
    }
  });

  $form.addEventListener("submit", function (event) {
    error = false;
    event.preventDefault();
    /*  console.log($form.elements); */
    let elementosForm = this.elements;

    for (let index = 0; index < elementosForm.length - 1; index++) {
      if (
        elementosForm[index].value == "" ||
        elementosForm[index].classList.contains("is-invalid")
      ) {
        elementosForm[index].classList.add("is-invalid");
        submitErrors.innerHTML = "Los campos señalados son obligatorios";
        error = true;
      }
    }

    if (!error) {
      $form.submit();
      alert("“La película se guardó satisfactoriamente”");
    }
  });
});
