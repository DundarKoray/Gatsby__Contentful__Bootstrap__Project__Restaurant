import React from 'react';
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Section from '../globals/section/section'
import './gallery.css'

const GET_IMAGES = graphql`
{
    getImages: allFile(filter:{relativeDirectory:{eq:"homeGallery"}}) {
      edges {
        node {
          childImageSharp{
            fluid(maxWidth:500) {
                ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
      
    }
  }
`

// const foods = ['awesome pizza', 'awesome pork', 'awesome steak']


const Gallery = () => {
    return (
        <StaticQuery 
          query={GET_IMAGES} 
          render={data => {
              const images = data.getImages.edges
              console.log(images)
              return (
                <Section>
                    <div className="gallery-wrapper">
                        {images.map((item, index) => {
                            return (
                                <div key={index} className={`item item-${index + 1}`}>
                                    <Img  fluid={item.node.childImageSharp.fluid} />
                                    <p className="info">Popular Dishes</p>
                                </div>
                            )
                        })}
                    </div>
                </Section>
                
              )
            }
          } 
        />
    );

    
};



export default Gallery;