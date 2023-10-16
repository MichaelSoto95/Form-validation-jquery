
//form validates that all required fields are filled
$("#form").submit(function (e) {
    e.preventDefault();
    const required = document.querySelectorAll('#mandatory')
    console.log(required);
    const missingFields = [];

    for (let i = 0; i < required.length; i++) {
        const reqField = $(required[i]);

        if (!reqField.val()) {
            missingFields.push(required[i].name);
            reqField.addClass("red-border");
        }
        else {
            reqField.removeClass("red-border");
        }
    }

    console.log(missingFields);
    if (missingFields.length > 0) {
        alert("Please fill in the required fields : " + missingFields.join(", "));
    } else {
        alert("Form submitted successfully!");
    }
});

//Puts same resdential address in mailing aadress 

$("#sameAddress").click(function () {
    if ($(this).is(":checked")) {
        $(".mail-add").val($(".res-add").val());
        $(".mail-add2").val($(".res-add2").val());
        $(".mail-city").val($(".res-city").val());
        $(".mail-zip").val($(".res-zip").val());
    } else {
        $(".mail-add").val("");
        $(".mail-add2").val("");
        $(".mail-city").val("");
        $(".mail-zip").val("");
    }
});


//clears all fields from the form
$("#clear").bind("click", function () {
    $("input").val("");
    $("#sameAddress").prop("checked", false);
});