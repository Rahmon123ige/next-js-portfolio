import React from 'react'

const page = () => {
  return (
    <div class='service'>
        <div class="title">
            <h2>My Projects</h2>
        </div>
       <div class="box">
            <div class="card">
            <i className='bx bxl-steam text-3xl text-gray-700'></i>
                <h5>Steam App</h5>
                <div class="pra">
                    <p>Every website should be built with two primary goals: Firstly, it needs to work across all devices. Secondly, it needs to be fast as possible.</p>
                    <p className='center'>
                        <a href="#" class="button">Read More</a>
                    </p>
                </div>
            </div>
            <div class="card">
            <i className='bx bxl-flutter text-3xl text-blue-500'></i>
                <h5>Flutter App</h5>
                <div class="pra">
                    <p>Every website should be built with two primary goals: Firstly, it needs to work across all devices. Secondly, it needs to be fast as possible.</p>
                    <p className='center'>
                        <a href="#" class="button">Read More</a>
                    </p>
                </div>
            </div>
            <div class="card">
            <i className='bx bxl-sketch text-3xl text-yellow-500'></i>
                <h5>Sketch</h5>
                <div className="pra">
                    <p>Every website should be built with two primary goals: Firstly, it needs to work across all devices. Secondly, it needs to be fast as possible.</p>
                    <p className='center'>
                        <a href="#" className="button">Read More</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page
