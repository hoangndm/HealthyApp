import {get} from '@utils/api';

export const fetchListDogs = async () =>
  get(
    'https://raw.githubusercontent.com/DevTides/DogsApi/master/dogs.json?fbclid=IwAR2t2iI6kc9_iK0zBXV__wxTSF4VCSPYkKDF5og-SI2eKlnxpplYDrqfgPI',
  );
