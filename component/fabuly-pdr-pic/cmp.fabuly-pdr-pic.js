// © 2023 DJS 
 
 
 
 
 
class ComponentFabulyPdrPic { 
 
 
 
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
 
 
 
		let html = ''; 
		arrListPatrolFabuly.forEach( k => {

			html += `<div class="each" data-id="${ k.id }" onclick="ComponentFabulyPdrPic.clc( this )">
				<div class="img">
					<img src="img/fabuly/${ k.img }.jpg" alt="">
				</div>
			</div>`;
		});
 
 

 
		return { html, tagParam };  
	} 
 
 
 
 
 
	static clc( data ) { 
		const name = this.name + '.clc()'; 
 
		//cns( 'var', 'kupap', data.dataset.kupap ); 
		//cns( 'var', 'pdr', data.dataset.pdr ); 
 
		//cns( 'var', 'id', data.dataset.id ); 
		//cns( 'var', 'pdrID', data.dataset.pdrID ); 
		//cns( 'var', 'kupapID', data.dataset.kupapID ); 


		let objFabula = arrListPatrolFabuly.find( k => {

			if ( k.id == data.dataset.id )
				return true;
		});


		//cns( 'var', 'arrListPatrolFabuly[ data.dataset.id ]', arrListPatrolFabuly ); 
		//cns( 'var', 'fabula', objFabula ); 

		//objListPatrolKupap[ data.dataset.id ];
		ComponentFabula.insFabula( objFabula );


		//alert( name );

		return;





































		let listPdr = [];


		let obj = arrListPatrolFabuly.find( k => {

			if ( k.id == data.dataset.id ) {
				listPdr = k.pdr;

				return true;
			}
		});


		//cns( 'var', 'obj', obj ); 
		let fabula = `${ obj.fabula }, чим порушив п.<b>${ obj.pdr[ 0 ] }</b> ПДР, чим скоїв адміністративне правопорушення, передбачене ч.<b>${ obj.kupap.part }</b> ст.<b>${ obj.kupap.art }</b> КУпАП.`;


		//cns( 'var', 'fabula', fabula ); 




		let htmlNavBtns = `<div class="nav-btns">
			<div class="nav-btn">ПДР</div>
			<div class="nav-btn">КУпАП</div>
		</div>`;



		let htmlPdr = `<br/><br/><div class="title-pdr">ПДР --- </div>`;




		//listPdr.reverse();
		//cns( 'var', 'listPdr', listPdr ); 

		listPdr.forEach( k => {
			let txt = `<b>${ k }</b> `;

			objListPatrolPdr[ k ].txt.forEach( k1 => {
				txt += `<div class="">${ k1 }</div><br/>`;
			});

			htmlPdr += `<div class="pdr">${ txt }</div>`;
		});

		//cns( 'var', 'htmlPdr', htmlPdr ); 


		let html = `${ fabula }${ htmlNavBtns }`;

		//ComponentWinFabulyPostanovPdr.insertFabula( html );



	} 
 
 
 
 
 
} 
 
 
 	
 
 
 
 
 	
 
 
