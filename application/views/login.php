<!DOCTYPE html>
<html lang="pt-BR">
<?php $this->load->view('templates/head'); ?>
<body>	
	<?php $this->load->view('templates/header'); ?>
    <div class="container login">
        <div class="row" >  
            <div class="container margem-baixo col-md-offset-4 col-md-4">
                    <?php 

                        echo form_open('login/login',array('class'=>'form-group text-center login'));
                        echo form_label('Nome de usuário', 'login');
                        echo form_input('login','',
                            array(
                                'class'=>'form-control text-center',
                                'placeholder'=>'Usuário',
                                'id'=>'login'
                            )
                        );
                        echo form_label('Senha', 'login');
                        echo form_password('pass','',
                            array(
                                'class'=>'form-control text-center',
                                'placeholder'=>'********',
                                'id'=>'pass'
                            )
                        );
                        echo form_submit('submit', 'Entrar',array('class'=>'btn btn-default'));
                        echo form_close();

                    ?>
                <?php if(isset($_SERVER['REQUEST_METHOD']) and isset($_GET['erro']) and $_GET['erro'] == 01): ?>
                    <div class="alert alert-danger text-center erroLogin"><strong>Login ou Senha Inválidos</strong></div>
                <? endif; ?>
            </div>
        </div>
    </div>
    <?php $this->load->view('templates/footer'); ?>
    <?php $this->load->view('templates/scripts'); ?>s
</body>
</html>