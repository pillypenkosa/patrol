// © 2023 DJS 
 
 
 
 
 
class ComponentWinFabulyPostanovPdr { 
 
 
 
	static args = {}; 
 
 
 
	static html( objData = {} ) { 
 
		const name = this.name + '.html()'; 
 
		this.args = objData.args ? objData.args : {}; 
 
 
 
		let tagParam = { 
			//'class' 		: '', 
			//'name' 		: '', 
			//'title' 		: '', 
			//'data-id' 	: '', 
			//'onclick' 	: '', 
			//'selected' 	: '', 
			//'defer' 		: '', 
		}; 
 
 

		cns( 'var', 'arrListPatrolPdr', arrListPatrolPdr );

		let item = arrListPatrolPdr.find( k => k.id == '2_9_a' );


/*

			<div class="each">
				<div class="img">
					<img src="img/fabuly/traffic_light_red.jpg" alt="">
				</div>

			</div>









		... знач так! порушено п.<span class="pdr">${ item.chapter }.${ item.part }.${ item.paragraph }</span> ПДР, 
		чим скоїв адміністративне правопорушення, передбачено ч.<span class="kupap">2</span> ст.<span class="kupap">122</span> КУпАП`; 
 
 


*/


 
		let html = `${ Component( 'Fabula' ) }
		<div class="win-fabuly-postanov-pdr-title">Фабули постанов ПДР</div>
		<div class="menu-select-search-type">
			<div class="btn-search" data-type="pic"onclick="ComponentWinFabulyPostanovPdr.clc( this )">Пошук фабул<br/>піктограмами</div>
			<div class="btn-search" data-type="list"onclick="ComponentWinFabulyPostanovPdr.clc( this )">Пошук фабул<br/>списком</div>
		</div>

		<div class="menu-select-fabuly"></div>
		<div class="modal-fabula"></div>


		`;

		setMeta({ 
			title 			: name, 
			description 	: 'Опис...', 
			//image 		: '', 
		}); 
 
 
 
		return { html, tagParam };  
	} 
 
 
 
 
 
	static clc( data ) { 
		const name = this.name + '.clc()'; 
 
		cns( 'var', 'data.dataset.type', data.dataset.type ); 


		let div = document.querySelector( 'cmp-win-fabuly-postanov-pdr .menu-select-fabuly' );




		if ( data.dataset.type == 'list' ) 
			div.innerHTML = 'Списком';
		

		if ( data.dataset.type == 'pic' ) 
			div.innerHTML = Component( 'Fabuly-Pdr-Pic' );
		
		//alert();

	} 
 
 




/*
	static insertFabula( html ) {
		document.querySelector( 'cmp-win-fabuly-postanov-pdr .fabula' ).innerHTML = Component( 'Fabula',  );
	}
*/



 
 
} 
 
 
 	
 
 
 
 
 	
 
 
