// CORS localhost problem (this url doesn't work)
export const DEFAULT_TOKEN_LIST_URL = 'https://clickswap.cloud/token-list/tokenlist.json'

export const DEFAULT_LIST_OF_LISTS: string[] = [
  DEFAULT_TOKEN_LIST_URL,
  'https://raw.githubusercontent.com/compound-finance/token-list/master/compound.tokenlist.json',
  'https://umaproject.org/uma.tokenlist.json',
  'https://app.tryroll.com/tokens.json',
  'https://tokens.coingecko.com/uniswap/all.json',
]
