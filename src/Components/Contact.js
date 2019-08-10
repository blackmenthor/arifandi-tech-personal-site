import React, { Component } from 'react';

class Contact extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Get In Touch.</span></h1>

            </div>

            <div className="ten columns">

                  <p className="lead">{message} <a target='_blank' href='https://mail.google.com/mail/u/0/?view=cm&fs=1&to=anggadwiarifandi96@gmail.com&tf=1' className="submit">Right here!</a></p>

            </div>

         </div>
   </section>
    );
  }
}

export default Contact;
