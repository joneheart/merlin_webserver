$('#advanced-kit').hide();
$('#premium-kit').hide();
$('#advanced-kit-bnt').hide();
$('#premium-kit-bnt').hide();

$('#advanced-kit-year').hide();
$('#premium-kit-year').hide();
$('#advanced-kit-year-bnt').hide();
$('#premium-kit-year-bnt').hide();



$(function () {
    $('#starter-kit-sel').click(function () {
        $('#starter-kit').show();
        $('#starter-kit-bnt').show();
        $('#starter-kit-year').show();
        $('#starter-kit-year-bnt').show();
        $('#premium-kit').hide();
        $('#premium-kit-bnt').hide();
        $('#advanced-kit').hide();
        $('#advanced-kit-bnt').hide();
        $('#premium-kit-year').hide();
        $('#premium-kit-year-bnt').hide();
        $('#advanced-kit-year').hide();
        $('#advanced-kit-year-bnt').hide();

    });
});


$(function () {
    $('#advanced-kit-sel').click(function () {
        $('#advanced-kit').show();
        $('#advanced-kit-bnt').show();
        $('#advanced-kit-year').show();
        $('#advanced-kit-year-bnt').show();
        $('#premium-kit').hide();
        $('#premium-kit-bnt').hide();
        $('#starter-kit').hide();
        $('#starter-kit-bnt').hide();
        $('#premium-kit-year').hide();
        $('#premium-kit-year-bnt').hide();
        $('#starter-kit-year').hide();
        $('#starter-kit-year-bnt').hide();

    });
});

$(function () {
    $('#premium-kit-sel').click(function () {
        $('#premium-kit').show();
        $('#premium-kit-bnt').show();
        $('#premium-kit-year').show();
        $('#premium-kit-year-bnt').show();
        $('#advanced-kit').hide();
        $('#advanced-kit-bnt').hide();
        $('#starter-kit').hide();
        $('#starter-kit-bnt').hide();
        $('#advanced-kit-year').hide();
        $('#advanced-kit-year-bnt').hide();
        $('#starter-kit-year').hide();
        $('#starter-kit-year-bnt').hide();

    });
});

 var div2 = document.getElementsByClassName("div2");

      function handleClick(event) {
        console.log(event.target);
        // console.log(this);
        // 콘솔창을 보면 둘다 동일한 값이 나온다

        console.log(event.target.classList);

        if (event.target.classList[1] === "clicked") {
          event.target.classList.remove("clicked");
        } else {
          for (var i = 0; i < div2.length; i++) {
            div2[i].classList.remove("clicked");
          }

          event.target.classList.add("clicked");
        }
      }

      function init() {
        for (var i = 0; i < div2.length; i++) {
          div2[i].addEventListener("click", handleClick);
        }
      }

      init();