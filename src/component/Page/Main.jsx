import React from 'react';
import { Events } from '../main/Events';
import { Discount } from '../main/Discount';
import { About } from '../main/About';
import { Top } from '../main/Top';
import { Training } from '../main/Training';
import { Reviews } from '../main/Reviews';
import { PriceList } from '../main/Services/PriceList';
import { TechniquesSession } from '../main/Services/TechniquesSession';
import { Get } from '../main/Services/Get';
import { Request } from '../main/Services/Request';
import { Greeting } from '../main/Greeting';
export function Main() {
  return (
    <main className='main'>
      <Top />
      <Greeting />
      <Request />
      <About />
      <PriceList />
      <TechniquesSession />
      <Get />
      <Discount />
      <Events />
      <Training />
      <Reviews />
    </main>
  );
}
