import React from 'react';
import { Discount } from '../main/Discount';
import { Biodynamics } from '../main/Biodynamics';
import { Top } from '../main/Top';
import { Services } from '../main/Services/Services';

import { WorkingMethods } from '../main/Services/WorkingMethods';
import { GetWhite } from '../main/Services/GetWhite';
export function ServicesPage() {
  return (
    <main className='main'>
      {/* <Top /> */}
      <Services />
      <GetWhite />
      <WorkingMethods />
      <Biodynamics />
    </main>
  );
}
