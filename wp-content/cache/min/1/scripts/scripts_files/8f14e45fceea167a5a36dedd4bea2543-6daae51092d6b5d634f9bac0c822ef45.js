$(document).ready(function() {
    $("#okbutton_input").click(function(event) {
        event.preventDefault(); // Prevents the default button behavior

        // Constructing the message
        let message = 'Mais um cliente se cadastrou no site\n';
        message += $("#name_input").val() + '\n';
        message += $("#email_input").val() + '\n';
        message += $("#phone_input").val() + '\n';
        message += $("#area_atuacao_input").val();
        
        // Creating form data
        const form = new FormData();
        form.append("sender", "aefcontabil");
        form.append("number", "71992386374");
        form.append("message", message);
        
        // Sending the message using AJAX
        const settings = {
            "url": "http://192.168.0.64:8000/send-message",
            "method": "POST",
            "data": form,
            "processData": false,
            "contentType": false,
        };
        
        $.ajax(settings)
            .done(function (response) {
                console.log(response);
                alert("Mensagem enviada com sucesso!");
                window.location.reload(true); // Reloads the page after successful submission
            })
            .fail(function (xhr, status, error) {
                console.error(xhr.responseText);
                alert(error+"Erro ao enviar mensagem. Por favor, tente novamente mais tarde.");
            });
    });
});
