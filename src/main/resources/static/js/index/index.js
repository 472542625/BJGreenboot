$(function() {





    $("#3D_load")
        .click(
            function () {

                document.getElementById("3D_load_box").style.display = "inline";
            });
    $("#3D_close").click(function () {

        document.getElementById("3D_load_box").style.display = "none";
    });





    $(document).on("click", "#statistical_analysis_a", function () {


        window.location = "/statisticalAnalysisIndex";


    });

    // $(document).on("click", "#gis_a", function () {
    //
    //
    //     window.location = "/index";
    //
    //
    // });


})