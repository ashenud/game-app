import { useState } from 'react';
import { IoHeartSharp } from 'react-icons/io5';
import { PiHeartStraightDuotone } from 'react-icons/pi';

interface Props {
    onClick: () => void;
}

function Like({ onClick }: Props) {
    const [liked, setLiked] = useState(false);

    const toggle = () => {
        onClick;
        setLiked(!liked);
    };

    return liked === true ? (
        <IoHeartSharp color='pink' onClick={toggle}></IoHeartSharp>
    ) : (
        <PiHeartStraightDuotone
            color='pink'
            onClick={toggle}
        ></PiHeartStraightDuotone>
    );
}

export default Like;
