
const announceItems = [
    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
];

const AnnounceList = () => {
    return (
        <>
            {announceItems.map((text, idx) => (
                <li
                    key={idx}
                    style={{
                        marginBottom: '10px',
                        listStyleType: 'none',
                        padding: '0 20px 0 0',
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'flex-start'
                    }}
                >
                    <span
                        style={{
                            display: 'inline-block',
                            width: '10px',
                            height: '10px',
                            backgroundColor: '#345375',
                            borderRadius: '50%',
                            marginRight: '10px',
                            marginTop: '6px',
                            flexShrink: 0
                        }}
                    ></span>
                    <span style={{ display: 'inline-block', color: '#797979' }}>{text}</span>
                </li>
            ))}
        </>
    );
}

export default AnnounceList;