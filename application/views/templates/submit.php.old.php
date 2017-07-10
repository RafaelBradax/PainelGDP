<div class="row">
	<div class="col-md-6">
		<button class="btn btn-danger" onclick="window.history.go(-1);"><span class="glyphicon glyphicon-arrow-left">&nbsp;</span>Voltar</button>
	</div>
	<div class="col-md-6">
		<button type="button" class="btn btn-primary pull-right" data-toggle="modal" id="submit" data-target=".confirmacaoEdicao">
			<span class="glyphicon glyphicon-ok"></span> Enviar
		</button>
		<div class="modal fade confirmacaoEdicao" id="modal_Confirm" role="dialog" aria-labelledby="confirm">
			<div class="modal-dialog modal-sm" role="document">
				<div class="modal-content">	
					<div class="modal-body">
						<h5 class="text-center"><strong>Deseja realmente cadastrar esses dados?</strong></h5>
					</div>
					<div class="modal-footer">
						<div class="row">
							<div class="col-md-offset-1 col-md-5">
								<button type="button" class="btn btn-default" data-dismiss="modal"><span class="glyphicon glyphicon-remove">&nbsp;</span>Cancelar</button>
							</div>
							<div class="col-md-5">	
								<button type="submit" class="btn btn-primary" id="confirm" form="formulario"><span class="glyphicon glyphicon-ok">&nbsp;</span>Confirmar</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>