<?php
// Página anterior.
if ($pageIndex > 0) {
?>
			<li class="page"><a href="?pageIndex=<?php echo $pageIndex - 1 ?>">&laquo; Anterior</a></li>

<?php } ?>



<?php 
$start = $pageIndex - $pagesToShow;
if ($start < 0)
	$start = 0;

$end = $pageIndex + $pagesToShow;
if ($end >= $pagesCount)
	$end = $pagesCount - 1;


if ($start > 0) {
	for ($i = 0; $i < 2 && $i < $start; ++$i) {
?>

		<li class="page"><a href="?pageIndex=<?php echo $i ?>"><?php echo $i + 1 ?></a></li>

<?php } } if ($start > 2) { ?>

		<li>...</li>

<?php
} for ($i = $start; $i <= $end; ++$i) {
	if ($pageIndex == $i) {
?>

    		<li class="page current"><?php echo $i + 1 ?></li>
       
<?php } else { ?>

			<li class="page"><a href="?pageIndex=<?php echo $i ?>"><?php echo $i + 1 ?></a></li>

<?php
	}
} if ($end < $pagesCount - 3) {
?>
	
    	<li>...</li>

<?php
} if ($end < $pagesCount - 1) {
	for ($i = max($pagesCount - 2, $end + 1); $i < $pagesCount; ++$i) {
?>

		 <li class="page"><a href="?pageIndex=<?php echo $i ?>"><?php echo $i + 1 ?></a></li>

<?php
	}
}
?>




<?php // Siguiente página
if ($pageIndex < $pagesCount) {
?>
          <li class="page"><a href="?pageIndex=<?php echo $pageIndex + 1 ?>">Siguiente &raquo;</a></li>
            
<?php } ?>
