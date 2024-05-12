import React, { useEffect, useState } from "react";
import styles from "./twinkling.module.css";
import Cart from "../card/Cart";

const Twinkling = () => {
  const [visibleIndex, setVisibleIndex] = useState(-1);
  const cartData = [
    {
      id: 1,
      title: "Exclusive Rights",
      imgUrl:
        "https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgreen.e71c8735.png&w=256&q=75",
      disc: `Our mission is to make an impact in empowering human society with AI.
Hence, all Intellectual Property Rights belongs to you.`,
    },
    {
      id: 2,
      title: "Research Driven",
      imgUrl:
        "https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblue.f22859fe.png&w=256&q=75",
      disc: `We regularly benchmark our solutions via comparing industry-vide
          evaluations so our partners only get the best that AI can offer.`,
    },
    {
      id: 3,
      title: "Plug-and-Play",
      imgUrl:
        "https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fred.a7efdb29.png&w=128&q=75",
      disc: `We provide AI-driven solutions into businesses where they can bring
          tangible value. Each solution is customized as per your needs and
          deployed on any computing device of your choice.`,
    },
    {
      id: 4,
      title: "Lifetime Support",
      imgUrl:
        "https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fyellow.d937d179.png&w=256&q=75",
      disc: `Should you face any issues, we are always at your service. We provide
          lifetime technical support & upgrade options.`,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex((prevIndex) =>
        prevIndex === cartData.length - 1 ? 0 : prevIndex + 1
      );
    }, 1000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [cartData.length]);

  return (
    <div className={styles.subContainer}>
      {cartData.map((elem, index) => (
        <Cart key={elem.id} elem={elem} visible={index === visibleIndex} />
      ))}
    </div>
  );
};

export default Twinkling;
