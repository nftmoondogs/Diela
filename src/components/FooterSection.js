// components/FooterSection.js
import React from 'react';

const FooterSection = () => {
  return (
    <footer id="foundation" className="bg-black text-white py-12 px-4">
      <div className="container mx-auto text-center">
        {/* Logo and title */}
        <div className="mb-6">
          <img src="https://i.ibb.co/b13dvds/PINK-LOGO-GIF.gif" alt="Wen Logo" className="mx-auto mb-4" style={{ height: '80px' }} />
          <h2 className="font-courier-bold text-2xl">$DIELA Token</h2>
        </div>
        
        {/* Description */}
        <p className="font-simpfxo mx-auto leading-relaxed max-w-2xl">
        Dear Degens of the Solana,

Have you felt a little more adored lately? That's the magic of $DIELA, the Goddess of Love token, spreading affection across the Solana. When you trade $DIELA, it's like sending a love letter to your portfolio – sealed with a cryptic-kiss! Forget the volatility blues; with $DIELA, every dip is just Cupid's arrow aiming for our heartstrings. So let's lock arms in a love circle around the moon, because with $DIELA, it's not just a sol token, it's a match made in Solana heaven!
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
