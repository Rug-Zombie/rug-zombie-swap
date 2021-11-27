import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'PancakeSwap',
  description:
    'The most popular AMM on BSC by user count! Earn CAKE through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by PancakeSwap), NFTs, and more, on a platform you can trust.',
  image: 'https://pancakeswap.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('RugZombie')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('RugZombie')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('RugZombie')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('RugZombie')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('RugZombie')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('RugZombie')}`,
      }
    default:
      return null
  }
}
