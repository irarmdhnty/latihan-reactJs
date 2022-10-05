import icon4 from '../assets/amico4.svg'

const Collaborative = () => {
    return( 
        <div className='flex items-center mb-32'>
            <div className='p-10 ml-16 w-[500px]'>
                <p className='font-bold'>Optimisation for</p>
                <p className='font-bold text-4xl mt-3 mb-5'>Collaborative</p>
                <p className='text-lg'>Few would argue that, despite the advancements of feminism over the past three decades, women still face a double standard when it comes to their behavior. </p>
                <p className='font-bold mb-2 mt-5'>Accessory makers</p>
                <p className='text-lg'>While most people enjoy casino gambling, sports betting, lottery and bingo playing for the fun</p>
                <p className='font-bold mb-2 mt-5'>Alterationists</p>
                <p>If you are looking for a new way to promote your business that won't cost you more money, </p>
            </div>
            <div className='px-20'>
                <img src={icon4} width={500} alt="" />
            </div>
        </div>
    )
}

export default Collaborative