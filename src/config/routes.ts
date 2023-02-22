export const PAGES = {
	index: '/',
	profil: '/profil',
	offer: (offres: string,type: string) => `/subscription/${offres}/${type}/checkout`,
	login: '/login',
	register: '/register',
} as const;
