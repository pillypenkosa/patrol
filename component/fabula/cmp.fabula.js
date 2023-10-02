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



		const kupapID = data.kupap.art + '_' + data.kupap.part;



					//<div>${ data.id }</div>
					//		<div>КУпАП: <b>${ data.kupap.art }/${ data.kupap.part }</b></div>


		const htmlPartKupap = `<span class="item-border part-kupap">ч.<b>${ objListPatrolKupap[ kupapID ].part }</b> ст.<b>${ objListPatrolKupap[ kupapID ].article }</b></span>`;

		const htmlItemPdr = `<span class="item-border item-pdr">${ data.pdr }</span>`;




		let html = `
			<div class="modal">
				<div class="back-close" onclick="ComponentFabula.close()"><<<</div>

				<div class="fabula-title">Фабула</div>
				<div class="fabula-body">
					<div class="vstup">
						<div class="img">
							<img src="img/fabuly/${ data.img ? data.img : data.id }.jpg" alt="">
						</div>
						<div class="info">
							<div>ПДР: ${ htmlItemPdr }</div>

							<div>КУпАП: ${ htmlPartKupap }</div>
							<div><span class="item-border min"><b>${ objListPatrolKupap[ kupapID ].min }</b></span> мінімумів</div>
							<div><span class="item-border penalty"><b>${ objListPatrolKupap[ kupapID ].min * 17 }</b> грн</span></div>

						</div>
					</div>
					


					<div class="fabula-txt">
						<div>1.10.2023 р. о 12:00 в м.Харків, вул.Сумська, біля буд.38а, водій Шумахер Михайло Побатькович, <b>керуючи</b> ТЗ «Ferrari 248 F1» д.н.з. АХ 1234 АВ</div>

						<div class="fabula-action">${ data.fabula },</div>
						
						<div>чим порушив п.${ htmlItemPdr } ПДР, чим скоїв адміністративне правопорушення, передбачене ${ htmlPartKupap } КУпАП.</div>
					</div>





				</div>
			</div>
		`;


		document.querySelector( 'cmp-fabula').innerHTML = html;







 
	} 
 
 
 








 
 
} 
 
 
 	
 
 
 
 
 	
 
 
