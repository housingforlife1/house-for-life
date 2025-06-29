import { Button } from '@/components/ui/button'
import { HeartIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'
import React from 'react'

export default function DonationBtn() {
  const t = useTranslations('navigation')
  return (
    <Button className="h-[50px] px-5 py-[15px] bg-green rounded-[54px] relative">
        <span className="font-['Instrument_Sans',Helvetica] font-bold text-[#fffef5] text-sm leading-[22.4px]">
            {t('faire_un_don')}
        </span>
        <HeartIcon className="w-6 h-6 ml-1.5" />

        {/* Yellow indicator dot */}
        <div className="absolute w-[23px] h-[23px] -top-1.5 left-px bg-white rounded-[50px] flex items-center justify-center">
            <div className="w-[11px] h-[11px] bg-yello rounded-[50px]" />
        </div>
    </Button>
  )
}
