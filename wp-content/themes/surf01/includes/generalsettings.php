<div>
<h2>Pengaturan Tema KampuSORBORNE</h2>

<?php
if(isset($_POST["teks-post-terbaru"])){
	$tpt = esc_sql($_POST["teks-post-terbaru"]);
	$wh = esc_sql($_POST["warna-header"]);
	$wgf = esc_sql($_POST["warna-gfooter"]);
	$wf = esc_sql($_POST["warna-footer"]);
	$wgftext = esc_sql($_POST["warna-gfooter-text"]);
	$wftext = esc_sql($_POST["warna-footer-text"]);
	$sbg = esc_sql($_POST["warna-pencarian"]);
	$backtotop = esc_sql($_POST["warna-backtotop"]);
	$alamatkontak = esc_sql($_POST["alamat-kontak"]);
	
	update_option("kampusorborne_tpt", $tpt);
	update_option("kampusorborne_wh", $wh);
	update_option("kampusorborne_wf", $wf);
	update_option("kampusorborne_wgf", $wgf);
	update_option("kampusorborne_wftext", $wftext);
	update_option("kampusorborne_wgftext", $wgftext);
	update_option("kampusorborne_sbg", $sbg);
	update_option("kampusorborne_backtotop", $backtotop);
	update_option("kampusorborne_alamatkontak", $alamatkontak);
	
	echo "<div style='background-color: green; color: white; font-size: 12px; padding: 10px; display: inline-block;'>Pengaturan berhasil disimpan.</div>";
}
?>

<form method="post">

	<div>
		<h3>Header</h3>
		
		<label>Warna Header</label>
		<input type="text" name="warna-header" class="colorpicker" value="<?php echo get_option("kampusorborne_wh") ?>">
	</div>
	
	<div>
		<h3>Pencarian</h3>
		<label>Warna Pencarian</label>
		<input type="text" name="warna-pencarian" class="colorpicker" value="<?php echo get_option("kampusorborne_sbg") ?>">
	</div>
	
	
	<div>
		<h3>Postingan Terbaru</h3>
	
		<label>Teks Postingan Terbaru</label>
		<input type="text" name="teks-post-terbaru" value="<?php echo get_option("kampusorborne_tpt") ?>">
	</div>
	
	
	<div>
		<h3>Footer</h3>
		
		<label>Warna Footer</label>
		<input type="text" name="warna-gfooter" class="colorpicker" value="<?php echo get_option("kampusorborne_wgf") ?>">
		<br>
		
		<label>Warna Teks Footer</label>
		<input type="text" name="warna-gfooter-text" class="colorpicker" value="<?php echo get_option("kampusorborne_wgftext") ?>">
		<br>
		
		<label>Alamat Kontak</label><br>
		<textarea name="alamat-kontak"><?php echo get_option("kampusorborne_alamatkontak") ?></textarea>
		<br>
		
	</div>
	
	
	<div>
		<h3>Footer - Copyright</h3>
		
		<label>Warna Footer</label>
		<input type="text" name="warna-footer" class="colorpicker" value="<?php echo get_option("kampusorborne_wf") ?>">
		<br>
		
		<label>Warna Teks Footer</label>
		<input type="text" name="warna-footer-text" class="colorpicker" value="<?php echo get_option("kampusorborne_wftext") ?>">
		
		<label>Warna Tombol Back To TOp</label>
		<input type="text" name="warna-backtotop" class="colorpicker" value="<?php echo get_option("kampusorborne_backtotop") ?>">
		

	</div>
	
	
	
	
	
	<br>
	<input type="submit" value="Simpan">
</form>

</div>