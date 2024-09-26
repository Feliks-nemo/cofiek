let click_espresso = 0;
let click_cappussino = 0;
let espresso = document.getElementById('click_espresso');
let cappussino = document.getElementById('click_cappussino');

function onClickButtonplus_espresso(el) {
  if (click_espresso < 9) {
      click_espresso += 1; // Уменьшаем количество на 1, только если больше 0
      espresso.innerHTML = click_espresso;
  }

  if (click_espresso >=10) {
    espresso.style.margin = '593px 240px';  /*margin: 583px 685px;*/
    espresso.style.margin = '593px 190px'
  }

  if (click_espresso <10) {
    espresso.style.margin = '593px 215px';  /*margin: 583px 685px;*/
  }
}

function onClickButtonminus_espresso(el) {
  if (click_espresso > 0) {
      click_espresso -= 1; // Уменьшаем количество на 1, только если больше 0
      espresso.innerHTML = click_espresso;
  }

  if (click_espresso >=10) {
    espresso.style.margin = '593px 190px';
  }

  if (click_espresso <10) {
    espresso.style.margin = '593px 215px';  /*margin: 583px 685px;*/
  }
}

function onClickButtonminus_cappussino(ne) {
  if (click_cappussino > 0) {
      click_cappussino -= 1; // Уменьшаем количество на 1, только если больше 0
      cappussino.innerHTML = click_cappussino;
  }

  if (click_cappussino >=10) {
    cappussino.style.margin = '593px 660px';
  }

  if (click_cappussino <10) {
    cappussino.style.margin = '593px 685px';  /*margin: 583px 685px;*/
  }
}

function onClickButtonplus_cappussino(ne) {
  if (click_cappussino < 9) {
      click_cappussino += 1; // Уменьшаем количество на 1, только если больше 0<!DOCTYPE html>

      cappussino.innerHTML = click_cappussino;
  }

  if (click_cappussino >=10) {
    cappussino.style.margin = '593px 660px';
  }

  if (click_cappussino <10) {
    cappussino.style.margin = '593px 685px';  /*margin: 583px 685px;*/
  }
}
