$(document).ready(function(){
	//-------------------
	//Show all Categories
	//-------------------
	$('.cat_all').on('click',function() {
		
		//$('.menuList_item').css("color", "var(--blue)");
		//$('.cat_all').css("color", "var(--white)");
		$('.single-post.all').css("display","block");
	});
	
	//-------------------
	//Show Star Wars Only
	//-------------------
	$('.cat_sw').on('click',function() {
		
		//$('.menuList_item').css("color", "var(--blue)");
		//$('.cat_sw').css("color", "var(--white)");
		$('.single-post.all').css("display","none");
		$('.single-post.sw').css("display","block");
	});
	
	//-------------------
	//Show Super Heroes Only
	//-------------------
	$('.cat_sh').on('click',function() {
		
		//$('.menuList_item').css("color", "var(--blue)");
		//$('.cat_sh').css("color", "var(--white)");
		$('.single-post.all').css("display","none");
		$('.single-post.sh').css("display","block");
	});
	
	//-------------------
	//Show Harry Potter Only
	//-------------------
	$('.cat_hp').on('click',function() {
		
		//$('.menuList_item').css("color", "var(--blue)");
		//$('.cat_hp').css("color", "var(--white)");
		$('.single-post.all').css("display","none");
		$('.single-post.hp').css("display","block");
	});
	
	//-------------------
	//Show Collectables Only
	//-------------------
	$('.cat_col').on('click',function() {
		
		//$('.menuList_item').css("color", "var(--blue)");
		//$('.cat_col').css("color", "var(--white)");
		$('.single-post.all').css("display","none");
		$('.single-post.col').css("display","block");
	});
	
	//-------------------
	//Show Power Miners Only
	//-------------------
	$('.cat_pm').on('click',function() {
		
		//$('.menuList_item').css("color", "var(--blue)");
		//$('.cat_pm').css("color", "var(--white)");
		$('.single-post.all').css("display","none");
		$('.single-post.pm').css("display","block");
	});
	
	//-------------------
	//Show Loose Parts Only
	//-------------------
	$('.cat_part').on('click',function() {
		
		//$('.menuList_item').css("color", "var(--blue)");
		//$('.cat_part').css("color", "var(--white)");
		$('.single-post.all').css("display","none");
		$('.single-post.part').css("display","block");
	});
	
	//-------------------
	//Show Sealed Sets Only
	//-------------------
	$('.cat_sealed').on('click',function() {
		
		//$('.menuList_item').css("color", "var(--blue)");
		//$('.cat_sealed').css("color", "var(--white)");
		$('.single-post.all').css("display","none");
		$('.single-post.sealed').css("display","block");
	});
});