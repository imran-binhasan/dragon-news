import logo from '../assets/logo.png'
import moment from 'moment';


const Header = () => {

    return (
        <header className='flex flex-col justify-center items-center gap-2 py-3'>
            <div>
                <img className='w-[340px] mx-auto' src={logo}/>
            </div>
            <h4 className='text-gray-500 text-lg font-medium'>Journalism Without Fear or Favour</h4>
            <h3 className='font-medium text-gray-600 text-lg'>{moment().format('dddd, ')}<span className='text-gray-500'>{moment().format('MMMM MM, YYYY')}</span></h3>
        </header>
    );
};

export default Header;