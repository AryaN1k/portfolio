
import { RiLinkedinBoxLine, RiMailCheckFill, RiPhoneFill } from 'react-icons/ri'

const Footer = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
        <h1 className="my-10 text-center text-4xl">Get In Touch.</h1>
        <div className="text-center tracking-tighter flex items-center justify-center text-3xl">
            <a href="mailto:aryavats0728@example.com" className="text-xl text-slate-400 hover:text-purple-600"><RiMailCheckFill className='text-4xl'/></a>
            <span className="mx-3">|</span>
            <a href="tel:8923323031" className="text-xl text-slate-400 hover:text-purple-600"><RiPhoneFill className='text-4xl'/></a>
            <span className="mx-3">|</span>
            <a href="https://www.linkedin.com/in/aryan-sharma-46449b305/" className=' text-slate-400 hover:text-purple-600'><RiLinkedinBoxLine className='text-4xl'/></a>
            
        </div>
    </div>
  )
}

export default Footer