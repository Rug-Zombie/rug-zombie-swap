import { MenuItemsType, DropdownMenuItemType } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'
import { nftsBaseUrl } from 'views/Nft/market/constants'

export type ConfigMenuItemsType = MenuItemsType & { hideSubNav?: boolean }

const config: (t: ContextApi['t']) => ConfigMenuItemsType[] = (t) => [
  {
    label: t('Trade'),
    icon: 'Swap',
    href: '/swap',
    showItemsOnMobile: false,
    items: [
      {
        label: t('Exchange'),
        href: '/swap',
      },
      {
        label: t('Liquidity'),
        href: '/liquidity',
      },
    ],
  },
  {
    label: t('Earn'),
    href: '/farms',
    icon: 'Earn',
    items: [
      {
        label: t('Graves'),
        href: 'https://www.rugzombie.io/graves',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
      {
        label: t('Tombs'),
        href: 'https://www.rugzombie.io/tombs',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
      {
        label: t('Spawning Pools'),
        href: 'https://www.rugzombie.io/spawning_pools',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
    ],
  },
  {
    label: t('Win'),
    href: '/prediction',
    icon: 'Trophy',
    items: [
      {
        label: t('Mausoleum'),
        href: 'https://www.rugzombie.io/mausoleum',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
    ],
  },
  {
    label: t('NFT'),
    href: `${nftsBaseUrl}`,
    icon: 'Nft',
    items: [
      {
        label: t('Graveyard'),
        href: 'https://www.rugzombie.io/graveyard',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
    ],
  },
]

export default config
