# If $str = "kasjdflkjldkfjlkasd[note: hello]lakjdlfjkalsdkf", query("note", $str)[0] returns "hello"
function query($key, $where) {
	$queryString = "/\[" . $key . ": *(.+?)\]/";
	$success = preg_match_all($queryString, $where, $values, PREG_PATTERN_ORDER);
	if($success === 0) return "";
	else return $values[1];
}
