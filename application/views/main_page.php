<!DOCTYPE html>
<html>
	<head>
		<?php $this->load->view('templates/head'); ?>
	</head>
	<body>
		<?php $this->load->view('templates/header'); ?>
		<div class="container">
			<div class="row">
				<div class="col-md-3 col-sm-3 col-xs-12">
					<?php $this->load->view('templates/menu_lateral'); ?>
				</div>
				<div class="col-md-9 col-sm-9 col-xs-12">
					<section class="panel panel-default">
						<h2 class="text-center">Conteúdo do Guia</h2>
						<div class="row">
							<div class="col-md-offset-3 col-md-6">
								<table class="table table-hover">
									<thead>
										<th>Categoria</th>
										<th>Quantidade</th>
									</thead>
									<tbody>
										<tr>
											<td>Hoteis</td>
											<td><?= $hotel; ?></td>
										</tr>
										<tr>
											<td>Ônibus</td>
											<td><?= $bus; ?></td>
										</tr>
										<tr>
											<td>Taxi</td>
											<td><?= $taxi; ?></td>
										</tr>
										<tr>
											<td>Aeroportos</td>
											<td><?= $airport; ?></td>
										</tr>
										<tr>
											<td>Bancos</td>
											<td><?= $bank; ?></td>
										</tr>
										<tr>
											<td>Restaurantes</td>
											<td><?= $restaurant; ?></td>
										</tr>
										<tr>
											<td>Fast Foods</td>
											<td><?= $fastfood; ?></td>
										</tr>
										<tr>
											<td>Shopping Centers</td>
											<td><?= $shopping; ?></td>
										</tr>
									</tbody>
								</table>		
							</div>
						</div>
					</section>
				</div>
			</div>
		</div>
		<?php $this->load->view('templates/footer'); ?>
		<?php $this->load->view('templates/scripts'); ?>
	</body>
</html>