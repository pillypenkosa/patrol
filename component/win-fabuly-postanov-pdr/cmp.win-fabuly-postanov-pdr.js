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


 
		let html = `... знач так! порушено п.<span class="pdr">${ item.chapter }.${ item.part }.${ item.paragraph }</span> ПДР, 
		чим скоїв адміністративне правопорушення, передбачено ч.<span class="kupap">2</span> ст.<span class="kupap">122</span> КУпАП`; 
 
 
 
		setMeta({ 
			title 			: name, 
			description 	: 'Опис...', 
			//image 		: '', 
		}); 
 
 
 
		return { html, tagParam };  
	} 
 
 
 
 
 
	static clc( data ) { 
		const name = this.name + '.clc()'; 
 
		//cns( 'var', 'data', data ); 
 
	} 
 
 
 
 
 
} 
 
 
 	
 
 
 
 
 	
 
 
