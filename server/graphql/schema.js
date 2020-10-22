const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLID,
  GraphQLSchema
} = require("graphql");

const Event = require("../models/Event");

const EventType = new GraphQLObjectType({
  name: "Event",
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    body: { type: GraphQLString },
    date: { type: GraphQLString },
    time: { type: GraphQLString }
  })
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    event: {
      type: EventType,
      args: {
        id: {
          type: GraphQLID
        }
      },
      resolve(parent, args) {
        return Event.findById(args.id);
      }
    },
    events: {
      type: new GraphQLList(EventType),
      resolve(parent, args) {
        return Event.find({});
      }
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addEvent: {
      type: EventType,
      args: {
        title: { type: GraphQLString },
        body: { type: GraphQLString },
        date: { type: GraphQLString },
        time: { type: GraphQLString }
      },
      resolve(parent, args) {
        let event = new Event({
          title: args.title,
          body: args.body,
          date: args.date,
          time: args.time
        });

        return event.save();
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
