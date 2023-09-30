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
 
		cns( 'var', 'kupap-id', data.dataset.id ); 



		let listPdr = [];


		let obj = arrListPatrolFabuly.find( k => {

			if ( k.id == data.dataset.id ) {
				listPdr = k.pdr;

				return true;
			}
		});


		//cns( 'var', 'obj', obj ); 
		let fabula = `${ obj.fabula }, чим порушив п.${ obj.pdr[ 0 ] } ПДР, чим скоїв адміністративне правопорушення, передбачене ч.${ obj.kupap.part } ст.${ obj.kupap.art } КУпАП.`;


		//cns( 'var', 'fabula', fabula ); 


		listPdr.reverse();
		//cns( 'var', 'listPdr', listPdr ); 

		let htmlPdr = '<br/><br/><div class="">ПДР --- </div>';
		listPdr.forEach( k => {
			let txt = `<b>${ k }</b> `;

			objListPatrolPdr[ k ].txt.forEach( k1 => {
				txt += `<div class="">${ k1 }</div><br/>`;
			});

			htmlPdr += `<div class="pdr">${ txt }</div>`;
		});

		//cns( 'var', 'htmlPdr', htmlPdr ); 

		ComponentWinFabulyPostanovPdr.insertFabula( fabula + htmlPdr );
	} 
 
 
 
 
 
} 
 
 
 	
 
 
 
 
 	
 
 
