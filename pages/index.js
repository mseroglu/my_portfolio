import Layout from '../components/Layout'
import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

export default function Home() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current,
      {
        strings: ['React Developer', 'Django Developer', "QT Developer", "Python", "JavaScript", "TypeScript"],
        typeSpeed: 50,
        loop: true,
        showCursor: false,
        startDelay: 500,
        backDelay: 2000,
      }
    );
    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, [])

  return (
    <Layout title={"Portfolio"} description={"Description"}>
      <motion.img src='/images/ball-1.svg' alt='ball'
        className='hidden md:block h-auto absolute top-48 right-10 z-[1]'
        whileHover={{ y: -10, rotate: 150, transition: { duration: .3 } }}
        drag dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }} />
      <motion.img src='/images/ball-2.svg' alt='ball'
        className='hidden md:block h-auto absolute bottom-10 left-10 z-[1]'
        whileHover={{ y: -10, rotate: 120, transition: { duration: .3 } }}
        drag dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }} />
      <main className='w-full h-full ' >
        <section className='h-full max-w-5xl mx-auto pt-16 md:pt-8'>
          <div className='flex flex-col items-center justify-center md:items-start text-gray-800 dark:text-white'>
            <h4 className='text-xl '>
              <span className=' font-normal '>Hello,</span> I'm
            </h4>
            <h1 className='mt-3 text-xl font-bold tracking-normal md:text-3xl uppercase'>
              MEHMET SALİH EROĞLU
            </h1>
            <h1 ref={el} className='mt-3 h-7 text-xl font-semibold text-transparent bg-gradient-to-r from-pink-500 via-indigo-400 to-purple-700 bg-clip-text'>
            </h1>

            {/** Social Accounts */}
            <div className='flex text-3xl gap-4 mt-5'>
              <a href='https://www.youtube.com/@mseroglu47' target='_blank' className='rounded-full border-2 border-gray-900 dark:border-white p-2 hover:bg-red-500 transition'>
                <FaYoutube className=" hover:scale-110 text-[16px]" />
              </a>
              <a href='https://www.linkedin.com/in/mseroglu/' target='_blank' className='rounded-full border-2 border-gray-900 dark:border-white p-2 hover:bg-blue-500 transition'>
                <FaLinkedinIn className='text-[16px]' />
              </a>
              <a href='https://github.com/mseroglu' target='_blank' className='rounded-full border-2 border-gray-900 dark:border-white p-2 hover:bg-zinc-500 transition'>
                <FiGithub className='text-[16px]' />
              </a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}
