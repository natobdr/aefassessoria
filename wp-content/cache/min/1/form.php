<?php
    // Verifica se os dados foram enviados via POST
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Coleta os dados do formulário
        $nome = $_POST['name'];
        $email = $_POST['email'];
        $whatsapp = $_POST['phone'];
        $area_atuacao = $_POST['area_atuacao'];

        // Aqui você pode fazer o que quiser com os dados, como salvá-los em um banco de dados ou enviar por email, por exemplo
        // Exemplo simples de exibição dos dados coletados
        $url = 'http://192.168.0.64:8000/';
        $leads = '5571935006533';
        $saudacao = 'Mais um cliente se Cadastrou no site'."\r\n".$nome."\r\n".$email."\r\n".$whatsapp."\r\n".$area_atuacao;
        $despedida = "Até breve";
        $sender = 'aefcontabil';

        $this->sendMessage($leads, $saudacao, $despedida, $sender, $url);
    }

    private function sendMessage($leads, $saudacao, $despedida, $sender, $url){

        //seta mensagem para o cliente
        $loLead = trim($lead);
        $msgsaudacao = trim($saudacao);
        $msgdespedida = trim($despedida);
        $msg = $msgsaudacao . "\r\n" . $msgdespedida;

        $statusmensage = $this->enviarTexto($msg, $sender, $url, $loLead);        
    }

    private function enviarTexto($msg, $sender, $url, $loLead)
    {
        $curl = curl_init();

        curl_setopt_array($curl, array(
            CURLOPT_URL => $url,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => '',
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => 'POST',
            CURLOPT_POSTFIELDS => array(
                'sender' => $sender
            ,'number' => $loLead
            ,'message' => $nomeContato.$msg
            )
        ));

        $resposta = curl_exec($curl);

        if(curl_getinfo($curl, CURLINFO_HTTP_CODE) == 200){
            $status = true;
        }
        else
        {
            $message['message'] = "Parece que a API está Offline.";
            $message['false'] = false;
            echo json_encode(curl_getinfo($curl, CURLINFO_HTTP_CODE));
            return;
        }

        curl_close($curl);
        return $status;
    }
?>
