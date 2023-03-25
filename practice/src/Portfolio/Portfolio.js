import React from 'react'
import Button from '../Common/Button'

function Portfolio() {

    const navItems = [
        {
            name: 'Home',
            link: '',
            id: 1
        },
        {
            name: 'Projects',
            link: '',
            id:2,
        },
        {
            name: 'Resume',
            link: '',
            id: 3,
        },
    ]
  return (
    <div className='container mx-auto bg-gray-900 px-10 pt-8'>
      <div className='navBar font-[Roboto] text-white flex flex-row justify-between items-center'>
        <div>
            <div className='text-[38px] font-bold'>Portfolio</div>
        </div>
        <div className = "flex flex-row gap-[52px]">
           {
            navItems.map((element,idx) => (
              <div key = {element.id} className = "hover:text-[#0872BF] cursor-pointer font-medium">{element.name}</div>
            ))
           } 
            
        </div>
      </div>

      <div className='flex flex-row justify-between'>
           <div>
            <div>Hello,<span>I'm</span> </div>
            <div>Imtiaz Ahmed</div>
            <div>Front-End Developer</div>
            <div>I am committed to finding innovative solutions and continuously experimenting to help my clients achieve their goals.</div>
            <Button btnText="Let's Talk" className=""/>
            <div>Check out my 
            <div>
              
            </div>
            </div>
           </div>
           
            
           <div></div> 
      </div>
    </div>
  )
}

export default Portfolio
