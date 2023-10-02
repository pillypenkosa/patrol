

// a b v g kg d e ye zh z i yi k l m n o p r s t u f h c ch sh sch 6 yu ya 



// chapter 		- розділ
// part  		- частина
// paragraph 	- пункт
// item 		- подпункт



// p1
// p2
// p3
// p4
// p5
// p6
// p7



const arrListPatrolPdr = [

{
	id: '1', chapter: '1',
	txt: [ 'Загальні положення', ],
},
	{
		id: '1.1', chapter: '1', part: '1',
		txt: [ 
			'Ці Правила відповідно до Закону України «Про дорожній рух» встановлюють єдиний порядок дорожнього руху на всій території України.', 
			'Інші нормативні акти, що стосуються особливостей дорожнього руху (перевезення спеціальних вантажів, експлуатація транспортних засобів окремих видів, рух на закритій території тощо), повинні ґрунтуватися на вимогах цих Правил.',
		],
	},
	{
		id: '1.2', chapter: '1', part: '2',
		txt: [ 'В Україні установлено правосторонній рух транспортних засобів.', ],
	},

{
	id: '2', chapter: '2',
	txt: [ 'Обов\'язки і права водіїв механічних транспортних засобів', ],
},
	{
		id: '2.1', chapter: '2', part: '1',
		txt: [ 'Водій механічного транспортного засобу повинен мати при собі:', ],
	},
		{
			id: '2.1.а', chapter: '2', part: '1', paragraph: 'а',
			txt: [ 'посвідчення водія на право керування транспортним засобом відповідної категорії;', ],
		},
		{
			id: '2.1.б', chapter: '2', part: '1', paragraph: 'б',
			txt: [ 'реєстраційний документ на транспортний засіб (для транспортних засобів Збройних Сил, Національної Гвардії, Держприкордонслужби, Держспецтрансслужби, Держспецзв’язку, Оперативно-рятувальної служби цивільного захисту — технічний талон);', ],
		},
		{
			id: '2.1.в', chapter: '2', part: '1', paragraph: 'в',
			txt: [ 'у разі встановлення на транспортних засобах проблискових маячків та (або) спеціальних звукових сигнальних пристроїв — дозвіл, виданий уповноваженим органом МВС, а у разі встановлення проблискового маячка оранжевого кольору на великогабаритних та великовагових транспортних засобах — дозвіл, виданий уповноваженим підрозділом Національної поліції, крім випадків встановлення проблискових маячків оранжевого кольору на сільськогосподарській техніці, ширина якої перевищує 2,6 м;', ],
		},
		{
			id: '2.1.г', chapter: '2', part: '1', paragraph: 'г',
			txt: [ 'на маршрутних транспортних засобах — схему маршруту та розклад руху; на великовагових і великогабаритних транспортних засобах та транспортних засобах, що здійснюють дорожнє перевезення небезпечних вантажів — документацію відповідно до вимог спеціальних правил, що визначаються Європейською Угодою про міжнародне дорожнє перевезення небезпечних вантажів (далі — спеціальні правила) (пункт змінено 11.11.2020);', ],
		},
		{
			id: '2.1.ґ', chapter: '2', part: '1', paragraph: 'ґ',
			txt: [ 'чинний страховий поліс (страховий сертифікат «Зелена картка») про укладення договору обов’язкового страхування цивільно-правової відповідальності власників наземних транспортних засобів або чинний внутрішній електронний договір зазначеного виду обов’язкового страхування у візуальній формі страхового поліса (на електронному або паперовому носії), відомості про який підтверджуються інформацією, що міститься в єдиній централізованій базі даних, оператором якої є Моторне (транспортне) страхове бюро України. Водії, які відповідно до законодавства звільняються від обов’язкового страхування цивільно-правової відповідальності власників наземних транспортних засобів на території України, повинні мати при собі відповідні підтвердні документи (посвідчення);', ],
		},
		{
			id: '2.1.д', chapter: '2', part: '1', paragraph: 'д',
			txt: [ 'у разі встановлення на транспортному засобі розпізнавального знака “Водій з інвалідністю” - документ, що підтверджує інвалідність водія або пасажира (крім водіїв з явними ознаками інвалідності або водіїв, які перевозять пасажирів з явними ознаками інвалідності).', ],
		},

	{
		id: '2.2', chapter: '2', part: '2',
		txt: [ 
			'Власник транспортного засобу, а також особа, яка використовує такий транспортний засіб на законних підставах, можуть передавати керування транспортним засобом іншій особі, що має при собі посвідчення водія на право керування транспортним засобом відповідної категорії.', 
			'Власник транспортного засобу може передавати такий засіб у користування іншій особі, що має посвідчення водія на право керування транспортним засобом відповідної категорії, передавши їй реєстраційний документ на цей транспортний засіб.', 
		],
	},
	{
		id: '2.3', chapter: '2', part: '3',
		txt: [ 
			'Для забезпечення безпеки дорожнього руху водій зобов’язаний:', 
		],
	},
		{
			id: '2.3.а', chapter: '2', part: '3', paragraph: 'а',
			txt: [ 'перед виїздом перевірити і забезпечити технічно справний стан і комплектність транспортного засобу, правильність розміщення та кріплення вантажу;', ],
		},
		{
			id: '2.3.б', chapter: '2', part: '3', paragraph: 'б',
			txt: [ 'бути уважним, стежити за дорожньою обстановкою, відповідно реагувати на її зміну, стежити за правильністю розміщення та кріплення вантажу, технічним станом транспортного засобу і не відволікатися від керування цим засобом у дорозі;', ],
		},
	{
		id: '2.9', chapter: '2', part: '9',
		txt: [ 
			'Водієві забороняється:', 
		],
	},
		{
			id: '2.9.а', chapter: '2', part: '9', paragraph: 'а',
			txt: [ 'керувати транспортним засобом у стані алкогольного, наркотичного чи іншого сп’яніння або перебування під впливом лікарських препаратів, що знижують увагу та швидкість реакції;', ],
		},

		
		{
			id: '2.9.г', chapter: '2', part: '9', paragraph: 'г',
			txt: [ 'передавати керування транспортним засобом особам, які перебувають у стані алкогольного, наркотичного чи іншого сп’яніння або під впливом лікарських препаратів, що знижують увагу та швидкість реакції, у хворобливому стані;', ],
		},












{
	id: '8', chapter: '8',
	txt: [ 'Регулювання дорожнього руху', ],
},
	{
		id: '8.4', chapter: '8', part: '4',
		txt: [ 'Дорожні знаки поділяються на групи:', ],
	},
		{
			id: '8.4.в', chapter: '8', part: '4', paragraph: 'б',
			txt: [ 'Знаки пріоритету. Встановлюють черговість проїзду перехресть, перехрещень проїзних частин або вузьких ділянок дороги.', ],
		},
		{
			id: '8.4.в', chapter: '8', part: '4', paragraph: 'в',
			txt: [ 'Заборонні знаки. Запроваджують або скасовують певні обмеження в русі.', ],
		},

	{
		id: '8.7', chapter: '8', part: '7',
		txt: [ 
			'Світлофори призначені для регулювання руху транспортних засобів і пішоходів, мають світлові сигнали зеленого, жовтого, червоного і біло-місячного кольорів, які розташовані вертикально чи горизонтально. Сигнали світлофора можуть бути з нанесеною суцільною чи контурною стрілкою (стрілками), із силуетом пішохода, Х-подібні.', 
			'На рівні червоного сигналу світлофора із вертикальним розташуванням сигналів може встановлюватися табличка білого кольору із нанесеною на ній стрілкою зеленого кольору.', 
		],
	},
		{
			id: '8.7.3', chapter: '8', part: '7', paragraph: '3',
			txt: [ 'Сигнали світлофора мають такі значення:', ],
		},
			{
				id: '8.7.3.ґ', chapter: '8', part: '7', paragraph: '3', item: 'ґ',
				txt: [ 'Жовтий забороняє рух і попереджає про наступну зміну сигналів;', ],
			},
			{
				id: '8.7.3.e', chapter: '8', part: '7', paragraph: '3', item: 'е',
				txt: [ 
					'Червоний сигнал, у тому числі миготливий, або два червоних миготливих сигнали забороняють рух.', 
					'Сигнал у вигляді зеленої стрілки (стрілок) у додатковій (додаткових) секції разом з жовтим або червоним сигналом світлофора інформує водія про те, що рух дозволяється у вказаному напрямку за умови безперешкодного пропуску транспортних засобів, які рухаються з інших напрямків.', 
					'Стрілка зеленого кольору на табличці, встановленій на рівні червоного сигналу світлофора з вертикальним розташуванням сигналів, дозволяє рух у зазначеному напрямку при ввімкненому червоному сигналі світлофора з крайньої правої смуги руху (або крайньої лівої смуги руху на дорогах з одностороннім рухом) за умови надання переваги в русі іншим його учасникам, які рухаються з інших напрямків на сигнал світлофора, що дозволяє рух;', 
				],
			},




{
	id: '31', chapter: '31',
	txt: [ 'Технічний стан транспортних засобів та їх обладнання', ],
},
	{
		id: '31.4', chapter: '31', part: '4',
		txt: [ 'Забороняється експлуатація транспортних засобів згідно із законодавством за наявності таких технічних несправностей і невідповідності таким вимогам:', ],
	},
		{
			id: '31.4.3', chapter: '31', part: '4', paragraph: '3',
			txt: [ 'Зовнішні світлові прилади:', ],
		},
			{
				id: '31.4.3.в', chapter: '31', part: '4', paragraph: '3', item: 'в',
				txt: [ 'Не горить лампа лівої фари в режимі ближнього світла.', ],
			},






];









let objListPatrolPdr = {};
arrListPatrolPdr.forEach( k => {
	objListPatrolPdr[ k.id ] = k;
});







