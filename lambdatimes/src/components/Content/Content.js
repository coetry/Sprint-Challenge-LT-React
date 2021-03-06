import React, { Component } from 'react';

import Tabs from './Tabs';
import Cards from './Cards';

// Importing our tab and card data. No need to change anything here.
import { tabData, cardData } from '../../data';

export default class Content extends Component {
  constructor(props){
    super(props);
    this.state = {
      // Set this to an initial value
      selected: 'all',
      tabs: [],
      cards: []
    }
  }

  componentDidMount(){
    // Once the component has mounted, get the data and reflect that data on the state
    this.setState({tabs: tabData, cards: cardData})
  }

  changeSelected = (tab) => {
    console.log("changeSelected:", tab)
    this.setState({selected: tab})
    console.log("selected tab:", this.state.selected)
    this.filterCards()
  }

  /* Complete this function, if the selected tab is 'all' it should return all 
     of the items from cardData. If it is something else, it shoudl only return 
     those cards whose 'tab' mached that which is selected. */
  filterCards = () => {
    const {selected, cards} = this.state
    if(selected === 'all') {
      return cards
    }
    return cards.filter(card => card.tab === selected )
  }

  render(){
    const {tabs, selected} = this.state
    return (
      <div className="content-container">
        {/* 
          Add 2 props to the Tabs component, 
          `selectedTab` that includes the currently selected tab
          and `selectTabHandler` that includes the function to change the selected tab
        */}
        <Tabs tabs={tabs} 
              selected={selected} 
              selectTabHandler={this.changeSelected}
        />
        <Cards cards={this.filterCards()}/>
      </div>
    )
  }
}