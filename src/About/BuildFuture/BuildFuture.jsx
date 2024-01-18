import React from 'react'
import './BuildFuture.css'
import image from '../BuildFuture/img/bottom-part2.jpg'
const BuildFuture = () => {
  return (
    <main className='main-container'>
      <h1>Build Future</h1>
      <div className='main-details'>
        <img alt='image'></img>
        <div className='main-details-text'>
          <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque non expedita nisi inventore corporis odit fugiat nobis consequuntur. Qui vel est exercitationem fugiat autem ab id eligendi fugit aliquam tempore.</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, ex error possimus omnis dolores ducimus illo quasi sapiente commodi consectetur eaque blanditiis at cum aspernatur earum voluptatem culpa excepturi! Nam?</li>
        </div>
      </div>
      <h1>BUILD FUTURE</h1>

      <div className='main-details-2'>
        <ul>
          <img src={image} alt="image" />
          <img src={image} alt="image" />
          <img src={image} alt="image" />
        </ul>
        <ul className='details-list'>
          <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto harum esse officia accusamus, repellat suscipit. Aspernatur exercitationem nihil, possimus ipsam ullam minima aperiam quam fugit quasi! Cupiditate magnam hic eaque.</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure distinctio, modi ratione commodi doloribus, corporis exercitationem, earum sunt quasi possimus labore harum voluptas minus error porro quidem ducimus. Doloremque, sit.</li>
          <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo voluptatum modi repudiandae cupiditate sed nam. Fugit consequatur doloremque itaque, ducimus cum alias impedit quaerat ex obcaecati quae ratione id nemo.</li>
        </ul>
      </div>
    </main>
  )
}

export default BuildFuture
