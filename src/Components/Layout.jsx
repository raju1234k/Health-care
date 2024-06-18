import { useState } from "react"
import { Link,useLocation } from "react-router-dom"

const Layout = ({children})=>{
    const[spacing,setspacing]=useState(300)
    const location=useLocation()
    const menus = [
      {
         icon:<i className="ri-dashboard-2-line mr-4 text-lg"></i>,
         label:'Dashboard',
         link: '/Dashboard'
      },
      {
         icon:<i className="ri-tv-line mr-4 text-lg"></i>,
         label:'Device',
          link: '/Device'
      },
      {
         icon:<i className="ri-nurse-fill mr-4 text-lg"></i>,
         label:'Doctor',
          link: '/Doctor'
      },
      {
         icon:<i className="ri-hotel-bed-line mr-4 text-lg"></i>,
         label:'Patient',
         link: '/Patient'
      },
      {
         icon:<i className="ri-calendar-2-line mr-4 text-lg"></i>,
         label:'Doctor Schedule',
         link: '/Doctor Schedule'
      },
      {
         icon:<i className="ri-calendar-check-fill mr-4 text-lg"></i>,
         label:'Patient Appointment',
         link: '/Patient Appointment'
      },
      {
         icon:<i className="ri-folder-shield-2-fill mr-4 text-lg"></i>,
         label:'Patient Case Studies',
         link: '/Patient Case Studies'
      },
      {
         icon:<i className="ri-folder-shield-2-fill mr-4 text-lg"></i>,
         label:'Prescription',
         link: '/Prescription'
      }
    ]
    return (
       <div className="bg-[#E9E7EF] min-h-screen">
          <aside className="bg-white  h-full fixed top-0 left-0 overflow-hidden"
          style={{
            width:spacing,
            transition: '1s'
          }}>
           <div className=" p-8" >
                  <a href="">
                   <h1 className="text-2xl font-bold ">Health - Care</h1>
                   <hr/></a>                  
                  <div  className="flex items-center   gap-1" >
                    <img src="/images/men.jpg"  className=" rounded-full ml-1 m-5 w-10 h-8"/>
                    {
                     spacing=== 300 &&
                     <h1 className="text-lg font-semibold bg-red-300 w-80 ml-1 text-center"> Super Admin</h1>
                    }
                    
                    </div>
                    <hr />
           </div>
           <div className="p-4 flex flex-col font-bold gap-2">
            {
               menus.map((item, index)=>(
                  <Link to = {item.link} key={index} className="flex items-center  px-4 py-2 rounded  " style={{
                     background:(location.pathname===item.link? '#7c3aed':null),
                     color: (location.pathname===item.link? 'white':null)
                  }}>
                   {item.icon}
                   <label className="text-md">{item.label}</label>
                  </Link>

               ))
            }
            
           </div>
          </aside>
          <section
          style={{
            marginLeft:spacing,
             transition: '1s'
          }}>
            <nav className="bg-white p-6 shadow flex justify-between">
               <div className="space-x-6">

               
                    <button className="w-10 h-10 rounded-full hover:bg-gray-100" onClick={()=>setspacing(spacing===300 ?65:300)} >
                     <i className="ri-menu-2-line text-xl"></i>
                     </button>
                     
                     <Link to="http://localhost:5176/Device">Go to Website</Link>  
               </div>          
                <div className= " flex gap-6">
                  <button >
                     <i className="ri-message-3-line mr-2"></i>
                     Chat With Us
                  </button>
                  <button >
                  <i class="ri-hospital-fill mr-2"></i>
                     HealthEase
                  </button>
                  <button className="flex items-center gap-2">
                  <img src="/images/men.jpg" className="w-5 h-5 rounded-full" />
                    Mr. Patient
                  </button>
                  <button className="flex items-center gap-2">
                  <img src="/images/body.jpg" className="w-5 h-5 rounded-full" />
                    Lng.
                  </button>
                </div>
            </nav>
           <div className="p-6">
           {children}
          
           </div>
            <footer className="bg-white p-6 rounded-md m-6 mt-80">
               <div className="flex items-center w-fit mx-auto text-gray-600">
               <i class="ri-copyright-line"></i>
               <p> Health-Care | All Right Reserved  </p>
               </div>

            </footer>
          </section>
       </div>
    )
}

export default Layout