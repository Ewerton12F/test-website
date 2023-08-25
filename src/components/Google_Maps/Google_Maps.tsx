import React from 'react';

export default function Google_Maps() {
  return (
    <>
      <iframe
        className="w-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.1487385645983!2d-35.228420912395386!3d-5.834646981216447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b2557a255d1b0d%3A0x734af24859848839!2sOffice%20Tower%20Center!5e0!3m2!1sen!2sbr!4v1692909736877!5m2!1sen!2sbr"
        height="450"
        style={{ border: '0' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
}
