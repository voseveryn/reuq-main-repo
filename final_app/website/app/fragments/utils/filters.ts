export const byUniqueOne = {
	by: {
		unique: 'One',
	},
} as const

export const byLocale = (locale: string) => {
	return {
		by: {
			locale: {
				code: locale,
			},
		},
	} as const
}

export const orderByOrder = {
	orderBy: [
		{
			order: 'asc',
		},
	],
} as const

export const filterByUrl = (urlToMatch: string) => {
	return {
		url: {
			url: {
				eq: urlToMatch,
			},
		},
	} as const
}

export const byLocaleUrl = (urlToMatch: string) => {
	return {
		by: {
			locales: {
				url: {
					url: urlToMatch,
				},
			},
		},
	} as const
}

const normalizePath = (p: string) => (p.startsWith("/") ? p : `/${p}`)

export const byProductUrl = (urlToMatch: string) =>
  ({
    by: {
      locales: {
          url: {
          url: normalizePath(urlToMatch),
        },
      },
    },
  } as const)