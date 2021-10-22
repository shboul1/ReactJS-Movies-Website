import React,{useState, useEffect} from 'react'
import tmdbApi from '../../api/tmdbAPI'
import apiConfig from '../../api/APIConfig';

const Cast = props => {
    const [casts, setCasts] = useState(null);
    useEffect(() => {
        const getCasts = async () => {
            const response = await tmdbApi.credits(props.category, props.id)
            setCasts(response.cast.slice(0,5))
            console.log(response.cast)
        }
        getCasts();

    }, [props.id])


    return (
        <>
            {casts && (
                <>
                {casts.map((cast, i) => (
                    <div className='cast' key={i}>
                        <img src={cast.profile_path ? apiConfig.w500Image(cast.profile_path): "https://st3.depositphotos.com/4111759/13425/v/600/depositphotos_134255532-stock-illustration-profile-placeholder-male-default-profile.jpg"} alt="" />
                        <h3>{cast.name}</h3>
                    </div>
                ))}
                </>
            )
            }
        </>
    )
}

export default Cast
