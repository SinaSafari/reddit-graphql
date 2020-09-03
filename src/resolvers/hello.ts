import { Resolver, Query } from "type-graphql";

@Resolver()
export class HelloResolver {
  @Query(() => Object)
  hello() {
    const routes = {
      posts: {
        Queries: {
          posts: "all posts (paginated)",
          post: "a single post by id"
        },
        Mutations: {
          vote: "vote up/down",
          createPost: "create a post",
          updatePost: "update a post",
          deletePost: "delete a post",
        }
      },
      users: {
        Queries: {
          me: "return logged in user info"
        },
        Mutations: {
          changePassword: "change password request",
          forgotPassword: "forget password request",
          register: "create a new user",
          login: "login by username/email and password",
          logout: "logut a user",
        }
      }
    }
    return routes;
  }
}
