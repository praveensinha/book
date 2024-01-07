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
