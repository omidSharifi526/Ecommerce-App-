import React,{useState,useEffect} from 'react';



const Login = () => {

    const[email,setEmail]=useState('');
    const[password,setPassword]=useState(0);

    const handleEmailChange=(e)=>{
       setEmail(e.target.value)
       console.log(email);

    }
    const handlePassChange=(e)=>{
        setPassword(e.target.value);
        console.log(password);
    }



    return (
        <div className='container'>
            <div className='row'>
                <div className='col-10 col-md-7 mx-auto  boreder' >
                    <div className="" style={{height:'250px'}}>
                        <div className='card-header    w-100'>
                            <h1 className='text-center bg-primary p-3 rounded shadow'>Login</h1>
                            <div className='card-body'>
                                <div className='form-gorup'>
                                    <div className=' border m-3'>
                                    <label className='d-block mb-2 rounded' htmlFor="email">Email</label>
                                    <input autoComplete='off' onChange={(e)=>handleEmailChange(e)} type="text" placeholder='please Enter Email' name="email" id="" />
                                    </div>
                                    <div className='border m-3 mb-1  '>
                                    <label className='d-block mb-2 rounded ' htmlFor="pass">Password</label>
                                    <input onChange={(e)=>handlePassChange(e)} type="password" name="pass" id="" />
                                    </div>

                                   
                                </div>

                            </div>


                        </div>
                    </div>
                    
                </div>
            </div>
            
        </div>
    )
}

export default Login
