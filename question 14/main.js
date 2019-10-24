$(document).ready(function() {
    $(".add-row").click(function() {
        var movie = $("#movie").val();
        var options = String($("option:selected").val());
        var markup = "<tr><td><input type='checkbox' name='record'></td><td>" + movie + "</td><td>" + options + "</td></tr>";
        $("table tbody").append(markup);
    });

    // Find and remove selected table rows
    $(".delete-row").click(function() {
        $("table tbody").find('input[name="record"]').each(function() {
            if ($(this).is(":checked")) {
                $(this).parents("tr").remove();
            }
        });
    });
});