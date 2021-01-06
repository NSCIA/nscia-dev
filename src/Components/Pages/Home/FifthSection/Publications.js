import { ArrowRightOutlined } from "@ant-design/icons";
import React from "react";
import PubCard from "../../../Utils/PubCard";
import atSixty from "../../../../assets/image/atSixty.png";
import buhari from "../../../../assets/image/bubu.png";

function Publications() {
  const pubContent = {
    img: atSixty,
    pubTitle: "Nigeria at 60: The Imperative of Building a Nation Together",
    pubSubtitle: `Where are we coming from; where are we now; and where are we going? No
    nation on earth emerged by chance. They are built by men and women who
    were united in a shared vision of a future nation that guarantees
    their peoples welfare, security and happiness.`
  }
  const pubContent2 = {
    img: buhari,
    pubTitle: "CAMA: Unpacking the Extent of Islamophobia in Nigeria",
    pubSubtitle: `At the expense of jettisoning diplomacy and not being economic with the truth, the overwhelming controversy over the CAMA has again unearthed how deeply Islam and Muslims are hated in Nigeria. Immediately President Muhammadu Buhari assented to the Bill, the denizens of religious enterprise reacted in the most offensive terms directed at Islam.`
  }
  return (
    <div className="publications">
      <div className="pub-head">
        <h2 class="pub-title">Publications</h2>
        <div className="arrow-wrapper">
          <ArrowRightOutlined style={{ fontSize: '30px', color: '#ffffff' }} />
        </div>
      </div>
      <div className="pub-cards">
        <PubCard pubContent={pubContent} />
        <PubCard pubContent={pubContent2} />
        <PubCard pubContent={pubContent} />
      </div>
    </div>
  );
}

export default Publications;
