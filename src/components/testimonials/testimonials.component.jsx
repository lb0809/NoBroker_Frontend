import "./testimonials.styles.css"

const Testimonials = () => {
    return (
        <>
            <h1 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: "700", fontSize: "50px", textAlign: "center", marginTop: "6vh" }}>Testimonials</h1>
            <div class="outerdiv">
                <div class="innerdiv">
                    <div class="div1 eachdiv">
                        <div class="userdetails">
                            <div class="imgbox">
                                <img className="testimonial_image" src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-daniel.jpg" alt="" />
                            </div>
                            <div class="detbox">
                                <p class="name">Daniel Clifford</p>
                                <p class="designation">Verified Graduate</p>
                            </div>
                        </div>
                        <div class="review">
                            {/* <h4>I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.</h4> */}
                            <p>My wife and I had a dream of downsizing from our house in Cape Elizabeth into a small condo closer to where we work and play in Portland. David and his skilled team helped make that dream a reality. The sale went smoothly, and we just closed on an ideal new place we're excited to call home. Nobody  knows Portland and the peninsula better than David. He really listens to clients and goes the extra mile with customer service, too.</p>
                        </div>
                    </div>
                    <div class="div2 eachdiv">
                        <div class="userdetails">
                            <div class="imgbox">
                                <img className="testimonial_image" src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-jonathan.jpg" alt="" />
                            </div>
                            <div class="detbox">
                                <p class="name">Jonathan Walters</p>
                                <p class="designation">Verified Graduate</p>
                            </div>
                        </div>
                        <div class="review">
                            <p>The sale went smoothly, and we just closed on an ideal new place we're excited to call home. Nobody  knows Portland and the peninsula better than David.</p>
                        </div>
                    </div>
                    <div class="div3 eachdiv">
                        <div class="userdetails">
                            <div class="imgbox">
                                <img className="testimonial_image" src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-kira.jpg" alt="" />
                            </div>
                            <div class="detbox">
                                <p class="name dark">Kira Whittle</p>
                                <p class="designation dark">Verified Graduate</p>
                            </div>
                        </div>
                        <div class="review dark">
                            <p>After working with David to sell my home in 2013, I was convinced that he’s the only realtor I’ll ever need. Since then, I’ve bought two properties and sold one, and with each process, David’s knowledge, professionalism and terrific instincts have consistently guided us through to excellent outcomes. It is truly a pleasure to work with David – I’ve found that he keeps his client’s best interests in sharp focus and you can always trust that he is on top of every detail, big and small, which brings great peace of mind in any real estate transaction.</p>
                        </div>
                    </div>
                    <div class="div4 eachdiv">
                        <div class="userdetails">
                            <div class="imgbox">
                                <img className="testimonial_image" src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-jeanette.jpg" alt="" />
                            </div>
                            <div class="detbox">
                                <p class="name dark">Jeanette Harmon</p>
                                <p class="designation dark">Verified Graduate</p>
                            </div>
                        </div>
                        <div class="review dark">
                            <p>"grateful to have been recommended the services of All About Real Estate. We were fortunate enough to have had Gabby, Teena and Tania all play a role in selling our first home promptly, professionally.</p>
                        </div>
                    </div>
                    <div class="div5 eachdiv">
                        <div class="userdetails">
                            <div class="imgbox">
                                <img className="testimonial_image" src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-patrick.jpg" alt="" />
                            </div>
                            <div class="detbox">
                                <p class="name">Patrick Abrams</p>
                                <p class="designation">Verified Graduate</p>
                            </div>
                        </div>
                        <div class="review">
                            <p>"There are no words to express my huge gratitude you to you and to Teena for the advice you provided and for being so accommodating and responsive to all the requests regarding the properties I viewed and particularly the property I bought. I appreciate the timeliness and the detail of replies to the queries, the tips on how to get the best deal, and the suggestions on how to turn a house into home. I was very nervous buying my first home, and you helped to make this journey seamless and exciting"</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div class="attribution">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a><br />
                Coded by <a href="https://www.instagram.com/developer_sah/" target="_blank">Rahul Sah</a>.
            </div> */}
        </>
    )
}

export default Testimonials