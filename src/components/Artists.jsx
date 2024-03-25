import { useState, useEffect } from 'react'

import ButtonTab from './ButtonTab'
import ArtistCard from './ArtistCard';
import Button from './Button';
import { artists } from '../constants/constants';

const Artists = () => {

    const [artistsPageNumber, setArtistsPageNumber] = useState(1);
    const [artistsPageSize, setArtistsPageSize] = useState(getPageSizeByScreenWidth(window.innerWidth));
    const [artistsTotalPages, setArtistsTotalPages] = useState(getTotalPages());
    const [showFollowingOnly, setShowFollowingOnly] = useState(false)

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

    const [active, setActive] = useState(tabs.filter(x => x.IsActive === true)[0].Text);

    useEffect(() => {
        const handleResize = () => setArtistsPageSize(getPageSizeByScreenWidth(window.innerWidth));
        window.addEventListener('resize', handleResize);

        // Cleanup function to remove event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, [])

    useEffect(() => {
        setArtistsTotalPages(getTotalPages());
    }, [artistsPageSize])

    useEffect(() => {
        setShowFollowingOnly((active === 'Following'));
    }, [active])

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

    function paginate(data, currentPage, pageSize, showFollowingOnly) {
        // Handle invalid page numbers (less than 1)
        if (currentPage < 1) {
          throw new Error('Current page must be a positive number');
        }
      
        // Calculate the skip index based on page number and page size
        const skip = (currentPage - 1) * pageSize;
      
        if(showFollowingOnly){
            // Use slice to extract the desired page of data
            const paginatedData = data.filter(x => x.isFollowed === true).slice(skip, skip + pageSize);
            return paginatedData;
        }

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
                <div className="w-full flex items-center justify-center">
                    <h1 className='font-sans font-semibold ss:text-[50px] text-[25px] ss:leading-[100.8px] leading-[75px] text-gradient text-center'>Top List Artist</h1>
                </div>

                <div className='w-full flex justify-center items-center'>
                    <ButtonTab styles={'bg-dimBlue rounded py-3 px-4 lg:w-[20%] xl:w-[15%] md:w-[35%] sm:w-[50%] w-full'}>
                        <ul className='list-none justify-around items-center flex-1 flex'>
                            {tabs.map((button, index) => (
                                <li key={index}>
                                    {button.Text === active ? 
                                        <Button text={button.Text} styles={'gradient text-white'} textStyles={'transform skew-x-12'} onClick={() => setActive(button.Text)} /> : 
                                        <Button text={button.Text} styles={'bg-transparent text-dimWhite'} textStyles={'transform skew-x-12'} onClick={() => setActive(button.Text)} />}
                                </li>
                            ))}
                        </ul>
                    </ButtonTab>
                </div>
                
                <div className='mt-9 flex flex-row items-center justify-center gap-10'>
                    {paginate(artists, artistsPageNumber, artistsPageSize).map((artist, index) => (
                        <ArtistCard key={artist.id} artist={artist} onFollowToggle={onFollowToggle(index)} />
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
