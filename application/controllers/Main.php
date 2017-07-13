<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Main extends CI_Controller {

	function __construct(){
		parent::__construct();
		$this->load->model('hotels_model','hotels');
		$this->load->model('services_model','services');

	}
	public function index(){
		$dados = array(

			'hotel' 		=> $this->hotels->count_all(),
			'bus'			=> $this->services->count_all('Ônibus'),
			'taxi'			=> $this->services->count_all('Taxi'),
			'airport'		=> $this->services->count_all('Aeroportos'),
			'restaurant'	=> $this->services->count_all('Restaurantes'),
			'fastfood'		=> $this->services->count_all('Fast Foods'),
			'bank'			=> $this->services->count_all('Bancos'),
			'shopping'		=> $this->services->count_all('Shopping Centers')

		);
		
		$this->load->view('main_page',$dados);
	} // Final di metodo INDEX

}
