import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import All from './page/All'
import Fullstack from './page/Fullstack'
import Datascience from './page/Datascience'
import Cyber from './page/Cyber'
import Career from './page/Career'
import Erro from './page/Erro'
import Nav from './components/Nav'

function App() {

  let data = [
    //Full Stack Development
    {
      Head:"Full Stack Development",
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/07/person-front-computer-working-html-768x513.jpg",
      titile:"Best Full-Stack Development Project Ideas in 2024",
      author:"Isha Sharma",
      datas:"26 Mar, 2024"

    },
    {
      Head:"Full Stack Development",
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/07/how-long-it-would-it-take-to-learn-full-stack-development_-768x402.webp",
      titile:"How Long Would It Take to Be a Full Stack Developer?",
      author:"Meghana D",
      datas:"26 Mar, 2024"

    },
    {
      Head:"Full Stack Development",
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/02/1_6rDcIgFJQldloIERiUSmzw-768x317.png",
      titile:"How does Apache work? A detailed introduction to Apache",
      author:"Tushar Vinocha",
      datas:"26 Mar, 2024"

    },
    {
      Head:"Full Stack Development",
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/07/html-css-collage-concept-with-person-768x512.jpg",
      titile:"Top 10 Full-Stack Developer Frameworks in 2024",
      author:"Isha Sharma",
      datas:"26 Mar, 2024"

    },
    {
      Head:"Full Stack Development",
      image:"https://www.guvi.in/blog/wp-content/uploads/2021/05/react-945x495.jpg",
      titile:"6 Essential Prerequisites For Learning ReactJS",
      author:"Ramkumer",
      datas:"26 Mar, 2024"

    },

    //Data Science

    {
      Head:"Data Science",
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp",
      titile:"Top 10 High Paying Non-Coding Jobs in Data Science in 2024",
      author:"Sharma",
      datas:"26 Mar, 2024"

    },

    {
      Head:"Data Science",
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/07/Real-World-Data-Science-Examples-768x402.webp",
      titile:"12 Real-World Data Science Examples: Power Of Data Science",
      author:"Sharma",
      datas:"26 Mar, 2024"

    },

    {
      Head:"Data Science",
      image:"https://www.guvi.in/blog/wp-content/uploads/2022/06/5.-data-science-768x402.png",
      titile:"Can A Commerce Student Do Data Science?",
      author:"Sharma",
      datas:"26 Mar, 2024"

    },

    {
      Head:"Data Science",
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/07/image-4-768x433.png",
      titile:"Roles and Responsibilities of a Data Scientist",
      author:"Sharma",
      datas:"26 Mar, 2024"

    },

    {
      Head:"Data Science",
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/01/paper-analysis-2-768x512.jpg",
      titile:"How to become a Data Scientist after Mechanical Engineering?",
      author:"Sharma",
      datas:"26 Mar, 2024"

    },

    // cyber

    {
      Head:" cyber",
      image:"https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner-768x432.png",
      titile:"Cybersecurity Vs Ethical Hacking: Top 10 Differences",
      author:"Sharma",
      datas:"26 Mar, 2024"

    },

    {
      Head:" cyber",
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
      titile:"Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
      author:"Sharma",
      datas:"26 Mar, 2024"

    },

    {
      Head:" cyber",
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp",
      titile:"What Is Hacking? Types of Hacking & More",
      author:"Sharma",
      datas:"26 Mar, 2024"

    },

    {
      Head:" cyber",
      image:"https://www.guvi.in/blog/wp-content/uploads/2022/11/Teal-Illustration-Digital-Business-Blog-Banner-1-768x432.png",
      titile:"8 Different Types of Cybersecurity and Threats Involved",
      author:"Sharma",
      datas:"26 Mar, 2024"

    },

    {
      Head:" cyber",
      image:"https://www.guvi.in/blog/wp-content/uploads/2022/06/8bfd01c18be1b5059bc0d7770d9dabf1.gif",
      titile:"Is coding required for cybersecurity? If yes, how crucial is coding for cybersecurity?",
      author:"Sharma",
      datas:"26 Mar, 2024"

    },

    // Career

    {
      Head:" Career ",
      image:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSW4xaQnaQyVmfjf5Jn3bNBRlNzFmWylc4cv3yDtb0R8M4y5H87",
      titile:"Data Engineering Course with Bigdata and Hadoop",
      author:"Sharma",
      datas:"26 Mar, 2024"
    },
    {
      Head:" Career ",
      image:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSW4xaQnaQyVmfjf5Jn3bNBRlNzFmWylc4cv3yDtb0R8M4y5H87",
      titile:"AutoCAD Course for Civil Engineers",
      author:"Sharma",
      datas:"26 Mar, 2024"
    },
    {
      Head:" Career ",
      image:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSW4xaQnaQyVmfjf5Jn3bNBRlNzFmWylc4cv3yDtb0R8M4y5H87",
      titile:"Automation testing Course with Java",
      author:"Sharma",
      datas:"26 Mar, 2024"
    },



  ]

  return (
    <>
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<All data={data}/>} />
      <Route path='/Fullstack' element={<Fullstack data={data} />} />
      <Route path='/Datascience' element={<Datascience data={data} />} />
      <Route path='/Cyber' element={<Cyber data={data}/>} />
      <Route path='/Career' element={<Career data={data} />} />
      <Route path='*' element={<Erro/>} />
    </Routes>
    </BrowserRouter>

    
     
    </>
  )
}

export default App
