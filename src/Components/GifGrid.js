
import { GifGridItem } from './GifGridItem';
import '../index.css';
import { useFetchGifs } from '../Hooks/useFetchGifs';


export const GifGrid = ({ category }) => {

    const {data:gifes, loading } = useFetchGifs( category );
  

  

    return (
        <>
            <h3>{ category }</h3>
            { 
                loading? <p>Cargando...</p>:null
            }
            <div className='cards-grid'>
                    <GifGridItem gif={ gifes } />
            </div>
            <div className='divider'></div>
        </>
    )
}