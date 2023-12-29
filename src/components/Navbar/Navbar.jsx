import './App.css'
function Navbar() {
    return (
        <>
            <div className='w-100 bg-dark d-flex align-items-center p-2'>
                <div style={{
                    display: 'flex', justifyContent: "space-around", alignItems: 'center', width: '100%'
                }}>
                    < div > <h1 className='text-white'>Logo</h1></div>
                    <div >
                        <button className='btn btn-outline-success px-2 '>Signup</button>
                    </div>

                </div >
            </div >
        </>
    )
};

export default Navbar   