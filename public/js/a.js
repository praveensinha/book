function initJs(jsInitObj) {

    if (jsInitObj?.hasOwnProperty('dt') && (jsInitObj?.dt).length > 0) {
        $.each(jsInitObj.dt, (index, ele) => {
            _dataTable(ele)
        })
    }
}

function a() {
    try {
        //alert($("#example").html());
        new DataTable('#example', {
            ajax: '/data/arrays.txt'
        });
        $('.datepicker').datepicker();
        $('.input-daterange input').each(function () {
            $(this).datepicker('clearDates');
        });
    }
    catch (e) {
        console.log('error in a.js', e)
    }
}

function _dataTable(ele) {

    try {
        new DataTable(`${ele.ele}`, {
            processing: true,
            serverSide: true,
            searching: false,
            bLengthChange: false,
            conditionalPaging: true,
            scrollCollapse: false,
            ajax: {
                url: `/a/e/${ele.e}`,
                type: 'POST',
                data: function (request) {
                    request.myKey = 'myValue';
                    //request.selection_block = "$('#adparam-selection').val()";
                }
            }
        });
    }
    catch (e) {
        console.log('error in datatable initialization >>>>>>>>>>>>', e)
    }
} 