import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './style.css';

function HomePage() {
  return (
    <>
      <header>
        <nav className='navbar'>
          <div className='navbar-logo'>
            <img src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62d857bb593d0d6f444528aa_full_logo-p-1080.png" alt="" />
          </div>
          <ul className='navbar-menu'>
            <li><a href="#">Products</a></li>
            <li><a href="#">Solutions</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Resources</a></li>
            <li><a href="#">Support</a></li>
            <li>
              <div className='navbar-buttons'>
                <button className="navbar-button1">Sign In</button>
                <button className="navbar-button2">Get Started</button>
              </div>
            </li>
          </ul>
        </nav>
      </header>
  

      <div className='Upper-body'>
        <div className='content'>
          <div className='image-container'>
            <img src='https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80' alt='' className='img1'></img>
          </div>
          <div className='text-container'>
            <h1 className='h1'>Best way to grow your</h1>
            <h1 className='h1'>local business</h1>
            <br />
            <h3 className='h3'>Artificial Intelligence powered easy-to-use tools to get more customers & give them</h3>
            <h3 className='h3'>a better experience</h3>
            <br />
            <div className='Submit'>
              <input type='text' className='submit1' placeholder='ENTER YOUR MAIL' />
              <button className="body-button1">Get Demo</button>
            </div>
          </div>
        </div>
      </div>

      <div className='middle-body'>
        <h2 className='h2'>Trusted by over 100,000 local brands and local businesses</h2>
        <img src='https://assets.website-files.com/62a83ee090ccdee139c347e5/62b0e6fa4473cb712ba3b454_home-hero-agnostic-l-2x-p-1600.webp' alt='' className='img2'></img>
        <h2 className='h2id2'>Some of our Happy Customers include</h2>
        <div className='ImageContainer2'>
          <img src='https://assets.website-files.com/62a83ee090ccdee139c347e5/62d969cad44fb711e700c0a1_Group%2018530.webp' alt='' className='img3'></img>
          <img src='https://assets.website-files.com/62a83ee090ccdee139c347e5/62d969cae70f01d34820d129_Group%2018531.webp' alt='' className='img4'></img>
          <img src='https://assets.website-files.com/62a83ee090ccdee139c347e5/62d969c99e10c822b37179e8_Group%2018532.webp' alt='' className='img5'></img>
          <img src='https://assets.website-files.com/62a83ee090ccdee139c347e5/62d969ca4e2bcd235bf57982_Group%2018533.webp' alt='' className='img6'></img>
          <img src='https://assets.website-files.com/62a83ee090ccdee139c347e5/62d969ca47165b7b29cd5bfa_Group%2018534.webp' alt='' className='img7'></img>
          <img src='https://assets.website-files.com/62a83ee090ccdee139c347e5/62d969cb054ce48a81f23d47_Group%2018535.webp' alt='' className='img8'></img>
          <img src='https://assets.website-files.com/62a83ee090ccdee139c347e5/62d969caa274fa886bbafd69_Group%2018536.webp' alt='' className='img9'></img>
        </div>
        <br />
        <div className='card-container1'>
          <div className='card1'>
            <img src='https://assets.website-files.com/62a83ee090ccdee139c347e5/62e0341ce2debac5188bfaa5_Mask%20Group%20174.webp' alt='' className='img10'></img>
            <div className='text-container2'>
              <h2>Simon Page</h2>
              <p>Owner, Mamagato Restaurant</p>
              <br />
              <h4>“In 2022 so far we are hitting our best</h4>
              <h4>months in customers & revenue even in an</h4>
              <h4>economic downturn"</h4>
              <br />
              <h1>40%</h1>
              <h3>Average net profit</h3>
              <h3>increase</h3>
              <br />
              <h4 className='products'>Products used:</h4>
              <a href="#" className="product-used">Messaging</a>
              <a href="#" className="product-used">Webchat</a>
              <a href="#" className="product-used">Reviews</a>
              <a href="#" className="product-used">Listings</a>
              <a href="#" className="product-used">Referrals</a>
            </div>
          </div>
          <div className='card2'>
            <img src='https://assets.website-files.com/62a83ee090ccdee139c347e5/62e0341c025451d2b6d54b11_xZ4wg2Xj-2.webp' alt='' className='img10'></img>
            <div className='text-container2'>
              <h2>Daniel Wilson</h2>
              <p>Marketing head, The Air Conditioning Company</p>
              <br />
              <h4>“Our rating improved from 3.3 to 4.6 &</h4>
              <h4>reviews are up 200%, we are getting more</h4>
              <h4>leads from Google"</h4>
              <br />
              <h1>200%</h1>
              <h3>New review</h3>
              <h3>growth</h3>
              <br />
              <h4 className='products'>Products used:</h4>
              <a href="#" className="product-used">Reviews</a>
              <a href="#" className="product-used">Listings</a>
              <a href="#" className="product-used">Messaging</a>
              <a href="#" className="product-used">Webchat</a>
              <a href="#" className="product-used">Referrals</a>
            </div>
          </div>
          <div className='card3'>
            <img src='https://assets.website-files.com/62a83ee090ccdee139c347e5/62ae22ec3263c7de8393966d_photo-1493666438817-866a91353ca9.webp' alt='' className='img10'></img>
            <div className='text-container2'>
              <h2>Debbie Rose</h2>
              <p>Owner, Jiva luxury Spa</p>
              <br />
              <h4>“Effective text & email marketing</h4>
              <h4>campaign on SalesCaptain helped us</h4>
              <h4>make additional $150k in two weeks”</h4>
              <br />
              <h1>150K</h1>
              <h3>Generated with marketing</h3>
              <h3>campaign</h3>
              <br />
              <h4 className='products'>Products used:</h4>
              <a href="#" className="product-used">Marketing</a>
              <a href="#" className="product-used">Webchat</a>
              <a href="#" className="product-used">Review</a>
              <a href="#" className="product-used">Massaging</a>
              <a href="#" className="product-used">Insights</a>
            </div>
          </div>
        </div>

        <br />

        <h1 className='h1_2'>Tools to take your business to next level</h1>

        <br />

        <div className="card-container2">
          <div className="card4">
            <div className="card-body">
              <h5 className="card-title">Attract</h5>
              <p className="card-text">Attract more customers</p>
            </div>
            <br />
            <ul className="list-group list-group-flush">

              <li className="list-group-item d-flex align-items-center">
                <img src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbec00a8aaf428800c75_Group%2018613.svg" alt="" className="mr-3" />
                <div>
                  <h3 className='h3_2'>Reviews</h3>
                  <h5 className='h5_2'>Improve ratings & get chosen more.</h5>
                </div>
              </li>

              <li className="list-group-item d-flex align-items-center">
                <img src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbeb4806cd1c4715ced5_Group%2018614.svg" alt="" className="mr-3" />
                <div>
                  <h3 className='h3_2'>Listings</h3>
                  <h5 className='h5_2'>Improve listings & get seen more.</h5>
                </div>
              </li>

              <li className="list-group-item d-flex align-items-center">
                <img src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbec43bcc550dc49c6e8_Group%2018624.svg" alt="" className="mr-3" />
                <div>
                  <h3 className='h3_2'>Marketing</h3>
                  <h5 className='h5_2'>Reach out to customers on text & email.</h5>
                </div>
              </li>

              <li className="list-group-item d-flex align-items-center">
                <img src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbeb12ef6612375a88c4_Group%2018618.svg" alt="" className="mr-3" />
                <div>
                  <h3 className='h3_2'>SmartPages</h3>
                  <h5 className='h5_2'>Engage more with our AI SEO.</h5>
                </div>
              </li>

            </ul>
          </div>

          <div className="card5">
            <div className="card-body">
              <h5 className="card-title">Engage</h5>
              <p className="card-text">Convert leads to customers</p>
            </div>
            <br />
            <ul className="list-group list-group-flush">

              <li className="list-group-item d-flex align-items-center">
                <img src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbeb8a983469d6918815_Group%2018616.svg" alt="" className="mr-3" />
                <div>
                  <h3 className='h3_2'>WebChat</h3>
                  <h5 className='h5_2'>Convert leads on website chat with our AI.</h5>
                </div>
              </li>

              <li className="list-group-item d-flex align-items-center">
                <img src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbeb7cee6e0fc06b720a_Group%2018617.svg" alt="" className="mr-3" />
                <div>
                  <h3 className='h3_2'>Messaging</h3>
                  <h5 className='h5_2'>Engage with customers across all channels.</h5>
                </div>
              </li>

              <li className="list-group-item d-flex align-items-center">
                <img src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbebaaeb8c7e7cef4b97_Group%2018619.svg" alt="" className="mr-3" />
                <div>
                  <h3 className='h3_2'>Referrals</h3>
                  <h5 className='h5_2'>Let your customers refer you.</h5>
                </div>
              </li>

              <li className="list-group-item d-flex align-items-center">
                <img src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbeb12ef6662a15a88c5_Group%2018615.svg" alt="" className="mr-3" />
                <div>
                  <h3 className='h3_2'>Payments</h3>
                  <h5 className='h5_2'>Modernize your integrated payment tools</h5>
                </div>
              </li>

            </ul>
          </div>

          <div className="card6">
            <div className="card-body">
              <h5 className="card-title">Elevate</h5>
              <p className="card-text">Provide a delightful experience</p>
            </div>
            <br />
            <ul className="list-group list-group-flush">

              <li className="list-group-item d-flex align-items-center">
                <img src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbec5519b27af4eec871_Group%2018623.svg" alt="" className="mr-3" />
                <div>
                  <h3 className='h3_2'>Captain AI</h3>
                  <h5 className='h5_2'>Your AI assistant to drive growth</h5>
                </div>
              </li>

              <li className="list-group-item d-flex align-items-center">
                <img src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbec4d64345353355417_Group%2018621.svg" alt="" className="mr-3" />
                <div>
                  <h3 className='h3_2'>Feedback & survey</h3>
                  <h5 className='h5_2'>Listen to your customers & delight them.</h5>
                </div>
              </li>

              <li className="list-group-item d-flex align-items-center">
                <img src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbecb9ed0fa8b30e3a47_Group%2018620.svg" alt="" className="mr-3" />
                <div>
                  <h3 className='h3_2'>Competition & Insights</h3>
                  <h5 className='h5_2'>Learn about your competitors & insights.</h5>
                </div>
              </li>

              <li className="list-group-item d-flex align-items-center">
                <img src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbec4a3eedd06bd65d1a_Group%2018622.svg" alt="" className="mr-3" />
                <div>
                  <h3 className='h3_2'>Customer Manager</h3>
                  <h5 className='h5_2'>Manage all your customer data & activity.</h5>
                </div>
              </li>

            </ul>
          </div>
        </div>

        <br />
        <h1 className='h1_2'>Make your business stand out with us</h1>
        <br />


        <div className='lower-body'>
          <div className='content'>

            <div className='text-container2'>
              <h1 className='h1'>Get discovered by</h1>
              <h1 className='h1'>more customers</h1>
              <br />
              <h3 className='h3'>Higher reviews & better listings make</h3>
              <h3 className='h3'>you more discoverable to people</h3>
              <h3 className='h3'>organically</h3>
              <div className='get-started-button'>
                <button className='body-button1'>Get Started</button>
              </div>
            </div>
            <div className='image-container2'>
              <img
                src='https://assets.website-files.com/62a83ee090ccdee139c347e5/62cc453f2139195799ff1678_Mask%20Group%20109.webp'
                alt=''
                className='img1'></img>
            </div>
          </div>
          <br />
          <div className='content'>
            <div className='image-container2'>
              <img
                src='https://assets.website-files.com/62a83ee090ccdee139c347e5/62def85e197fa06b03e4005b_Group%2018718.webp'
                alt=''
                className='img1'></img>
            </div>

            <div className='text-container2'>
              <h1 className='h1'>Faster conversion</h1>
              <h1 className='h1'>with our Captain AI</h1>
              <br />
              <h3 className='h3'>Automate web chat, messaging, reviews</h3>
              <h3 className='h3'>& feedbacks with our AI assistant</h3>
              <div className='get-started-button'>
                <button className='body-button1'>Get Started</button>
              </div>
            </div>
          </div>

          <div className='lower-body'>
            <div className='content'>

              <div className='text-container2'>
                <h1 className='h1'>Marketing that</h1>
                <h1 className='h1'>works for you</h1>
                <br />
                <h3 className='h3'>Run highly effective & targeted</h3>
                <h3 className='h3'>campaigns on text & emails and put</h3>
                <h3 className='h3'>your customer data to use</h3>
                <div className='get-started-button'>
                  <button className='body-button1'>Get Started</button>
                </div>
              </div>
              <div className='image-container2'>
                <img
                  src='https://assets.website-files.com/62a83ee090ccdee139c347e5/62dee8fb4ff877b8c4b92833_new111.webp'
                  alt=''
                  className='img1'></img>
              </div>
            </div>

            <div className='content'>
              <div className='image-container2'>
                <img
                  src='https://assets.website-files.com/62a83ee090ccdee139c347e5/62dee8fba79d98b49f7812a5_new222.webp'
                  alt=''
                  className='img1'></img>
              </div>

              <div className='text-container2'>
                <h1 className='h1'>Training & Support</h1>
                <br />
                <h3 className='h3'>Talk to a dedicated relationship manager</h3>
                <h3 className='h3'>to get the help you need. No wait time, a</h3>
                <h3 className='h3'>dedicated line just for you.</h3>
                <div className='get-started-button'>
                  <button className='body-button1'>Get Started</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='content2'>
          <div className='text-container2'>
            <h1 className='h1_3'>Ready to grow?</h1>
            <br />
            <h3 className='h3_3'>See why 100,000+ businesses trust us. Book a personalized demo to see</h3>
            <h3 className='h3_3'>how SalesCaptain provides you the right tools to grow your business.</h3>
            <br />
            <div className='Submit'>
              <input type='text' className='submit2' placeholder='ENTER YOUR MAIL' />
              <button className="body-button2">Get Demo</button>
            </div>
            <div className='imagesection1'>
              <img src='https://assets.website-files.com/62a83ee090ccdee139c347e5/62af532e37289b6270d7aba8_stars.webp' alt='' className='img3' />
              <p className='p1'>500+ Reviews</p>
            </div>
          </div>
          <div className='imagesection2'>
            <img src='https://assets.website-files.com/62a83ee090ccdee139c347e5/62af562b0cd76f4e7026cba9_18-187112_google-transparent-white-logo.webp' alt='' className='img4' />
            <img src='https://assets.website-files.com/62a83ee090ccdee139c347e5/62af5631b8d59acd37236ca0_c-dark.webp' alt='' className='img5' />
            <img src='https://assets.website-files.com/62a83ee090ccdee139c347e5/62af562bb61c17fbd3d37043_6033de5cf82f810004782cb7.webp' alt='' className='img6' />

          </div>
        </div>

        <footer className="footer">
          <div className="footer-section">
            <img src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62d85afd15788d0263af7b58_full_logo_white.webp" alt="footerImage" className="footerlogo" />
          </div>
          <div className="footer-section">
            <h4 className="section-title">Products</h4>
            <ul className="section-content">
              <li>Reviews</li>
              <li>Listings</li>
              <li>Marketing</li>
              <li>WebBoost</li>
              <li>Referrals</li>
              <li>Payments</li>
            </ul>
          </div>
          <div className="footer-section">
            <ul className="section-content">
              <li>WebChats</li>
              <li>Messaging</li>
              <li>Captain AI</li>
              <li>Feedback & Survey</li>
              <li>Competitions &</li>
              <li>Insights</li>
              <li>Customer Manager</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="section-title">Industry</h4>
            <ul className="section-content">
              <li>Healthcare</li>
              <li>Dental</li>
              <li>Home Services</li>
              <li>Retail</li>
              <li>Hospitality</li>
              <li>Automotive</li>
              <li>Restaurants</li>
              <li>Wellness</li>
              <li>Professional</li>
              <li>Professional Services</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="section-title">Partner</h4>
            <ul className="section-content">
              <li>Become a Partner</li>
            </ul>
            <br />
            <h4 className="section-title">Company</h4>
            <ul className="section-content">
              <li>Contact</li>
              <li>Careers</li>
              <li>Press</li>
              <li>Partners</li>
              <li>Legal</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="section-title">US Headquarters</h4>
            <ul className="section-content">
              <li>447 Broadway,</li>
              <li>2nd Floor,</li>
              <li>New York 10013</li>
            </ul>
            <br />
            <h4 className="section-title">India office</h4>
            <ul className="section-content">
              <li>1467 Janani HSR</li>
              <li>Layout Bengaluru</li>
              <li>Karnataka 560102</li>
            </ul>

            <h4 className="section-title">London office</h4>
            <ul className="section-content">
              <li>79 - 81 Borough Rd</li>
              <li>London England</li>
              <li>400706</li>
            </ul>

          </div>

        </footer>



      </div>


    </>
  );

}

export default HomePage;