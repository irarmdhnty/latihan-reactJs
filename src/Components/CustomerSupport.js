import icon3 from '../assets/amico3.svg'
import check from '../assets/check1.svg'
import check1 from '../assets/check2.svg'
import check2 from '../assets/check-3.svg'

const CustomerSupport = () => {
    return (
        <div className='flex mt-16 items-center mb-16'>
            <div className='ml-16 '>
                <img src={icon3} width={650} />
            </div>
            <div className='ml-4 w-[450px] p-10'>
                <p className='text-lg font-bold'>Easier decision making for</p>
                <p className='font-bold text-4xl mt-3 mb-5'>Customer Support</p>
                <p className='text-lg'>The Myspace page defines the individual, his or her characteristics, traits, personal choices and the overall personality of the person. </p>
                <div className='mt-10'>
                    <div className='flex mt-5 items-center'>
                        <img src={check} widht="35" className='mr-3' alt="" />
                        <span className="col-10">Never worry about overspanaying for your energy again. </span>
                    </div>
                    <div className='flex mt-5 items-center'>
                        <img src={check1} widht="35" className='mr-3' alt="" />
                        <span className="col-10">We will only switch you to energy companies that we trust and will treat you right. </span>
                    </div>
                    <div className='flex mt-5 items-center'>
                        <img src={check2} widht="35" className='mr-3' alt="" />
                        <span className="col-10">We track the markets daily and know where the savings are. </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CustomerSupport