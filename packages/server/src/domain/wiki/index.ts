import _setupWikiApi from './wiki.api.js';
import _setupWikiCrud, {AbstractDB} from './wiki.crud.js';

const setupWikiApi = (database: AbstractDB) =>
  _setupWikiApi(_setupWikiCrud(database));
export default setupWikiApi;
