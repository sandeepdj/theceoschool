<?php
 /*
header('Content-type: application/json');
$basic_err = '';
 
if(empty($basic_err))
{
	$fetch_data = file_get_contents("php://input");
	$get_data = json_decode($fetch_data);
 
	$get_form_email_address = $get_data->email;
	$comments = $get_data->comments;
	$email_form_name = $get_data->name;
    //$live_to_email = $get_form_email_address;
    $live_to_email = "sandeepdj11@gmail.com";

	$contact = "<p><strong>Your Name:</strong> $email_form_name</p><p><strong>Your Email:</strong> $get_form_email_address</p>";
	$data_conent = "<p>$comments</p>";
 
	$website = 'Angularjs 4 with Php Email Address Example';
	$email_subject = "$website: FREE DOWNLOAD $email_form_name Wel-come";
 
	$mail_liveBody = '<html><body>';
	$mail_liveBody .= "$contact $data_conent";
	$mail_liveBody .= '</body></html>';
 
	$mail_head .= "MIME-Version: 1.0\r\n";
	$mail_head .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
	$mail_head .= "From: $get_form_email_address\n";
	$mail_head .= "Reply-To: $get_form_email_address";
 
	mail($live_to_email,$email_subject,$mail_liveBody,$mail_head);
 
	$live_resarr['status'] = 'success';
	$live_resarr['from'] = $get_form_email_address;
	echo json_encode($live_resarr);
	echo json_encode($get_form_email_address);
	header($live_resarr);
	return $get_form_email_address;
} else {
	$live_resarr['status'] = 'error';
	echo json_encode($live_resarr);
	 
}
*/
?>