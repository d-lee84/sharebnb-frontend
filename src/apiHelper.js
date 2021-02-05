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

  /** Get listing by id*/
  static async getListingById(id) {
    let res = await this.request(`listings/${id}`);
    return res.listing;
  }

  /** Get a filtered list of listings */

  static async getListingsByTerm(searchTerm) {
    let res = await this.request(`listings/search?term=${searchTerm}`);
    return res.listings;
  }
  /** Get a filtered list of listings */

  static async addListing(data) {

    let formData = new FormData();

    console.log("data inside apiHelper", data);

    formData.append("photo", data.photoFile);

    delete data.photo;
    delete data.photoFile;

    for(let key in data) {
      formData.append(key, data[key]);
    }

    let res = await axios.post(`${BASE_URL}/listings`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          "Authorization": `Bearer ${ShareBnBApi.token}`
        }
    });

    return res.listing;
  }

  /** Create a new thread */
  static async createAThread(data) {
    let res = await this.request(`threads`, data, "post");
    return res.thread;
  }
  /** Create a new message */
  static async sendAMessage({ toId, fromId, content, threadId }) {
    let res = await this.request(`messages`, { toId, fromId, content, threadId }, "post");
    return res.message;
  }

  /** Get messages for a specific thread */
  static async getMessagesByThread(threadId) {
    let res = await this.request(`messages/${threadId}`);
    return res.messages;
  }

  /** Get incoming threads for host user */
  static async getThreadsForHost(userId) {
    let res = await this.request(`threads/host/${userId}`);
    return res.threads;
  }

  /** Get threads for guest user */
  static async getThreadsForGuest(userId) {
    let res = await this.request(`threads/guest/${userId}`);
    return res.threads;
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
