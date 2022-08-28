import database from '../../global/databaseReader.js';

import setupWikiApi from './wiki.api.js';
import setupWikiCrud from './wiki.crud.js';

const wikiCrud = setupWikiCrud(database);
const wikiApi = setupWikiApi(wikiCrud);
export default wikiApi;
