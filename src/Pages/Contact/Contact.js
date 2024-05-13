import './Contact.css';

function Contact() {
  return (
   <>
		<div class="container">
			<h2 class="sec_sub-txt">Contact Us</h2>
			<p class="menu_txt1">We consider all the drivers of change gives you the components you need to change to
				create a truly happens.</p>


			<div class="contact flex">
				<div class="form_input">
					<span class="form_txt">Name
					</span>
					<div class="form_input-in">
						<input class="input" type="text" placeholder="Enter your name">
					</div>
				</div>

				<div class="form_input">
					<span class="form_txt">Email
					</span>
					<div class="form_input-in">
						<input class="input" type="text" placeholder="Enter email address">
					</div>
				</div>



				<div class="form_input form_input__big">
					<span class="form_txt">Subject
					</span>
					<div class="form_input-in">
						<input class="input" type="text" placeholder="Write a subject">
					</div>
				</div>

				<div class="form_input form_input__big-2">
					<span class="form_txt">Message
					</span>
					<div class="form_input-in">
						<input class="input" type="text" placeholder="Write your message">
					</div>
				</div>

				<button class="btn btn__red">send</button>
			</div>
			</form>
		</div>
		</div>

	

	<section class="info">
		<div class="container">
			<div class="inform flex">
				<div class="call">
					<h4 class="call_tit">Call Us:</h4>
					<div class="call_a">
						<a href="https://t.me/@aldjan">+7(999)888-77-66</a>
					</div>
				</div>
				<div class="hours">
					<h4 class="hours_tit">Hours:</h4>
					<p class="hours_txt">Mon-Fri: 11am - 8pm Sat, Sun: 9am - 10pm</p>
				</div>
				<div class="Locations">
					<h4 class="loca">Our Location:</h4>
					<p class="loca_txt">123 Bridge Street Nowhere Land, LA 12345 United States</p>
				</div>
			</div>
		</div>
	</section> </>
  );
}

export default Contact;
