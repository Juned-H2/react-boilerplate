import React from 'react';
import { ethers } from 'ethers';

const provider = new ethers.providers.JsonRpcProvider('https://empty-spring-paper.bsc.quiknode.pro/510961435d45eb06199e2210cdec1efb9a3d8623/');
const ABI = ['function getAmountsOut(uint amountIn, address[] calldata path) external view returns (uint[] memory amounts)'];
const pancakeRouterAddress = '0x10ED43C718714eb63d5aA57B78B54704E256024E';
const pancakeRouter = new ethers.Contract(pancakeRouterAddress, ABI, provider);

class Home extends React.Component {
    state = {
        test: 1
    }
    getLivePrice = (e) => {
        e.preventDefault();
        console.log('wtf')
    
    }
    render() {
        return (
        <div>
        <h2>Livecoin.pro</h2>
        <p>Get the latest price of any token on Binance Smart Chain</p>
        <form onSubmit={this.getLivePrice}>
        <input type="text" placeholder="enter token address..."/>
        <button>Paste + Ping</button>
        </form>
        <p>Ping'd 33 seconds ago</p>
        </div>s
     );
  }
}

export default Home;