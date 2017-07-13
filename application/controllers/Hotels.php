<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Hotels extends CI_Controller {

	function __construct(){
		parent::__construct();
		$this->load->model('hotels_model','hotels');
	}

	public function index($page = null){

		// Obtendo o total de resultados

		$numRows = $this->hotels->get_total_rows();

		// Definindo a primeira pagina

		if ($page == null):
			$current_page = 1;
		else:
			$current_page = $page;
		endif;

		// Definindo o limit e o offset

		$limit = 10;
		$offset = ($current_page-1) * $limit;

		// Se for a primeira pagina, o botao
		// de anterior sera desativado

		if ($current_page == 1):
			$disabled_previous = "disabled";
		else:
			$disabled_previous = "";
		endif;

		// Se for a ultima pagina, o botao
		// de proximo sera desativado

		if ($current_page > ($numRows/$limit)):
			$disabled_next = "disabled";
		else:
			$disabled_next = "";
		endif;

		// Realizando a Query

		$dados = $this->hotels->get_table($limit,$offset);

		$array = array(
			'current_page' 		=> $current_page,
			'numRows'			=> $numRows,
			'limit'				=> $limit,
			'offset'			=> $offset,
			'disabled_previous' => $disabled_previous,
			'disabled_next'		=> $disabled_next,
			'dados'				=> $dados,
			'pagination'		=> $this->get_pagination($numRows,$limit)
		);


		$this->load->view('tables/t_hotel',$array);
	} // Final do metodo de hoteis

	public function get_pagination ($numRows,$limit){
		// Define a URL base para os links
		$config['base_url'] = 'http://ulaula.ital.sp.gov.br/painelgdp/hoteis/';
		// Define o total de registros
		$config['total_rows'] = $numRows;
		// Define o limite por pagina
		$config['per_page'] = $limit;
		// Define se a URL usara numeracao das paginas ou o offset
		$config['use_page_numbers'] = TRUE;
		// Abre e fecha as tags superiores
		$config['full_tag_open'] = '<nav aria-label="Page navigation"><ul class="pagination">';
		$config['full_tag_close'] = '</ul></nav>';
		// Abre e fecha as tags da pagina atual
		$config['cur_tag_open'] = '<li class="active"><a href="#">';
		$config['cur_tag_close'] = '<span class="sr-only">(current)</span></a></li>';
		// Abre e fecha as tags das demais paginas
		$config['num_tag_open'] = '<li>';
		$config['num_tag_close'] = '</li>';
		// Abre e fecha as tags do link de 'Proximo'
		$config['next_link'] = '&gt;';
		$config['next_tag_open'] = '<li>';
		$config['next_tag_close'] = '</li>';
		// Abre e fecha as tags do link de 'Anterior'
		$config['prev_link'] = '&lt;';
		$config['prev_tag_open'] = '<li>';
		$config['prev_tag_close'] = '</li>';



		$this->pagination->initialize($config);

		return $this->pagination->create_links();
	}
}
