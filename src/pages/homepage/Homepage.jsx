import styles from "./homepage.module.css";
import { Link } from "react-router-dom";
import TrendingCard from "../../components/trendingCard/TrendingCard";
import ArtistCard from "../../components/artistcard/ArtistCard";
import { SiBluesound as Soundicon } from "react-icons/si";
import { FaXTwitter as Xicon } from "react-icons/fa6";
import { IoLogoInstagram as Igicon } from "react-icons/io5";
import img1 from '../../assets/sui-bears.png';
import img2 from '../../assets/sui-bears1.png';
import preview1 from '../../assets/MichaelJackson-SmoothCriminalLow.mp3';
import full1 from '../../assets/MichaelJackson-SmoothCriminalHigh.mp3';
import preview2 from '../../assets/MichaelJackson-SmoothCriminalLow.mp3';
import full2 from '../../assets/MichaelJackson-SmoothCriminalHigh.mp3';

import MarketPlace from "../MarketPlace/MarketPlace";
import {CompactMusicPlayer} from "../../components/musicplayer/MusicPlayer"
import NFTCard from "../../components/NftCard/NftCard";

const Homepage = () => {

  const nfts = [
      {
        id: 1,
        image: img1,
        title: "Sui Vibes #1",
        artist: "DJ Crypto",
        price: 2.5,
        isOwned: false,
        previewAudio: preview1,
        fullAudio: full1,
      },
      {
        id: 2,
        image: img2,
        title: "Lofi NFT",
        artist: "BeatMakerX",
        price: 1.2,
        isOwned: true,
        previewAudio: preview2,
        fullAudio: full2,
      },
      {
        id: 3,
        image: img1,
        title: "Sui Vibes #1",
        artist: "DJ Crypto",
        price: 2.5,
        isOwned: false,
        previewAudio: preview1,
        fullAudio: full1,
      },
    ]

  return (
    <div className={styles.body}>
      <header></header>

      <main className={styles.mainBody}>
        <div className={styles.trendingContainer}>
          <h2>Trending Now</h2>
          <div className={styles.nftGrid}>
            {nfts.map((nft) => (
              <NFTCard
                key={nft.id}
                {...nft}
                onClick={() => handleCardClick(nft.id)}
                onBuy={() => handleBuyClick(nft)}
              />
            ))}
          </div>
        </div>

        <ArtistCard />
      </main>

      <footer className={styles.footer}>
        <div class={styles.footerWrap}>
          <div>
            Enjoy your Sound
            <p>&copy; 2025 - SuiTunes Music Catalog</p>
          </div>

          <div className={styles.footerLhs}>
            <a href="#" target="_blank">
              <button>Help</button>
            </a>

            <a href="#" target="_blank">
              <button>Feedback</button>
            </a>

            <Xicon className={styles.footerIcon} />
            <Igicon className={styles.footerIcon} />
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Homepage;
