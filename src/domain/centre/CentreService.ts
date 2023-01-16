import Centre from './Centre';
import CentreRepository from './CentreRepository';


interface CentreService {
  getCentreList: () => Promise<Centre[]>;
}


async function getCentreList() {
  const response = await CentreRepository.getCentreList();
  return response;
}


export default {
  getCentreList,
} as CentreService;
