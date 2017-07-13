<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Services extends CI_Controller {

	function __construct(){
		parent::__construct();
		$this->load->model('services_model','services');

	}
	public function index($type){
		

		$dados['dados'] = $this->services->get_table($type);
		$this->load->view('tables/t_'.$type,$dados);
	}


}
