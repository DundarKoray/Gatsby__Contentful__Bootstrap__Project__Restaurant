import React from 'react';
import Food from '../HomePageComponents/Food'
import { StaticQuery, graphql, Link } from 'gatsby'
import Section from '../globals/section/section'
import { SectionButton } from '../globals/button/Button'
import Title from '../globals/title/title'
import './foodList.css'

const GET_FOODLIST = graphql`{
    items: allContentfulFoodList {
   edges {
     node {
      dishName
      description
      price
      id
      image {
        fixed(width:300, height:300){
          ...GatsbyContentfulFixed_tracedSVG
        }
      }
     }
   }
 } 
}`

const FoodList = () => {
  return (
    <Section>
      <Title title="featured items" message="little taste" />
      <div className="food-list">
        <StaticQuery query={GET_FOODLIST} render={data => {
          const foods = data.items.edges
          return foods.map(item => {
            return <Food key={item.node.id} food={item.node} />
          })
        }} />
      </div>
    </Section>
  );
};

export default FoodList;