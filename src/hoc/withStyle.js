

const withStyle = OriginalComponent => (props)=>{

    let styles = {
        border: '1px solid #e0e0e0',
        backgroundColor: 'white',
        borderRadius: '0.7rem',
        padding: '1em 0.8em',
        marginBottom: '2em',
        display: 'flex',
        flexDirection: 'column',
        
    };

    return <OriginalComponent {...props} style={styles} />
    
};

export default withStyle;

