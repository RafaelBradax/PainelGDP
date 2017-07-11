<div class="panel-group menu" id="accordion">
	<div class="panel panel-default">
        <div class="panel-heading">
            <h4 class="panel-title">
                <a data-toggle="collapse" id="view" data-parent="#accordion" href="#view_panel">
                    <span class="glyphicon glyphicon-edit">&nbsp;</span>Gerenciar Conteúdo
                </a>
            </h4>
        </div>
        <div id="view_panel" class="panel-collapse collapse in">
            <div class="panel-body">
                <table class="table">
                    <tr>
                        <td>
                            <a href="hoteis">
                                <img src="<?= base_url('assets/images/icon_hoteis.png'); ?>" alt="">
                                Hoteis
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href="restaurantes">
                                <img src="<?= base_url('assets/images/icon_rest.png'); ?>" alt="">
                                Restaurantes
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href="fastfoods">
                                <img src="<?= base_url('assets/images/icon_fast-food.png'); ?>" alt="">
                                Fast-Foods
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href="onibus">
                                <img src="<?= base_url('assets/images/icon_bus.png'); ?>" alt="">
                                Ônibus
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href="taxi">
                                <img src="<?= base_url('assets/images/icon_taxi.png'); ?>" alt="">
                                Taxi
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href="aeroportos">
                                <img src="<?= base_url('assets/images/icon_aeroporto.png'); ?>" alt="">
                                Aeroportos
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href="bancos">
                                <img src="<?= base_url('assets/images/icon_bank.png'); ?>" alt="">
                                Bancos
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                             <a href="shopping">
                                 <img src="<?= base_url('assets/images/icon_shopping.png'); ?>" alt="">
                                 Shopping
                             </a>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
    <div class="panel panel-default">
        <div class="panel-heading">
            <h4 class="panel-title">
                <a data-toggle="collapse" id="create" data-parent="#accordion" href="#create_panel">
                    <span class="glyphicon glyphicon-plus">&nbsp;</span>Novo
                </a>
            </h4>
        </div>
        <div id="create_panel" class="panel-collapse collapse">
            <div class="panel-body">
                <table class="table">
                    <tr >
                        <td>
                            <a href="/guiarestrito/app/view/forms/f_hoteis.php">
                                <img src="<?= base_url('assets/images/icon_hoteis.png'); ?>" alt="">
                                Hoteis
                            </a>
                        </td>
                    </tr>
                    <tr >
                        <td>
                            <a href="/guiarestrito/app/view/forms/f_restaurantes.php">
                                <img src="<?= base_url('assets/images/icon_rest.png'); ?>" alt="">
                                Restaurantes
                            </a>
                        </td>
                    </tr>
                    <tr >
                        <td>
                            <a href="/guiarestrito/app/view/forms/f_fastfoods.php">
                                <img src="<?= base_url('assets/images/icon_fast-food.png'); ?>" alt="">
                                Fast-Foods
                            </a>
                        </td>
                    </tr>
                    <tr >
                        <td>
                            <a href="/guiarestrito/app/view/forms/f_bus.php">
                                <img src="<?= base_url('assets/images/icon_bus.png'); ?>" alt="">
                                Ônibus
                            </a>
                        </td>
                    </tr>
                    <tr >
                        <td>
                            <a href="/guiarestrito/app/view/forms/f_taxi.php">
                                <img src="<?= base_url('assets/images/icon_taxi.png'); ?>" alt="">
                                Taxi
                            </a>
                        </td>
                    </tr>
                    <tr >
                        <td>
                            <a href="/guiarestrito/app/view/forms/f_aeroportos.php">
                                <img src="<?= base_url('assets/images/icon_aeroporto.png'); ?>" alt="">
                                Aeroportos
                            </a>
                        </td>
                    </tr>
                    <tr >
                        <td>
                            <a href="/guiarestrito/app/view/forms/f_bancos.php">
                                <img src="<?= base_url('assets/images/icon_bank.png'); ?>" alt="">
                                Bancos
                            </a>
                        </td>
                    </tr>
                    <tr >
                        <td>
                             <a href="/guiarestrito/app/view/forms/f_shopping.php">
                                 <img src="<?= base_url('assets/images/icon_shopping.png'); ?>" alt="">
                                 Shopping
                             </a>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
        <div class="panel panel-default">
        <div class="panel-heading">
            <h4 class="panel-title">
                <a data-toggle="collapse" id="user" data-parent="#accordion" href="#user_panel">
                    <span class="glyphicon glyphicon-user">&nbsp;</span>
                </a>
            </h4>
        </div>
        <div id="user_panel" class="panel-collapse collapse">
            <div class="panel-body">
                <table class="table">
                    <tr>
                        <td>
                            <a href="/guiarestrito/app/view/admin.php">
                                <span class="glyphicon glyphicon-home">&nbsp;</span>
                                Pagina Inicial
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <?= '<a href="/guiarestrito/app/view/admin_edit.php?id='.$_SESSION['id'].'">
                                <span class="glyphicon glyphicon-user">&nbsp;</span>
                                Editar Perfil
                            </a>' ; ?>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href="/guiarestrito/app/view/pass_edit.php">
                                <img src="<?= base_url('assets/images/glyphicons-keys.png'); ?>" alt="">
                                Alterar senha
                            </a>
                        </td>
                    </tr>
                   <!--  <?php if($_SESSION['tipo_user'] == 'Administrador'): ?>
                        <tr>
                            <td>
                            
                                <a href="/guiarestrito/app/view/admin_table.php">
                                    <span class="glyphicon glyphicon-edit">&nbsp;</span>
                                    Gerenciar Contas
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <a href='/guiarestrito/app/view/admin_create.php'>
                                    <span class="glyphicon glyphicon-plus">&nbsp;</span>
                                    Adicionar novo usuário
                                </a>
                            </td>
                    <?php endif; ?> -->
                    <tr>
                        <td>
                            <a href="/guiarestrito/app/controller/destroi_sessao.php">
                                <span class="glyphicon glyphicon-off">&nbsp;</span>
                                Sair
                            </a>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</div>