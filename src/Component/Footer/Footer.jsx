import React from 'react'
import 'boxicons/css/boxicons.min.css';


const Footer = () => {
  return (
    <div>
       <footer>
        <p>Rahmon Ige</p>
        <p>For more info - please subscribe to my channels:</p>
        <div class="social">
            <a href="#"><i className='bx bxl-github'></i></a>
            <a href=""><i className='bx bxl-whatsapp text-2xl text-green-500'></i></a>
            <a href=""><i className='bx bxl-linkedin-square text-2xl text-blue-600'></i></a>
           <a href=""> <i className='bx bxl-tiktok text-2xl text-black'></i></a>
        </div>
        <p class="end">CopyRight By Rahmon Ige</p>
    </footer>

    </div>
  )
}

export default Footer
