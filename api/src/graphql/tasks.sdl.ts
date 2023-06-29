export const schema = gql`
  type Task {
    id: Int!
    name: String!
    completed: Boolean!
  }

  type Query {
    tasks: [Task!]! @skipAuth
    task(id: Int!): Task @skipAuth
  }

  input CreateTaskInput {
    name: String!
    completed: Boolean!
  }

  input UpdateTaskInput {
    name: String
    completed: Boolean
  }

  type Mutation {
    createTask(input: CreateTaskInput!): Task! @skipAuth
    updateTask(id: Int!, input: UpdateTaskInput!): Task! @skipAuth
    deleteTask(id: Int!): Task! @skipAuth
  }
`
