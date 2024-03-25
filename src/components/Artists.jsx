import { useState, useEffect } from 'react'

import ButtonTab from './ButtonTab'
import { artists } from '../constants/constants';
import ArtistCard from './ArtistCard';

const Artists = () => {

    const [artistsPageNumber, setArtistsPageNumber] = useState(1);
    const [artistsPageSize, setArtistsPageSize] = useState(getPageSizeByScreenWidth(window.innerWidth));
    // const [artists, setArtists] = useState(artistConst);
    const [artistsTotalPages, setArtistsTotalPages] = useState(getTotalPages());

    const [tabs, setTabs] = useState([
        {
            Text: 'Popular',
            IsActive: true
        },
        {
            Text: 'Following',
            IsActive: false
        }
    ])

    useEffect(() => {
        const handleResize = () => setArtistsPageSize(getPageSizeByScreenWidth(window.innerWidth));
        window.addEventListener('resize', handleResize);

        // Cleanup function to remove event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, [])

    useEffect(() => {
        setArtistsTotalPages(getTotalPages());
    }, [artistsPageSize])

    function getPageSizeByScreenWidth(screenSize){
        if(screenSize > 1700)
            return 5;
        else if(screenSize > 1440)
            return 4;
        else if(screenSize > 960)
            return 3;
        else if(screenSize > 740)
            return 2;
        else
            return 1;
    }

    function paginate(data, currentPage, pageSize) {
        // Handle invalid page numbers (less than 1)
        if (currentPage < 1) {
          throw new Error('Current page must be a positive number');
        }
      
        // Calculate the skip index based on page number and page size
        const skip = (currentPage - 1) * pageSize;
      
        // Use slice to extract the desired page of data
        const paginatedData = data.slice(skip, skip + pageSize);
      
        return paginatedData;
    }

    function getTotalPages(){
        return Array.from({ length: Math.ceil(artists.length / artistsPageSize) }, (_, i) => i + 1);
    }

    function onFollowToggle(artistIndex){
        artists[artistIndex].isFollowed = !artists[artistIndex].isFollowed;
    }

    return (
        <section className='mt-9 mb-5 w-full flex justify-center'>
            <div className='w-[90%]'>
                <h1 className='font-sans font-semibold ss:text-[50px] text-[25px] ss:leading-[100.8px] leading-[75px] text-gradient text-center'>Top List Artist</h1>
                
                <div className='w-full flex justify-center items-center'>
                    <ButtonTab buttons={tabs} styles={'bg-dimBlue rounded py-3 px-4 lg:w-[20%] xl:w-[15%] md:w-[35%] sm:w-[50%] w-full'} />
                </div>
                
                <div className='mt-9 flex flex-row items-center'>
                    {paginate(artists, artistsPageNumber, artistsPageSize).map((artist, index) => (
                        <div key={artist.id} className='flex-1 w-full flex justify-center'>
                            <ArtistCard artist={artist} onFollowToggle={onFollowToggle(index)} />
                        </div>
                    ))}
                </div>

                <div className='mt-9 flex flex-row items-center'>
                    <div className='flex-1 w-full flex justify-center'>
                        {
                            artistsTotalPages
                                .map((page, index) => (
                                    <div 
                                        key={index} 
                                        onClick={() => setArtistsPageNumber(page)}
                                        className=  {`rounded-full h-[10px] cursor-pointer 
                                                      ${index === (artistsTotalPages.length - 1) ? 'mr-0' : 'mr-2'}
                                                      ${artistsPageNumber === page ? 'w-[20px] bg-secondary' : 'w-[10px] bg-dimWhite'}`
                                                    }
                                    >
                                    </div>
                                ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Artists
