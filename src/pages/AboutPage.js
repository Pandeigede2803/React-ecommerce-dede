import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import toko from '../assets/toko.png'
const AboutPage = () => {
  return (
    <main>
      <PageHero title='about' />
      <Wrapper className='page section section-center'>
        <img src={toko} alt='nice desk' />
        <article>
          <div className='title'>
            <h2>Tentang Kami</h2>
            <div className='underline'></div>
          </div>
          <p>
           Berawal dari kebiasaan bandingin harga antar toko, lahirlah Cek Toko Sebelah di 1998. Hingga sekarang telah berkembang melayani 300 Kota di indonesia.
          </p>
        </article>
      </Wrapper>
    </main>
  )
}
const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
