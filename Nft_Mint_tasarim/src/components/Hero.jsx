import React from 'react'
import github from '../assets/github_icon.png'
import facebook from '../assets/facebook_icon.png'
import twitter from '../assets/twitter_icon.png'
import metamask_icon from '../assets/metamask_icon.png'
const Hero = () => {
    const myAdress="https://etherscan.io/address/0xc6Ace5657A412E052ed992FB56119267752Fa2ce";
  return (
    <div className="bg-[url('https://cdn.pixabay.com/photo/2022/03/01/02/51/galaxy-7040416_960_720.png')]
    bg-no-repeat bg-cover">
        <div className='flex flex-col justify-center items-center
        mx-auto py-10 '>
            <h1 className='text-white text-5xl font-bold text-center'>
                A.I Arts <br />
                <span className='text-gradient'>NFTs </span>
                Collection
            </h1>

            <p className='text-white font-semibold text-sm mt-3'>Mint and Collect the hottest NFTs arround.</p>

            <button className='shadow-xl shadow-blck text-white
            bg-[#e32970] hover:bg-[#bd255f] p-2
            rounded-full cursor-pointer my-4
            mt-10'
            >Mint NOW</button>

            <a className='flex justify-center items-center space-x-2 
            bg-[#000000ad] rounded-full my-4 pr-3 cursor-pointer mt-10' href={myAdress} target='_blank'>
                <img className='w-11 h-11 object-contain rounded-full' src={metamask_icon} alt="" />
                <div className=' flex flex-col font-semibold text-white text-sm'>
                    <span>0xc6Ace....2ce</span>
                    <span className='text-[#e32970]'>Sezer</span>
                </div>
            </a>

            <p className='text-white text-sm font-medium text-center'>
                <br />
                Lorem ipsum dolor, sit amet consectetura adipisicing elit. <br/>Perferendis doloremque esse temporibus numquam doloribus odio earum consequatur placeat
                <br /> nam ex.
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, sit perferendis consectetur esse officia eveniet ipsam eius laudantium eligendi <br/>
                 dolorem animi temporibus aperiam laboriosam porro numquam nisi. Suscipit id, dolore delectus minima,
                </p>

            <ul className='flex flex-row justift-center space-x-2
            items-center my-4 mt-12'>
                <a  className='bg-white hover:scale-50 transition-all
                duration-75 delay-75 rounded-full mx-2' href="#">
                    <img className='w-7 h-7' src={github} alt="Github" />
                </a>
                <a  className='bg-white hover:scale-50 transition-all
                duration-75 delay-75 rounded-full mx-2' href="#">
                    <img className='w-7 h-7' src={facebook} alt="facebook" />
                </a>
                <a  className='bg-white hover:scale-50 transition-all
                duration-75 delay-75 rounded-full mx-2' href="#">
                    <img className='w-7 h-7' src={twitter} alt="twitter" />
                </a>
            </ul>

            <div className='shadow-xl shadow-black flex justify-center
            items-center w-10 h-10 rounded-full bg-white cursor-pointer
            p-3 ml-4 text-black hover:bg-[#bd255f] hover:text-white
            tranition-all duration-75 delay-100 mt-15'>
                <span className='text-sm font-bold'>99</span>
            </div>

        </div>
    </div>

  )
}

export default Hero