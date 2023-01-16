import type Centre from './Centre';
import { fetchCentreList } from './CentreClient';

interface CentreRepository {
  getCentreList(): Promise<Centre[]>;
}


async function getCentreList(): Promise<Centre[]> {
  const centreListResponse = await fetchCentreList()
  return centreListResponse.data;
}

export default {
  getCentreList,
} as CentreRepository;
