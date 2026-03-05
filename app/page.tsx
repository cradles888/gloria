import CardWb from '@/components/card-wb'
import Filter from '@/components/filter/page'
import CardCompex from '@/components/ui/card-complex'
export default function Home() {
  return (
    <div className="min-h-screen">
      <div className='grid lg:flex container-padding mx-auto gap-8 my-16'>
      <CardWb title={'Семейная ипотека от 6%'} text={'От наших партнёров — СберБанк · ВТБ '} image={'/wb-ipoteka.png'} alt={'wb-ipoteka'}/>
      <CardWb title={'Новые квартиры в ЖК Юннатов'} text={'Позиция №1 готова к заселению!'} image={'/wb-unnatov.png'} alt={'wb-unnatov'}/>
      </div>
      <div className='container-padding mx-auto my-30'>
        <h1 className='text-4xl sm:text-5xl text-dark inline-block'>Новостройки <p className='text-accent font-medium inline-block'>в Великом Новгороде</p></h1>
        <Filter/>
      </div>
      <div className='container-padding mb-30 mx-auto'>
        <CardCompex />
      </div>
    </div>
  );
}
