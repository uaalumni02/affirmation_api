import Db from "../db/db";
import Affirmation from "../models/affirmation";

import validator from "../validator/affirmation";
import * as Response from "../helpers/response/response";

class AffirmationData {
  static async addAffirmation(req, res) {
    const AffirmationData = { ...req.body };
    try {
      const result = await validator.validateAsync(AffirmationData);
      if (!result.error) {
        const Affirmation = await Db.addAffirmation(Affirmation, AffirmationData);
        return Response.responseOkCreated(res, Affirmation);
      }
    } catch (error) {
      return Response.responseServerError(res);
    }
  }
  static async allAffirmations(req, res) {
    try {
      const allAffirmations = await Db.getAllAffirmations(Affirmation);
      return Response.responseOk(res, allAffirmations);
    } catch (error) {
      return Response.responseNotFound(res);
    }
  }
  static async getAffirmationById(req, res) {
    const { id } = req.params;
    try {
      const affirmationById = await Db.getAffirmationById(Affirmation, id);
      return Response.responseOk(res, affirmationById);
    } catch (error) {
      return Response.responseNotFound(res);
    }
  }

  //---------need to create edit 
}

export default AffirmationData;
