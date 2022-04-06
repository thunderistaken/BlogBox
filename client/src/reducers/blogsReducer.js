import {
  FETCH_ALL,
  CREATE,
  DELETE,
  UPDATE,
} from "../constants/actionConstants";

export default (blogs = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
        return action.payload

    case CREATE:
        return [...blogs, action.payload]

    case DELETE:
        return  blogs.filter((blog)=> blog._id !== action.payload)

    case UPDATE:
         return blogs.map((blog)=>
            blog._id === action.payload._id ? action.payload : blog
         )
    
    default:
      return blogs
  }
};
