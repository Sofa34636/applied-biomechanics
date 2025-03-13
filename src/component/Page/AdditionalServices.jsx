import React from 'react';
import { Events } from '../main/Events';
import { Discount } from '../main/Discount';
import { Biodynamics } from '../main/Biodynamics';

import { About } from '../main/About';
import { Top } from '../main/Top';
import { Services } from '../main/Services/Services';
import { Training } from '../main/Training';
import { Reviews } from '../main/Reviews';
import { Gallery } from '../main/Gallery';
export function AdditionalServices() {
  return (
    <main className='main'>
      <Top />
      <About />
      <Services />
      <Biodynamics />
      <Discount />
      <Events />
      <Training />
      <Reviews />
      <Gallery />
    </main>
  );
}
