import { getDictionary } from "@/dictionaries"
import React, { useState as useStateGlobal } from "react";

interface HomeProps {
  params: {
    lang: string;
  };
}

async function Home({params: {lang}}: HomeProps) {
  const dictionary = await getDictionary(lang)
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <div className='flex'>
        <a href='/en/Hello' className='pr-8 text-blue-500'>EN</a>
        <span className='pr-4'>&nbsp;</span>
        <a href='/de/Hello' className='text-blue-500'>DE</a>
      </div>
      <h1 className='text-4xl font-bold mb-4'>{dictionary.Hello.title}</h1>
      <p className='text-lg'>{dictionary.Hello.description}</p>
    </div>
  )
}

export default Home
