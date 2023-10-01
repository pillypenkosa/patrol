// © 2023 DJS 
 
 
 
 
 
class ComponentFabula { 
 
 
 
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
 
 
 
		//let html = '';
		let html = ''; 
 
 
 

 
 
		return { html, tagParam };  
	} 
 
 
 
 
 
	static clc( data ) { 
		const name = this.name + '.clc()'; 
 
		//cns( 'var', 'data', data ); 
 
	} 
 
 
 	

	static close( data ) { 
		const name = this.name + '.clc()'; 


		document.querySelector( 'cmp-fabula' ).innerHTML = '';
 
		//cns( 'var', 'data', data ); 
	} 
 
 








	static insFabula( data ) { 
		const name = this.name + '.clc()'; 
 
		cns( 'var', 'name', name ); 
		cns( 'var', 'data', data ); 







					//<div>${ data.id }</div>
					//		<div>КУпАП: <b>${ data.kupap.art }/${ data.kupap.part }</b></div>

		let html = `
			<div class="modal">
				<div class="back-close" onclick="ComponentFabula.close()"><<<</div>

				<div class="fabula-title">Фабула</div>
				<div class="fabula-body">
					<div class="vstup">
						<div class="img">
							<img src="img/fabuly/${ data.img }.jpg" alt="">
						</div>
						<div class="info">
							<div>ПДР: <b>${ data.pdr[ 0 ] }</b></div>


							
							<div>КУпАП: ст.<b>${ objListPatrolKupap[ data.kupap.id ].article }</b> ч.<b>${ objListPatrolKupap[ data.kupap.id ].part }</b></div>
							<div><b>${ objListPatrolKupap[ data.kupap.id ].min }</b> мінімумів</div>
							<div><b>${ objListPatrolKupap[ data.kupap.id ].min * 17 }</b> грн</div>




						</div>
					</div>
					


					<div class="fabula-txt">
						<div>1.10.2023 р. о 12:00 в м.Харків, вул.Сумська, біля буд.38а, водій Шумахер Михайло Побатькович, керуючи ТЗ «Ferrari 248 F1» д.н.з. АХ 1234 АВ</div>

						<div class="fabula-action">${ data.fabula },</div>
						
						<div>чим порушив п.<b>${ data.pdr[ 0 ] }</b> ПДР, чим скоїв адміністративне правопорушення, передбачене ч.<b>${ data.kupap.part }</b> ст.<b>${ data.kupap.art }</b> КУпАП.</div>
					</div>





				</div>
			</div>
		`;


		document.querySelector( 'cmp-fabula').innerHTML = html;







 
	} 
 
 
 








 
 
} 
 
 
 	
 
 
 
 
 	
 
 
