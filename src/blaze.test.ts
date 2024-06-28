import { blaze } from './blaze';
import { PhrasebookMap, Phrasebook } from './Phrasebook';

const enUS = {
	hello: 'Hello world!',
	goodbye: 'Goodbye friends!',
	changeColor: 'Change color',
} as const satisfies Phrasebook;

const ruRU = {
	hello: 'Привет мир!',
	goodbye: 'До свидания, друзья!',
	changeColor: 'Изменить цвет',
} as const satisfies Phrasebook;

const ukUA = {
	hello: 'Привіт світ!',
	goodbye: 'До побачення, друзі!',
	changeColor: 'Змінити колір',
} as const satisfies Phrasebook;

const enGB = {
	hello: 'Hello world!',
	goodbye: 'Goodbye friends!',
	changeColor: 'Change colour',
} as const satisfies Phrasebook;

const es = {
	hello: '¡Hola mundo!',
	goodbye: '¡Adiós amigos!',
	changeColor: 'Cambiar color',
} as const satisfies Phrasebook;

const esAR = {
	hello: '¡Hola mundo!',
	goodbye: '¡Adiós amigos!',
	changeColor: 'Cambiar color',
} as const satisfies Phrasebook;

const esBO = {
	hello: '¡Hola mundo!',
	goodbye: '¡Adiós amigos!',
	changeColor: 'Cambiar color',
} as const satisfies Phrasebook;
const sources = {
	'en-US': enUS,
	'ru-RU': ruRU,
	'uk-UA': ukUA,
	'en-GB': enGB,
	es,
	'es-AR': esAR,
	'es-BO': esBO,
} satisfies PhrasebookMap;
const book = blaze(sources, 'en-US');
const changeColorInBritishEnglish = book.getPhrasebook('en-GB').changeColor;
const changeColorInAnyEnglish = book.getPhrasebook('en').changeColor;
