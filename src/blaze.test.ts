import { blaze } from './blaze';
import { PhrasebookMap, SinglePhrasebook } from './PhrasebookMap';

const enUS = {
	hello: 'Hello world!',
	goodbye: 'Goodbye friends!',
	changeColor: 'Change color',
} as const satisfies SinglePhrasebook;

const ruRU = {
	hello: 'Привет мир!',
	goodbye: 'До свидания, друзья!',
	changeColor: 'Изменить цвет',
} as const satisfies SinglePhrasebook;

const ukUA = {
	hello: 'Привіт світ!',
	goodbye: 'До побачення, друзі!',
	changeColor: 'Змінити колір',
} as const satisfies SinglePhrasebook;

const enGB = {
	hello: 'Hello world!',
	goodbye: 'Goodbye friends!',
	changeColor: 'Change colour',
} as const satisfies SinglePhrasebook;

const es = {
	hello: '¡Hola mundo!',
	goodbye: '¡Adiós amigos!',
	changeColor: 'Cambiar color',
} as const satisfies SinglePhrasebook;

const esAR = {
	hello: '¡Hola mundo!',
	goodbye: '¡Adiós amigos!',
	changeColor: 'Cambiar color',
} as const satisfies SinglePhrasebook;

const esBO = {
	hello: '¡Hola mundo!',
	goodbye: '¡Adiós amigos!',
	changeColor: 'Cambiar color',
} as const satisfies SinglePhrasebook;
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
