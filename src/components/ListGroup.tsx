import { useState } from 'react';

interface Props {
    heading: string;
    items: String[];
    onSelectItem: (item: String) => void;
}

function ListGroup({ heading, items, onSelectItem }: Props) {
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <>
            <h1>{heading}</h1>
            {items.length === 0 && <p>No item found</p>}
            <ul className='list-group'>
                {items.map((item, index) => (
                    <li
                        className={
                            selectedIndex === index
                                ? 'list-group-item active'
                                : 'list-group-item'
                        }
                        key={index}
                        onClick={() => {
                            setSelectedIndex(index);
                            onSelectItem(item);
                        }}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;
