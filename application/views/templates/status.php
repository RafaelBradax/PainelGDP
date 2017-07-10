<div class="row">
    <div class="col-md-offset-2 col-md-8"> 
        <?php if( ($_SERVER['REQUEST_METHOD']=='GET') and (isset($_GET['status'])) and ($_GET['status'] == 'created' ) ): ?>


            <div class="alert alert-success text-center" role="alert">
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <strong>Dados criados com sucesso!&nbsp;</strong>
            </div>

        <?php elseif( ($_SERVER['REQUEST_METHOD']=='GET') and (isset($_GET['status'])) and ($_GET['status'] == 'updated' ) ): ?>


            <div class="alert alert-success text-center" role="alert">
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <strong>Dados atualizados com sucesso!&nbsp;</strong>
            </div>

        <?php elseif( ($_SERVER['REQUEST_METHOD']=='GET') and (isset($_GET['status'])) and ($_GET['status'] == 'deleted' ) ): ?>


            <div class="alert alert-success text-center" role="alert">
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <strong>Dados deletados com sucesso!&nbsp;</strong>
            </div>
        <?php elseif( ($_SERVER['REQUEST_METHOD']=='GET') and (isset($_GET['status'])) and ($_GET['status'] == 'error' ) ): ?>


            <div class="alert alert-danger text-center" role="alert">
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <strong>Erro ao modificar os dados&nbsp;</strong>
            </div>

            
        <?php endif; ?>
    </div>
</div>