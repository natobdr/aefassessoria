$(document).ready(function() {
    $("#okbutton_input").click(function(event) {
        event.preventDefault(); // Evita o comportamento padrão do botão de enviar
        
        const form = new FormData();
        let message = 'Mais um cliente se cadastrou no site\n';
        message += $("#name_input").val() + '\n';
        message += $("#email_input").val() + '\n';
        message += $("#phone_input").val() + '\n';
        message += $("#area_atuacao_input").val();
        
        form.append("sender", "aefcontabil");
        form.append("number", "71935006535");
        form.append("message", message);

        // Aviso temporário para verificar se os valores estão corretos
        alert(message);
    
        const settings = {
            url: "http://192.168.0.64:8000/send-message",
            method: "POST",
            processData: false,
            contentType: false,
            mimeType: "multipart/form-data",
            data: form
        };
    
        $.ajax(settings)
            .done(function(response) {
                console.log(response);
            })
            .fail(function(jqXHR, textStatus, errorThrown) {
                console.error(textStatus, errorThrown);
            });
    });
});
