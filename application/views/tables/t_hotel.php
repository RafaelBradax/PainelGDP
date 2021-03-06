<!DOCTYPE html>
<html>
	<head>
		<?php $this->load->view('templates/head.php'); ?>
	</head>
	<body>
		<?php $this->load->view('templates/header.php'); ?>
		<div class="container">
			<div class="row">
				<div class="col-md-3 col-sm-3 col-xs-12">
					<?php $this->load->view('templates/menu_lateral.php'); ?>
				</div>
				<div class="col-md-9 col-sm-9 col-xs-12">
					<section class="panel panel-default">
						<h2 class="text-center">Conteúdo do Guia</h2>
						<h4 class="text-center">Hoteis</h4>
						
						<div class="row">
								<div class="col-md-7">
									<form action="" method="post" accept-charset="utf-8">
										<label for="">Quantidade de registros por página </label>
										<select name="" id="">
											<option value="10">10</option>
											<option value="20">20</option>
											<option value="30">30</option>
										</select>
									</form>	
								</div>
								<div class="col-md-5">
									<form action="">
									<label for=""><span class=" glyphicon glyphicon-search"></span></label>
										<input type="text">
										<input type="submit" value="Pesquisar">
									</form>
								</div>
						</div>
						<?php $this->load->view('templates/status.php'); ?>
						<table class="table">
							<thead>
								<th>ID</th>
								<th>Nome</th>
								<th>Telefone</th>
								<th>Email</th>
								<th>Ação</th>
							</thead>
							<tbody>
								<?php for($i=0;$i<count($dados);$i++): ?>

									<tr>
										<td><?= $dados[$i]['id']; ?></td>
										<td><?= $dados[$i]['name']; ?></td>
										<td><?= $dados[$i]['phone']; ?></td>
										<td><?= $dados[$i]['email']; ?></td>
										<td>Ações a serem tomadas!</td>
									</tr>

								<?php endfor; ?>
							</tbody>
						</table>
						<div class="row">
							<div class="col-md-offset-8 col-md-4">
								<?php echo $pagination; ?>
							</div>
						</div>
					</section>
				</div>
			</div>
		</div>
		<?php $this->load->view('templates/footer.php'); ?>
		<?php $this->load->view('templates/scripts.php'); ?>
	</body>
</html>