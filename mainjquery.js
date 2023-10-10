    function addTask(nomeTarefa) {
        const listItem = $("<li>").text(nomeTarefa);
        $("#taskList").append(listItem);
    }

    function toggleTaskCompletion() {
        $(this).toggleClass("completed");
    }

    $(document).ready(function() {

        $("#taskForm").submit(function(event) {
            event.preventDefault();
            const nomeTarefa = $("#nomeTarefa").val().trim();

            if (nomeTarefa !== "") {
                addTask(nomeTarefa);
                $("#nomeTarefa").val("");
            }
        });

        $(document).on("click", "#taskList li", toggleTaskCompletion);
    });