const { gql } = require("apollo-server");

module.exports = gql`
  type Images {
    thumbnail_url: String
    medium_url: String
    picture_url: String
    xl_picture_url: String
  }

  type Host {
    host_id: String
    host_url: String
    host_name: String
    host_location: String
    host_about: String
    host_response_time: String
    host_thumbnail_url: String
    host_picture_url: String
    host_response_rate: Int
    host_is_superhost: Boolean
    host_has_profile_pic: Boolean
    host_identity_verified: Boolean
    host_listings_count: Int
    host_total_listings_count: Int
    host_verifications: [String]
  }

  type Location {
    type: String
    is_location_exact: Boolean
    coordinates: [String]
  }

  type Address {
    street: String
    suburb: String
    government_area: String
    market: String
    country: String
    country_code: String
    location: Location
  }

  type ReviewScore {
    review_scores_accuracy: Int
    review_scores_cleanliness: Int
    review_scores_checkin: Int
    review_scores_communication: Int
    review_scores_location: Int
    review_scores_value: Int
    review_scores_rating: Int
  }

  type Review {
    _id: String
    date: String
    listing_id: String
    reviewer_id: String
    reviewer_name: String
    comments: String
  }

  type ListingAndReview {
    _id: String
    listing_url: String
    summary: String
    space: String
    description: String
    neighborhood_overview: String
    transit: String
    house_rules: String
    property_type: String
    room_type: String
    bed_type: String
    minimum_nights: String
    maximum_nights: String
    cancellation_policy: String
    number_of_reviews: Int
    bathrooms: Int
    amenities: [String]
    price: Int
    guests_included: Int
    images: Images
    host: Host
    address: Address
    review_scores: ReviewScore
    reviews: [Review]
    accommodates: Int
    bedrooms: Int
    beds: Int
  }

  type Paginator {
    totalDocs: Int
    limit: Int
    hasPrevPage: Boolean
    hasNextPage: Boolean
    page: Int
    totalPages: Int
    offset: Int
    prevPage: Int
    nextPage: Int
    pagingCounter: Int
  }

  type ListingAndReviewPaginator {
    listings: [ListingAndReview!]
    paginator: Paginator
  }

  type Query {
    getListingAndReviewsById(ID: ID!): ListingAndReview!
    getAllListing(page: Int, limit: Int): ListingAndReviewPaginator!
    getAllListingByCountry(
      country: String
      page: Int
      limit: Int
    ): ListingAndReviewPaginator!
  }
`;
