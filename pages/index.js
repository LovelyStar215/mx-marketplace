import { useState, useEffect, useContext } from 'react';

import { Context } from '../context/Context';
import images from '../assets';
import CreatorCard from '../components/CreatorCard.jsx';
import NFTCard from '../components/NFTCard';

const Home = () => {
  const { fetchExistingMarketItem } = useContext(Context);
  const [nftItems, setNftItems] = useState([]);

  useEffect(() => {
    fetchExistingMarketItem().then((items) => {
      setNftItems(items);
    });
  }, []);

  return (
    <div className="flex flex-col justify-center w-full p-10 xs:p-6 minmd:px-60 pc:px-28">
      {/* banner */}
      <div className="py-10">
        <div className="flex items-center px-10 shadow-md prim-gradient h-72 sm:h-52 xs:h-48 rounded-3xl">
          <p className="overflow-hidden text-5xl font-bold text-white md:text-4xl sm:text-2xl xs:text-xl">
            Discover, collect, and sell extraordinary NFTs
          </p>
        </div>
      </div>

      {/* Creators */}
      <p className="mb-6 text-3xl font-bold dark:text-white text-prim-black-3">
        Top Creators
      </p>
      <div className="flex justify-between sm:justify-evenly">
        <div>
          <CreatorCard
            imageCard={images.creator1}
            number="1"
            name="Phat Luu"
            address="0x7p5r...8txn"
          />
        </div>
        <div className="xs:hidden">
          <CreatorCard
            imageCard={images.creator2}
            number="2"
            name="Quan Ngu"
            address="0xefv1...tjy5"
          />
        </div>
        <div className="sm:hidden">
          <CreatorCard
            imageCard={images.creator3}
            number="3"
            name="Tuan Mai"
            address="0xtdt3...nh0n"
          />
        </div>
        <div className="md:hidden">
          <CreatorCard
            imageCard={images.creator4}
            number="4"
            name="Huy Ngo"
            address="0xh2fg...asd7"
          />
        </div>
        <div className="md:hidden">
          <CreatorCard
            imageCard={images.creator5}
            number="5"
            name="Khiem Chau"
            address="0xqk8...bw9e"
          />
        </div>
      </div>

      <p className="my-6 text-3xl font-bold dark:text-white text-prim-black-3">
        Top NFTs
      </p>
      <div className="grid w-full grid-cols-1 mt-3 gap-x-20 gap-y-10 mobile:grid-cols-2 note:grid-cols-3 tablet:grid-cols-4 laptop:grid-cols-5 ">
        {nftItems.map((nft) => (
          <NFTCard key={nft.tokenId} nft={nft} />
        ))}
      </div>
    </div>
  );
};

export default Home;
