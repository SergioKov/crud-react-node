const FetchData = () => {
    fetchData();
    return ( 
        <>
            <h1>FETCH DATA</h1>        
        </>
    );
    
};

const fetchData = async () => {
    const response = await fetch('http://localhost:3000',{
        method: 'POST'

    });
    const data = await response.json();
    console.log(data);
}

export default FetchData;