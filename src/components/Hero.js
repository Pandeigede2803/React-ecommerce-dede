import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import denim from '../assets/denim.png'
import hoodie from '../assets/hoodie.png'
const Hero = () => {
  return (
    <Wrapper className='section-center'>
      <article className='content'>
        <h1>
          Cek Toko Sebelah <br />
          Murah Aman Asli
        </h1> 
        <p>
          Belanja fashion sehari-hari disini pasti murah, aman dan asli. Cek toko sebelah tersedia di kota-kota besar indonesia.
        </p>
        <Link to='/products' className='btn hero-btn'>
          Belanja
        </Link>
      </article>
      <article className='img-container'>
        <img src={denim} alt='denim' className='main-img' />
        <img src={hoodie} alt='hoodie shirt' className='accent-img' />
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;

  .img-container {
    display:inline-block;
    margin-top:20px
  }

  h1 {
    font-family: 'Your Preferred Font',; /* Set your preferred font */
    display: block;
    font-size: 3em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 450px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
      margin-bottom:5px
    }
    .accent-img {
      position: absolute;
      bottom: 0px;
      left: 0px;
      width: 250px;
      height: auto;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
    .img-container::before {
      content: '';
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--clr-primary-9);
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
    }
  }
`

export default Hero
