import Image from "next/image";
import styles from '../Styles/Home.module.css'
import 'boxicons/css/boxicons.min.css';



export default function Home() {
  return (
   <div className='hero'>
   
    <div className='main'> <div className='content'>
            <h4>Hello, my name is </h4>
            <h1>Rahmon <span>Ige</span> </h1>
            <h3>I'am a web Developer.</h3>
            <div className='newsletter'>
                <form action="">
                    <input type="email" name="email" id="mail" placeholder="Enter Your Email"/>
                    <input type="submit" name="submit" value="Let's Start"/>
                </form>
            </div>
        </div>
    </div>
    </div>
  
  );
}
