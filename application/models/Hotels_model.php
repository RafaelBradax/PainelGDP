<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Hotels_model extends CI_Model {


	/**
	*
	*	SELECT hot_id AS id, hot_name AS name, hot_address AS address, hot_phone AS phone, hot_singleprice AS single, 
	*	hot_marriedprice AS married, hot_tripleprice AS triple,  hot_obs AS obs, hot_email AS email, hot_distance AS distance, 
	*	hot_urlmap AS urlmap FROM hotels
	*
	*/
	function __construct(){
		parent::__construct();
	}

	public function get_total_rows(){
		return $this->db->count_all('hotels');
	}
	public function get_table(){
		$query = $this->db->query('SELECT hot_id AS id, hot_name AS name, hot_address AS address, hot_phone AS phone,  hot_email AS email FROM hotels');
		$row = $query->result_array();
		return $row;
	}
}

