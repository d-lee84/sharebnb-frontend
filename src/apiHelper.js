import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class ShareBnBApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${ShareBnBApi.token}` };
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get the current user. */

  static async getCurrentUser(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }

  /** Get all listings */

  static async getAllListings() {
    let res = await this.request("listings");
    return res.listings;
  }

  /** Get a filtered list of listings */

  static async getListingsByTerm(searchTerm) {
    let res = await this.request(`listings/search?term=${searchTerm}`);
    return res.listings;
  }
  /** Get a filtered list of listings */

  static async addListing(formData) {
    let res = await this.request(`listings`, formData, "post");
    return res.listings;
  }


  /** Get token for login from username, password. */

  static async login(data) {
    let res = await this.request(`auth/token`, data, "post");
    return res.token;
  }

  /** Register for site. */

  static async register(data) {
    let res = await this.request(`auth/register`, data, "post");
    return res.token;
  }
}


export default ShareBnBApi;