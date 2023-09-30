//console.log( '' );





class ComponentHeader {



	static args = {};


	// чи відображати меню 	
	static tfMenu = true; 		// при першому завантаженні застосування - TRUE !!!


	static html( objData = {} ) {

		const name = this.name + '.html()';
		
		this.args = objData.args ? objData.args : {}; 




		let tagParam = {
			//'class' 		: 'active',
			//'name' 			: 'Any',
			//'title' 		: 'Всплывающая подсказка',
			//'data-id' 		: 'any-data',
			//'onclick' 		: `${ this.name }.clc( ${ this.name }.args )`,
			//'selected' 		: '',
			//'defer' 		: '',
		};



		//let html = appProjectName + ' ' + appVersion;
		let html = `
			<div class="head">
				<div class="title">Патруль</div>
				<div class="btn-menu" onclick="ComponentHeader.clc()">&#128660;</div>
			</div>
			<div class="nav-menu"></div>
		`;

		return { html, tagParam };
	}




	static clc() {
		const name = this.name + '.html()';


		//alert( name );


		//let elem = document.querySelector( '.nav-menu' );

		let elem = document.querySelector( '.nav-menu' );
		if ( this.tfMenu ) {

			elem.innerHTML = Component( 'Menu' );

		} else
			elem.innerHTML = '';


		this.tfMenu = !this.tfMenu;

		//console.log( elem );



	}








}











