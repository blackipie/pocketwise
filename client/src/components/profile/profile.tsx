import {
  Button,
} from "@mui/material";
import { IconEdit, IconUser } from '@tabler/icons-react';
import Link from 'next/link';
import Image from "next/image";
function Profile() {
  return (
      <>
       
          <div className="p-8  shadow mt-16 rounded" style={{background:" linear-gradient(280deg, rgba(237,240,255,0.3652193641128326) 0%, rgba(241,240,255,1) 50%, rgba(189,194,250,0.3344070391828606) 100%) "}}>
              <div className="grid  grid-cols-1 md:grid-cols-3">
    
                  <div className="relative ">
                      <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                          <Image src={"/images/profile/shafin.jpg"} width={100}
                     height={100} priority className="w-full rounded-full ring-1 ring-indigo-500"
                              alt="" />
                 </div>  
                </div>   
                  <div className=" space-x-1 text-center flex justify-center mt-32 md:mt-2  md:justify-center  ">
                     
                      <Button 
                      sx={{ 
                          background: "linear-gradient(90deg, rgba(88,78,255,0.9652193641128326) 0%, rgba(108,91,255,0.8839868711156338) 48%, rgba(96,110,255,1) 100%)",
                               marginTop:2, 
                         cursor:'default',
                              color: 'white',
                          textTransform:"lowercase"
                   }}
            > <IconUser/>shafin</Button> 
          
                
            <Link href='/profile/update-profile' className="text-center mt-4">
                  <Button 
                      sx={{ 
                          background: "linear-gradient(90deg, rgba(88,78,255,0.9652193641128326) 0%, rgba(108,91,255,0.8839868711156338) 48%, rgba(96,110,255,1) 100%)",
                         
                         
                          color: 'white'
                   }}
            > <IconEdit />Update Profile</Button> </Link>
          
        
            
          
                </div> 
              </div>
              <div className="mt-10 text-center border-b pb-12">
                  <h1 className="text-xl md:text-4xl font-medium text-gray-700" style={{fontFamily:"Montserrat"}}>
                      Masud Shafin Ahmed
                  </h1>  
                    
                  
                  <p className="font-light text-gray-600 m-2">Guwahati, Assam</p>
                  <div className="bg-white m-2 rounded-md p-2 inline-block ">
                      <code className="mt-8 text-gray-800"
                  >masud.ahmed.adtu@gmail.com </code>
                  </div>
                  
                  <div className="bg-white m-2 rounded-md p-2 inline-block ">
                      <code className="mt-8 text-gray-800"
                  >6001932077 </code>
                  </div>
                  
               </div> 
               <div className="mt-8 flex flex-col justify-center">  
                  <p className="text-gray-600 text-center font-light lg:px-16">
                   I’m a B.tech CSE 6th sem undergrad specializing in building and designing exceptional digital experiences.
                      </p>  
            
                 
                  </div>
              </div>
     
     

      </>
  )
}

export default Profile