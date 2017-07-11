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
						<h4 class="text-center">Ônibus</h4>
						<?php $this->load->view('templates/status.php'); ?>
						<table class="table">
							<thead>
								<th>ID</th>
								<th>Prefixo</th>
								<th>Nome</th>
								<th>Ação</th>
							</thead>
							<tbody>
								<?php for($i=0;$i<count($dados);$i++): ?>
									<?php $desc = explode(';', $dados[$i]['description']) ?>
									<tr>
										<td><?= $dados[$i]['id']; ?></td>
										<td><?= $dados[$i]['name']; ?></td>
										<td><?= $desc[0]; ?></td>
										<td>Ações a serem tomadas</td>
									</tr>
								<?php endfor; ?>
							</tbody>
						</table>
					</section>
				</div>
			</div>
		</div>
		<?php $this->load->view('templates/footer.php'); ?>
		<?php $this->load->view('templates/scripts.php'); ?>
	</body>
</html>