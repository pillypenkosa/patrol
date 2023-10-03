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
 
 


 	// перехыд за посиланням в новому вікні
 	static clcLink( data ) { 
		const name = this.name + '.clcLink()'; 
 
		//cns( 'var', 'data', data ); 
		window.open( data.dataset.href );
	} 










	static close( data ) { 
		const name = this.name + '.clc()'; 


		document.querySelector( 'cmp-fabula' ).innerHTML = '';
 
		//cns( 'var', 'data', data ); 
	} 
 
 








	static insFabula( data ) { 
		const name = this.name + '.clc()'; 
 
		//cns( 'var', 'name', name ); 
		//cns( 'var', 'data', data ); 



		const kupapID = data.kupap.art + '_' + data.kupap.part;



					//<div>${ data.id }</div>
					//		<div>КУпАП: <b>${ data.kupap.art }/${ data.kupap.part }</b></div>


		const htmlPartKupap 	= `<span class="item-border part-kupap">ч.<b>${ objListPatrolKupap[ kupapID ].part }</b> ст.<b>${ objListPatrolKupap[ kupapID ].article }</b></span>`;
		const htmlItemPdr  		= `<span class="item-border item-pdr">${ data.pdr }</span>`;

		let htmlMarkingInfo  	= data.marking ? `Розмітка: <span class="item-border item-pdr">${ data.marking }</span>` : '';
		let htmlMarkingFabula 	= data.marking ? `(розмітка <span class="item-border item-pdr">${ data.marking }</span>)` : '';

		//let htmlSign 			= data.sign ? `Знак: <span class="item-border sign">${ data.sign }</span>` : '';


		

		//let htmlSignBorder 	= '';
		//let htmlInfoSign 	= '';

		let txtSignNumFull	 	= '';
		let htmlSignNumBorder 	= '';
		let htmlInfoSign 		= '';

		let txtSignNameFull	 	= '';

		let htmlFabula 			= '';

		//let linkPdr 			= '';
		//let linkSign 			= '';

		//cns( 'var', 'data', data );

		if ( data.sign ) {

			txtSignNumFull = this.getFullNumSign( data.sign );
			//cns( 'var', 'txtSignNumFull', txtSignNumFull );

			htmlSignNumBorder = this.paintSign( txtSignNumFull );
			//cns( 'var', 'htmlSignNumBorder', htmlSignNumBorder );

			htmlInfoSign = 'Знак: ' + htmlSignNumBorder;
			txtSignNameFull = this.paintSign( this.getFullNameSign( data.sign ));
			//cns( 'var', 'txtSignNameFull', txtSignNameFull );




			//if ( objListPatrolPdr[ 'sign_' + data.sign ].href_sign ) 
				

			//linkPdr = objListPatrolPdr[ 'sign_' + data.sign ].href_sign ? `<div class="link link-pdr" data-href="${ objListPatrolPdr[ 'sign_' + data.sign ].href_sign }" onclick="ComponentFabula.clcLink( this )">${ this.paintSign( 'Знак ' + txtSignNumFull ) }</div>` : '';
			



			//linkSign = objListPatrolPdr[ 'sign_' + data.sign ].href_sign ? `<div class="link link-sign" data-href="${ objListPatrolPdr[ 'sign_' + data.sign ].href_sign }" onclick="ComponentFabula.clcLink( this )">${ this.paintSign( 'Знак ' + txtSignNumFull ) }</div>` : '';



			//objListPatrolPdr[ 'sign_' + data.sign ].href_sign;

		}





		//cns( 'var', 'href_sign', objListPatrolPdr[ 'sign_' + data.sign ].href_sign );




		if ( data.fabula ) {

			htmlFabula = data.fabula.replace( /{sign}/g, txtSignNameFull );

		} else 
			htmlFabula = '<span class="item-border no-fabula">вже приїхав без фабули ((( </span>';






		if ( data.marking ) {
			htmlMarkingInfo  	= `Розмітка: <span class="item-border marking">${ data.marking }</span>`;
			htmlMarkingFabula 	= ` (розмітка <span class="item-border marking">${ data.marking }</span>)`;
		}







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
							<div>${ htmlInfoSign }</div>
							<div>${ htmlMarkingInfo }</div>
							<div>КУпАП: ${ htmlPartKupap }</div>
							<div><span class="item-border min"><b>${ objListPatrolKupap[ kupapID ].min }</b></span> мінімумів</div>
							<div><span class="item-border penalty"><b>${ objListPatrolKupap[ kupapID ].min * 17 }</b> грн</span></div>
						</div>
					</div>
					
					<div class="fabula-txt">
						<div>1.10.2023 р. о 12:00 в м.Харків, вул.Сумська, біля буд.38а, водій Шумахер Михайло Побатькович, <b>керуючи</b> ТЗ «Ferrari 248 F1» д.н.з. АХ 1234 АВ</div>
						<div class="fabula-action">${ htmlFabula },</div>						
						<div>чим порушив п.${ htmlItemPdr } ПДР${ htmlMarkingFabula }, чим скоїв адміністративне правопорушення, передбачене ${ htmlPartKupap } КУпАП.</div>
					</div>
				</div>
			</div>
		`;

		document.querySelector( 'cmp-fabula').innerHTML = html;
	} 
 
 
 
	// отримати повний номер знаку
	static getFullNumSign( txt = '' ) { 	// txt - текст-номер знаку ( цифри текстом )

		let textNum = '';

		//cns( 'var', 'txt', txt );

		if ( txt ) {

			if ( objListPatrolPdr[ 'sign_' + txt ] ){

				if ( objListPatrolPdr[ 'sign_' + txt ].sign ) 
					textNum += objListPatrolPdr[ 'sign_' + txt ].sign;

				if ( objListPatrolPdr[ 'sign_' + txt ].part ) 
					textNum += '.' + objListPatrolPdr[ 'sign_' + txt ].part;

				if ( objListPatrolPdr[ 'sign_' + txt ].paragraph ) 
					textNum += '.' + objListPatrolPdr[ 'sign_' + txt ].paragraph;

				if ( objListPatrolPdr[ 'sign_' + txt ].item ) 
					textNum += '.' + objListPatrolPdr[ 'sign_' + txt ].item;

			}
		}

		return textNum;
	}




	// отримати повну назву знаку з номером та описом
	static getFullNameSign( txt = '' ) { 	// txt - текст-номер знаку ( цифри текстом )

		let textNum = '';

		//cns( 'var', 'txt', txt );


		if ( txt ) 
			textNum = this.getFullNumSign( txt ) + ' «' + objListPatrolPdr[ 'sign_' + txt ].title + '»';

		return textNum;
	}












	// фарбувати текст знаку
	static paintSign( txt = '' ) { 	// signID - txt
		const name = this.name + '.txtBorderSign()'; 

		cns( 'var', 'name', name );
		cns( 'var', 'txt', txt );

		return '<span class="item-border sign">' + txt + '</span>';
	}










	static txtFabulaSign( txt ) {


		//cns( 'var', 'txt', txt );




		let id = 'sign_' + txt;
		//cns( 'var', 'id', id );


		let txtSign = '';
		if ( objListPatrolPdr[ id ] ) {

			if ( objListPatrolPdr[ id ].sign ) 
				txtSign += objListPatrolPdr[ id ].sign;
			
			if ( objListPatrolPdr[ id ].part ) 
				txtSign += '.' + objListPatrolPdr[ id ].part;
			
			if ( objListPatrolPdr[ id ].paragraph ) 
				txtSign += '.' + objListPatrolPdr[ id ].paragraph;
			
			if ( objListPatrolPdr[ id ].item ) 
				txtSign += '.' + objListPatrolPdr[ id ].item;


			if ( txtSign ) 
				txtSign = '<span class="item-border sign">' + txtSign + '</span>';


			if ( objListPatrolPdr[ id ].txt ) 
				txtSign += ' «' + objListPatrolPdr[ id ].txt + '»';




		}


		//cns( 'var', 'objListPatrolPdr[ id ]', objListPatrolPdr[ id ] );

		//cns( 'var', 'txtSign', txtSign );




/*
		cns( 'var', 'sign_txt', 'sign_' + txt );
		cns( 'var', 'objListPatrolPdr', objListPatrolPdr );
		cns( 'var', 'objListPatrolPdr[ sign_3.21 ]', objListPatrolPdr[ 'sign_3.21' ] );
		cns( 'var', 'objListPatrolPdr[ sign_3.21 ].sign', objListPatrolPdr[ 'sign_3.21' ].sign );
		cns( 'var', 'objListPatrolPdr[ sign_3.21 ].part', objListPatrolPdr[ 'sign_3.21' ].part );
*/


		//cns( 'var', 'objListPatrolPdr[ id ].part', objListPatrolPdr[ id ] );


		




		return 'не виконав вимогу дорожнього знаку ' + txtSign;
	}







 
 
} 
 
 
 	
 
 
 
 
 	
 
 
