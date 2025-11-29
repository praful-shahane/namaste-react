const Contact=()=>{
    return(
        <div>
            <h1 className="font-bold text-3xl" >Contact Us Page</h1>
            <p>This is Namaste React Live Course 2023</p>
            <p>Contact No :: 1234567890 </p>
            <p>Our Email is :: pr1234@gamil.com</p>
            <form>
                <input type="text" className=" border border-black p-2 m-2" placeholder="name" />
                <input type="text" className=" border border-black p-2 m-2" placeholder="message" />
                <button  className=" border border-black p-2 m-2 bg-gray-100 rounded-lg">Submit</button>
            </form>
        </div>
    )
}

export default Contact;