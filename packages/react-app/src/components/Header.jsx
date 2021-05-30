import { PageHeader } from "antd";
import React from "react";

// displays a page header

export default function Header() {
  return (
    <a href="https://github.com/boatcoin-hack" target="_blank" rel="noopener noreferrer">
      <PageHeader
        title="🚢 Boatcoin"
        subTitle="🖼 NFT example"
        style={{ cursor: "pointer" }}
      />
    </a>
  );
}
