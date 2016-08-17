<?php
$url = "https://api.instagram.com/oauth/access_token";
$access_token_parameters = array(
    'client_id'                =>     'df60aaef039e447dacd3c887565509b5',
    'client_secret'            =>     '9d63c8c7e4a04b0288b6a5b407e57aaa',
    'grant_type'               =>     'authorization_code',
    'redirect_uri'             =>     'http://www.sorteiosocial.com/instalogin.php',
    'code'                     =>     $_GET['code']
);
$curl = curl_init($url);    // we init curl by passing the url
curl_setopt($curl,CURLOPT_POST,true);   // to send a POST request
curl_setopt($curl,CURLOPT_POSTFIELDS,$access_token_parameters);   // indicate the data to send
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);   // to return the transfer as a string of the return value of curl_exec() instead of outputting it out directly.
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);   // to stop cURL from verifying the peer's certificate.
$result = curl_exec($curl);   // to perform the curl session
curl_close($curl);   // to close the curl session

$user_data = json_decode($result,true);
print_r($user_data);
?>

<script type="text/javascript">
var a = {
	'access_token': "<?php echo $user_data['access_token']; ?>",
	'username': "<?php echo $user_data['user']['username']; ?>",
	'profile_picture': "<?php echo $user_data['user']['profile_picture']; ?>",
	'full_name': "<?php echo $user_data['user']['full_name']; ?>",
	'id': "<?php echo $user_data['user']['id']; ?>"
}
    localStorage.login = JSON.stringify(a)
    console.log(localStorage.login)
    location.href = 'app.html#/autologin'
</script>