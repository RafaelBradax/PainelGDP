<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Main extends CI_Controller {

	function __construct(){
		parent::__construct();
		$this->load->library('form_validation');
		$this->load->helper('form');
		$this->load->model('hotels_model','hotels');
		$this->load->model('services_model','services');

	}
	public function index(){
		$dados = array(

			'hotel' 		=> $this->hotels->get_total_rows(),
			'bus'			=> $this->services->get_total_rows('Ônibus'),
			'taxi'			=> $this->services->get_total_rows('Taxi'),
			'airport'		=> $this->services->get_total_rows('Aeroportos'),
			'restaurant'	=> $this->services->get_total_rows('Restaurantes'),
			'fastfood'		=> $this->services->get_total_rows('Fast Foods'),
			'bank'			=> $this->services->get_total_rows('Bancos'),
			'shopping'		=> $this->services->get_total_rows('Shopping Centers')

		);
		
		$this->load->view('main_page',$dados);
	} // Final di metodo INDEX

	public function hoteis(){
		$dados['dados'] = $this->hotels->get_table();
		$this->load->view('tables/hoteis',$dados);
	}
	public function restaurantes(){
		$dados['dados'] = $this->services->get_table('Restaurantes');
		$this->load->view('tables/restaurantes',$dados);
	}
	public function fastfoods(){
		$dados['dados'] = $this->services->get_table('Fast Foods');
		$this->load->view('tables/fastfoods',$dados);
	}
	public function shopping(){
		$dados['dados'] = $this->services->get_table('Shopping Centers');
		$this->load->view('tables/shopping',$dados);
	}
	public function bancos(){
		$dados['dados'] = $this->services->get_table('Bancos');
		$this->load->view('tables/bancos',$dados);
	}
	public function onibus(){
		$dados['dados'] = $this->services->get_table('Ônibus');
		$this->load->view('tables/onibus',$dados);
	}
	public function taxi(){
		$dados['dados'] = $this->services->get_table('Taxi');
		$this->load->view('tables/taxi',$dados);
	}
	public function aeroportos(){
		$dados['dados'] = $this->services->get_table('Aeroportos');
		$this->load->view('tables/aeroportos',$dados);
	}


}
