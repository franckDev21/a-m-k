export const PAGES = {
	index: '/',
	profil: '/profil',
	offer: (offre: string,type: string) => `/subscription/${offre}/${type}/checkout`,
	login: '/login',
	register: '/register',
} as const;
