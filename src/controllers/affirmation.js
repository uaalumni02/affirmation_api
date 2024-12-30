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
        const AffirmationInfo = await Db.addAffirmation(
          Affirmation,
          AffirmationData
        );
        return Response.responseOkCreated(res, AffirmationInfo);
      }
    } catch (error) {
      console.log(error);
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

  static async getAffirmationByUser(req, res) {
    const { userName } = req.params;
    try {
      const affirmationByUserName = await Db.getAffirmationByUserName(
        Affirmation,
        userName
      );
      return Response.responseOk(res, affirmationByUserName);
    } catch (error) {
      return Response.responseNotFound(res);
    }
  }

  static async editAffirmation(req, res) {
    const affirmationId = req.params.id;
    const affirmationData = { ...req.body };

    const { affirmation, userName, category, isFavorite } = req.body;
    const updateAffirmation = {
      affirmation,
      userName,
      category,
      isFavorite,
    };
    try {
      const result = await validator.validateAsync(updateAffirmation);
      if (!result.error) {
        const affirmationToUpdate = await Db.editAffirmationData(
          Affirmation,

          affirmationId,
          affirmationData
        );
        return Response.responseOk(res, affirmationToUpdate);
      }
    } catch (error) {
      return Response.responseServerError(res);
    }
  }
  static async deleteAffirmation(req, res) {
    const { id } = req.params;
    try {
      const affirmationToDelete = await Db.removeAffirmation(Affirmation, id);
      return Response.responseOk(res, affirmationToDelete);
    } catch (error) {
      return Response.responseServerError(res);
    }
  }
}

export default AffirmationData;
