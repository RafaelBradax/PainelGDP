<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Services_model extends CI_Model {

	function __construct(){
		parent::__construct();
	}

	public function get_total_rows($serv_type){
		$sql = 'SELECT * FROM services INNER JOIN type_services ON services.serv_type = type_services.type_services_id WHERE type_services.type_services_name = ?' ;
		$query = $this->db->query($sql,$serv_type);
		$row = $query->num_rows();
		return $row;
	}
	public function get_table($serv_type){
		$sql = 'SELECT serv_id AS id, serv_name AS name, serv_description AS description FROM services INNER JOIN type_services ON services.serv_type = type_services.type_services_id WHERE type_services.type_services_name = ?' ;
		$query = $this->db->query($sql,$serv_type);
		$row = $query->result_array();
		return $row;
	}
}
