




const arrListPatrolFabuly = [

/*
{ 
	id 		: 'traffic_light_red',
	//title 	: 'здійснив проїзд на червоний сигнал світлофора, чим порушив п.8.7.3.е ПДР, чим скоїв адміністративне правопорушення, передбачене ч.2 ст.122 КУпАП.', 
	title 	: '', 
	//offense : 'ючи',
	//offense : 'вав',

	fabula 	: 'здійснив рух на заборонений червоний сигнал світлофора', 
	kupap 	: { id: '122_2', art: '122', part: '2', },
	pdr 	: '8.7.3.e', 	


	img 	: 'light_left_no', // якщо є - то картинка звідси, якщо нема - картинка з ID

},
*/








{ 
	id 		: 'light_left_no',
	fabula 	: 'на якому не горіла лампа лівої фари в режимі ближнього світла, здійснював рух в темну пору доби', 
	kupap 	: { id: '121_1', art: '121', part: '1', },
	pdr 	: '31.4.3.в',
},














{ 
	id 		: 'sign_2.2',
	fabula : 'не виконав вимогу дорожнього знаку {sign}, здійснивши рух без зупинки перед знаком',
	kupap 	: { art: '122', part: '1', },
	pdr 	: '8.4.б',
	sign 	: '2.2',
},
{ 
	id 		: 'sign_3.1',
	fabula 	: 'не виконав вимогу дорожнього знаку {sign}, здійснивши рух в зону дії знаку',
	kupap 	: { art: '122', part: '1', },
	pdr 	: '8.4.в',
	sign 	: '3.1',
},
{ 
	id 		: 'sign_3.2',
	fabula 	: 'не виконав вимогу дорожнього знаку {sign}, здійснивши рух в зону дії знаку',
	kupap 	: { art: '122', part: '1', },
	pdr 	: '8.4.в',
	sign 	: '3.2',
},
{ 
	id 		: 'sign_3.21',
	fabula 	: 'не виконав вимогу дорожнього знаку {sign}, здійснивши рух в зону дії знаку',
	kupap 	: { art: '122', part: '1', },
	pdr 	: '8.4.в',
	sign 	: '3.21',
},
{ 
	id 		: 'sign_3.34',
	fabula 	: 'не виконав вимогу дорожнього знаку {sign}, здійснивши зупинку в зоні дії знаку',
	kupap 	: { art: '122', part: '1', },
	pdr 	: '8.4.в',
	sign 	: '3.34',
},
{ 
	id 		: 'sign_3.35',
	fabula 	: 'не виконав вимогу дорожнього знаку {sign}, здійснивши стоянку в зоні дії знаку',
	kupap 	: { art: '122', part: '1', },
	pdr 	: '8.4.в',
	sign 	: '3.35',
},










{ 
	id 		: 'stop_sign_5.38.1',
	fabula 	: 'здійснив зупинку ближче 10 м від пішохідного переходу, позначеного знаком {sign}',
	kupap 	: { art: '122', part: '1', },
	pdr 	: '15.9.г',
	sign 	: '5.38.1',
},
{ 
	id 		: 'stop_sign_5.38.2',
	fabula 	: 'здійснив зупинку ближче 10 м від пішохідного переходу, позначеного знаком {sign}',
	kupap 	: { art: '122', part: '1', },
	pdr 	: '15.9.г',
	sign 	: '5.38.2',
},
{ 
	id 		: 'stop_sign_5.45.1',
	fabula 	: 'здійснив зупинку ближче 30 м від посадкового майданчику для зупинки маршрутних ТЗ, позначеного знаком {sign}',
	kupap 	: { art: '122', part: '1', },
	pdr 	: '15.9.е',
	sign 	: '5.45.1',
},
{ 
	id 		: 'stop_sign_5.46.1',
	fabula 	: 'здійснив зупинку ближче 30 м від посадкового майданчику для зупинки маршрутних ТЗ, позначеного знаком {sign}',
	kupap 	: { art: '122', part: '1', },
	pdr 	: '15.9.е',
	sign 	: '5.46.1',
},
{ 
	id 		: 'stop_sign_5.47.1',
	fabula 	: 'здійснив зупинку ближче 30 м від посадкового майданчику для зупинки маршрутних ТЗ, позначеного знаком {sign}',
	kupap 	: { art: '122', part: '1', },
	pdr 	: '15.9.е',
	sign 	: '5.47.1',
},
{ 
	id 		: 'stop_sign_5.48',
	fabula 	: 'здійснив зупинку ближче 30 м від посадкового майданчику для зупинки маршрутних ТЗ, позначеного знаком {sign}',
	kupap 	: { art: '122', part: '1', },
	pdr 	: '15.9.е',
	sign 	: '5.48',
},
























{ 
	id 		: 'traffic_light_red',
	fabula 	: 'здійснив рух на заборонений червоний сигнал світлофора', 
	kupap 	: { id: '122_2', art: '122', part: '2', },
	pdr 	: '8.7.3.e',
},
{ 
	id 		: 'traffic_light_yellow',
	fabula 	: 'здійснив рух на заборонений жовтий сигнал світлофора', 
	kupap 	: { id: '122_2', art: '122', part: '2', },
	pdr 	: '8.7.3.ґ',
},
{ 
	id 		: 'turn_signal_no_a',
	fabula 	: 'не подав сигнал світловими покажчиками повороту відповідного напрямку перед  ( --початком руху,  --зупинкою )', 
	kupap 	: { id: '122_2', art: '122', part: '2', },
	pdr 	: '9.2.а',

},
{ 
	id 		: 'turn_signal_no_b',
	fabula 	: 'не подав сигнал світловими покажчиками повороту відповідного напрямку перед  ( --перестроюванням,  --поворотом,  --розворотом )', 
	kupap 	: { id: '122_2', art: '122', part: '2', },
	pdr 	: '9.2.б',
},
{ 
	id 		: 'solid_double',
	fabula 	: 'перетнув подвійну суцільну лінію дорожньої горизонтальної розмітки, яка поділяє транспортні потоки протилежних напрямків', 
	kupap 	: { id: '122_2', art: '122', part: '2', },
	pdr 	: '34.1',
	marking : '1.3',
},
{ 
	id 		: 'pdr_11.4',
	fabula 	: 'на дорозі з двостороннім рухом, яка має ( --дві, --три, ) смуги для руху в одному напрямку, здійснив виїзд на призначений для зустрічного руху бік дороги', 
	kupap 	: { id: '122_2', art: '122', part: '2', },
	pdr 	: '11.4',
},














{ 
	id 		: 'sign_5.8',
	fabula 	: 'на дорозі із смугою для маршрутних ТЗ, позначеній дорожнім знаком {sign} здійснив ( --рух, --зупинку ) на цій смузі',
	kupap 	: { art: '122', part: '3', },
	pdr 	: '17.1',
	sign 	: '5.8',
},
{ 
	id 		: 'sign_5.11',
	fabula 	: 'на дорозі із смугою для маршрутних ТЗ, позначеній дорожнім знаком {sign} здійснив ( --рух, --зупинку ) на цій смузі',
	kupap 	: { art: '122', part: '3', },
	pdr 	: '17.1',
	sign 	: '5.11',
},











































];














/*
let objListAny = {};
arrListAny.forEach( k => {
	objListAny[ k.id ] = k;
});
*/






