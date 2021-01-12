import btc from "../assets/img/coin/btc.png";
import eth from "../assets/img/coin/eth.png";
import aave from "../assets/img/coin/aave.png";
import ada from "../assets/img/coin/ada.png";
import bch from "../assets/img/coin/bch.png";
import bnb from "../assets/img/coin/bnb.png";
import bsv from "../assets/img/coin/bsv.png";
import cro from "../assets/img/coin/cro.png";
import dot from "../assets/img/coin/dot.png";
import eos from "../assets/img/coin/eos.png";
import link from "../assets/img/coin/link.png";
import ltc from "../assets/img/coin/ltc.png";
import mkr from "../assets/img/coin/mkr.png";
import neo from "../assets/img/coin/neo.png";
import snx from "../assets/img/coin/snx.png";
import theta from "../assets/img/coin/theta.png";
import trx from "../assets/img/coin/trx.png";
import usdc from "../assets/img/coin/usdc.png";
import usdt from "../assets/img/coin/usdt.png";
import vet from "../assets/img/coin/vet.png";
import wbtc from "../assets/img/coin/wbtc.png";
import xem from "../assets/img/coin/xem.png";
import xmr from "../assets/img/coin/xmr.png";
import xrp from "../assets/img/coin/xrp.png";
import xtz from "../assets/img/coin/xtz.png";
import xlm from "../assets/img/coin/xlm.png";
import logomark from "../assets/img/coin/logomark.png";

type CoinIconMapType = {
  [key: string]: string;
}

export const coinIconMap: CoinIconMapType = {
  BTC: btc,
  ETH: eth,
  XRP: xrp,
  AAVE: aave,
  ADA: ada,
  BCH: bch,
  BCB: bnb,
  BSV: bsv,
  CRO: cro,
  DOT: dot,
  EOS: eos,
  LINK: link,
  LTC: ltc,
  MKR: mkr,
  NEO: neo,
  SNX: snx,
  THETA: theta,
  TRX: trx,
  USDC: usdc,
  USDT: usdt,
  VET: vet,
  WBTC: wbtc,
  XEM: xem,
  XMR: xmr,
  XTZ: xtz,
  XLM: xlm,
};

export const getCoinIcon = (icon: string): string => coinIconMap[icon] || logomark;
