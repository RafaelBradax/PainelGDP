<?php $url = explode('/', $_SERVER['PHP_SELF']); ?>
<div class="panel">
	<ul class="nav nav-pills nav-stacked text-center">
		<li class="<?php if (end($url) == 'index.php' ) echo 'active' ?>" role="presentation" class="active">
			<a href="#">
				Ver Assinaturas
			</a>
		</li>
		<li class="<?php if (end($url) == 'cadastro.php' ) echo 'active' ?>" role="presentation" >
			<a href="#">
				Nova Assinatura
			</a>
		</li>
		<li class="<?php if (end($url) == 'eventos.php' ) echo 'active' ?>" role="presentation" class="active">
			<a href="#">
				Ver Eventos
			</a>
		</li>
		<li class="<?php if (end($url) == 'cadEventos.php' ) echo 'active' ?>" role="presentation" >
			<a href="#">
				Novo Evento
			</a>
		</li>
		<li role="presentation" >
	  		<a href="#">
	  			Sair
	  		</a>
	  	</li>
	</ul>
</div>