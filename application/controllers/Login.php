<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Login extends CI_Controller {

	
	function __construct(){
		parent::__construct();
		$this->load->helper('form');
	}

	public function index()
	{
		$this->load->view('login');
	}
	public function login(){
        $query = $this->db->query('SELECT * FROM login');
		foreach ($query->result() as $row){
		        echo $row->id.'<br>';
		        echo $row->login.'<br>';
		        echo $row->pass.'<br>';
		}
		echo 'Total Results: ' . $query->num_rows();
		echo '<br><br><br>';
		$data = array(
			'login' => $this->input->post('login'),
			'pass'	=> $this->input->post('pass')
		);

		$this->db->insert('login',$data);
		$query = $this->db->get('login');
		echo '<br><br><br>';
		foreach ($query->result() as $row){
		        echo $row->id.'<br>';
		        echo $row->login.'<br>';
		        echo $row->pass.'<br>';
		}
		echo 'Total Results: ' . $query->num_rows();
	}
	public function create($value='')
	{
		# code...
	}
}