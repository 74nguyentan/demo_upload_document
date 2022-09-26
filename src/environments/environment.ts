import { IEnvironment } from './environment.interface';

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
export const environment: IEnvironment = {
  production: true,
  apiUrl: 'https://bdsapi.ditagis.com',
  map: {
    center: [16, 108],
    zoom: 5,
    minZoom: 5,
    maxZoom: 20,
  },
};
