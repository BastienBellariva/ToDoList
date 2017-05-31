<?php

$jour=array('01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31');
$mois=array('Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre');

?>
<!DOCTYPE html>
<html lang="fr">
<head>

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

	<meta charset="utf-8">
	<meta name="description" content="Cette page permet aux utilisateurs non-inscrits de créer leur compte Bunny Blog afin d'accèder par la suite, aux fonctionnalités du site." />
	<meta http-equiv="X-UA-Compatible" content="IE=Edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="dist/css/bootstrap-select.css">
	<link rel="stylesheet" type="text/css" href="style.css">

<link rel="stylesheet" href="styleformulaire.css" />
<title>TodoList : Inscription</title>
</head>

<body class="my_background">

<?php include ('en_tete.html');
  ?>

	<div class="container" style="margin-top:5%;">
		<div class="well" style="background-color:#404040;">
			<div class="row">
		<div class="col-md-offset-2 col-md-8">
		<h1 style="color:white;"> Inscription <br/> <small> Merci de renseigner vos informations </small></h1>
		</div>
		</div>

<form method="POST" action="inscriptionUser.php">
<div class="row">
	<div class="col-md-offset-2 col-md-3">
	<div class="form-group">
		<label for="Nom" style="color:white;">Name</label>
		<input type="text" class="form-control" id="nom" name="nom" placeholder="Nom">
	</div>
	</div>
<div class="col-md-offset-1 col-md-3">
<div class="form-group">
	<label for="Prenom" style="color:white;">User Name</label>
	<input type="text" class="form-control" id="prenom" name="prenom" placeholder="Prénom">
</div>
</div>
</div> 


<div class="col-md-10 col-md-offset-2 " style="margin-top:0.2%; margin-bottom:1%;">

</div>
<div class="col-md-6 col-md-offset-2 " style="color:white; border-bottom:1px white solid; margin-left:21%; margin-bottom:2%;"></div>


<div class="row">
<div class="col-md-offset-2 col-md-7">
<div class="form-group">
<label for="Email" style="color:white;">Email address</label>

<input type="text" class="form-control" id="email" name="mail" placeholder="Enter email">
</div>
</div>
</div>



<div class="row">
<div class="col-md-offset-2 col-md-3">
<div class="form-group">
<label for="Password" style="color:white;">Password</label>
<input type="password" class="form-control" id="password" name="mdp" placeholder="Password">
</div>
</div>
<div class="col-md-offset-1 col-md-3">
<div class="form-group">
<label for="Vpassword" style="color:white;">Password 2</label>
<input type="password" class="form-control" id="vpassword" name="confirmermdp" placeholder="Password 2">
</div>
</div>
</div>



<br/>
<div class="row">
<div class="col-md-12">
<input type="submit" class="col-md-4 col-md-offset-4" style="background-color: #4FE2FF; border:none; border-radius:6px; padding:1%; color:white;" value="S'inscrire" name="submit">

</div>
</div>
</div>
</div>
</form>
 <? //php include('footer.php'); ?>

</body>
</html>