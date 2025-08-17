import React from "react";
import './Terms&Conditions.css';

const Terms = () => {
   return (
      <div id="terms" className="terms">
         <h1 className="term-title"> Terms & Conditions </h1>
         <div className="term-content">

            <h2>1. Services Offered</h2><br />
            <p>
               We provide dry cleaning, laundry, and garment care services, including pick-up and delivery options (where applicable). Service availability may vary based on location.
            </p><br />

            <h2>2. Order Placement</h2>
            <div style={{ marginLeft: "30px" }}>
               <ul>
                  <li>To place an order, customers can use our website or mobile app.</li>
                  <li>You are responsible for providing accurate and complete information when placing an order.</li>
                  <li>We reserve the right to refuse service to anyone for any reason at any time.</li>
               </ul>
            </div><br />

            <h2>3. Garment Handling</h2><br />
            <div style={{ marginLeft: "30px" }}>
               <ul>
                  <li>We exercise utmost care while handling your garments, but we are not responsible for:</li>
                  <li style={{ marginLeft: "30px" }}>Pre-existing damage</li>
                  <li style={{ marginLeft: "30px" }}>Weak fabrics that may tear</li>
                  <li style={{ marginLeft: "30px" }}>Items left in pockets</li>
                  <li>Garments will be cleaned using methods deemed suitable by our experts unless otherwise specified.</li>
               </ul>
            </div><br />

            <h2>4. Pick-Up & Delivery</h2><br />
            <div style={{ marginLeft: "30px" }}>
               <ul>
                  <li>You must be available at the scheduled time for pick-up or delivery.</li>
                  <li>We are not liable for delays due to weather, traffic, or unforeseen circumstances.</li>
               </ul>
            </div><br />

            <h2>5. Payments</h2><br />
            <div style={{ marginLeft: "30px" }}>
               <ul>
                  <li>Prices are listed on our website and may vary based on item, fabric, or service.</li>
                  <li>Payments can be made online or at the time of delivery.</li>
                  <li>All prices are inclusive of applicable taxes unless stated otherwise.</li>
               </ul>
            </div><br />

            <h2>6. Cancellations and Refunds</h2><br />
            <div style={{ marginLeft: "30px" }}>
               <ul>
                  <li><b>👉</b> Any extra amount paid by customer for retail order can be refunded by the company if customer asks.</li>
                  <li><b>👉</b> Balance available in "Prepaid" plans are non-refundable and cannot be transferred to any other customer.</li>
                  <li><b>👉</b> User can cancel at any time before actual pick-up. No cancellation charges will be levied.</li>
                  <li><b>👉</b> In case service denies to process any article because of any reason, the order amount for that article will be refunded to retail customer or will be added to prepaid balance for prepaid plan customer.</li>
                  <li><b>👉</b> If customer wants to cancel the order because of any reason, then the request for cancellation has to be placed within 2 hr of pickup of articles.</li>
                  <li>Once order is punched and processed, order can't be cancelled.</li>
               </ul>
            </div><br />

            <h2>7. Coupons & Discounts:</h2><br />
            <div style={{ marginLeft: "30px" }}>
               <ul>
                  <li>No two or more discounts / coupons / offers can be clubbed together.</li>
               </ul>
            </div><br />

            <h2>8. Privacy Policy</h2><br />
            <div style={{ marginLeft: "30px" }}>
               <ul>
                  <li>We are committed to protecting your privacy and personal information.</li>
                  <li>We collect only the necessary information required to provide our services.</li>
                  <li>Your information will never be sold or shared with third parties without your consent.</li>
                  <li>We use industry-standard security measures to protect your data.</li>
                  <li>You have the right to access and delete your personal information at any time.</li>
               </ul>
            </div><br />

            <h2>9. Contact Information</h2><br />
            <p style={{ marginLeft: "30px" }}>
               For any queries or complaints, you can contact us at:<br />
               📞 [+91 <a href="tel:+919354202144" style={{ cursor: "pointer", textDecoration: "none" }}>9354202144</a>]<br />
               🏢 [Business Address : <a style={{ color: "blue" }}>Shop no. 044/FF AIPL Joy Street sec 66 Gurugram.</a>]
            </p><br />

         </div>
      </div>
   );
};

export default Terms;
