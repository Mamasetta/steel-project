<?php
/* супер класс для отправки письма в нужной кодировке */
$typeEmail = 'orezaku@gmail.com';
class TEmail {
	public $t;
	public function __construct($t) {
		$this->typeEmail = $t;
	}
	public $from_name = "сайт steel";
	public $to_name = 'imelstorn@gmail.com';
	public $subject;
	public $data_charset='UTF-8';
	public $send_charset='windows-1251';
	public $body='';
	public $type='text/html';


	function send(){
		$dc=$this->data_charset;
		$sc=$this->send_charset;
		$enc_to= $this->mime_header_encode($this->to_name,$dc,$sc).' <'.$this->typeEmail.'>';
		$enc_subject=$this->mime_header_encode($this->subject,$dc,$sc);
		$enc_from= $this->mime_header_encode($this->from_name,$dc,$sc).' <'.$this->typeEmail.'>';
		$enc_body=$dc==$sc?$this->body:iconv($dc,$sc.'//IGNORE',$this->body);
		$headers='';
		$headers.="Mime-Version: 1.0\r\n";
		$headers.="Content-type: ".$this->type."; charset=".$sc."\r\n";
		$headers.="From: ".$enc_from."\r\n";
		return mail($enc_to,"Запрос с сайта steelproject66.ru",$enc_body,$headers);
		//return mail($enc_to,$enc_subject,$enc_body,$headers);
	}

	function mime_header_encode($str, $data_charset, $send_charset) {
		if($data_charset != $send_charset)
		$str=iconv($data_charset,$send_charset.'//IGNORE',$str);
		return ('=?'.$send_charset.'?B?'.base64_encode($str).'?=');
	}
}

/* отправка */
$form = isset($_POST["message"]) ? strip_tags(trim($_POST["message"])) : null;
$tel = isset($_POST["email"]) ? strip_tags(trim($_POST["email"])) : null;
$name = isset($_POST["name"]) ? strip_tags(trim($_POST["name"])) : null;

$emailgo = new TEmail($typeEmail);
$emailgo->body = '<p>От: '. $name .'</p><p>Вопрос: - ' . $form . '</p> <p>Контактный email - ' . $tel . '</p>';
$json = $emailgo->send() ? "Спасибо, Ваше сообщение отправлено" : 0;
echo $json;
