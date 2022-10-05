import icon2 from '../assets/amico-2.svg'

const Management = () => {
    return (
        <div className='flex items-center mb-[31px]'>
            <div className='p-10 mr-10 px-24 m-5 '>
                <p className='font-bold'>Effortless Validation for</p>
                <p className='font-bold text-4xl mt-3 mb-5'>Management</p>
                <p className='text-lg'>The Myspace page defines the individual, his or her characteristics, traits, personal choices and the overall personality of the person. </p>
                <p className='font-bold mb-2 mt-5'>Accessory makers</p>
                <p className='text-lg'>While most people enjoy casino gambling, sports betting, lottery and bingo playing for the fun</p>
                <p className='font-bold mb-2 mt-5'>Alterationists</p>
                <p>If you are looking for a new way to promote your business that won’t cost you more money, </p>
            </div>
            <div className='px-20'>
                <img src={icon2} width={800} alt="" />
            </div>
        </div>
    )
}

export default Management