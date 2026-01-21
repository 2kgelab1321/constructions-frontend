import Header from '../common/Header';
import Footer from '../common/Footer';
import Icon1 from '../../assets/images/icon-1.svg';
import Icon2 from '../../assets/images/icon-2.svg';
import Icon3 from '../../assets/images/icon-3.svg'; 
import About from '../common/About';
import LatestServices from '../common/LatestServices';
import LatestProjects from '../common/LatestProjects';
import LatestArticles from '../common/LatestArticles';
import ShowTestimonial from '../common/ShowTestimonial';

const Home = () => {
    

  return (
    <>
        <Header/>

        <main>
            {/* Hero Section */}
            <section className='section-1'>
                <div className='hero d-flex align-items-center'>
                    <div className='container-fluid'>
                        <div className='text-center'>
                            <span>Welcome Amazing Constructions</span>
                            <h1>Crafting dreams with <br/>precision and excellence.</h1>
                            <p>We excel at transforming visions into reality through outstanding craftsmanship and precise <br/> attention to detail. With years of experience and a edication to quality.</p>
                            <div className='mt-4'>
                                <a href='/contact' className='btn btn-primary large'>Contact Now</a>
                                <a href='/Projects' className='btn btn-secondary ms-2 large'>View Projects</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Us Section */}
            <About/>
            {/* Our Services */}

            <LatestServices/>

            {/* Why Choose Us */}

            <section className='section-4 py-4'>
                <div className='container py-5'>
                    <div className='section-header text-center'>
                        <span>Why Choose Us</span>
                        <h2>Discover our wide variety of projects.</h2>
                        <p>Create in close partnership with our clients and collaborators, this approach merges industry expertise,<br/>
                        decades of experience, innovation, and flexibility to consistently deliver excellence.</p>
                    </div>

                    <div className='row pt-4'>
                        <div className='col-md-4'>
                            <div className='card shadow border-0 p-4'>
                                <div className='card-icon'>
                                    <img src={Icon1} alt="" />
                                </div>
                                <div className='card-title mt-3'>
                                    <h3>Cutting-Edge solutions</h3>
                                </div>
                                
                                <p>Small actions create big impacts. It all begins and ends with each employee committing to safer work pratices daily, ensuring they return home safely.</p>
                                
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='card shadow border-0 p-4'>
                                <div className='card-icon'>
                                    <img src={Icon2} alt="" />
                                </div>
                                <div className='card-title mt-3'>
                                    <h3>Cutting-Edge solutions</h3>
                                </div>
                                
                                <p>Small actions create big impacts. It all begins and ends with each employee committing to safer work pratices daily, ensuring they return home safely.</p>
                                
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='card shadow border-0 p-4'>
                                <div className='card-icon'>
                                    <img src={Icon3} alt="" />
                                </div>
                                <div className='card-title mt-3'>
                                    <h3>Cutting-Edge solutions</h3>
                                </div>
                                
                                <p>Small actions create big impacts. It all begins and ends with each employee committing to safer work pratices daily, ensuring they return home safely.</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Projects */}
            <LatestProjects/>

            {/* Testimonials */}
            <ShowTestimonial/>

            <LatestArticles/>

        </main>

        <Footer/>
    </>
  )
}

export default Home