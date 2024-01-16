$("form").submit(function (event) {
    event.preventDefault();
    alert("Submit prevented");
});

$(document).on("submit", "form", async function (event) {
    $f = $(this);

    var validate = $f.attr("validate");
    if (validate && validate == 'y') {
        event.preventDefault();
        //alert("Submit prevented");
    }

    try {

        $.ajax({
            url: `/a/e/${$f.attr('action')}`, type: 'POST'/*$f.attr('method')*/, data: getFormData($f),
            cache: false, processData: true, dataType: "json",
            beforeSend: function () {
                $f.find('fieldset').attr("disabled", true);
                isLoading = true;
            },
            success: function (a) {
                var res = parse_ajax_res(a);
                if (typeof res?.validationError === 'object') {
                    $.each(res.validationError, function (i, err) {
                        $.each(err, function (name, msg) {
                            $(`#err_${name}`).html(msg);
                        })
                    })
                }
                //console.log(res);
            },
            complete: function () {
                $f.find('fieldset').attr("disabled", false);
                isLoading = false;
            }
        });

    } catch (error) {
        console.error("Error:", error);
    }

    await new Promise(resolve => setTimeout(resolve, 1000));
    //$f.find('fieldset').prop("disabled", false)

});


function getFormData($form) {
    var unindexed_array = $form.serializeArray();
    console.log('unindexed_array', unindexed_array)
    var indexed_array = {};

    $.map(unindexed_array, function (n, i) {
        indexed_array[n['name']] = n['value'];
        console.log(n['value'], '------', n['name'])
    });

    return JSON.stringify(indexed_array);
}

function parse_ajax_res(res) {
    return res
}

$(document).on("click", ".openRelations", function (event) {
    const $this = $(this)

    const _CustomEvent = new CustomEvent("loadRelation", { detail: $(this).attr("e") });
    const relation = document.getElementById("relation");

    relation.dispatchEvent(_CustomEvent);
    //$("#relation").toggle()
});

$(document).on('click', '#operationsTab button', function () { alert(Date.now()) })
