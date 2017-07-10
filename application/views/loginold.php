<?php
session_start();
	if((isset($_SESSION["login"])) and (isset($_SESSION["username"])) and (isset($_SESSION["senha"]))){
		header("location:/guiarestrito/app/view/admin.php");
		exit();
	}
?>
<!DOCTYPE html>
<html>
	<head>
		<?php require_once $_SERVER['DOCUMENT_ROOT'].'/guiarestrito/app/view/templates/head.php'; ?>
		<title></title>
	</head>
	<body>
		<?php require_once $_SERVER['DOCUMENT_ROOT'].'/guiarestrito/app/view/templates/header.php'; ?>
		<div class="container login">
			<div class="row" >	
				<div class="container margem-baixo col-md-offset-4 col-md-4">
					<form action="/guiarestrito/app/controller/Logon.php" method="POST">
						<div class="form-group text-center">
							<label for="login">Nome de usuário:</label>
							<input class="form-control text-center" id="login" name="login" type="text" placeholder="Usuário" autofocus>
							<label for="pass">Senha:</label>
							<input class="form-control text-center" name="pass" type="password" placeholder="Senha">
							<button type="submit" class="btn btn-default">Entrar</button>
						</div>
					</form>
					<?php if(isset($_SERVER['REQUEST_METHOD']) and isset($_GET['erro']) and $_GET['erro'] == 01): ?>
						<div class="alert alert-danger text-center erroLogin"><strong>Login ou Senha Inválidos</strong></div>
					<? endif; ?>
				</div>
	    	</div>
		</div>
		<?php require_once $_SERVER['DOCUMENT_ROOT'].'/guiarestrito/app/view/templates/footer.php'; ?>
		<?php require_once $_SERVER['DOCUMENT_ROOT'].'/guiarestrito/app/view/templates/scripts.php'; ?>
	</body>
</html>