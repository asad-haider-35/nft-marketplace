import React from 'react'
import Button from './Button';

const ArtistCard = ({ artist }) => {
    
    function getShortNumber(number) {
        // Handle invalid input (non-numeric)
        if (isNaN(number)) {
            throw new Error('Input must be a number');
        }

        if(number < 1000){
            return number;
        }

        let divisors = [ {value: 1000, text: 'K'}, {value: 1000000, text: 'M'}, {value: 1000000000, text: 'B'} ];

        for(let i = 0; i < divisors.length; i++){
            let dividedNumber = number / divisors[i].value;
            if(dividedNumber < 1000){
                return dividedNumber + divisors[i].text;
            }
        }

    }

    return (
        <div className='h-full bg-dimBlue rounded-[20px] pb-5'>
            <div className='w-full h-[40%]'>
                <img src={artist.coverPhoto} alt='artist' />
            </div>
            <div className='w-full grid justify-items-center'>
                <img src={artist.profilePhoto} alt='artist' className='w-[70px] h-[70px] my-2' />
                <p className='text-dimWhite text-[20px] my-2'>{artist.name}</p>
                <p className='text-secondary text-[18px] my-2'><span className='font-semibold'>{getShortNumber(artist.followersCount) + ' '}</span>Followers</p>
                <Button text={artist.isFollowed ? 'Followed' : 'Follow'} styles={artist.isFollowed ? 'inverted text-secondary w-[60%] my-2 rounded-[8px] transform -skew-x-12' : 'gradient text-white w-[60%] my-2 rounded-[8px] transform -skew-x-12'} textStyles={' transform skew-x-12'} />
            </div>
        </div>
    )
}

export default ArtistCard
