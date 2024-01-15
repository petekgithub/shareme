// Then import schema types from any plugins that might expose them
import pin from './pin'
import user from './user'
import comment from './comment'
import postedBy from './postedBy'
import save from './save'

export const schemaTypes = [user, pin, comment, save, postedBy]
