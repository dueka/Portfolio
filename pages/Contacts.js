export default function Contact() {
  return (
    <div className="contact-body">
      <div className="contact-container">
        <h1>Connect With Due</h1>
        <p>Would respond to your enquiries in a timely manner. </p>
        <div className="contact-box">
          <div className="contact-left">
            <h3>Send your request</h3>
            <form action="">
              <div className="input-row">
                <div className="input-group">
                  <label>Name</label>
                  <input type="text" placeholder="Hero" />
                </div>
                <div className="input-group">
                  <label>Phone</label>
                  <input type="text" placeholder="+" />
                </div>
              </div>

              <div className="input-row">
                <div className="input-group">
                  <label>Email</label>
                  <input type="email" placeholder="email" />
                </div>
                <div className="input-group">
                  <label>Subject</label>
                  <input type="text" placeholder="Project Request" />
                </div>
              </div>

              <label>Message</label>
              <textarea rows="5" placeholder="Your Message"></textarea>

              <button type="submit">Send</button>
            </form>
          </div>
          <div className="contact-right">
            <h3>Reach us</h3>

            <table>
              <tr>
                <td>Email</td>
                <td>ekanemd@live.com </td>
              </tr>
              <tr>
                <td>Phone</td>
                <td>+234 816 896 5269 </td>
              </tr>
              <tr>
                <td>Address</td>
                <td>Lagos, Nigeria </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
