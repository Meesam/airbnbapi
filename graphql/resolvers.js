const ListingAndReviewsModel = require("../models/ListingAndReviewsModel");

module.exports = {
  Query: {
    async getListingAndReviewsById(_, { ID }) {
      return await ListingAndReviewsModel.findById(ID);
    },

    async getAllListing(_, { page, limit }) {
      const options = {
        page: page || 1,
        limit: limit || 10,
      };

      console.log(options);

      try {
        let data = await ListingAndReviewsModel.paginate({}, options);
        return {
          listings: data.docs,
          paginator: {
            totalDocs: data.totalDocs,
            limit: data.limit,
            totalPages: data.totalPages,
            page: data.page,
            pagingCounter: data.pagingCounter,
            hasPrevPage: data.hasPrevPage,
            hasNextPage: data.hasNextPage,
            prevPage: data.prevPage,
            nextPage: data.nextPage,
          },
        };
      } catch (err) {
        console.error(err);
      }
    },
    async getAllListingByCountry(_, { country, page, limit }) {
      const options = {
        page: page || 1,
        limit: limit || 10,
      };
      try {
        let query = {};
        if (country) {
          query = { "address.country": country };
        }
        let data = await ListingAndReviewsModel.paginate(query, options);
        return {
          listings: data.docs,
          paginator: {
            totalDocs: data.totalDocs,
            limit: data.limit,
            totalPages: data.totalPages,
            page: data.page,
            pagingCounter: data.pagingCounter,
            hasPrevPage: data.hasPrevPage,
            hasNextPage: data.hasNextPage,
            prevPage: data.prevPage,
            nextPage: data.nextPage,
          },
        };
      } catch (err) {
        console.error(err);
      }
    },
  },
};
