<?php

$start = microtime(true);

$contents = json_decode(file_get_contents('../emails.json'));

$emails = array_map(function($content){

    return !empty($content->email)?$content->email:NULL;

}, $contents);


$extracted = array_filter($emails, function($email){
    return !empty($email);
});

$chunked = array_chunk($extracted, 100);

foreach($chunked as $index => $chunk){

    file_put_contents('./trash/'.($index+1).'.php.json', json_encode($chunk));
}

$time_elapsed_secs = (microtime(true) - $start);

$time_elapsed_ms = $time_elapsed_secs*1000;

echo $time_elapsed_ms;