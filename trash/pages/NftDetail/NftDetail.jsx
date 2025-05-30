import { useState } from "react";
import styles from "./NftDetail.module.css";
import BuyNFTModal from "../../../trash/BuyNftModal/BuyNftModal";
import NftDetailCard from "../../../trash/NftDetailCard/NftDetailCard";
import { CompactMusicPlayer } from../../../trash/musicplayer/MusicPlayerer";
import { useLocation } from "react-router-dom";

const NftDetail = () => {
  const location = useLocation();
  const nft = location.state;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.nftDetailcontainer}>
      <NftDetailCard nft={nft} onBuy={openModal} />
      <CompactMusicPlayer nft={nft} />
      {isModalOpen && <BuyNFTModal nft={nft} onClose={closeModal} />}
    </div>
  );
};

export default NftDetail;
