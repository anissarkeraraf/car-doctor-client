import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-1/2 relative'>
                    <img className='w-2/3 rounded-lg h-1/2' src={person} alt="" />
                    <img className='absolute w-1/2 left-44 top-1/2 border-8 border-white rounded-lg' src={parts} alt="" />
                </div>
                <div className='w-1/2'>
                    <h2 className='text-orange-600 font-bold'>About Us</h2>
                    <h1 className="text-4xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-3">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className="py-3">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>
                    <button className="btn btn-secondary">GET MORE INFO</button>
                </div>
            </div>
        </div>
    );
};

export default About;