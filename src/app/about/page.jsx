import Image from 'next/image';

const Page = () => {
  return (
    <div className='about'>
      <Image 
        src="/me..JPG" 
        alt="My Image" 
        width={300} 
        height={300} 
      />
      <div className="about-text">
        <h2>About Me</h2>
        <h5>Developer <span>& Designer</span></h5>
        <p>
          I am a front-end web developer. I can provide clean code and pixel perfect design.
          I also make the website more & more interactive with web animations.
          A responsive design makes your website accessible to all users, regardless of their device.
        </p>
       <a href="https:wa.me/09160686377"> <button type="button">Let's Talk</button></a>
      </div>
    </div>
  );
};

export default Page;
