// https://zakon.rada.gov.ua/laws/show/80731-10#Text




// прожитковий мінімум
const livingWage = 17;






// https://zakon.rada.gov.ua/laws/show/80732-10#Text
const objListOrgan = {

	art218 		: 'Адміністративні комісії',
	art219 		: 'Виконавчі комітети (виконавчі органи) сільських, селищних, міських рад',
	art221 		: 'Районні, районні у місті, міські чи міськрайонні суди (судді)',
	art222 		: 'Органи Національної поліції',
};










const arrListPatrolKupap = [






{ 
	id 		: '109', article: '109',
	title 	: 'Порушення правил по охороні порядку і безпеки руху на залізничному транспорті', 
},
	{ 
		id 			: '109_3', article: '109', part: '3', warning: 1, min: 2, min: 10, organ: 'art222',
		title 		: 'Викидання сміття та інших предметів з вікон і дверей вагонів поїздів, прохід по залізничних коліях у невстановлених місцях -', 
		sanction 	: 'тягнуть за собою попередження або накладення штрафу від двох до десяти неоподатковуваних мінімумів доходів громадян.',
		href 		: 'https://zakon.rada.gov.ua/laws/show/80731-10#n845', 
	},







{ 
	id 		: '121', article: '121', edit: { d: '29', m: '09', y: '2023', }, 
	title 	: 'Порушення правил керування або експлуатації транспортного засобу, правил користування ременями безпеки або мотошоломами', 
},
	{ 
		id 			: '121_1', article: '121', part: '1', min: 20, organ: 'art222', edit: { d: '29', m: '09', y: '2023', }, 
		title 		: 'Керування водієм транспортним засобом, що має несправності системи гальмового або рульового керування, тягово-зчіпного пристрою, зовнішніх світлових приладів (темної пори доби) чи інші технічні несправності, з якими відповідно до встановлених правил експлуатація його забороняється, або переобладнаний з порушенням відповідних правил, норм і стандартів, -', 
		sanction 	: 'тягне за собою накладення штрафу в розмірі двадцяти неоподатковуваних мінімумів доходів громадян.',
		repeat		: '121_4',
		href 		: 'https://zakon.rada.gov.ua/laws/show/80731-10#n959', 
	},
	{ 
		id 			: '121_2', article: '121', part: '2', min: 40, organ: 'art222', edit: { d: '29', m: '09', y: '2023', },
		title 		: 'Керування водієм транспортним засобом, який використовується для надання послуг з перевезення пасажирів, що має несправності, передбачені частиною першою цієї статті, або технічний стан і обладнання якого не відповідають вимогам стандартів, правил дорожнього руху і технічної експлуатації, -', 
		sanction 	: 'тягне за собою накладення штрафу в розмірі сорока неоподатковуваних мінімумів доходів громадян.',
		repeat		: '121_4',
		href 		: 'https://zakon.rada.gov.ua/laws/show/80731-10#n961', 
	},
	{ 
		id 			: '121_3', article: '121', part: '3', min: 20, organ: 'art222', edit: { d: '29', m: '09', y: '2023', },
		title 		: 'Керування водієм транспортним засобом, що підлягає обов\'язковому технічному контролю, але своєчасно його не пройшов, -', 
		sanction 	: 'тягне за собою накладення штрафу в розмірі двадцяти неоподатковуваних мінімумів доходів громадян.',
		repeat		: '121_4',
		href 		: 'https://zakon.rada.gov.ua/laws/show/80731-10#n963', 
	},
	{ 
		id 			: '121_4', article: '121', part: '4', min: 50, max: 100, organ: 'art221', edit: { d: '29', m: '09', y: '2023', },
		title 		: 'Повторне протягом року вчинення будь-якого з порушень, передбачених частинами першою - третьою цієї статті, -', 
		sanction 	: 'тягне за собою накладення штрафу в розмірі від п’ятидесяти до ста неоподатковуваних мінімумів доходів громадян з позбавленням права керування транспортними засобами на строк від трьох до шести місяців або адміністративний арешт на строк від п’яти до десяти діб.',
		href 		: 'https://zakon.rada.gov.ua/laws/show/80731-10#n965', 
	},
	{ 
		id 			: '121_5', article: '121', part: '5', min: 30, organ: 'art222', edit: { d: '29', m: '09', y: '2023', },
		title 		: 'Порушення правил користування ременями безпеки або мотошоломами -', 
		sanction 	: 'тягне за собою накладення штрафу в розмірі тридцяти неоподатковуваних мінімумів доходів громадян.',
		href 		: 'https://zakon.rada.gov.ua/laws/show/80731-10#n967', 
	},
	{ 
		id 			: '121_6', article: '121', part: '6', min: 50, organ: 'art222', edit: { d: '29', m: '09', y: '2023', },
		title 		: 'Керування водієм транспортним засобом, не зареєстрованим або не перереєстрованим в Україні в установленому порядку, -', 
		sanction 	: 'тягне за собою накладення штрафу в розмірі п’ятдесяти неоподатковуваних мінімумів доходів громадян.',
		repeat		: '121_7',
		href 		: 'https://zakon.rada.gov.ua/laws/show/80731-10#n969', 
	},
	{ 
		id 			: '121_7', article: '121', part: '7', min: 100, organ: 'art221', edit: { d: '29', m: '09', y: '2023', },
		title 		: 'Повторне протягом року вчинення будь-якого з порушень, передбачених частиною шостою цієї статті, -', 
		sanction 	: 'тягне за собою накладення штрафу в розмірі ста неоподатковуваних мінімумів доходів громадян або громадські роботи на строк від тридцяти до сорока годин, з оплатним вилученням транспортного засобу чи без такого.',
		href 		: 'https://zakon.rada.gov.ua/laws/show/80731-10#n971', 
	},
	{ 
		id 			: '121_8', article: '121', part: '8', min: 500, organ: 'art222', edit: { d: '29', m: '09', y: '2023', },
		title 		: 'Керування водієм транспортним засобом, щодо якого порушено обмеження, встановлені Митним кодексом України, а саме: порушено строки його тимчасового ввезення та/або переміщення в митному режимі транзиту; транспортний засіб використовується для цілей підприємницької діяльності та/або отримання доходів в Україні; транспортний засіб передано у володіння, користування або розпорядження особі, яка не ввозила його на митну територію України або не поміщувала в митний режим транзиту, -', 
		sanction 	: 'тягне за собою накладення штрафу на водія в розмірі п’ятисот неоподатковуваних мінімумів доходів громадян.',
		href 		: 'https://zakon.rada.gov.ua/laws/show/80731-10#n4186', 
		repeat		: '121_9',
	},
	{ 
		id 			: '121_9', article: '121', part: '9', min: 1000, organ: 'art221', edit: { d: '29', m: '09', y: '2023', },
		title 		: 'Повторне протягом року вчинення порушення, передбаченого частиною восьмою цієї статті, -', 
		sanction 	: 'тягне за собою накладення штрафу на водія в розмірі однієї тисячі неоподатковуваних мінімумів доходів громадян з позбавленням права керування транспортними засобами на строк один рік та з оплатним вилученням транспортного засобу чи без такого.',
		href 		: 'https://zakon.rada.gov.ua/laws/show/80731-10#n4188', 
	},
	{ 
		id 			: '121_10', article: '121', part: '10', min: 30, organ: 'art222', edit: { d: '29', m: '09', y: '2023', },
		title 		: 'Порушення правил перевезення дітей -', 
		sanction 	: 'тягне за собою накладення штрафу на водія в розмірі тридцяти неоподатковуваних мінімумів доходів громадян.',
		href 		: 'https://zakon.rada.gov.ua/laws/show/80731-10#n4285', 
		repeat		: '121_11',
	},
	{ 
		id 			: '121_11', article: '121', part: '11', min: 50, organ: 'art222', edit: { d: '30', m: '09', y: '2023', },
		title 		: 'Повторне протягом року вчинення порушення, передбаченого частиною десятою цієї статті, -', 
		sanction 	: 'тягне за собою накладення штрафу на водія в розмірі п’ятдесяти неоподатковуваних мінімумів доходів громадян.',
		href 		: 'https://zakon.rada.gov.ua/laws/show/80731-10#n4287', 
	},





{ 
	id 		: '121-3', article: '121-3', edit: { d: '07', m: '10', y: '2023', }, 
	title 	: 'Порушення вимог законодавства щодо використання номерних знаків транспортних засобів', 
},
	{ 
		id 			: '121-3_1', article: '121-3', part: '1', min: 70, organ: 'art222', edit: { d: '07', m: '10', y: '2023', }, 
		title 		: 'Керування або експлуатація транспортного засобу без номерного знака, з номерним знаком, що не належить цьому засобу або не відповідає встановленим зразкам або вимогам, з номерним знаком, закріпленим у не встановленому для цього місці, перевернутим чи неосвітленим, закритим іншими предметами (в тому числі прозорими), з нанесенням покриття або застосуванням матеріалів, що перешкоджають чи ускладнюють його ідентифікацію, забрудненим номерним знаком, якщо така забрудненість не дає можливості чітко визначити символи або буквено-числову комбінацію номерного знака з відстані двадцяти метрів, а так само вчинення інших дій, спрямованих на умисне приховування номерного знака, -', 
		sanction 	: 'тягнуть за собою накладення штрафу в розмірі сімдесяти неоподатковуваних мінімумів доходів громадян.',
		href 		: 'https://zakon.rada.gov.ua/laws/show/80731-10#n4600', 
	},



{ 
	id 		: '122', article: '122', edit: { d: '29', m: '09', y: '2023', }, 
	title 	: 'Перевищення встановлених обмежень швидкості руху, проїзд на заборонний сигнал регулювання дорожнього руху та порушення інших правил дорожнього руху', 
},
	{ 
		id 			: '122_1', article: '122', part: '1', min: 20, organ: 'art222', edit: { d: '29', m: '09', y: '2023', },
		title 		: 'Перевищення встановлених обмежень швидкості руху транспортних засобів більш як на двадцять кілометрів на годину, порушення вимог дорожніх знаків та розмітки проїзної частини доріг, правил перевезення вантажів, буксирування транспортних засобів, зупинки, стоянки, проїзду пішохідних переходів, ненадання переваги у русі пішоходам на нерегульованих пішохідних переходах, а так само порушення встановленої для транспортних засобів заборони рухатися тротуарами чи пішохідними доріжками, -', 
		sanction 	: 'тягнуть за собою накладення штрафу в розмірі двадцяти неоподатковуваних мінімумів доходів громадян.',
		href 		: 'https://zakon.rada.gov.ua/laws/show/80731-10#n3533', 
	},
	{ 
		id 			: '122_2', article: '122', part: '2', min: 30, organ: 'art222', edit: { d: '29', m: '09', y: '2023', },
		title 		: 'Порушення правил проїзду перехресть, зупинок транспортних засобів загального користування, проїзд на заборонний сигнал світлофора або жест регулювальника, порушення правил обгону і зустрічного роз’їзду, безпечної дистанції або інтервалу, розташування транспортних засобів на проїзній частині, порушення правил руху автомагістралями, користування зовнішніми освітлювальними приладами або попереджувальними сигналами при початку руху чи зміні його напрямку, використання цих приладів та їх переобладнання з порушенням вимог відповідних стандартів, користування під час руху транспортного засобу засобами зв’язку, не обладнаними технічними пристроями, що дозволяють вести перемови без допомоги рук (за винятком водіїв оперативних транспортних засобів під час виконання ними невідкладного службового завдання), а так само порушення правил навчальної їзди, -', 
		sanction 	: 'тягнуть за собою накладення штрафу в розмірі тридцяти неоподатковуваних мінімумів доходів громадян.',
		href 		: 'https://zakon.rada.gov.ua/laws/show/80731-10#n3535', 
	},
	{ 
		id 			: '122_3', article: '122', part: '3', min: 40, organ: 'art222', edit: { d: '29', m: '09', y: '2023', },
		title 		: 'Ненадання переваги в русі транспортним засобам аварійно-рятувальних служб, швидкої медичної допомоги, пожежної охорони, поліції, що рухаються з увімкненими спеціальними світловими або звуковими сигнальними пристроями, ненадання переваги маршрутним транспортним засобам, у тому числі порушення правил руху і зупинки на смузі для маршрутних транспортних засобів, а так само порушення правил зупинки, стоянки, що створюють перешкоди дорожньому руху або загрозу безпеці руху, -', 
		sanction 	: 'тягнуть за собою накладення штрафу в розмірі сорока неоподатковуваних мінімумів доходів громадян.',
		href 		: 'https://zakon.rada.gov.ua/laws/show/80731-10#n3537', 
	},
	{ 
		id 			: '122_4', article: '122', part: '4', min: 100, organ: 'art222', edit: { d: '29', m: '09', y: '2023', },
		title 		: 'Перевищення встановлених обмежень швидкості руху транспортних засобів більш як на п’ятдесят кілометрів на годину -', 
		sanction 	: 'тягне за собою накладення штрафу в розмірі ста неоподатковуваних мінімумів доходів громадян.',
		href 		: 'https://zakon.rada.gov.ua/laws/show/80731-10#n4471', 
	},
	{ 
		id 			: '122_5', article: '122', part: '5', min: 85, organ: 'art221', edit: { d: '29', m: '09', y: '2023', },
		title 		: 'Порушення, передбачені частинами першою - четвертою цієї статті, що спричинили створення аварійної обстановки, а саме: примусили інших учасників дорожнього руху різко змінити швидкість, напрямок руху або вжити інших заходів щодо забезпечення особистої безпеки або безпеки інших громадян, -', 
		sanction 	: 'тягнуть за собою накладення штрафу в розмірі вісімдесяти п’яти неоподатковуваних мінімумів доходів громадян або позбавлення права керування транспортними засобами на строк від шести місяців до одного року.',
	},
	{ 
		id 			: '122_6', article: '122', part: '6', min: 60, max: 100, organ: 'art222', edit: { d: '29', m: '09', y: '2023', },
		title 		: 'Зупинка чи стоянка транспортних засобів на місцях, що позначені відповідними дорожніми знаками або дорожньою розміткою, на яких дозволено зупинку чи стоянку лише транспортних засобів, якими керують водії з інвалідністю або водії, які перевозять осіб з інвалідністю (крім випадків вимушеної стоянки), а так само створення перешкод водіям з інвалідністю або водіям, які перевозять осіб з інвалідністю, у зупинці чи стоянці керованих ними транспортних засобів, неправомірне використання на транспортному засобі розпізнавального знака "Водій з інвалідністю" -', 
		sanction 	: 'тягнуть за собою накладення штрафу від шістдесяти до ста неоподатковуваних мінімумів доходів громадян.',
		href 		: 'https://zakon.rada.gov.ua/laws/show/80731-10#n4031', 
	},
	{ 
		id 			: '122_7', article: '122', part: '7', min: 20, max: 30, organ: 'art222', edit: { d: '29', m: '09', y: '2023', },
		title 		: 'Зупинка чи стоянка транспортних засобів на місцях, що позначені відповідними дорожніми знаками та/або дорожньою розміткою, на яких дозволено зупинку чи стоянку лише транспортних засобів, оснащених електричними двигунами (одним чи декількома), а так само створення перешкод водіям транспортних засобів, оснащених електричними двигунами (одним чи декількома), у зупинці або стоянці -', 
		sanction 	: 'тягнуть за собою накладення штрафу в розмірі від двадцяти до тридцяти неоподатковуваних мінімумів доходів громадян.',
		href 		: 'https://zakon.rada.gov.ua/laws/show/80731-10#n4275', 
	},



{ 
	id 		: '126', article: '126', edit: { d: '07', m: '10', y: '2023', }, href: '', 
	title 	: 'Керування транспортним засобом особою, яка не має відповідних документів на право керування таким транспортним засобом або не пред’явила їх для перевірки, або стосовно якої встановлено тимчасове обмеження у праві керування транспортними засобами', 
},
	{ 
		id 			: '126_1', article: '126', part: '1', min: 25, organ: 'art222', edit: { d: '07', m: '10', y: '2023', },
		title 		: 'Керування транспортним засобом особою, яка не має при собі або не пред’явила у спосіб, який дає можливість поліцейському прочитати та зафіксувати дані, що містяться в посвідченні водія відповідної категорії, реєстраційному документі на транспортний засіб, а також полісі (договорі) обов’язкового страхування цивільно-правової відповідальності власників наземних транспортних засобів (страхового сертифіката "Зелена картка"), або не пред’явила електронне посвідчення водія та електронне свідоцтво про реєстрацію транспортного засобу, чинний внутрішній електронний договір зазначеного виду обов’язкового страхування у візуальній формі страхового поліса, а також інших документів, передбачених законодавством, -', 
		sanction 	: 'тягне за собою накладення штрафу в розмірі двадцяти п’яти неоподатковуваних мінімумів доходів громадян.',
		href 		: 'https://zakon.rada.gov.ua/laws/show/80731-10#n1036', 
	},
	{ 
		id 			: '126_2', article: '126', part: '2', min: 200, organ: 'art222', edit: { d: '08', m: '10', y: '2023', },
		title 		: 'Керування транспортним засобом особою, яка не має права керування таким транспортним засобом, або передача керування транспортним засобом особі, яка не має права керування таким транспортним засобом, -', 
		sanction 	: 'тягнуть за собою накладення штрафу в розмірі двохсот неоподатковуваних мінімумів доходів громадян.',
		repeat 		: '126_5',
		href 		: 'https://zakon.rada.gov.ua/laws/show/80731-10#n1038', 
	},
	{ 
		id 			: '126_3', article: '126', part: '3', min: 0, organ: 'art221', edit: { d: '08', m: '10', y: '2023', },
		title 		: 'Керування транспортним засобом особою, стосовно якої встановлено тимчасове обмеження у праві керування транспортними засобами, -', 
		sanction 	: 'тягне за собою позбавлення права керування транспортними засобами на строк від трьох до шести місяців.',
		repeat 		: '126_5',
		href 		: 'https://zakon.rada.gov.ua/laws/show/80731-10#n4068', 
	},
	{ 
		id 			: '126_4', article: '126', part: '4', min: 1200, organ: 'art222', edit: { d: '08', m: '10', y: '2023', },
		title 		: 'Керування транспортним засобом особою, позбавленою права керування транспортними засобами, -', 
		sanction 	: 'тягне за собою накладення штрафу в розмірі однієї тисячі двохсот неоподатковуваних мінімумів доходів громадян',
		repeat 		: '126_5',
		href 		: 'https://zakon.rada.gov.ua/laws/show/80731-10#n1040', 
	},
	{ 
		id 			: '126_5', article: '126', part: '5', min: 2400, organ: 'art221', edit: { d: '08', m: '10', y: '2023', },
		title 		: 'Повторне протягом року вчинення порушень, передбачених частинами другою - четвертою цієї статті, -', 
		sanction 	: 'тягне за собою накладення штрафу в розмірі двох тисяч чотирьохсот неоподатковуваних мінімумів доходів громадян з позбавленням права керування транспортним засобом на строк від п’яти до семи років та з оплатним вилученням транспортного засобу чи без такого.',
		href 		: 'https://zakon.rada.gov.ua/laws/show/80731-10#n4475', 
	},






{ 
	id 		: '127', article: '127', edit: { d: '08', m: '10', y: '2023', }, 
	title 	: 'Порушення правил дорожнього руху пішоходами, велосипедистами та особами, які керують гужовим транспортом, і погоничами тварин', 
},
	{ 
		id 			: '127_1', article: '127', part: '1', min: 15, organ: 'art222', edit: { d: '08', m: '10', y: '2023', }, 
		title 		: 'Непокора пішоходів сигналам регулювання дорожнього руху, перехід ними проїзної частини у невстановлених місцях або безпосередньо перед транспортними засобами, що наближаються, невиконання інших правил дорожнього руху -', 
		sanction 	: 'тягнуть за собою накладення штрафу в розмірі п’ятнадцяти неоподатковуваних мінімумів доходів громадян.',
		href 		: 'https://zakon.rada.gov.ua/laws/show/80731-10#n1045', 
	},











];















let objListPatrolKupap = {};
arrListPatrolKupap.forEach( k => {
	objListPatrolKupap[ k.id ] = k;
});







