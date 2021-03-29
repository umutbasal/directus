import InterfaceSystemLanguage from './system-language.vue';
import { defineInterface } from '@/interfaces/define';

export default defineInterface(({ i18n }) => ({
	id: 'system-language',
	name: '$t:language'
	icon: 'translate',
	component: InterfaceSystemLanguage,
	system: true,
	types: ['string'],
	options: [],
}));
