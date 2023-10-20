

const HappyMeet = () => {
    return (
        <div className="text-center max-h-60 rounded-lg text-white" style={{ backgroundImage: 'url(https://i.ibb.co/n73qwkh/low-poly-grid-haikei.png)' }}>
            <h3 className='text-5xl pt-10 pb-5'>We are happy to meet you!</h3>
            <p className="pb-5">
                Explore Filmic: Innovative features, exclusive content, and cinematic enhancements <br /> for an immersive cinema experience.</p>
            <input className="w-28  transition duration-500 ease-in-out h-10 rounded-3xl border-white border-2 bg-transparent mb-10 hover:bg-white hover:text-black" type="submit" value="Send a mail" />
        </div>
    );
};

export default HappyMeet;