import majidphoto from '../assets/majid.png'


const AboutUs = () => {
  return (
    <>
    <div className='w-screen flex justify-center text-center mt-20'>
      <h2 className='font-bold text-4xl rounded-lg'>About <span className='text-yellow-500'>Snabel Sweets</span></h2>
    </div>
      <p className='w-2/3 m-auto mt-5 font-semibold hidden md:block'>Snabel means <span className='text-yellow-500'>گندم کا سٹا</span> It is one of the oldest Sweets shop at <span className='text-yellow-500'>Bhera Road Malakwal.</span> At Snabel Sweets we offer large variety of Sweets including Desi and Trendy. It also has a combined grocery store with it wich was started in 2014</p>
      <div className="flex flex-col-reverse text-center md:text-start gap-5 md:flex-row py-20 justify-around items-center ">
        <div className="name">
          <h1 className='text-yellow-500 text-5xl font-bold'>CEO</h1>
          <h2 className='text-3xl font-bold'>Majid Mughal</h2>
        </div>
        <div className="photo"><img src={majidphoto} alt="Majid Mughal" className='w-3xs' /></div>
      </div>
      </>
  )
}
export default AboutUs