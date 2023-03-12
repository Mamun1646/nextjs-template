import Image from 'next/image'
export default function Sidebar(){
    return <div className="bg-black text-white w-72 h-full">
        <div className='pt-10'>
        <Image
      src="/formal.jpg"
      alt="Picture of Mamun"
      className='rounded-full mx-auto h-28'
      width={100}
      height={50}
    />
        </div>
        <div className='mt-10 ml-10'>
            <p className='text-2xl'>Personal Info</p>
            <p>email : mamun.ru.ice@gmail.com</p>
            <p>phone : 01770540432</p>
            <p>address : G.P. Chha-2, T.B. Gate, Mohakhali, Dhaka-1212</p>
        </div>
        <div className='mt-10 ml-10'>
            <p className='text-2xl'>Education</p>
            <p className='text-lg'>Bsc Engineering(3.16)</p>
            <p className='text-sm'>University of Rajshahi</p>
            <p className='text-xs'>January2017-June2022</p>
            <p className='text-lg'>Hsc(5.00)</p>
            <p className='text-sm'>Holy Land College,Dinajpur</p>
        </div>

        <div className='mt-10 ml-10'>
            <p className='text-2xl'>Skills</p>
            <p className='border-b-8 w-32'>Nextjs</p>
            <p className='border-b-8 w-32'>Reactjs</p>
            <p className='border-b-8 w-32'>Tailwind Css</p>
            <p className='border-b-8 w-32'>Nestjs</p>
            <p className='border-b-8 w-32'>MongoDb</p>
            <p className='border-b-8 w-32'>MySQL</p>
            <p className='border-b-8 w-32'>GraphQL</p>
            
        </div>


        <div className='mt-10 ml-10'>
            <p className='text-2xl'>Languages</p>
            <p className='border-b-8 w-32'>English</p>
            <p className='border-b-8 w-32 ring-sky-100'>Bangla</p>
            
            
        </div>

        <div className='mt-10 ml-10 pb-20'>
            <p className='text-2xl'>Link</p>
            <p className='border-b-8 w-32'>Codeforces</p>
            <p className='border-b-8 w-32 ring-sky-100'>LinkedIn</p>
            
            
        </div>
    </div>
}