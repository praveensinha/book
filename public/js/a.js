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
        var _t = new DataTable(`${ele.ele}`, {
            processing: true,
            serverSide: true,
            searching: false,
            bLengthChange: false,
            conditionalPaging: true,
            scrollCollapse: false,
            pagingTag: 'button',
            //pagingType: "numbers",
            columns: ele.col,
            ajax: {
                url: `/a/e/${ele.e}`,
                type: 'POST',
                contentType: 'application/json',
                data: function (request) {
                    request.myKey = 'myValue';
                    //console.log($('#contact_filter').serializeArray())
                    request.customFilter = $('#contact_filter').serializeArray()
                    request.length = 12
                    return JSON.stringify(request)
                }
            }
        });
    }
    catch (e) {
        console.log('error in datatable initialization >>>>>>>>>>>>', e)
    }
    $('#kk').on( 'click', function () {
        _t.draw();
    } );

} 


