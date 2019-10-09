import React from 'react';
import Food from '../HomePageComponents/Food'
import { StaticQuery, graphql, Link } from 'gatsby'
import Section from '../globals/section/section'
import { SectionButton } from '../globals/button/Button'
import Title from '../globals/title/title'

const GET_FOODLIST = graphql`{
    items: allContentfulFoodList {
   edges {
     node {
      dishName
      description
			price
      
     }
   }
 } 
}`

const FoodList = () => {
  return (
    <Section>
      <Title title="featured items" message="little taste" />
      <div className="food-list">
        <StaticQuery query={GET_FOODLIST} render={
          data => console.log(data)
        } />
      </div>
    </Section>
  );
};

export default FoodList;