import React from 'react'
import CustomSection from '@/components/custom-section/CustomSection'

const AdminPanel = () => {
  return (
    <CustomSection direction="col" center="items-center">
      <div
        className="border border-orange rounded-[16px] p-2.5 justify-center items-center flex flex-col gap-2 bg-black-pearl/70">
        <h4 className="text-primary text-3xl">Панель адміністратора</h4>
        <table className="">

        </table>
      </div>
    </CustomSection>
  )
}

export default AdminPanel
