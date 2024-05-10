import './Delivery.css';
import Title from '../../Components/Title/Title';
import video from '../../img/video.mp4'

function Delivery() {
  return (
    <section className="Delivery">
      <Title>Delivery</Title>
      <div className="Delivery_video">
      <video width="100%" height="auto" controls autoPlay muted>
        <source src={video} type="video/mp4" />
      </video>
      </div>
      <div className="Delivery_txt">
        <p>We use your IP address or browser to approximate your location. This information is discarded at the end of your session or in accordance with your browser settings.</p>
        <p>AT&T iPhone 15 Special Deal: Monthly price reflects net monthly payment, after application of AT&T trade-in credit applied over 36 months with purchase of an iPhone 15 Pro, iPhone 15 Pro Max, iPhone 15, or iPhone 15 Plus and trade-in of eligible smartphone. Receive credit with purchase of an iPhone 15 Pro or iPhone 15 Pro Max of either $1000, $700, or $350 (based upon the model and condition of your trade-in smartphone). Receive credit with purchase of an iPhone 15 or iPhone 15 Plus of either $700 or $350 (based upon the model and condition of your trade-in smartphone). Max bill credits will not exceed the cost of the device. Requires upgrade of an existing line or activation of a new line and purchase of a new iPhone 15 Pro, iPhone 15 Pro Max, iPhone 15, or iPhone 15 Plus on qualifying 36 month 0% APR installment plan, subject to carrier credit qualification. AT&T Installment Plan with Next Up is not eligible for this promotion. $0 down for well qualified customers only, or down payment may be required and depends on a variety of factors. Tax on full retail price due at sale. Requires activation on eligible unlimited plan. If you cancel eligible wireless service, credits will stop and you will owe the remaining device balance. Activation/Upgrade Fee: $35. Trade in device may not be on existing installment plan. Bill credits are applied as a monthly credit over the 36 month installment plan. Credits start within 3 bills. Will receive catchup credits once credits start. Wireless line must be on an installment agreement, active, and in good standing for 30 days to qualify. Installment agreement starts when device is shipped. To get all credits, device must remain on agreement for entire term and you must keep eligible service on device for entire installment term. Limited time offer; subject to change. Limits: one trade-in per qualifying purchase and one credit per line. May not be combinable with other offers, discounts, or credits. Purchase, financing, other limits, and restrictions apply. Price for iPhone 15 and iPhone 15 Plus includes $30 AT&T connectivity discount. Activation required.</p>
        <p>T-Mobile iPhone 15 Special Deal: Monthly price reflects net monthly payment, after application of T-Mobile trade-in credit applied over 24 months with purchase of an iPhone 15 Pro, iPhone 15 Pro Max, iPhone 15, or iPhone 15 Plus and trade-in of eligible smartphone. Receive credit with purchase of an iPhone 15, iPhone 15 Plus, iPhone 15 Pro, or iPhone 15 Pro Max of $800 or $400 for customers on a Go5G Plus plan (based upon the model and condition of your trade-in smartphone); or $300 or $150 for customers on a Go5G, TMO ONE, TMO ONE Plus, Magenta, Magenta MAX, or Magenta Plus plan (based upon the model and condition of your trade-in smartphone). Max bill credits will not exceed the cost of the device. Credit comprised of (i) Apple instant trade-in credit at checkout and (ii) T-Mobile monthly bill credits applied over 24 months. Allow 2 bill cycles from valid submission and validation of trade-in. Tax on pre-credit price due at sale. Limited-time offer; subject to change. Qualifying credit, data plan, and trade-in in good condition required. Max 4 promotional offers on any iPhone per account. May not be combinable with some offers or discounts. Price for iPhone 15 and iPhone 15 Plus includes $30 T-Mobile connectivity discount. Activation required. Contact T-Mobile before cancelling service to continue remaining bill credits on current device, or credits stop & balance on required finance agreement is due.</p>
        <p>Verizon iPhone 15 Special Deal: Monthly price reflects net monthly payment, after application of Verizon trade-in credit applied over 36 months with purchase of an iPhone 15 Pro, iPhone 15 Pro Max, iPhone 15, or iPhone 15 Plus. Receive credit with purchase of an iPhone 15, iPhone 15 Plus, iPhone 15 Pro, or iPhone 15 Pro Max of $830 or $415 for customers on an Unlimited Ultimate, One Unlimited, or 5G Get More plan (based upon the model and condition of your trade-in smartphone); or $415 or $200 for customers on an Unlimited Plus, 5G Do More, or 5G Play More plan (based upon the model and condition of your trade-in smartphone). Max bill credits will not exceed the cost of the device. Must be an existing Verizon customer. Credit comprised of (i) Apple instant trade-in credit at checkout and (ii) Verizon monthly bill credits applied over 36 months. Customer must remain in the Verizon Device Payment Program for 36 months to receive the full benefit of the Verizon bill credits. Bill credits may take 1-2 bill cycles to appear. If it takes two cycles for bill credits to appear, you'll see the credit for the first cycle on your second bill in addition to that month's credit. Requires purchase and activation of a new iPhone 15 Pro, iPhone 15 Pro Max, iPhone 15, or iPhone 15 Plus with the Verizon Device Payment Program at 0% APR for 36 months, subject to carrier credit qualification, and iPhone availability and limits. Taxes and shipping not included in monthly price. Sales tax may be assessed on full value of new iPhone. Requires eligible unlimited service plan. Requires trade-in of eligible device in eligible condition. Must be at least 18 to trade-in. Apple or its trade-in partners reserve the right to refuse or limit any trade-in transaction for any reason. In-store trade-in requires presentation of a valid, government-issued photo ID (local law may require saving this information). In-store promotion availability subject to local law; speak to a Specialist to learn more. Limited-time offer; subject to change. Additional terms from Apple, Verizon, and Apple's trade-in partners may apply. Price for iPhone 15 and iPhone 15 Plus includes $30 Verizon connectivity discount. Activation required.</p>
      </div>
    </section>
  );
}

export default Delivery;