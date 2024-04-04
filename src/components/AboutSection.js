// components/AboutSection.js
export default function AboutSection() {
    return (
      <div className="bg-black text-white py-12 px-4">
        <div className="container mx-auto  gap-0 items-start"> {/* Reduced gap from 8 to 4 */}
          

          
          {/* Right Side */}
          <div className="pt-4">
            <h2 className="font-courier text-2xl font-bold mb-4">Heavenly Hearts, Ahoy!</h2>
            <p className="font-simpfxo text-base mb-4">
            $DIELA, the divine Goddess of Love, bringing a touch of love to the Solana Ecosystem!🩷
            </p>
            <h3 className="font-courier-bold text-xl font-bold">Bathing in the Glow</h3>
            <ul className="font-simpfxo text-base space-y-2">
  
  <li>• Armed with rose-tinted glasses and arrow-sharp tactics, $DIELA captures the hearts of bulls and jeets alike, weaving a tapestry of passion and profits.</li>
  
  <li>• The blissfully bullish token that dances through the market with the grace of a love-struck muse—where every trade is a serenade</li>

  <li>• They say love can't buy happiness, but with $DIELA, you might just find joy in the tender embrace of little degen gains</li>
  
</ul>

            <div className="space-y-2 mb-4">

              {/* NFT Address and additional content can be added here */}
            </div>
            <img src="https://i.ibb.co/x8Xw5Y2/pink-banner.gif" alt="Wen Logo" className="mx-auto mb-4"  />
          </div>
        </div>
      </div>
    );
  }
  