var navigate = (function() {
  $('.dd').toggle();
  $('.dd_btn').click(function() {
    var dataName = $(this).attr('data-name');
    $('.dd').hide();
    $('.' + dataName).toggle();
  });
})();

$(document).ready(function() {

  $('.steps button').click(function() {
    $(this).parent().css({
      'opacity': '0'
    });
    $(this).parent().next().css({
      'z-index': '10'
    });
  });
});

function solve() {
  const user_input = document.getElementById('solve_input').value.toString();
  const user_array = user_input.split("");
  let first_num, second_num;

  if (user_array.length < 4) {
    first_num = user_array[0];
    second_num = user_array[1] + user_array[2];
  } else {
    first_num = user_array[0] + user_array[1];
    second_num = user_array[2] + user_array[3];
  }
  let month = first_num - 2;

  switch (month) {
    case 1:
      month = "January";
      break;
    case 2:
      month = "February";
      break;
    case 3:
      month = "March";
      break;
    case 4:
      month = "April";
      break;
    case 5:
      month = "May";
      break;
    case 6:
      month = "June";
      break;
    case 7:
      month = "July";
      break;
    case 8:
      month = "August";
      break;
    case 9:
      month = "September";
      break;
    case 10:
      month = "October";
      break;
    case 11:
      month = "November";
      break;
    case 12:
      month = "December";
      break;
  }

  const ans = document.getElementById('ans');
  ans.innerHTML = `<b>Your Birthday is on ${second_num - 50} ${month}.</b>`;
}

// Calculator
function c(val) {
  document.getElementById("d").value = val;
}

function v(val) {
  document.getElementById('d').value += val;
}
/*function e() {
  try {
    c(eval(document.getElementById('d').value))
  }
  catch(e) {
    c('Error')
  }
}
