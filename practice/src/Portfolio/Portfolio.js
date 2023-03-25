import React from 'react'

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
    </div>
  )
}

export default Portfolio
