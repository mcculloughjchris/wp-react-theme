import { combineReducers } from 'redux'

import siteInfo from '../ducks/siteInfo.js'
import posts from '../ducks/posts.js'
import pages from '../ducks/pages.js'

const rootReducer = combineReducers({
  siteInfo: siteInfo,
  posts: posts,
  pages: pages
})
export default rootReducer