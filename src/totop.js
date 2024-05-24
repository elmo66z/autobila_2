import './top.css';
import { useEffect } from 'react';

const Top = () => {


    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }, []);
  
    return (
        <>
            <button className='top-btn'
                onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                }}>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-corner-right-up" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M6 18h6a3 3 0 0 0 3 -3v-10l-4 4m8 0l-4 -4"></path>
                </svg>
            </button>
        </>
    )
}
export default Top ;