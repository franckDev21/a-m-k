export const PAGES = {
	index: '/',
	profil: '/profil',
	offer: (offres: string,type: string) => `/subscription/${offres}/${type}/checkout`,
	test: (offre: string,type: string) => `/test/${offre}/${type}`,
	login: '/login',
	register: '/register',
} as const;
